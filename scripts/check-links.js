#!/usr/bin/env node

/**
 * Blockpedia 內部連結檢查工具
 *
 * 檢查項目：
 * 1. 內部連結是否指向存在的檔案
 * 2. 是否有錯誤連到 GitHub 的連結
 * 3. 是否有應該是相對連結但寫成絕對連結的情況
 */

const fs = require('fs');
const path = require('path');

// 設定
const ROOT_DIR = path.join(__dirname, '..');
const IGNORE_DIRS = ['node_modules', '.git', '.claude', 'scripts'];

// 顏色輸出
const colors = {
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
  cyan: (text) => `\x1b[36m${text}\x1b[0m`,
  gray: (text) => `\x1b[90m${text}\x1b[0m`,
};

// 統計
const stats = {
  filesScanned: 0,
  linksChecked: 0,
  brokenLinks: [],
  githubLinks: [],
  absoluteLinks: [],
  externalLinks: [],
};

/**
 * 遞迴取得所有 .md 檔案
 */
function getAllMarkdownFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(ROOT_DIR, fullPath);

    // 跳過忽略的目錄
    if (IGNORE_DIRS.some(ignore => relativePath.startsWith(ignore))) {
      continue;
    }

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      getAllMarkdownFiles(fullPath, files);
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * 從 Markdown 內容中提取所有連結
 */
function extractLinks(content) {
  const links = [];

  // Markdown 連結: [text](url) 或 [text](<url with spaces>)
  // 先處理角括號格式
  const angleBracketRegex = /\[([^\]]*)\]\(<([^>]+)>\)/g;
  let match;

  while ((match = angleBracketRegex.exec(content)) !== null) {
    links.push({
      text: match[1],
      url: match[2],
      full: match[0],
      index: match.index,
    });
  }

  // 再處理一般格式（排除已經處理過的角括號格式）
  const mdLinkRegex = /\[([^\]]*)\]\(([^)<][^)]*)\)/g;

  while ((match = mdLinkRegex.exec(content)) !== null) {
    // 檢查是否與角括號格式重疊
    const isOverlap = links.some(l =>
      match.index >= l.index && match.index < l.index + l.full.length
    );
    if (!isOverlap) {
      links.push({
        text: match[1],
        url: match[2],
        full: match[0],
        index: match.index,
      });
    }
  }

  return links;
}

/**
 * 取得連結在檔案中的行號
 */
function getLineNumber(content, index) {
  const lines = content.substring(0, index).split('\n');
  return lines.length;
}

/**
 * 檢查連結是否有效
 */
function checkLink(link, sourceFile, content) {
  const { url, text } = link;
  const lineNumber = getLineNumber(content, link.index);
  const sourceRelative = path.relative(ROOT_DIR, sourceFile);

  // 跳過錨點連結
  if (url.startsWith('#')) {
    return;
  }

  // 檢查 GitHub 連結（可能是錯誤的內部連結）
  // 但如果連結文字就是 URL 本身，則是故意顯示 GitHub 連結
  if (url.includes('github.com') && url.includes('Blockpedia')) {
    // 跳過故意顯示 URL 的連結（如 [https://github.com/...](https://github.com/...)）
    if (text === url || text.includes('github.com')) {
      return;
    }
    stats.githubLinks.push({
      file: sourceRelative,
      line: lineNumber,
      text,
      url,
    });
    return;
  }

  // 檢查外部連結
  if (url.startsWith('http://') || url.startsWith('https://')) {
    stats.externalLinks.push({
      file: sourceRelative,
      line: lineNumber,
      text,
      url,
    });
    return;
  }

  // 檢查絕對路徑（應該用相對路徑）
  if (url.startsWith('/')) {
    stats.absoluteLinks.push({
      file: sourceRelative,
      line: lineNumber,
      text,
      url,
    });
  }

  // 檢查相對連結是否指向存在的檔案
  const sourceDir = path.dirname(sourceFile);
  let targetPath;

  if (url.startsWith('/')) {
    // 絕對路徑（相對於根目錄）
    targetPath = path.join(ROOT_DIR, url);
  } else {
    // 相對路徑
    targetPath = path.join(sourceDir, url);
  }

  // 移除錨點
  const targetWithoutAnchor = targetPath.split('#')[0];

  // 解碼 URL 編碼的路徑（例如 %20 -> 空格）
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(targetWithoutAnchor);
  } catch (e) {
    decodedPath = targetWithoutAnchor;
  }

  // 如果沒有副檔名，嘗試加上 .md
  let finalPath = decodedPath;
  if (!path.extname(finalPath)) {
    finalPath = finalPath + '.md';
  }

  // 也可能是目錄，檢查 README.md
  const dirReadme = path.join(decodedPath, 'README.md');

  stats.linksChecked++;

  if (!fs.existsSync(finalPath) && !fs.existsSync(decodedPath) && !fs.existsSync(dirReadme)) {
    stats.brokenLinks.push({
      file: sourceRelative,
      line: lineNumber,
      text,
      url,
      expected: path.relative(ROOT_DIR, finalPath),
    });
  }
}

