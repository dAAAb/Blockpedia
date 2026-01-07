/**
 * GA4 Traffic Analysis Script
 * 分析 0x1 Academy (Blockpedia) 2023-2025 流量異常
 *
 * 使用方式:
 *   node ga4-traffic-analysis.js
 *   node ga4-traffic-analysis.js --daily    # 每日數據
 *   node ga4-traffic-analysis.js --monthly  # 每月數據 (預設)
 */

const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const path = require('path');

// GA4 Property ID for 0x1 Academy (GitBook)
const PROPERTY_ID = '385104224';

// 憑證路徑
const CREDENTIALS_PATH = path.join(__dirname, 'ga4-credentials.json');

// 設定環境變數讓 Google 客戶端讀取憑證
process.env.GOOGLE_APPLICATION_CREDENTIALS = CREDENTIALS_PATH;

// 初始化 GA4 Data API 客戶端
const analyticsDataClient = new BetaAnalyticsDataClient();

/**
 * 取得流量數據
 */
async function getTrafficData(startDate, endDate, dimension = 'month') {
  const dateDimension = dimension === 'daily' ? 'date' : 'yearMonth';

  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: dateDimension }],
    metrics: [
      { name: 'activeUsers' },
      { name: 'sessions' },
      { name: 'screenPageViews' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' },
    ],
    orderBys: [{ dimension: { dimensionName: dateDimension } }],
  });

  return response;
}

/**
 * 取得流量來源數據
 */
async function getTrafficSources(startDate, endDate) {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [
      { name: 'sessionSource' },
      { name: 'sessionMedium' },
    ],
    metrics: [
      { name: 'sessions' },
      { name: 'activeUsers' },
    ],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 20,
  });

  return response;
}

/**
 * 取得熱門頁面
 */
async function getTopPages(startDate, endDate) {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [
      { name: 'screenPageViews' },
      { name: 'activeUsers' },
    ],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 20,
  });

  return response;
}

/**
 * 分析流量異常
 */
function analyzeAnomalies(data, dimension) {
  const rows = data.rows || [];
  if (rows.length < 3) return [];

  const values = rows.map(row => ({
    period: row.dimensionValues[0].value,
    users: parseInt(row.metricValues[0].value),
    sessions: parseInt(row.metricValues[1].value),
    pageViews: parseInt(row.metricValues[2].value),
  }));

  // 計算平均值和標準差
  const avgUsers = values.reduce((sum, v) => sum + v.users, 0) / values.length;
  const stdUsers = Math.sqrt(
    values.reduce((sum, v) => sum + Math.pow(v.users - avgUsers, 2), 0) / values.length
  );

  const anomalies = [];

  for (let i = 1; i < values.length; i++) {
    const curr = values[i];
    const prev = values[i - 1];

    // 檢查急劇變化 (超過 2 倍標準差或 300% 變化)
    const changePercent = prev.users > 0 ? ((curr.users - prev.users) / prev.users) * 100 : 0;
    const zScore = stdUsers > 0 ? (curr.users - avgUsers) / stdUsers : 0;

    if (Math.abs(changePercent) > 200 || Math.abs(zScore) > 2) {
      anomalies.push({
        period: curr.period,
        previousPeriod: prev.period,
        users: curr.users,
        previousUsers: prev.users,
        changePercent: changePercent.toFixed(1),
        zScore: zScore.toFixed(2),
        type: changePercent > 0 ? 'SPIKE' : 'DROP',
      });
    }
  }

  return anomalies;
}

/**
 * 格式化輸出
 */
