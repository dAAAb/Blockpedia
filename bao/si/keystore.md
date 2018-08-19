# Keystore

Keystore 文件是錢包儲存私鑰的一種文件格式 \(JSON\)，利用用户自定的**私鑰密碼**再對私鑰進行一次加密，讓用戶可以方便保存這個需要密碼才能還原的私鑰檔案。其保護程度取決於用户設定的密碼強度。在使用 Keystore 時有兩點需要注意：

1. 使用不常用，並且盡可能複雜的密碼
2. 一定要記住您的 Keystore 密碼，一旦忘記密碼，那個您就失去了 Keystore 的使用權，並且錢包程式無法幫您找回密碼。

註： Keystore 的密碼是唯一且不可更改的，如果想更改錢包密碼需要使用助記詞重新匯入錢包，並使用更改密碼功能生成新的 Keystore。

目前以太坊就是使用 Keystore 作法來幫助用戶保存私鑰，如創建錢包的平台「[MyEtherWallet](../yi-tai-fang-bao/jian-bao/myetherwallet.md)」會在你創建私鑰或是 Keystore 的時候，要求你輸入一組密碼，之後在其他平台或錢包 APP 要匯入這組私鑰取得資產控制權的時候，便會要求你輸入這組密碼，才能使用。

本則文字部分來自：

{% embed data="{\"url\":\"https://tidewallet.io/ \",\"type\":\"link\",\"title\":\"TideWallet – 實現未來應用的虛擬貨幣錢包\",\"icon\":{\"type\":\"icon\",\"url\":\"https://tidewallet.io/wp-content/uploads/2018/04/cropped-favicon-192x192.png\",\"width\":192,\"height\":192,\"aspectRatio\":1}}" %}

