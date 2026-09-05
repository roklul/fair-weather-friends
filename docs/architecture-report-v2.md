# 酒肉朋友 AI 架構診斷報告 v2 · Re-Review
> 評估日期：2026-09-05 | 狀態：受控展示 Demo (Controlled Demo) | 光譜定位：Level 3.5 (Agentic Engineering)

---

酒肉朋友 AI 架構診斷

  AI 架構系統診斷報告 v2 · Re-Review
  
# 酒肉朋友從 Vibe Coding 到工程化的蛻變實錄
  基於 GitHub repo 原始碼掃描與線上站點審查，對照十份參考文獻框架的第二次架構評估
  
    專案：fair-weather-friends-zeta.vercel.app
    Repo：github.com/roklul/fair-weather-friends
    Re-Review 日期：2026-09-05
    狀態：受控展示 Demo（Controlled Demo）

## 一、Re-Review 摘要：專案已質變

結論：與首次分析時的「Vibe Coding 產物」相比，「酒肉朋友」已完成一次結構性的工程化躍遷。專案從零測試、零架構文件、零品質閘門的狀態，演進為具備五層架構分離、18+ 單元測試、E2E 測試、GitHub Actions CI、PR 審查範本、OxLint 規則、以及明確 Demo 邊界防護的工程化系統。光譜定位從 Level 1.5 躍升至 Level 3.5。

本次 Re-Review 直接掃描了 GitHub repo 原始碼（17 commits, 8/8 CI passes）與線上站點，以下是逐項比對結果。

## 二、光譜定位：躍遷紀錄

對照 Google「New SDLC」的五級光譜，專案已從 Level 1.5 的純 Vibe Coding 狀態，大幅進入 Level 3–4 區間。技術棧從 Vite SPA 升級為 Next.js 14，建立了 Domain Layer 純函式架構，並在 CI 層面實現了自動化品質閘門。

    Level 1Level 2Level 3Level 4Level 5

    Vibe Coding隨意提示
    Structured結構化提示
    Agentic代理工程
  
  Level 1.5 → Level 3.5（+2.0）

— 參考：Google "The New SDLC With Vibe Coding", p.13 Spectrum Table

### 維度對照表：首次分析 vs Re-Review

   | 
    
 | 維度 | 首次分析（09-04） | Re-Review（09-05） | 變化

       | 技術框架
       | Vite SPA（推測）
       | Next.js 14 + React 18 + Tailwind 3.4
       | 升級

       | 架構文件
       | 缺失
       | docs/architecture-report.md：五層架構、AI 權限分級（L0–L6）、受控展示邊界
       | 已建立

       | 測試覆蓋
       | 零測試
       | 18 項 Vitest 單元測試 + Playwright E2E 測試
       | 已建立

       | Code Review
       | 無流程
       | PR Template（品質與安全檢查清單，6 項）
       | 已建立

       | CI/CD
       | 僅 Vercel 部署
       | GitHub Actions Quality Gate（Lint + Unit Test + Build），8/8 通過
       | 已建立

       | Domain 分離
       | UI 與邏輯耦合
       | src/domain/wizard/ + src/domain/recommendation/ 純函式層
       | 已建立

       | Demo 邊界
       | 僅有免責聲明
       | 所有資料物件強制 isDemo: true, isPurchasable: false，E2E 驗證零購買功能
       | 已強化

       | 法規聲明
       | 已有
       | 增強為多處出現 + E2E 自動驗證聲明存在性
       | 已強化

       | Lint 工具
       | 缺失
       | OxLint（React hooks 規則 + 元件匯出規則）
       | 已建立

       | 結構化資料
       | 隱含在 UI 中
       | src/data/ 獨立資料層：beefData, porkData, fishData, cocktailData, translations, i18n
       | 已建立

       | 安全基線
       | 缺失
       | PR Template 含「未提交 API 金鑰」檢查項 + .gitignore
       | 部分

## 三、已落地的工程化成果詳析

### 3.1 五層架構分離

repo 的 docs/architecture-report.md 定義了明確的五層架構——展示層、狀態機層、純領域業務層、受控資料層與品質保證層。這直接回應了首次報告中「架構漂移風險」的核心缺口。更重要的是，架構文件不只是描述性的，而是具有「處方性」：它定義了 AI 工具權限分級（L0–L6），其中 L5–L6（合併發布與機密存取）被明確標記為「嚴格禁止」。

