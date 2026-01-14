---
description: 跨鏈是讓不同區塊鏈之間能夠互相通訊和轉移資產的技術。
---

# 跨鏈

### 跨鏈（Cross-Chain）是讓不同區塊鏈之間能夠「對話」的技術。沒有跨鏈，比特幣和以太坊就像兩座孤島，無法直接互通。跨鏈技術讓資產和資訊可以在不同鏈之間流動。

---

## 為什麼需要跨鏈？

每條區塊鏈都是獨立的世界：

- 比特幣上的 BTC 無法直接送到以太坊
- 以太坊上的 NFT 無法直接移到 Solana
- 不同鏈的 DApp 無法直接互動

跨鏈技術打破這些藩籬，讓多鏈生態能夠互相連通。

---

## 跨鏈的實現方式

### 1. 跨鏈橋（Bridge）

最常見的方式。在來源鏈鎖定資產，在目標鏈鑄造等值的「包裝」資產。

```
ETH 主網                    Arbitrum
   ↓                          ↓
[鎖定 1 ETH] ─────→ [鑄造 1 WETH]
```

### 2. 原子交換（Atomic Swap）

使用雜湊時間鎖合約（HTLC），確保雙方要嘛同時完成交易，要嘛同時取消。不需要中間人。

### 3. 中繼鏈（Relay Chain）

使用一條專門的區塊鏈作為「中轉站」，如 Polkadot 的中繼鏈連接多個平行鏈。

---

## 跨鏈橋的風險

{% hint style="danger" %}
**跨鏈橋是駭客的最愛**

2022 年，跨鏈橋被駭事件損失超過 20 億美元：
- Ronin Bridge：6.25 億美元
- Wormhole：3.2 億美元
- Nomad：1.9 億美元

跨鏈橋集中了大量資產，是攻擊的高價值目標。
{% endhint %}

---

## 主流跨鏈方案

| 項目 | 類型 | 支援的鏈 |
|------|------|----------|
| LayerZero | 跨鏈協議 | 多鏈 |
| Wormhole | 跨鏈橋 | Solana、Ethereum 等 |
| Polkadot | 中繼鏈 | 平行鏈生態 |
| Cosmos IBC | 跨鏈協議 | Cosmos 生態 |

---

## 延伸閱讀

- [跨鏈交易](../../cross-chain-swap-telepor-bridge.md) — 跨鏈操作指南
- [側鏈](../undefined-7.md) — 與主網平行的區塊鏈
- [Layer 2](../../layer2/README.md) — 主網的擴展層

---

#### 參考資料

- [Cross-chain Bridge - Ethereum](https://ethereum.org/en/developers/docs/bridges/)
- [LayerZero](https://layerzero.network/)
