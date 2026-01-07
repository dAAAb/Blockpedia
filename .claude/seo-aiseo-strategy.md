# Blockpedia SEO + AISEO 優化策略

## 2025-2026 專業規劃

---

## 一、核心概念：SEO vs AISEO/GEO

| 項目 | 傳統 SEO | AISEO/GEO |
|------|----------|-----------|
| 目標 | Google 搜尋排名 → 獲得點擊 | AI 引擎引用 → 被 LLM 引述 |
| 評估指標 | 排名、流量、點擊率 | 被 ChatGPT/Perplexity 引用次數 |
| 內容偏好 | 長篇深度文章 | 模組化、可獨立引用的段落 |
| 關鍵因素 | 反向連結、權威度 | 結構清晰、事實密度、時效性 |

**關鍵數據**：
- Princeton 研究顯示，GEO 優化可提升 AI 引用率 30-40%
- 被 4+ 個 AI 平台引用的網站，在 ChatGPT 出現的機率高 2.8 倍
- 65% 的 AI 爬蟲優先存取過去一年內更新的頁面

---

## 二、GitBook 平台能力盤點

### 自動處理（無需配置）

| 功能 | 說明 | 對 SEO/AISEO 的價值 |
|------|------|---------------------|
| **Sitemap 自動生成** | `/sitemap-pages.xml` | 幫助搜尋引擎和 AI 爬蟲發現內容 |
| **llms.txt 自動生成** | `/llms.txt`, `/llms-full.txt` | 專門給 LLM 爬蟲的索引檔 |
| **語意結構** | 乾淨的 HTML + Markdown | LLM 易於解析 |
| **伺服器端渲染** | 非 JavaScript 依賴 | 爬蟲可完整讀取 |
| **全球 CDN** | 快速載入 | Google 排名因素之一 |
| **301 重定向** | 頁面搬移自動處理 | 保留 SEO 價值 |
| **Canonical URL** | 避免重複內容 | 防止 SEO 懲罰 |
| **Open Graph** | 社交分享預覽 | 增加曝光 |
| **Markdown 版本** | 每頁都有純文字版 | LLM 友善 |

### 可配置項目

| 功能 | 如何設定 | 建議 |
|------|----------|------|
| **自訂網域** | GitBook 設定 | 建議：使用 `blockpedia.0x1.academy` 或專屬域名 |
| **頁面 URL** | 每頁可自訂 slug | 建議：使用英文關鍵詞（見下方建議）|
| **頁面描述** | 每頁的 description | 必填！這會成為 meta description |
| **圖片 Alt 文字** | 每張圖片 | 必填！提升可訪問性和 SEO |

### GitBook 的限制

| 無法做到 | 替代方案 |
|----------|----------|
| 自訂 Schema.org 結構化資料 | 透過內容結構彌補 |
| 自訂 robots.txt | 使用 GitBook 預設設定 |
| 細緻的 meta tags 控制 | 善用頁面標題和描述 |
| 自訂 JSON-LD | 不支援，但 GitBook 的語意結構已足夠 |

---

## 三、內容層面優化策略

### A. 標題結構（最關鍵）

**現狀問題**：
```markdown
# 比特幣

## 什麼是比特幣
```

**優化後**：
```markdown
# 比特幣：什麼是 Bitcoin？完整指南

## 比特幣定義：去中心化數位貨幣
## 比特幣如何運作？區塊鏈技術解析
## 比特幣價格歷史與投資風險
## 常見問題 FAQ
```

**原則**：
1. H1 包含主關鍵詞 + 吸引人的副標題
2. H2 使用問句形式（符合用戶搜尋習慣）
3. H3 用於細節展開
4. 每個標題都能獨立回答一個問題

### B. 首段黃金 60 字（AISEO 核心）

LLM 優先引用開頭 40-60 字的直接答案。

**現狀**：
```markdown
# ENS

## ENS 讓你可以用...（描述性開場）
```

**優化後**：
```markdown
# ENS（以太坊域名服務）

## ENS（Ethereum Name Service）是以太坊上的去中心化域名系統，讓用戶用 `vitalik.eth` 這樣好記的名稱取代 42 字元的錢包地址。

ENS 讓你可以...
```

**規則**：首段必須是**定義式答案**，直接回答「XXX 是什麼？」

### C. 模組化段落（LLM 引用單位）

**最佳段落長度**：40-60 字（一個完整概念）

