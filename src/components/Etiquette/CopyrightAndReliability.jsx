'use client';

import React from 'react';

export default function CopyrightAndReliability({ data }) {
  const { reliability } = data;

  return (
    <section id="reliability" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">

      {/* 8. 資料可靠性與適用限制 (5 步決策順序) */}
      <div className="pt-2">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold tracking-wider uppercase">
            <span>🧭</span>
            <span>{data.chapters?.c08}</span>
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
