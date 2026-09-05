'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CowSvgMap from '../components/CowDiagram/CowSvgMap';
import PrimalDetailPanel from '../components/CowDiagram/PrimalDetailPanel';
import PorkSvgMap from '../components/CowDiagram/PorkSvgMap';
import PorkDetailPanel from '../components/CowDiagram/PorkDetailPanel';
import FishSvgMap from '../components/CowDiagram/FishSvgMap';
import FishDetailPanel from '../components/CowDiagram/FishDetailPanel';
import TasteWizard from '../components/Wizard/TasteWizard';
import AiSommelierSection from '../components/AiSommelier/AiSommelierSection';
import CutsLibrary from '../components/CutCard/CutsLibrary';
import WinePairingSection from '../components/WineSection/WinePairingSection';
import CocktailSection from '../components/CocktailSection/CocktailSection';
import CocktailModal from '../components/CocktailSection/CocktailModal';
import FullCutTable from '../components/DataTable/FullCutTable';
import FaqSection from '../components/Faq/FaqSection';
import Footer from '../components/Footer';
import CutModal from '../components/CutCard/CutModal';
import DemoDisclaimer from '../components/Compliance/DemoDisclaimer';
import { Compass, Sparkles } from '../components/Icons';
import { TRANSLATIONS } from '../data/translations';

// 資料庫引入
import {
  PRIMAL_AREAS as BEEF_PRIMALS,
  BEEF_CUTS_DATA,
  WINE_PAIRING_PRINCIPLES as BEEF_WINE_PRINCIPLES,
  WIZARD_DATA as BEEF_WIZARD_DATA,
  FAQS_DATA as BEEF_FAQS
} from '../data/beefData';

import {
  PORK_PRIMAL_AREAS as PORK_PRIMALS,
  PORK_CUTS_DATA,
  PORK_WINE_PRINCIPLES,
  PORK_WIZARD_DATA,
  PORK_FAQS_DATA as PORK_FAQS
} from '../data/porkData';

