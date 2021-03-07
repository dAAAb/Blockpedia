# Base58

類似於[Base64](base64.md)，由[比特幣](../../bi-te.md)創辦人[Satoshi Nakamoto](../../mi-yin/zhong-ben/)所提出，將原先的64的字元縮減成58個。

## 去除長得很像的字母或是數字

縮減的方式就是去除大寫"I"與小寫"l"這種基本上分辨不出來的字元，另外還有大寫"O"與數字"0"組合，以及"+"與"/"兩個無用符號也被去除。

留下的字元包含：

```text
123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
```



