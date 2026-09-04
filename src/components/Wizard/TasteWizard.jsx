import React from 'react';
import { Sparkles, UtensilsCrossed, Flame, Soup, Droplets, Clock, HeartPulse, Zap, Wind, Layers, Fish, ArrowRight, CheckCircle2, RotateCcw, Wine, Compass } from '../Icons';
import { calculateRecommendation } from '../../domain/recommendation/calculateRecommendation';
import { COCKTAILS_DATA } from '../../data/cocktailData';
import { TRANSLATIONS } from '../../data/translations';

export default function TasteWizard({
  activeCategory,
  wizardData,
  cutsData,
  selectedTexture,
  setSelectedTexture,
  selectedCooking,
  setSelectedCooking,
  onOpenCutModal,
  onOpenCocktailModal,
  currentLang = 'zh-TW'
}) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const w = t.wizard;
  const categoryName = t.categories[activeCategory]?.shortLabel || activeCategory;

  // 圖示動態映射
  const iconMap = {
    Sparkles,
    Flame,
    Droplets,
    Clock,
    HeartPulse,
    UtensilsCrossed,
    Soup,
    Zap,
    Wind,
    Layers,
    Fish,
  };

  const getIcon = (iconName) => iconMap[iconName] || Sparkles;

  // 使用 Domain 層純函式計算推薦結果（解耦畫面與計算邏輯）
  const { perfectMatches, recommendedCuts } = calculateRecommendation({
    textureId: selectedTexture,
    cookingId: selectedCooking,
    cutsData,
    wizardData,
    maxLimit: 4
  });

  const handleReset = () => {
    if (wizardData && wizardData.textures.length > 0) {
      setSelectedTexture(wizardData.textures[0].id);
      setSelectedCooking(wizardData.cookingMethods[0].id);
    }
  };

  const handleCocktailClick = (cocktailId) => {
    if (onOpenCocktailModal) {
      const found = COCKTAILS_DATA.find((c) => c.id === cocktailId) || COCKTAILS_DATA[0];
      onOpenCocktailModal(found);
    }
  };

  return (
    <section id="wizard" className="py-16 sm:py-20 bg-parchment-200/60 border-y border-parchment-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 標題區 */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span>{w.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            {w.title}
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base">
            {w.subtitle}
          </p>
        </div>

        {/* 兩步問答面板 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 左側：問答選擇區 (7 欄) */}
          <div className="lg:col-span-7 space-y-8 bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm transition-all">
            
            {/* 問題一：口感偏好 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-charcoal flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-beef-burgundy text-white flex items-center justify-center text-xs font-mono font-bold shadow-xs">1</span>
                  {w.q1}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {wizardData.textures.map((item) => {
                  const IconComponent = getIcon(item.icon);
                  const isSelected = selectedTexture === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedTexture(item.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 cursor-pointer group ${
                        isSelected
                          ? 'bg-beef-burgundy/10 border-beef-burgundy ring-2 ring-beef-burgundy/30 text-charcoal shadow-sm scale-[1.01]'
                          : 'bg-parchment-100 border-parchment-300 text-charcoal hover:bg-parchment-200 hover:border-parchment-400'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 transition-colors ${isSelected ? 'bg-beef-burgundy text-white shadow-xs' : 'bg-parchment-200 text-charcoal-muted group-hover:text-charcoal'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-bold flex items-center justify-between">
                          <span>{item.label}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-beef-burgundy shrink-0 ml-1" />}
                        </div>
                        <div className="text-[11px] text-charcoal-muted mt-0.5 leading-snug">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 問題二：料理目標 */}
            <div className="space-y-3 pt-4 border-t border-parchment-200">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-charcoal flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-mono font-bold shadow-xs">2</span>
                  {w.q2}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {wizardData.cookingMethods.map((item) => {
                  const IconComponent = getIcon(item.icon);
                  const isSelected = selectedCooking === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedCooking(item.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 cursor-pointer group ${
                        isSelected
                          ? 'bg-amber-600/10 border-amber-600 ring-2 ring-amber-600/30 text-charcoal shadow-sm scale-[1.01]'
                          : 'bg-parchment-100 border-parchment-300 text-charcoal hover:bg-parchment-200 hover:border-parchment-400'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 transition-colors ${isSelected ? 'bg-amber-600 text-white shadow-xs' : 'bg-parchment-200 text-charcoal-muted group-hover:text-charcoal'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-bold flex items-center justify-between">
                          <span>{item.label}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 ml-1" />}
                        </div>
                        <div className="text-[11px] text-charcoal-muted mt-0.5 leading-snug">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 重設按鈕 */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-muted hover:text-beef-burgundy transition-colors hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{w.resetBtn}</span>
              </button>
            </div>

          </div>

          {/* 右側：即時推薦結果卡片 (5 欄) */}
          <div className="lg:col-span-5 bg-parchment-50 p-6 sm:p-7 rounded-2xl border border-parchment-300 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-parchment-200 pb-3">
              <div>
                <span className="text-xs font-serif italic text-charcoal-muted">{w.recBadge}</span>
                <h3 className="text-lg font-bold font-serif text-charcoal">{w.recTitle} ({categoryName})</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-beef-burgundy text-white text-xs font-mono font-bold whitespace-nowrap shadow-xs">
                {recommendedCuts.length} {w.recCountSuffix}
              </span>
            </div>

            <div className="space-y-3.5">
              {recommendedCuts.map((cut, idx) => {
                const isTopPick = perfectMatches.includes(cut.id) || idx === 0;
                const pairing = cut.pairedCocktail || {};
                const synergyTagText = currentLang === 'en' ? pairing.synergyTagEn : currentLang === 'ja' ? pairing.synergyTagJa : pairing.synergyTag;
                const synergyReasonText = currentLang === 'en' ? pairing.synergyReasonEn : currentLang === 'ja' ? pairing.synergyReasonJa : pairing.synergyReason;
                const cocktailDisplayName = currentLang === 'en' ? pairing.cocktailEnName : pairing.cocktailName;

                return (
                  <div
                    key={cut.id}
                    className="p-4 rounded-xl border border-parchment-300 bg-parchment-100 hover:border-beef-burgundy/80 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-bold text-lg text-charcoal group-hover:text-beef-burgundy transition-colors">
                            {currentLang === 'en' ? cut.enName : cut.name}
                          </h4>
                          <span className="text-xs text-charcoal-muted font-serif italic">{currentLang === 'en' ? cut.name : cut.enName}</span>
                        </div>
                        <div className="text-xs text-beef-burgundy font-medium mt-0.5">
                          {cut.primalName} · {cut.tagBadge}
                        </div>
                      </div>

                      {isTopPick && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 whitespace-nowrap shadow-2xs">
                          {w.perfectBadge}
                        </span>
                      )}
                    </div>

                    {/* 簡明三維指標 */}
                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-parchment-200 text-xs">
                      <div>
                        <span className="text-charcoal-muted text-[10px] block">{w.scoreTenderness}</span>
                        <span className="font-mono font-semibold text-charcoal">
                          {'★'.repeat(cut.scores?.tenderness || 3)}{'☆'.repeat(5 - (cut.scores?.tenderness || 3))}
                        </span>
                      </div>
                      <div>
                        <span className="text-charcoal-muted text-[10px] block">{w.scoreFat}</span>
                        <span className="font-mono font-semibold text-charcoal">
                          {'★'.repeat(cut.scores?.fat || 3)}{'☆'.repeat(5 - (cut.scores?.fat || 3))}
                        </span>
                      </div>
                      <div>
                        <span className="text-charcoal-muted text-[10px] block">{w.scoreFlavor}</span>
                        <span className="font-mono font-semibold text-charcoal">
                          {'★'.repeat(cut.scores?.flavor || 3)}{'☆'.repeat(5 - (cut.scores?.flavor || 3))}
                        </span>
                      </div>
                    </div>

                    {/* 調酒配對與風味協同標籤 (互動連動) */}
                    {pairing.cocktailId && (
                      <div className="mt-3 pt-2.5 border-t border-parchment-200/80 bg-amber-50/60 p-2.5 rounded-lg">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[11px] font-bold text-amber-900 flex items-center gap-1">
                            <Wine className="w-3.5 h-3.5 text-amber-700" />
                            <span>{w.pairedCocktailLabel || '🍸 推薦搭餐調酒'}</span>
                          </span>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-200 text-amber-900">
                            {synergyTagText}
                          </span>
                        </div>
                        <p className="text-[11px] text-charcoal-muted line-clamp-2 leading-relaxed">
                          {synergyReasonText}
                        </p>
                        <div className="mt-1.5 flex justify-end">
                          <button
                            onClick={() => handleCocktailClick(pairing.cocktailId)}
                            className="text-[10px] font-bold text-amber-800 hover:text-amber-950 underline inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>{cocktailDisplayName} ({w.viewCocktailRecipe || '調酒酒譜 →'})</span>
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between pt-2">
                      <span className="text-[11px] text-charcoal-muted line-clamp-1 pr-2">
                        {cut.donenessTip ? `${cut.donenessTip.slice(0, 24)}...` : ''}
                      </span>
                      <button
                        onClick={() => onOpenCutModal(cut)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-beef-burgundy hover:underline shrink-0 cursor-pointer"
                      >
                        <span>{w.detailBtn}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <a
                href="#cuts-library"
                className="text-xs text-charcoal-muted hover:text-beef-burgundy underline inline-flex items-center gap-1"
              >
                {w.allCutsLink}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
