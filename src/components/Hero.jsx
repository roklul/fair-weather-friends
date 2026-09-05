import React, { useState } from 'react';
import { Flame, Soup, UtensilsCrossed, Sparkles, Wine, HeartPulse, Droplets, ArrowRight, Eye, X } from './Icons';
import { TRANSLATIONS } from '../data/translations';

export default function Hero({ activeCategory, onQuickFilter, currentLang = 'zh-TW' }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
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
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-parchment-300">
      <div className="absolute inset-0 etching-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 左欄：核心意圖與文字導引 (7 欄寬度) */}
          <div className="lg:col-span-7 text-left space-y-5">
            
            {/* 上標徽章 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-beef-burgundy/30 bg-beef-burgundy/5 text-beef-burgundy text-xs font-semibold tracking-wider uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{heroLangData.tagline}</span>
            </div>

            {/* 主標題 (平滑斷行與字體排版) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal tracking-tight leading-[1.2]">
              <span>{heroLangData.mainTitlePrefix}</span>{' '}
              <span className="text-beef-burgundy italic relative inline-block whitespace-nowrap mt-1 sm:mt-0">
                {heroLangData.highlightWord}
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-beef-burgundy/30 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
            </h1>

            {/* 副標題 */}
            <p className="text-sm sm:text-base text-charcoal-muted font-sans leading-relaxed">
              {heroLangData.subtitle}
            </p>

            {/* 核心金句警句標語 */}
            <div className="p-4 rounded-2xl bg-parchment-200/90 border border-parchment-300/80 shadow-2xs">
              <p className="text-xs sm:text-sm text-charcoal font-sans leading-relaxed">
                <span className="text-beef-burgundy font-serif font-bold text-lg mr-1.5 opacity-60">“</span>
                {heroLangData.quote}
                <span className="text-beef-burgundy font-serif font-bold text-lg ml-1.5 opacity-60">”</span>
              </p>
            </div>

            {/* 快速意圖入口按鈕網格 */}
            <div className="pt-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2.5 flex items-center gap-2">
                <span className="h-px w-6 bg-parchment-300"></span>
                <span>{t.hero.quickHint}</span>
                <span className="h-px w-6 bg-parchment-300"></span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                {heroLangData.quickActions.map((btn, idx) => {
                  const IconComponent = getActionIcon(btn.label, btn.filter);
                  return (
                    <button
                      key={idx}
                      onClick={() => onQuickFilter(btn.filter)}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-parchment-50/95 hover:bg-white border border-parchment-300 hover:border-beef-burgundy/40 text-charcoal text-xs sm:text-sm font-medium shadow-2xs hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap ${getActionColor(idx)}`}
                    >
                      <IconComponent className="w-3.5 h-3.5 shrink-0 text-charcoal-muted" />
                      <span>{btn.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 探索導引按鈕 */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#diagram-section"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-charcoal hover:bg-charcoal-light text-white font-medium text-sm shadow-md transition-all group whitespace-nowrap"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#wizard"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-beef-burgundy hover:bg-beef-red text-white font-medium text-sm shadow-md transition-all whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hero.wizardBtn}</span>
              </a>
            </div>

          </div>

          {/* 右欄：米其林 AI 視覺封面展示卡片 (5 欄寬度) */}
          <div className="lg:col-span-5 relative">
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="group relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-900/15 bg-charcoal cursor-pointer transition-all duration-300 hover:shadow-amber-900/20 hover:scale-[1.01]"
            >
              {/* AI 封面圖片 */}
              <img
                src="/images/hero-cover.jpg"
                alt="酒肉朋友 米其林極致餐酒學 AI 視覺封面"
                className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/11] transition-transform duration-700 group-hover:scale-105"
              />

              {/* 漸層光影遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* 頂部標籤 */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-md">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>米其林星級視界 · AI 封面</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-beef-burgundy/80 backdrop-blur-md border border-amber-300/30 text-amber-200 text-[11px] font-medium shadow-md">
                  <Eye className="w-3 h-3" />
                  <span>點擊看大圖</span>
                </span>
              </div>

              {/* 底部情境說明與特色標籤 */}
              <div className="absolute bottom-3 left-3 right-3 space-y-1.5 pointer-events-none">
                <div className="text-white font-serif font-bold text-base sm:text-lg drop-shadow-md">
                  乾式熟成肋眼 × 典雅侍酒
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-parchment-200">
                  <span className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-sm border border-white/10">
                    🥩 5-7分熟粉嫩切面
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-sm border border-white/10">
                    🍷 波爾多水晶杯
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-sm border border-white/10">
                    🍸 工藝薄荷無調酒
                  </span>
                </div>
              </div>
            </div>

            {/* 裝飾背景光暈 */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/10 via-beef-burgundy/10 to-amber-600/10 rounded-3xl blur-xl -z-10" />
          </div>

        </div>
      </div>

      {/* 8K 全螢幕大圖 Lightbox 彈窗 */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full bg-charcoal rounded-3xl overflow-hidden border border-amber-900/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 關閉按鈕 */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-white hover:text-amber-300 transition-all border border-white/20"
              aria-label="關閉"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 高解析度大圖 */}
            <img
              src="/images/hero-cover.jpg"
              alt="酒肉朋友 米其林極致餐酒學 AI 視覺封面 8K"
              className="w-full h-auto max-h-[75vh] object-contain mx-auto"
            />

            {/* 底部說明 */}
            <div className="p-5 bg-charcoal-dark border-t border-parchment-800 text-parchment-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-serif font-bold text-lg text-amber-200">
                  酒肉朋友 · 頂級餐搭視覺封面 (Michelin Editorial Photography)
                </h3>
                <p className="text-xs text-parchment-400 mt-0.5 font-sans">
                  厚切乾式熟成牛排 · 鹽之花與迷迭香 · 波爾多晶透紅酒杯 · 薄荷柑橘工藝零酒精調酒
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-parchment-800/60 border border-parchment-700 text-xs text-parchment-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>AI 智能生成 · 8K 極致畫質</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
