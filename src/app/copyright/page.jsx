'use client';

import React from 'react';
import Link from 'next/link';
import { WineMeatBrandLogo, ShieldCheck, ArrowLeft, ArrowUp, Sparkles, CheckCircle2 } from '../../components/Icons';
import { useLanguage } from '../../context/LanguageContext';
import { COPYRIGHT_DATA } from '../../data/copyrightData';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function CopyrightPage() {
  const { currentLang = 'zh-TW' } = useLanguage() || {};
  const c = COPYRIGHT_DATA[currentLang] || COPYRIGHT_DATA['zh-TW'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-parchment-100 text-charcoal font-sans selection:bg-amber-200 selection:text-amber-950">
      
      {/* 頂部導覽列 */}
      <header className="sticky top-0 z-40 bg-parchment-50/95 backdrop-blur-md border-b border-parchment-300 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <WineMeatBrandLogo className="w-8 h-8 shadow-xs transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base sm:text-lg text-charcoal group-hover:text-beef-burgundy transition-colors leading-tight">
                  酒肉朋友
                </span>
                <span className="text-[10px] font-mono text-charcoal-muted tracking-widest uppercase">
                  LEGAL & IP
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-charcoal-light hover:text-charcoal hover:bg-parchment-200/80 transition-all border border-parchment-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{c.backToHome}</span>
              <span className="sm:hidden">首頁</span>
            </Link>

            <Link
              href="/etiquette"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-amber-900 bg-amber-100/80 hover:bg-amber-200 transition-all border border-amber-300/80"
            >
              <span className="hidden sm:inline">{c.backToEtiquette}</span>
              <span className="sm:hidden">禮儀</span>
            </Link>

            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* 主視覺 Hero 區域 */}
      <section className="relative overflow-hidden py-14 sm:py-20 border-b border-parchment-300 bg-parchment-50">
        <div className="absolute inset-0 etching-bg opacity-25 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-300/80 text-blue-900 text-xs font-semibold tracking-wider uppercase shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>{c.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-charcoal tracking-tight leading-tight">
            {c.title}
          </h1>

          <p className="max-w-3xl mx-auto text-charcoal-muted text-sm sm:text-base leading-relaxed">
            {c.subtitle}
          </p>

          {/* 三大政策亮點卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-left">
            {c.summaryCards.map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-parchment-100 border border-parchment-300 shadow-xs hover:border-beef-burgundy/40 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-base text-charcoal mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 主內容區域 */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* 1. 授權安全金字塔 */}
        <section className="space-y-6">
          <div className="border-b border-parchment-300 pb-3">
            <div className="flex items-center gap-2 text-xs font-serif italic text-charcoal-muted">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Safety Spectrum & Sourcing Standards</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-charcoal mt-1">
              🔺 {c.pyramidTitle}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1 leading-relaxed">
              {c.pyramidDesc}
            </p>
          </div>

          <div className="bg-parchment-50 border border-parchment-300 rounded-3xl p-5 sm:p-7 shadow-xs space-y-3">
            {c.pyramid.map((lvl, idx) => {
              const isTop = idx === 0;
              const isDanger = idx === 5;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-all ${
                    isTop
                      ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 font-medium shadow-2xs'
                      : isDanger
                      ? 'bg-red-50/90 border-red-300 text-red-950'
                      : 'bg-parchment-100/80 border-parchment-200 text-charcoal'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded shadow-2xs whitespace-nowrap ${
                        isTop
                          ? 'bg-emerald-200 text-emerald-950 border border-emerald-300'
                          : isDanger
                          ? 'bg-red-200 text-red-950 border border-red-300'
                          : 'bg-parchment-300 text-charcoal border border-parchment-400/50'
                      }`}
                    >
                      {lvl.level}
                    </span>
                    <span className="text-sm font-bold text-charcoal font-serif">{lvl.source}</span>
                  </div>
                  <span className="text-xs text-charcoal-muted font-sans sm:text-right max-w-xl">
                    {lvl.advice}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. 向量 SVG 三大技術優勢 */}
        <section className="space-y-6">
          <div className="border-b border-parchment-300 pb-3">
            <h2 className="text-2xl font-serif font-bold text-charcoal">
              ⚡ {c.advantagesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {c.advantages.map((adv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-parchment-50 border border-parchment-300 shadow-xs space-y-2.5 hover:border-beef-burgundy/40 transition-all"
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold font-mono">
                  優勢 0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-base text-charcoal">
                  {adv.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 使用者授權與合理引用條款 */}
        <section className="space-y-6">
          <div className="border-b border-parchment-300 pb-3">
            <h2 className="text-2xl font-serif font-bold text-charcoal">
              📜 {c.termsTitle}
            </h2>
          </div>

          <div className="bg-parchment-50 border border-parchment-300 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            {c.terms.map((term, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-serif font-bold text-base sm:text-lg text-beef-burgundy flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{term.heading}</span>
                </h3>
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans pl-6">
                  {term.content}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 頁尾版權宣告與回頂部 */}
      <footer className="bg-charcoal text-parchment-200 border-t border-charcoal-light py-10 text-xs font-sans">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <WineMeatBrandLogo className="w-8 h-8 shrink-0" />
            <div>
              <div className="font-serif font-bold text-sm text-white">
                酒肉朋友 Fair-Weather Friends
              </div>
              <div className="text-[11px] text-parchment-400">
                100% 自主研發 SVG 向量圖譜 · 嚴格落實數位知識產權保護
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-light hover:bg-charcoal-muted text-white text-xs transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>回到頂部</span>
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
