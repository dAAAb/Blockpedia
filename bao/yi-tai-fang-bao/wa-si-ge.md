# 燃料價格

**燃料價格（英文：Gas Price）**就是交易發起者願為每單位交易燃料費所付出的價格，單位是以太幣。

Gas 是一個虛擬單位，主要是把交易者所願意付出的「算力費用」數字化，而 Gas Price 就是把這個算力數值「價格化」。每單位燃料價格越高，就代表在這筆交易在以太坊區塊鏈上每運算一步，願意付出多少以太幣（ETH）。

燃料價格費用是用以太幣支付，且以 Gwei 做單位。Gwei 這個詞聽起來陌生，但多玩以太坊的人就知道了，每轉一次帳，每買一次謎戀貓，都要付以 Gwei 做計算的燃料費用。Gwei 就是某個微小數量的以太幣的單位。例如，0.1 美金，可以叫做 1 美分；0.1 台幣，可以叫做 1 毛錢。1 Gwei 就是 0.000000001 ETH。

所以，聰明如你，一定想到了，當你設定 Gas Price = 20 Gwei ，就是說，你願意為每個運算付出 0.00000002 ETH 的代價。

而**實際交易手續費（**[**Tx**](../undefined/) **Fee）= 實際運行步數（Actual Gas Used）x  每步運算的價錢（Gas Price）**

例如你要以太坊礦工替你完成 5 步的運算，而 Gas Price 設定 20 Gwei，那麼整個交易就需要耗費 5 \* 2 = 100 Gwei 的燃料（算力費用）了。

如何決定燃料價格？

如同「[燃料](wa-si.md)」條目裡所說「同樣的一筆交易，願意出比較多燃料費的人，就可以比其他出較低燃料費用的人更快完成交易。有點像礦工隨時都在搶願意出高價讓他挖礦（驗證）的人。」

如果很多人同時想要進行交易，而且都想要趕快被驗證，完成交易，那會發生什麼事？

沒錯，交易費用就會上升，因為所有人都想提高燃料單價來引誘礦工優先替自己工作；反之，如果都某個時間之內，以太坊網路很冷清，都沒有人發出交易，又或者，突然間多了很多新礦工，殺價競爭，那麼發起交易者，便只需一點點的燃料費，就能讓交易被驗證完成。也就是說：以太坊網路交易費（平均 Gas Price）下降了。

平均 Gas Price

在這個頁面裡， Etherscan 公司提供了 Ethergasstation 工具 [https://ethgasstation.info/](https://ethgasstation.info/) 協助偵測並推算了整個以太坊網路的使用狀態，告訴使用者現在的平均燃料價格（Gas Price Standard）：

{% embed data="{\"url\":\"https://ethgasstation.info/ \",\"type\":\"link\",\"title\":\"ETH Gas Station\",\"description\":\"ETH gasprice recommendations\",\"icon\":{\"type\":\"icon\",\"url\":\"https://ethgasstation.info/images/android-icon-192x192.png\",\"width\":192,\"height\":192,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://ethgasstation.info/images/ETHGasStation.png\",\"width\":1024,\"height\":1024,\"aspectRatio\":1}}" %}

例如下面這張圖是筆者寫作時的以太坊網路現狀及燃料費狀態，平均每筆燃料費用是 2.6 Gwei，而且只要付出足夠的燃料量 x 平均燃料費，大約在 1.63 分鐘內可以完成交易驗證。

![](../../.gitbook/assets/ying-mu-kuai-zhao-20180828-xia-wu-6.26.47.png)

以太坊網路很貼心，對於總是精打細算的使用者，也很照顧到。「如果我能清楚知道整個網路現在礦工工作狀態，發起交易的數量，以及大家願意付出的燃料費用」那麼我們就能知道付多少燃料費，可以排多前面完成交易，又，大概付多少燃料費，我的交易不會比大多數人慢。

這件事，以太坊區塊鏈本著透明、共識計算的精神，直接做到了。

