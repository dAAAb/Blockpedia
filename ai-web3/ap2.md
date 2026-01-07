---
description: 如果說 x402 是 Coinbase 對 HTTP 支付的回答，AP2 就是 Google 的版本。
---

# AP2 Protocol
> **最後更新：2026 年 1 月**


## AP2（Agent Payment Protocol 2）是 Google 於 2025 年推出的 AI 支付協議，整合 Google 生態系的 AI 服務支付。

如果說 [x402](x402.md) 是 Coinbase 對 HTTP 支付的回答，AP2 就是 Google 的版本。

### Google 的 AI 野心

Google 在 AI 領域投入巨大：
- **Gemini** — Google 的大型語言模型
- **Google Cloud AI** — 企業級 AI 服務
- **Google Assistant** — 消費級 AI 助理
- **DeepMind** — 頂尖 AI 研究機構

這些 AI 服務都需要付費機制。傳統上是綁定 Google 帳號、信用卡扣款。但當 AI Agent 需要自主付款時，這套機制就不夠用了。

AP2 應運而生。

### AP2 的設計理念

AP2 的核心理念是「Agent-first」——從一開始就為 AI Agent 設計，而不是把人類的支付系統硬套到 AI 上。

幾個關鍵設計：

**1. 身分識別**
- AI Agent 有自己的身分（不依賴人類帳號）
- 可以追蹤每個 Agent 的交易歷史
- 支援 Agent 之間的信任評分

**2. 授權機制**
- 細粒度的權限控制
- 可以授權「只能買 A 類服務」而非全部
- 支援時間限制、金額限制

**3. 多鏈支援**
- 不只支援單一區塊鏈
- 可以用 USDC（以太坊）、PYUSD（Solana）等
- 甚至支援傳統支付作為備援

### 與 x402 的比較

| 特性 | x402 | AP2 |
|------|------|-----|
| 推出方 | Coinbase | Google |
| 基礎協議 | HTTP 402 | 自定義協議 |
| 主要鏈 | Base | 多鏈 |
| 生態系 | 開放 | Google 整合 |
| 標準化程度 | 更開放 | 更封閉 |

兩者其實可以互通。AP2 可以接受 x402 格式的支付請求，x402 服務也可以整合 AP2 的身分系統。

### 實際應用場景

**場景一：AI 助理使用 Google 服務**

你的 AI 助理需要：
1. 用 Google Maps API 查路線（付費）
2. 用 Google Translate API 翻譯（付費）
3. 用 Gemini API 生成內容（付費）

有了 AP2，這些都可以自動完成，帳單彙整到你的 Google 帳戶。

**場景二：企業 AI 工作流**

企業部署多個 AI Agent 協作：
- Agent A 負責資料收集
- Agent B 負責分析
- Agent C 負責報告生成

每個 Agent 都有自己的預算和權限，AP2 追蹤所有交易，生成詳細報表。

**場景三：第三方 AI 服務**

非 Google 的 AI 服務也可以接入 AP2：
- 使用 Google 的身分驗證
- 接受 AP2 格式的支付
- 出現在 Google AI 服務目錄中

### TAP：Visa 的回應

看到 Coinbase 和 Google 都在佈局 AI 支付，傳統支付巨頭 Visa 也坐不住了。

Visa 推出 **TAP（Token Allowance Protocol）**：

- 讓 AI Agent 使用傳統金融軌道
- 商戶不需要接受加密貨幣
- 背後還是信用卡網路，但前端支援 AI Agent

TAP 的優勢是相容性——全世界已經有幾千萬商戶接受 Visa，TAP 讓 AI 可以在這些地方消費。

{% hint style="info" %}
2025 年底，x402、AP2、TAP 三種協議開始互通，形成 AI 支付的基礎設施。
{% endhint %}

### 對開發者的意義

如果你是開發者，現在有三個選擇：

1. **只接 x402** — 最簡單，開源標準
2. **只接 AP2** — 如果你的用戶主要在 Google 生態系
3. **都接** — 用戶最多，但開發成本較高

大部分服務最終會選擇都支援，就像現在的網站同時接受 Visa、Mastercard、Apple Pay 一樣。

### Google 的策略

Google 推 AP2 的策略很清楚：

1. **鞏固 AI 生態系** — 讓 AI Agent 優先使用 Google 服務
2. **收集數據** — 了解 AI Agent 的行為模式
3. **建立標準** — 成為 AI 支付的基礎設施
4. **未來變現** — 可能收取平台費用

這跟 Google 一貫的策略一致：先免費推廣，建立生態系，然後找方法變現。

### 隱私考量

使用 AP2 意味著 Google 知道你的 AI Agent 在做什麼：
- 呼叫了哪些服務
- 花了多少錢
- 什麼時間、什麼頻率

如果你重視隱私，可能要考慮：
- 使用 x402 這類更開放的協議
- 自己運行節點
- 使用隱私幣（但這會限制可用服務）

沒有完美的方案，需要在便利性和隱私之間取捨。

---

#### 參考資料

- [Google Cloud AI 官網](https://cloud.google.com/ai)
- [Visa TAP 公告](https://usa.visa.com/about-visa/newsroom.html)
- [AI Payment Protocols Compared](https://www.coindesk.com/tech/ai-payment-protocols/)

---

#### 相關條目

* [Runes Protocol](../bitcoin/runes.md)
* [0x Protocol](../jiao-yi-suo/qu-zhong-xin-hua-jiao-yi-suo/0x.md)
* [x402 Protocol](x402.md)
* [AI Agent 支付](ai-agent-payments.md)

#### 參考資料

<!-- TODO: 添加外部參考連結 -->
