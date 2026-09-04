## 變更摘要 (Summary)
<!-- 簡要說明本次 PR 解決的問題或新增的功能 -->

## 品質與安全檢查清單 (Quality & Security Checklist)
- [ ] 核心推薦或業務邏輯已抽離為純函式 (Domain Layer)
- [ ] 已為新增的規則撰寫單元測試 (`npm run test:unit` 通過)
- [ ] 已執行 `npm run build` 確認 Next.js 編譯無錯誤
- [ ] 未提交任何 API 金鑰、秘密或敏感個資
- [ ] 未引入任何真實年齡蒐集、購物車、付款或商品交易功能
- [ ] 受控展示邊界：商品資料皆保持 `isDemo: true, isPurchasable: false`
