import React from 'react';
import { Sparkles, UtensilsCrossed, Flame, Soup, Droplets, Clock, HeartPulse, Zap, Wind, Layers, Fish, ArrowRight, CheckCircle2, RotateCcw } from '../Icons';
import { calculateRecommendation } from '../../domain/recommendation/calculateRecommendation';
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

  return (
    <section id="wizard" className="py-16 sm:py-20 bg-parchment-200/60 border-y border-parchment-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 標題區 */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
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
          <div className="lg:col-span-7 space-y-8 bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm">
            
            {/* 問題一：口感偏好 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-charcoal flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-beef-burgundy text-white flex items-center justify-center text-xs font-mono">1</span>
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
                      className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-beef-burgundy/10 border-beef-burgundy ring-1 ring-beef-burgundy text-charcoal shadow-xs'
                          : 'bg-parchment-100 border-parchment-300 text-charcoal hover:bg-parchment-200'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-beef-burgundy text-white' : 'bg-parchment-200 text-charcoal-muted'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-bold flex items-center justify-between">
                          <span>{item.label}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-beef-burgundy shrink-0 ml-1" />}
                        </div>
                        <div className="text-[11px] text-charcoal-muted mt-0.5">{item.desc}</div>
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
                  <span className="w-6 h-6 rounded-full bg-beef-burgundy text-white flex items-center justify-center text-xs font-mono">2</span>
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
                      className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-amber-600/10 border-amber-600 ring-1 ring-amber-600 text-charcoal shadow-xs'
                          : 'bg-parchment-100 border-parchment-300 text-charcoal hover:bg-parchment-200'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-amber-600 text-white' : 'bg-parchment-200 text-charcoal-muted'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-bold flex items-center justify-between">
                          <span>{item.label}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 ml-1" />}
                        </div>
                        <div className="text-[11px] text-charcoal-muted mt-0.5">{item.desc}</div>
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
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-muted hover:text-charcoal hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                {w.resetBtn}
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
              <span className="px-2.5 py-1 rounded-full bg-beef-burgundy text-white text-xs font-mono font-bold whitespace-nowrap">
                {recommendedCuts.length} {w.recCountSuffix}
              </span>
            </div>

            <div className="space-y-3">
              {recommendedCuts.map((cut, idx) => {
                const isTopPick = perfectMatches.includes(cut.id) || idx === 0;
                return (
                  <div
                    key={cut.id}
                    className="p-4 rounded-xl border border-parchment-300 bg-parchment-100 hover:border-beef-burgundy hover:shadow-md transition-all group"
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
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 whitespace-nowrap">
                          {w.perfectBadge}
                        </span>
                      )}
                    </div>

                    {/* 簡明三維指標 */}
                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-parchment-200/80 text-xs">
                      <div>
                        <span className="text-charcoal-muted text-[10px] block">{w.scoreTenderness}</span>
                        <span className="font-mono font-semibold text-charcoal">
                          {'★'.repeat(cut.scores.tenderness)}{'☆'.repeat(5 - cut.scores.tenderness)}
                        </span>
                      </div>
                      <div>
                        <span className="text-charcoal-muted text-[10px] block">{w.scoreFat}</span>
                        <span className="font-mono font-semibold text-charcoal">
                          {'★'.repeat(cut.scores.fat)}{'☆'.repeat(5 - cut.scores.fat)}
                        </span>
                      </div>
                      <div>
                        <span className="text-charcoal-muted text-[10px] block">{w.scoreFlavor}</span>
                        <span className="font-mono font-semibold text-charcoal">
                          {'★'.repeat(cut.scores.flavor)}{'☆'.repeat(5 - cut.scores.flavor)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between pt-2">
                      <span className="text-[11px] text-charcoal-muted line-clamp-1">
                        {cut.donenessTip.slice(0, 24)}...
                      </span>
                      <button
                        onClick={() => onOpenCutModal(cut)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-beef-burgundy hover:underline shrink-0"
                      >
                        <span>{w.detailBtn}</span>
                        <ArrowRight className="w-3 h-3" />
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
