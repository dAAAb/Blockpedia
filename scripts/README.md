# Blockpedia SEO/AISEO 工具

批量優化 Blockpedia 的 SEO 和 AISEO 設定。

## 安裝

```bash
cd scripts
npm install
```

## 工具說明

### 1. SEO 審計工具 (`seo-audit.js`)

掃描所有頁面，生成 SEO 健康報告。

```bash
# 在終端機顯示報告
npm run audit

# 儲存報告到檔案
npm run audit:save

# 或直接執行
node seo-audit.js --output report.md
```

**檢查項目**：
- ✅ Frontmatter description
- ✅ H1 標題（含英文對照）
- ✅ 更新日期
- ✅ 相關條目區塊
- ✅ 參考資料區塊
- ✅ 內容長度
- ✅ 表格結構
- ✅ FAQ 區塊
- ✅ 內部連結數量

### 2. SEO 批量優化工具 (`seo-optimize.js`)

自動為頁面添加 SEO 元素（不修改原文）。

```bash
# 預覽變更（不實際修改）
npm run optimize:preview

# 執行變更
npm run optimize:apply

# 只處理單一檔案
node seo-optimize.js --file token/bi-te.md --dry-run
```

**自動添加**：
- Frontmatter description（從首段生成）
- 更新日期（在 H1 之後）
- 相關條目區塊模板（在文末）
- 參考資料區塊模板（在文末）

**原則**：只在頭尾添加，**絕不修改原文內容**。

## 建議工作流程

1. **先審計**：執行 `npm run audit:save` 了解現狀
2. **預覽變更**：執行 `npm run optimize:preview` 確認要修改的內容
3. **套用變更**：執行 `npm run optimize:apply`
4. **再次審計**：確認改善幅度
5. **手動補充**：填寫 TODO 標記的區塊（相關條目、參考資料）

## 自訂設定

編輯 `seo-optimize.js` 中的 `CONFIG` 物件：

```javascript
const CONFIG = {
  includeDirs: [...],        // 要處理的目錄
  excludeFiles: [...],       // 排除的檔案
  updateDate: '2026 年 1 月', // 更新日期
  titleTranslations: {...},  // 中英文對照表
};
```

## 注意事項

- 這些工具**不會修改** dAAAb 的原創內容
- 只在檔案頭部和尾部添加 SEO 元素
- 建議在執行前先 `git commit` 現有變更
- 如果結果不滿意，可以 `git checkout .` 還原
