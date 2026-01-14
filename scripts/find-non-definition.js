#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const rootDir = path.resolve(__dirname, "..");
const files = glob.sync(path.join(rootDir, "**/*.md"), {
  ignore: ["**/node_modules/**", "**/scripts/**", "**/.git/**", "**/.claude/**"]
});

const DEFINITION_PATTERNS = [
  /^.{1,50}(是|為|指的是|指得是|就是|即是|係指|意指|又稱|稱為).{5,}/,
  /^.{1,30}\s+(is|are|refers to|means)/i,
  /^.{1,30}（[^）]+）(是|為|指|即)/,
  /^(本頁|本文|此頁).{0,10}(是|列出|整理|收錄)/,
];

function extractFirstParagraph(content) {
  const lines = content.split("\n");
  let foundH1 = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) { foundH1 = true; continue; }
    if (foundH1 && trimmed && !trimmed.startsWith(">") && !trimmed.startsWith("|") &&
        !trimmed.startsWith("#") && !trimmed.startsWith("{%")) {
      return trimmed.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\(.+?\)/g, "$1");
    }
  }
  return "";
}

function extractH1(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

const results = [];
for (const file of files) {
  try {
    const content = fs.readFileSync(file, "utf-8");
    const para = extractFirstParagraph(content);
    const h1 = extractH1(content);

    if (!para || para.length < 10) continue;

    let isDefinition = false;
    for (const p of DEFINITION_PATTERNS) {
      if (p.test(para)) { isDefinition = true; break; }
    }

    if (!isDefinition) {
      const rel = path.relative(rootDir, file);
      results.push({ file: rel, h1, para: para.substring(0, 60) });
    }
  } catch (e) {}
}

console.log("非定義式首段頁面清單：\n");
results.forEach((r, i) => console.log(`${i+1}. ${r.file}\n   H1: ${r.h1}\n   首段: ${r.para}...\n`));
console.log("\n總計：" + results.length + " 頁");
