# 酒肉朋友 · Fair-Weather Friends · 酒肉友達 🍷🥩🐟

> **全方位肉品與海鮮部位選購 × 料理侍酒 × AI 智能侍酒師 × 經典與無酒精工藝調酒指南**  
> *Interactive Meat & Seafood Cuts × AI Sommelier × Fine Wine & Craft Mocktail Pairing Guide*  
> *インタラクティブ肉・海鮮部位選び × AIソムリエ × 料理・ペアリング酒＆モクテルガイド*

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest 38 Tests](https://img.shields.io/badge/Vitest-38%2F38%20Passed-729B1B?style=flat&logo=vitest)](https://vitest.dev/)
[![OxLint](https://img.shields.io/badge/OxLint-Static%20Analysis-orange?style=flat)](https://oxc-project.github.io/)
[![CI Quality Gate](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=flat&logo=github-actions)](https://github.com/roklul/fair-weather-friends/actions)
[![Demo Mode](https://img.shields.io/badge/Status-Controlled%20Demo-amber?style=flat)](https://fair-weather-friends-zeta.vercel.app)

---

## 🌐 語言切換 / Languages / 言語

- [🇹🇼 繁體中文 (Traditional Chinese)](#-繁體中文-traditional-chinese)
- [🇺🇸 English](#-english)
- [🇯🇵 日本語 (Japanese)](#-日本語-japanese)

---

## 🇹🇼 繁體中文 (Traditional Chinese)

### 📖 專案簡介
**「酒肉朋友 (Fair-Weather Friends)」** 是一款結合「職人肉舖解剖學」、「現代侍酒科學」與「AI 智能侍酒師」的現代化美食決策與選購指南。旨在徹底解決家庭大廚與老饕挑選肉品與海鮮時的痛點，透過直覺的向量視覺化解剖圖鑑、純函式引導流程（Wizard）與 AI 侍酒師，讓使用者在 10 秒內快速搞懂「這塊肉在動物的哪裡」、「最適合怎麼煮」，以及「今晚該搭什麼酒或工藝無酒精飲品」。

---

### 🌟 核心功能特色

1. **🥩 跨品類原創向量解剖圖鑑 (Interactive Anatomical SVG Maps)**
   - **美式牛肉 8 大分切**：肋脊、腰脊、肩胛、胸腹、前胸、腹脇、後腿、牛腱。
   - **台灣常用豬肉 8 大分切**：梅花、五花、松阪、小里肌、大里肌、前腿、蹄膀、豬腳。
   - **魚類海鮮 9 大通用部位**：魚頭、下巴、背肉、魚腹、魚柳、尾段、魚皮、魚骨、珍味。
   - 採用原創純向量 SVG 搭配 45° 古典蝕刻排線紋理，點擊部位即時連動規格面板與延伸細分切清單。

2. **🎯 純函式智能選肉決策助手 (Taste & Cooking Wizard)**
   - 透過「口感偏好 / 油花需求」與「烹調料理目標（煎、烤、燉、火鍋、刺身）」2 步問答，以純函式確定性演算法推薦最適部位、火候指示與建議熟度。
   - 首頁快捷按鈕（「我想吃火鍋」、「我想做炸豬排」、「我想清蒸龍虎斑」）即時雙向聯動！

3. **✨ AI 智能侍酒師 (AI Sommelier & 4-Pillar Report Viewer)**
   - 整合 OpenAI API（支援 GPT-4o-mini 等先進模型），具備安全無狀態 BYOK（Bring Your Own Key）架構，金鑰即用即拋零伺服端儲存。
   - 專屬奢華 4 欄柱狀卡片排版：
     - 🍽️ **推薦菜單與部位火候**
     - 🥂 **侍酒師搭餐推薦（含經典酒款與專屬無酒精搭餐）**
     - 🧪 **風味科學對位矩陣**
     - 🌡️ **侍酒儀式、杯型與黃金適飲溫度**

4. **🍸 經典調酒 × 無酒精工藝大師課 (Cocktails & Zero-Proof Mocktail Masterclass)**
   - 收錄 10 款世界經典調酒（Margarita、Negroni、Old Fashioned 等）與 5 款頂級 Signature Mocktails（Virgin Mojito、Zero-Proof Negroni、Espresso Fake-tini 等）。
   - 6 大無酒精調配基石（酸/甜/苦/鹹/香氣/質地）與酒精法規光譜解析（0.0% vs <0.5% ABV 標示規範）。
   - 附人數份量自動換算器與雙向配對決策。

5. **🍽️ 中西餐桌禮儀指南 (Dining Etiquette Guide `/etiquette`)**
   - 獨立 `/etiquette` 頁面：涵蓋中西餐桌禮儀對照、旋轉餐桌防碰撞禮儀、西餐刀叉杯具配置圖、餐桌禁忌（Faux Pas）對照表與互動式檢核清單。

6. **🖼️ 8K 米其林 AI 視覺封面與 Lightbox 劇院體驗**
   - 8K 級純淨米其林攝影版封面（乾式熟成肋眼、波爾多晶透紅酒、工藝無調酒、歐式暖光酒窖）。
   - 雙欄黃金雜誌排版 + 全螢幕 Lightbox 放大解析與侍酒筆記。

7. **🌐 三語即時國際化 (Full i18n Localization)**
   - 繁體中文 (`zh-TW`)、英文 (`en`)、日文 (`ja`) 即時無縫切換。

---

### 🛡️ 工程架構與 Google New SDLC Level 3.5

- **5 層清晰架構分離**：
  - `src/components/`：UI Presentation Layer
  - `src/domain/`：純函式業務領域層（`wizardReducer.js`, `calculateRecommendation.js`）
  - `src/services/`：AI 與外部服務層（無狀態 BYOK 串接）
  - `src/context/`：狀態管理層
  - `src/data/`：靜態知識庫層
- **受控展示邊界防護 (Controlled Demo Boundary)**：
  - 資料層所有項目嚴格鎖定 `isDemo: true, isPurchasable: false`。
  - 單元測試自動驗證絕無意外引入之購物車、結帳與付款邏輯。
- **Agent 指導憲法手冊**：專屬根目錄 `CLAUDE.md` 規範。

---

### 🛠️ 技術架構

- **前端框架**：Next.js 14.2 (App Router) + React 18.3
- **樣式與視覺系統**：Tailwind CSS v3.4 + 自製羊皮紙復古色調 + 出版物排版系統
- **圖形與圖示工程**：原創 Responsive Inline SVG + 零外部依賴 Micro Vector Icons
- **代碼品質與測試金字塔**：
  - **單元測試**：Vitest（**38/38 測試 100% 通過**，涵蓋 Reducer、推薦引擎、AI 報告渲染器、無酒精資料庫、多語系與展示邊界）
  - **端到端測試**：Playwright E2E
  - **靜態代碼分析**：OxLint 高速靜態代碼檢查
  - **CI/CD 自動化**：GitHub Actions 品質閘門
- **雲端部署**：Vercel Serverless Production
- **公開展示網址**：[https://fair-weather-friends-zeta.vercel.app](https://fair-weather-friends-zeta.vercel.app)

---

### 🔞 理性飲酒與法規宣告
> **禁止酒駕 · 未滿十八歲禁止飲酒 · 酒後不開車 安全有保障**  
> *本網站僅作為技術、UI 與美食侍酒資訊展示用途，不提供酒類商品銷售、付款、配送或醫療健康建議。所有資料均標註 `isDemo: true, isPurchasable: false`。*

---

### 💻 本機開發與測試指令

```bash
# 1. 安裝依賴套件
npm install

# 2. 啟動本機開發伺服器
npm run dev
# 瀏覽器打開 http://localhost:3000

# 3. 執行單元測試 (Vitest)
npm test

# 4. 執行靜態代碼分析 (OxLint)
npx oxlint

# 5. 執行生產環境建置
npm run build
```

---

## 🇺🇸 English

### 📖 Introduction
**"Fair-Weather Friends"** is a modern culinary decision-making web application designed for food enthusiasts, home chefs, and connoisseurs. Integrating "Artisan Butcher Anatomy", "Modern Sommelier Science", and "AI-Powered Sommelier", it decodes flavor pairing science beyond the traditional "red with meat, white with fish" rule. It features comprehensive pairings with fine wines, Taiwanese local drinks (Taiwan Beer, Kinmen Sorghum, Puli Shaoxing, Japanese Sake), 10 classic cocktails, and 5 signature zero-proof craft mocktails.

---

### ✨ Key Features

1. **🥩 Interactive Anatomical Maps (Vintage Butcher Etching)**: USDA 8 Beef Primals, 8 Taiwanese Pork Cuts, and 9 Seafood Zones with pure vector SVG graphics.
2. **🎯 Pure Function Taste & Cooking Wizard**: Deterministic 2-step recommendation engine with instant Hero button linkages.
3. **✨ AI Sommelier & 4-Pillar Luxury Report Viewer**: GPT-4o-mini integration with zero-persistence stateless BYOK security.
4. **🍸 Classic Cocktails & Zero-Proof Mocktail Masterclass**: 10 classic cocktails + 5 signature zero-proof mocktails with batch calculator and 6 flavor pillars.
5. **🍽️ Dining Etiquette Guide (`/etiquette`)**: Western & Chinese banquet etiquette, table collision prevention, and interactive checklist.
6. **🖼️ 8K Michelin AI Visual Cover & Showcase**: Clean editorial photography with interactive full-screen Lightbox.
7. **🌐 3-Language Instant Localization**: Full `zh-TW`, `en`, and `ja` support.

---

## 🇯🇵 日本語 (Japanese)

### 📖 プロジェクト概要
**「酒肉友達 (Fair-Weather Friends)」** は、料理愛好家や美食家のために設計されたモダンな食材選び・ペアリング意思決定ツールです。肉舖解剖学、ソムリエ科学、そして「AIソムリエ」を融合し、牛肉（USDA 8大部位）、豚肉（伝統部位）、鮮魚（9大部位）の解剖マップをクラシックな銅版画エッチングで視覚化。世界定番カクテル10選に加え、本格ノンアルコール（モクテル）マスタークラスも完備しています。

---

## 📄 License & Credits

- **Repository**: [https://github.com/roklul/fair-weather-friends](https://github.com/roklul/fair-weather-friends)
- **Live Demo**: [https://fair-weather-friends-zeta.vercel.app](https://fair-weather-friends-zeta.vercel.app)
- **Author**: Fair-Weather Friends Team (Google DeepMind Antigravity Pair-Programming)
- **License**: MIT License

