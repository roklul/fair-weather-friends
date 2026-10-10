/**
 * 純函式：計算符合口感偏好與料理方式之推薦肉品清單與調酒風味協同配對
 * 
 * 核心原則：
 * 1. 絕不依賴 React、DOM、API 或全域狀態。
 * 2. 嚴格處理邊界條件（空陣列、無效 ID、未提供參數）。
 * 3. 回傳物件保證具備受控展示型標記 isDemo: true, isPurchasable: false。
 * 4. 落實科學搭餐原則（酸度切油、香氣共振、苦甜平衡、旨味烘托）。
 */

// 品類專屬與風味科學調酒搭餐規則庫
export const COCKTAIL_PAIRING_RULES = [
  // -------------------- 魚類 / 海鮮 --------------------
  // 1. 生食刺身 / 清蒸白肉魚 -> 黛綺莉 (Daiquiri)：蘭姆甘蔗清甜與萊姆酸提鮮
  {
    id: 'fish-daiquiri-rule',
    match: (cut, cookingId) => cut?.category === 'fish' && (['steam-fresh', 'sashimi-plate', 'steam', 'raw', 'soup'].includes(cookingId) || ['sashimi-raw', 'tender-steam', 'boneless-tender'].includes(cut?.primalId)),
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
  // 2. 肥美魚肚 / 鹽烤魚下巴 / 炸魚排 -> 瑪格麗特 (Margarita)：海鹽與萊姆切開 Omega-3 魚油
  {
    id: 'fish-margarita-rule',
    match: (cut, cookingId) => cut?.category === 'fish' && (['pan-sear', 'grill-bbq', 'fry-fillet', 'fried', 'sear'].includes(cookingId) || (cut?.scores?.fat >= 4)),
    cocktailId: 'margarita',
    cocktailName: '瑪格麗特',
    cocktailEnName: 'Margarita',
    synergyType: 'citrus-salt',
    synergyTag: '青檸海鹽解油',
    synergyTagEn: 'Citrus & Salt Cut Fat',
    synergyTagJa: 'ライムと海塩の脂切り',
    synergyReason: '微鹹海鹽杯口與新鮮青檸果酸，瞬間化解焦香煎魚與炙烤魚脂的油厚感。',
    synergyReasonEn: 'Sea salt rim and fresh lime acidity instantly cut through pan-seared richness and charcoal fish oils.',
    synergyReasonJa: 'グラスの海塩とライムの酸味が、香ばしく焼いた魚の脂っこさを心地よくリフレッシュします。'
  },
  // 3. 紅燒魚 / 砂鍋魚煲 -> 琴通寧特調 (Gin Gin Mule / Penicillin)：生薑薄荷驅寒除腥
  {
    id: 'fish-braise-rule',
    match: (cut, cookingId) => cut?.category === 'fish' && ['braise-sauce', 'soup-pot', 'stew', 'braise'].includes(cookingId),
    cocktailId: 'gin-gin-mule',
    cocktailName: '琴酒騾子',
    cocktailEnName: 'Gin Gin Mule',
    synergyType: 'ginger-mint',
    synergyTag: '生薑草本驅腥',
    synergyTagEn: 'Ginger & Mint Freshness',
    synergyTagJa: '生姜とミントの清涼感',
    synergyReason: '薑汁辛香與薄荷清新草本共鳴，化解醬香與魚湯黏稠，提振鮮甜。',
    synergyReasonEn: 'Zesty ginger and fresh mint cut rich soy glaze and viscous broth, enlivening clean seafood sweetness.',
    synergyReasonJa: '生姜のスパイシーさとミントの爽快感が、煮込みの濃厚さを切り魚の甘みを際立たせます。'
  },

  // -------------------- 雞肉 --------------------
  // 4. 香脆炸雞 / 燒鳥鹽烤 -> 威士忌酸酒 (Whiskey Sour)：酸甜泡沫洗去油膩
  {
    id: 'chicken-sour-rule',
    match: (cut, cookingId) => cut?.category === 'chicken' && (['deep-fry', 'bbq-skewer', 'fried', 'crispy'].includes(cookingId) || ['chicken-wing', 'chicken-tail'].includes(cut?.primalId)),
    cocktailId: 'whiskey-sour',
    cocktailName: '威士忌酸酒',
    cocktailEnName: 'Whiskey Sour',
    synergyType: 'acidity-cut',
    synergyTag: '酸甜極致解膩',
    synergyTagEn: 'Acidity Fat-Cutter',
    synergyTagJa: '極上の酸味で脂を切る',
    synergyReason: '檸檬高酸度與綿密蛋白泡沫俐落切開炸皮與炭烤雞皮脂香，回甘釋放禽肉鮮甜。',
    synergyReasonEn: 'Crisp lemon acidity and silky foam cleanly cut through crispy poultry skin and charcoal fats.',
    synergyReasonJa: 'レモンの爽快な酸味と滑らかな泡が香ばしい鶏皮の脂を切り、肉本来の旨味を引き立てます。'
  },
  // 5. 舒肥低脂雞胸 / 雞里肌 -> 黛綺莉 (Daiquiri)：純淨果酸烘托白肉細嫩
  {
    id: 'chicken-daiquiri-rule',
    match: (cut, cookingId) => cut?.category === 'chicken' && (['sous-vide'].includes(cookingId) || ['chicken-breast', 'chicken-tender'].includes(cut?.primalId)),
    cocktailId: 'daiquiri',
    cocktailName: '黛綺莉',
    cocktailEnName: 'Daiquiri',
    synergyType: 'crisp-umami',
    synergyTag: '輕盈果酸提鮮',
    synergyTagEn: 'Delicate Acidity Lift',
    synergyTagJa: '軽快な酸味で引き立つ旨味',
    synergyReason: '純淨萊姆酸與細緻甘蔗甜感，溫柔托住舒肥白肉的細膩纖維，輕盈無負擔。',
    synergyReasonEn: 'Pure lime acidity and delicate sugarcane sweetness cradle tender, lean sous-vide white meat.',
    synergyReasonJa: '透明感あるライムの酸味が、低温調理されたヘルシーな白身肉の繊細な食感を美しく引き立てます。'
  },
  // 6. 燉雞湯 / 脆皮腿排 -> 盤尼西林 (Penicillin)：暖薑蜂蜜煙燻共鳴
  {
    id: 'chicken-stew-rule',
    match: (cut, cookingId) => cut?.category === 'chicken' && (['stew-soup', 'pan-sear', 'stew'].includes(cookingId) || cut?.primalId === 'chicken-thigh'),
    cocktailId: 'penicillin',
    cocktailName: '盤尼西林',
    cocktailEnName: 'Penicillin',
    synergyType: 'honey-ginger',
    synergyTag: '暖薑蜂蜜共鳴',
    synergyTagEn: 'Ginger & Honey Resonance',
    synergyTagJa: '生姜と蜂蜜の温かな調和',
    synergyReason: '新鮮薑汁與蜂蜜檸檬香氣呼應溫補雞湯與脆皮腿排，微燻泥煤尾韻增添深邃層次。',
    synergyReasonEn: 'Fresh ginger, honey, and peaty Scotch notes harmonize with savory chicken broths and seared thighs.',
    synergyReasonJa: 'フレッシュな生姜と蜂蜜レモンのアロマが、濃厚なチキンスープやソテーに深みを与えます。'
  },

  // -------------------- 豬肉 --------------------
  // 7. 日式炸豬排 / 香煎里肌 -> 威士忌酸酒 (Whiskey Sour)：檸檬酸度切油解膩
  {
    id: 'pork-fry-rule',
    match: (cut, cookingId) => cut?.category === 'pork' && (['fry-cutlet', 'stir-fry', 'fried', 'crispy'].includes(cookingId) || ['pork-loin', 'pork-tenderloin'].includes(cut?.primalId)),
    cocktailId: 'whiskey-sour',
    cocktailName: '威士忌酸酒',
    cocktailEnName: 'Whiskey Sour',
    synergyType: 'acidity-cut',
    synergyTag: '酸甜極致解膩',
    synergyTagEn: 'Acidity Fat-Cutter',
    synergyTagJa: '極上の酸味で脂を切る',
    synergyReason: '檸檬高酸度與綿密泡沫俐落切開酥炸豬排油脂，回甘釋放豬肉鮮甜。',
    synergyReasonEn: 'Crisp lemon acidity and silky foam cleanly slice through pork cutlet crust while amplifying sweet pork juices.',
    synergyReasonJa: 'レモンの爽快な酸味と滑らかな泡がとんかつの油分を切り、豚肉の甘みを引き立てます。'
  },
  // 8. 焢肉東坡肉 / 豬腳膠原慢燉 -> 內格羅尼 (Negroni)：草本苦甜化解濃郁醬油肉脂
  {
    id: 'pork-stew-rule',
    match: (cut, cookingId) => cut?.category === 'pork' && (['stew-braise', 'soup-collagen', 'stew', 'braise'].includes(cookingId) || ['pork-belly', 'pork-hock'].includes(cut?.primalId)),
    cocktailId: 'negroni',
    cocktailName: '內格羅尼',
    cocktailEnName: 'Negroni',
    synergyType: 'herbal-depth',
    synergyTag: '草本苦甜解膩',
    synergyTagEn: 'Bittersweet Herbal Depth',
    synergyTagJa: 'ハーブのほろ苦い調和',
    synergyReason: '金巴利草本苦甜與橙皮芳香穿透慢火滷肉與蹄膀膠質，齒頰生津不膩口。',
    synergyReasonEn: 'Campari herbal bitters and orange peel balance rich pork belly glazes and unctuous collagen.',
    synergyReasonJa: 'カンパリのビタースイートとオレンジピールが、豚の角煮の濃厚なタレとコラーゲンを上品にまとめます。'
  },
  // 9. 韓日燒烤松阪豬 / 烤肋排 -> 莫希托 (Mojito)：薄荷青檸碎冰刷洗炭烤油香
  {
    id: 'pork-bbq-rule',
    match: (cut, cookingId) => cut?.category === 'pork' && (['bbq-grill', 'hotpot', 'bbq'].includes(cookingId) || (cut?.scores?.fat >= 4)),
    cocktailId: 'mojito',
    cocktailName: '莫希托',
    cocktailEnName: 'Mojito',
    synergyType: 'mint-refresh',
    synergyTag: '薄荷冰爽洗油',
    synergyTagEn: 'Mint & Lime Palate Cleanser',
    synergyTagJa: 'ミントの爽快リフレッシュ',
    synergyReason: '新鮮碾壓薄荷與清冽萊姆氣泡水，極速洗刷直火烤豬五花與霜降松阪的豐厚油花。',
    synergyReasonEn: 'Crushed mint and sparkling lime effervescence cleanse palate between rich bites of grilled pork belly and jowl.',
    synergyReasonJa: 'フレッシュミントと炭酸の刺激が、ジューシーな豚バラ焼肉やトントロの脂を瞬時に洗い流します。'
  },

  // -------------------- 牛肉 --------------------
  // 10. 高油脂牛排 / 炭烤牛小排 -> 古典雞尾酒 (Old Fashioned)：波本焦糖與木質苦精平衡牛脂梅納反應
  {
    id: 'beef-smoke-caramel-rule',
    match: (cut, cookingId) => (cut?.category === 'beef' || !cut?.category) && ((cut?.scores?.fat >= 4) || ['steak', 'bbq', 'smoked-bbq', 'sear', 'grill', 'roast'].includes(cookingId)),
    cocktailId: 'old-fashioned',
    cocktailName: '古典雞尾酒',
    cocktailEnName: 'Old Fashioned',
    synergyType: 'smoke-caramel',
    synergyTag: '焦糖木質共振',
    synergyTagEn: 'Caramel & Wood Resonance',
    synergyTagJa: 'キャラメルと木の共鳴',
    synergyReason: '波本威士忌的橡木桶焦糖香氣與高油脂牛排梅納反應完美交融。',
    synergyReasonEn: 'Bourbon oak and caramel notes harmonize with caramelized crust and deep beef marbling.',
    synergyReasonJa: 'バーボンのオーク樽とキャラメル香が、ジューシーな牛肉のメイラード反応と見事に調和します。'
  },
  // 11. 牛肉麵 / 紅酒燉牛肉 / 慢燉牛腱 -> 內格羅尼 (Negroni)：草本苦甜與柑橘解鎖厚重膠質
  {
    id: 'beef-stew-rule',
    match: (cut, cookingId) => (cut?.category === 'beef' || !cut?.category) && (['beef-noodle', 'stew', 'braise', 'slow'].includes(cookingId) || (cut?.scores?.tenderness <= 2)),
    cocktailId: 'negroni',
    cocktailName: '內格羅尼',
    cocktailEnName: 'Negroni',
    synergyType: 'herbal-depth',
    synergyTag: '草本苦甜層次',
    synergyTagEn: 'Bittersweet Herbal Depth',
    synergyTagJa: 'ハーブのほろ苦い深み',
    synergyReason: '草本苦甜與柑橘皮油承接慢燉牛肉與高湯的厚重膠質，齒頰留香。',
    synergyReasonEn: 'Herbal bittersweet Campari and orange peel balance rich beef collagen and savory stew depth.',
    synergyReasonJa: '薬草のビタースイートとオレンジピールが、牛肉煮込みの濃厚なコラーゲンと調和します。'
  },
  // 12. 火鍋牛五花 / 快炒肉絲 -> 莫希托 (Mojito) / 瑪格麗特 (Margarita)
  {
    id: 'beef-hotpot-rule',
    match: (cut, cookingId) => (cut?.category === 'beef' || !cut?.category) && ['hotpot', 'stir-fry'].includes(cookingId),
    cocktailId: 'mojito',
    cocktailName: '莫希托',
    cocktailEnName: 'Mojito',
    synergyType: 'mint-refresh',
    synergyTag: '薄荷清爽解膩',
    synergyTagEn: 'Mint Fresh Palate Cleanse',
    synergyTagJa: 'ミントの清快リフレッシュ',
    synergyReason: '現壓新鮮薄荷與清冽萊姆氣泡，瞬間化解壽喜燒醬汁甜鹹與涮牛肉油脂。',
    synergyReasonEn: 'Fresh crushed mint and chilled lime bubbles cleanly slice through sukiyaki glazes and beef fat.',
    synergyReasonJa: 'フレッシュミントとライムの炭酸が、すき焼きのタレや牛しゃぶの脂を爽快にリフレッシュします。'
  }
];

// 預設 Fallback 調酒搭餐（中性海鹽青檸風味）
const DEFAULT_PAIRING = {
  cocktailId: 'margarita',
  cocktailName: '瑪格麗特',
  cocktailEnName: 'Margarita',
  synergyType: 'citrus-salt',
  synergyTag: '青檸海鹽萬用解膩',
  synergyTagEn: 'Universal Citrus-Salt Balance',
  synergyTagJa: 'ライム海塩の万能リフレッシュ',
  synergyReason: '高酸萊姆與微鹹海鹽提亮味蕾，為任何精選肉品料理帶來絕佳清爽感。',
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
