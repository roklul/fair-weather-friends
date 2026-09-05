import React from 'react';
import { Wine, Flame, ChevronRight, Sparkles } from '../Icons';
import { TRANSLATIONS } from '../../data/translations';

export default function CutCard({ cut, onOpenModal, currentLang = 'zh-TW' }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const cl = t.cutsLibrary;
  const w = t.wizard;

  // 渲染 5 格條形進度條
  const renderScoreBar = (label, score, colorClass = 'bg-beef-burgundy') => {
    return (
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-charcoal-muted">{label}</span>
          <span className="font-mono font-bold text-charcoal">{score} / 5</span>
        </div>
        <div className="h-1.5 w-full bg-parchment-300 rounded-full overflow-hidden flex">
          <div
            className={`h-full ${colorClass} transition-all duration-300`}
            style={{ width: `${(score / 5) * 100}%` }}
          />
        </div>
      </div>
    );
  };

  const cutDisplayName = currentLang === 'en' ? cut.enName : cut.name;
  const cutSubName = currentLang === 'en' ? cut.name : cut.enName;

  return (
    <div className="bg-parchment-50 rounded-2xl border border-parchment-300 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-beef-burgundy transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        
        {/* 頂部標籤與名稱 */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted">
              {cut.primalName}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${cut.tagColor}`}>
              {cut.tagBadge}
            </span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-charcoal group-hover:text-beef-burgundy transition-colors flex items-baseline gap-2">
            {cutDisplayName}
            <span className="text-xs font-serif italic text-charcoal-muted">{cutSubName}</span>
          </h3>

          {cut.aliases && (
            <p className="text-[11px] text-charcoal-muted mt-0.5">
              {currentLang === 'en' ? `Aliases: ${cut.aliases}` : currentLang === 'ja' ? `別名: ${cut.aliases}` : `別名：${cut.aliases}`}
            </p>
          )}
        </div>

        {/* 三維肉質量化指標 (軟嫩度、油脂感、風味濃郁) */}
        <div className="bg-parchment-100 p-3.5 rounded-xl border border-parchment-200/80 space-y-2.5">
          {renderScoreBar(w.scoreTenderness, cut.scores?.tenderness || 3, 'bg-emerald-700')}
          {renderScoreBar(w.scoreFat, cut.scores?.fat || 3, 'bg-amber-600')}
          {renderScoreBar(w.scoreFlavor, cut.scores?.flavor || 3, 'bg-beef-burgundy')}
        </div>

        {/* 關鍵字標籤 */}
        <div className="flex flex-wrap gap-1.5">
          {cut.keywords?.slice(0, 4).map((kw, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-parchment-200 text-charcoal-light text-[11px] font-medium"
            >
              #{kw}
            </span>
          ))}
        </div>

        {/* 料理與熟度提示 */}
        <div className="space-y-1.5 text-xs text-charcoal-light pt-1">
          <div className="flex items-center gap-1.5 font-medium text-charcoal">
            <Flame className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span>{cl.cookingLabel} {cut.cookingMethods?.map((m) => m.name).join(' · ')}</span>
          </div>
          <div className="text-[11px] text-charcoal-muted line-clamp-2">
            {cl.donenessLabel} {cut.donenessTip}
          </div>
        </div>

        {/* 佐餐酒款推薦 */}
        <div className="pt-2 border-t border-parchment-200 text-xs">
          <div className="flex items-center gap-1.5 font-medium text-purple-950 mb-1">
            <Wine className="w-3.5 h-3.5 text-purple-700 shrink-0" />
            <span>{cl.wineLabel}</span>
          </div>
          <p className="text-[11px] font-serif italic text-charcoal-muted line-clamp-1">
            {cut.winePairing?.wines?.join(' · ')}
          </p>
        </div>

      </div>

      {/* 底部按鈕 */}
      <div className="pt-4 mt-4 border-t border-parchment-200">
        <button
          onClick={() => onOpenModal(cut)}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-parchment-100 border border-parchment-300 text-xs font-bold text-charcoal hover:bg-beef-burgundy hover:text-white hover:border-beef-burgundy transition-all cursor-pointer"
        >
          <span>{cl.viewSpecs}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
