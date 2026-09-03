import React from 'react';
import { PRIMAL_AREAS } from '../../data/beefData';
import { Flame, Wine, Compass, ChevronRight, Sparkles, BookOpen } from 'lucide-react';

export default function PrimalDetailPanel({ selectedPrimalId, onSelectCutByName, onOpenCutModalById }) {
  const primal = PRIMAL_AREAS.find((p) => p.id === selectedPrimalId) || PRIMAL_AREAS[1];

  // 映射延伸部位名稱至細切 ID
  const getCutIdFromExtendedName = (name) => {
    if (name.includes('肋眼')) return 'ribeye';
    if (name.includes('菲力')) return 'tenderloin';
    if (name.includes('紐約客')) return 'new-york-strip';
    if (name.includes('沙朗')) return 'sirloin';
    if (name.includes('牛小排')) return 'short-rib';
    if (name.includes('板腱')) return 'top-blade';
    if (name.includes('翼板')) return 'flat-iron';
    if (name.includes('前胸') || name.includes('牛腩')) return 'brisket-cut';
    if (name.includes('牛五花')) return 'short-plate-cut';
    if (name.includes('腹脇') || name.includes('法蘭克')) return 'flank-cut';
    if (name.includes('腱')) return 'beef-shank';
    if (name.includes('臀肉') || name.includes('和尚頭') || name.includes('頭刀')) return 'round-rump';
    return null;
  };

  return (
    <div className="bg-parchment-50 border border-parchment-300 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between h-full">
      <div className="space-y-5">
        
        {/* 標題與色徽 */}
        <div className="flex items-start justify-between gap-3 border-b border-parchment-200 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-3.5 h-3.5 rounded-full inline-block ring-2 ring-parchment-300"
                style={{ backgroundColor: primal.color }}
              />
              <span className="text-xs font-serif italic text-charcoal-muted tracking-wider">
                美式 8 大分切 · {primal.enName}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal flex items-baseline gap-2">
              {primal.name}
              <span className="text-sm font-sans font-medium text-beef-burgundy">
                {primal.positioning}
              </span>
            </h3>
          </div>
        </div>

        {/* 解剖特徵說明 */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-beef-burgundy" />
            解剖位置與肉質特性
          </div>
          <p className="text-sm text-charcoal-light leading-relaxed font-sans bg-parchment-100 p-3 rounded-lg border border-parchment-200">
            {primal.description}
          </p>
        </div>

        {/* 常見延伸市售部位 (可直接點擊深入) */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              常見熱門細分切（點擊看規格）
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {primal.extendedCuts.map((cutName, idx) => {
              const cutId = getCutIdFromExtendedName(cutName);
              return (
                <button
                  key={idx}
                  onClick={() => cutId && onOpenCutModalById(cutId)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
                    cutId
                      ? 'bg-parchment-100 text-charcoal hover:bg-beef-burgundy hover:text-white hover:border-beef-burgundy border-parchment-300 shadow-2xs'
                      : 'bg-parchment-200/50 text-charcoal-muted border-parchment-300 cursor-default'
                  }`}
                >
                  <span>{cutName}</span>
                  {cutId && <ChevronRight className="w-3 h-3 opacity-70" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 推薦料理方式 */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-red-600" />
            推薦烹調方式
          </div>
          <div className="flex flex-wrap gap-1.5">
            {primal.recommendedCooking.map((cook, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium"
              >
                {cook}
              </span>
            ))}
          </div>
        </div>

        {/* 理想葡萄酒搭配 */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2 flex items-center gap-1.5">
            <Wine className="w-3.5 h-3.5 text-purple-700" />
            推薦佐餐酒款品種
          </div>
          <div className="flex flex-wrap gap-1.5">
            {primal.idealWine.map((wine, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-purple-50 border border-purple-200 text-purple-950 text-xs font-medium font-serif italic"
              >
                {wine}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* 底部行動導引 */}
      <div className="pt-4 mt-4 border-t border-parchment-200 flex items-center justify-between">
        <a
          href="#cuts-library"
          className="text-xs font-semibold text-beef-burgundy hover:underline flex items-center gap-1"
        >
          <BookOpen className="w-3.5 h-3.5" />
          瀏覽該部位於 12 大熱門肉品卡片
        </a>
      </div>
    </div>
  );
}