function formatReport(trafficData, sources, topPages, anomalies, dimension) {
  const dimLabel = dimension === 'daily' ? '日期' : '年月';

  console.log('\n' + '='.repeat(60));
  console.log('  0x1 Academy (Blockpedia) GA4 流量分析報告');
  console.log('='.repeat(60));

  // 流量總覽
  console.log('\n📊 流量總覽 (依' + dimLabel + ')');
  console.log('-'.repeat(60));
  console.log(`${'時間'.padEnd(12)}${'活躍用戶'.padStart(12)}${'工作階段'.padStart(12)}${'瀏覽量'.padStart(12)}`);
  console.log('-'.repeat(60));

  const rows = trafficData.rows || [];
  rows.forEach(row => {
    const period = row.dimensionValues[0].value;
    const users = row.metricValues[0].value;
    const sessions = row.metricValues[1].value;
    const pageViews = row.metricValues[2].value;
    console.log(`${period.padEnd(12)}${users.padStart(12)}${sessions.padStart(12)}${pageViews.padStart(12)}`);
  });

  // 異常檢測
  if (anomalies.length > 0) {
    console.log('\n⚠️  流量異常檢測');
    console.log('-'.repeat(60));
    anomalies.forEach(a => {
      const icon = a.type === 'SPIKE' ? '📈' : '📉';
      console.log(`${icon} ${a.period}: ${a.previousUsers} → ${a.users} (${a.changePercent}%, Z-score: ${a.zScore})`);
    });
  } else {
    console.log('\n✅ 未檢測到顯著流量異常');
  }

  // 流量來源
  console.log('\n🌐 主要流量來源');
  console.log('-'.repeat(60));
  const sourceRows = sources.rows || [];
  sourceRows.slice(0, 10).forEach(row => {
    const source = row.dimensionValues[0].value || '(direct)';
    const medium = row.dimensionValues[1].value || '(none)';
    const sessions = row.metricValues[0].value;
    console.log(`  ${source} / ${medium}: ${sessions} sessions`);
  });

  // 熱門頁面
  console.log('\n📄 熱門頁面 (Top 10)');
  console.log('-'.repeat(60));
  const pageRows = topPages.rows || [];
  pageRows.slice(0, 10).forEach((row, i) => {
    const page = row.dimensionValues[0].value;
    const views = row.metricValues[0].value;
    console.log(`  ${i + 1}. ${page.substring(0, 45).padEnd(45)} ${views} views`);
  });

  console.log('\n' + '='.repeat(60));
}

/**
 * 主程式
 */
async function main() {
  const args = process.argv.slice(2);
  const dimension = args.includes('--daily') ? 'daily' : 'monthly';

  console.log('🔄 正在連接 GA4 API...');
  console.log(`   Property ID: ${PROPERTY_ID}`);
  console.log(`   分析維度: ${dimension === 'daily' ? '每日' : '每月'}`);

  try {
    // 分析 2023-2025 數據
    const startDate = '2023-01-01';
    const endDate = '2025-12-31';

    console.log(`   時間範圍: ${startDate} ~ ${endDate}`);
    console.log('');

    // 並行取得數據
    const [trafficData, sources, topPages] = await Promise.all([
      getTrafficData(startDate, endDate, dimension),
      getTrafficSources(startDate, endDate),
      getTopPages(startDate, endDate),
    ]);

    // 分析異常
    const anomalies = analyzeAnomalies(trafficData, dimension);

    // 輸出報告
    formatReport(trafficData, sources, topPages, anomalies, dimension);

    // 輸出 JSON 供進一步分析
    if (args.includes('--json')) {
      const jsonOutput = {
        propertyId: PROPERTY_ID,
        dateRange: { startDate, endDate },
        dimension,
        trafficData: trafficData.rows?.map(row => ({
          period: row.dimensionValues[0].value,
          activeUsers: parseInt(row.metricValues[0].value),
          sessions: parseInt(row.metricValues[1].value),
          pageViews: parseInt(row.metricValues[2].value),
          bounceRate: parseFloat(row.metricValues[3].value),
          avgSessionDuration: parseFloat(row.metricValues[4].value),
        })),
        anomalies,
        topSources: sources.rows?.slice(0, 10).map(row => ({
          source: row.dimensionValues[0].value,
          medium: row.dimensionValues[1].value,
          sessions: parseInt(row.metricValues[0].value),
        })),
      };

      const fs = require('fs');
      const outputPath = path.join(__dirname, 'ga4-analysis-result.json');
      fs.writeFileSync(outputPath, JSON.stringify(jsonOutput, null, 2));
      console.log(`\n📁 JSON 結果已儲存至: ${outputPath}`);
    }

  } catch (error) {
    console.error('\n❌ 錯誤:', error.message);

    if (error.message.includes('PERMISSION_DENIED')) {
      console.error('\n可能原因:');
      console.error('  1. Service Account 尚未被加入 GA4 資源存取權限');
      console.error('  2. Property ID 不正確');
      console.error('  3. 憑證檔案路徑錯誤');
    }

    process.exit(1);
  }
}

main();
