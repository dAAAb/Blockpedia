---
description: DApp 瀏覽器是專門用來探索和使用去中心化應用的工具，整合錢包功能，讓用戶可以直接與區塊鏈互動。
---

# DApp 瀏覽器

### 一般的網頁瀏覽器（Chrome、Safari）可以連上網站，但無法直接與區塊鏈互動。DApp 瀏覽器就是為此設計的——它把錢包功能整合進瀏覽器，讓你可以無縫使用 DApp。

---

## 什麼是 DApp 瀏覽器？

| 概念 | 說明 |
|------|------|
| 定義 | 可以存取 DApp 的瀏覽器 |
| 核心功能 | 整合加密錢包 |
| 用途 | 探索和使用 DApp |

---

## DApp 瀏覽器類型

### 主要類型

| 類型 | 說明 | 例子 |
|------|------|------|
| 錢包內建瀏覽器 | 錢包 App 內的瀏覽器 | MetaMask Mobile、Trust Wallet |
| 瀏覽器擴充套件 | 在一般瀏覽器加裝錢包 | MetaMask（Chrome 擴充）|
| 專用瀏覽器 | 專門設計的瀏覽器 | Brave Browser |

### 運作方式

```
DApp 瀏覽器的運作：

一般網站：
瀏覽器 → 網站伺服器
（不需要錢包）

DApp：
瀏覽器 + 錢包 → DApp 前端 → 區塊鏈
（需要錢包簽署交易）

流程：
1. 打開 DApp 網站
2. 點擊「連接錢包」
3. 錢包請求授權
4. 授權後可以互動
5. 每次交易需要簽署
```

{% hint style="info" %}
**為什麼需要錢包？**

DApp 需要知道「你是誰」（你的錢包地址），以及讓你「簽名確認」交易。沒有錢包，DApp 無法運作。
{% endhint %}

---

## 常見 DApp 瀏覽器

### 手機端

| 錢包 | 平台 | 特色 |
|------|------|------|
| MetaMask Mobile | iOS、Android | 最多人用 |
| Trust Wallet | iOS、Android | Binance 旗下 |
| Coinbase Wallet | iOS、Android | Coinbase 旗下 |
| Rainbow | iOS、Android | 介面美觀 |

### 桌面端

| 工具 | 說明 |
|------|------|
| MetaMask 擴充 | Chrome、Firefox、Brave |
| Rabby Wallet | 多鏈支援、安全提示 |
| Frame | 隱私導向 |

### 專用瀏覽器

| 瀏覽器 | 特色 |
|--------|------|
| Brave | 內建加密錢包、隱私保護 |
| Opera | 內建加密錢包 |

---

## 使用教學

### 基本步驟

| 步驟 | 說明 |
|------|------|
| 1. 安裝錢包 | 下載 MetaMask 或其他錢包 |
| 2. 創建帳戶 | 記好助記詞！ |
| 3. 存入代幣 | 需要 Gas 費 |
| 4. 連接 DApp | 點擊網站上的「連接」|
| 5. 確認交易 | 每次操作都要簽名 |

### 安全提示

```
使用 DApp 瀏覽器的安全提示：

連接前：
- 確認網址正確（小心釣魚）
- 了解這個 DApp 是什麼

連接時：
- 只授權必要的權限
- 不要簽署看不懂的交易

連接後：
- 定期檢查授權
- 撤銷不用的授權
```

{% hint style="warning" %}
**授權風險**

連接 DApp 時，可能會要求「無限授權」某代幣。這意味著這個合約可以動用你所有的該代幣。只在信任的 DApp 上授權，並定期撤銷。
{% endhint %}

---

## DApp 探索工具

### 發現新 DApp

| 工具 | 說明 |
|------|------|
| [DappRadar](dapp-radar.md) | DApp 排名和數據 |
| [SOTD](sotd.md) | State of the DApps |
| [DefiLlama](https://defillama.com) | DeFi TVL 追蹤 |

---

## 延伸閱讀

- [去中心化應用](README.md) — DApp 介紹
- [Web3](web3.md) — Web3 概念
- [DappRadar](dapp-radar.md) — DApp 數據

---

#### 參考資料

- [MetaMask](https://metamask.io/)
- [Trust Wallet](https://trustwallet.com/)

