import React, { useState } from 'react';
import { Wine, Sparkles, Droplets, Flame } from '../Icons';
import { TRANSLATIONS } from '../../data/translations';
import { getLocalizedWinePrinciples, getLocalizedCookingMatrix } from '../../data/wineI18n';

export default function WinePairingSection({ activeCategory, winePrinciples: propWinePrinciples, currentLang = 'zh-TW' }) {
  const [activeMethodTab, setActiveMethodTab] = useState(0);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const w = t.wine;
  const currentCategoryName = t.categories[activeCategory]?.shortLabel || activeCategory;

  const currentPrinciples = getLocalizedWinePrinciples(activeCategory, currentLang) || propWinePrinciples || [];
  const currentMatrix = getLocalizedCookingMatrix(activeCategory, currentLang) || [];

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
          {currentPrinciples.map((principle, pIdx) => (
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
                {principle.items && principle.items.map((item, iIdx) => (
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
            if (!current) return null;
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
                    {current.recommendedWines && current.recommendedWines.map((wineItem, i) => (
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