**範例**：
```markdown
### 比特幣的總量上限

比特幣總量固定為 2,100 萬枚，永不增發。這個設計模仿黃金的稀缺性，使比特幣被稱為「數位黃金」。預計到 2140 年，所有比特幣將被挖完。

| 項目 | 數據 |
|------|------|
| 總量上限 | 21,000,000 BTC |
| 目前流通量 | ~19,500,000 BTC |
| 減半週期 | 每 210,000 區塊 |
| 下次減半 | 2028 年（預估）|
```

**為什麼有效**：LLM 可以完整引用這一段作為答案，不需要額外處理。

### D. 事實密度（每 150-200 字包含數據）

**優化前**：
```markdown
比特幣很有價值，價格一直在漲。
```

**優化後**：
```markdown
比特幣從 2009 年誕生時幾乎為零，到 2024 年最高達到 $73,000。
截至 2025 年，比特幣市值約 1.2 兆美元，佔整體加密市場約 50%。
```

**原則**：每段都要有具體數據、年份、百分比。

### E. FAQ 格式（最容易被 AI 引用）

每篇文章末尾加入 FAQ：

```markdown
---

### 常見問題

#### 比特幣可以被破解嗎？

理論上，量子電腦可能威脅比特幣的加密算法。但目前的量子電腦距離破解 SHA-256 還有數十年。比特幣社群已在研究量子抵抗的升級方案。

#### 比特幣會歸零嗎？

比特幣歸零的可能性極低，但並非不可能。主要風險包括：全球政府聯合禁止、發現重大技術漏洞、或被更優秀的技術完全取代。
```

---

## 四、結構層面優化

### A. URL 結構優化

**現狀問題**：
```
/token/bi-te-jin.md → /token/bi-te-jin
/token/rui-bo.md → /token/rui-bo
```

**建議（如果 GitBook 允許自訂 URL）**：
```
/token/bitcoin-cash
/token/xrp-ripple
/defi/what-is-defi
```

**權衡**：保留中文檔名的可讀性 vs 英文 URL 的 SEO 價值。建議優先更新高流量頁面。

### B. 內部連結策略

**原則**：每篇文章至少連結 3-5 篇相關文章

```markdown
{% hint style="info" %}
延伸閱讀：
- [什麼是智能合約？](../smart-contract/README.md)
- [以太坊完整指南](../ethereum.md)
- [DeFi 入門](../defi/README.md)
{% endhint %}
```

**連結錨點文字**：
- ❌ 不好：「點此閱讀」
- ✅ 好：「什麼是智能合約？」

### C. SUMMARY.md 目錄優化

目前的 SUMMARY.md 結構很好，但建議：

1. **確保每個主要概念都有獨立頁面**
2. **高頻搜尋詞應該是頂層頁面**
3. **相關主題要有清楚的層級關係**

---

## 五、AISEO 專項優化

### A. 權威性信號

AI 引擎重視 E-E-A-T（經驗、專業、權威、信任）。

**建議動作**：

1. **作者資訊**：在 README.md 明確標示作者背景
```markdown
## 關於作者

本書由 [dAAAb](連結) 等區塊鏈領域專家撰寫，
累積超過 7 年的區塊鏈研究與教學經驗。
```

2. **引用來源**：每篇文章末尾列出參考資料
```markdown
#### 參考資料

- [Bitcoin Whitepaper](https://bitcoin.org/bitcoin.pdf)
- [以太坊官方文件](https://ethereum.org/docs)
```

3. **更新日期**：標示最後更新時間
```markdown
> 最後更新：2025 年 1 月
```

### B. llms.txt 最佳化

GitBook 會自動生成 `/llms.txt`。確保：

1. 首頁（README.md）有完整的網站介紹
2. SUMMARY.md 結構清晰
3. 所有頁面都有意義的標題

### C. 跨平台曝光策略

不同 AI 平台的引用來源偏好：

| AI 平台 | 偏好來源 | Blockpedia 策略 |
|---------|----------|-----------------|
| ChatGPT | Wikipedia、權威網站 | 建立 Wikipedia 條目連結到 Blockpedia |
| Perplexity | Reddit、社群內容 | 在 Reddit 分享 Blockpedia 文章 |
| Google AI | 現有高排名內容 | 傳統 SEO 優化 |

### D. 中文 + 雙語策略

**獨特優勢**：Blockpedia 是高品質的繁體中文區塊鏈百科，這個市場相對空缺。

**建議**：
1. 為核心概念頁面加入英文副標題
```markdown
# 區塊鏈 (Blockchain)
```

2. 在 meta description 中同時包含中英文關鍵詞

3. 考慮為最重要的 10-20 篇文章建立英文版

---

