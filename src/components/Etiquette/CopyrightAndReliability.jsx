'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight } from '../Icons';

export default function CopyrightAndReliability({ data }) {
  const { reliability } = data;

  return (
    <section id="reliability" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">
      
      {/* 獨立版權安全方案導引橫幅 */}
      <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-parchment-50 border border-parchment-300 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-300 text-blue-900 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-charcoal">
              全站原創自繪與圖像授權安全方案
            </h4>
            <p className="text-xs text-charcoal-muted mt-0.5">
              本站牛、豬、雞、魚 4 大解剖圖譜與餐桌座次均由工程團隊自主繪製向量 SVG，100% 杜絕版權爭議。
            </p>
          </div>
        </div>

        <Link
          href="/copyright"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-charcoal text-white hover:bg-beef-burgundy text-xs font-medium transition-all shrink-0 whitespace-nowrap shadow-xs"
        >
          <span>查看版權政策與授權金字塔</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

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
