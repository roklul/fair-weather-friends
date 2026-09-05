# CLAUDE.md — Fair Weather Friends (酒肉朋友) AI Agent 規範手冊

> 本檔案為 Anthropic 與 AI Coding Agent（Claude Code, Cursor, Antigravity）之專案規範指南。
> 遵循 Vercel `design.md` 反模式規格與 Google New SDLC Level 3.5+ 工程紀律。

---

## 一、專案身分與核心使命 (Project Identity)

- **專案名稱**：Fair Weather Friends（酒肉朋友）
- **定位**：頂級肉品部位解剖百科、風味決策精靈、經典調酒與現代零酒精 (Zero-Proof) 搭餐指南。
- **架構形態**：Next.js 14 (App Router) + React 18 + Tailwind CSS 3.4 + Vitest 單元測試 + Playwright E2E。

---

## 二、不可逾越之受控展示邊界 (Controlled Demo Boundaries)

> 🛡️ **本專案為受控展示展示系統 (Controlled Demo)，嚴格禁止以下反模式：**

1. **零商業化禁區 (Zero-E-Commerce)**：
   - 🚫 **禁止引入購物車 (Shopping Cart)**、**線上付款金流 (Payment Gateway)** 或 **結帳流程 (Checkout)**。
   - 🚫 所有資料層與推薦物件必須強制標註 `isDemo: true` 與 `isPurchasable: false`。
2. **BYOK 零伺服器儲存 (Zero-Server-Key-Storage)**：
   - 🚫 伺服器端 (`/api/ai-sommelier`) **絕不記錄、不儲存、不快取**使用者的 OpenAI API Key。
   - 🚫 前端 API Key 僅能暫存於瀏覽器 `localStorage`，並提供一鍵清除功能。
3. **無酒精與安全法規護欄 (Alcohol-Free & Legal Guardrails)**：
   - 🚫 凡使用者選擇「無酒精 (Mocktail)」或有未成年同行，AI 侍酒師 **嚴格僅能推薦 100% 零酒精飲品 (0.0% ABV)**。
   - 🚫 頁面必須常態性保留「禁止酒駕 · 未滿十八歲禁止飲酒」法規警語與受控展示標記。

---

## 三、五層架構與職責分離 (Five-Layer Architecture)

```
├── 1. Presentation Layer  (src/components/, src/app/)  - UI 渲染、RWD 與多語切換
├── 2. Domain Layer        (src/domain/)               - 純函式業務邏輯 (無副作用、確定性)
├── 3. Data Layer          (src/data/)                 - 結構化多語字典 (牛8/豬8/魚9/調酒10/Mocktail 5)
├── 4. API & AI Layer      (src/app/api/ai-sommelier/) - 無狀態 BYOK OpenAI 轉發與護欄 Prompt
└── 5. Compliance Layer    (src/components/Compliance) - 受控展示宣告、法規警語
```

- **Domain Layer 規則**：
  - `wizardReducer.js` 與 `calculateRecommendation.js` 必須保持為 **Pure Functions（純函式）**。
  - 嚴格禁止在 Domain 層引入 React Hooks、DOM 操作或全域狀態。
  - 每次邏輯變更必須有對應的 Vitest 單元測試驗證冪等性與邊界旗標。

---

## 四、UI 與 i18n 開發反模式清單 (Anti-Patterns to Avoid)

- 🚫 **禁止在 SVG 向量解剖圖中寫死中文**：必須透過 `currentLang` 讀取 `primalsI18n.js` 動態多語文字。
- 🚫 **禁止破壞 9 大海鮮部位與 8 大牛豬部位的字典對照**：所有 Primal ID 與 Cut ID 必須在 `zh-TW`、`en`、`ja` 三語完整具備。
- 🚫 **禁止直接傾倒 Raw Markdown 於頁面**：AI 侍酒師輸出必須由 `AiReportViewer` 解析為 4 大結構化主題卡片。
- 🚫 **禁止使用語意不明的類別名稱**：遵循 Tailwind 語意色彩 (`beef-burgundy`, `parchment-100~300`, `charcoal`)。

---

## 五、開發與驗證指令 (Commands)

- **本機開發**：`npm run dev` (預設 port 3000)
- **單元測試 (Vitest)**：`npm run test:unit` (目前 38 項測試全數通過)
- **靜態檢查 (OxLint)**：`npx oxlint`
- **端對端測試 (Playwright)**：`npx playwright test`
- **生產建置驗證**：`npm run build`
