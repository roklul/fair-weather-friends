'use client';

import React from 'react';
import { Utensils, Sparkles, BookOpen } from '../Icons';

export default function WesternDiningGuide({ data, currentLang }) {
  const { westernFlow } = data;

  return (
    <section id="western-flow" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">
      
      {/* 標題與簡介 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
          <Utensils className="w-3.5 h-3.5 text-emerald-800" />
          <span>CHAPTER 05 · 西餐儀態與刀叉訊號</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {westernFlow.title}
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
          {westernFlow.desc}
        </p>
      </div>

      {/* 1. 刀叉擺放傳達的 3 大服務訊號 (帶有 SVG 圖解) */}
      <div className="mb-12 bg-parchment-50 border border-parchment-300 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase font-bold text-emerald-800 tracking-wider">
            CUTLERY LANGUAGE
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mt-1">
            {westernFlow.signalsTitle}
          </h3>
          <p className="text-xs text-charcoal-muted mt-1">
            西餐中刀叉在盤中的擺放角度是與侍者溝通的國際無聲語言：
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 訊號 1: 暫停用餐 (Pause - 八字形) */}
          <div className="bg-parchment-100 border border-parchment-300 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-full aspect-[4/3] bg-parchment-50 rounded-xl border border-parchment-200 mb-4 p-2 flex items-center justify-center">
                {/* SVG 圖示：八字形 */}
                <svg viewBox="0 0 160 120" className="w-full h-full max-h-28">
                  <circle cx="80" cy="60" r="45" fill="#EEEAE0" stroke="#CFC3B2" strokeWidth="1.5" />
                  <circle cx="80" cy="60" r="35" fill="#FCFAF6" stroke="#CFC3B2" strokeWidth="1" />
                  {/* 左叉 (斜45度) */}
                  <line x1="55" y1="85" x2="75" y2="40" stroke="#57534E" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 72 40 L 78 40 M 74 36 L 74 44" stroke="#57534E" strokeWidth="1.5" />
                  {/* 右刀 (斜-45度) */}
                  <line x1="105" y1="85" x2="85" y2="40" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 85 40 Q 82 32 86 32 L 88 40 Z" fill="#1C1917" />
                </svg>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-charcoal font-serif">
                  {westernFlow.signals[0]?.name}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                  八字形
                </span>
              </div>
              <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                {westernFlow.signals[0]?.desc}
              </p>
            </div>
          </div>

          {/* 訊號 2: 用餐完畢 (Finished - 4:20 平行) */}
          <div className="bg-parchment-100 border-2 border-emerald-800/40 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-full aspect-[4/3] bg-emerald-50/50 rounded-xl border border-emerald-200 mb-4 p-2 flex items-center justify-center">
                {/* SVG 圖示：平行 */}
                <svg viewBox="0 0 160 120" className="w-full h-full max-h-28">
                  <circle cx="80" cy="60" r="45" fill="#EEEAE0" stroke="#CFC3B2" strokeWidth="1.5" />
                  <circle cx="80" cy="60" r="35" fill="#FCFAF6" stroke="#CFC3B2" strokeWidth="1" />
                  {/* 平行叉 (斜右下 4:20 方向) */}
                  <line x1="60" y1="40" x2="98" y2="80" stroke="#57534E" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 58 42 L 64 38" stroke="#57534E" strokeWidth="1.5" />
                  {/* 平行刀 */}
                  <line x1="70" y1="30" x2="108" y2="70" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 68 32 Q 62 26 66 26 L 72 32 Z" fill="#1C1917" />
                </svg>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-emerald-950 font-serif">
                  {westernFlow.signals[1]?.name}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                  並列平行
                </span>
              </div>
              <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                {westernFlow.signals[1]?.desc}
              </p>
            </div>
          </div>

          {/* 訊號 3: 等待下一道 (Ready for Next - 十字形) */}
          <div className="bg-parchment-100 border border-parchment-300 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-full aspect-[4/3] bg-parchment-50 rounded-xl border border-parchment-200 mb-4 p-2 flex items-center justify-center">
                {/* SVG 圖示：十字形 */}
                <svg viewBox="0 0 160 120" className="w-full h-full max-h-28">
                  <circle cx="80" cy="60" r="45" fill="#EEEAE0" stroke="#CFC3B2" strokeWidth="1.5" />
                  <circle cx="80" cy="60" r="35" fill="#FCFAF6" stroke="#CFC3B2" strokeWidth="1" />
                  {/* 橫刀 */}
                  <line x1="45" y1="60" x2="115" y2="60" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
                  {/* 直叉 */}
                  <line x1="80" y1="25" x2="80" y2="95" stroke="#57534E" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-charcoal font-serif">
                  {westernFlow.signals[2]?.name}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-parchment-300 text-charcoal">
                  十字交叉
                </span>
              </div>
              <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                {westernFlow.signals[2]?.desc}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. 餐巾 7 大守則與優雅喝湯 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
        
        {/* 餐巾使用 7 守則 */}
        <div className="bg-parchment-50 border border-parchment-300 rounded-2xl p-6 sm:p-7 shadow-sm">
          <h3 className="text-lg font-serif font-bold text-charcoal mb-4 flex items-center gap-2">
            <span>🧻</span>
            <span>{westernFlow.napkinTitle}</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-charcoal-light leading-relaxed font-sans">
            {westernFlow.napkinRules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-bold text-emerald-800 shrink-0 mt-0.5">0{idx + 1}.</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 優雅喝湯 6 準則 */}
        <div className="bg-parchment-50 border border-parchment-300 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-serif font-bold text-charcoal mb-4 flex items-center gap-2">
              <span>🥣</span>
              <span>{westernFlow.soupTitle}</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-charcoal-light leading-relaxed font-sans">
              {westernFlow.soupRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-amber-800 shrink-0 mt-0.5">0{idx + 1}.</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-parchment-200 text-xs text-charcoal-muted">
            🥖 <strong>麵包與調味提醒：</strong> 麵包用手撕成一口大小抹奶油；傳遞調味品時，鹽與胡椒始終成對一起傳遞。
          </div>
        </div>

      </div>

    </section>
  );
}
