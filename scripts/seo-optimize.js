#!/usr/bin/env node
/**
 * Blockpedia SEO/AISEO 批量優化腳本
 *
 * 功能：
 * 1. 為缺少 frontmatter 的頁面添加 description
 * 2. 在 H1 標題後添加更新日期
 * 3. 在文末添加相關條目區塊（如果沒有）
 *
 * 使用方式：
 *   node scripts/seo-optimize.js --dry-run    # 預覽變更，不實際修改
 *   node scripts/seo-optimize.js --apply      # 實際執行修改
 *   node scripts/seo-optimize.js --file path  # 只處理單一檔案
 *
 * 原則：只在頭尾添加，絕不修改原文內容
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// ============ 配置區 ============

const CONFIG = {
  // 要處理的目錄（相對於專案根目錄）- 包含所有內容目錄
  includeDirs: [
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
    // 新增的目錄
    'wei',
    'wei-1',
    'xin',
    'usdt',
    'undefined-1-1',
    'undefined-2',
    'tou-bang',
    'tong',
    'mi-yin',
    'fork',
    'ddao',
    'nft-artists',
    'nft-gallery',
    'nft-marketplace',
    'nft-trading',
    'cryptoart',
    'gamefi',
    'play-to-earn',
    'socialfi',
    'creatoreconomy',
  ],

  // 排除的檔案（僅排除根目錄的特殊檔案）
  excludeFiles: [
    'SUMMARY.md',     // 目錄檔
    'CLAUDE.md',      // Claude 設定
  ],

  // 排除的完整路徑
  excludePaths: [
    'README.md',      // 根目錄首頁單獨處理
  ],

  // 更新日期
  updateDate: '2026 年 1 月',

  // 中英文對照表（用於標題優化）
  titleTranslations: {
    '比特幣': 'Bitcoin',
    '以太坊': 'Ethereum',
    '以太幣': 'Ether',
    '區塊鏈': 'Blockchain',
    '智能合約': 'Smart Contract',
    '去中心化': 'Decentralized',
    '加密貨幣': 'Cryptocurrency',
    '錢包': 'Wallet',
    '挖礦': 'Mining',
    '共識': 'Consensus',
    '私鑰': 'Private Key',
    '公鑰': 'Public Key',
    '交易所': 'Exchange',
    '穩定幣': 'Stablecoin',
    '代幣': 'Token',
    '空投': 'Airdrop',
    '質押': 'Staking',
    '流動性': 'Liquidity',
    '預言機': 'Oracle',
    '跨鏈': 'Cross-chain',
    '側鏈': 'Sidechain',
    '分片': 'Sharding',
    '哈希': 'Hash',
    '節點': 'Node',
    '礦工': 'Miner',
    '礦池': 'Mining Pool',
    '萊特幣': 'Litecoin',
    '狗狗幣': 'Dogecoin',
    '瑞波幣': 'XRP',
    '艾達幣': 'Cardano',
    '波卡': 'Polkadot',
    '索拉納': 'Solana',
    '雪崩': 'Avalanche',
    '幣安': 'Binance',
    '元宇宙': 'Metaverse',
    '非同質化代幣': 'NFT',
    '去中心化金融': 'DeFi',
    '去中心化交易所': 'DEX',
    '中心化交易所': 'CEX',
    '工作量證明': 'PoW',
    '權益證明': 'PoS',
    '委託權益證明': 'DPoS',
    '燃料': 'Gas',
    '助記詞': 'Seed Phrase',
    '冷錢包': 'Cold Wallet',
    '熱錢包': 'Hot Wallet',
    '多重簽名': 'Multi-sig',
    '閃電網路': 'Lightning Network',
    '量子鏈': 'Qtum',
    '星雲鏈': 'Nebulas',
    '比特現金': 'Bitcoin Cash',
    '以太經典': 'Ethereum Classic',
  },
};

// ============ 工具函數 ============

/**
 * 檢查檔案是否有 YAML frontmatter
 */