/**
 * 掃描單一檔案
 */
function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = extractLinks(content);

  for (const link of links) {
    checkLink(link, filePath, content);
  }

  stats.filesScanned++;
}

/**
 * 印出報告
 */
function printReport() {
  console.log('\n' + '='.repeat(60));
  console.log(colors.cyan('📋 Blockpedia 連結檢查報告'));
  console.log('='.repeat(60) + '\n');

  console.log(`📁 掃描檔案數: ${stats.filesScanned}`);
  console.log(`🔗 檢查連結數: ${stats.linksChecked}`);
  console.log(`🌐 外部連結數: ${stats.externalLinks.length}`);
  console.log('');

  // 錯誤的 GitHub 連結
  if (stats.githubLinks.length > 0) {
    console.log(colors.red(`\n❌ 錯誤的 GitHub 連結 (${stats.githubLinks.length} 個)`));
    console.log(colors.gray('   這些可能應該是相對連結：'));
    console.log('-'.repeat(50));
    for (const link of stats.githubLinks) {
      console.log(`   ${colors.yellow(link.file)}:${link.line}`);
      console.log(`   └─ [${link.text}](${colors.red(link.url)})`);
      console.log('');
    }
  }

  // 絕對路徑連結
  if (stats.absoluteLinks.length > 0) {
    console.log(colors.yellow(`\n⚠️  絕對路徑連結 (${stats.absoluteLinks.length} 個)`));
    console.log(colors.gray('   建議改為相對路徑：'));
    console.log('-'.repeat(50));
    for (const link of stats.absoluteLinks) {
      console.log(`   ${colors.yellow(link.file)}:${link.line}`);
      console.log(`   └─ [${link.text}](${colors.yellow(link.url)})`);
      console.log('');
    }
  }

  // 損壞的連結
  if (stats.brokenLinks.length > 0) {
    console.log(colors.red(`\n❌ 損壞的連結 (${stats.brokenLinks.length} 個)`));
    console.log(colors.gray('   找不到目標檔案：'));
    console.log('-'.repeat(50));
    for (const link of stats.brokenLinks) {
      console.log(`   ${colors.yellow(link.file)}:${link.line}`);
      console.log(`   └─ [${link.text}](${colors.red(link.url)})`);
      console.log(`      期望: ${colors.gray(link.expected)}`);
      console.log('');
    }
  }

  // 總結
  console.log('\n' + '='.repeat(60));
  const totalIssues = stats.brokenLinks.length + stats.githubLinks.length + stats.absoluteLinks.length;

  if (totalIssues === 0) {
    console.log(colors.green('✅ 太棒了！沒有發現任何連結問題。'));
  } else {
    console.log(colors.red(`❌ 發現 ${totalIssues} 個問題需要修復：`));
    if (stats.brokenLinks.length > 0) {
      console.log(`   • ${stats.brokenLinks.length} 個損壞連結`);
    }
    if (stats.githubLinks.length > 0) {
      console.log(`   • ${stats.githubLinks.length} 個錯誤的 GitHub 連結`);
    }
    if (stats.absoluteLinks.length > 0) {
      console.log(`   • ${stats.absoluteLinks.length} 個絕對路徑連結`);
    }
  }
  console.log('='.repeat(60) + '\n');

  // 回傳錯誤碼
  return totalIssues > 0 ? 1 : 0;
}

/**
 * 主程式
 */
function main() {
  console.log(colors.cyan('\n🔍 開始掃描 Blockpedia 連結...\n'));

  const files = getAllMarkdownFiles(ROOT_DIR);

  for (const file of files) {
    scanFile(file);
  }

  const exitCode = printReport();
  process.exit(exitCode);
}

main();
