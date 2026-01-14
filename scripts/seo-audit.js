#!/usr/bin/env node
/**
 * Blockpedia SEO 審計腳本
 *
 * 功能：掃描所有頁面，生成 SEO 健康報告
 *
 * 使用方式：
 *   node scripts/seo-audit.js
 *   node scripts/seo-audit.js --output report.md  # 輸出到檔案
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// ============ 配置 ============

const CONFIG = {
  rootDir: path.resolve(__dirname, '..'),
  includeDirs: [
    '',  // 根目錄
    'token',
    'wallet',
    'defi',
    'nft-collectibles',
    'smart-contract',
    'blockchain-dev',
    'blockchain-security',
    'jiao-yi-suo',
    'wa',
    'consensus',
    'layer2',
    'chains',
    'dao',
    'metaverse',
    'blockchain-apps',
    'ai-web3',
    'prediction-markets',
    'cbdc',
    'rwa',
    'depin',
    'regulation',
    'payments',
    'stablecoin',
    'scams',
    'ming-ren',
    'untitled',
    'cold-wallet',
    'fork',
    'tong',
    'usdt',
    'wei',
    'mi-yin',
    'shang',
  ],
  excludeFiles: ['SUMMARY.md', 'CLAUDE.md'],
};

// ============ 首段定義式檢查 ============

/**
 * 定義式首段的特徵：
 * - 以主題詞開頭，緊接「是」字（如：比特幣是...、Bitcoin 是...）
 * - 長度適中（30-150 字元）
 * - 直接回答「XXX 是什麼？」
 */
const DEFINITION_PATTERNS = [
  /^.{1,50}(是|為|指的是|指得是|就是|即是|係指|意指|又稱|稱為).{5,}/,  // 中文定義式（放寬到 50 字元，涵蓋英文括號）
  /^.{1,30}\s+(is|are|refers to|means)/i,   // 英文定義式
  /^.{1,30}（[^）]+）(是|為|指|即)/,         // 中文（任意內容）是...
  /^(本頁|本文|此頁).{0,10}(是|列出|整理|收錄)/,  // 清單頁面
];

function extractFirstParagraph(content) {
  // 移除 frontmatter
  let body = content;
  if (content.startsWith('---\n')) {
    const endIndex = content.indexOf('\n---\n', 4);
    if (endIndex !== -1) {
      body = content.substring(endIndex + 5);
    }
  }

  // 找到 H1 之後的第一個實質段落
  const lines = body.split('\n');
  let foundH1 = false;
  let paragraph = '';

  for (const line of lines) {
    const trimmed = line.trim();

    // 跳過空行
    if (!trimmed) continue;

    // 找到 H1
    if (trimmed.startsWith('# ')) {
      foundH1 = true;
      continue;
    }

    // H1 之後，跳過特殊行
    if (foundH1) {
      // 跳過：blockquote (>)、表格 (|)、標題 (#)、GitBook 語法 ({%)、hint 區塊
      if (trimmed.startsWith('>') ||
          trimmed.startsWith('|') ||
          trimmed.startsWith('#') ||
          trimmed.startsWith('{%') ||
          trimmed.startsWith('{% hint') ||
          trimmed.startsWith('{% endhint')) {
        continue;
      }

      // 找到第一個實質段落
      paragraph = trimmed;
      break;
    }
  }

  return paragraph;
}

