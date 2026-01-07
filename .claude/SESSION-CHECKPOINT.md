# Blockpedia 工作階段檢查點

**日期**：2026-01-07
**狀態**：全部 26 篇章節已完成，連結檢查工具已建立

---

## 專案概述

**Blockpedia** 是 dAAAb（葛如鈞／寶博士）維護的開源區塊鏈百科全書，使用 GitBook 平台。
- **GitHub**：https://github.com/dAAAb/Blockpedia
- **本地路徑**：`~/Blockpedia`
- **完成度**：新增 78+ 篇文章，目錄從 19 章擴充至 26 章

---

## 已完成工作

### 1. 寫作風格分析 ✅
- 檔案：`.claude/dAAAb-writing-style.md`
- 核心特色：比喻類比法（雞幣、魔法帳本、村長問題、分靈體）
- **重要**：dAAAb 原創內容不可修改

### 2. 知識庫分析 ✅
- 檔案：`.claude/blockpedia-analysis.md`
- 原始意圖：降低入門門檻、循序漸進學習、幫助「入圈」

### 3. 新目錄結構提案 ✅
- 檔案：`.claude/new-summary-proposal.md`
- 從 19 篇擴充至 **26 篇**

### 4. 2024-2026 新主題研究 ✅
- 檔案：`.claude/new-topics-2024-2026.md`
- 涵蓋：x402、Polymarket、USDe、Bitcoin ETF、Ordinals、MiCA 等

### 5. 連結檢查工具 ✅
- 檔案：`scripts/check-links.js`
- 功能：檢查內部連結、GitHub 連結、絕對路徑
- 支援 URL 編碼路徑和角括號格式

### 6. 全部新章節撰寫 ✅

| 章節 | 文章數 | Commit | 狀態 |
|------|--------|--------|------|
| AI x Web3 | 6 篇 | `824b0ed` | ✅ 已推送 |
| 預測市場 | 4 篇 | `f17761a` | ✅ 已推送 |
| CBDC | 6 篇 | `da344cb` | ✅ 已推送 |
| RWA | 6 篇 | `9742871` | ✅ 已推送 |
| Web3 支付 | 6 篇 | `13d6483` | ✅ 已推送 |
| DePIN | 6 篇 | `0cfa442` | ✅ 已推送 |
| 全球監管 | 6 篇 | `323285f` | ✅ 已推送 |
| Bitcoin 新生態 | 5 篇 | `ef82786` | ✅ 已推送 |
| 詐騙手法 | 4 篇 | `e0cc8e9` | ✅ 已推送 |
| 穩定幣擴充 | 8 篇 | `7daa702` | ✅ 已推送 |
| DeFi | 8 篇 | `0362830` | ✅ 已推送 |
| Layer 2 | 6 篇 | `c88844b` | ✅ 已推送 |
| NFT 市場 | 2 篇 | `0c1ef31` | ✅ 已推送 |
| DAO | 3 篇 | `99874d2` | ✅ 已推送 |
| 公鏈 | 6 篇 | `817f10e` | ✅ 已推送 |

**總計新增：78+ 篇文章**

### 7. 連結修復 ✅
- Commit: `c0f855b`
- 修復圖片連結（移除轉義底線）
- 新增連結檢查工具
- 掃描 533 個檔案，801 個內部連結全部正確

---

## 已撰寫文章清單

### AI x Web3（6 篇）
- `ai-web3/README.md` - AI x Web3 總覽
- `ai-web3/x402.md` - x402 協議
- `ai-web3/ai-agent-payments.md` - AI Agent 支付
- `ai-web3/decentralized-ai.md` - 去中心化 AI
- `ai-web3/ap2.md` - AP2 協議
- `ai-web3/cloudflare.md` - Cloudflare AI 支付

### 預測市場（4 篇）
- `prediction-markets/README.md` - 預測市場總覽
- `prediction-markets/polymarket.md` - Polymarket
- `prediction-markets/how-it-works.md` - 運作原理
- `prediction-markets/use-cases.md` - 應用場景

### CBDC（6 篇）
- `cbdc/README.md` - CBDC 總覽
- `cbdc/e-cny.md` - 數字人民幣
- `cbdc/e-rupee.md` - 數位盧比
- `cbdc/digital-euro.md` - 數位歐元
- `cbdc/global-progress.md` - 全球進度
- `cbdc/mbridge.md` - mBridge 跨境 CBDC

### RWA（6 篇）
- `rwa/README.md` - RWA 總覽
- `rwa/treasuries.md` - 代幣化國債
- `rwa/buidl.md` - BlackRock BUIDL
- `rwa/real-estate.md` - 房地產代幣化
- `rwa/private-credit.md` - 私人信貸
- `rwa/protocols.md` - RWA 協議

### Web3 支付（6 篇）
- `payments/README.md` - Web3 支付總覽
- `payments/stripe-bridge.md` - Stripe + Bridge
- `payments/block-btc.md` - Block 比特幣支付
- `payments/stablecoin-payments.md` - 穩定幣支付
- `payments/cross-border.md` - 跨境支付
- `payments/enterprise.md` - 企業加密支付

### DePIN（6 篇）
- `depin/README.md` - DePIN 總覽
- `depin/helium.md` - Helium
- `depin/render.md` - Render Network
- `depin/hivemapper.md` - Hivemapper
- `depin/filecoin.md` - Filecoin
- `depin/aethir.md` - Aethir

