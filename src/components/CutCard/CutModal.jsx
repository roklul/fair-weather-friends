import React from 'react';
import { X, Flame, Wine, Compass, AlertCircle, Sparkles, CheckCircle, Info } from '../Icons';
import { TRANSLATIONS } from '../../data/translations';
import { getLocalizedCut } from '../../data/cutsI18n';

export default function CutModal({ cut, onClose, currentLang = 'zh-TW' }) {
  if (!cut) return null;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const m = t.modal || {};
  const w = t.wizard;
  const localizedCut = getLocalizedCut(cut, currentLang);

  const cutDisplayName = currentLang === 'en' ? (localizedCut.enName || localizedCut.name) : localizedCut.name;
  const cutSubName = currentLang === 'en' ? (localizedCut.aliases || cut.name) : (localizedCut.enName || cut.enName);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      {/* 點擊遮罩外關閉 */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* 彈跳視窗主體 */}
      <div className="relative bg-parchment-50 border border-parchment-300 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* 頂部 Header */}
        <div className="p-6 border-b border-parchment-300 bg-parchment-100 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-beef-burgundy">
                {localizedCut.primalName}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${localizedCut.tagColor}`}>
                {localizedCut.tagBadge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal flex items-baseline gap-3">
              {cutDisplayName}
              <span className="text-base font-serif italic text-charcoal-muted">{cutSubName}</span>
            </h2>
            {localizedCut.aliases && (
              <p className="text-xs text-charcoal-muted mt-1">
                {currentLang === 'en' ? `Aliases: ${localizedCut.aliases}` : currentLang === 'ja' ? `別名: ${localizedCut.aliases}` : `常見別名：${localizedCut.aliases}`}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-parchment-300 text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 滾動主體內容區 (7 大標準面向) */}
        <div className="p-6 overflow-y-auto space-y-6 text-charcoal font-sans">
          
          {/* 1. 解剖位置 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-2">
              <Compass className="w-4 h-4 text-beef-burgundy" />
              1. {m.primalSource || '解剖位置與來源'} (Anatomical Position)
            </h4>
            <p className="text-sm text-charcoal-light bg-parchment-100 p-3.5 rounded-xl border border-parchment-200 leading-relaxed">
              {localizedCut.locationDesc}
            </p>
          </div>

          {/* 2. 肉質與油脂特色 (三維指標 + 關鍵字) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              2. {w.scoreFlavor}與{w.scoreFat}特色 (Meat & Fat Profile)
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-parchment-100 p-4 rounded-xl border border-parchment-200">
              <div>
                <span className="text-xs text-charcoal-muted block mb-1">{w.scoreTenderness}</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-mono font-bold text-emerald-800">
                    {'★'.repeat(localizedCut.scores?.tenderness || 3)}{'☆'.repeat(5 - (localizedCut.scores?.tenderness || 3))}
                  </span>
                  <span className="text-xs font-mono font-bold">({localizedCut.scores?.tenderness || 3}/5)</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-charcoal-muted block mb-1">{w.scoreFat}</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-mono font-bold text-amber-600">
                    {'★'.repeat(localizedCut.scores?.fat || 3)}{'☆'.repeat(5 - (localizedCut.scores?.fat || 3))}
                  </span>
                  <span className="text-xs font-mono font-bold">({localizedCut.scores?.fat || 3}/5)</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-charcoal-muted block mb-1">{w.scoreFlavor}</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-mono font-bold text-beef-burgundy">
                    {'★'.repeat(localizedCut.scores?.flavor || 3)}{'☆'.repeat(5 - (localizedCut.scores?.flavor || 3))}
                  </span>
                  <span className="text-xs font-mono font-bold">({localizedCut.scores?.flavor || 3}/5)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {localizedCut.keywords?.map((kw, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-parchment-200 text-charcoal text-xs font-medium">
                  ✓ #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* 3. 推薦料理方式 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-600" />
              3. {t.cutsLibrary?.cookingLabel || '推薦料理方式'} (Recommended Cooking)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {localizedCut.cookingMethods?.map((method, idx) => (
                <div key={idx} className="p-3 bg-parchment-100 rounded-xl border border-parchment-200">
                  <div className="font-bold text-sm text-charcoal mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    {method.name}
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. 推薦熟度或燉煮原則 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              4. {t.cutsLibrary?.donenessLabel || '推薦熟度與火候原則'} (Thermal Control)
            </h4>
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
              {localizedCut.donenessTip}
            </div>
          </div>

          {/* 5. 餐酒搭配與風味理由 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-2">
              <Wine className="w-4 h-4 text-purple-700" />
              5. {m.wineRationale || '餐酒搭配與風味理由'} (Pairing & Flavor Science)
            </h4>
            <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-3 text-xs sm:text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-purple-950">{t.wine?.recWineHeader || '推薦酒款'}：</span>
                <span className="px-2.5 py-0.5 rounded bg-purple-100/80 text-purple-900 font-serif italic text-xs border border-purple-300">
                  {localizedCut.winePairingDisplay || localizedCut.winePairing?.wines?.join(' · ')}
                </span>
              </div>

              {localizedCut.winePairing?.styleSummary && (
                <div>
                  <span className="font-bold text-purple-950 block mb-1">
                    {currentLang === 'en' ? 'Style Summary:' : currentLang === 'ja' ? 'スタイル概要:' : '搭酒風味風格：'}
                  </span>
                  <p className="text-purple-900 font-serif italic text-xs">{localizedCut.winePairing.styleSummary}</p>
                </div>
              )}

              {localizedCut.winePairing?.rationale && (
                <div className="pt-2 border-t border-purple-200 text-purple-950 text-xs leading-relaxed">
                  <span className="font-bold">{w.synergyLabel || '風味科學理由：'}</span>
                  {localizedCut.winePairing.rationale}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* 底部關閉按鈕 */}
        <div className="p-4 border-t border-parchment-300 bg-parchment-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-charcoal hover:bg-charcoal-light text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
          >
            {m.close || '完成並關閉視窗'}
          </button>
        </div>

      </div>

    </div>
  );
}

