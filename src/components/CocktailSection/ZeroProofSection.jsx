import React, { useState } from 'react';
import { Sparkles, Wine, Droplets, Utensils, BookOpen, ArrowRight, CheckCircle2, Info, Flame } from '../Icons';
import {
  ZERO_PROOF_TERMINOLOGY,
  ZERO_PROOF_PILLARS,
  SIGNATURE_MOCKTAILS,
  ZERO_PROOF_SAFETY_GUIDE
} from '../../data/mocktailData';
import { TRANSLATIONS } from '../../data/translations';

export default function ZeroProofSection({ currentLang = 'zh-TW', onSelectMocktail }) {
  const [activeTab, setActiveTab] = useState('recipes'); // 'recipes' | 'pillars' | 'terminology' | 'safety'
  const t = TRANSLATIONS[currentLang]?.zeroProof || TRANSLATIONS['zh-TW'].zeroProof;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. 核心哲學引言橫幅 */}
      <div className="bg-gradient-to-br from-emerald-950/90 via-teal-950/80 to-charcoal text-parchment-100 p-6 sm:p-8 rounded-3xl border border-emerald-800/40 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>MODERN ZERO-PROOF FLAVOR CRAFT · {t.badge}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide leading-snug">
          {t.heroTitle}
        </h3>

        <p className="text-xs sm:text-sm text-emerald-100/80 max-w-3xl leading-relaxed font-sans">
          {t.heroDesc}
        </p>

        {/* 次分頁快速切換 */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-800/40">
          <button
            onClick={() => setActiveTab('recipes')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'recipes'
                ? 'bg-emerald-500 text-charcoal shadow-md scale-105'
                : 'bg-emerald-900/50 text-emerald-200 hover:bg-emerald-900/80 border border-emerald-700/50'
            }`}
          >
            {t.tabRecipes}
          </button>
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'pillars'
                ? 'bg-emerald-500 text-charcoal shadow-md scale-105'
                : 'bg-emerald-900/50 text-emerald-200 hover:bg-emerald-900/80 border border-emerald-700/50'
            }`}
          >
            {t.tabPillars}
          </button>
          <button
            onClick={() => setActiveTab('terminology')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'terminology'
                ? 'bg-emerald-500 text-charcoal shadow-md scale-105'
                : 'bg-emerald-900/50 text-emerald-200 hover:bg-emerald-900/80 border border-emerald-700/50'
            }`}
          >
            {t.tabTerminology}
          </button>
          <button
            onClick={() => setActiveTab('safety')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'safety'
                ? 'bg-emerald-500 text-charcoal shadow-md scale-105'
                : 'bg-emerald-900/50 text-emerald-200 hover:bg-emerald-900/80 border border-emerald-700/50'
            }`}
          >
            {t.tabSafety}
          </button>
        </div>
      </div>

      {/* 2. 內容切換區域 */}

      {/* 2.1 五大精選零酒精配方卡 */}
      {activeTab === 'recipes' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-serif italic text-charcoal-muted">Signature Zero-Proof Menu</span>
              <h4 className="text-2xl font-serif font-bold text-charcoal">
                {t.tabRecipes}
              </h4>
            </div>
            <span className="text-xs font-medium text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full hidden sm:inline-block">
              {t.viewRecipeBtn}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIGNATURE_MOCKTAILS.map((mocktail) => {
              const displayName = currentLang === 'ja' ? (mocktail.jaName || mocktail.name) : currentLang === 'en' ? mocktail.enName : mocktail.name;
              const displayCategory = currentLang === 'ja' ? (mocktail.categoryJa || mocktail.category) : currentLang === 'en' ? (mocktail.categoryEn || mocktail.category) : mocktail.category;
              return (
                <div
                  key={mocktail.id}
                  className="bg-white rounded-3xl border border-emerald-900/20 p-5 shadow-sm hover:border-emerald-700 hover:shadow-lg transition-all flex flex-col justify-between group space-y-4 cursor-pointer"
                  onClick={() => onSelectMocktail && onSelectMocktail(mocktail)}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase tracking-wider block">
                          {displayCategory}
                        </span>
                        <h5 className="font-serif font-bold text-xl text-charcoal group-hover:text-emerald-800 transition-colors">
                          {displayName}
                        </h5>
                        {displayName !== mocktail.enName && (
                          <span className="text-xs font-serif italic text-charcoal-muted">
                            {mocktail.enName}
                          </span>
                        )}
                      </div>

                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 shrink-0">
                        0.0% ABV
                      </span>
                    </div>

                    <p className="text-xs text-charcoal-light line-clamp-2 leading-relaxed font-sans">
                      {mocktail.tagline}
                    </p>

                    {/* 風味標籤 */}
                    <div className="flex flex-wrap gap-1">
                      {mocktail.flavorTags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* 代表搭餐料理 */}
                    {mocktail.pairingFood && mocktail.pairingFood[0] && (
                      <div className="bg-emerald-50/90 p-2.5 rounded-xl border border-emerald-200/80 text-xs">
                        <span className="font-bold text-emerald-950 block mb-0.5">
                          {t.pairingTitle || '🍽️ 最推薦搭餐：'}
                        </span>
                        <span className="text-emerald-900 text-[11px] line-clamp-1">{mocktail.pairingFood[0].dish}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-parchment-200 flex items-center justify-between">
                    <span className="text-[11px] text-charcoal-muted">
                      {mocktail.glassware ? mocktail.glassware.split(' ')[0] : ''}
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 group-hover:underline shrink-0"
                    >
                      <span>{t.viewRecipeBtn || '查看完整調製配方'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2.2 六大原料風味系統 */}
      {activeTab === 'pillars' && (
        <div className="space-y-6">
          <div className="border-b border-parchment-300 pb-3">
            <span className="text-xs font-serif italic text-charcoal-muted">Ingredient Architecture</span>
            <h4 className="text-2xl font-serif font-bold text-charcoal">
              {t.pillarsTitle || '無酒精調飲的六大核心原料系統'}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ZERO_PROOF_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white p-5 rounded-2xl border border-parchment-300 shadow-xs hover:border-emerald-600 hover:shadow-md transition-all space-y-2.5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{pillar.icon}</span>
                  <div>
                    <h5 className="font-bold text-charcoal text-base">
                      {pillar.title}
                    </h5>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                      {pillar.role}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-charcoal-light leading-relaxed font-sans pl-1">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2.3 五大名詞演變與光譜 */}
      {activeTab === 'terminology' && (
        <div className="space-y-6">
          <div className="border-b border-parchment-300 pb-3">
            <span className="text-xs font-serif italic text-charcoal-muted">Spectrum of Names & Contexts</span>
            <h4 className="text-2xl font-serif font-bold text-charcoal">
              {t.terminologyTitle || '從「仿雞尾酒」到「零酒精特調」：名稱演變與定位'}
            </h4>
          </div>

          <div className="bg-white rounded-2xl border border-parchment-300 overflow-hidden shadow-xs divide-y divide-parchment-200">
            {ZERO_PROOF_TERMINOLOGY.map((term, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-parchment-50 transition-colors">
                <div className="space-y-1 sm:w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-base text-emerald-900">{term.name}</span>
                  </div>
                  <div className="text-xs font-bold text-beef-burgundy">{term.zhName}</div>
                </div>
                <div className="text-xs sm:text-sm text-charcoal-light sm:w-1/2 leading-relaxed">
                  {term.meaning}
                </div>
                <div className="text-[11px] text-charcoal-muted bg-parchment-100 px-3 py-1.5 rounded-lg border border-parchment-300 shrink-0 text-center sm:text-right">
                  {term.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2.4 食品安全、衛生與 0.5% ABV 標示指引 */}
      {activeTab === 'safety' && (
        <div className="space-y-6">
          <div className="border-b border-parchment-300 pb-3">
            <span className="text-xs font-serif italic text-charcoal-muted">Hygiene & Regulations</span>
            <h4 className="text-2xl font-serif font-bold text-charcoal">
              {t.safetyTitle || ZERO_PROOF_SAFETY_GUIDE.title}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ZERO_PROOF_SAFETY_GUIDE.rules.map((rule, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-parchment-300 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <Info className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{rule.title}</span>
                </div>
                <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
