#!/usr/bin/env node
/**
 * Blockpedia 內部連結自動添加腳本
 *
 * 策略：
 * 1. 為同目錄的兄弟頁面添加相關連結
 * 2. 基於關鍵字匹配添加跨目錄連結
 *
 * 使用方式：
 *   node scripts/add-internal-links.js --dry-run
 *   node scripts/add-internal-links.js --apply
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 排除的檔案
const EXCLUDE_FILES = ['README.md', 'SUMMARY.md', 'CLAUDE.md'];

// 排除的目錄
const EXCLUDE_DIRS = ['node_modules', '.git', '.claude', 'scripts', '.gitbook'];

/**
 * 從 SUMMARY.md 解析頁面標題與路徑的對應
 */
function parseNavigationFromSummary(rootDir) {
  const summaryPath = path.join(rootDir, 'SUMMARY.md');
  const content = fs.readFileSync(summaryPath, 'utf-8');

  const pages = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const title = match[1].trim();
    const filePath = match[2].trim();

    // 排除外部連結
    if (filePath.startsWith('http')) continue;

    pages.push({ title, filePath });
  }

  return pages;
}

/**
 * 從檔案內容提取 H1 標題
 */
function extractH1(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

/**
 * 檢查頁面是否有內部連結
 */
function hasInternalLinks(content) {
  // 檢查是否有相對路徑的 markdown 連結
  const relativeLinks = content.match(/\[([^\]]+)\]\((?!http)[^)]+\.md\)/g);
  return relativeLinks && relativeLinks.length > 0;
}

/**
 * 取得同目錄的兄弟頁面
 */
function getSiblingPages(filePath, allPages) {
  const dir = path.dirname(filePath);
  const basename = path.basename(filePath);

  return allPages.filter(page => {
    const pageDir = path.dirname(page.filePath);
    const pageBasename = path.basename(page.filePath);

    return pageDir === dir && pageBasename !== basename && pageBasename !== 'README.md';
  });
}

/**
 * 基於關鍵字找到相關頁面
 */
function findRelatedByKeywords(content, h1, allPages, currentPath, maxLinks = 3) {
  const keywords = [];

  // 從 H1 提取關鍵字
  if (h1) {
    // 提取中文和英文詞彙
    const chineseWords = h1.match(/[\u4e00-\u9fa5]+/g) || [];
    const englishWords = h1.match(/[a-zA-Z]+/g) || [];
    keywords.push(...chineseWords, ...englishWords.filter(w => w.length > 2));
  }

  // 常見區塊鏈關鍵字對應
  const keywordMap = {
    '比特幣': ['Bitcoin', 'BTC', '中本聰', '挖礦', '礦工'],
    '以太坊': ['Ethereum', 'ETH', '智能合約', 'Solidity', 'Gas'],
    '錢包': ['私鑰', '公鑰', '助記詞', '簽名', '地址'],
    '交易所': ['CEX', 'DEX', '幣安', 'Coinbase', '交易'],
    'NFT': ['非同質化', '藝術', 'OpenSea', '收藏品'],
    'DeFi': ['去中心化金融', '質押', '流動性', '借貸'],
    '挖礦': ['礦工', 'PoW', '工作量證明', '礦池'],
    '質押': ['PoS', '權益證明', 'Staking'],
  };

  // 擴展關鍵字
  for (const keyword of [...keywords]) {
    if (keywordMap[keyword]) {
      keywords.push(...keywordMap[keyword]);
    }
  }

  // 評分並排序
  const scored = allPages
    .filter(page => page.filePath !== currentPath && page.filePath !== 'README.md')
    .map(page => {
      let score = 0;
      const pageTitle = page.title.toLowerCase();

      for (const keyword of keywords) {
        if (pageTitle.includes(keyword.toLowerCase())) {
          score += 2;
        }
      }

      return { ...page, score };
    })
    .filter(page => page.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxLinks);

  return scored;
}

/**
 * 計算相對路徑
 */
function getRelativePath(fromFile, toFile) {
  const fromDir = path.dirname(fromFile);
  return path.relative(fromDir, toFile);
}

/**
 * 為頁面添加相關連結
 */