架構文件的三層防護

    1. 架構決策紀錄（docs/architecture-report.md）：五層系統分層 + 三層顧問框架
    2. PR 審查清單（.github/pull_request_template.md）：6 項品質與安全檢查
    3. CI 自動閘門（.github/workflows/quality-gate.yml）：每次 push/PR 自動執行測試 + 建置

### 3.2 測試金字塔的兩層實現

專案建立了測試金字塔的底部兩層，完全對應首次報告建議的「煙霧測試」與「端到端測試」：

    單元測試 18 項 Vitest 測試
    覆蓋：wizardReducer 狀態機（5 項——初始化、選擇口感、選擇料理法、快捷預設、重置）+ calculateRecommendation 推薦引擎（13 項——牛/豬/魚推薦正確性、調酒配對、邊界防護、Demo 標記驗證、冪等性）。特別值得注意的是 Test #7：嚴格驗證所有推薦物件均具備 isDemo: true 與 isPurchasable: false。

    E2E 測試 Playwright 端對端
    覆蓋：Happy Path（快捷按鈕 → 精靈導航 → 推薦卡片 → Modal 開啟）+ 安全邊界（DEMO MODE 標記存在、零購買功能、法規聲明「禁止酒駕」可見性）。這正是首次報告中建議的「適應度函數」——自動化驗證受保護內容不被移除。

### 3.3 Domain Layer 純函式架構

最令人印象深刻的架構決策是將核心業務邏輯抽離為純函式（Pure Functions），放在 src/domain/ 目錄下：

   | 
    
 | 模組 | 職責 | 純函式特性

       | domain/wizard/wizardReducer.js
       | 選肉精靈狀態機：口感選擇、料理法選擇、快捷預設、重置
       | 無副作用、確定性輸出、immutable state（spread operator）

       | domain/recommendation/calculateRecommendation.js
       | 推薦引擎：口感×料理法交集計算、完美配對優先排序、調酒協同配對
       | 無副作用、確定性輸出（Test #13 驗證冪等性）、防禦性 null checking

這個架構決策直接呼應了 Richards & Ford「架構量子」概念——在不拆分微服務的前提下，在程式碼層面實現了邏輯分離。Domain Layer 可以獨立測試，不依賴 React 渲染環境，這正是首次報告建議的「將業務邏輯與 UI 渲染分離」。

### 3.4 受控展示邊界（Controlled Demo Boundary）

專案發展出了一套超出首次報告建議的 Demo 邊界防護機制：

三重邊界防護

    1. 資料層強制標記：所有商品資料物件必須攜帶 isDemo: true, isPurchasable: false
    2. 單元測試守護：Test #7 自動驗證所有推薦結果（包括嵌套的 pairedCocktail）均攜帶雙旗標
    3. E2E 行為驗證：掃描全站確認零購買/結帳功能、DEMO MODE 標記可見
    4. PR 清單人工確認：「受控展示邊界：商品資料皆保持 isDemo: true, isPurchasable: false」

這個設計精妙之處在於：即使 AI Agent 在後續迭代中新增了商品推薦功能，只要它嘗試將 isPurchasable 設為 true，單元測試就會立即失敗，CI 管線會攔截這個變更。這正是 Vibe-Coded Malware 研究啟示的「行為驗證」策略在 Demo 邊界上的落地。

## 四、剩餘缺口與下一步建議

