---
description: Parity Signer（現名 Polkadot Vault）是一款將舊手機變成冷錢包的開源應用，由 Parity Technologies 開發。
---

# Parity Signer（iOS, Android）

### 你有舊手機嗎？別丟！Parity Signer 可以把它變成冷錢包。把手機永久開啟飛航模式，它就成了一個完全離線的簽名裝置。這是最便宜的「硬體錢包」方案。

---

## 產品概覽

| 項目 | 說明 |
|------|------|
| 開發者 | Parity Technologies |
| 類型 | 手機 App（離線使用）|
| 現名 | Polkadot Vault |
| 開源 | 完全開源 |
| 費用 | 免費 |

---

## 核心概念

### 舊手機變冷錢包

```
Parity Signer 的原理：

準備工作：
1. 找一台舊手機
2. 恢復原廠設定
3. 安裝 Parity Signer
4. 開啟飛航模式（永久）
5. 從此不再連網

運作方式：
- 手機完全離線
- 私鑰在離線手機中
- 透過 QR Code 與外界溝通
- 電腦顯示 QR Code → 手機掃描
- 手機簽署後顯示 QR Code → 電腦掃描

結果：
- 私鑰永不接觸網路
- 等同硬體錢包的安全性
- 成本：一台舊手機
```

{% hint style="info" %}
**Air-Gapped 裝置**

這種完全離線的裝置稱為「Air-Gapped」（氣隙隔離）。Parity Signer 讓你用舊手機實現這個概念，不需要買專門的硬體錢包。
{% endhint %}

---

## 使用流程

### 設定步驟

```
Parity Signer 設定：

1. 準備舊手機
   - iOS 或 Android 都可
   - 建議恢復原廠設定
   - 確保沒有惡意軟體

2. 安裝 App
   - 在連網狀態下安裝
   - 從 App Store/Play Store

3. 開啟飛航模式
   - 開啟飛航模式
   - 關閉 Wi-Fi、藍牙
   - 從此不再關閉飛航模式

4. 建立帳戶
   - 產生種子詞
   - 手寫備份
   - 建立錢包

5. 開始使用
   - 透過 QR Code 互動
```

### 交易流程

| 步驟 | 說明 |
|------|------|
| 1 | 電腦錢包建立未簽署交易 |
| 2 | 電腦顯示交易 QR Code |
| 3 | 用 Parity Signer 掃描 |
| 4 | 在 Signer 上確認並簽署 |
| 5 | Signer 顯示已簽署 QR Code |
| 6 | 電腦掃描已簽署交易 |
| 7 | 電腦廣播到區塊鏈 |

---

## 支援網路

### 主要支援

| 網路 | 支援程度 |
|------|----------|
| Polkadot | 完整支援 |
| Kusama | 完整支援 |
| Substrate 鏈 | 支援 |
| Ethereum | 支援 |

### 搭配使用

```
Parity Signer 搭配的錢包：

Polkadot 生態：
- Polkadot.js
- SubWallet
- Talisman

Ethereum：
- MetaMask（部分支援）
- 需要透過 QR Code 介面

最佳體驗：
- Polkadot 生態最完整
- Ethereum 支援較有限
```

---

## 安全性分析

### 優點

| 優點 | 說明 |
|------|------|
| 完全離線 | 飛航模式永不關閉 |
| 開源 | 程式碼可審計 |
| 免費 | 不需購買硬體 |
| QR Code | 氣隙傳輸 |

### 風險

| 風險 | 說明 |
|------|------|
| 手機漏洞 | 舊手機可能有未修補漏洞 |
| 使用者錯誤 | 忘記開飛航模式 |
| 無安全晶片 | 不如專用硬體錢包 |
| App 供應鏈 | 下載時要確認來源 |

{% hint style="warning" %}
**安全提醒**

Parity Signer 的安全性很大程度取決於使用者是否正確操作。如果你不小心關閉飛航模式連上網路，安全性就會大打折扣。
{% endhint %}

---

## 與硬體錢包比較

| 比較 | Parity Signer | 專用硬體錢包 |
|------|---------------|--------------|
| 成本 | 免費（舊手機）| $50-200+ |
| 安全晶片 | 無 | 有 |
| 開源 | 完全 | 不一定 |
| 螢幕 | 手機大螢幕 | 通常較小 |
| 幣種支援 | 有限 | 較廣 |
| 便利性 | 中等 | 較高 |

---

## 適合對象

### 推薦給

```
誰適合 Parity Signer：

✓ Polkadot/Kusama 用戶
✓ 有閒置舊手機
✓ 技術能力較強
✓ 預算有限
✓ 重視開源

不推薦給：
✗ 純新手
✗ 主要用其他鏈
✗ 不想麻煩設定
✗ 需要專業客服支援
```

---

## 實作建議

### 最佳實踐

| 建議 | 說明 |
|------|------|
| 專用手機 | 不要用還在使用的手機 |
| 恢復原廠 | 清除所有資料後再安裝 |
| 物理隔離 | 考慮拆除 SIM 卡、遮蔽天線 |
| 定期更新 | 在連網時更新 App，再恢復離線 |

---

## Polkadot Vault

### 更名與演進

| 變化 | 說明 |
|------|------|
| 原名 | Parity Signer |
| 現名 | Polkadot Vault |
| 原因 | 更強調 Polkadot 生態 |
| 功能 | 基本相同 |

---

## 延伸閱讀

- [冷錢包](README.md) — 冷錢包總論
- [DIY 冷錢包](diy-zi-leng-bao-arduino-ban.md) — 其他 DIY 方案
- [Ledger Nano](ledger-nano.md) — 專用硬體錢包

---

#### 參考資料

- [Parity Signer GitHub](https://github.com/paritytech/parity-signer)
- [Polkadot Vault 文件](https://wiki.polkadot.network/docs/polkadot-vault)

