'use client';

import React from 'react';
import { Sparkles, BookOpen } from '../Icons';

export default function CopyrightAndReliability({ data, currentLang }) {
  const { copyrightSection, reliability, copyrightNotice } = data;

  return (
    <section id="copyright" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">
      
      {/* 8. 版權安全教材製作方案 */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs font-semibold tracking-wider uppercase">
            <span>🛡️</span>
            <span>CHAPTER 08 · 數位版權安全原則</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            {copyrightSection.title}
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
            {copyrightSection.desc}
          </p>
        </div>

        {/* 授權安全金字塔 */}
        <div className="bg-parchment-50 border border-parchment-300 rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
          <h3 className="text-lg font-serif font-bold text-charcoal mb-4 flex items-center gap-2">
            <span>🔺</span>
            <span>{copyrightSection.pyramidTitle}</span>
          </h3>
          <div className="space-y-3">
            {copyrightSection.pyramid.map((lvl, idx) => {
              const isTop = idx === 0;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all ${
                    isTop
                      ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-medium'
                      : idx === 5
                      ? 'bg-red-50/80 border-red-300 text-red-950'
                      : 'bg-parchment-100/70 border-parchment-200 text-charcoal-light'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${isTop ? 'bg-emerald-200 text-emerald-900' : idx === 5 ? 'bg-red-200 text-red-900' : 'bg-parchment-300 text-charcoal'}`}>
                      {lvl.level}
                    </span>
                    <span className="text-sm font-bold text-charcoal font-serif">{lvl.source}</span>
                  </div>
                  <span className="text-xs text-charcoal-muted font-sans sm:text-right">
                    {lvl.advice}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 向量 SVG 自繪的三大優勢 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {copyrightSection.vectorAdvantages.map((adv, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-parchment-50 border border-parchment-300 text-xs text-charcoal-light leading-relaxed">
              <span className="font-bold text-beef-burgundy mr-1">✓ 優勢 {idx + 1}：</span>
              {adv}
            </div>
          ))}
        </div>
      </div>

      {/* 9. 資料可靠性與適用限制 (5 步決策順序) */}
      <div id="reliability" className="pt-10 border-t border-parchment-300">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold tracking-wider uppercase">
            <span>🧭</span>
            <span>CHAPTER 09 · 規則適用與判斷順序</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            {reliability.title}
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
            {reliability.desc}
          </p>
        </div>

        {/* 5 步判斷階層 */}
        <div className="bg-parchment-50 border border-parchment-300 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-serif font-bold text-charcoal mb-6 text-center">
            {reliability.decisionStepsTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {reliability.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-parchment-100/90 border border-parchment-300 rounded-2xl p-4 text-center flex flex-col justify-between hover:border-beef-burgundy transition-all"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-beef-burgundy text-white font-bold font-serif mx-auto mb-2 flex items-center justify-center text-sm shadow-xs">
                    {st.step}
                  </div>
                  <h4 className="text-xs font-bold text-charcoal mb-1 font-serif">
                    {st.title}
                  </h4>
                  <p className="text-[11px] text-charcoal-muted leading-relaxed font-sans">
                    {st.desc || st.advice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