import {
  FISH_PRIMAL_AREAS as FISH_PRIMALS,
  FISH_CUTS_DATA,
  FISH_WINE_PRINCIPLES,
  FISH_WIZARD_DATA,
  FISH_FAQS_DATA as FISH_FAQS
} from '../data/fishData';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('beef'); // 'beef' | 'pork' | 'fish'
  const [currentLang, setCurrentLang] = useState('zh-TW'); // 'zh-TW' | 'en' | 'ja'

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const categoryTitle = t.categories[activeCategory]?.shortLabel || activeCategory;
  
  // 各品類選中之部位 ID
  const [selectedBeefPrimal, setSelectedBeefPrimal] = useState('rib');
  const [selectedPorkPrimal, setSelectedPorkPrimal] = useState('pork-shoulder');
  const [selectedFishPrimal, setSelectedFishPrimal] = useState('fish-dorsal');

  // Wizard 選項狀態 (受控狀態)
  const [beefTexture, setBeefTexture] = useState(BEEF_WIZARD_DATA.textures[0].id);
  const [beefCooking, setBeefCooking] = useState(BEEF_WIZARD_DATA.cookingMethods[0].id);

  const [porkTexture, setPorkTexture] = useState(PORK_WIZARD_DATA.textures[0].id);
  const [porkCooking, setPorkCooking] = useState(PORK_WIZARD_DATA.cookingMethods[0].id);

  const [fishTexture, setFishTexture] = useState(FISH_WIZARD_DATA.textures[0].id);
  const [fishCooking, setFishCooking] = useState(FISH_WIZARD_DATA.cookingMethods[0].id);

  // Modal 彈窗狀態
  const [activeModalCut, setActiveModalCut] = useState(null);
  const [activeModalCocktail, setActiveModalCocktail] = useState(null);

  // 當前品類資料映射
  const currentData = {
    beef: {
      title: categoryTitle,
      primals: BEEF_PRIMALS,
      cuts: BEEF_CUTS_DATA,
      winePrinciples: BEEF_WINE_PRINCIPLES,
      wizard: BEEF_WIZARD_DATA,
      faqs: BEEF_FAQS,
      activePrimal: selectedBeefPrimal,
      setActivePrimal: setSelectedBeefPrimal,
      selectedTexture: beefTexture,
      setSelectedTexture: setBeefTexture,
      selectedCooking: beefCooking,
      setSelectedCooking: setBeefCooking,
    },
    pork: {
      title: categoryTitle,
      primals: PORK_PRIMALS,
      cuts: PORK_CUTS_DATA,
      winePrinciples: PORK_WINE_PRINCIPLES,
      wizard: PORK_WIZARD_DATA,
      faqs: PORK_FAQS,
      activePrimal: selectedPorkPrimal,
      setActivePrimal: setSelectedPorkPrimal,
      selectedTexture: porkTexture,
      setSelectedTexture: setPorkTexture,
      selectedCooking: porkCooking,
      setSelectedCooking: setPorkCooking,
    },
    fish: {
      title: categoryTitle,
      primals: FISH_PRIMALS,
      cuts: FISH_CUTS_DATA,
      winePrinciples: FISH_WINE_PRINCIPLES,
      wizard: FISH_WIZARD_DATA,
      faqs: FISH_FAQS,
      activePrimal: selectedFishPrimal,
      setActivePrimal: setSelectedFishPrimal,
      selectedTexture: fishTexture,
      setSelectedTexture: setFishTexture,
      selectedCooking: fishCooking,
      setSelectedCooking: setFishCooking,
    }
  }[activeCategory];

  const [activeGuideTab, setActiveGuideTab] = useState('diagram'); // 'diagram' | 'wizard'

  // 監聽網址 hash 錨點以自動切換 Tab
  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#diagram-section') {
        setActiveGuideTab('diagram');
      } else if (hash === '#wizard') {
        setActiveGuideTab('wizard');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // 處理由名稱或 ID 開啟 Modal
  const handleOpenCutModalById = (cutId) => {
    const targetCut = currentData.cuts.find((c) => c.id === cutId);
    if (targetCut) {
      setActiveModalCut(targetCut);
    }
  };

  // 處理 Hero 快速意圖按鈕點擊（精確連動 Wizard 選項與滾動）
  const handleQuickFilter = (filter) => {
    if (filter.type === 'anchor') {
      if (filter.val === 'diagram-section') {
        setActiveGuideTab('diagram');
      } else if (filter.val === 'wizard') {
        setActiveGuideTab('wizard');
      }
      setTimeout(() => {
        const el = document.getElementById(filter.val) || document.getElementById('guide-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (filter.type === 'wizard') {
      setActiveGuideTab('wizard');
      if (filter.cookingId) {
        currentData.setSelectedCooking(filter.cookingId);
      }
      if (filter.textureId) {
        currentData.setSelectedTexture(filter.textureId);
      }
      setTimeout(() => {
        const wizardEl = document.getElementById('wizard') || document.getElementById('guide-section');
        if (wizardEl) wizardEl.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <div className="min-h-screen flex flex-col paper-texture">
      {/* 全站展示型免責與合規告示橫幅 */}
      <DemoDisclaimer currentLang={currentLang} />

      {/* 頂部導覽列 (含品類切換器與多語系選擇) */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setActiveModalCut(null);
        }}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
      />

      {/* 首屏 Hero */}
      <Hero
        activeCategory={activeCategory}
        onQuickFilter={handleQuickFilter}
        currentLang={currentLang}
      />

      {/* 肉品百科與決策中心 (Tab 整合精緻收納) */}
      <section id="guide-section" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* 雙 Tab 切換控制列 */}
        <div className="flex flex-col items-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-parchment-200 border border-parchment-300 shadow-inner max-w-md w-full sm:w-auto">
            <button
              onClick={() => setActiveGuideTab('diagram')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeGuideTab === 'diagram'
                  ? 'bg-charcoal text-white shadow-md'
                  : 'text-charcoal-muted hover:text-charcoal hover:bg-parchment-100'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Anatomy Diagram' : currentLang === 'ja' ? '解剖図マップ' : '🥩 互動部位解剖地圖'}</span>
            </button>
            <button
              onClick={() => setActiveGuideTab('wizard')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeGuideTab === 'wizard'
                  ? 'bg-beef-burgundy text-white shadow-md'
                  : 'text-charcoal-muted hover:text-charcoal hover:bg-parchment-100'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Taste & Cooking Wizard' : currentLang === 'ja' ? '食感・調理ウィザード' : '🧭 口感與料理決策助手'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 互動式部位解剖向量圖 */}
        {activeGuideTab === 'diagram' && (
          <div id="diagram-section" className="animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5 text-amber-800" />
                <span>{t.anatomy.badge} · {currentData.title}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
                {t.anatomy.title} ({currentData.title})
              </h2>
              <p className="text-charcoal-muted text-sm sm:text-base">
                {t.anatomy.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* 左側向量地圖 (7 欄) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {activeCategory === 'beef' && (
                  <CowSvgMap
                    selectedPrimalId={selectedBeefPrimal}
                    onSelectPrimal={(id) => setSelectedBeefPrimal(id)}
                    onSelectCutByName={handleOpenCutModalById}
                    currentLang={currentLang}
                  />
                )}
                {activeCategory === 'pork' && (
                  <PorkSvgMap
                    selectedPrimalId={selectedPorkPrimal}
                    onSelectPrimal={(id) => setSelectedPorkPrimal(id)}
                    onSelectCutByName={handleOpenCutModalById}
                    currentLang={currentLang}
                  />
                )}
                {activeCategory === 'fish' && (
                  <FishSvgMap
                    selectedPrimalId={selectedFishPrimal}
                    onSelectPrimal={(id) => setSelectedFishPrimal(id)}
                    onSelectCutByName={handleOpenCutModalById}
                    currentLang={currentLang}
                  />
                )}
              </div>

              {/* 右側部位資訊面板 (5 欄) */}
              <div className="lg:col-span-5">
                {activeCategory === 'beef' && (
                  <PrimalDetailPanel
                    selectedPrimalId={selectedBeefPrimal}
                    onOpenCutModalById={handleOpenCutModalById}
                    currentLang={currentLang}
                  />
                )}
                {activeCategory === 'pork' && (
                  <PorkDetailPanel
                    selectedPrimalId={selectedPorkPrimal}
                    onOpenCutModalById={handleOpenCutModalById}
                    currentLang={currentLang}
                  />
                )}
                {activeCategory === 'fish' && (
                  <FishDetailPanel
                    selectedPrimalId={selectedFishPrimal}
                    onOpenCutModalById={handleOpenCutModalById}
                    currentLang={currentLang}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 選肉決策助手小工具 */}
        {activeGuideTab === 'wizard' && (
          <div id="wizard" className="animate-fadeIn">
            <TasteWizard
              activeCategory={activeCategory}
              wizardData={currentData.wizard}
              cutsData={currentData.cuts}
              selectedTexture={currentData.selectedTexture}
              setSelectedTexture={currentData.setSelectedTexture}
              selectedCooking={currentData.selectedCooking}
              setSelectedCooking={currentData.setSelectedCooking}
              onOpenCutModal={(cut) => setActiveModalCut(cut)}
              onOpenCocktailModal={(cocktail) => setActiveModalCocktail(cocktail)}
              currentLang={currentLang}
            />
          </div>
        )}

      </section>

      {/* AI 智能侍酒師與料理顧問 (BYOK 模式 + 防幻覺事實護欄) */}
      <AiSommelierSection currentLang={currentLang} />

      {/* 12 款精選細切部位卡片庫 */}
      <CutsLibrary
        activeCategory={activeCategory}
        cutsData={currentData.cuts}
        onOpenModal={(cut) => setActiveModalCut(cut)}
        currentLang={currentLang}
      />

      {/* 餐酒搭配科學專題與料理速查（含啤酒與在地名酒） */}
      <WinePairingSection
        activeCategory={activeCategory}
        winePrinciples={currentData.winePrinciples}
        currentLang={currentLang}
      />

      {/* 經典調酒搭餐專題（10 款調酒 × 料理雙向配對） */}
      <CocktailSection
        onOpenCocktailModal={(cocktail) => setActiveModalCocktail(cocktail)}
        currentLang={currentLang}
      />

      {/* 規格比較表 */}
      <FullCutTable
        activeCategory={activeCategory}
        cutsData={currentData.cuts}
        primalAreas={currentData.primals}
        onOpenModal={(cut) => setActiveModalCut(cut)}
        currentLang={currentLang}
      />

      {/* 常見問答 FAQ */}
      <FaqSection
        activeCategory={activeCategory}
        faqsData={currentData.faqs}
        currentLang={currentLang}
      />

      {/* 頁尾 */}
      <Footer
        activeCategory={activeCategory}
        currentLang={currentLang}
      />

      {/* 部位詳情 Modal 彈窗 */}
      <CutModal
        cut={activeModalCut}
        onClose={() => setActiveModalCut(null)}
        currentLang={currentLang}
      />

      {/* 調酒詳情 Modal 彈窗 */}
      <CocktailModal
        cocktail={activeModalCocktail}
        onClose={() => setActiveModalCocktail(null)}
        currentLang={currentLang}
      />

    </div>
  );
}
