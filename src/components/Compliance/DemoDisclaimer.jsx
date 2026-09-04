import React from 'react';
import { Info, Sparkles } from '../Icons';
import { TRANSLATIONS } from '../../data/translations';

export default function DemoDisclaimer({ variant = 'banner', className = '', currentLang = 'zh-TW' }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const banner = t.demoBanner;

  if (variant === 'inline') {
    return (
      <div className={`p-3 rounded-xl bg-amber-50/90 border border-amber-200/90 text-xs text-amber-950 flex items-start gap-2.5 ${className}`}>
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="leading-relaxed font-sans">
          <span className="font-bold">{banner.mode}：</span>
          {banner.text}
        </div>
      </div>
    );
  }

  // 預設頂部/區塊橫幅型
  return (
    <div className={`bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal text-parchment-200 py-2.5 px-4 border-b border-charcoal-muted/50 text-xs ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center">
          <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono font-bold text-[10px] uppercase tracking-wider border border-amber-400/30">
            {banner.mode}
          </span>
          <span className="text-parchment-300 text-[11px] sm:text-xs">
            {banner.text}
          </span>
        </div>
        <div className="text-amber-400 text-[11px] font-bold tracking-wider shrink-0">
          {banner.warning}
        </div>
      </div>
    </div>
  );
}