function addRelatedLinks(content, relatedPages, currentPath) {
  // 找到相關條目區塊
  const relatedSectionRegex = /#### 相關條目\s*\n+<!-- TODO: 添加 3-5 個相關頁面連結 -->/;

  if (!relatedSectionRegex.test(content)) {
    return { content, changed: false };
  }

  // 生成連結
  const links = relatedPages.map(page => {
    const relativePath = getRelativePath(currentPath, page.filePath);
    return `* [${page.title}](${relativePath})`;
  }).join('\n');

  const newContent = content.replace(
    relatedSectionRegex,
    `#### 相關條目\n\n${links}`
  );

  return { content: newContent, changed: true };
}

/**
 * 處理單一檔案
 */
function processFile(filePath, allPages, rootDir, dryRun = true) {
  const relativePath = path.relative(rootDir, filePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  const h1 = extractH1(content);

  // 取得兄弟頁面
  const siblings = getSiblingPages(relativePath, allPages);

  // 取得關鍵字相關頁面
  const relatedByKeywords = findRelatedByKeywords(content, h1, allPages, relativePath);

  // 合併並去重
  const relatedPages = [];
  const seen = new Set();

  // 優先添加關鍵字匹配的頁面
  for (const page of relatedByKeywords) {
    if (!seen.has(page.filePath)) {
      relatedPages.push(page);
      seen.add(page.filePath);
    }
  }

  // 添加兄弟頁面
  for (const page of siblings.slice(0, 2)) {
    if (!seen.has(page.filePath)) {
      relatedPages.push(page);
      seen.add(page.filePath);
    }
  }

  if (relatedPages.length === 0) {
    return { changed: false, links: 0 };
  }

  // 添加連結
  const result = addRelatedLinks(content, relatedPages.slice(0, 5), relativePath);

  if (result.changed) {
    if (!dryRun) {
      fs.writeFileSync(filePath, result.content, 'utf-8');
    }

    console.log(`📄 ${relativePath}`);
    relatedPages.slice(0, 5).forEach(p => console.log(`   → ${p.title}`));
    console.log(dryRun ? '   ⏸️  預覽模式' : '   ✅ 已儲存');

    return { changed: true, links: relatedPages.length };
  }

  return { changed: false, links: 0 };
}

/**
 * 主程式
 */
function main() {
  const args = process.argv.slice(2);
  const dryRun = !args.includes('--apply');

  const rootDir = path.resolve(__dirname, '..');

  console.log('🔗 Blockpedia 內部連結自動添加工具');
  console.log('====================================');
  console.log(`模式：${dryRun ? '🔍 預覽（dry-run）' : '⚡ 執行'}`);
  console.log('');

  // 解析 SUMMARY.md
  const allPages = parseNavigationFromSummary(rootDir);
  console.log(`從 SUMMARY.md 解析到 ${allPages.length} 個頁面\n`);

  // 找到所有 md 檔案
  const pattern = path.join(rootDir, '**/*.md');
  const files = glob.sync(pattern, {
    ignore: EXCLUDE_DIRS.map(d => `**/${d}/**`)
  }).filter(f => !EXCLUDE_FILES.includes(path.basename(f)));

  let modifiedCount = 0;
  let totalLinks = 0;

  for (const file of files) {
    try {
      const result = processFile(file, allPages, rootDir, dryRun);
      if (result.changed) {
        modifiedCount++;
        totalLinks += result.links;
      }
    } catch (err) {
      console.error(`❌ 處理 ${file} 時發生錯誤：${err.message}`);
    }
  }

  console.log('\n====================================');
  console.log(`📊 處理完成`);
  console.log(`   修改：${modifiedCount} 個檔案`);
  console.log(`   添加連結：${totalLinks} 個`);

  if (dryRun && modifiedCount > 0) {
    console.log('\n💡 這是預覽模式。執行 `node scripts/add-internal-links.js --apply` 來實際套用變更。');
  }
}

// 檢查 glob 模組
try {
  require('glob');
  main();
} catch (e) {
  console.log('⚠️  需要安裝 glob 模組');
  console.log('   請執行：npm install glob');
  process.exit(1);
}
