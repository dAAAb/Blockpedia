---
description: 私鑰錢包（Private-key Wallet）簡單講，就是可以讓你匯出「私鑰」、「密鑰庫」 或「助記詞」的錢包。
---

# 私鑰錢包
> **最後更新：2026 年 1 月**


**私鑰錢包（Private-key Wallet）簡單講，就是可以讓你匯出「私鑰」、「密鑰庫」 或「助記詞」的錢包。**

使用私鑰錢包的重點在於，你是私鑰的擁有者，就算之後你想把這個錢包服務或 APP 刪除，你可以很輕易地導出錢包私鑰，將原先使用的錢包內容和資產移到另外一個地方（錢包服務或 APP）使用。

反觀，在「Binance」交易所上的錢包，雖然有入金地址，也能轉帳，但是卻無法導出私鑰。所以本質上，你在交易所裡的資產，其實是 "借放" 在交易所擁有的錢包中，這是有一定風險的，亦即若是交易所倒閉或錢包管理人捲私鑰逃跑，你的資產便會消失。

私鑰錢包能讓你完全掌控你的資產，這表示沒有第三者能凍結或丟失你的資金。然而，你就得要對錢包的安全以及備份自行負責。

### 「地表上只有我有私鑰的錢包」存在嗎？

許多私鑰錢包的 APP 或創建錢包的服務，都號稱將私鑰字串顯示給你看以後，就會清除不會另外記錄。但從資訊安全的角度而言，如果並沒有看到原始碼，我們都無法確認這份私鑰是否真的只有你看過，還是該服務另外存了一個備份在記憶體裡頭。

因此，挑選私鑰錢包，筆者建議採用：

1. 有開放原始碼的錢包優先
2. 不要用來路不明的錢包，有很多使用者的開源錢包是最佳的
3. 數位資產開發者提供的開源錢包

以太坊基金會開發的開源錢包 Mist（ [https://github.com/ethereum/mist/releases](https://github.com/ethereum/mist/releases) ）

{% embed url="https://github.com/ethereum/mist/releases" %}

Cardano 基金會開發的開源 ADA 錢包 Daedalus（ [https://github.com/input-output-hk/daedalus](https://github.com/input-output-hk/daedalus) ）

{% embed url="https://github.com/input-output-hk/daedalus" %}

比特幣的開源錢包 Copay（ [https://github.com/bitpay/copay](https://github.com/bitpay/copay) ）

{% embed url="https://github.com/bitpay/copay" %}

---

#### 相關條目

<!-- TODO: 添加 3-5 個相關頁面連結 -->

#### 參考資料

<!-- TODO: 添加外部參考連結 -->
