---
description: 零知識證明（ZKP）被認為是區塊鏈擴容的「終極方案」。
---

# zkSync
> **最後更新：2026 年 1 月**


## zkSync 是基於零知識證明的 Layer 2，代表了 ZK Rollup 技術的重要進展，以原生帳戶抽象著稱。

零知識證明（ZKP）被認為是區塊鏈擴容的「終極方案」。

**zkSync** 是這個願景的先驅之一。

它用數學證明來保障安全，而不是「樂觀」地假設交易有效。

### zkSync 是什麼？

zkSync 是由 Matter Labs 開發的 ZK Rollup。

- **開發者**：Matter Labs
- **代幣**：ZK
- **類型**：ZK Rollup（zkEVM）
- **特色**：原生帳戶抽象、zkEVM

### 版本演進

**zkSync Lite（1.0）**

- 2020 年上線
- 只支援轉帳和簡單操作
- 不支援智能合約

**zkSync Era（2.0）**

- 2023 年主網上線
- 完整智能合約支援
- zkEVM 兼容
- 這是現在的主力版本

### ZK Rollup 原理

與 Optimistic Rollup 不同，zkSync 使用**有效性證明**：

**流程**

1. 用戶發送交易
2. 排序器執行交易
3. 生成零知識證明（ZKP）
4. 證明提交到以太坊
5. 以太坊驗證證明

**核心區別**

| Optimistic Rollup | ZK Rollup |
|-------------------|-----------|
| 假設交易有效 | 數學證明交易有效 |
| 需要挑戰期（7天）| 不需要挑戰期 |
| 提款慢 | 提款快 |
| 計算成本低 | 計算成本高 |

### 零知識證明

**什麼是零知識證明？**

一種密碼學技術，可以證明某件事是真的，而不透露任何額外信息。

**類比**

想像你在山洞裡找到了一條秘密通道。

你想證明你知道通道在哪，但不想告訴別人位置。

解決方案：讓別人在山洞外等，你從一邊進去，從另一邊出來。

你證明了「我能穿過山洞」，但沒透露「怎麼穿過」。

**在 zkSync 中**

- 證明「這批交易都是有效的」
- 不需要在鏈上重新執行所有交易
- 只需要驗證一個簡短的證明

### 原生帳戶抽象

zkSync 的獨特功能。

**什麼是帳戶抽象？**

傳統以太坊有兩種帳戶：
- EOA（外部擁有帳戶）：由私鑰控制
- 合約帳戶：由代碼控制

帳戶抽象統一了這兩種帳戶，讓所有帳戶都可以有自定義邏輯。

**zkSync 的實現**

zkSync 從協議層面支援帳戶抽象：
- 不需要額外的智能合約
- 更高效
- 更好的用戶體驗

**好處**

- **社交恢復**：丟失私鑰可以恢復
- **Gas 抽象**：可以用 ERC-20 代幣付 Gas
- **批量交易**：一次簽名執行多筆交易
- **自定義簽名**：支援不同的簽名方案

### ZK 代幣

2024 年 6 月，zkSync 進行了大規模空投。

**空投**

- 對早期用戶和貢獻者空投
- 根據活動程度分配
- 引發了一些爭議（標準問題）

**功能**

- 治理投票
- 協議決策

### 生態系統

zkSync Era 的生態在成長：

**DeFi**

| 協議 | 類型 |
|------|------|
| SyncSwap | 原生 DEX |
| Mute.io | 原生 DEX |
| ZeroLend | 借貸 |
| Maverick | DEX |

**基礎設施**

- Chainlink（預言機）
- The Graph（索引）

**橋接**

- 官方橋
- LayerZero
- 其他跨鏈橋

### 費用

zkSync 的費用結構：

**組成**
- L2 執行費
- ZK 證明生成費
- L1 數據和驗證費

**EIP-4844 影響**

2024 年升級後，費用進一步下降。

### 使用 zkSync

**1. 添加網路**

在 MetaMask 添加：
- 網路名稱：zkSync Era Mainnet
- RPC URL：https://mainnet.era.zksync.io
- Chain ID：324

**2. 橋接**

官方橋：[bridge.zksync.io](https://bridge.zksync.io)

第三方橋：
- Orbiter Finance
- LayerSwap
- Across

**3. 使用 DApp**

連接錢包，在 zkSync 上操作。

### zkEVM

**什麼是 zkEVM？**

讓 ZK Rollup 兼容以太坊虛擬機（EVM）。

**為什麼重要？**

- 開發者可以用 Solidity
- 現有合約可以遷移
- 降低採用門檻

**zkSync 的 zkEVM**

zkSync Era 使用自己的 zkEVM：
- 高度兼容但不是 100%
- 某些操作需要適配
- 正在持續改進

### 與 StarkNet 比較

| 面向 | zkSync | StarkNet |
|------|--------|----------|
| 證明系統 | SNARK | STARK |
| 語言 | Solidity | Cairo |
| EVM 兼容 | 高（zkEVM）| 不同 |
| 帳戶抽象 | 原生 | 原生 |
| 成熟度 | 主網 | 主網 |

### Hyperchains

zkSync 的擴展願景。

**什麼是 Hyperchains？**

讓任何人基於 zkSync 技術建立自己的 L2/L3：
- 共享安全性
- 互操作性
- 自定義

類似 Optimism 的 Superchain 和 Arbitrum 的 Orbit。

### 風險

**1. 技術複雜性**

ZK 技術更複雜，可能有未知問題。

**2. zkEVM 兼容性**

不是 100% EVM 兼容，某些合約可能需要修改。

**3. 中心化**

- 排序器中心化
- 證明者中心化
- 正在改善中

**4. 新技術風險**

ZK 技術還在快速發展，可能有變化。

### 未來發展

**1. 去中心化**

排序器和證明者去中心化。

**2. Hyperchains 生態**

建立 Hyperchains 生態系統。

**3. 性能提升**

ZK 證明生成速度和成本優化。

**4. 更好的兼容性**

進一步提升 EVM 兼容性。

### ZK vs Optimistic

長期來看，ZK Rollup 可能有優勢：

**ZK 的優勢**
- 不需要挑戰期
- 數學保證安全
- 提款更快

**Optimistic 目前的優勢**
- 技術更成熟
- EVM 兼容性更好
- 生態更豐富

未來可能融合：Optimistic Rollup 可能採用 ZK 證明。

{% hint style="info" %}
zkSync 代表了 ZK Rollup 的重要進展。原生帳戶抽象是其獨特優勢。雖然技術更複雜，但 ZK 證明可能是區塊鏈擴容的長期方向。
{% endhint %}

---

#### 參考資料

- [zkSync 官網](https://zksync.io/)
- [zkSync 文檔](https://docs.zksync.io/)
- [zkSync Bridge](https://bridge.zksync.io/)
- [L2Beat zkSync Era](https://l2beat.com/scaling/projects/zksync-era)

---

#### 相關條目

* [Optimism](optimism.md)
* [Arbitrum](arbitrum.md)

#### 參考資料

<!-- TODO: 添加外部參考連結 -->