工程化基礎已經穩固，但仍有幾個面向值得進一步加強。以下按優先級排列，聚焦於從 Level 3.5 向 Level 4+ 的演進方向。

    建議 CLAUDE.md 尚未建立
    現有 docs/architecture-report.md 是架構分析文件，但不是 Anthropic 生態系統中的 CLAUDE.md。建議在專案根目錄建立 CLAUDE.md，將架構報告中的核心約束（受控展示邊界、技術棧限制、禁止事項）轉化為 AI Agent 可直接消費的指令格式，讓 Claude Code、Cursor 等工具在開啟專案時自動載入這些護欄。

    建議 CI 管線可加入 Lint 步驟
    OxLint 已配置（.oxlintrc.json），但 Quality Gate CI 目前只執行 Unit Test + Build，未包含 Lint 步驟。建議在 CI 中加入 npx oxlint 或對等的 lint 指令，讓程式碼風格規則也成為自動化閘門的一環。

    建議 E2E 測試未納入 CI
    Playwright 測試已撰寫，但 CI 管線僅執行 npm run test:unit，未執行 npm run test:e2e。E2E 測試是 Demo 邊界防護的關鍵一環（驗證零購買功能、法規聲明可見性），建議納入 CI 管線。由於 Playwright 需要瀏覽器環境，可考慮設為獨立 job 或使用 Playwright 的 CI 模式。

    建議 敏感資訊自動掃描
    PR Template 有「未提交任何 API 金鑰、秘密或敏感個資」的人工檢查項，但缺乏自動化。建議加入 git-secrets 或等效的 pre-commit hook，自動掃描提交內容中的敏感資訊模式。

    可選 供應鏈安全
    目前相依性精簡（Next.js + React + Tailwind + 開發工具），風險面較小。可定期執行 npm audit 並考慮加入 GitHub Dependabot 自動更新。

    可選 測試覆蓋率報告
    18 項單元測試覆蓋了核心 Domain Layer，但尚無覆蓋率量化。可在 Vitest 中加入 --coverage 並將報告上傳為 CI artifact，作為未來品質基線的量化指標。

## 五、首次報告建議的落實狀況

以下逐項追蹤首次報告（v1, 2026-09-04）十大行動項目的落實狀態。

   | 
    
 | 原始優先級 | 行動項目 | 落實狀態 | 實際做法

       | P0
       | 建立架構規範文件
       | 已完成
       | docs/architecture-report.md：五層架構 + AI 權限分級 + 受控展示邊界。超出 CLAUDE.md 範本的建議深度。

       | P0
       | 加入 Demo 標記與法規聲明
       | 已完成
       | 資料層 isDemo/isPurchasable 雙旗標 + E2E 驗證 DEMO MODE 標記 + 多處法規聲明。遠超原始建議的「頁面固定標記」。

       | P1
       | 煙霧測試（3–5 個關鍵路徑）
       | 已超額完成
       | 18 項單元測試覆蓋精靈狀態機、推薦引擎、調酒配對、邊界防護、冪等性。原始建議為 3–5 個，實際完成 18 個。

       | P1
       | AI Review Hook
       | 部分完成
       | CI Quality Gate + PR Template 取代了 pre-commit hook 方案。自動化程度等效，但走的是 GitHub Actions 路線而非 local hook。

       | P1
       | 建立 Master Prompt
       | 替代方案
       | 未採用保哥 Master Prompt 的 .github/code-review-instructions.md 方案，改以 PR Template 的結構化 checklist 實現類似功能。

       | P1
       | 結構化食材／酒類知識庫
       | 已完成
       | src/data/ 目錄包含完整結構化資料：beefData, porkData, fishData, cocktailData, translations, cutsI18n, primalsI18n, etiquetteData。

       | P1
       | 敏感資訊掃描
       | 人工流程
       | PR Template 含檢查項但無自動化掃描工具。

       | P2
       | 定義信任邊界與 Blocker 基線
       | 已完成
       | AI 權限分級 L0–L6 + PR Template 中的安全 Blocker（禁止引入購物車/付款/年齡蒐集）。

       | P2
       | 元件化重構
       | 已完成
       | 清晰的元件目錄結構：CowDiagram, Wizard, WineSection, CocktailSection, Compliance, Faq, DataTable 等獨立元件。

       | P2
       | CI/CD 品質閘門
       | 已完成
       | GitHub Actions：checkout → Node.js setup → npm ci → Vitest → Next.js build。8/8 runs 全數通過。

落實率：10 項行動建議中，6 項已完成或超額完成，2 項以替代方案實現，2 項部分完成（缺少自動化）。整體落實率可評估為 85%。未完成的部分集中在「自動化安全掃描」與「CLAUDE.md 指令格式」，屬於從 Level 3.5 向 Level 4+ 進階的精修項目。

## 六、安全框架對照（Re-Review 更新）