### 全球監管（6 篇）
- `regulation/README.md` - 監管總覽
- `regulation/mica.md` - 歐盟 MiCA
- `regulation/genius-act.md` - 美國 GENIUS Act
- `regulation/hong-kong.md` - 香港虛擬資產
- `regulation/singapore.md` - 新加坡 MAS
- `regulation/japan.md` - 日本加密法規

### Bitcoin 新生態（5 篇）
- `bitcoin/etf.md` - Bitcoin ETF
- `bitcoin/ordinals.md` - Bitcoin Ordinals
- `bitcoin/brc20.md` - BRC-20 代幣
- `bitcoin/runes.md` - Runes Protocol
- `bitcoin/lightning.md` - Lightning Network

### 詐騙手法（4 篇）
- `scams/README.md` - 常見詐騙手法總覽
- `scams/fake-wallet.md` - 假錢包 APP
- `scams/phishing.md` - 釣魚網站
- `scams/airdrop-scam.md` - 空投詐騙
- `scams/ponzi.md` - 龐氏騙局

### 穩定幣擴充（8 篇）
- `stablecoin/usdc.md` - USDC
- `stablecoin/dai.md` - DAI
- `stablecoin/usde.md` - USDe (Ethena)
- `stablecoin/pyusd.md` - PYUSD (PayPal)
- `stablecoin/usd1.md` - USD1
- `stablecoin/jpyc.md` - JPYC
- `stablecoin/eurc.md` - EURC
- `stablecoin/yield-bearing.md` - 收益型穩定幣

### DeFi（8 篇）
- `defi/README.md` - DeFi 總覽
- `defi/dex/README.md` - DEX 總覽
- `defi/dex/uniswap.md` - Uniswap
- `defi/dex/curve.md` - Curve Finance
- `defi/lending/README.md` - 借貸協議總覽
- `defi/lending/aave.md` - Aave
- `defi/lending/compound.md` - Compound
- `defi/yield-farming.md` - 流動性挖礦

### Layer 2（6 篇）
- `layer2/README.md` - Layer 2 總覽
- `layer2/optimism.md` - Optimism
- `layer2/arbitrum.md` - Arbitrum
- `layer2/base.md` - Base
- `layer2/zksync.md` - zkSync
- `layer2/starknet.md` - StarkNet

### NFT 市場（2 篇）
- `nft-marketplace/opensea.md` - OpenSea
- `nft-marketplace/blur.md` - Blur

### DAO（3 篇）
- `dao/README.md` - DAO 總覽
- `dao/snapshot.md` - Snapshot 投票
- `dao/constitution-dao.md` - ConstitutionDAO

### 公鏈（6 篇）
- `chains/README.md` - 公鏈總覽
- `chains/solana.md` - Solana
- `chains/avalanche.md` - Avalanche
- `chains/sui.md` - Sui
- `chains/aptos.md` - Aptos
- `chains/ton.md` - TON

### 其他新增
- `how-to-read.md` - 如何閱讀本書
- `nft-collectibles/bayc.md` - BAYC
- `nft-collectibles/cryptopunks.md` - CryptoPunks

---

## 待完成工作

### 內容優化（見 `.claude/content-backlog.md`）
- [ ] 名人錄擴充（9 位待撰寫）
- [ ] 歷史事件章節（6 篇待撰寫）
- [ ] 安全章節擴充（4 篇待撰寫）
- [ ] 術語表（6 個待撰寫）
- [ ] 跨章節連結優化

---

## 重要檔案清單

```
~/Blockpedia/
├── .claude/
│   ├── dAAAb-writing-style.md      # 寫作風格指南
│   ├── blockpedia-analysis.md       # 知識庫分析
│   ├── new-summary-proposal.md      # 新目錄提案
│   ├── new-topics-2024-2026.md      # 新主題清單
│   ├── content-backlog.md           # 內容優化待辦清單
│   ├── knowledge-update-agent.md    # 更新 Agent 指令
│   └── SESSION-CHECKPOINT.md        # 本檔案
├── scripts/
│   └── check-links.js               # 連結檢查工具
├── CLAUDE.md                        # Claude Code 指引
├── SUMMARY.md                       # 目錄（26 章）
└── [各主題目錄]                      # 全部已完成
```

---

## Git 設定

```
user.name: dAAAb
user.email: dablog@gmail.com
remote: https://github.com/dAAAb/Blockpedia.git
branch: master
```

---

## 用戶偏好

- 語言：正體中文
- 不要安全警示符號
- 目錄可修改，原創內文不可改
- 重視知識的循序漸進架構
- 已授權自主撰寫工作

---

## 寫作風格提醒

新內容需遵循 dAAAb 風格：
- 比喻類比法（用生活場景解釋複雜概念）
- 循序漸進（從基礎到進階）
- 對話式口吻（像朋友解釋）
- 正體中文台灣用語
- GitBook 格式（hint、表格、清單）

---

## 工具使用

連結檢查：
```bash
node scripts/check-links.js
```

---

## 下次對話開場建議

> 請讀取 `~/Blockpedia/.claude/SESSION-CHECKPOINT.md` 了解目前進度，然後繼續 Blockpedia 知識庫的工作。

---

**最後更新**：2026-01-07
**完成進度**：26/26 新章節已完成（78+ 篇新文章）