function checkDefinitionStyle(paragraph, h1) {
  if (!paragraph) {
    return { isDefinition: false, reason: '找不到首段' };
  }

  // 清理 markdown 語法以便分析
  const cleanPara = paragraph
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/`(.+?)`/g, '$1');

  // 長度檢查
  if (cleanPara.length < 20) {
    return { isDefinition: false, reason: `首段太短（${cleanPara.length} 字元）`, paragraph: cleanPara };
  }

  // 檢查是否符合定義式模式
  for (const pattern of DEFINITION_PATTERNS) {
    if (pattern.test(cleanPara)) {
      return { isDefinition: true, reason: '符合定義式', paragraph: cleanPara };
    }
  }

  // 額外檢查：首段是否包含主題關鍵詞 + 「是」
  if (h1) {
    // 提取 H1 中的關鍵詞（去除英文括號部分）
    const keyword = h1.replace(/（.+?）/g, '').replace(/\(.+?\)/g, '').trim();
    const keywordShort = keyword.substring(0, 4); // 取前幾個字

    if (cleanPara.includes(keyword) && cleanPara.includes('是')) {
      return { isDefinition: true, reason: '包含主題關鍵詞定義', paragraph: cleanPara };
    }
    if (cleanPara.includes(keywordShort) && cleanPara.includes('是')) {
      return { isDefinition: true, reason: '包含主題關鍵詞定義', paragraph: cleanPara };
    }
  }

  // 不符合定義式
  return {
    isDefinition: false,
    reason: '首段非定義式（未以「XX是...」開頭）',
    paragraph: cleanPara.substring(0, 80) + (cleanPara.length > 80 ? '...' : '')
  };
}

// ============ 審計檢查 ============

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(CONFIG.rootDir, filePath);
  const issues = [];
  const passes = [];

  // 提取首段用於定義式檢查
  const firstParagraph = extractFirstParagraph(content);

  // 1. 檢查 frontmatter description
  const hasFm = content.startsWith('---\n');
  const hasDesc = hasFm && content.includes('description:');
  if (!hasDesc) {
    issues.push('❌ 缺少 frontmatter description');
  } else {
    passes.push('✅ 有 frontmatter description');
  }

  // 2. 檢查 H1 標題
  const h1Match = content.match(/^#\s+(.+)$/m);
  const h1 = h1Match ? h1Match[1] : null;

  if (!h1) {
    issues.push('❌ 缺少 H1 標題');
  } else {
    passes.push(`✅ H1: ${h1.substring(0, 30)}${h1.length > 30 ? '...' : ''}`);

    // 檢查 H1 是否有英文
    if (!h1.includes('（') && !h1.includes('(')) {
      issues.push('⚠️  H1 標題沒有英文對照');
    }

    // 檢查 H1 長度
    if (h1.length < 5) {
      issues.push('⚠️  H1 標題太短（< 5 字元）');
    }
  }

  // 3. 檢查更新日期
  if (content.includes('最後更新：') || content.includes('最後更新:')) {
    passes.push('✅ 有更新日期');
  } else {
    issues.push('❌ 缺少更新日期');
  }

  // 4. 檢查相關條目
  if (content.includes('相關條目')) {
    passes.push('✅ 有相關條目區塊');
  } else {
    issues.push('⚠️  缺少相關條目區塊');
  }

  // 5. 檢查參考資料
  if (content.includes('參考資料')) {
    passes.push('✅ 有參考資料區塊');
  } else {
    issues.push('⚠️  缺少參考資料區塊');
  }

  // 6. 檢查內容長度
  const wordCount = content.length;
  if (wordCount < 500) {
    issues.push(`⚠️  內容較短（${wordCount} 字元）`);
  } else if (wordCount < 200) {
    issues.push(`❌ 內容過短（${wordCount} 字元）`);
  }

  // 7. 檢查是否有表格（結構化資料）
  if (content.includes('|---')) {
    passes.push('✅ 有表格結構');
  }

  // 8. 檢查是否有 FAQ
  if (content.includes('常見問題') || content.includes('FAQ')) {
    passes.push('✅ 有 FAQ 區塊');
  }

  // 9. 檢查內部連結數量
  const internalLinks = (content.match(/\]\([^http][^)]+\.md\)/g) || []).length;
  if (internalLinks >= 3) {
    passes.push(`✅ 有 ${internalLinks} 個內部連結`);
  } else if (internalLinks > 0) {
    issues.push(`⚠️  內部連結較少（${internalLinks} 個）`);
  } else {
    issues.push('❌ 沒有內部連結');
  }

  // 10. 檢查首段定義式（只在有 H1 時檢查）
  let definitionCheck = { isDefinition: false, reason: '無 H1 標題', paragraph: '' };
  if (h1) {
    definitionCheck = checkDefinitionStyle(firstParagraph, h1);
    if (definitionCheck.isDefinition) {
      passes.push('✅ 首段為定義式');
    } else {
      issues.push(`⚠️  ${definitionCheck.reason}`);
    }
  }

  // 計算分數
  const criticalIssues = issues.filter(i => i.startsWith('❌')).length;
  const warnings = issues.filter(i => i.startsWith('⚠️')).length;
  const score = Math.max(0, 100 - (criticalIssues * 15) - (warnings * 5));

  return {
    path: relativePath,
    score,
    issues,
    passes,
    criticalIssues,
    warnings,
    definitionCheck,  // 首段定義式檢查結果
  };
}