function hasFrontmatter(content) {
  return content.startsWith('---\n');
}

/**
 * 解析 frontmatter
 */
function parseFrontmatter(content) {
  if (!hasFrontmatter(content)) {
    return { frontmatter: null, body: content };
  }

  const endIndex = content.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    return { frontmatter: null, body: content };
  }

  const frontmatterStr = content.substring(4, endIndex);
  const body = content.substring(endIndex + 5);

  // 簡單解析 YAML
  const frontmatter = {};
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      frontmatter[key] = value;
    }
  });

  return { frontmatter, body };
}

/**
 * 提取 H1 標題
 */
function extractH1(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

/**
 * 從內容生成 description（取首段）
 */
function generateDescription(content, h1) {
  // 移除 frontmatter
  const { body } = parseFrontmatter(content);

  // 找到 H1 之後的第一個段落
  const lines = body.split('\n');
  let foundH1 = false;
  let description = '';

  for (const line of lines) {
    if (line.startsWith('# ')) {
      foundH1 = true;
      continue;
    }
    if (foundH1 && line.trim() && !line.startsWith('#') && !line.startsWith('|') && !line.startsWith('>') && !line.startsWith('{%')) {
      // 清理 markdown 語法
      description = line
        .replace(/\*\*(.+?)\*\*/g, '$1')  // 粗體
        .replace(/\*(.+?)\*/g, '$1')       // 斜體
        .replace(/\[(.+?)\]\(.+?\)/g, '$1') // 連結
        .replace(/`(.+?)`/g, '$1')         // 程式碼
        .trim();
      break;
    }
  }

  // 截斷到 150 字元
  if (description.length > 150) {
    description = description.substring(0, 147) + '...';
  }

  // 如果沒找到，用 H1 生成
  if (!description && h1) {
    description = `${h1}的完整介紹與說明。`;
  }

  return description;
}

/**
 * 檢查是否已有更新日期
 */
function hasUpdateDate(content) {
  return content.includes('最後更新：') || content.includes('最後更新:');
}

/**
 * 檢查是否已有相關條目區塊
 */
function hasRelatedSection(content) {
  return content.includes('#### 相關條目') || content.includes('### 相關條目');
}

/**
 * 為標題添加英文（如果適用）
 */
function enhanceTitle(title) {
  // 如果已經有括號（可能已有英文），跳過
  if (title.includes('（') || title.includes('(')) {
    return title;
  }

  // 查找對照表
  for (const [chinese, english] of Object.entries(CONFIG.titleTranslations)) {
    if (title.includes(chinese)) {
      // 如果標題就是這個詞，直接加英文
      if (title === chinese) {
        return `${chinese}（${english}）`;
      }
      // 如果標題包含這個詞，在詞後面加英文
      return title.replace(chinese, `${chinese}（${english}）`);
    }
  }

  return title;
}

// ============ 主要處理邏輯 ============

/**
 * 處理單一檔案
 */
function processFile(filePath, dryRun = true) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const changes = [];
  let newContent = content;

  // 1. 檢查並添加 frontmatter
  const { frontmatter, body } = parseFrontmatter(content);
  const h1 = extractH1(content);

  if (!frontmatter || !frontmatter.description) {
    const description = generateDescription(content, h1);
    if (description) {
      changes.push(`添加 description: "${description.substring(0, 50)}..."`);

      if (frontmatter) {
        // 已有 frontmatter，添加 description
        const oldFm = content.substring(0, content.indexOf('\n---\n', 4) + 5);
        const newFm = oldFm.replace('\n---\n', `\ndescription: ${description}\n---\n`);
        newContent = newContent.replace(oldFm, newFm);
      } else {
        // 沒有 frontmatter，添加完整的
        newContent = `---\ndescription: ${description}\n---\n\n${content}`;
      }
    }
  }

  // 2. 檢查並添加更新日期（在 H1 之後）
  if (!hasUpdateDate(newContent) && h1) {
    changes.push(`添加更新日期：${CONFIG.updateDate}`);

    const h1Line = newContent.match(/^#\s+.+$/m)[0];
    const updateLine = `\n> **最後更新：${CONFIG.updateDate}**\n`;
    newContent = newContent.replace(h1Line, h1Line + updateLine);
  }

  // 3. 檢查並添加相關條目區塊（在文末）
  if (!hasRelatedSection(newContent)) {
    changes.push('添加相關條目區塊（空白模板）');

    const relatedSection = `
---

#### 相關條目

<!-- TODO: 添加 3-5 個相關頁面連結 -->

#### 參考資料

<!-- TODO: 添加外部參考連結 -->
`;
    newContent = newContent.trimEnd() + '\n' + relatedSection;
  }

  // 輸出結果
  if (changes.length > 0) {
    console.log(`\n📄 ${filePath}`);
    changes.forEach(c => console.log(`   ✏️  ${c}`));

    if (!dryRun) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log('   ✅ 已儲存');
    } else {
      console.log('   ⏸️  預覽模式，未儲存');
    }

    return { filePath, changes, modified: !dryRun };
  }

  return { filePath, changes: [], modified: false };
}

