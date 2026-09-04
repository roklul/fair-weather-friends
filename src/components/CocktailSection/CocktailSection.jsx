import React, { useState } from 'react';
import { COCKTAILS_DATA, COCKTAIL_PAIRING_PRINCIPLES, DISH_TO_COCKTAIL_MATRIX } from '../../data/cocktailData';
import { Wine, Sparkles, Utensils, Droplets, Flame, ArrowRight, BookOpen, CheckCircle2 } from '../Icons';
import { TRANSLATIONS } from '../../data/translations';

export default function CocktailSection({ onOpenCocktailModal, currentLang = 'zh-TW' }) {
  const [selectedMatcherTab, setSelectedMatcherTab] = useState('dish'); // 'dish' | 'flavor'
  const [selectedDishIdx, setSelectedDishIdx] = useState(0);
  const [selectedBaseSpirit, setSelectedBaseSpirit] = useState('all');

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const cLang = t.cocktail;

  const baseSpirits = [
    { id: 'all', label: currentLang === 'en' ? 'All 10 Cocktails' : currentLang === 'ja' ? '定番10選すべて' : '全部 10 款經典調酒' },
    { id: 'Bourbon / Rye', label: currentLang === 'en' ? 'Whiskey Base' : currentLang === 'ja' ? 'ウイスキー' : '威士忌基酒 (Whiskey)' },
    { id: 'Gin', label: currentLang === 'en' ? 'Gin Base' : currentLang === 'ja' ? 'ジン' : '琴酒基酒 (Gin)' },
    { id: 'White Rum', label: currentLang === 'en' ? 'Rum Base' : currentLang === 'ja' ? 'ラム' : '蘭姆酒基酒 (Rum)' },
    { id: 'Tequila', label: currentLang === 'en' ? 'Tequila Base' : currentLang === 'ja' ? 'テキーラ' : '龍舌蘭基酒 (Tequila)' },
    { id: 'Vodka', label: currentLang === 'en' ? 'Vodka Base' : currentLang === 'ja' ? 'ウォッカ' : '伏特加基酒 (Vodka)' },
  ];

  const filteredCocktails = COCKTAILS_DATA.filter((c) => {
    if (selectedBaseSpirit === 'all') return true;
    return c.baseSpirit.includes(selectedBaseSpirit);
  });

  const currentDishMatch = DISH_TO_COCKTAIL_MATRIX[selectedDishIdx] || DISH_TO_COCKTAIL_MATRIX[0];
  const primaryCocktail = COCKTAILS_DATA.find((c) => c.id === currentDishMatch.primaryCocktailId);
  const secondaryCocktail = COCKTAILS_DATA.find((c) => c.id === currentDishMatch.secondaryCocktailId);

  return (
    <section id="cocktails" className="py-16 sm:py-24 bg-parchment-200/70 border-t border-parchment-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 法規警語醒目頂部橫幅 */}
        <div className="bg-charcoal text-amber-300 py-3 px-4 rounded-xl border border-amber-400/30 text-center shadow-md">
          <span className="font-serif font-bold text-xs sm:text-sm tracking-widest uppercase">
            {cLang.disclaimer}
          </span>
        </div>

        {/* 區塊標題 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold tracking-wider uppercase">
            <Wine className="w-3.5 h-3.5 text-purple-800" />
            <span>{cLang.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            {cLang.title}
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
            {cLang.subtitle}
          </p>
        </div>

        {/* 雙向互動決策配對工具 (Two-Way Interactive Matcher) */}
        <div className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-parchment-200 pb-4">
            <div>
              <span className="text-xs font-serif italic text-charcoal-muted">{cLang.matcherBadge}</span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-charcoal flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-beef-burgundy" />
                {cLang.matcherTitle}
              </h3>
            </div>

            {/* 料理情境快速標籤 */}
            <div className="text-xs text-charcoal-muted">
              {cLang.matcherSub}
            </div>
          </div>

          {/* 料理情境切換列 */}
          <div className="flex flex-wrap gap-2">
            {DISH_TO_COCKTAIL_MATRIX.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDishIdx(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all whitespace-nowrap ${
                  selectedDishIdx === idx
                    ? 'bg-beef-burgundy text-white border-beef-burgundy shadow-xs'
                    : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          {/* 配對結果展示卡 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-parchment-100 p-6 rounded-xl border border-parchment-200 items-stretch">
            
            {/* 左側料理說明 (5 欄) */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-beef-burgundy">
                  {currentLang === 'en' ? 'Current Dining Scenario' : currentLang === 'ja' ? '選択中の料理シーン' : '當前料理情境'}
                </div>
                <h4 className="text-xl font-bold font-serif text-charcoal mt-0.5">{currentDishMatch.category}</h4>
                <div className="text-xs text-charcoal-muted mt-1">
                  <span className="font-bold text-charcoal">{currentLang === 'en' ? 'Dishes:' : currentLang === 'ja' ? '代表料理:' : '代表菜色：'}</span>{currentDishMatch.dishes}
                </div>
                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed pt-2">
                  <span className="font-bold text-beef-burgundy">{currentLang === 'en' ? 'Pairing Science:' : currentLang === 'ja' ? 'ペアリングの科学:' : '風味科學邏輯：'}</span>{currentDishMatch.rationale}
                </p>
              </div>

              <div className="pt-3 border-t border-parchment-300/80 text-[11px] text-charcoal-muted">
                💡 {currentLang === 'en' ? 'Rule: Higher fat in food requires crisp acidity, bubbles, or bitter structure in cocktails.' : currentLang === 'ja' ? '基本原則: 料理の脂が濃いほど、カクテルの酸味・炭酸・ビター感が引き立ちます。' : '搭配原則：料理油脂越高，調酒酸度、氣泡或苦甜結構應越強以達平衡。'}
              </div>
            </div>

            {/* 右側推薦調酒卡 (7 欄 - 首選 + 次選) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* 首選調酒 */}
              {primaryCocktail && (
                <div className="bg-parchment-50 p-4 rounded-xl border-2 border-beef-burgundy shadow-sm flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-beef-burgundy text-white whitespace-nowrap">
                        {cLang.primaryPick}
                      </span>
                      <span className="text-xs text-charcoal-muted font-mono">{primaryCocktail.baseSpirit}</span>
                    </div>

                    <div className="mt-2">
                      <h5 className="font-serif font-bold text-lg text-charcoal">
                        {currentLang === 'en' ? primaryCocktail.enName : primaryCocktail.name}
                      </h5>
                      <span className="text-xs font-serif italic text-charcoal-muted">
                        {currentLang === 'en' ? primaryCocktail.name : primaryCocktail.enName}
                      </span>
                    </div>

                    <p className="text-xs text-charcoal-light mt-1 line-clamp-2">
                      {primaryCocktail.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-parchment-200 flex items-center justify-between">
                    <span className="text-[11px] text-amber-900 font-medium">
                      {currentLang === 'en' ? 'Body:' : currentLang === 'ja' ? '重さ:' : '酒體：'}{'★'.repeat(primaryCocktail.bodyLevel)}{'☆'.repeat(5 - primaryCocktail.bodyLevel)}
                    </span>
                    <button
                      onClick={() => onOpenCocktailModal(primaryCocktail)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-beef-burgundy hover:underline shrink-0"
                    >
                      <span>{cLang.viewRecipe}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}

              {/* 次選調酒 */}
              {secondaryCocktail && (
                <div className="bg-parchment-50 p-4 rounded-xl border border-parchment-300 shadow-sm flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 whitespace-nowrap">
                        {cLang.secondaryPick}
                      </span>
                      <span className="text-xs text-charcoal-muted font-mono">{secondaryCocktail.baseSpirit}</span>
                    </div>

                    <div className="mt-2">
                      <h5 className="font-serif font-bold text-lg text-charcoal">
                        {currentLang === 'en' ? secondaryCocktail.enName : secondaryCocktail.name}
                      </h5>
                      <span className="text-xs font-serif italic text-charcoal-muted">
                        {currentLang === 'en' ? secondaryCocktail.name : secondaryCocktail.enName}
                      </span>
                    </div>

                    <p className="text-xs text-charcoal-light mt-1 line-clamp-2">
                      {secondaryCocktail.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-parchment-200 flex items-center justify-between">
                    <span className="text-[11px] text-amber-900 font-medium">
                      {currentLang === 'en' ? 'Body:' : currentLang === 'ja' ? '重さ:' : '酒體：'}{'★'.repeat(secondaryCocktail.bodyLevel)}{'☆'.repeat(5 - secondaryCocktail.bodyLevel)}
                    </span>
                    <button
                      onClick={() => onOpenCocktailModal(secondaryCocktail)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-charcoal hover:text-beef-burgundy hover:underline shrink-0"
                    >
                      <span>{cLang.viewRecipe}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* 10 款調酒卡片庫 */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3 h-3 text-amber-800" />
                <span>{currentLang === 'en' ? 'All 10 Classic Cocktails' : currentLang === 'ja' ? '定番カクテル10選一覧' : '全覽 10 款經典調酒庫'}</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-charcoal mt-1">
                {currentLang === 'en' ? 'Classic & Modern Cocktails Library' : currentLang === 'ja' ? 'カクテルレシピ＆スペック詳細' : '經典與現代經典調酒規格庫'}
              </h3>
            </div>

            {/* 基酒快速過濾 */}
            <div className="flex flex-wrap gap-1.5">
              {baseSpirits.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBaseSpirit(b.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all whitespace-nowrap ${
                    selectedBaseSpirit === b.id
                      ? 'bg-charcoal text-white border-charcoal shadow-xs'
                      : 'bg-parchment-50 text-charcoal border-parchment-300 hover:bg-parchment-100'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* 調酒卡片網格 (3 欄) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCocktails.map((c) => (
              <div
                key={c.id}
                className="bg-parchment-50 rounded-2xl border border-parchment-300 p-5 shadow-sm hover:border-beef-burgundy hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-[11px] font-mono text-beef-burgundy font-bold uppercase tracking-wider">
                        {c.baseSpirit}
                      </div>
                      <h4 className="font-serif font-bold text-xl text-charcoal group-hover:text-beef-burgundy transition-colors">
                        {currentLang === 'en' ? c.enName : c.name}
                      </h4>
                      <span className="text-xs font-serif italic text-charcoal-muted">
                        {currentLang === 'en' ? c.name : c.enName}
                      </span>
                    </div>

                    <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-parchment-200 text-charcoal border border-parchment-300 whitespace-nowrap">
                      {currentLang === 'en' ? 'Diff:' : currentLang === 'ja' ? '難易度:' : '難度:'} {'★'.repeat(c.difficulty)}{'☆'.repeat(5 - c.difficulty)}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-light line-clamp-2 leading-relaxed font-sans">
                    {c.tagline}
                  </p>

                  {/* 風味標籤 */}
                  <div className="flex flex-wrap gap-1">
                    {c.flavorTags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-parchment-100 border border-parchment-200 text-charcoal-muted font-medium whitespace-nowrap">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* 代表搭餐 */}
                  <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200 text-xs">
                    <span className="font-bold text-emerald-950 block mb-0.5">
                      🍽️ {currentLang === 'en' ? 'Top Food Pairing:' : currentLang === 'ja' ? 'おすすめ料理:' : '最推薦搭餐：'}
                    </span>
                    <span className="text-emerald-900 text-[11px] line-clamp-2">{c.pairingFood[0].dish}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-parchment-200 flex items-center justify-between">
                  <span className="text-[11px] text-charcoal-muted whitespace-nowrap">
                    {c.glassware.split(' ')[0]} · {c.method.split(' ')[0]}
                  </span>
                  <button
                    onClick={() => onOpenCocktailModal(c)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-beef-burgundy hover:underline shrink-0"
                  >
                    <span>{cLang.viewRecipe}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 大調酒餐搭科學判斷模型 */}
        <div className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm space-y-6">
          <div className="border-b border-parchment-200 pb-3">
            <span className="text-xs font-serif italic text-charcoal-muted">Science of Cocktail Pairing</span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-charcoal">
              {currentLang === 'en' ? 'Four Golden Principles of Cocktail Pairing' : currentLang === 'ja' ? 'カクテルペアリング 4大黄金ルール' : '調酒搭餐的四大黃金判斷法則'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COCKTAIL_PAIRING_PRINCIPLES.map((principle, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-parchment-100 border border-parchment-200 space-y-2">
                <div className="font-bold font-serif text-base text-beef-burgundy flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-beef-burgundy text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                    {idx + 1}
                  </span>
                  {principle.title}
                </div>
                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-sans pl-8">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 底部法規警語與安全飲酒提醒 */}
        <div className="bg-charcoal text-parchment-200 p-6 rounded-2xl text-center space-y-2 border border-charcoal-muted/40">
          <div className="text-amber-400 font-serif font-bold text-base sm:text-lg tracking-widest uppercase">
            {cLang.disclaimer}
          </div>
          <p className="text-xs text-parchment-400 max-w-xl mx-auto font-sans">
            {t.footer.legalDesc}
          </p>
        </div>

      </div>
    </section>
  );
}