// ============ 報告生成 ============

function generateReport(results) {
  const lines = [];

  lines.push('# Blockpedia SEO 審計報告');
  lines.push('');
  lines.push(`> 生成時間：${new Date().toISOString()}`);
  lines.push('');

  // 總覽
  const totalFiles = results.length;
  const avgScore = Math.round(results.reduce((sum, r) => sum + r.score, 0) / totalFiles);
  const criticalCount = results.filter(r => r.criticalIssues > 0).length;
  const perfectCount = results.filter(r => r.score === 100).length;

  // 定義式首段統計
  const definitionCount = results.filter(r => r.definitionCheck.isDefinition).length;
  const nonDefinitionCount = totalFiles - definitionCount;

  lines.push('## 📊 總覽');
  lines.push('');
  lines.push(`| 指標 | 數值 |`);
  lines.push(`|------|------|`);
  lines.push(`| 總頁面數 | ${totalFiles} |`);
  lines.push(`| 平均分數 | ${avgScore}/100 |`);
  lines.push(`| 完美頁面 | ${perfectCount} |`);
  lines.push(`| 有嚴重問題 | ${criticalCount} |`);
  lines.push(`| 定義式首段 ✅ | ${definitionCount} (${Math.round(definitionCount/totalFiles*100)}%) |`);
  lines.push(`| 非定義式首段 ⚠️ | ${nonDefinitionCount} (${Math.round(nonDefinitionCount/totalFiles*100)}%) |`);
  lines.push('');

  // 分數分佈
  lines.push('## 📈 分數分佈');
  lines.push('');
  const excellent = results.filter(r => r.score >= 90).length;
  const good = results.filter(r => r.score >= 70 && r.score < 90).length;
  const fair = results.filter(r => r.score >= 50 && r.score < 70).length;
  const poor = results.filter(r => r.score < 50).length;

  lines.push(`| 等級 | 數量 | 百分比 |`);
  lines.push(`|------|------|--------|`);
  lines.push(`| 🟢 優秀 (90-100) | ${excellent} | ${Math.round(excellent/totalFiles*100)}% |`);
  lines.push(`| 🟡 良好 (70-89) | ${good} | ${Math.round(good/totalFiles*100)}% |`);
  lines.push(`| 🟠 尚可 (50-69) | ${fair} | ${Math.round(fair/totalFiles*100)}% |`);
  lines.push(`| 🔴 需改善 (<50) | ${poor} | ${Math.round(poor/totalFiles*100)}% |`);
  lines.push('');

  // 常見問題統計
  lines.push('## 🔍 常見問題統計');
  lines.push('');
  const issueStats = {};
  results.forEach(r => {
    r.issues.forEach(issue => {
      const key = issue.replace(/（.+）/, '').replace(/\d+/g, 'N');
      issueStats[key] = (issueStats[key] || 0) + 1;
    });
  });

  const sortedIssues = Object.entries(issueStats).sort((a, b) => b[1] - a[1]);
  lines.push(`| 問題 | 出現次數 |`);
  lines.push(`|------|----------|`);
  sortedIssues.forEach(([issue, count]) => {
    lines.push(`| ${issue} | ${count} |`);
  });
  lines.push('');

  // 需要優先處理的頁面（分數最低的 20 個）
  lines.push('## 🚨 優先處理清單（分數最低的 20 頁）');
  lines.push('');
  const lowestScoring = [...results].sort((a, b) => a.score - b.score).slice(0, 20);
  lines.push(`| 檔案 | 分數 | 嚴重問題 | 警告 |`);
  lines.push(`|------|------|----------|------|`);
  lowestScoring.forEach(r => {
    lines.push(`| ${r.path} | ${r.score} | ${r.criticalIssues} | ${r.warnings} |`);
  });
  lines.push('');

  // 非定義式首段頁面
  const nonDefinitionPages = results.filter(r => !r.definitionCheck.isDefinition);
  if (nonDefinitionPages.length > 0) {
    lines.push('## 📝 非定義式首段（需優化）');
    lines.push('');
    lines.push('以下頁面的首段不符合「定義式」格式，建議改為「XXX 是...」的開頭：');
    lines.push('');
    lines.push(`| 檔案 | 問題 | 目前首段 |`);
    lines.push(`|------|------|----------|`);
    nonDefinitionPages.slice(0, 50).forEach(r => {
      const para = r.definitionCheck.paragraph || '(無)';
      const shortPara = para.substring(0, 40) + (para.length > 40 ? '...' : '');
      lines.push(`| ${r.path} | ${r.definitionCheck.reason} | ${shortPara.replace(/\|/g, '\\|')} |`);
    });
    if (nonDefinitionPages.length > 50) {
      lines.push(`| ... | 還有 ${nonDefinitionPages.length - 50} 個頁面 | ... |`);
    }
    lines.push('');
    lines.push(`> 💡 **定義式首段**：直接回答「XXX 是什麼？」，如「比特幣是一種去中心化的數位貨幣...」`);
    lines.push('');
  }

  // 完美頁面
  if (perfectCount > 0) {
    lines.push('## ✨ 完美頁面（分數 100）');
    lines.push('');
    results.filter(r => r.score === 100).forEach(r => {
      lines.push(`- ${r.path}`);
    });
    lines.push('');
  }

  // 詳細報告
  lines.push('## 📋 詳細報告');
  lines.push('');
  lines.push('<details>');
  lines.push('<summary>點擊展開所有頁面詳情</summary>');
  lines.push('');

  results.sort((a, b) => a.score - b.score).forEach(r => {
    const emoji = r.score >= 90 ? '🟢' : r.score >= 70 ? '🟡' : r.score >= 50 ? '🟠' : '🔴';
    lines.push(`### ${emoji} ${r.path} (${r.score}分)`);
    lines.push('');
    if (r.issues.length > 0) {
      r.issues.forEach(i => lines.push(`- ${i}`));
    }
    if (r.passes.length > 0 && r.score < 100) {
      lines.push('');
      r.passes.forEach(p => lines.push(`- ${p}`));
    }
    lines.push('');
  });

  lines.push('</details>');
  lines.push('');

  return lines.join('\n');
}

