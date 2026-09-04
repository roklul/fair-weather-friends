import React from 'react';
import { Flame, Soup, UtensilsCrossed, Sparkles, Wine, HeartPulse, Droplets, ArrowRight } from './Icons';
import { TRANSLATIONS } from '../data/translations';

export default function Hero({ activeCategory, onQuickFilter, currentLang = 'zh-TW' }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const heroLangData = t.hero[activeCategory] || t.hero.beef;

  // 圖示映射
  const getActionIcon = (label, filter) => {
    if (filter.type === 'anchor') return Wine;
    if (filter.cookingId === 'steak' || filter.cookingId === 'fry-cutlet' || filter.cookingId === 'pan-sear' || filter.cookingId === 'dumpling-filling') return UtensilsCrossed;
    if (filter.cookingId === 'bbq' || filter.cookingId === 'bbq-grill' || filter.cookingId === 'grill-bbq') return Flame;
    if (filter.cookingId === 'sashimi-plate') return Sparkles;
    if (filter.textureId === 'fatty' || filter.textureId === 'fatty-sear') return Droplets;
    if (filter.textureId === 'lean' || filter.textureId === 'tender' || filter.textureId === 'boneless-tender') return HeartPulse;
    return Soup;
  };

  const getActionColor = (idx) => {
    const colors = [
      'hover:border-orange-600 hover:text-orange-700',
      'hover:border-beef-burgundy hover:text-beef-burgundy',
      'hover:border-amber-700 hover:text-amber-800',
      'hover:border-red-600 hover:text-red-700',
      'hover:border-stone-700 hover:text-stone-800',
      'hover:border-yellow-600 hover:text-yellow-700',
      'hover:border-emerald-700 hover:text-emerald-800',
      'hover:border-purple-800 hover:text-purple-900',
    ];
    return colors[idx % colors.length];
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-parchment-300">
      <div className="absolute inset-0 etching-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* 上標徽章 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-beef-burgundy/30 bg-beef-burgundy/5 text-beef-burgundy text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{heroLangData.tagline}</span>
          </div>

          {/* 主標題 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-[1.15]">
            {heroLangData.mainTitlePrefix}<br className="hidden sm:inline" />
            <span className="text-beef-burgundy italic relative ml-1 sm:ml-2">
              {heroLangData.highlightWord}
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-beef-burgundy/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          {/* 副標題 */}
          <p className="text-base sm:text-lg lg:text-xl text-charcoal-muted max-w-3xl mx-auto font-sans leading-relaxed">
            {heroLangData.subtitle}
          </p>

          {/* 核心金句警句標語 */}
          <div className="my-6 p-4 sm:p-5 rounded-xl bg-parchment-200/80 border border-parchment-300 max-w-2xl mx-auto text-sm sm:text-base text-charcoal-light italic font-serif shadow-inner">
            <span className="text-beef-burgundy font-bold text-xl mr-1 font-sans">“</span>
            {heroLangData.quote}
            <span className="text-beef-burgundy font-bold text-xl ml-1 font-sans">”</span>
          </div>

          {/* 快速意圖入口按鈕網格 */}
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-parchment-400"></span>
              {t.hero.quickHint}
              <span className="h-px w-8 bg-parchment-400"></span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {heroLangData.quickActions.map((btn, idx) => {
                const IconComponent = getActionIcon(btn.label, btn.filter);
                return (
                  <button
                    key={idx}
                    onClick={() => onQuickFilter(btn.filter)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-parchment-50 border border-parchment-300 text-charcoal text-xs sm:text-sm font-medium shadow-sm transition-all transform hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap ${getActionColor(idx)}`}
                  >
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 探索導引按鈕 */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#diagram-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-charcoal hover:bg-charcoal-light text-white font-medium text-sm shadow-md transition-all group whitespace-nowrap"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#wizard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-beef-burgundy hover:bg-beef-red text-white font-medium text-sm shadow-md transition-all whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.hero.wizardBtn}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
