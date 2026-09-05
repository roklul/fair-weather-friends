import React, { useState } from 'react';
import { COCKTAILS_DATA, DISH_TO_COCKTAIL_MATRIX } from '../../data/cocktailData';
import { getLocalizedCocktail, getLocalizedCocktailPrinciples, getLocalizedDishMatrix } from '../../data/cocktailI18n';
import { Wine, Sparkles, ArrowRight, BookOpen, ChevronDown, ChevronUp, Droplets } from '../Icons';
import { TRANSLATIONS } from '../../data/translations';
import ZeroProofSection from './ZeroProofSection';
import MocktailModal from './MocktailModal';

export default function CocktailSection({ onOpenCocktailModal, currentLang = 'zh-TW' }) {
  const [activeBeverageTab, setActiveBeverageTab] = useState('classic'); // 'classic' | 'zero-proof'
  const [selectedDishIdx, setSelectedDishIdx] = useState(0);
  const [selectedBaseSpirit, setSelectedBaseSpirit] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMocktail, setSelectedMocktail] = useState(null);

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

  const localizedDishMatrix = getLocalizedDishMatrix(currentLang);
  const dishMatrix = DISH_TO_COCKTAIL_MATRIX.map((item, idx) => ({
    ...item,
    ...(localizedDishMatrix[idx] || {})
  }));

  const currentDishMatch = dishMatrix[selectedDishIdx] || dishMatrix[0];
  const rawPrimary = COCKTAILS_DATA.find((c) => c.id === currentDishMatch.primaryCocktailId);
  const rawSecondary = COCKTAILS_DATA.find((c) => c.id === currentDishMatch.secondaryCocktailId);
  const primaryCocktail = getLocalizedCocktail(rawPrimary, currentLang);
  const secondaryCocktail = getLocalizedCocktail(rawSecondary, currentLang);

  const filteredCocktails = COCKTAILS_DATA
    .filter((c) => {
      if (selectedBaseSpirit === 'all') return true;
      return c.baseSpirit.includes(selectedBaseSpirit);
    })
    .map((c) => getLocalizedCocktail(c, currentLang));

  // 判斷是否需要收納折疊：未選特定基酒且未展開時，只顯示前 6 款
  const shouldLimit = selectedBaseSpirit === 'all' && !isExpanded;
  const displayedCocktails = shouldLimit ? filteredCocktails.slice(0, 6) : filteredCocktails;

  const expandLabel = currentLang === 'en'
    ? `Show All ${filteredCocktails.length} Cocktails`
    : currentLang === 'ja'
    ? `全 ${filteredCocktails.length} 種のカクテルをすべて表示`
    : `展開查看全部 ${filteredCocktails.length} 款調酒庫`;

  const collapseLabel = currentLang === 'en'
    ? 'Show Less'
    : currentLang === 'ja'
    ? '折りたたむ'
    : '收合精選調酒';

  const cocktailPrinciples = getLocalizedCocktailPrinciples(currentLang);

  return (
    <section id="cocktails" className="py-12 sm:py-16 bg-parchment-200/70 border-t border-parchment-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 法規警語醒目頂部橫幅 */}
        <div className="bg-charcoal text-amber-300 py-3 px-4 rounded-xl border border-amber-400/30 text-center shadow-md">
          <span className="font-serif font-bold text-xs sm:text-sm tracking-widest uppercase">
            {cLang.disclaimer}
          </span>
        </div>

        {/* 區塊標題與切換主導航 (經典調酒 vs 零酒精特調專題) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-parchment-300 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/10 text-purple-900 text-xs font-bold font-mono tracking-wider uppercase">
              <Wine className="w-3.5 h-3.5 text-purple-800" />
              <span>{cLang.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-wide">
              {cLang.title}
            </h2>
            <p className="text-charcoal-light font-sans text-sm max-w-2xl leading-relaxed">
              {cLang.subtitle}
            </p>
          </div>

          {/* 頂部主導航切換：經典調酒 vs 零酒精特調專題 */}
          <div className="flex items-center bg-parchment-100 p-1.5 rounded-2xl border border-parchment-300 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveBeverageTab('classic')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeBeverageTab === 'classic'
                  ? 'bg-beef-burgundy text-white shadow-md'
                  : 'text-charcoal hover:bg-parchment-200'
              }`}
            >
              <Wine className="w-4 h-4" />
              <span>{currentLang === 'en' ? '10 Classic Cocktails' : currentLang === 'ja' ? '定番カクテル10選' : '經典調酒庫 (10款)'}</span>
            </button>
            <button
              onClick={() => setActiveBeverageTab('zero-proof')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeBeverageTab === 'zero-proof'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'text-charcoal hover:bg-parchment-200'
              }`}
            >
              <Droplets className="w-4 h-4 text-emerald-400" />
              <span>{currentLang === 'en' ? '🌱 Zero-Proof & Mocktail' : currentLang === 'ja' ? '🌱 ノンアルコール特選' : '🌱 零酒精特調專題 (Mocktail)'}</span>
            </button>
          </div>
        </div>

        {/* 頁面主體內容分支：Zero-Proof 專題 or 經典調酒庫 */}
        {activeBeverageTab === 'zero-proof' ? (
          <ZeroProofSection
            currentLang={currentLang}
            onSelectMocktail={(mocktail) => setSelectedMocktail(mocktail)}
          />
        ) : (
          <div className="space-y-12 animate-fadeIn">
            {/* 1. 料理情境找調酒互動推薦儀表板 (Dish -> Cocktail Matcher) */}
            <div className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-serif italic text-charcoal-muted">{cLang.interactiveTitle}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-charcoal mt-1">
                  {cLang.interactiveSubtitle}
                </h3>
              </div>

              {/* 料理場景切換按鈕群 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {dishMatrix.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDishIdx(idx)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer flex flex-col items-center justify-center min-h-[58px] ${
                      selectedDishIdx === idx
                        ? 'bg-purple-900 text-white border-purple-900 shadow-sm scale-102'
                        : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
                    }`}
                  >
                    <span>{item.category}</span>
                  </button>
                ))}
              </div>

              {/* 當前選定料理情境與精選雙調酒展示 */}
              <div className="bg-parchment-100 p-5 sm:p-6 rounded-xl border border-parchment-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-parchment-300/80 pb-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-beef-burgundy uppercase tracking-wider block">
                      {currentDishMatch.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-serif text-charcoal">
                      🥩 {currentDishMatch.dishes}
                    </h4>
                  </div>
                  <div className="text-xs text-charcoal-light bg-parchment-50 px-3 py-1.5 rounded-lg border border-parchment-300/60 max-w-md">
                    💡 <span className="font-medium">{currentDishMatch.rationale}</span>
                  </div>
                </div>

                {/* 雙調酒推薦卡 (首選 Primary vs 備選 Secondary) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {/* 首選調酒 */}
                  {primaryCocktail && (
                    <div className="bg-white p-4 rounded-xl border-2 border-beef-burgundy shadow-xs flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-beef-burgundy text-white tracking-wide">
                            👑 {cLang.primaryPick}
                          </span>
                          <span className="text-[11px] font-mono text-charcoal-muted">
                            {primaryCocktail.baseSpirit}
                          </span>
                        </div>
                        <h5 className="font-serif font-bold text-lg text-charcoal">
                          {primaryCocktail.name} <span className="text-xs font-serif italic text-charcoal-muted">({primaryCocktail.enName})</span>
                        </h5>
                        <p className="text-xs text-charcoal-light line-clamp-2">
                          {primaryCocktail.tagline}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-parchment-200 flex items-center justify-between">
                        <span className="text-[11px] text-charcoal-muted">
                          {primaryCocktail.alcoholLevel}
                        </span>
                        <button
                          onClick={() => onOpenCocktailModal(primaryCocktail)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-beef-burgundy hover:underline cursor-pointer"
                        >
                          <span>{cLang.viewRecipe}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 備選調酒 */}
                  {secondaryCocktail && (
                    <div className="bg-white p-4 rounded-xl border border-parchment-300 shadow-xs flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 tracking-wide border border-amber-300">
                            ✨ {cLang.secondaryPick}
                          </span>
                          <span className="text-[11px] font-mono text-charcoal-muted">
                            {secondaryCocktail.baseSpirit}
                          </span>
                        </div>
                        <h5 className="font-serif font-bold text-lg text-charcoal">
                          {secondaryCocktail.name} <span className="text-xs font-serif italic text-charcoal-muted">({secondaryCocktail.enName})</span>
                        </h5>
                        <p className="text-xs text-charcoal-light line-clamp-2">
                          {secondaryCocktail.tagline}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-parchment-200 flex items-center justify-between">
                        <span className="text-[11px] text-charcoal-muted">
                          {secondaryCocktail.alcoholLevel}
                        </span>
                        <button
                          onClick={() => onOpenCocktailModal(secondaryCocktail)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-purple-900 hover:underline cursor-pointer"
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

            {/* 2. 經典調酒完整資料庫與基酒篩選 (10 Classic Cocktails Grid) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment-300 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold font-mono text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300 uppercase tracking-wider">
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
                      onClick={() => {
                        setSelectedBaseSpirit(b.id);
                        if (b.id !== 'all') setIsExpanded(true);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all whitespace-nowrap cursor-pointer ${
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
                {displayedCocktails.map((c) => (
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
                            {c.name}
                          </h4>
                          {c.name !== c.enName && (
                            <span className="text-xs font-serif italic text-charcoal-muted">
                              {c.enName}
                            </span>
                          )}
                        </div>

                        <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-parchment-200 text-charcoal border border-parchment-300 whitespace-nowrap">
                          {currentLang === 'en' ? 'Diff: ' : currentLang === 'ja' ? '難易度: ' : '難度: '}{'★'.repeat(c.difficulty)}{'☆'.repeat(5 - c.difficulty)}
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
                      {c.pairingFood && c.pairingFood[0] && (
                        <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200 text-xs">
                          <span className="font-bold text-emerald-950 block mb-0.5">
                            🍽️ {currentLang === 'en' ? 'Top Food Pairing:' : currentLang === 'ja' ? 'おすすめ料理:' : '最推薦搭餐：'}
                          </span>
                          <span className="text-emerald-900 text-[11px] line-clamp-2">{c.pairingFood[0].dish}</span>
                        </div>
                      )}

                      {/* 無酒精 Mocktail 標示 */}
                      {c.mocktailVersion && (
                        <div className="bg-amber-50/80 p-2 rounded-lg border border-amber-200 text-[11px] text-amber-900 flex items-center justify-between">
                          <span className="font-bold">🌱 {c.mocktailVersion.name}</span>
                          <span className="text-[10px] text-amber-800">0.0% 版</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-parchment-200 flex items-center justify-between">
                      <span className="text-[11px] text-charcoal-muted whitespace-nowrap">
                        {c.glassware ? c.glassware.split(' ')[0] : ''} · {c.method ? c.method.split(' ')[0] : ''}
                      </span>
                      <button
                        onClick={() => onOpenCocktailModal(c)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-beef-burgundy hover:underline shrink-0 cursor-pointer"
                      >
                        <span>{cLang.viewRecipe}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 展開 / 收合控制按鈕 */}
              {filteredCocktails.length > 6 && selectedBaseSpirit === 'all' && (
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-parchment-50 hover:bg-parchment-100 text-charcoal border border-parchment-300 font-bold text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        <span>{collapseLabel}</span>
                        <ChevronUp className="w-4 h-4 text-beef-burgundy" />
                      </>
                    ) : (
                      <>
                        <span>{expandLabel}</span>
                        <ChevronDown className="w-4 h-4 text-beef-burgundy" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* 3. 4 大調酒餐搭科學判斷模型 */}
            <div className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-sm space-y-6">
              <div className="border-b border-parchment-200 pb-3">
                <span className="text-xs font-serif italic text-charcoal-muted">Science of Cocktail Pairing</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-charcoal">
                  {currentLang === 'en' ? 'Four Golden Principles of Cocktail Pairing' : currentLang === 'ja' ? 'カクテルペアリング 4大黄金ルール' : '調酒搭餐的四大黃金判斷法則'}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cocktailPrinciples.map((principle, idx) => (
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
          </div>
        )}

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

      {/* 獨立 Zero-Proof Mocktail 彈窗 */}
      {selectedMocktail && (
        <MocktailModal
          mocktail={selectedMocktail}
          currentLang={currentLang}
          onClose={() => setSelectedMocktail(null)}
        />
      )}
    </section>
  );
}
