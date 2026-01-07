# StarkNet

## StarkNet 是使用 STARK 證明的 ZK Rollup，擁有獨特的 Cairo 語言，代表了 ZK 技術的另一種可能性。

當其他 L2 都在追求「EVM 兼容」時，

StarkNet 選擇了一條不同的路。

它說：「讓我們重新想像智能合約該怎麼寫。」

這就是 **StarkNet** 和它的 **Cairo** 語言。

### StarkNet 是什麼？

StarkNet 是由 StarkWare 開發的 ZK Rollup。

- **開發者**：StarkWare
- **代幣**：STRK
- **特色**：STARK 證明、Cairo 語言
- **創立**：2018 年（公司），2021 年（主網）

### StarkWare 背景

StarkWare 是 ZK 技術的先驅：

**創辦人**

包括 Eli Ben-Sasson，STARK 技術的發明者之一。

**產品**

- **StarkEx**：為特定應用定制的 ZK 解決方案（dYdX v3、Immutable X 等使用）
- **StarkNet**：通用的 ZK Rollup

**技術根基**

深厚的密碼學和數學背景。

### STARK vs SNARK

ZK 證明有兩大類：

**SNARK**（zkSync 等使用）
- **S**uccinct **N**on-interactive **AR**gument of **K**nowledge
- 需要「可信設置」
- 證明較小
- 驗證較便宜

**STARK**（StarkNet 使用）
- **S**calable **T**ransparent **AR**gument of **K**nowledge
- **不需要**可信設置
- 抗量子攻擊
- 證明較大
- 透明度更高

**StarkNet 選擇 STARK 的理由**
- 不需要信任初始設置
- 長期安全性（量子抗性）
- 可擴展性更好

### Cairo 語言

StarkNet 最獨特的地方：不用 Solidity，用 **Cairo**。

**什麼是 Cairo？**

專門為 STARK 證明設計的編程語言。

**為什麼不用 Solidity？**

- Solidity 不是為 ZK 證明設計的
- Cairo 可以更高效地生成證明
- 某些優化在 Solidity 中很難實現

**代價**

- 開發者需要學新語言
- 現有合約不能直接遷移
- 工具鏈不如 Solidity 成熟

**Cairo 1.0**

2023 年，Cairo 進行了重大升級：
- 語法更像 Rust
- 更安全
- 開發體驗改善

### 原生帳戶抽象

和 [zkSync](zksync.md) 一樣，StarkNet 也有**原生帳戶抽象**。

**好處**

- 靈活的簽名方案
- 社交恢復
- Gas 代付
- 批量交易

這是 StarkNet 從第一天就設計進去的功能。

### STRK 代幣

2024 年初，StarkNet 進行了大規模空投。

**空投**

- 對早期用戶和貢獻者空投
- 分配有一定的鎖定期
- 引發了一些爭議

**功能**

- 治理投票
- 可用於支付 Gas
- 質押（未來）

### 生態系統

StarkNet 的生態正在發展：

**DeFi**

| 協議 | 類型 |
|------|------|
| JediSwap | DEX |
| 10K Swap | DEX |
| Nostra | 借貸 |
| zkLend | 借貸 |
| Ekubo | DEX |

**遊戲和 NFT**

由於高效的證明，StarkNet 適合複雜的鏈上遊戲：
- Realms / Loot
- Influence
- 各種全鏈遊戲

**Blockchain Gaming 願景**

StarkNet 強調「鏈上遊戲」：
- 遊戲邏輯完全在鏈上
- 可驗證的遊戲狀態
- 真正的數字所有權

### 費用

StarkNet 的費用：

**組成**
- 計算費
- 數據費

**EIP-4844 影響**

2024 年升級後，費用大幅下降。

**STRK 支付 Gas**

可以用 STRK 代幣支付 Gas 費。

### 使用 StarkNet

**1. 錢包**

StarkNet 需要專門的錢包：
- Argent X
- Braavos

（MetaMask 不直接支援）

**2. 橋接**

官方橋：[starkgate.starknet.io](https://starkgate.starknet.io)

第三方橋：
- Orbiter Finance
- LayerSwap

**3. 使用 DApp**

連接 StarkNet 錢包，開始探索。

### 與 zkSync 比較

| 面向 | StarkNet | zkSync |
|------|----------|--------|
| 證明系統 | STARK | SNARK |
| 可信設置 | 不需要 | 需要 |
| 量子抗性 | 是 | 有限 |
| 語言 | Cairo | Solidity |
| EVM 兼容 | 不同 | zkEVM |
| 帳戶抽象 | 原生 | 原生 |
| 錢包 | 專用 | MetaMask |

**選擇建議**
- 想要 EVM 兼容：zkSync
- 重視長期安全：StarkNet
- 開發複雜應用/遊戲：StarkNet

### StarkEx vs StarkNet

**StarkEx**

- 定制化的 ZK 解決方案
- 為特定應用優化
- 用戶：dYdX v3、Immutable X、Sorare

**StarkNet**

- 通用的 ZK 平台
- 任何人可以部署合約
- 更靈活但可能效率稍低

### 風險

**1. 語言採用**

Cairo 是新語言：
- 學習曲線
- 開發者較少
- 可能有未知問題

**2. 技術複雜性**

STARK 證明系統複雜，可能有問題。

**3. 中心化**

- 排序器目前中心化
- 正在走向去中心化

**4. 工具鏈**

相比 Solidity，Cairo 的工具鏈還不夠成熟。

### 全鏈遊戲願景

StarkNet 特別強調**全鏈遊戲**（Fully On-chain Games）：

**概念**

- 遊戲邏輯完全在鏈上
- 不只是 NFT 和代幣
- 真正可驗證的遊戲狀態

**為什麼 StarkNet 適合？**

- 高效的計算證明
- Cairo 適合複雜邏輯
- 較低的費用

**項目**

- Loot Realms
- Influence
- dojo（遊戲引擎框架）

### 未來發展

**1. 去中心化**

排序器和證明者去中心化。

**2. 性能提升**

證明生成速度和成本優化。

**3. 工具鏈完善**

更好的開發者工具。

**4. 生態成長**

更多 DApp 和用戶。

**5. Volition**

允許選擇數據存儲位置（鏈上或鏈下）。

### Kakarot zkEVM

值得一提的項目：

**Kakarot**

在 StarkNet 上建立的 zkEVM：
- 讓 Solidity 合約可以在 StarkNet 上運行
- 結合 STARK 證明和 EVM 兼容
- 正在開發中

這可能解決 StarkNet 的 EVM 兼容問題。

{% hint style="info" %}
StarkNet 選擇了一條更難但可能更有前途的路。STARK 證明的透明性和量子抗性是長期優勢。Cairo 語言雖然是門檻，但也帶來了獨特的可能性，特別是在複雜的鏈上應用（如遊戲）方面。
{% endhint %}

---

#### 參考資料

- [StarkNet 官網](https://www.starknet.io/)
- [StarkNet 文檔](https://docs.starknet.io/)
- [Cairo 語言](https://www.cairo-lang.org/)
- [L2Beat StarkNet](https://l2beat.com/scaling/projects/starknet)
