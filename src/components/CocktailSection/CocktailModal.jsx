import React, { useState } from 'react';
import { X, Sparkles, Flame, Droplets, Clock, Utensils, CheckCircle2, Wine } from '../Icons';

export default function CocktailModal({ cocktail, onClose }) {
  const [servings, setServings] = useState(1);

  if (!cocktail) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-parchment-50 border border-parchment-300 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 頂部酒款抬頭橫幅 */}
        <div className="relative bg-gradient-to-r from-beef-burgundy to-[#4a101b] p-6 sm:p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-charcoal shadow-xs">
                {cocktail.baseSpirit}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/10 text-parchment-200 border border-white/20">
                {cocktail.glassware}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/10 text-parchment-200 border border-white/20">
                {cocktail.method}
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3 pt-1">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {cocktail.name}
              </h3>
              <span className="text-lg font-serif italic text-amber-200/90 font-medium">
                {cocktail.enName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-parchment-200 font-sans italic">
              “{cocktail.tagline}”
            </p>
          </div>
        </div>

        {/* 內容區塊 */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* 風味標籤與三段口感 */}
          <div className="bg-parchment-100 p-4 rounded-xl border border-parchment-200 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-beef-burgundy" />
              風味輪廓與品飲筆記
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {cocktail.flavorTags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 border border-amber-300 text-amber-950">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs border-t border-parchment-300/60">
              <div className="bg-parchment-50 p-2.5 rounded-lg border border-parchment-200">
                <span className="font-bold text-beef-burgundy block mb-0.5">前段入口 (Initial)</span>
                <span className="text-charcoal-light leading-relaxed">{cocktail.tastingNotes.initial}</span>
              </div>
              <div className="bg-parchment-50 p-2.5 rounded-lg border border-parchment-200">
                <span className="font-bold text-amber-700 block mb-0.5">中段主體 (Mid)</span>
                <span className="text-charcoal-light leading-relaxed">{cocktail.tastingNotes.mid}</span>
              </div>
              <div className="bg-parchment-50 p-2.5 rounded-lg border border-parchment-200">
                <span className="font-bold text-stone-700 block mb-0.5">尾韻餘韻 (Finish)</span>
                <span className="text-charcoal-light leading-relaxed">{cocktail.tastingNotes.finish}</span>
              </div>
            </div>
          </div>

          {/* 配方材料表與人數批次換算 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-purple-700" />
                標準配方與比例 ({cocktail.ratioText})
              </div>

              {/* 人數換算器 */}
              <div className="flex items-center gap-2 text-xs bg-parchment-200 px-2.5 py-1 rounded-lg border border-parchment-300">
                <span className="text-charcoal font-medium">換算份數：</span>
                <div className="flex items-center gap-1 font-mono font-bold text-charcoal">
                  <button
                    onClick={() => setServings(Math.max(1, servings - 1))}
                    className="w-5 h-5 rounded bg-parchment-50 hover:bg-beef-burgundy hover:text-white transition-colors flex items-center justify-center text-xs"
                  >
                    -
                  </button>
                  <span className="w-6 text-center">{servings}</span>
                  <button
                    onClick={() => setServings(servings + 1)}
                    className="w-5 h-5 rounded bg-parchment-50 hover:bg-beef-burgundy hover:text-white transition-colors flex items-center justify-center text-xs"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-parchment-50 rounded-xl border border-parchment-200 divide-y divide-parchment-200 text-xs sm:text-sm">
              {cocktail.ingredients.map((ing, idx) => (
                <div key={idx} className="p-3 flex items-center justify-between">
                  <span className="font-medium text-charcoal flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-beef-burgundy" />
                    {ing.name}
                  </span>
                  <span className="font-mono font-bold text-beef-burgundy">
                    {typeof ing.amount === 'number' ? `${(ing.amount * servings).toFixed(ing.amount % 1 === 0 ? 0 : 1)} ${ing.unit}` : ing.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 調製步驟 */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-charcoal-muted" />
              專業調製步驟 (Method & Technique)
            </div>
            <ol className="bg-parchment-100 p-4 rounded-xl border border-parchment-200 space-y-2 text-xs sm:text-sm text-charcoal-light font-sans">
              {cocktail.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-beef-burgundy text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 料理搭配理由與避免搭配 */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-emerald-700" />
              餐飲搭配科學理由 (Food Pairing Rationale)
            </div>

            <div className="space-y-2">
              {cocktail.pairingFood.map((pair, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <div className="font-bold text-emerald-950 text-sm mb-1">
                    🍽️ {pair.dish}
                  </div>
                  <div className="text-emerald-900 leading-relaxed font-sans">
                    {pair.reason}
                  </div>
                </div>
              ))}
            </div>

            {/* 不建議搭配 */}
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-950">
              <span className="font-bold mr-1">⚠️ 不建議優先搭配：</span>
              {cocktail.avoidFood.join('、')}
            </div>
          </div>

          {/* 無酒精 Mocktail 友善版本 */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs space-y-1.5">
            <div className="font-bold text-amber-950 text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-700" />
              無酒精友善版本 · {cocktail.mocktailVersion.name}
            </div>
            <div className="text-amber-900 font-mono">
              <span className="font-bold font-sans">配方：</span>{cocktail.mocktailVersion.recipe}
            </div>
            <div className="text-amber-800">
              <span className="font-bold">風味邏輯：</span>{cocktail.mocktailVersion.rationale}
            </div>
          </div>

        </div>

        {/* 底部法規警語與關閉按鈕 */}
        <div className="bg-charcoal px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-amber-300 font-serif font-bold text-xs sm:text-sm tracking-widest uppercase">
            🔞 禁止酒駕 · 未滿十八歲禁止飲酒 · 酒後不開車 安全有保障
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-parchment-100 hover:bg-white text-charcoal font-bold text-xs transition-colors shrink-0 shadow-sm"
          >
            關閉視窗
          </button>
        </div>

      </div>
    </div>
  );
}
