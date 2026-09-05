import React from 'react';
import { FISH_PRIMAL_AREAS } from '../../data/fishData';
import { getLocalizedPrimal } from '../../data/primalsI18n';
import { TRANSLATIONS } from '../../data/translations';
import { Flame, Wine, Compass, ChevronRight, Sparkles, BookOpen } from '../Icons';

export default function FishDetailPanel({ selectedPrimalId, onOpenCutModalById, currentLang = 'zh-TW' }) {
  const rawPrimal = FISH_PRIMAL_AREAS.find((p) => p.id === selectedPrimalId) || FISH_PRIMAL_AREAS[0];
  const primal = getLocalizedPrimal(rawPrimal, currentLang);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const a = t.anatomy;

  const getCutIdFromExtendedName = (name) => {
    const n = name.toLowerCase();
    if (n.includes('菲力') || n.includes('loin') || n.includes('背肉') || n.includes('清肉') || n.includes('赤身') || n.includes('フィレ')) return 'salmon-loin';
    if (n.includes('大腹') || n.includes('otoro') || n.includes('腹') || n.includes('ハラス') || n.includes('トロ')) return 'tuna-otoro-cut';
    if (n.includes('下巴') || n.includes('collar') || n.includes('kama') || n.includes('カマ')) return 'salmon-collar';
    if (n.includes('頭') || n.includes('head') || n.includes('兜')) return 'fish-head-cut';
    if (n.includes('尾') || n.includes('皮') || n.includes('tail') || n.includes('skin')) return 'fish-tail-skin';
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
                {t.categories.fish.subtitle} · {primal.enName}
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
            {a.anatomyTitle}
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
              {a.popularCuts}
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
                      ? 'bg-parchment-100 text-charcoal hover:bg-beef-burgundy hover:text-white hover:border-beef-burgundy border-parchment-300 shadow-2xs cursor-pointer'
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
            {a.cookingTitle}
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

        {/* 推薦適配酒款 */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2 flex items-center gap-1.5">
            <Wine className="w-3.5 h-3.5 text-beef-burgundy" />
            {a.wineTitle}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {primal.idealWine.map((wName, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-purple-50 border border-purple-200 text-purple-900 text-xs font-serif font-medium"
              >
                {wName}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* 底部跳轉部位庫錨點 */}
      <div className="pt-4 mt-6 border-t border-parchment-200">
        <a
          href="#cuts-library"
          className="w-full py-2.5 px-4 rounded-xl bg-parchment-200 hover:bg-beef-burgundy hover:text-white text-charcoal text-xs font-semibold transition-all flex items-center justify-center gap-2 group"
        >
          <BookOpen className="w-4 h-4 text-beef-burgundy group-hover:text-white transition-colors" />
          <span>{a.browseCuts}</span>
        </a>
      </div>
    </div>
  );
}
