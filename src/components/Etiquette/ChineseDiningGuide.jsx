'use client';

import React from 'react';
import { Compass, Sparkles, BookOpen } from '../Icons';

export default function ChineseDiningGuide({ data, currentLang }) {
  const { chineseFlow } = data;

  return (
    <section id="chinese-flow" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">
      
      {/* 標題與簡介 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-red-800" />
          <span>CHAPTER 04 · 中餐儀態與筷子禁忌</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {chineseFlow.title}
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
          {chineseFlow.desc}
        </p>
      </div>

      {/* 1. 入座與取菜防越界流程卡片 */}
      <div className="mb-12">
        <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal mb-4 flex items-center gap-2">
          <span>🥢</span>
          <span>{chineseFlow.processTitle}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {chineseFlow.processItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-parchment-50 border border-parchment-300 rounded-2xl p-5 shadow-2xs hover:shadow-sm hover:border-beef-burgundy/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-full bg-beef-burgundy/10 text-beef-burgundy font-serif font-bold text-sm flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-charcoal-muted uppercase">FLOW</span>
                </div>
                <h4 className="text-base font-bold text-charcoal font-serif mb-1.5">
                  {item.label}
                </h4>
                <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. 9 大筷子禁忌視覺卡片庫 */}
      <div className="mb-12 bg-parchment-50 border border-parchment-300 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">⚠️</span>
            <h3 className="text-xl font-serif font-bold text-charcoal">
              {chineseFlow.chopsticksTitle}
            </h3>
          </div>
          <p className="text-xs text-charcoal-muted">
            民間傳統筷子禮儀蘊含對同桌者的尊重與民俗避諱，正式宴請不可不慎：
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chineseFlow.chopsticksTaboos.map((taboo, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-parchment-100/80 border border-parchment-300 hover:border-red-400/80 hover:bg-parchment-50 transition-all group"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-serif font-bold text-red-900 group-hover:text-red-700 transition-colors">
                  🚫 禁忌 {idx + 1} · {taboo.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-100 text-red-800 font-semibold">
                  TABOO
                </span>
              </div>
              <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                {taboo.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 茶禮規範與扣指謝茶禮 */}
      <div className="bg-amber-50/80 border border-amber-300 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🍵</span>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-950">
            {chineseFlow.teaEtiquetteTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {chineseFlow.teaPoints.map((point, idx) => (
            <div key={idx} className="bg-parchment-50/90 border border-amber-200/80 p-4 rounded-xl">
              <h4 className="text-sm font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                <span>•</span>
                <span>{point.rule}</span>
              </h4>
              <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