// ============ 主程式 ============

function main() {
  const args = process.argv.slice(2);
  const outputFile = args.includes('--output') ? args[args.indexOf('--output') + 1] : null;

  console.log('🔍 Blockpedia SEO 審計工具');
  console.log('===========================\n');

  // 收集所有 MD 檔案
  let files = [];
  CONFIG.includeDirs.forEach(dir => {
    const pattern = path.join(CONFIG.rootDir, dir, '**/*.md');
    files.push(...glob.sync(pattern, {
      ignore: [
        '**/node_modules/**',
        '**/scripts/**',
        '**/.git/**',
        '**/.claude/**',
      ]
    }));
  });

  // 過濾
  files = files.filter(f => {
    const basename = path.basename(f);
    return !CONFIG.excludeFiles.includes(basename);
  });

  // 去重
  files = [...new Set(files)];

  console.log(`找到 ${files.length} 個 Markdown 檔案\n`);
  console.log('正在審計...\n');

  // 審計每個檔案
  const results = files.map(f => {
    try {
      return auditFile(f);
    } catch (err) {
      console.error(`❌ 審計 ${f} 失敗：${err.message}`);
      return null;
    }
  }).filter(Boolean);

  // 生成報告
  const report = generateReport(results);

  if (outputFile) {
    fs.writeFileSync(outputFile, report, 'utf-8');
    console.log(`📄 報告已儲存至：${outputFile}`);
  } else {
    console.log(report);
  }
}

try {
  require('glob');
  main();
} catch (e) {
  console.log('⚠️  需要安裝 glob 模組');
  console.log('   請執行：npm install glob');
  process.exit(1);
}