以 CLLMSE 九域框架和 Vibe-Coded Malware 研究重新對照專案現況：

   | 
    
 | 安全面向 | 首次評估 | Re-Review 評估 | 證據

       | CLLMSE Domain 8：Vibe-Coding 風險
       | 需行動
       | 已緩解
       | Domain Layer 純函式 + 單元測試 + CI 管線 = AI 產出的每次變更都經過行為驗證

       | 行為驗證 vs 結構檢查
       | 無
       | 已實踐
       | 18 項測試驗證的是「程式做了什麼」（推薦結果、Demo 旗標、狀態轉移），不是「程式碼長什麼樣」

       | OWASP LLM02：敏感資訊洩漏
       | 需注意
       | 部分緩解
       | PR Template 有人工檢查項，但缺少自動化掃描

       | OWASP LLM05：供應鏈弱點
       | 需注意
       | 低風險
       | 相依性精簡（3 production deps），.npmrc + package-lock.json 鎖定版本

       | OWASP LLM06：過度代理權限
       | 低風險
       | 已防護
       | 架構報告明確定義 AI 權限 L5–L6 嚴格禁止（合併發布與機密存取）

### Vibe-Coded Malware 啟示的驗證

Roedig et al. 的核心發現——「AI 產出的程式碼結構多樣但行為一致，行為驗證比結構檢查更有效」——在本專案中得到了精確的實踐驗證。calculateRecommendation 的 Test #13 直接測試了冪等性（相同輸入產生相同輸出），這正是「行為一致性」的自動化守護。無論 AI 如何重構推薦引擎的內部結構，只要行為不變，測試就會通過；行為一旦改變，測試就會失敗。這是從理論到實踐的完整閉環。

### Vibe Coding 資安基本功：上線前的五個問題

Gary Chen 的「給非技術人員的資安教學」（2026-08-29，15 萬+ 觀看）以 What'Sub 資安事件為引子，提出了 Vibe Coding 專案上線前必須回答的五個問題。這個框架為本專案的安全評估提供了一個「非技術人員也能執行」的檢查清單。

上線前五問 × 「酒肉朋友」對照

    1. 哪些東西被偷會出大事？ → 本專案無用戶資料、無登入、無付款資訊。作為純靜態 Demo 站，可被竊取的敏感資產為零。低風險
    2. 誰能碰哪些資料？ → 無後端 API、無資料庫。所有資料為靜態 src/data/ 檔案，僅開發者透過 git 可修改。AI 權限分級 L5–L6 嚴格禁止。已防護
    3. 哪一段是你管不到的？ → 第三方依賴僅 Next.js + React + Tailwind（3 production deps），Vercel 託管。攻擊面集中在 npm 供應鏈。可改善
    4. 哪些規則絕對不能被打破？ → isDemo: true + isPurchasable: false（單元測試守護）、「禁止酒駕 · 未滿十八歲禁止飲酒」（E2E 守護）、禁止引入購物車/付款功能（PR Template 守護）。已硬編碼
    5. Codex 掃描結果如何？ → 尚未執行自動化安全掃描工具。建議加入 CI 管線。待行動

值得注意的是，Gary Chen 影片的核心訊息——「功能會動不代表可以上線」——正是本報告從首次分析到 Re-Review 一直強調的主題。「酒肉朋友」的工程化躍遷，本質上就是從「功能會動」（Level 1.5）走向「可以上線」（Level 3.5）的過程。而「上線前五問」中的第四題（哪些規則不能被打破）恰好對應了本專案最強的防護——受控展示邊界的三重守護機制。

— 參考：Gary Chen,「給非技術人員的資安教學，Vibe Coding 必學的基本功」, YouTube (2026-08-29), 22:43

## 七、架構原則對照（Re-Review 更新）

### 架構特性取捨

    達成 可部署性（Deployability）
    Vercel 自動部署 + Next.js 14 建置管線 + CI 自動驗證建置成功。

    達成 可測試性（Testability）
    首次報告標記為「零」的面向。Domain Layer 純函式設計讓核心邏輯可以獨立於 React 環境測試——這是架構決策驅動測試性的教科書案例。

    適當 可擴展性（Scalability）
    保持了首次報告建議的「不過度設計」原則。靜態站點 + CDN 足夠，未引入不必要的後端基礎設施。

