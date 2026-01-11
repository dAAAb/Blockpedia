---
description: 交換 1,000,000 USDC 為 USDT。
---

# Curve Finance
> **最後更新：2026 年 1 月**

> ⚠️ **免責聲明**：本文僅供教育目的，不構成投資建議。加密貨幣投資有風險，請自行研究（DYOR）後再做決定。

## Curve 是專注穩定幣和同類資產交易的 DEX，以極低滑點著稱，是 DeFi 流動性的核心樞紐。

交換 1,000,000 USDC 為 USDT。

在 Uniswap，滑點可能是 0.3%。
在 Curve，滑點可能只有 0.01%。

這個差距意味著**數千美元**。

這就是為什麼大戶都用 **Curve**。

### Curve 是什麼？

Curve Finance 是專門為穩定幣和「同類資產」設計的 DEX。

- **創辦人**：Michael Egorov
- **創立**：2020 年
- **代幣**：CRV
- **特色**：超低滑點、穩定幣專家

### 為什麼穩定幣需要專門的 DEX？

Uniswap 的 x * y = k 公式適合波動資產。

但對於應該維持 1:1 的穩定幣，它效率不高。

**問題**

USDC 和 USDT 理論上都等於 $1。
但用 Uniswap 的公式，大額交易會產生不必要的滑點。

**Curve 的解決方案**

專門設計的曲線，假設資產價格接近：
- 在 1:1 附近，曲線非常平坦（低滑點）
- 價格偏離時，曲線變陡（提供保護）

這就是 **StableSwap** 算法。

### StableSwap 算法

Curve 的核心創新。

**傳統 AMM（Uniswap）**

曲線是雙曲線，所有價格點滑點一致。

**StableSwap（Curve）**

曲線在中間區域（1:1 附近）更平坦：
- 小幅偏離：幾乎零滑點
- 大幅偏離：滑點增加（保護機制）

**結果**

穩定幣交易的滑點可以低至 0.01%。

### 主要池

Curve 有很多流動性池：

**3pool（最經典）**
- DAI + USDC + USDT
- DeFi 的「美元樞紐」
- 巨大的流動性

**stETH/ETH**
- Lido 的 stETH 與 ETH
- 流動性質押代幣的主要市場

**TriCrypto**
- USDT + WBTC + ETH
- 非穩定幣資產

**各種穩定幣池**
- FRAX/USDC
- LUSD/3pool
- 還有很多...

### CRV 代幣

Curve 的治理和激勵代幣。

**獲取方式**
- 提供流動性（挖礦獎勵）
- 購買

**用途**
- 治理投票
- 鎖定獲得 veCRV
- 投票決定獎勵分配

### veCRV（投票鎖定）

Curve 引入了 **ve（vote-escrowed）** 模型。

**怎麼運作？**

1. 把 CRV 鎖定（最長 4 年）
2. 獲得 veCRV
3. 鎖定越久，veCRV 越多

**veCRV 的權利**
- 投票決定 CRV 獎勵分配到哪些池
- 獲得協議收入的一部分
- 提升自己的挖礦收益（boost）

### Curve Wars

veCRV 可以決定 CRV 獎勵流向哪裡。

這引發了「**Curve Wars**」：各項目爭奪 veCRV 影響力。

**為什麼重要？**

如果你的項目在 Curve 有池：
- 更多 CRV 獎勵 = 更高 APY
- 更高 APY = 更多流動性
- 更多流動性 = 更好的交易體驗

**Convex Finance**

Curve Wars 的主角：
- 聚合 CRV 持有者
- 成為最大的 veCRV 持有者
- 控制大量 CRV 獎勵流向

### crvUSD

2023 年，Curve 推出自己的穩定幣 **crvUSD**。

**特點**
- 用 Curve 的資產作抵押
- 創新的清算機制（LLAMMA）
- 軟清算而非硬清算

**LLAMMA（清算機制）**

傳統借貸：價格跌到閾值，一次性清算。

crvUSD：價格下跌時，逐步把抵押品換成穩定幣（軟清算）；價格回升時，換回抵押品。

這減少了清算的突然性和損失。

### 費用結構

**交易費**

通常 0.04%（穩定幣池）到 0.4%（其他池）。

**費用分配**
- 50% 給流動性提供者
- 50% 給 veCRV 持有者

### 使用 Curve

**交易**

1. 訪問 [curve.fi](https://curve.fi)
2. 連接錢包
3. 選擇要交換的代幣
4. 確認交易

**提供流動性**

1. 選擇池
2. 存入代幣
3. 獲得 LP 代幣
4. 可以質押獲得 CRV 獎勵

### 多鏈部署

Curve 部署在多條鏈上：

- Ethereum（主網）
- Arbitrum
- Optimism
- Polygon
- Avalanche
- Fantom
- 還有更多...

### 風險

**1. 智能合約風險**

2023 年，Curve 遭遇重入攻擊，損失數千萬美元。

**2. 脫鉤風險**

如果池中的穩定幣脫鉤，提供流動性者會遭受損失。

**3. CRV 價格風險**

CRV 獎勵的價值取決於 CRV 價格。

**4. 集中化風險**

veCRV 的權力集中在少數大持有者手中。

### Curve vs Uniswap

| 面向 | Curve | Uniswap |
|------|-------|---------|
| 專長 | 穩定幣/同類資產 | 所有代幣 |
| 滑點（穩定幣）| 極低 | 較高 |
| 資本效率 | 高（同類）| V3 很高 |
| 複雜度 | 較高 | 中等 |
| 代幣經濟 | ve 模型 | 傳統治理 |

**何時用 Curve？**
- 大額穩定幣兌換
- stETH/ETH 交易
- 追求最低滑點

**何時用 Uniswap？**
- 一般代幣交易
- 長尾代幣
- 更簡單的操作

### 在 DeFi 中的地位

Curve 是 DeFi 的核心基礎設施：

**流動性樞紐**

很多協議依賴 Curve 池：
- 穩定幣項目需要 Curve 池證明流動性
- 流動性質押項目需要 Curve 池

**價格發現**

Curve 池的價格是很多穩定幣的參考價格。

**收益來源**

Curve 是很多收益策略的基礎組件。

### 未來發展

**1. crvUSD 成長**

推動自己的穩定幣採用。

**2. 多鏈擴張**

在更多區塊鏈上部署。

**3. 產品創新**

更多類型的池和機制。

**4. 與其他協議整合**

更深的 DeFi 生態整合。

{% hint style="info" %}
Curve 是 DeFi 的「穩定幣交易所」。如果你需要大額穩定幣兌換，Curve 幾乎總是最佳選擇。它的 ve 代幣經濟也成為很多項目的參考模型。
{% endhint %}

---

#### 參考資料

- [Curve Finance](https://curve.fi/)
- [Curve 文檔](https://resources.curve.fi/)
- [CRV 代幣資訊](https://www.coingecko.com/en/coins/curve-dao-token)
- [Convex Finance](https://www.convexfinance.com/)

---

#### 相關條目

* [Uniswap](uniswap.md)

#### 參考資料

<!-- TODO: 添加外部參考連結 -->
