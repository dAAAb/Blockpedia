# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概述

Blockpedia 是由 **0x1 Academy** 維護的開源區塊鏈百科全書，使用 **GitBook** 作為文件平台。內容以正體中文撰寫，涵蓋區塊鏈、加密貨幣、NFT、DeFi 等主題。

## 架構

這是純文件型專案，無需建置工具：

- **SUMMARY.md** - 主導覽結構（393 行），定義 GitBook 側邊欄的章節順序
- **README.md** - 專案首頁，包含 GitBook 的 YAML frontmatter
- **.gitbook/assets/** - 圖片與媒體檔案（118+ 檔案）
- **各主題目錄** - 依主題分類的 Markdown 檔案

## 主要內容目錄

| 目錄 | 內容 |
|------|------|
| `token/` | 各種加密貨幣介紹 |
| `wallet/` | 錢包類型與使用指南 |
| `blockchain-dev/` | 技術開發（密碼學、節點等）|
| `blockchain-security/` | 安全議題與攻擊類型 |
| `smart-contract/` | 智能合約與 Solidity |
| `jiao-yi-suo/` | 交易所（CEX、DEX、OTC）|
| `nft-*/` | NFT 相關內容 |
| `ddao/` | DDAO 社群活動紀錄 |

## 新增或編輯內容

1. **新增頁面**：建立 `.md` 檔案後，必須在 `SUMMARY.md` 中加入對應連結才會顯示
2. **圖片**：放置於 `.gitbook/assets/` 目錄，使用相對路徑引用
3. **格式**：遵循現有 Markdown 格式，保持正體中文用語一致性

## 發布流程

- 推送至 GitHub 後，GitBook 會自動同步並發布
- 無需手動建置或部署指令

## Claude 工作資料夾

`.claude/` 目錄包含 Claude Code 的工作文件：

| 檔案 | 用途 |
|------|------|
| `SESSION-CHECKPOINT.md` | 工作進度檢查點，新對話請先讀取 |
| `dAAAb-writing-style.md` | dAAAb 寫作風格指南（必讀） |
| `new-summary-proposal.md` | 新目錄結構提案（26 篇章節） |
| `new-topics-2024-2026.md` | 2024-2026 新主題清單 |
| `knowledge-update-agent.md` | 可重複使用的知識更新指令 |
| `blockpedia-analysis.md` | 知識庫分析報告 |

## 重要原則

1. **dAAAb 原創內容不可修改** — 這是 Gen AI 時代之前的人類思考結晶
2. **目錄可優化** — SUMMARY.md 結構可調整
3. **遵循寫作風格** — 新內容需符合 dAAAb 的比喻式、循序漸進風格
4. **使用正體中文** — 台灣用語

---

## ✅ 已完成：Google Analytics 流量分析（2026-01-08）

**目標**：分析 0x1 (Blockpedia) 在 2023-2025 年間流量異常問題

### 問題根因

| 問題 | 原因 | 解決方案 |
|------|------|----------|
| 流量中斷 (2024/7) | GitBook 使用舊版 Universal Analytics (`UA-29307708-2`)，已於 2024/7/1 停止運作 | 更新為 GA4 Measurement ID `G-SF0T5W3BSH` |
| URL 設定錯誤 | GA4 資料串流 URL 設為 `blockpedia.gitbook.io/p/` | 更正為 `0x1.academy` |

### 已完成項目

- [x] 安裝 Playwright MCP server
- [x] 設定 Claude Code MCP 配置
- [x] 建立 Google Cloud 專案並啟用 GA4 Data API
- [x] 建立 Service Account 並下載憑證
- [x] 在 GA4 中授權 Service Account（Viewer 權限）
- [x] 撰寫 Node.js 分析腳本 (`scripts/ga4-traffic-analysis.js`)
- [x] 分析 2023-2025 流量數據並產出報告
- [x] 修正 GitBook GA4 追蹤設定
- [x] 修正 GA4 資料串流 URL
- [x] 驗證追蹤碼正常運作
- [x] 設定 GA4 流量異常警報（5 個自訂深入分析）

### 相關檔案

| 檔案 | 說明 |
|------|------|
| `scripts/ga4-credentials.json` | Service Account 憑證 |
| `scripts/ga4-traffic-analysis.js` | GA4 API 分析腳本 |
| `scripts/ga4-analysis-result.json` | 分析結果 (JSON) |
| `scripts/traffic-anomaly-report.md` | 完整流量異常分析報告 |

### GA4 設定資訊

- **Property ID**: 385104224
- **Measurement ID**: G-SF0T5W3BSH
- **網站 URL**: https://0x1.academy
- **Service Account**: `ga4-analytics@rosy-solstice-268017.iam.gserviceaccount.com`
