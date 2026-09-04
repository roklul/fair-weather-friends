import { describe, expect, it } from 'vitest';
import { calculateRecommendation } from '../../src/domain/recommendation/calculateRecommendation';
import { BEEF_CUTS_DATA, WIZARD_DATA as BEEF_WIZARD } from '../../src/data/beefData';
import { PORK_CUTS_DATA, PORK_WIZARD_DATA } from '../../src/data/porkData';
import { FISH_CUTS_DATA, FISH_WIZARD_DATA } from '../../src/data/fishData';

describe('calculateRecommendation - Domain Recommendation Engine', () => {
  // 1. 正常牛肉推薦（牛排 + 軟嫩）
  it('1. 正確回傳牛肉牛排香煎且軟嫩之完美推薦部位', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'steak',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD,
      maxLimit: 4
    });

    expect(result.recommendedCuts.length).toBeGreaterThan(0);
    expect(result.recommendedCuts.length).toBeLessThanOrEqual(4);
    // 菲力 (tenderloin) 與肋眼 (ribeye) 應為推薦
    const cutIds = result.recommendedCuts.map((c) => c.id);
    expect(cutIds).toContain('tenderloin');
  });

  // 2. 正常牛肉火鍋推薦
  it('2. 正確回傳火鍋壽喜燒推薦部位 (牛五花、肋眼)', () => {
    const result = calculateRecommendation({
      textureId: 'fatty',
      cookingId: 'hotpot',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD
    });

    const cutIds = result.recommendedCuts.map((c) => c.id);
    expect(cutIds).toContain('short-plate-cut');
  });

  // 3. 豬肉焢肉東坡肉推薦
  it('3. 正確推薦台式焢肉與東坡肉之五花三層肉', () => {
    const result = calculateRecommendation({
      textureId: 'fatty',
      cookingId: 'stew-braise',
      cutsData: PORK_CUTS_DATA,
      wizardData: PORK_WIZARD_DATA
    });

    const cutIds = result.recommendedCuts.map((c) => c.id);
    expect(cutIds).toContain('pork-belly-cut');
  });

  // 4. 豬肉日式炸豬排推薦
  it('4. 正確推薦日式炸豬排之小里肌與大里肌', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'fry-cutlet',
      cutsData: PORK_CUTS_DATA,
      wizardData: PORK_WIZARD_DATA
    });

    const cutIds = result.recommendedCuts.map((c) => c.id);
    expect(cutIds).toContain('pork-tenderloin-cut');
  });

  // 5. 魚類清蒸推薦
  it('5. 正確推薦古法清蒸之石斑與金目鱸', () => {
    const result = calculateRecommendation({
      textureId: 'tender-steam',
      cookingId: 'steam-fresh',
      cutsData: FISH_CUTS_DATA,
      wizardData: FISH_WIZARD_DATA
    });

    expect(result.recommendedCuts.length).toBeGreaterThan(0);
  });

  // 6. 魚類刺身大腹推薦
  it('6. 正確推薦頂級刺身之黑鮪魚大腹', () => {
    const result = calculateRecommendation({
      textureId: 'sashimi-raw',
      cookingId: 'sashimi-plate',
      cutsData: FISH_CUTS_DATA,
      wizardData: FISH_WIZARD_DATA
    });

    const cutIds = result.recommendedCuts.map((c) => c.id);
    expect(cutIds).toContain('tuna-otoro-cut');
  });

  // 7. 受控展示邊界保護：所有回傳物件均具備 isDemo: true 與 isPurchasable: false
  it('7. 嚴格驗證所有推薦物件具備 isDemo=true 與 isPurchasable=false 屬性', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'steak',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD
    });

    result.recommendedCuts.forEach((cut) => {
      expect(cut.isDemo).toBe(true);
      expect(cut.isPurchasable).toBe(false);
    });
  });

  // 8. 邊界測試：空資料集防禦
  it('8. 傳入空 cutsData 時安全回傳空陣列，絕不 throw error', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'steak',
      cutsData: [],
      wizardData: BEEF_WIZARD
    });

    expect(result.recommendedCuts).toEqual([]);
    expect(result.totalMatches).toBe(0);
  });

  // 9. 邊界測試：無效或未定義參數防禦
  it('9. 未傳入任何參數時安全回傳預設結構', () => {
    const result = calculateRecommendation();
    expect(result.recommendedCuts).toEqual([]);
    expect(result.perfectMatches).toEqual([]);
    expect(result.totalMatches).toBe(0);
  });

  // 10. 邊界測試：傳入不存在的 textureId 時自動降級回退
  it('10. 傳入不存在的 textureId 時安全降級至預設題庫推薦', () => {
    const result = calculateRecommendation({
      textureId: 'non-existent-texture-id',
      cookingId: 'steak',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD
    });

    expect(result.recommendedCuts.length).toBeGreaterThan(0);
  });

  // 11. 邊界測試：傳入不存在的 cookingId 時自動降級回退
  it('11. 傳入不存在的 cookingId 時安全降級至預設題庫推薦', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'non-existent-cooking-id',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD
    });

    expect(result.recommendedCuts.length).toBeGreaterThan(0);
  });

  // 12. maxLimit 限制數量驗證
  it('12. 指定 maxLimit=2 時精準只回傳 2 筆推薦', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'steak',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD,
      maxLimit: 2
    });

    expect(result.recommendedCuts.length).toBe(2);
  });

  // 13. 重複 ID 去重驗證
  it('13. 回傳推薦部位清單絕無重複 ID', () => {
    const result = calculateRecommendation({
      textureId: 'fatty',
      cookingId: 'hotpot',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD,
      maxLimit: 10
    });

    const ids = result.recommendedCuts.map((c) => c.id);
    const uniqueIds = Array.from(new Set(ids));
    expect(ids.length).toBe(uniqueIds.length);
  });

  // 14. 完美契合判斷 (perfectMatches) 正確性
  it('14. 正確回傳同時符合口感與料理之交集 ID (perfectMatches)', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'steak',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD
    });

    expect(Array.isArray(result.perfectMatches)).toBe(true);
    expect(result.perfectMatches).toContain('tenderloin');
  });

  // 15. 不變性 (Immutability) 驗證：絕不修改原始傳入之 cutsData
  it('15. 純函式執行絕不污染或修改傳入的原始資料集', () => {
    const originalLength = BEEF_CUTS_DATA.length;
    calculateRecommendation({
      textureId: 'tender',
      cookingId: 'steak',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD
    });

    expect(BEEF_CUTS_DATA.length).toBe(originalLength);
  });
});
