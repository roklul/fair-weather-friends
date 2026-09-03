import React from 'react';
import { Wine, Flame, ChevronRight, Sparkles } from 'lucide-react';

export default function CutCard({ cut, onOpenModal }) {
  // 渲染 5 格條形/星級進度條
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
            {cut.name}
            <span className="text-xs font-serif italic text-charcoal-muted">{cut.enName}</span>
          </h3>

          {cut.aliases && (
            <p className="text-[11px] text-charcoal-muted mt-0.5">
              別名：{cut.aliases}
            </p>
          )}
        </div>

        {/* 三維肉質量化指標 (軟嫩度、油脂感、牛肉風味) */}
        <div className="bg-parchment-100 p-3.5 rounded-xl border border-parchment-200/80 space-y-2.5">
          {renderScoreBar('軟嫩度 Tenderness', cut.scores.tenderness, 'bg-emerald-700')}
          {renderScoreBar('油脂感 Marbling / Fat', cut.scores.fat, 'bg-amber-600')}
          {renderScoreBar('牛肉風味 Beef Flavor', cut.scores.flavor, 'bg-beef-burgundy')}
        </div>

        {/* 關鍵字標籤 */}
        <div className="flex flex-wrap gap-1.5">
          {cut.keywords.slice(0, 4).map((kw, idx) => (
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
            <span>推薦烹調：{cut.cookingMethods.map((m) => m.name).join('、')}</span>
          </div>
          <div className="text-[11px] text-charcoal-muted line-clamp-2">
            熟度建議：{cut.donenessTip}
          </div>
        </div>

        {/* 佐餐酒款推薦 */}
        <div className="pt-2 border-t border-parchment-200 text-xs">
          <div className="flex items-center gap-1.5 font-medium text-purple-950 mb-1">
            <Wine className="w-3.5 h-3.5 text-purple-700 shrink-0" />
            <span>推薦搭酒：</span>
          </div>
          <p className="text-[11px] font-serif italic text-charcoal-muted line-clamp-1">
            {cut.winePairing.wines.join(' · ')}
          </p>
        </div>

      </div>

      {/* 底部按鈕 */}
      <div className="pt-4 mt-4 border-t border-parchment-200">
        <button
          onClick={() => onOpenModal(cut)}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-parchment-100 border border-parchment-300 text-xs font-bold text-charcoal hover:bg-beef-burgundy hover:text-white hover:border-beef-burgundy transition-all"
        >
          <span>查看完整 7 大面向解析</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