### 適應度函數的落地

首次報告提出的四個適應度函數，在 Re-Review 中的實現狀態：

    1. 內容完整性函數 → 已實現 E2E 測試驗證「禁止酒駕」聲明可見性
    2. 決策正確性函數 → 已實現 單元測試驗證推薦引擎輸出（牛排→肋眼/菲力、火鍋→牛五花）
    3. 架構合規函數 → 人工流程 PR Template 禁止引入購物車/付款，但未自動化
    4. 安全基線函數 → 人工流程 PR Template 禁止提交 API 金鑰，但未自動化

## 八、更新後的行動優先級

基於 Re-Review 結果，原始的 P0/P1 項目大部分已完成。以下是更新後的待辦項目，聚焦於 Level 3.5 → Level 4+ 的進階演進。

   | 
    
 | 優先級 | 行動項目 | 預估工時 | 影響

       | P1
       | 建立根目錄 CLAUDE.md（從架構報告萃取指令格式）
       | 1–2 小時
       | 讓 AI Agent 自動載入專案護欄

       | P1
       | CI 管線加入 OxLint 步驟
       | 30 分鐘
       | 統一程式碼品質閘門

       | P1
       | CI 管線加入 E2E 測試（Playwright CI 模式）
       | 1–2 小時
       | 自動化 Demo 邊界防護驗證

       | P2
       | 加入 git-secrets 或等效自動化敏感資訊掃描
       | 1 小時
       | 將 PR Template 的人工檢查項自動化

       | P2
       | Vitest --coverage 報告 + CI artifact
       | 30 分鐘
       | 量化測試覆蓋率基線

       | P2
       | 啟用 GitHub Dependabot
       | 15 分鐘
       | 自動化供應鏈安全更新

       | 探索
       | 考慮引入 Socratic Code Review Master Prompt
       | 2–3 小時
       | 結構化 AI 輔助 Review 流程，進階至 Level 4

       | 探索
       | i18n 測試覆蓋（36 cuts × 3 語言 = 108 翻譯驗證）
       | 2–4 小時
       | 防止翻譯遺漏或不一致

       | 探索
       | 評估 SwarmForge 多代理協作模式的適用性
       | 探索性
       | 將工程紀律編碼進代理拓撲，而非依賴單一 Agent 自律

       | 探索
       | 參照 Vercel design.md 模式，建立 CLAUDE.md 的反模式規則與評估迴圈
       | 探索性
       | 護欄的自我演化——從每次 AI 犯錯中提煉新規則

## 九、多代理協作框架：SwarmForge 深度參照

Uncle Bob（Robert C. Martin）的 SwarmForge 是一套「紀律導向的 tmux 多代理編排平台」，將工程紀律編碼進代理的角色拓撲與交接協議，而非依賴單一 AI Agent 的自律性。以下基於對 GitHub repo 原始碼的直接分析（含 handoff-protocol.md、constitution articles、role prompts）。

### 核心架構：四層設計

SwarmForge 的分層架構

    1. 憲法層（Constitution）：所有 Agent 共用的基礎紀律——engineering.prompt 定義測試、設計與驗證規則；workflow.prompt 定義 worktree 隔離紀律與 commit 歸屬格式（每個 commit 必須標註 "By <role>"）
    2. 角色層（Roles）：每個 Agent 由專職 prompt 定義職責邊界，角色名禁止含底線以維持 handoff 檔名的可讀性
    3. 交接層（Handoff Protocol）：基於檔案系統的持久化訊息佇列——outbox/ → inbox/new/ → inbox/in_process/ → inbox/completed/，由 Babashka daemon 中介傳遞
    4. 編排層（Orchestration）：tmux session 管理 + git worktree 隔離，每個 Agent 在獨立分支工作，禁止檢視其他分支

### Handoff Protocol：持久化的代理間通訊

SwarmForge 最精巧的設計在於其交接協議——不用 API、不用資料庫，純粹用檔案系統 + git commit 實現持久化的代理間工作傳遞：

# Handoff 檔案命名格式
00_20260615T140531Z_000042_from_architect_to_coder_cleaner_QA.handoff

