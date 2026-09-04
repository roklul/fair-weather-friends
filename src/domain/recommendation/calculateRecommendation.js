/**
 * 純函式：計算符合口感偏好與料理方式之推薦肉品清單與調酒風味協同配對
 * 
 * 核心原則：
 * 1. 絕不依賴 React、DOM、API 或全域狀態。
 * 2. 嚴格處理邊界條件（空陣列、無效 ID、未提供參數）。
 * 3. 回傳物件保證具備受控展示型標記 isDemo: true, isPurchasable: false。
 * 4. 落實科學搭餐原則（酸度切油、香氣共振、苦甜平衡、旨味烘托）。
 */

// 經典搭餐科學配對規則庫
export const COCKTAIL_PAIRING_RULES = [
  // 1. 高油脂 / 炭烤 / 香煎肉品 (牛排、牛小排、和牛) -> 橡木焦糖與苦精平衡 (Old Fashioned)
  {
    id: 'smoke-caramel-rule',
    match: (cut, cookingId) => (cut?.scores?.fat >= 4) || ['sear', 'bbq', 'roast', 'grill'].includes(cookingId),
    cocktailId: 'old-fashioned',
    cocktailName: '古典雞尾酒',
    cocktailEnName: 'Old Fashioned',
    synergyType: 'smoke-caramel',
    synergyTag: '焦糖木質共振',
    synergyTagEn: 'Caramel & Wood Resonance',
    synergyTagJa: 'キャラメルと木の共鳴',
    synergyReason: '波本威士忌的橡木桶焦糖香氣與高油脂牛排梅納反應完美交融。',
    synergyReasonEn: 'Bourbon oak and caramel notes harmonize with caramelized crust and deep marbling.',
    synergyReasonJa: 'バーボンのオーク樽とキャラメル香が、ジューシーな牛肉のメイラード反応と見事に調和します。'
  },
  // 2. 炸物 / 酥脆 / 豬肉料理 -> 檸檬酸度與綿密泡沫切開油感 (Whiskey Sour / Margarita)
  {
    id: 'acidity-cut-rule',
    match: (cut, cookingId) => ['fried', 'pork-fry', 'crispy'].includes(cookingId) || cut?.category === 'pork',
    cocktailId: 'whiskey-sour',
    cocktailName: '威士忌酸酒',
    cocktailEnName: 'Whiskey Sour',
    synergyType: 'acidity-cut',
    synergyTag: '酸甜極致解膩',
    synergyTagEn: 'Acidity Fat-Cutter',
    synergyTagJa: '極上の酸味で脂を切る',
    synergyReason: '檸檬高酸度與綿密蛋白泡沫俐落切開肉脂，回甘釋放肉質鮮甜。',
    synergyReasonEn: 'Crisp lemon acidity and silky foam cleanly cut through fat while boosting natural meat sweetness.',
    synergyReasonJa: 'レモンの爽快な酸味と滑らかな泡が脂っこさを切り、肉本来の旨味を引き立てます。'
  },
  // 3. 海鮮 / 魚類 / 清蒸 / 湯品 -> 純淨果酸與甘蔗微甜烘托旨味 (Daiquiri / Gin & Tonic)
  {
    id: 'crisp-umami-rule',
    match: (cut, cookingId) => ['steam', 'soup', 'raw', 'light'].includes(cookingId) || cut?.category === 'fish',
    cocktailId: 'daiquiri',
    cocktailName: '黛綺莉',
    cocktailEnName: 'Daiquiri',
    synergyType: 'crisp-umami',
    synergyTag: '清甜果酸提鮮',
    synergyTagEn: 'Crisp Acidity & Umami Lift',
    synergyTagJa: '柑橘の酸味で旨味を引き立てる',
    synergyReason: '純淨萊姆酸與白蘭姆酒甘蔗香氣，完全烘托細緻魚肉與海鮮旨味。',
    synergyReasonEn: 'Pure lime acidity and subtle sugarcane notes elevate delicate fish textures and natural umami.',
    synergyReasonJa: 'ライムの透明感ある酸味とサトウキビの香りが、繊細な魚介の旨味を最大限に引き出します。'
  },
  // 4. 慢燉 / 紅燒 / 筋膜膠質肉品 -> 草本苦甜與橙皮解鎖厚重風味 (Negroni)
  {
    id: 'herbal-depth-rule',
    match: (cut, cookingId) => ['stew', 'braise', 'slow'].includes(cookingId) || (cut?.scores?.tenderness <= 2),
    cocktailId: 'negroni',
    cocktailName: '內格羅尼',
    cocktailEnName: 'Negroni',
    synergyType: 'herbal-depth',
    synergyTag: '草本苦甜層次',
    synergyTagEn: 'Bittersweet Herbal Depth',
    synergyTagJa: 'ハーブのほろ苦い深み',
    synergyReason: '草本苦甜與柑橘皮油承接慢燉醬汁的厚重膠質，齒頰留香。',
    synergyReasonEn: 'Herbal bittersweet Campari and orange peel balance rich collagen and savory stew depth.',
    synergyReasonJa: '薬草のビタースイートとオレンジピールが、煮込み料理の濃厚なコラーゲンと調和します。'
  }
];

