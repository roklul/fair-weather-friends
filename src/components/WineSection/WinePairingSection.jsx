import React, { useState } from 'react';
import { Wine, Sparkles, Droplets, Flame } from '../Icons';
import { TRANSLATIONS } from '../../data/translations';

export default function WinePairingSection({ activeCategory, winePrinciples, currentLang = 'zh-TW' }) {
  const [activeMethodTab, setActiveMethodTab] = useState(0);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const w = t.wine;
  const currentCategoryName = t.categories[activeCategory]?.shortLabel || activeCategory;

  // 依品類定義專屬料理情境佐餐速查（含葡萄酒、台灣啤酒、高粱、紹興與清酒）
  const cookingMatrices = {
    beef: [
      {
        method: '火鍋涮燙 / 日式壽喜燒 / 麻辣鍋',
        meatExamples: '牛五花、薄切肋眼、翼板薄片',
        characteristics: '薄切快速熟化、油脂迅速釋放、甜鹹壽喜燒醬或香辣牛油高湯',
        principles: '涮牛肉與麻辣鍋油脂豐厚，台灣金牌/18天生啤酒的爽快氣泡或冰鎮酸梅酒能極速解辣消脂；若搭葡萄酒宜選果香甜美的 Grenache 或乾型粉紅氣泡酒。',
        recommendedWines: [
          '🍺 台灣 18 天生啤酒 / 金牌啤酒 (極速洗油解辣)',
          '🍷 Grenache / Garnacha (果香甜美·柔和單寧)',
          '🍾 Brut Rosé (粉紅氣泡酒 / 香檳)',
          '🍶 辛口本釀造清酒 (Dry Sake)'
        ],
        tastingNotes: '爽快麥芽氣泡 · 鮮甜草莓櫻桃 · 俐落生津解膩'
      },
      {
        method: '原味香煎 / 奶油淋煎牛排',
        meatExamples: '肋眼、紐約客、沙朗、菲力',
        characteristics: '焦化梅納褐變外殼、奶油香、濃郁天然肉汁',
        principles: '高油花選高單寧 Cabernet 或精釀黑啤酒；細緻菲力選柔順 Merlot 或 Pinot Noir。',
        recommendedWines: [
          '🍷 Cabernet Sauvignon (卡本內蘇維濃)',
          '🍷 Merlot (梅洛) / Pinot Noir (黑皮諾)',
          '🍺 司陶特黑啤酒 / 精釀 IPA (Stout / IPA)'
        ],
        tastingNotes: '深色黑醋栗 · 烤橡木桶香 · 圓潤單寧骨架'
      },
      {
        method: '直火炭烤 / 柴燒煙燻 BBQ',
        meatExamples: '帶骨牛小排、翼板、Brisket 前胸',
        characteristics: '木炭香氣、焦香外殼、油脂滴落煙燻氣息',
        principles: '炭香與煙燻感需對應帶黑胡椒、辛香料的重酒體紅酒或冰凍金門高粱酒，激發焦香甜味。',
        recommendedWines: [
          '🍷 Syrah / Shiraz (希哈 / 煙燻黑胡椒)',
          '🥃 金門 58 度高粱酒 (冷凍凍飲·甘冽回甘)',
          '🍷 Zinfandel (金芬黛·黑李果醬)',
          '🍺 琥珀愛爾精釀啤酒 (Amber Ale)'
        ],
        tastingNotes: '黑胡椒辛香 · 煙燻皮革 · 穀物高粱甘醇'
      },
      {
        method: '台式紅燒 / 醬香牛肉麵 / 滷牛腱',
        meatExamples: '牛腱心、前胸牛腩、牛肋條',
        characteristics: '純釀醬油、八角、花椒、蔥薑蒜、中藥辛香與膠質濃汁',
        principles: '台式滷汁的醬香與八角，與陳年台灣紹興酒、南法隆河丘的草本辛香料形成絕妙共鳴。',
        recommendedWines: [
          '🍶 台灣陳年特級紹興酒 (溫飲·醬香加乘)',
          '🍷 Côtes du Rhône (法國隆河丘紅酒)',
          '🍷 Sangiovese (Chianti 奇揚地)',
          '🍺 台灣小麥啤酒 (Wheat Beer)'
        ],
        tastingNotes: '地中海百里香 · 焦糖麥香 · 沉穩陳年醬香'
      },
      {
        method: '法式紅酒慢燉牛肉 (Boeuf Bourguignon)',
        meatExamples: '牛腱、牛肋條、牛腩、牛肩胛',
        characteristics: '番茄糊、紅酒酸香、洋蔥胡蘿蔔甘甜、膠原蛋白稠化',
        principles: '高酸度、帶櫻桃與草本氣息的紅酒能穿透濃稠醬汁，提升燉肉的鮮甜感。',
        recommendedWines: [
          '🍷 Sangiovese (桑嬌維塞)',
          '🍷 Pinot Noir (勃根地黑皮諾)',
          '🍷 Barbera (巴貝拉)'
        ],
        tastingNotes: '明亮鮮櫻桃酸度 · 泥土蕈菇 · 均衡骨架'
      }
    ],
    pork: [
      {
        method: '台式焢肉 / 東坡肉 / 滷肉 (甜鹹醬香)',
        meatExamples: '五花三層肉、前腿肉、蹄膀',
        characteristics: '冰糖紅燒、醬油醇香、八角蔥薑、豐富軟爛油脂',
        principles: '高酸度白酒如檸檬汁般切除油脂；台味搭配以台灣特級紹興酒或 18 天生啤酒最為道地痛快！',
        recommendedWines: [
          '🍶 台灣埔里特級紹興酒 (溫潤醇厚)',
          '🍺 台灣 18 天生啤酒 (爽脆氣泡洗油)',
          '🍷 Off-dry Riesling (微甜麗絲玲)',
          '🍾 Brut Champagne (香檳)'
        ],
        tastingNotes: '鮮脆青蘋果 · 醇厚黃酒香 · 俐落酸爽氣泡'
      },
      {
        method: '美式煙燻 BBQ 烤肋排 / 蜜汁叉燒',
        meatExamples: '豬肋排、梅花肉、厚切五花',
        characteristics: 'BBQ 焦糖化甜辣醬汁、木炭煙燻、表面焦脆邊',
        principles: '甜鹹煙燻醬汁需要果香奔放的紅酒、精釀 IPA 或清爽日式梅酒承接。',
        recommendedWines: [
          '🍷 Zinfandel (金芬黛·果醬甜香)',
          '🍺 精釀美式 IPA (柑橘酒花香)',
          '🥃 冰鎮本格青梅酒 (酸甜開胃)',
          '🍷 Shiraz (希哈)'
        ],
        tastingNotes: '成熟黑李果醬 · 烤橡木香草 · 辛香黑胡椒'
      },
      {
        method: '日式炸豬排 / 香煎大里肌',
        meatExamples: '大里肌、小里肌 (腰內肉)',
        characteristics: '酥脆金黃麵衣、純淨緊實瘦肉、豬排沾醬',
        principles: '避免高單寧紅酒壓過纖細肉質；冰涼生啤酒、未過桶夏多內或清酒能完美化解炸物油膩。',
        recommendedWines: [
          '🍺 冰鎮拉格生啤酒 (Lager / 爽快解炸物)',
          '🍷 未過桶 Chardonnay (夏多內)',
          '🍶 特別純米清酒 (Special Junmai)',
          '🍷 Pinot Noir (黑皮諾)'
        ],
        tastingNotes: '青蘋果柑橘 · 優雅清爽 · 圓潤不澀口'
      },
      {
        method: '鹽烤松阪豬 / 蒜泥白切嘴邊肉',
        meatExamples: '松阪豬 (頸頰肉)、豬頰嘴邊肉',
        characteristics: '霜降脆彈油脂、簡單椒鹽或蒜泥醬油提鮮',
        principles: '脆彈口感與清甜脂香，適合台灣生啤酒、金門高粱或果香清亮的粉紅酒。',
        recommendedWines: [
          '🍺 台灣金牌啤酒 / 18 天生啤',
          '🥃 金門 38 度高粱酒 (凍飲提鮮)',
          '🍷 普羅旺斯 Dry Rosé (粉紅酒)',
          '🍶 吟釀清酒'
        ],
        tastingNotes: '鮮紅莓果 · 白花清香 · 活潑開胃'
      },
      {
        method: '花生燉豬腳湯 / 筍乾大封肉 (濃稠膠質)',
        meatExamples: '豬蹄 (豬腳)、蹄膀 (腿庫)',
        characteristics: '乳白黏唇膠原高湯、厚實豬皮油脂',
        principles: '黏唇膠質需要高酸白酒、氣泡酒或辛口清酒瞬間洗刷味蕾，恢復清爽。',
        recommendedWines: [
          '🍷 Riesling (麗絲玲)',
          '🍶 辛口本釀造清酒 (Dry Sake)',
          '🍾 Cava 氣泡酒'
        ],
        tastingNotes: '明快高酸度 · 爽脆氣泡 · 生津去膩'
      }
    ],
    fish: [
      {
        method: '古法清蒸鮮魚 / 蔥油淋汁',
        meatExamples: '龍虎斑、金目鱸、石斑清肉排',
        characteristics: '細緻膠質魚皮、清甜魚肉肌理、蔥薑清香',
        principles: '以帶柑橘、白花香氣的干型白酒或純米吟釀清酒，襯托魚肉極致鮮甜。',
        recommendedWines: [
          '🍷 Sauvignon Blanc (白蘇維濃)',
          '🍶 純米吟釀清酒 (Junmai Ginjo)',
          '🍷 Pinot Grigio (灰皮諾)'
        ],
        tastingNotes: '青草白花 · 萊姆柑橘 · 乾淨俐落'
      },
      {
        method: '厚切香煎魚排 / 奶油檸檬汁',
        meatExamples: '鮭魚菲力、鱈魚排、海鱸魚',
        characteristics: '金黃酥脆魚皮、豐潤油脂、奶油焦香',
        principles: '奶油與魚脂需要過橡木桶夏多內或高酸度香檳切開油感。',
        recommendedWines: [
          '🍷 橡木桶 Chardonnay (夏多內)',
          '🍾 頂級香檳 (Brut Champagne)',
          '🍷 Chenin Blanc (白詩南)'
        ],
        tastingNotes: '烤榛果奶油 · 熟成青蘋果 · 細緻綿密泡沫'
      },
      {
        method: '生食刺身大腹 / 握壽司',
        meatExamples: '黑鮪魚大腹、鮭魚肚刺身、紅甘肚',
        characteristics: '極高低熔點油脂、入口即化、甘甜無渣',
        principles: '以超辛口清酒或夏布利白酒洗滌油膜，引爆濃郁旨味。',
        recommendedWines: [
          '🍶 超辛口純米大吟釀 (Dry Daiginjo)',
          '🍷 Chablis (夏布利白酒)',
          '🍾 零添糖香檳 (Brut Nature)'
        ],
        tastingNotes: '礦石鹹鮮 · 銳利酸度 · 旨味加乘'
      },
      {
        method: '居酒屋鹽烤魚下巴 / 炭烤魚頭',
        meatExamples: '鮭魚下巴、紅甘下巴、烤魚頭',
        characteristics: '厚潤焦香魚皮、高油脂、炭火焦香',
        principles: '炭烤魚油需要台灣生啤酒、威士忌 Highball 或果香飽滿的愛爾啤酒消解油膩。',
        recommendedWines: [
          '🍺 台灣 18 天生啤酒 (爽脆氣泡)',
          '🥃 威士忌 Highball (蘇打威士忌)',
          '🍺 精釀雙料 IPA (Double IPA)'
        ],
        tastingNotes: '麥芽爽脆 · 柑橘酒花 · 碳酸解油'
      }
    ]
  };

  const currentMatrix = cookingMatrices[activeCategory] || cookingMatrices.beef;

  return (
    <section id="wine-pairing" className="py-16 sm:py-20 bg-parchment-200/50 border-y border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 標題與核心理念 */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold tracking-wider uppercase">
            <Wine className="w-3.5 h-3.5 text-purple-800" />
            <span>{w.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            {currentCategoryName}{w.title}
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base">
            {w.subtitle}
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
                    <div className="text-charcoal-muted">{w.recWineHeader}：{item.examples || item.picks}</div>
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
              {w.interactiveTitle}
            </h3>
            <p className="text-xs text-charcoal-muted mt-1">{w.interactiveSub}</p>
          </div>

          {/* 橫向分頁按鈕 */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-parchment-200 pb-4">
            {currentMatrix.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMethodTab(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
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
                    <span className="font-bold text-charcoal">{w.charHeader}</span>{current.characteristics}
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed pt-1">
                    <span className="font-bold text-beef-burgundy">{w.principleHeader}</span>{current.principles}
                  </p>
                </div>

                <div className="md:col-span-5 bg-purple-50/80 p-4 rounded-xl border border-purple-200 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-950 flex items-center gap-1.5">
                    <Wine className="w-4 h-4 text-purple-700" />
                    {w.recWineHeader}
                  </div>
                  <div className="space-y-2">
                    {current.recommendedWines.map((wineItem, i) => (
                      <div key={i} className="text-xs font-sans text-purple-950 font-medium bg-purple-100/60 px-2.5 py-1.5 rounded-lg border border-purple-200/60">
                        {wineItem}
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-purple-200/80 text-[11px] text-purple-950">
                    <span className="font-bold">{w.flavorKeyHeader}</span>{current.tastingNotes}
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