## 六、實作優先級

### 第一階段：立即可做（不需改 GitBook 設定）

| 任務 | 預期影響 | 涉及檔案 |
|------|----------|----------|
| 1. 優化每頁首段（60 字定義）| 高 | 所有 .md |
| 2. 加入 FAQ 區塊 | 高 | 高流量頁面優先 |
| 3. 確保每頁有「相關條目」連結 | 中 | 所有 .md |
| 4. 加入事實數據和年份 | 中 | 所有 .md |
| 5. 每篇加「最後更新日期」| 低 | 所有 .md |

### 第二階段：GitBook 設定

| 任務 | 說明 |
|------|------|
| 1. 自訂網域 | 使用專業域名 |
| 2. 提交 Google Search Console | 加速索引 |
| 3. 為每頁填寫 description | 重要！|

### 第三階段：外部策略

| 任務 | 說明 |
|------|------|
| 1. 在 Reddit/PTT 分享文章 | 增加社群引用 |
| 2. 建立 GitHub 專案知名度 | 開源社群曝光 |
| 3. 與其他區塊鏈教育網站互連 | 反向連結 |

---

## 七、成效追蹤

### 傳統 SEO 指標

- Google Search Console：曝光次數、點擊率
- Google Analytics：流量來源、停留時間

### AISEO 指標

- 手動測試：在 ChatGPT、Perplexity 搜尋「什麼是比特幣」等問題，觀察是否引用 Blockpedia
- 使用工具如 Semrush 的 AI 引用追蹤功能

---

## 八、範例：優化前後對比

### 優化前

```markdown
# 比特幣

比特幣是一種加密貨幣，很多人在買。

## 歷史

2009 年有人發明了比特幣。
```

### 優化後

```markdown
# 比特幣（Bitcoin）：什麼是 BTC？完整指南

## 比特幣（Bitcoin，代號 BTC）是全球第一個去中心化加密貨幣，由中本聰於 2009 年創建。它使用區塊鏈技術，無需銀行或政府即可實現點對點價值轉移。

### 基本資訊

| 項目 | 內容 |
|------|------|
| 創建年份 | 2009 年 1 月 3 日 |
| 創建者 | 中本聰（Satoshi Nakamoto）|
| 總量上限 | 21,000,000 BTC |
| 共識機制 | 工作量證明（PoW）|
| 市值排名 | #1 |

### 比特幣如何運作？

比特幣運行在區塊鏈上——一個分散在全球數萬台電腦上的公開帳本...

### 常見問題 FAQ

#### 比特幣是誰發明的？

比特幣由化名「中本聰」的人或團體在 2008 年發表白皮書，2009 年 1 月 3 日啟動主網。至今無人知道中本聰的真實身份。

#### 比特幣有什麼價值？

比特幣的價值來自：(1) 總量有限（2100 萬枚）、(2) 去中心化不可審查、(3) 全球可流通、(4) 網路效應與市場認可。

---

#### 相關條目

- [區塊鏈是什麼？](../chain.md)
- [比特幣錢包](../wallet/bi-te-bao/README.md)
- [比特幣挖礦](../wa/README.md)

#### 參考資料

- [Bitcoin Whitepaper](https://bitcoin.org/bitcoin.pdf)
- [Bitcoin.org](https://bitcoin.org)

> 最後更新：2025 年 1 月
```

---

## 總結

Blockpedia 的 SEO/AISEO 優化應聚焦於：

1. **內容結構**：首段定義、模組化段落、FAQ 格式
2. **事實密度**：數據、年份、具體數字
3. **內部連結**：相關條目互連
4. **權威信號**：作者資訊、參考來源、更新日期
5. **GitBook 設定**：自訂網域、頁面描述

**最重要的一句話**：為讀者寫好內容，AI 自然會引用。結構清晰、事實準確、定義明確的內容，對人和 AI 都友善。

---

## 參考資源

- [GitBook SEO 文件](https://gitbook.com/docs/help-center/published-documentation/publishing/how-does-gitbook-handle-seo)
- [GitBook GEO 指南](https://gitbook.com/docs/guides/seo-and-llm-optimization/geo-guide-how-to-optimize-your-docs-for-ai-search-and-llm-ingestion)
- [Princeton GEO 研究](https://arxiv.org/pdf/2311.09735)
- [LLM SEO 2025 趨勢](https://www.fortismedia.com/en/articles/llm-seo-best-practices/)
- [Vercel 的 LLM SEO 實踐](https://vercel.com/blog/how-were-adapting-seo-for-llms-and-ai-search)
