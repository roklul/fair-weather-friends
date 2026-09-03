import React, { useState } from 'react';
import { Wine, Sparkles, Droplets, Flame } from '../Icons';

export default function WinePairingSection({ activeCategory, winePrinciples }) {
  const [activeMethodTab, setActiveMethodTab] = useState(0);

  // 依品類定義專屬料理情境佐餐速查
  const cookingMatrices = {
    beef: [
      {
        method: '原味香煎 / 奶油淋煎',
        meatExamples: '肋眼、紐約客、沙朗、菲力',
        characteristics: '焦化梅納褐變外殼、奶油香、濃郁天然肉汁',
        principles: '依油脂高低挑選。高油花選高單寧 Cabernet，細緻菲力選柔順 Merlot 或 Pinot Noir。',
        recommendedWines: ['Cabernet Sauvignon (卡本內蘇維濃)', 'Merlot (梅洛)', 'Pinot Noir (黑皮諾)'],
        tastingNotes: '深色莓果 · 烤橡木桶香 · 圓潤單寧'
      },
      {
        method: '直火炭烤 / 柴燒煙燻',
        meatExamples: '牛小排、翼板、Brisket 前胸、腹脇',
        characteristics: '木炭香氣、焦香外殼、油脂滴落煙燻氣息',
        principles: '炭香與煙燻感需對應帶辛香、黑胡椒或果香濃郁的重酒體紅酒，產生風味共鳴。',
        recommendedWines: ['Syrah / Shiraz (希哈 / 雪哈)', 'Zinfandel (金芬黛)', 'Malbec (馬爾貝克)'],
        tastingNotes: '黑胡椒辛香 · 煙燻皮革 · 成熟黑李與可可'
      },
      {
        method: '火鍋涮燙 / 日式壽喜燒',
        meatExamples: '牛五花、薄切肋眼、板腱薄片',
        characteristics: '薄切快速熟化、油脂迅速釋放、甜鹹醬汁或沙茶高湯',
        principles: '若有甜鹹醬汁，單寧太重會顯苦澀，需選果香甜美之紅酒；或以高酸乾型氣泡酒瞬間洗刷油膩。',
        recommendedWines: ['Grenache / Garnacha (格納希)', 'Brut Rosé (粉紅氣泡酒 / 香檳)', 'Pinot Noir (黑皮諾)'],
        tastingNotes: '甜美草莓櫻桃 · 柔和單寧 · 活潑高酸氣泡'
      },
      {
        method: '台式紅燒 / 醬香牛肉麵 / 滷牛腱',
        meatExamples: '牛腱心、前胸牛腩、牛肋條',
        characteristics: '醬油、八角、花椒、蔥薑蒜、中藥辛香與膠質濃汁',
        principles: '中式滷汁的醬香與八角調性，與南法隆河丘的草本辛香料或義大利桑嬌維塞的酸度形成和諧共振。',
        recommendedWines: ['Côtes du Rhône (隆河丘)', 'Sangiovese (Chianti 奇揚地)', 'Barbera (巴貝拉)'],
        tastingNotes: '地中海百里香 · 乾草本香料 · 櫻桃果酸'
      },
      {
        method: '法式紅酒慢燉牛肉 (Boeuf Bourguignon)',
        meatExamples: '牛腱、牛肋條、牛腩、牛肩胛',
        characteristics: '番茄糊、紅酒酸香、洋蔥胡蘿蔔甘甜、膠原蛋白稠化',
        principles: '高酸度、帶櫻桃與草本氣息的紅酒能穿透濃稠醬汁，提升燉肉的鮮甜感。',
        recommendedWines: ['Sangiovese (桑嬌維塞)', 'Barbera (巴貝拉)', 'Pinot Noir (勃根地黑皮諾)'],
        tastingNotes: '明亮鮮櫻桃酸度 · 泥土蕈菇 · 均衡骨架'
      }
    ],
    pork: [
      {
        method: '台式焢肉 / 東坡肉 / 滷肉 (甜鹹醬香)',
        meatExamples: '五花三層肉、前腿肉、蹄膀',
        characteristics: '冰糖紅燒、醬油醇香、八角蔥薑、豐富軟爛油脂',
        principles: '高酸度能如檸檬汁般切除油脂；適度微甜殘糖能完美呼應甜鹹醬油香氣。',
        recommendedWines: ['Off-dry Riesling (微甜麗絲玲)', 'Chenin Blanc (白詩南)', 'Brut Champagne (香檳)'],
        tastingNotes: '鮮脆青蘋果 · 微甜水蜜桃 · 俐落酸爽氣泡'
      },
      {
        method: '美式煙燻 BBQ 烤肋排 / 蜜汁叉燒',
        meatExamples: '豬肋排、梅花肉、厚切五花',
        characteristics: 'BBQ 焦糖化甜辣醬汁、木炭煙燻、表面焦脆邊',
        principles: '甜鹹煙燻醬汁需要果香成熟奔放、帶有黑胡椒香草香氣的中高酒體紅酒承接。',
        recommendedWines: ['Zinfandel (金芬黛)', 'Shiraz (希哈)', 'Tempranillo (田帕尼優)'],
        tastingNotes: '成熟黑李果醬 · 烤橡木香草 · 辛香黑胡椒'
      },
      {
        method: '日式炸豬排 / 香煎大里肌',
        meatExamples: '大里肌、小里肌 (腰內肉)',
        characteristics: '酥脆金黃麵衣、純淨緊實瘦肉、豬排沾醬',
        principles: '避免高單寧紅酒壓過纖細肉質；帶有清新果酸的白酒或極柔黑皮諾最能化解炸物油膩。',
        recommendedWines: ['未過桶 Chardonnay (夏多內)', 'Pinot Noir (黑皮諾)', 'Pinot Gris (灰皮諾)'],
        tastingNotes: '青蘋果柑橘 · 優雅清爽 · 圓潤不澀口'
      },
      {
        method: '鹽烤松阪豬 / 蒜泥白切嘴邊肉',
        meatExamples: '松阪豬 (頸頰肉)、豬頰嘴邊肉',
        characteristics: '霜降脆彈油脂、簡單椒鹽或蒜泥醬油提鮮',
        principles: '脆彈口感與清甜脂香，適合果香清亮、生津酸爽的粉紅酒或乾型白酒。',
        recommendedWines: ['普羅旺斯 Dry Rosé (粉紅酒)', 'Pinot Gris (灰皮諾)', 'Gamay (薄酒萊)'],
        tastingNotes: '鮮紅莓果 · 白花清香 · 活潑開胃'
      },
      {
        method: '花生燉豬腳湯 / 筍乾大封肉 (濃稠膠質)',
        meatExamples: '豬蹄 (豬腳)、蹄膀 (腿庫)',
        characteristics: '乳白黏唇膠原高湯、厚實豬皮油脂',
        principles: '黏唇膠質需要高酸白酒或義大利氣泡紅酒瞬間洗刷味蕾，恢復清爽。',
        recommendedWines: ['Riesling (麗絲玲)', 'Dry Lambrusco (微氣泡紅酒)', 'Cava 氣泡酒'],
        tastingNotes: '明快高酸度 · 爽脆氣泡 · 生津去膩'
      }
    ],
    fish: [
      {
        method: '脆皮奶油香煎魚排',
        meatExamples: '鮭魚菲力、土魠魚排、白帶魚段',
        characteristics: '魚皮金黃酥脆、迷迭香大蒜奶油淋醬、多汁肉瓣',
        principles: '高油脂煎魚適合桶陳 Chardonnay 的奶油堅果香，或紐西蘭白蘇維濃的熱帶果酸。',
        recommendedWines: ['桶陳 Chardonnay (夏多內)', 'Sauvignon Blanc (白蘇維濃)', 'Vinho Verde (綠酒)'],
        tastingNotes: '烤奶油青蘋果 · 百香果酸香 · 乾爽收尾'
      },
      {
        method: '古法樹子蔥油清蒸',
        meatExamples: '龍虎斑、金目鱸魚、格陵蘭扁鱈',
        characteristics: '破布子甘甜、魚肉細嫩原汁、蔥薑清香',
        principles: '清蒸講究純淨鮮甜，法國夏布利或灰皮諾的冷冽礦石感能極大化魚肉旨味。',
        recommendedWines: ['Chablis (夏布利白酒)', 'Pinot Grigio (灰皮諾)', '純米吟釀清酒'],
        tastingNotes: '冷冽礦石感 · 鮮爽檸檬皮 · 細膩優雅'
      },
      {
        method: '頂級刺身生食 / 炙燒大腹',
        meatExamples: '黑鮪魚大腹 (Otoro)、鮭魚腹刺身',
        characteristics: '生食冰鎮、天然生魚油脂入口即化、現磨山葵',
        principles: '大腹濃郁油脂與年份香檳的綿密氣泡是極致享受；純米大吟釀更能激發海味鮮甜。',
        recommendedWines: ['純米大吟釀 (Junmai Daiginjo)', 'Blanc de Blancs 香檳', 'Pinot Noir'],
        tastingNotes: '純淨米香旨味 · 綿密酵母氣泡 · 極致滑順'
      },
      {
        method: '居酒屋鹽烤魚下巴 / 蒲燒鯛魚',
        meatExamples: '鮭魚下巴、青甘下巴、蒲燒鯛魚片',
        characteristics: '外皮焦脆爆汁、醬香濃稠、炭火香氣',
        principles: '焦香爆汁海鮮需要辛口清酒或高酸白蘇維濃，洗刷焦香油脂。',
        recommendedWines: ['辛口本釀造清酒 (Dry Sake)', 'Sauvignon Blanc', 'Cava 氣泡酒'],
        tastingNotes: '辛口爽俐 · 芭樂百香果 · 乾脆俐落'
      },
      {
        method: '沙茶砂鍋魚頭 / 薑絲魚骨湯',
        meatExamples: '砂鍋大魚頭、石斑魚骨湯',
        characteristics: '沙茶辛香、濃稠膠原白湯、大白菜甘甜',
        principles: '濃郁沙茶與高湯適合天然米香醇厚的純米清酒或圓潤白葡萄酒。',
        recommendedWines: ['純米清酒 (Junmai Sake)', 'Unoaked Chardonnay', 'Gewürztraminer'],
        tastingNotes: '醇厚米香 · 圓潤包覆 · 鮮甜加乘'
      }
    ]
  };

  const currentMatrix = cookingMatrices[activeCategory] || cookingMatrices.beef;
  const currentCategoryName = activeCategory === 'beef' ? '牛肉' : activeCategory === 'pork' ? '豬肉' : '魚類海鮮';

  return (
    <section id="wine-pairing" className="py-16 sm:py-20 bg-parchment-200/50 border-y border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 標題與核心理念 */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold tracking-wider uppercase">
            <Wine className="w-3.5 h-3.5 text-purple-800" />
            <span>風味科學指南 · {currentCategoryName}餐酒搭配核心邏輯</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            {currentCategoryName}與酒類搭配的判斷科學
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base">
            餐酒搭配不應只是死記教條。從「油脂與酸度單寧平衡」到「烹調火候與醬汁比部位更關鍵」，掌握兩大風味黃金法則。
          </p>
        </div>

        {/* 兩大原則對比卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {winePrinciples.map((principle, pIdx) => (
            <div key={pIdx} className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm space-y-5">
              <div className="flex items-center gap-3 border-b border-parchment-200 pb-3">
                <div className={`p-2.5 rounded-xl ${pIdx === 0 ? 'bg-beef-burgundy text-white' : 'bg-amber-600 text-white'}`}>
                  {pIdx === 0 ? <Droplets className="w-5 h-5" /> : <Flame className="w-5 h-5" />}
                </div>
                <div>
                  <span className="text-xs font-serif italic text-charcoal-muted">Principle 0{pIdx + 1}</span>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-charcoal">
                    {principle.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                {principle.desc}
              </p>

              <div className="space-y-3">
                {principle.items.map((item, iIdx) => (
                  <div key={iIdx} className="p-3 bg-parchment-100 rounded-xl border border-parchment-200 text-xs space-y-1">
                    <div className="font-bold text-charcoal flex justify-between">
                      <span>{item.meatType || item.method}</span>
                      <span className="text-beef-burgundy font-mono">{item.wineStyle || item.wineFocus}</span>
                    </div>
                    <div className="text-charcoal-muted">推薦酒款：{item.examples || item.picks}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 互動式烹調情境配酒速查面板 */}
        <div className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-bold font-serif text-charcoal flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-beef-burgundy" />
              {currentCategoryName}料理情境佐餐酒速查矩陣
            </h3>
            <p className="text-xs text-charcoal-muted mt-1">點選下方常見料理方式，查看風味調性與對應品種指南：</p>
          </div>

          {/* 橫向分頁按鈕 */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-parchment-200 pb-4">
            {currentMatrix.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMethodTab(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all ${
                  activeMethodTab === idx
                    ? 'bg-beef-burgundy text-white border-beef-burgundy shadow-xs'
                    : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
                }`}
              >
                {item.method}
              </button>
            ))}
          </div>

          {/* 當前選中的料理情境詳情 */}
          {(() => {
            const current = currentMatrix[activeMethodTab] || currentMatrix[0];
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-parchment-100 p-6 rounded-xl border border-parchment-200">
                <div className="md:col-span-7 space-y-3">
                  <div className="text-lg font-serif font-bold text-charcoal">{current.method}</div>
                  <div className="text-xs text-charcoal-muted">
                    <span className="font-bold text-charcoal">代表部位：</span>{current.meatExamples}
                  </div>
                  <div className="text-xs text-charcoal-muted">
                    <span className="font-bold text-charcoal">風味特徵：</span>{current.characteristics}
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed pt-1">
                    <span className="font-bold text-beef-burgundy">配酒原則：</span>{current.principles}
                  </p>
                </div>

                <div className="md:col-span-5 bg-purple-50/80 p-4 rounded-xl border border-purple-200 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-950 flex items-center gap-1.5">
                    <Wine className="w-4 h-4 text-purple-700" />
                    推薦佐餐酒款
                  </div>
                  <div className="space-y-1.5">
                    {current.recommendedWines.map((w, i) => (
                      <div key={i} className="text-xs font-serif italic text-purple-900 font-semibold">
                        • {w}
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-purple-200/80 text-[11px] text-purple-950">
                    <span className="font-bold">風味關鍵：</span>{current.tastingNotes}
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}
