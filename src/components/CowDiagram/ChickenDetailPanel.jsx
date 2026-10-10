import React from 'react';
import { CHICKEN_PRIMAL_AREAS } from '../../data/chickenData';
import { getLocalizedPrimal } from '../../data/primalsI18n';
import { TRANSLATIONS } from '../../data/translations';
import { Flame, Wine, Compass, ChevronRight, Sparkles, BookOpen } from '../Icons';
import { getChickenCutId as getCutId } from '../../data/extendedCutMap';

export default function ChickenDetailPanel({ selectedPrimalId, onOpenCutModalById, currentLang = 'zh-TW' }) {
  const rawPrimal = CHICKEN_PRIMAL_AREAS.find((p) => p.id === selectedPrimalId) || CHICKEN_PRIMAL_AREAS[0];
  const primal = getLocalizedPrimal(rawPrimal, currentLang);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const a = t.anatomy;

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
                {t.categories.chicken?.subtitle || '全雞 8 大分切'} · {primal.enName}
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
              const matchedCutId = getCutId(primal.id, idx, cutName);

              return (
                <button
                  key={idx}
                  onClick={() => matchedCutId && onOpenCutModalById && onOpenCutModalById(matchedCutId)}
                  disabled={!matchedCutId}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all text-left flex items-center gap-1.5 ${
                    matchedCutId
                      ? 'bg-parchment-100 border-parchment-300 text-charcoal hover:bg-beef-burgundy hover:text-white hover:border-beef-burgundy shadow-2xs cursor-pointer group'
                      : 'bg-parchment-100/50 border-parchment-200 text-charcoal-muted cursor-default'
                  }`}
                >
                  <span>{cutName}</span>
                  {matchedCutId && (
                    <ChevronRight className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 推薦烹調法 */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            {a.cookingTitle}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {primal.recommendedCooking.map((method, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs rounded-md bg-stone-100 text-stone-700 border border-stone-200"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* 佐餐侍酒指南 */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2 flex items-center gap-1.5">
            <Wine className="w-3.5 h-3.5 text-beef-burgundy" />
            {a.wineTitle}
          </div>
          <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs text-charcoal font-sans space-y-1">
            <div className="font-semibold text-purple-900 flex items-center gap-1">
              <span>{a.recommendedWinePrefix}</span>
            </div>
            <p className="text-charcoal-light">
              {primal.idealWine.join(' · ')}
            </p>
          </div>
        </div>

      </div>

      {/* 底部小提示 */}
      <div className="mt-5 pt-3 border-t border-parchment-200 flex items-center justify-between text-xs text-charcoal-muted">
        <span className="flex items-center gap-1 text-[11px]">
          <BookOpen className="w-3.5 h-3.5 text-beef-burgundy" />
          {a.clickTip}
        </span>
        <span className="text-[11px] font-mono bg-parchment-200 px-2 py-0.5 rounded text-charcoal">
          ID: {primal.id}
        </span>
      </div>
    </div>
  );
}
