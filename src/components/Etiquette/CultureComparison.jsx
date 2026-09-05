'use client';

import React from 'react';
import { Compass, Sparkles, BookOpen } from '../Icons';

export default function CultureComparison({ data, currentLang }) {
  const { culture } = data;

  return (
    <section id="culture-diff" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      
      {/* 標題與引言 */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-800" />
          <span>CHAPTER 01 · 文化哲學對比</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {culture.title}
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
          {culture.desc}
        </p>
      </div>

      {/* 雙欄對比卡片：中餐 vs 西餐 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
        
        {/* 中餐卡片 */}
        <div className="bg-parchment-50 border-2 border-beef-red/30 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-6 -right-6 w-28 h-28 bg-beef-red/5 rounded-full blur-xl pointer-events-none"></div>
          
          <div>
            <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-parchment-300">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🥢</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal">
                    {culture.chineseCard.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-beef-burgundy uppercase tracking-wider">
                    {culture.chineseCard.subtitle}
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-beef-burgundy/10 text-beef-burgundy text-xs font-bold shrink-0">
                共享秩序
              </span>
            </div>

            <ul className="space-y-3 text-sm text-charcoal-light font-sans">
              {culture.chineseCard.traits.map((trait, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-beef-burgundy font-bold shrink-0 mt-0.5">•</span>
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-parchment-200 bg-amber-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl text-xs text-charcoal-muted">
            💡 <strong>核心精神：</strong> 圓桌雖無絕對第一人，但以長幼尊卑、尊客優先與互動默契形成溫暖秩序。
          </div>
        </div>

        {/* 西餐卡片 */}
        <div className="bg-parchment-50 border-2 border-beef-loin/40 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-6 -right-6 w-28 h-28 bg-beef-loin/10 rounded-full blur-xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-parchment-300">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🍴</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal">
                    {culture.westernCard.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-beef-loin uppercase tracking-wider">
                    {culture.westernCard.subtitle}
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-800/10 text-emerald-800 text-xs font-bold shrink-0">
                分道節奏
              </span>
            </div>

            <ul className="space-y-3 text-sm text-charcoal-light font-sans">
              {culture.westernCard.traits.map((trait, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-700 font-bold shrink-0 mt-0.5">•</span>
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-parchment-200 bg-emerald-50/40 -mx-6 -mb-6 p-4 rounded-b-2xl text-xs text-charcoal-muted">
            💡 <strong>核心精神：</strong> 個人餐位為基準，透過「由外至內」餐具順序與節奏分道上菜，保持高度優雅與整潔。
          </div>
        </div>

      </div>

      {/* 7 大面向共通核心對照表 */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-2xl p-5 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-amber-800" />
          <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal">
            {culture.tableTitle}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-parchment-300 bg-parchment-200/70 text-charcoal font-serif">
                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider w-[15%]">禮儀面向</th>
                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider w-[32%] text-beef-burgundy">🥢 中餐常見表現</th>
                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider w-[32%] text-emerald-800">🍴 西餐常見表現</th>
                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider w-[21%] text-charcoal-muted">🎯 共同目的</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment-200 font-sans">
              {culture.aspects.map((item, index) => (
                <tr key={index} className="hover:bg-parchment-100/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-charcoal whitespace-nowrap">
                    {item.aspect}
                  </td>
                  <td className="py-3.5 px-4 text-charcoal-light leading-relaxed">
                    {item.chinese}
                  </td>
                  <td className="py-3.5 px-4 text-charcoal-light leading-relaxed">
                    {item.western}
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-amber-900 bg-amber-50/40 rounded-lg">
                    {item.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
