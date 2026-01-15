---
description: 共識機制是區塊鏈的「投票制度」——讓所有節點在沒有中央機構的情況下，對交易達成一致同意。
---

# 共識

### 想像一個沒有裁判的足球比賽。每次進球，場上的球員、觀眾、甚至路過的人都要一起決定「這球算不算」。共識機制就是這個決定方式。區塊鏈能夠在沒有中央權威的情況下運作，靠的就是共識。

---

## 什麼是共識機制？

| 概念 | 說明 |
|------|------|
| 定義 | 讓分散式網路的所有節點對資料達成一致的方法 |
| 目的 | 解決「誰說了算」的問題 |
| 挑戰 | 如何防止惡意節點破壞系統 |

---

## 主要共識機制

### 常見類型

| 機制 | 全名 | 代表項目 |
|------|------|----------|
| [工作量證明](gong-zuo-liang-ming.md) | Proof of Work (PoW) | Bitcoin、Litecoin |
| [權益證明](yi-ming.md) | Proof of Stake (PoS) | Ethereum 2.0、Cardano |
| [權益授權證明](yi-shou-ming.md) | Delegated PoS (DPoS) | EOS、TRON |
| [授權證明](shou-ming.md) | Proof of Authority (PoA) | 私有鏈、測試網 |

### 比較表

| 機制 | 能耗 | 速度 | 去中心化 | 安全性 |
|------|------|------|----------|--------|
| PoW | 極高 | 慢 | 高 | 極高 |
| PoS | 低 | 快 | 中 | 高 |
| DPoS | 低 | 極快 | 低 | 中 |
| PoA | 低 | 極快 | 極低 | 中 |

---

## 共識的三難困境

```
區塊鏈的三難困境（Blockchain Trilemma）：

        安全性
         /\
        /  \
       /    \
      /______\
  去中心化    可擴展性

問題：
- 很難同時達到三者
- 必須做取捨

例子：
- Bitcoin：安全+去中心化，但慢
- EOS：快速+安全，但較中心化
```

{% hint style="info" %}
**為什麼要理解共識？**

共識機制決定了一條鏈的特性：
- 挖礦？還是質押？
- 交易快還是慢？
- 誰有權力打包區塊？

了解共識，就是了解這條鏈的「遊戲規則」。
{% endhint %}

---

## 共識演算法

### 相關概念

| 概念 | 說明 |
|------|------|
| [拜占庭將軍問題](gong-yan-suan-fa/bai-zhan-ting.md) | 分散式系統的信任問題 |
| [雙花問題](gong-yan-suan-fa/hua.md) | 防止同一筆錢花兩次 |
| [Tangle](gong-yan-suan-fa/tangle.md) | 非區塊鏈的共識結構 |

---

## 共識演化史

```
共識機制的演化：

2009：PoW（Bitcoin）
      ↓ 太耗電
2012：PoS 概念提出（Peercoin）
      ↓ 需要更快
2014：DPoS（BitShares）
      ↓ 企業需求
2015：PoA（私有鏈）
      ↓ 繼續創新
2022：Ethereum 轉 PoS
```

---

## 延伸閱讀

- [工作量證明](gong-zuo-liang-ming.md) — PoW 詳解
- [權益證明](yi-ming.md) — PoS 詳解
- [拜占庭將軍問題](gong-yan-suan-fa/bai-zhan-ting.md) — 共識的理論基礎

---

#### 參考資料

- [共識機制比較](https://ethereum.org/en/developers/docs/consensus-mechanisms/)
- [Blockchain Trilemma](https://vitalik.eth.limo/general/2021/04/07/sharding.html)

