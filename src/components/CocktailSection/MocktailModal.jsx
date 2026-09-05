import React, { useState } from 'react';
import { X, Sparkles, Clock, Utensils, CheckCircle2, Droplets, Wine } from '../Icons';

export default function MocktailModal({ mocktail, currentLang = 'zh-TW', onClose }) {
  const [servings, setServings] = useState(1);

  if (!mocktail) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-parchment-50 rounded-3xl border-2 border-amber-800/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 頂部標題與關閉按鈕 */}
        <div className="p-6 border-b border-parchment-300 flex items-start justify-between gap-4 bg-white/80 sticky top-0 backdrop-blur z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                0.0% ZERO-PROOF
              </span>
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                {mocktail.category}
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-charcoal flex items-center gap-2">
              <span>{mocktail.name}</span>
            </h3>
            {mocktail.name !== mocktail.enName && (
              <p className="text-xs font-serif italic text-charcoal-muted">
                {mocktail.enName}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-parchment-200 hover:bg-parchment-300 text-charcoal flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 彈窗主體內容 */}
        <div className="p-6 space-y-6">
          {/* Slogan */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-950 font-serif italic leading-relaxed">
            "{mocktail.tagline}"
          </div>

          {/* 風味標籤與品飲筆記 */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-beef-burgundy" />
              <span>風味特徵與三段品飲體驗</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {mocktail.flavorTags && mocktail.flavorTags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 border border-amber-300 text-amber-950">
                  #{tag}
                </span>
              ))}
            </div>

            {mocktail.tastingNotes && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
                <div className="bg-white p-3 rounded-xl border border-parchment-300 shadow-xs">
                  <span className="font-bold text-rose-800 block mb-1">初調 (Initial)</span>
                  <span className="text-charcoal-muted leading-relaxed">{mocktail.tastingNotes.initial}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-parchment-300 shadow-xs">
                  <span className="font-bold text-amber-800 block mb-1">中調 (Mid-Palate)</span>
                  <span className="text-charcoal-muted leading-relaxed">{mocktail.tastingNotes.mid}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-parchment-300 shadow-xs">
                  <span className="font-bold text-emerald-800 block mb-1">尾韻 (Finish)</span>
                  <span className="text-charcoal-muted leading-relaxed">{mocktail.tastingNotes.finish}</span>
                </div>
              </div>
            )}
          </div>

          {/* 配方材料表與人數批次換算 */}
          {mocktail.ingredients && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-purple-700" />
                  <span>配方材料 ({mocktail.ratioText})</span>
                </div>

                {/* 人數換算器 */}
                <div className="flex items-center gap-2 text-xs bg-parchment-200 px-2.5 py-1 rounded-lg border border-parchment-300">
                  <span className="text-charcoal font-medium">份數：</span>
                  <div className="flex items-center gap-1 font-mono font-bold text-charcoal">
                    <button
                      onClick={() => setServings(Math.max(1, servings - 1))}
                      className="w-5 h-5 rounded bg-white hover:bg-beef-burgundy hover:text-white transition-colors flex items-center justify-center text-xs cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{servings}</span>
                    <button
                      onClick={() => setServings(servings + 1)}
                      className="w-5 h-5 rounded bg-white hover:bg-beef-burgundy hover:text-white transition-colors flex items-center justify-center text-xs cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-parchment-300 divide-y divide-parchment-200 text-xs sm:text-sm shadow-xs">
                {mocktail.ingredients.map((ing, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between">
                    <span className="font-medium text-charcoal flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      {ing.name}
                    </span>
                    <span className="font-mono font-bold text-beef-burgundy">
                      {typeof ing.amount === 'number'
                        ? `${(ing.amount * servings).toFixed(ing.amount % 1 === 0 ? 0 : 1)} ${ing.unit}`
                        : ing.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 調製步驟 */}
          {mocktail.steps && (
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-charcoal-muted" />
                <span>調製技法與流程步驟</span>
              </div>
              <ol className="bg-white p-4 rounded-2xl border border-parchment-300 space-y-2.5 text-xs sm:text-sm text-charcoal-light font-sans shadow-xs">
                {mocktail.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 shadow-xs">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* 料理搭配與分子科學原理 */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-emerald-700" />
              <span>最佳搭餐料理與風味科學</span>
            </div>

            <div className="space-y-2">
              {mocktail.pairingFood && mocktail.pairingFood.map((pair, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs shadow-xs">
                  <div className="font-bold text-emerald-950 text-sm mb-1">
                    🍽️ {pair.dish}
                  </div>
                  <div className="text-emerald-900 leading-relaxed font-sans">
                    {pair.reason}
                  </div>
                </div>
              ))}
            </div>

            {/* 風味科學 */}
            {mocktail.flavorScience && (
              <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 text-xs text-teal-950 space-y-1 shadow-xs">
                <span className="font-bold block text-teal-900 flex items-center gap-1">
                  🔬 分子風味協同原理：
                </span>
                <p className="leading-relaxed font-sans">{mocktail.flavorScience}</p>
              </div>
            )}
          </div>
        </div>

        {/* 底部按鈕 */}
        <div className="bg-charcoal px-6 py-4 flex items-center justify-between rounded-b-3xl">
          <span className="text-amber-300 text-xs font-serif font-bold">
            🌱 100% 零酒精純淨特調 · 清醒品味無負擔
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-parchment-100 hover:bg-white text-charcoal font-bold text-xs transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            關閉詳細規格
          </button>
        </div>
      </div>
    </div>
  );
}
