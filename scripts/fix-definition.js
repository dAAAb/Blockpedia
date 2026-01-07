#!/usr/bin/env node
/**
 * Blockpedia 首段定義式修復腳本 v3
 * 原則：寧可漏改，不可錯改
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const CONFIG = {
  rootDir: path.resolve(__dirname, '..'),
  includeDirs: ['', 'token', 'wallet', 'defi', 'nft-collectibles', 'smart-contract',
    'blockchain-dev', 'blockchain-security', 'jiao-yi-suo', 'wa', 'consensus',
    'layer2', 'chains', 'dao', 'metaverse', 'blockchain-apps', 'ai-web3',
    'prediction-markets', 'cbdc', 'rwa', 'depin', 'regulation', 'payments',
    'stablecoin', 'scams', 'ming-ren', 'usdt', 'tong'],
  excludeFiles: ['SUMMARY.md', 'CLAUDE.md', 'README.md', 'seo-report.md'],
};

function extractH1(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function getFirstParagraphInfo(content) {
  let body = content, bodyStart = 0;
  if (content.startsWith('---\n')) {
    const endIndex = content.indexOf('\n---\n', 4);
    if (endIndex !== -1) { bodyStart = endIndex + 5; body = content.substring(bodyStart); }
  }
  const lines = body.split('\n');
  let foundH1 = false;
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('# ')) { foundH1 = true; continue; }
    if (foundH1) {
      if (trimmed.startsWith('>') || trimmed.startsWith('|') || trimmed.startsWith('#') ||
          trimmed.startsWith('{%') || trimmed.startsWith('![')) continue;
      return { line: lines[i], lineIndex: i, trimmed, bodyStart, bodyLines: lines };
    }
  }
  return null;
}

function analyzeAndFix(paragraph, h1) {
  if (!paragraph || !h1) return null;
  
  // 清理用於分析
  const clean = paragraph.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  
  // 已有定義詞「是」「為」「指」，跳過
  if (/^.{1,30}(是|為|指|即|係)/.test(clean)) return null;
  
  // 跳過敘事式開頭
  if (/^(19|20)\d{2}\s*年|^如果|^想像|^當|^在/.test(clean)) return null;
  if (clean.length < 30) return null;
  if (paragraph.startsWith('[') || paragraph.startsWith('_') || paragraph.startsWith('>')) return null;
  
  // 如果段落中很早就有「是」或「就是」，可能已經是定義式
  const firstShiPos = clean.indexOf('是');
  if (firstShiPos > 0 && firstShiPos < 40) return null;
  if (clean.includes('就是') && clean.indexOf('就是') < 50) return null;
  if (clean.includes('又稱') && clean.indexOf('又稱') < 30) return null;

  const h1Chinese = h1.replace(/（.+?）/g, '').replace(/\(.+?\)/g, '').replace(/\*\*/g, '').trim();

  // 只處理模式 1：「關鍵詞（英文）描述」→「關鍵詞（英文）是描述」
  // 要求：描述部分不能以「就」「又」「其」開頭
  const pattern1 = /^(\*{0,2})([^（(）)\[\]\n]{1,12})([（(][^）)\n]+[）)])([^是為指即係，。、就又其].{20,})$/;
  const match1 = paragraph.match(pattern1);
  
  if (match1) {
    const [, bold1, subject, paren, rest] = match1;
    const subjectClean = subject.replace(/\*\*/g, '').trim();
    
    // 確認主題詞與 H1 相關
    if (h1Chinese.includes(subjectClean) || subjectClean.includes(h1Chinese)) {
      // 額外檢查：rest 前 20 字內不能有「是」
      const restFirst20 = rest.substring(0, 20);
      if (!restFirst20.includes('是') && !restFirst20.includes('就') && !restFirst20.includes('又')) {
        return { original: paragraph, fixed: bold1 + subject + paren + '是' + rest };
      }
    }
  }

  // 模式 2：非常保守 - 只處理「關鍵詞」直接跟描述的情況
  // 例如：「基石輪引用基金...」→「基石輪是引用基金...」
  if (h1Chinese.length >= 2 && h1Chinese.length <= 6) {
    // 段落必須以 H1 關鍵詞開頭
    if (clean.startsWith(h1Chinese)) {
      const afterKeyword = clean.substring(h1Chinese.length);
      // 後面不能是括號、定義詞、標點
      if (!/^[是為指即係（(，。、就又\s]/.test(afterKeyword)) {
        // 且後面 20 字內不能有「是」
        if (!afterKeyword.substring(0, 20).includes('是')) {
          // 找到插入位置
          const pos = paragraph.indexOf(h1Chinese);
          if (pos === 0 || (pos === 2 && paragraph.startsWith('**'))) {
            const insertPos = pos + h1Chinese.length + (paragraph.startsWith('**') ? 2 : 0);
            // 確認插入位置後面不是 * 或特殊字符
            if (paragraph[insertPos] && !/[*（(是為指]/.test(paragraph[insertPos])) {
              return {
                original: paragraph,
                fixed: paragraph.substring(0, insertPos) + '是' + paragraph.substring(insertPos)
              };
            }
          }
        }
      }
    }
  }

  return null;
}

function processFile(filePath, dryRun = true) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(CONFIG.rootDir, filePath);
  const h1 = extractH1(content);
  if (!h1) return null;
  const info = getFirstParagraphInfo(content);
  if (!info) return null;
  const fix = analyzeAndFix(info.trimmed, h1);
  if (!fix) return null;
  
  // 最終驗證
  if (fix.fixed.includes('是是') || fix.fixed.includes('是就') || 
      fix.fixed.includes('是又') || fix.fixed.includes('是\(') ||
      fix.fixed.includes('是）') || fix.fixed.includes('是**是')) return null;
  
  if (!dryRun) {
    const indent = info.line.match(/^(\s*)/)[1];
    info.bodyLines[info.lineIndex] = indent + fix.fixed;
    fs.writeFileSync(filePath, content.substring(0, info.bodyStart) + info.bodyLines.join('\n'), 'utf-8');
  }
  return {
    path: relativePath,
    original: fix.original.substring(0, 60) + (fix.original.length > 60 ? '...' : ''),
    fixed: fix.fixed.substring(0, 60) + (fix.fixed.length > 60 ? '...' : ''),
    dryRun
  };
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = !args.includes('--apply');
  const singleFile = args.includes('--file') ? args[args.indexOf('--file') + 1] : null;

  console.log('🔧 首段定義式修復工具 v3');
  console.log('原則：寧可漏改，不可錯改\n');
  console.log('模式：' + (dryRun ? '🔍 預覽' : '⚡ 執行'));
  
  let files = singleFile ? [path.resolve(CONFIG.rootDir, singleFile)] : [];
  if (!singleFile) {
    CONFIG.includeDirs.forEach(dir => {
      files.push(...glob.sync(path.join(CONFIG.rootDir, dir, '**/*.md')));
    });
    files = [...new Set(files)].filter(f => !CONFIG.excludeFiles.includes(path.basename(f)));
  }
  
  console.log('掃描 ' + files.length + ' 個檔案...\n');
  const results = [];
  files.forEach(file => {
    try { const r = processFile(file, dryRun); if (r) results.push(r); } catch(e) {}
  });
  
  if (results.length > 0) {
    console.log('✅ 可安全修復的頁面：\n');
    results.forEach(r => {
      console.log('📄 ' + r.path);
      console.log('   原：' + r.original);
      console.log('   改：' + r.fixed);
      if (!dryRun) console.log('   ✅ 已儲存');
      console.log('');
    });
  }
  console.log('📊 可修復：' + results.length + ' 個');
  if (dryRun && results.length > 0) console.log('\n💡 執行：npm run fix-def:apply');
}

try { require('glob'); main(); } catch(e) { console.log('請先 npm install'); }
