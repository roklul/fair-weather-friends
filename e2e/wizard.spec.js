import { test, expect } from '@playwright/test';

test.describe('酒肉朋友 - 核心流程與受控展示邊界驗證 E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // 1. Happy Path: 首頁載入與快捷意圖連動選肉助手
  test('1. 點擊快捷意圖按鈕自動連動選肉助手並開啟部位詳情彈窗', async ({ page }) => {
    // 確認首頁標題正常呈現
    await expect(page.locator('h1')).toContainText('從部位開始');

    // 點擊「我想吃火鍋」
    const hotpotBtn = page.getByRole('button', { name: '我想吃火鍋' });
    await expect(hotpotBtn).toBeVisible();
    await hotpotBtn.click();

    // 驗證 Wizard 自動滾動且出現推薦卡片
    const wizardSection = page.locator('#wizard');
    await expect(wizardSection).toBeVisible();

    // 驗證規格詳情按鈕可點擊並開啟彈窗
    const detailBtn = wizardSection.getByRole('button', { name: '規格詳情' }).first();
    await expect(detailBtn).toBeVisible();
    await detailBtn.click();

    // 驗證彈窗正常顯示且包含關閉按鈕
    const closeBtn = page.getByRole('button', { name: '關閉視窗' });
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();
  });

  // 2. Demo 邊界控制驗證：全站無購買/加入購物車按鈕，且免責與法定警語始終可見
  test('2. 安全與受控展示邊界：全站無結帳/購物車按鈕，且 Demo 免責與警語清晰可見', async ({ page }) => {
    // 驗證頂部 Demo Disclaimer 橫幅
    await expect(page.getByText('DEMO MODE')).toBeVisible();
    await expect(page.getByText('本專案為互動選肉與調酒侍酒指南之技術展示')).toBeVisible();

    // 驗證全站絕無「購買」、「加入購物車」、「立即結帳」按鈕
    const purchaseButtons = page.locator('button:has-text("購買"), button:has-text("加入購物車"), button:has-text("結帳")');
    await expect(purchaseButtons).toHaveCount(0);

    // 驗證法規警語清晰呈現
    await expect(page.getByText('禁止酒駕').first()).toBeVisible();
    await expect(page.getByText('未滿十八歲禁止飲酒').first()).toBeVisible();
  });
});
