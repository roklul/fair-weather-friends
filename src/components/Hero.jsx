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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-beef-burgundy/30 bg-beef-burgundy/5 text-beef-burgundy text-xs font-semibold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{heroLangData.tagline}</span>
          </div>

          {/* 主標題 (平滑斷行與字體排版) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-[1.2] max-w-4xl mx-auto">
            <span className="block sm:inline">{heroLangData.mainTitlePrefix}</span>{' '}
            <span className="text-beef-burgundy italic relative inline-block whitespace-nowrap mt-1 sm:mt-0">
              {heroLangData.highlightWord}
              <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-beef-burgundy/30 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </h1>

          {/* 副標題 */}
          <p className="text-sm sm:text-base lg:text-lg text-charcoal-muted max-w-2xl mx-auto font-sans leading-relaxed">
            {heroLangData.subtitle}
          </p>

          {/* 核心金句警句標語 (清晰高對比排版，避免壓縮斜體) */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl bg-parchment-200/90 border border-parchment-300/80 max-w-2xl mx-auto shadow-2xs text-center">
            <p className="text-xs sm:text-sm md:text-base text-charcoal font-sans leading-relaxed tracking-normal">
              <span className="text-beef-burgundy font-serif font-bold text-lg sm:text-xl mr-1.5 opacity-60">“</span>
              {heroLangData.quote}
              <span className="text-beef-burgundy font-serif font-bold text-lg sm:text-xl ml-1.5 opacity-60">”</span>
            </p>
          </div>

          {/* 快速意圖入口按鈕網格 */}
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-3.5 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-parchment-300"></span>
              <span>{t.hero.quickHint}</span>
              <span className="h-px w-8 bg-parchment-300"></span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto">
              {heroLangData.quickActions.map((btn, idx) => {
                const IconComponent = getActionIcon(btn.label, btn.filter);
                return (
                  <button
                    key={idx}
                    onClick={() => onQuickFilter(btn.filter)}
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-parchment-50/95 hover:bg-white border border-parchment-300 hover:border-beef-burgundy/40 text-charcoal text-xs sm:text-sm font-medium shadow-2xs hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap ${getActionColor(idx)}`}
                  >
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-charcoal-muted" />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 探索導引按鈕 */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#diagram-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal hover:bg-charcoal-light text-white font-medium text-sm shadow-md transition-all group whitespace-nowrap"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#wizard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-beef-burgundy hover:bg-beef-red text-white font-medium text-sm shadow-md transition-all whitespace-nowrap"
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
