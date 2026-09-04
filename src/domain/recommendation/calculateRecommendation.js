/**
 * 純函式：計算符合口感偏好與料理方式之推薦肉品清單
 * 
 * 核心原則：
 * 1. 絕不依賴 React、DOM、API 或全域狀態。
 * 2. 嚴格處理邊界條件（空陣列、無效 ID、未提供參數）。
 * 3. 回傳物件保證具備受控展示型標記 isDemo: true, isPurchasable: false。
 *
 * @param {Object} params
 * @param {string} params.textureId - 使用者選擇的口感偏好 ID
 * @param {string} params.cookingId - 使用者選擇的料理方式 ID
 * @param {Array} params.cutsData - 當前品類的肉品細切資料庫
 * @param {Object} params.wizardData - 當前品類的問答題庫 (含 textures 與 cookingMethods)
 * @param {number} [params.maxLimit=4] - 最多回傳之推薦部位數量
 * @returns {Object} { perfectMatches: Array, recommendedCuts: Array, totalMatches: number }
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
      totalMatches: 0
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

  // 映射回完整肉品物件並附加邊界保護屬性
  const recommendedCuts = orderedIds
    .map((id) => cutsData.find((cut) => cut.id === id))
    .filter(Boolean)
    .map((cut) => ({
      ...cut,
      isDemo: true,
      isPurchasable: false
    }));

  return {
    perfectMatches,
    recommendedCuts,
    totalMatches: recommendedCuts.length
  };
}