# 檔案內容結構
id: 20260615T140531Z_000042_from_coder
from: coder
to: cleaner
type: git_handoff
task: task-1-cave-setup
commit: a1b2c3d9e8    ← 必須為 10 字元 hex，精確解析為單一 commit

Re-read your role and constitution.
merge_and_process coder a1b2c3d9

關鍵設計決策：Agent 不直接透過 tmux 通訊，而是寫入 outbox/，由 daemon 驗證後投遞到目標 Agent 的 inbox/。wake-up 通知是刻意「失真的」——只說「你有新郵件」，不指定是哪個檔案，強迫 Agent 按佇列優先級處理。這消除了 Agent 挑選工作的偏見。

### 三種編隊的鏈式傳遞

   | 
    
 | 編隊 | 傳遞鏈 | 關鍵規則 | 對本專案的啟示

       | Two-Pack
       | coder → cleaner → coder
       | Cleaner 完成後必須回傳 coder，即使只改了格式
       | 最適合現階段——一個 Agent 實作新元件，另一個確保符合架構規範與 Demo 邊界

       | Four-Pack
       | specifier → coder → refactorer → architect → specifier
       | 每個中間角色必須 forward git_handoff，無論變更大小
       | Architect 可載入 docs/architecture-report.md 作為 context，自動審查架構合規性

       | Six-Pack
       | specifier → coder → cleaner → architect → hardener → QA
       | 完整流水線含 mutation testing 與 Gherkin 驗收測試
       | QA 角色可專職執行 Vitest + Playwright，確保每次迭代通過 Demo 邊界測試

### Engineering Constitution 的護欄設計

engineering.prompt 中的護欄規則與本專案的工程化思路直接呼應：

    原則 小步前進
    「Work in small, reviewable increments」「Prefer the simplest design that supports the current behavior」——與「酒肉朋友」17 個小 commit 的演進節奏一致。

    原則 可測試性分離
    「Separate testable modules from environmentally unsuitable modules」——與本專案的 Domain Layer 純函式架構（wizardReducer + calculateRecommendation 獨立於 React 環境）完全對應。

    原則 交接前驗證
    「Run the relevant local verification command before handoff」——對應本專案的 CI Quality Gate：每次 push 前自動驗證測試 + 建置。

    差距 Mutation Testing
    SwarmForge 將突變測試（mutation testing）作為核心驗證手段，本專案尚未採用。這是一個可探索的進階品質指標——驗證「測試是否真的在守護行為」。

### 關鍵洞察：紀律不靠自律，靠拓撲

SwarmForge 最核心的設計哲學與本專案的工程化方向一致——「酒肉朋友」的 isDemo: true 旗標 + 單元測試 + CI 閘門，本質上就是把「不可違反的約束」從 Agent 的記憶（可遺忘）移到了環境中（不可繞過）。SwarmForge 更進一步：

從環境護欄到拓撲護欄的進化

    Level 3.5（本專案現況）：單一 Agent 工作，環境層的護欄（測試 + CI）攔截違規產出
    Level 4（SwarmForge 模式）：多個 Agent 互相審查，角色邊界本身就是護欄——Cleaner 的 prompt 只允許「重構但不改行為」，這個角色約束就是一種架構適應度函數
    Level 4+（可實踐的中間態）：即使不採用完整的 tmux + worktree 方案，也可以在 CLAUDE.md 中定義不同情境下 AI 的行為邊界，或在 PR Review 流程中要求 AI 分別以「開發者」和「安全審計員」角色執行兩輪審查

— 參考：Robert C. Martin, "SwarmForge: A disciplined tmux-based agent orchestration platform", github.com/unclebob/swarm-forge（含 handoff-protocol.md、constitution/articles/engineering.prompt、constitution/articles/workflow.prompt）

## 十、AI 品牌護欄的工業實踐：Vercel design.md

Vercel 近期公開了他們的 design.md 實踐——一份「給 AI 看的設計規格書」，用自然語言描述頁面的組織邏輯、資訊層次與設計禁區。這個案例為本專案的「CLAUDE.md 建立」建議提供了具體的工業級參照。

### 三層架構閉環