// 預設 Fallback 調酒搭餐
const DEFAULT_PAIRING = {
  cocktailId: 'margarita',
  cocktailName: '瑪格麗特',
  cocktailEnName: 'Margarita',
  synergyType: 'citrus-salt',
  synergyTag: '青檸海鹽萬用解膩',
  synergyTagEn: 'Universal Citrus-Salt Balance',
  synergyTagJa: 'ライム海塩の万能リフレッシュ',
  synergyReason: '高酸萊姆與微鹹海鹽提亮味蕾，為任何肉品料理帶來絕佳清爽感。',
  synergyReasonEn: 'High acidity and sea salt rim refresh palate and complement diverse savory cuts.',
  synergyReasonJa: '高酸度のライムと塩口が舌をリフレッシュし、肉の旨味を引き立てます。'
};

/**
 * 純函式：計算單一部位之最適搭餐調酒
 */
export function getPairedCocktailForCut(cut = {}, cookingId = '') {
  if (!cut || typeof cut !== 'object') {
    return { ...DEFAULT_PAIRING, isDemo: true, isPurchasable: false };
  }

  const matchedRule = COCKTAIL_PAIRING_RULES.find((rule) => rule.match(cut, cookingId));
  const pairing = matchedRule || DEFAULT_PAIRING;

  return {
    cocktailId: pairing.cocktailId,
    cocktailName: pairing.cocktailName,
    cocktailEnName: pairing.cocktailEnName,
    synergyType: pairing.synergyType,
    synergyTag: pairing.synergyTag,
    synergyTagEn: pairing.synergyTagEn,
    synergyTagJa: pairing.synergyTagJa,
    synergyReason: pairing.synergyReason,
    synergyReasonEn: pairing.synergyReasonEn,
    synergyReasonJa: pairing.synergyReasonJa,
    isDemo: true,
    isPurchasable: false
  };
}

/**
 * 主計算函式：依據口感與料理法產生推薦部位與搭餐調酒
 *
 * @param {Object} params
 * @param {string} params.textureId - 口感偏好 ID
 * @param {string} params.cookingId - 料理方式 ID
 * @param {Array} params.cutsData - 肉品細切資料庫
 * @param {Object} params.wizardData - 問答題庫
 * @param {number} [params.maxLimit=4] - 最多回傳推薦部位數量
 * @returns {Object} { perfectMatches, recommendedCuts, totalMatches, overallPairing }
 */
export function calculateRecommendation({
  textureId,
  cookingId,
  cutsData = [],
  wizardData = { textures: [], cookingMethods: [] },
  maxLimit = 4
} = {}) {
  // 防禦邊界：若資料集為空，安全回傳空結果
  if (!Array.isArray(cutsData) || cutsData.length === 0) {
    return {
      perfectMatches: [],
      recommendedCuts: [],
      totalMatches: 0,
      overallPairing: { ...DEFAULT_PAIRING, isDemo: true, isPurchasable: false }
    };
  }

  const textures = wizardData?.textures || [];
  const cookingMethods = wizardData?.cookingMethods || [];

  // 取得選中之口感與料理設定（若無效則回退至第一筆預設）
  const activeTextureObj = textures.find((t) => t.id === textureId) || textures[0] || null;
  const activeCookingObj = cookingMethods.find((c) => c.id === cookingId) || cookingMethods[0] || null;

  const textureMatches = activeTextureObj ? (activeTextureObj.recommendedIds || []) : [];
  const cookingMatches = activeCookingObj ? (activeCookingObj.recommendedIds || []) : [];

  // 計算交集：同時滿足口感與料理法之「完美契合 (Perfect Match)」部位
  const perfectMatches = textureMatches.filter((id) => cookingMatches.includes(id));

  // 排序優先序：完美交集 > 料理法推薦 > 口感推薦
  const orderedIds = Array.from(
    new Set([...perfectMatches, ...cookingMatches, ...textureMatches])
  ).slice(0, maxLimit);

  // 映射回完整肉品物件並附加調酒搭餐與受控邊界屬性
  const recommendedCuts = orderedIds
    .map((id) => cutsData.find((cut) => cut.id === id))
    .filter(Boolean)
    .map((cut) => {
      const pairedCocktail = getPairedCocktailForCut(cut, cookingId);
      return {
        ...cut,
        pairedCocktail,
        isDemo: true,
        isPurchasable: false
      };
    });

  // 全域主推薦調酒（以第一首選部位之配對為準，若無則為預設）
  const topCut = recommendedCuts[0] || null;
  const overallPairing = topCut ? topCut.pairedCocktail : { ...DEFAULT_PAIRING, isDemo: true, isPurchasable: false };

  return {
    perfectMatches,
    recommendedCuts,
    totalMatches: recommendedCuts.length,
    overallPairing
  };
}
