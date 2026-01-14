---
description: 芝加哥指數是指由芝加哥商品交易所（CME）等機構發布的比特幣參考價格，是機構投資者的重要定價基準。
---

# 芝加哥指數

### 芝加哥指數通常指的是由芝加哥商品交易所（CME）等傳統金融機構編制的比特幣參考價格。和 CoinMarketCap 這類加密原生的價格不同，芝加哥指數更受傳統金融機構信任，是比特幣期貨和 ETF 的重要定價基準。

---

## 什麼是 CME CF Bitcoin Reference Rate？

CME（芝加哥商品交易所）和 CF Benchmarks 合作發布的比特幣參考匯率：

| 項目 | 說明 |
|------|------|
| 全名 | CME CF Bitcoin Reference Rate (BRR) |
| 發布方 | CME + CF Benchmarks |
| 發布時間 | 每天倫敦時間下午 4 點 |
| 數據來源 | 多個合規交易所的交易數據 |
| 用途 | CME 比特幣期貨的結算價格 |

{% hint style="info" %}
**為什麼需要這個指數？**

傳統金融機構不信任加密貨幣交易所的數據（擔心刷量、操縱）。他們需要一個「可信的」價格參考，這就是 CME 比特幣指數的價值。
{% endhint %}

---

## 芝加哥指數的數據來源

BRR 從這些交易所獲取數據：

| 交易所 | 說明 |
|--------|------|
| Coinbase | 美國最大合規交易所 |
| Bitstamp | 歐洲老牌交易所 |
| Kraken | 美國合規交易所 |
| Gemini | Winklevoss 兄弟的交易所 |
| LMAX Digital | 機構級交易所 |

這些都是經過嚴格合規審查的交易所。

---

## 計算方式

```
1. 收集多個交易所的交易數據
2. 計算一小時內的成交量加權平均價
3. 排除異常值和可疑交易
4. 得出最終參考價格
```

這種方法減少了單一交易所操縱價格的可能性。

---

## 為什麼芝加哥指數重要？

### 1. 比特幣期貨定價

CME 比特幣期貨使用 BRR 作為結算價格。這是全球最大的比特幣期貨市場之一。

### 2. ETF 定價基準

許多比特幣 ETF（如現貨 ETF）使用類似的指數作為定價基準。

### 3. 機構信任

傳統金融機構（銀行、基金、保險公司）更信任這種受監管的價格數據。

{% hint style="success" %}
**比特幣現貨 ETF**

2024 年美國批准比特幣現貨 ETF 後，這類指數變得更加重要。ETF 需要一個公正、透明的價格基準來計算淨值。
{% endhint %}

---

## 芝加哥指數 vs CoinMarketCap

| 比較 | 芝加哥指數 | CoinMarketCap |
|------|-----------|---------------|
| 發布方 | 傳統金融機構 | 加密原生公司 |
| 數據源 | 合規交易所 | 幾乎所有交易所 |
| 監管 | 受 CFTC 監管 | 不受金融監管 |
| 更新頻率 | 每日一次 | 即時更新 |
| 主要用戶 | 機構投資者 | 散戶投資者 |
| 信任度 | 傳統金融高度信任 | 加密圈廣泛使用 |

---

## 其他加密貨幣指數

除了 CME 的 BRR，還有其他機構級指數：

| 指數 | 發布方 | 說明 |
|------|--------|------|
| MVIS CryptoCompare | VanEck | 多幣種指數 |
| Nasdaq Crypto Index | Nasdaq | 納斯達克編制 |
| S&P Crypto Index | S&P | 標普編制 |
| Bloomberg Galaxy | Bloomberg | 彭博編制 |

---

## 延伸閱讀

- [CoinMarketCap](cmc.md) — 散戶常用的價格查詢
- [幣價](README.md) — 價格是怎麼來的
- [期貨](../../defi/qi-huo.md) — 芝加哥指數的應用場景

---

#### 參考資料

- [CME CF Bitcoin Reference Rate](https://www.cmegroup.com/markets/cryptocurrencies/bitcoin/bitcoin-reference-rate.html)
- [CF Benchmarks](https://www.cfbenchmarks.com/)