/**
 * 取得所有要處理的檔案
 */
function getFilesToProcess(rootDir) {
  // 掃描所有 md 檔案（排除特定目錄）
  const pattern = path.join(rootDir, '**/*.md');
  const allFiles = glob.sync(pattern, {
    ignore: [
      '**/node_modules/**',
      '**/.git/**',
      '**/.claude/**',
      '**/scripts/**',
    ]
  });

  // 過濾排除的檔案
  return allFiles.filter(f => {
    const basename = path.basename(f);
    const relativePath = path.relative(rootDir, f);

    // 排除特定檔名
    if (CONFIG.excludeFiles.includes(basename)) return false;

    // 排除特定路徑（根目錄 README.md）
    if (CONFIG.excludePaths && CONFIG.excludePaths.includes(relativePath)) return false;

    return true;
  });
}

// ============ CLI ============

function main() {
  const args = process.argv.slice(2);
  const dryRun = !args.includes('--apply');
  const singleFile = args.includes('--file') ? args[args.indexOf('--file') + 1] : null;

  const rootDir = path.resolve(__dirname, '..');

  console.log('🚀 Blockpedia SEO/AISEO 批量優化工具');
  console.log('=====================================');
  console.log(`模式：${dryRun ? '🔍 預覽（dry-run）' : '⚡ 執行'}`);
  console.log('');

  let files;
  if (singleFile) {
    files = [path.resolve(rootDir, singleFile)];
  } else {
    files = getFilesToProcess(rootDir);
  }

  console.log(`找到 ${files.length} 個檔案待處理...\n`);

  let modifiedCount = 0;
  let unchangedCount = 0;

  files.forEach(file => {
    try {
      const result = processFile(file, dryRun);
      if (result.changes.length > 0) {
        modifiedCount++;
      } else {
        unchangedCount++;
      }
    } catch (err) {
      console.error(`❌ 處理 ${file} 時發生錯誤：${err.message}`);
    }
  });

  console.log('\n=====================================');
  console.log(`📊 處理完成`);
  console.log(`   修改：${modifiedCount} 個檔案`);
  console.log(`   無變更：${unchangedCount} 個檔案`);

  if (dryRun && modifiedCount > 0) {
    console.log('\n💡 這是預覽模式。執行 `node scripts/seo-optimize.js --apply` 來實際套用變更。');
  }
}

// 檢查是否有 glob 模組
try {
  require('glob');
  main();
} catch (e) {
  console.log('⚠️  需要安裝 glob 模組');
  console.log('   請執行：npm install glob');
  console.log('   或者：yarn add glob');
  process.exit(1);
}
