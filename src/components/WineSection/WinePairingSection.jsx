import React, { useState } from 'react';
import { WINE_PAIRING_PRINCIPLES } from '../../data/beefData';
import { Wine, Sparkles, Droplets, Flame, CheckCircle, HelpCircle } from '../Icons';

export default function WinePairingSection() {
  const [activeMethodTab, setActiveMethodTab] = useState(0);

  const cookingWinePairings = [
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
  ];

  return (
    <section id="wine-pairing" className="py-16 sm:py-20 bg-parchment-200/50 border-y border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 標題與核心理念 */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold tracking-wider uppercase">
            <Wine className="w-3.5 h-3.5 text-purple-800" />
            <span>風味科學指南 · 餐酒搭配核心邏輯</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            牛肉與酒類搭配的判斷科學
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base">
            餐酒搭配不應只停留在「紅酒配紅肉」的單一教條。從「脂肪含量決定單寧」到「烹調火候與醬汁比部位更關鍵」，掌握兩大黃金原則。
          </p>
        </div>

        {/* 兩大原則對比卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* 原則 1 */}
          <div className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm space-y-5">
            <div className="flex items-center gap-3 border-b border-parchment-200 pb-3">
              <div className="p-2.5 rounded-xl bg-beef-burgundy text-white">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-serif italic text-charcoal-muted">Principle 01</span>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-charcoal">
                  油脂多寡決定單寧強度 (Fat & Tannin)
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
              紅酒單寧會與牛排中的脂肪和蛋白質結合，降低單寧的乾澀感；同時單寧能化解油脂油膩感，保持每口清新。
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-parchment-100 rounded-xl border border-parchment-200 text-xs space-y-1">
                <div className="font-bold text-charcoal flex justify-between">
                  <span>高油花肉品 (肋眼、牛小排、牛五花)</span>
                  <span className="text-beef-burgundy font-mono">高單寧 · 重酒體</span>
                </div>
                <div className="text-charcoal-muted">代表品種：Cabernet Sauvignon、Syrah、Malbec</div>
              </div>

              <div className="p-3 bg-parchment-100 rounded-xl border border-parchment-200 text-xs space-y-1">
                <div className="font-bold text-charcoal flex justify-between">
                  <span>中等油脂 (紐約客、沙朗、翼板)</span>
                  <span className="text-amber-700 font-mono">中酒體 · 酸度果味均衡</span>
                </div>
                <div className="text-charcoal-muted">代表品種：Merlot、Tempranillo、Sangiovese</div>
              </div>

              <div className="p-3 bg-parchment-100 rounded-xl border border-parchment-200 text-xs space-y-1">
                <div className="font-bold text-charcoal flex justify-between">
                  <span>低脂清瘦 (菲力、臀肉、板腱)</span>
                  <span className="text-emerald-800 font-mono">低單寧 · 清新細緻</span>
                </div>
                <div className="text-charcoal-muted">代表品種：Pinot Noir、Merlot、Cabernet Franc</div>
              </div>
            </div>
          </div>

          {/* 原則 2 */}
          <div className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm space-y-5">
            <div className="flex items-center gap-3 border-b border-parchment-200 pb-3">
              <div className="p-2.5 rounded-xl bg-amber-600 text-white">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-serif italic text-charcoal-muted">Principle 02</span>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-charcoal">
                  烹調火候與醬汁比部位更關鍵 (Cooking & Sauce)
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
              同一塊肉，料理方法不同，搭酒方向隨之改變。炭烤焦香需要胡椒煙燻感；番茄紅酒慢燉需要鮮爽果酸。
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-parchment-100 rounded-xl border border-parchment-200 text-xs space-y-1">
                <div className="font-bold text-charcoal flex justify-between">
                  <span>炭火燒烤 / 煙燻焦香</span>
                  <span className="text-red-700 font-mono">黑胡椒 · 煙燻木質調</span>
                </div>
                <div className="text-charcoal-muted">代表酒款：Syrah / Shiraz、Zinfandel</div>
              </div>

              <div className="p-3 bg-parchment-100 rounded-xl border border-parchment-200 text-xs space-y-1">
                <div className="font-bold text-charcoal flex justify-between">
                  <span>火鍋 / 壽喜燒 (甜鹹醬汁)</span>
                  <span className="text-orange-700 font-mono">甜美果香 · 高酸氣泡</span>
                </div>
                <div className="text-charcoal-muted">代表酒款：Grenache、Brut Rosé 粉紅氣泡酒</div>
              </div>

              <div className="p-3 bg-parchment-100 rounded-xl border border-parchment-200 text-xs space-y-1">
                <div className="font-bold text-charcoal flex justify-between">
                  <span>台式紅燒 / 醬香滷味</span>
                  <span className="text-purple-800 font-mono">辛香草本 · 生津果酸</span>
                </div>
                <div className="text-charcoal-muted">代表酒款：Côtes du Rhône (隆河丘)、Sangiovese</div>
              </div>
            </div>
          </div>

        </div>

        {/* 互動式烹調情境配酒速查面板 */}
        <div className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-bold font-serif text-charcoal flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-beef-burgundy" />
              料理情境佐餐酒速查矩陣
            </h3>
            <p className="text-xs text-charcoal-muted mt-1">點選下方常見料理方式，查看風味調性與對應品種指南：</p>
          </div>

          {/* 橫向分頁按鈕 */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-parchment-200 pb-4">
            {cookingWinePairings.map((item, idx) => (
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
            const current = cookingWinePairings[activeMethodTab];
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-parchment-100 p-6 rounded-xl border border-parchment-200">
                <div className="md:col-span-7 space-y-3">
                  <div className="text-lg font-serif font-bold text-charcoal">{current.method}</div>
                  <div className="text-xs text-charcoal-muted">
                    <span className="font-bold text-charcoal">常用部位：</span>{current.meatExamples}
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
