# Blockpedia 知識更新 Agent 指令

此文件定義了用於更新 Blockpedia 區塊鏈百科全書的 Agent 指令模板。

---

## 使用方式

當需要更新知識庫時，將以下 Prompt 提供給 Claude Code：

```
請幫我研究並整理最新的區塊鏈/Web3 發展，以更新 Blockpedia 知識庫。

請搜尋以下領域的最新動態：

1. **協議與基礎設施**
   - 新公鏈發展 (Solana, Base, Sui, Aptos, TON 等)
   - Layer 2 進展
   - 跨鏈協議

2. **DeFi 去中心化金融**
   - 新穩定幣
   - 借貸協議
   - DEX 發展
   - Liquid Staking / Restaking

3. **數位資產**
   - Bitcoin 生態 (Ordinals, BRC-20, Runes, ETF)
   - NFT 趨勢
   - RWA 代幣化
   - Memecoins

4. **AI x Web3**
   - AI Agent 支付協議
   - 去中心化 AI

5. **新興應用**
   - 預測市場
   - DePIN
   - 去中心化社交
   - GameFi

6. **監管與法規**
   - 各國 CBDC 進展
   - 歐盟 MiCA
   - 美國政策
   - 亞太地區法規

7. **企業採用**
   - 傳統金融機構進入 Web3
   - 企業級穩定幣
   - 支付整合 (Stripe, Block, PayPal 等)

8. **安全事件**
   - 重大駭客事件
   - 交易所倒閉
   - 詐騙手法更新

請整理成結構化報告，包含：
- 主題名稱
- 簡要說明
- 重要數據/里程碑
- 建議新增到 Blockpedia 的位置
- 資料來源連結
```

---

## 搜尋關鍵字清單

定期更新時使用的搜尋關鍵字：

```
Web3 trends [YEAR]
blockchain developments [YEAR]
crypto regulatory updates [YEAR]
new stablecoins [YEAR]
CBDC progress [YEAR]
DeFi innovations [YEAR]
NFT trends [YEAR]
Layer 2 blockchain [YEAR]
RWA tokenization [YEAR]
DePIN [YEAR]
AI crypto Web3 [YEAR]
prediction markets crypto [YEAR]
Bitcoin Ordinals BRC-20 [YEAR]
Ethereum upgrades [YEAR]
crypto regulation MiCA [YEAR]
Hong Kong Singapore crypto [YEAR]
```

---

## 更新頻率建議

| 領域 | 建議頻率 |
|------|----------|
| 監管法規 | 每季 |
| 新穩定幣 | 每季 |
| 技術發展 | 每半年 |
| 價格/市值數據 | 不建議追蹤（易過時）|
| 重大事件 | 即時 |

---

## 更新原則

1. **不修改 dAAAb 原創內容** — 只新增或補充
2. **遵循寫作風格** — 參考 `.claude/dAAAb-writing-style.md`
3. **標註來源** — 所有新增內容附上參考連結
4. **標註更新日期** — 新增內容註明資料截止日期
5. **保持循序漸進** — 新主題放在適當的知識順序位置

---

## 輸出格式

更新報告應包含：

```markdown
# Blockpedia 知識更新報告
日期：YYYY-MM-DD

## 新增主題建議
| 主題 | 章節位置 | 優先級 |
|------|----------|--------|
| ... | ... | 高/中/低 |

## 需更新的現有條目
| 條目 | 更新內容 | 原因 |
|------|----------|------|
| ... | ... | ... |

## 已過時需標註的內容
| 條目 | 建議處理 |
|------|----------|
| ... | 標註為歷史條目 / 移除 |

## 詳細內容
### [主題名稱]
- 說明：...
- 重要數據：...
- 來源：[連結]
```

---

## 最近一次更新

**日期**：2026-01-07

**新增主題**：
- AI x Web3 (x402 Protocol)
- 預測市場 (Polymarket)
- CBDC
- RWA 代幣化
- DePIN
- 全球監管框架
- 新穩定幣 (USDe, PYUSD, USD1, JPYC)
- Bitcoin ETF
- Bitcoin Ordinals / BRC-20
- Web3 支付 (Stripe Bridge, Block BTC)

詳見：`.claude/new-topics-2024-2026.md`
