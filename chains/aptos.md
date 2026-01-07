---
description: Sui 和 Aptos 是「雙胞胎」。
---

# Aptos
> **最後更新：2026 年 1 月**


## Aptos 是另一個使用 Move 語言的公鏈，由前 Meta 團隊創立，以 Block-STM 並行執行引擎著稱。

**Sui** 和 **Aptos** 是「雙胞胎」。

都來自 Meta 的 Diem 項目。
都使用 Move 語言。
都在 2023 年上線。

但它們走的路不同。

### Aptos 是什麼？

Aptos 是高性能 Layer 1 公鏈。

- **開發者**：Aptos Labs
- **創辦人**：Mo Shaikh、Avery Ching（前 Meta）
- **創立**：2022 年主網上線
- **代幣**：APT
- **語言**：Move

### Meta 背景

Aptos 團隊來自 Meta 的區塊鏈項目：

**Libra/Diem 的遺產**
- 世界級的工程團隊
- Move 語言的設計者
- 大規模區塊鏈的經驗

**差異**
- Diem 是聯盟鏈，面向支付
- Aptos 是公鏈，面向通用應用

### Block-STM

Aptos 的核心技術：**Block-STM**。

**什麼是 Block-STM？**

樂觀並行執行引擎：
1. 假設交易不衝突，並行執行
2. 如果有衝突，回滾重試
3. 自動檢測和解決衝突

**好處**
- 高吞吐量
- 開發者不需要手動處理並行
- 自動優化

**與 Sui 的區別**

- Sui：物件級並行（顯式）
- Aptos：Block-STM（隱式）

### Move 語言（Aptos 版本）

Aptos 使用 Move，但有自己的特點：

**Aptos Move vs Sui Move**

| 面向 | Aptos Move | Sui Move |
|------|------------|----------|
| 模型 | 帳戶導向 | 物件導向 |
| 資源存儲 | 在帳戶中 | 獨立物件 |
| 並行處理 | Block-STM | 物件級 |

兩者不完全兼容。

### 生態系統

**DeFi**

| 協議 | 類型 |
|------|------|
| Liquidswap | DEX |
| PancakeSwap | DEX |
| Thala | 穩定幣/DEX |
| Aries | 借貸 |

**NFT 和遊戲**

- Topaz：NFT 市場
- 各種遊戲項目

**錢包**
- Petra（官方）
- Martian
- Pontem

### 與 Sui 比較

| 面向 | Aptos | Sui |
|------|-------|-----|
| 創立 | 2022 | 2023 |
| 模型 | 帳戶導向 | 物件導向 |
| 並行 | Block-STM | 物件級 |
| 共識 | AptosBFT | Narwhal |
| 生態 | 發展中 | 發展中 |

兩者都有潛力，形成良性競爭。

### APT 代幣

**用途**
- 交易手續費
- 質押
- 治理

**分配**
- 社區
- 基金會
- 核心貢獻者
- 投資者

### 融資和背書

Aptos 獲得了頂級 VC 支持：

- a16z
- Jump Crypto
- FTX Ventures（FTX 崩盤前）
- 其他知名投資者

**估值**

主網上線前估值達 40 億美元。

### 挑戰

**1. 生態建設**

Move 生態還在早期：
- 開發者需要學習新語言
- DApp 數量有限
- 需要時間建設

**2. 競爭**

與 Sui、Solana、以太坊 L2 競爭。

**3. 代幣解鎖**

早期投資者的代幣解鎖可能帶來拋壓。

### 技術亮點

**1. 模組化設計**

易於升級和改進。

**2. 形式化驗證**

Move 支援數學證明合約正確性。

**3. 高 TPS**

理論上可達 100,000+ TPS。

### 使用 Aptos

**錢包**
- Petra（官方）
- Martian
- Pontem

**開始**
1. 安裝 Petra 錢包
2. 獲取 APT（交易所）
3. 探索 Aptos 生態

### 未來發展

**1. 生態擴張**

吸引更多開發者和用戶。

**2. 遊戲和 NFT**

低費用適合遊戲應用。

**3. 企業合作**

探索企業用例。

**4. 跨鏈互操作**

與其他區塊鏈連接。

{% hint style="info" %}
Aptos 有 Meta 的技術積累和頂級 VC 背書。Block-STM 是其技術亮點。雖然生態還在早期，但技術基礎扎實。與 Sui 一起，代表了 Move 語言公鏈的發展。
{% endhint %}

---

#### 參考資料

- [Aptos 官網](https://aptoslabs.com/)
- [Aptos 文檔](https://aptos.dev/)
- [Aptos Explorer](https://explorer.aptoslabs.com/)

---

#### 相關條目

* [Solana](solana.md)
* [Avalanche](avalanche.md)

#### 參考資料

<!-- TODO: 添加外部參考連結 -->