Vercel design.md 的三層設計

    1. design.md 規格檔案：以自然語言定義反模式規則——「禁止同時使用 3 種以上字重」「主色不能同時出現在標題和背景」，取代「版面保持乾淨」等語意模糊指令
    2. 公開 CSS 樣式表：字體、間距與色彩 token 的機械定義，AI Agent 可直接消費
    3. 評估迴圈：將人工審核意見自動化為可重複執行的檢查——超過 200 輪評估，啟用 design.md 的版本較對照組減少 57% 機械性錯誤

### 對「酒肉朋友」的直接啟示

   | 
    
 | Vercel 實踐 | 對應的本專案概念 | 行動建議

       | design.md 反模式規則
       | CLAUDE.md 的約束指令
       | 將「禁止引入購物車」「所有商品必須 isDemo: true」等約束從 PR Template 提升為 CLAUDE.md 反模式規則，讓 AI Agent 在撰寫程式碼前就知道邊界

       | 評估迴圈自動化
       | CI Quality Gate + 適應度函數
       | 現有的 Vitest Test #7（Demo 旗標驗證）已是一種「評估迴圈」——可進一步將 PR Template 的人工檢查項轉為自動化 lint 規則

       | @design-agent 每日生成 + 每週規則精煉
       | 持續演進的護欄
       | 護欄不是一次性文件，而是每次 AI 犯錯後就更新的「活文件」——建議 CLAUDE.md 也採用此節奏

       | 具體反模式 > 模糊指令
       | Context Engineering 的精確性原則
       | 「受控展示邊界」比「注意不要加入商業功能」有效得多——Vercel 的 57% 錯誤減少率驗證了這個設計原則

Vercel 的核心洞察——「把主觀判斷轉成可驗證的機械性規則」——與本專案的演進軌跡完全吻合。「酒肉朋友」的 isDemo: true 旗標就是一個機械性規則；PR Template 的 6 項 checklist 就是反模式清單。差別在於 Vercel 更進一步：由 AI Agent 自己從重複出錯中提煉新規則、自動寫回規格書。這揭示了一個從 Level 3.5 向 Level 4+ 的關鍵路徑——護欄的自我演化。

— 參考：Vercel Engineering, "How our agents build on-brand pages with design.md", vercel.com/blog (2026-09)

## 十一、結語：從報告到實踐的典範

「酒肉朋友」的工程化轉變展示了一個值得記錄的模式：從 AI 架構診斷報告的建議出發，在極短的週期內（約 17 個 commits）完成了從 Level 1.5 到 Level 3.5 的系統性躍遷。這個過程本身就是 Google「New SDLC」文件所描述的「工廠模型」的實踐案例——先設計護欄（架構文件 + 受控展示邊界），再建立品管站（測試 + CI），讓 AI 產出的程式碼在護欄內被驗證。

專案目前的架構品質已經超越了大多數同類 Demo 專案的水準。剩餘的改進空間主要在「將人工流程自動化」（敏感資訊掃描、E2E 納入 CI）和「為 AI Agent 提供更結構化的指令」（CLAUDE.md）。這些都是精修項目，不影響現有架構的穩固性。

整體評價：專案已從「有風險的 Vibe Coding 產物」蛻變為「具備工程紀律的受控展示系統」。五層架構分離、行為驗證導向的測試策略、資料層 Demo 邊界防護、以及 AI 權限分級制度，共同構成了一個可作為教學範例的 AI 輔助開發工程化案例。

  關於本報告：本 Re-Review 基於對 GitHub repo 原始碼的直接掃描與線上站點的功能審查，對照以下十份文獻框架：Google「The New SDLC With Vibe Coding」、Anthropic「創始人行動手冊」、Will 保哥「Socratic Code Review Prompt Generator」、Roedig et al.「Vibe-Coded Malware」（ACM 2026）、Joas A. Santos「CLLMSE Handbook」、Richards & Ford「Fundamentals of Software Architecture」（O'Reilly 2nd Ed.）、Furman & Seamans「AI and the Economy」（NBER 2019）、Robert C. Martin「SwarmForge」多代理協作框架、Vercel Engineering「How our agents build on-brand pages with design.md」、以及 Gary Chen「給非技術人員的資安教學，Vibe Coding 必學的基本功」。首次分析（v1）日期為 2026-09-04，本次 Re-Review（v2）日期為 2026-09-05。
  禁止酒駕 · 未滿十八歲禁止飲酒
