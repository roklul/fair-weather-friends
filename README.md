# 酒肉朋友 · Fair-Weather Friends · 酒肉友達 🍷🥩🐟

> **全方位肉品與海鮮部位選購 × 料理侍酒與經典調酒指南**  
> *Interactive Meat & Seafood Cuts × Sommelier Wine & Cocktail Pairing Guide*  
> *インタラクティブ肉・海鮮部位選び × 料理・ペアリング酒＆カクテルガイド*

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-Unit%20Tested-729B1B?style=flat&logo=vitest)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-E2E%20Ready-2EAD33?style=flat&logo=playwright)](https://playwright.dev/)
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
**「酒肉朋友」** 是一款專為料理愛好者、家庭大廚與老饕打造的現代化美食決策工具。本專案以三大食材體系（牛肉、豬肉、魚類海鮮）為核心，結合古典肉舖銅版畫風格（Vintage Butcher Etching）的向量解剖圖鑑，打破傳統「紅肉配紅酒、白肉配白酒」的刻板框架，提供以「料理重量、油脂多寡、酸度、辣度與香氣」為依據的科學餐酒、在地酒款（台灣啤酒、金門高粱、埔里紹興）與 10 款世界經典調酒配對！

---

### ✨ 核心功能特色

1. **🥩 互動式向量部位解剖圖鑑 (Vintage Anatomical Maps)**
   - **牛肉分切**：USDA 美式 8 大分切（肋脊、腰脊、肩胛、胸腹、前胸、腹脇、後腿、牛腱）。
   - **豬肉分切**：台灣肉舖常用 8 大部位（梅花、五花、松阪、小里肌、大里肌、前腿、蹄膀、豬腳）。
   - **魚類海鮮**：9 大通用部位（魚頭、下巴、背肉、魚腹、魚柳、尾段、魚皮、魚骨、珍味）。
2. **🎯 智能選肉決策助手 (Taste & Cooking Wizard)**
   - 口感偏好 × 料理目標 2 步即時篩選，自動推薦最適部位與關鍵火候。
   - 首頁快捷按鈕（「我想吃火鍋」、「我想做炸豬排」、「我想清蒸龍虎斑」）即時雙向聯動！
3. **🍸 經典調酒搭餐專題 (10 Classic Cocktails × Food Pairing)**
   - 收錄 Margarita、Daiquiri、Mojito、Bloody Mary、Negroni、Old Fashioned、Paper Plane、Penicillin、Gin Gin Mule、Espresso Martini。
   - 雙向配對決策（從料理情境挑調酒 / 依基酒探索調酒）。
   - 附人數份量自動換算器與 Virgin Mocktail 無酒精友善配方。
4. **🍷 餐酒與在地名酒搭配科學**
   - 涵蓋世界葡萄酒、台灣 18 天生啤酒、金門 58 度高粱、埔里特級紹興與日本清酒。
5. **🛡️ 受控展示型工程架構與測試金字塔**
   - 邏輯解耦為純函式 Domain Layer（`calculateRecommendation.js`）。
   - 20 條 Vitest 單元測試 + Playwright 端到端測試。
   - GitHub Actions 自動化 CI 品質閘門。

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
npm run test:unit

# 4. 執行生產環境建置
npm run build
```

---

## 🇺🇸 English

### 📖 Introduction
**"Fair-Weather Friends"** is a modern culinary decision-making web application designed for food enthusiasts, home chefs, and connoisseurs. Featuring USDA beef cuts, traditional Taiwanese pork cuts, and coastal seafood anatomy with interactive vintage butcher etching diagrams, it decodes flavor pairing science beyond the traditional "red with meat, white with fish" rule. It features comprehensive pairings with fine wines, Taiwanese local drinks (Taiwan Beer, Kinmen Sorghum, Puli Shaoxing, Japanese Sake), and 10 world-classic cocktails!

---

### ✨ Key Features

1. **🥩 Interactive Anatomical Maps (Vintage Butcher Etching)**
   - **Beef**: 8 USDA Primal Cuts (Rib, Loin, Chuck, Plate, Brisket, Flank, Round, Shank).
   - **Pork**: 8 Traditional Taiwanese Cuts (Pork Collar, Belly, Matsusaka Jowl, Tenderloin, Loin, Ham, Hock, Trotters).
   - **Fish & Seafood**: 9 Universal Anatomical Zones (Head, Collar, Dorsal, Belly, Fillet, Tail, Skin, Bones, Delicacy).
2. **🎯 2-Step Taste & Cooking Wizard**
   - Instant filtering based on Texture Preference × Cooking Method to yield top cut recommendations and doneness guidance.
   - Real-time bidirectional linkage with Hero quick-intent buttons.
3. **🍸 10 Classic Cocktails × Food Pairing Module**
   - Includes Margarita, Daiquiri, Mojito, Bloody Mary, Negroni, Old Fashioned, Paper Plane, Penicillin, Gin Gin Mule, and Espresso Martini.
   - Interactive two-way matcher (Find cocktails by dish / Find dishes by cocktail).
   - Dynamic batch serving calculator and Virgin Mocktail recipes.
4. **🍷 Wine & Local Spirits Pairing Matrix**
   - Detailed pairings with classic wines, Taiwan 18-Day Draft Beer, 58° Kinmen Kaoliang, Puli Shaoxing, and Sake.
5. **🛡️ Controlled Demo Architecture & Testing Pyramid**
   - Pure domain logic functions decoupled from React UI (`calculateRecommendation.js`).
   - 20 Vitest unit tests + Playwright E2E coverage.
   - GitHub Actions CI quality gate enforcing test & build validation on every PR.

---

### 🔞 Responsible Drinking Disclaimer
> **Please Drink Responsibly · Underage Drinking Prohibited · Don't Drink & Drive**  
> *This website is a controlled interactive showcase for culinary educational and UI demo purposes only. No alcohol sales, payments, delivery, or medical advice are provided. All products are flagged with `isDemo: true, isPurchasable: false`.*

---

### 💻 Quick Start & Testing

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Open http://localhost:3000 in your browser

# 3. Run Unit Tests (Vitest)
npm run test:unit

# 4. Build for Production
npm run build
```

---

## 🇯🇵 日本語 (Japanese)

### 📖 プロジェクト概要
**「酒肉友達 (Fair-Weather Friends)」** は、料理愛好家や美食家のために設計されたモダンな食材選び・ペアリング意思決定ツールです。牛肉（USDA 8大部位）、豚肉（伝統部位）、鮮魚（9大共通部位）の解剖マップをクラシックな銅版画エッチングスタイルで視覚化。「肉に赤ワイン、魚に白ワイン」という固定観念を超え、料理の重さ・脂の質・酸味・スパイスに基づいたワイン、台湾地酒、そして世界定番カクテル10選のペアリングを提供します！

---

### ✨ 主な機能

1. **🥩 インタラクティブ部位解剖マップ**
   - **牛肉**：リブアイ、サーロイン、フィレ、肩ロース、バラなど USDA 8大部位。
   - **豚肉**：豚バラ、肩ロース、松阪豚（トントロ）、ヒレ、ロース、豚足など。
   - **鮮魚海鮮**：魚頭、カマ、背身、腹身（トロ）、フィレ、魚皮など9大部位。
2. **🎯 部位選びスマート診断ウィザード (Taste Wizard)**
   - 「食感の好み」×「今夜の料理方法」の2ステップで最適部位と火加減を即時提案。
   - トップページのクイックボタン（「鍋を食べたい」「とんかつを作りたい」）とリアルタイム連動。
3. **🍸 定番カクテル10選 × 料理ペアリングシステム**
   - マルガリータ、ダイキリ、モヒート、ブラッディ・メアリー、ネグローニ、オールド・ファッションド、ペーパー・プレーン、ペニシリン、ジン・ジン・ミュール、エスプレッソ・マティーニを網羅。
   - 人数分の杯数自動換算ツール ＆ ノンアルコール（モクテル）レシピ完備。
4. **🍷 ペアリングの科学と台湾名酒**
   - 世界のワインに加え、台湾18天生ビール、金門高粱酒、埔里特級紹興酒、日本酒との相性を網羅。
5. **🛡️ 安全で堅牢なエンジニアリング品質管理**
   - 純粋関数 Domain 層（`calculateRecommendation.js`）による設計。
   - Vitest 単体テスト20件合格 ＋ Playwright E2E テスト。
   - GitHub Actions CI による自動品質ゲート。

---

### 🔞 適正飲酒に関するお知らせ
> **飲酒運転は法律で禁止されています · 20歳未満の飲酒は禁止されています · お酒は適量に**  
> *本サイトはUIおよび料理ペアリング情報の技術デモであり、酒類の販売・決済・配送は行っておりません。すべてのデータは `isDemo: true, isPurchasable: false` として管理されています。*

---

### 💻 起動・テストコマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 単体テストの実行 (Vitest)
npm run test:unit

# 本番ビルドの確認
npm run build
```

---

## 📄 License & Credits

- **Repository**: [https://github.com/roklul/fair-weather-friends](https://github.com/roklul/fair-weather-friends)
- **Live Demo**: [https://fair-weather-friends-zeta.vercel.app](https://fair-weather-friends-zeta.vercel.app)
- **Author**: Fair-Weather Friends Team (Google DeepMind Antigravity Pair-Programming)
- **License**: MIT License
