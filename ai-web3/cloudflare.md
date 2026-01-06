# Cloudflare AI 支付

## Cloudflare 整合 x402 協議，讓任何使用其 CDN 服務的網站都能輕鬆向 AI Agent 收費。

如果你經營網站，很可能已經在用 Cloudflare。它是全球最大的 CDN（內容分發網路）之一，保護網站免受攻擊、加速全球訪問。

2025 年，Cloudflare 做了一件大事：整合 [x402 協議](x402.md)，讓網站可以一鍵開啟 AI 支付功能。

### 從保護網站到向 AI 收費

Cloudflare 原本的業務是保護和加速網站。但他們發現一個有趣的趨勢：

**越來越多流量來自 AI，而不是人類。**

AI 爬蟲在抓取網站內容、AI Agent 在呼叫 API、AI 搜尋引擎在索引資料。這些 AI 流量：
- 消耗伺服器資源
- 不看廣告（所以沒有廣告收入）
- 有時候還會造成負擔

網站主開始問：**我能不能向這些 AI 收費？**

Cloudflare 說：「可以，我來幫你。」

### 一行設定，開啟 AI 收費

Cloudflare 的 AI 支付方案極為簡單。在 Cloudflare 控制台：

1. 開啟「AI Gateway」功能
2. 設定價格（比如每次 API 呼叫 0.001 USDC）
3. 填入你的錢包地址
4. 完成

接下來，當 AI Agent 來訪問你的網站或 API：

```
AI Agent 發送請求
→ Cloudflare 回傳 402 Payment Required
→ AI Agent 付款到你的錢包
→ Cloudflare 確認收款
→ 放行請求，回傳內容
```

網站主不需要改任何程式碼，Cloudflare 在中間處理一切。

### AI Gateway：不只是收費

Cloudflare 的 AI Gateway 功能不只是收費，還包括：

**流量分析**
- 多少流量來自 AI？
- 哪些 AI 最常來訪？
- 它們在抓取什麼內容？

**訪問控制**
- 白名單：只允許特定 AI 訪問
- 黑名單：封鎖惡意 AI 爬蟲
- 速率限制：每分鐘最多 N 次請求

**內容保護**
- 防止 AI 大規模抓取訓練資料
- 保護付費內容
- 智慧財產權管理

這對內容創作者特別重要。以前 AI 公司可以免費抓取你的內容去訓練模型，現在你可以設定：「要用我的內容？付錢。」

### 使用場景

**場景一：新聞網站**

傳統新聞網站靠訂閱和廣告賺錢。但 AI 來抓內容時：
- 不會訂閱
- 不會看廣告
- 還可能把內容餵給 AI，讓用戶不用再來網站

有了 Cloudflare AI 支付，新聞網站可以：
- 對 AI 收取每篇文章 0.05 USDC
- 或提供 API 存取，每次呼叫收費
- 至少從 AI 流量獲得一些收入

**場景二：API 服務**

你提供一個天氣 API、股價 API、或任何資料服務。

傳統做法：用戶註冊、取得 API Key、月底結算。

Cloudflare 做法：AI Agent 來就付錢，即時結算，不需要註冊。

這大幅降低了使用門檻，特別適合小額、高頻的 AI 呼叫。

**場景三：個人部落格**

甚至個人部落格也可以用。

設定每篇文章 0.01 USDC。人類訪客免費（因為他們不會發 x402 請求），但 AI Agent 要付費。

這可能是創作者新的收入來源。

### 技術細節

Cloudflare 的實作有幾個特點：

**支援的支付方式**
- USDC on Base（最常用）
- USDC on Ethereum
- 其他穩定幣（陸續增加中）

**結算方式**
- 即時結算：每筆交易立即到帳
- 批次結算：累積到一定金額再結算（省手續費）

**手續費**
- Cloudflare 收取交易金額的 1%（比信用卡低很多）
- 區塊鏈手續費另計（Base 鏈通常不到 0.01 美元）

### Cloudflare Workers AI

除了幫網站收費，Cloudflare 自己也提供 AI 服務：**Workers AI**。

這是 Cloudflare 的 AI 推論服務，讓開發者可以在 Cloudflare 的邊緣節點運行 AI 模型。

Workers AI 當然也支援 x402 付款：
- 直接用穩定幣付費
- 不需要綁定信用卡
- AI Agent 可以自主呼叫

形成一個閉環：
- 你的 AI Agent 用 x402 付費呼叫 Workers AI
- Workers AI 幫你處理任務
- 你的 API 再用 x402 向你的客戶收費

### 對網路生態的影響

Cloudflare 的動作可能改變整個網路的遊戲規則。

**對網站主**
- 新的收入來源
- 可以控制 AI 如何使用自己的內容
- 不用擔心 AI 免費搭便車

**對 AI 公司**
- 需要為訓練資料付費
- 營運成本增加
- 但也獲得合法使用內容的管道

**對用戶**
- AI 服務可能漲價（因為成本增加）
- 但 AI 的回答可能更可靠（因為有付費取得正版資料）

{% hint style="info" %}
Cloudflare 處理全球約 20% 的網路流量。當這麼大的平台支援 AI 支付，等於是在推動整個網路的轉型。
{% endhint %}

### 如何開始

如果你有網站想試試：

1. 註冊 Cloudflare（免費方案即可開始）
2. 將網站 DNS 指向 Cloudflare
3. 在控制台開啟 AI Gateway
4. 設定價格和錢包地址
5. 開始收費

即使沒有 AI 來付費，開啟這個功能也沒有壞處——至少可以看看有多少 AI 在訪問你的網站。

---

#### 參考資料

- [Cloudflare AI Gateway 官方文件](https://developers.cloudflare.com/ai-gateway/)
- [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)
- [Cloudflare 支援 x402 公告](https://blog.cloudflare.com/x402-ai-payments/)
