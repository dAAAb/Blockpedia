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
