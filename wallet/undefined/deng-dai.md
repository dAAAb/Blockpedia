# 等待完成交易

**等待完成交易（英文：Transaction Pending）表示交易需求及內容已經被送上區塊鏈，但還未經過礦工查認驗證，也還沒登錄上鏈（寫入**[**區塊鏈帳本**](../../ledger.md)**）因此還不能算是交易成功。**

等待完成交易表示這筆交易已排上隊伍，等待有緣或被你提供的交易手續費吸引的礦工（某台運行區塊鏈結點的電腦）來幫你驗證。到了這一步，多半只要等待就好，但若是餘額無誤，也沒有[雙花問題]()，基本上只要等待一段時間，就會被確認。

### 等待完成的交易有可能失敗嗎？

有可能。

在以太坊區塊鏈上，因為存在「智能合約」這種東西，且有「Gas 限制」的設計，有時候 Pending 一段時間之後，區塊鏈會回傳錯誤或失敗，原因可能在於用來付給礦工的 Gas 不夠用了，或是演算交易的「智能合約程式」有錯誤。雖然機率很低，但偶爾還是會發生。

