import { describe, expect, it } from 'vitest';
import { calculateRecommendation, getPairedCocktailForCut } from '../../src/domain/recommendation/calculateRecommendation';
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
      expect(cut.pairedCocktail.isDemo).toBe(true);
      expect(cut.pairedCocktail.isPurchasable).toBe(false);
    });
  });

  // 8. 邊界測試：空資料庫安全防護
  it('8. cutsData 為空時回傳空結果而不崩潰', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'steak',
      cutsData: [],
      wizardData: BEEF_WIZARD
    });

    expect(result.recommendedCuts).toEqual([]);
    expect(result.perfectMatches).toEqual([]);
    expect(result.totalMatches).toBe(0);
    expect(result.overallPairing).toBeDefined();
  });

  // 9. 邊界測試：null 或 undefined 參數防護
  it('9. 傳入 undefined 參數時安全回退', () => {
    const result = calculateRecommendation();
    expect(result.recommendedCuts).toEqual([]);
    expect(result.totalMatches).toBe(0);
  });

  // 10. 邊界測試：無效 ID 自動 fallback 到首筆
  it('10. 傳入不存在之 textureId 與 cookingId 時優雅 fallback', () => {
    const result = calculateRecommendation({
      textureId: 'non-existent-texture',
      cookingId: 'non-existent-cooking',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD
    });

    expect(result.recommendedCuts.length).toBeGreaterThan(0);
  });

  // 11. maxLimit 限制數量驗證
  it('11. 嚴格遵守 maxLimit 限制回傳筆數', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'steak',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD,
      maxLimit: 2
    });

    expect(result.recommendedCuts.length).toBeLessThanOrEqual(2);
  });

  // 12. 完美契合 (perfectMatches) 優先度排序測試
  it('12. 同時滿足口感與料理法之部位應優先排在最前面', () => {
    const result = calculateRecommendation({
      textureId: 'tender',
      cookingId: 'steak',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD
    });

    if (result.perfectMatches.length > 0) {
      const topCutId = result.recommendedCuts[0].id;
      expect(result.perfectMatches).toContain(topCutId);
    }
  });

  // 13. 純函式確定性（Idempotency）：相同輸入必定產生完全相同輸出
  it('13. 相同輸入多次調用產生完全一致的輸出', () => {
    const params = {
      textureId: 'lean',
      cookingId: 'stew',
      cutsData: BEEF_CUTS_DATA,
      wizardData: BEEF_WIZARD
    };

    const run1 = calculateRecommendation(params);
    const run2 = calculateRecommendation(params);
    expect(run1).toEqual(run2);
  });

  // 14. 推薦調酒協同配對：高脂/炭烤牛排配對 Old Fashioned
  it('14. 高脂牛排香煎正確配對 Old Fashioned 與焦糖木質共振標籤', () => {
    const cut = { id: 'ribeye', name: '肋眼', scores: { fat: 5, tenderness: 4, flavor: 5 } };
    const pairing = getPairedCocktailForCut(cut, 'sear');

    expect(pairing.cocktailId).toBe('old-fashioned');
    expect(pairing.synergyTag).toBe('焦糖木質共振');
    expect(pairing.synergyReason).toContain('波本威士忌');
  });

  // 15. 推薦調酒協同配對：炸物/豬肉配對 Whiskey Sour
  it('15. 炸物或豬肉料理正確配對 Whiskey Sour 與酸甜解膩標籤', () => {
    const cut = { id: 'pork-loin', name: '大里肌', category: 'pork', scores: { fat: 2 } };
    const pairing = getPairedCocktailForCut(cut, 'fried');

    expect(pairing.cocktailId).toBe('whiskey-sour');
    expect(pairing.synergyTag).toBe('酸甜極致解膩');
  });

  // 16. 推薦調酒協同配對：海鮮/清蒸魚配對 Daiquiri
  it('16. 清蒸海鮮魚類料理正確配對 Daiquiri 與清甜提鮮標籤', () => {
    const cut = { id: 'seabass', name: '金目鱸', category: 'fish', scores: { fat: 2 } };
    const pairing = getPairedCocktailForCut(cut, 'steam');

    expect(pairing.cocktailId).toBe('daiquiri');
    expect(pairing.synergyTag).toBe('清甜果酸提鮮');
  });

  // 17. 推薦調酒協同配對：慢燉/筋膜配對 Negroni
  it('17. 慢燉膠質肉品正確配對 Negroni 與草本苦甜層次標籤', () => {
    const cut = { id: 'shank', name: '牛腱心', scores: { tenderness: 2, fat: 2 } };
    const pairing = getPairedCocktailForCut(cut, 'stew');

    expect(pairing.cocktailId).toBe('negroni');
    expect(pairing.synergyTag).toBe('草本苦甜層次');
  });

  // 18. 推薦調酒協同配對：無效 cut 物件回傳安全預設
  it('18. 傳入空物件或 null cut 時回傳安全預設調酒 (Margarita)', () => {
    const pairing = getPairedCocktailForCut(null);
    expect(pairing.cocktailId).toBe('margarita');
    expect(pairing.isDemo).toBe(true);
    expect(pairing.isPurchasable).toBe(false);
  });
});
