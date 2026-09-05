---
name: Fair Weather Friends (酒肉朋友) Design System
version: 2.0.0
description: AI Agent Design Contract & Brand Specifications for Fair Weather Friends
framework: Next.js 14 (App Router) + Tailwind CSS + Lucide Icons
author: Antigravity Team
last_updated: 2026-09-05
---

# 🍷 Fair Weather Friends (酒肉朋友) — DESIGN.md

> **AI Agent Design Contract (設計系統合約)**  
> 凡參與本專案開發之 AI Agent（包含 Antigravity、Claude Code、Cursor、v0 等）在新增、修改、重構任何頁面或 UI 元件時，**必須嚴格遵循本規格書**。禁止使用預設的通用 AI 樣式（Generic Blue UI）或破壞既有古典編輯美學。

---

## 🏛️ 1. Brand Soul & Visual Philosophy (品牌靈魂與視覺哲學)

- **核心美學定位**：**「復古雜誌編輯風 × 經典調酒沙龍 × 溫潤羊皮紙典籍」** (Vintage Magazine Editorial Meets Artisan Cocktail Lounge).
- **視覺氛圍**：專業權威、感官豐富、溫潤典雅、雜誌級排版質感。
- **核心隱喻**：翻開一本泛黃沉穩的古典動植物風味圖鑑，走進燈光微醺的高級美式牛排館與職人調酒吧。
- **三不原則**：
  1. **不使用刺眼的純白底色**（全站以溫潤羊皮紙色系 `parchment` 為基底）。
  2. **不使用科技感過重的霓虹冷光或通用 AI 藍色**（以深勃根地酒紅 `beef-burgundy` 與威士忌琥珀 `amber` 為主色）。
  3. **不使用生硬的科技風無襯線大標題**（所有標題一律採用優雅的經典襯線字體 `font-serif`）。

---

## 🎨 2. Design Tokens (設計令牌)

### 2.1 色彩系統 (Color Palette)

| Token 名稱 | 十六進位代碼 | 語意用途與場景 |
| :--- | :--- | :--- |
| **`parchment-50`** | `#FDFBF7` | 主卡片背景、Modal 內容區底色 |
| **`parchment-100`** | `#F8F5EE` | 次級容器、巢狀項目、表格交替行底色 |
| **`parchment-200`** | `#EDE6D8` | 區塊交替背景、微深底色、按鈕 hover |
| **`parchment-300`** | `#DCD3C1` | 全站標準邊框色 (`border-parchment-300`)、分隔線 |
| **`parchment-400`** | `#C2B59D` | 次要邊框、裝飾細線 |
| **`charcoal`** | `#1C1917` | 主標題、法規橫幅底色、夜間對比容器 |
| **`charcoal-light`** | `#292524` | 內文主文字、高對比說明文字 |
| **`charcoal-muted`** | `#78716C` | 副標題、引言輔助文字、未選取按鈕文字 |
| **`beef-burgundy`** | `#8B1E2D` | 主品牌識別色、Primary 按鈕、重點強調、牛肉主題色 |
| **`beef-burgundy-hover`**| `#721522` | Primary 按鈕 hover 狀態 |
| **`amber-gold`** | `#D97706` | 調酒基酒標籤、金色警語、評分星星、威士忌琥珀色 |
| **`emerald-umami`** | `#065F46` | 搭餐成功推薦標籤 (`bg-emerald-50 text-emerald-950`) |
| **`purple-wine`** | `#581C87` | 餐酒搭配專題 Badge、侍酒師專題標籤 |

---

### 2.2 字體階層 (Typography Stack)

```css
/* 標題與引言字體 (Headings & Quotes) */
font-family: var(--font-playfair), 'Playfair Display', 'Noto Serif TC', 'Noto Serif JP', Georgia, serif;

/* 正文與 UI 介面字體 (Body & UI) */
font-family: var(--font-inter), 'Inter', 'Noto Sans TC', 'Noto Sans JP', system-ui, sans-serif;

/* 規格數據與代碼字體 (Mono & Measurements) */
font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

#### 字級與排版規範：
- **Hero 大標題**：`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-charcoal leading-[1.15]`
- **區塊大標題 (H2)**：`text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight`
- **卡片標題 (H3 / H4)**：`text-xl sm:text-2xl font-serif font-bold text-charcoal`
- **正文內文 (Body)**：`text-sm sm:text-base text-charcoal-light leading-relaxed font-sans`
- **輔助標籤 (Badge / Micro Copy)**：`text-xs font-semibold tracking-wider uppercase font-sans`
- **數據度量 (Metrics)**：`font-mono font-bold text-beef-burgundy`

---

### 2.3 容器與間距 (Spacing & Layout)

- **主內容寬度**：`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **精簡專題寬度**（FAQ / Wizard / Single Article）：`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`
- **區塊上下間距**：`py-16 sm:py-24`（區塊間使用 `border-t border-parchment-300` 分隔）
- **網格間距**：卡片庫採用 `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

---

## 🧩 3. Component Specs (核心元件標準規範)

### 3.1 按鈕 (Buttons)

```jsx
// 1. Primary Button (主要行動按鈕)
<button className="px-5 py-2.5 rounded-xl bg-beef-burgundy hover:bg-[#721522] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2">
  <span>開始探索</span>
  <ArrowRight className="w-4 h-4" />
</button>

// 2. Secondary Button (次要按鈕 / 篩選標籤未選中)
<button className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-parchment-100 hover:bg-parchment-200 text-charcoal border border-parchment-300 transition-all cursor-pointer">
  全部 10 款經典調酒
</button>

// 3. Segmented Control Tab (分段選單 - 選中態)
<button className="px-4 py-2 rounded-lg text-xs font-bold bg-beef-burgundy text-white border border-beef-burgundy shadow-xs">
  🥩 牛肉專題
</button>
```

---

### 3.2 卡片容器 (Cards)

- **外層主卡片**：`bg-parchment-50 rounded-2xl border border-parchment-300 p-6 shadow-sm hover:shadow-md transition-all`
- **內層巢狀資訊塊**：`bg-parchment-100 p-4 rounded-xl border border-parchment-200`
- **搭餐推薦亮點塊**：`bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-950`
- **警示或避免搭配塊**：`bg-rose-50 p-3 rounded-lg border border-rose-200 text-xs text-rose-950`

---

### 3.3 Modal 彈窗 (Modals)

- **遮罩層 (Backdrop)**：`fixed inset-0 z-50 overflow-y-auto bg-charcoal/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn`
- **彈窗容器**：`relative w-full max-w-3xl bg-parchment-50 border border-parchment-300 rounded-2xl shadow-2xl overflow-hidden my-8`
- **頂部 Header 橫幅**：`bg-gradient-to-r from-beef-burgundy to-[#4a101b] p-6 sm:p-8 text-white relative`
- **內容滾動區**：`p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto`
- **底部 Footer 橫幅**：`bg-charcoal px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3`

---

### 3.4 標籤徽章 (Badges & Pills)

```jsx
// 典雅主題標籤 (Section Badge)
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold tracking-wider uppercase">
  <Wine className="w-3.5 h-3.5 text-purple-800" />
  <span>PAIRED SPIRITS & WINE</span>
</div>

// 調酒風味標籤 (Flavor Tag)
<span className="px-2 py-0.5 rounded text-[10px] bg-parchment-100 border border-parchment-200 text-charcoal-muted font-medium whitespace-nowrap">
  #酸度俐落
</span>
```

---

## 🚫 4. Anti-Patterns & Taste Rules (設計禁忌守則)

1. **嚴禁純黑背景陰影**：不要使用 `shadow-[0_10px_20px_rgba(0,0,0,0.5)]`，請使用細膩的 `shadow-sm` 或 `shadow-md`。
2. **嚴禁破壞多語系排版**：
   - 英文單字間務必保留合理空隙。
   - 所有文字一律從 `src/data/translations.js` 或對應 `*I18n.js` 讀取，**嚴禁在 JSX 中寫死中文或英文**。
   - 英文模式下若 `name === enName`，禁止重複渲染副標題。
3. **嚴禁破壞受控展示邊界**：
   - 嚴禁添加真實的「加入購物車」、「立即結帳」、「信用卡輸入」元件。
   - 所有資料庫物件必須附帶 `isDemo: true, isPurchasable: false` 屬性。
   - 任何涉及酒類之頁面底部必須常駐法定飲酒警語。
4. **嚴禁使用非語意化未定義色彩**：禁止使用 Tailwind 預設的 `bg-blue-500`, `bg-indigo-600`, `bg-pink-500`。全站所有色彩必須在本文檔的 Design Tokens 範圍內。

---

## 🤖 5. Instructions for AI Agents (AI 代理執行指南)

當使用者指示「新增一個頁面」、「修改某個卡片」、「優化排版」時，AI Agent 應：
1. **先確認語系支援**：確保該功能在 `zh-TW`、`en`、`ja` 三種語系下皆有完整對應字典。
2. **檢查層次與對比**：大標題 `font-serif font-bold text-charcoal`，內文 `font-sans text-charcoal-light`，裝飾使用 `beef-burgundy` 或 `amber-gold`。
3. **執行品質驗證**：任何代碼變更後，主動執行 `npm run test:unit` 與 `npm run build` 確認 0 錯誤。
