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
import CutsLibrary from '../components/CutCard/CutsLibrary';
import WinePairingSection from '../components/WineSection/WinePairingSection';
import FullCutTable from '../components/DataTable/FullCutTable';
import FaqSection from '../components/Faq/FaqSection';
import Footer from '../components/Footer';
import CutModal from '../components/CutCard/CutModal';
import { Compass } from '../components/Icons';

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
  
  // 各品類選中之部位 ID
  const [selectedBeefPrimal, setSelectedBeefPrimal] = useState('rib');
  const [selectedPorkPrimal, setSelectedPorkPrimal] = useState('pork-shoulder');
  const [selectedFishPrimal, setSelectedFishPrimal] = useState('fish-dorsal');

  // Modal 彈窗狀態
  const [activeModalCut, setActiveModalCut] = useState(null);

  // 當前品類資料映射
  const currentData = {
    beef: {
      title: '牛肉',
      primals: BEEF_PRIMALS,
      cuts: BEEF_CUTS_DATA,
      winePrinciples: BEEF_WINE_PRINCIPLES,
      wizard: BEEF_WIZARD_DATA,
      faqs: BEEF_FAQS,
      activePrimal: selectedBeefPrimal,
      setActivePrimal: setSelectedBeefPrimal
    },
    pork: {
      title: '豬肉',
      primals: PORK_PRIMALS,
      cuts: PORK_CUTS_DATA,
      winePrinciples: PORK_WINE_PRINCIPLES,
      wizard: PORK_WIZARD_DATA,
      faqs: PORK_FAQS,
      activePrimal: selectedPorkPrimal,
      setActivePrimal: setSelectedPorkPrimal
    },
    fish: {
      title: '魚類海鮮',
      primals: FISH_PRIMALS,
      cuts: FISH_CUTS_DATA,
      winePrinciples: FISH_WINE_PRINCIPLES,
      wizard: FISH_WIZARD_DATA,
      faqs: FISH_FAQS,
      activePrimal: selectedFishPrimal,
      setActivePrimal: setSelectedFishPrimal
    }
  }[activeCategory];

  // 處理由名稱或 ID 開啟 Modal
  const handleOpenCutModalById = (cutId) => {
    const targetCut = currentData.cuts.find((c) => c.id === cutId);
    if (targetCut) {
      setActiveModalCut(targetCut);
    }
  };

  // 處理 Hero 快速意圖按鈕點擊
  const handleQuickFilter = (filter) => {
    if (filter.type === 'anchor') {
      const el = document.getElementById(filter.val);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (filter.type === 'cooking') {
      const wizardEl = document.getElementById('wizard');
      if (wizardEl) wizardEl.scrollIntoView({ behavior: 'smooth' });
    } else if (filter.type === 'fat') {
      const cutsEl = document.getElementById('cuts-library');
      if (cutsEl) cutsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col paper-texture">
      
      {/* 頂部導覽列 (含品類切換器) */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setActiveModalCut(null);
        }}
      />

      {/* 首屏 Hero */}
      <Hero
        activeCategory={activeCategory}
        onQuickFilter={handleQuickFilter}
      />

      {/* 互動式部位解剖向量圖 Section */}
      <section id="diagram-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-amber-800" />
            <span>解剖圖鑑 · {currentData.title}分切系統</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            互動{currentData.title}部位圖
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base">
            點選下方{currentData.title}向量色塊，立即查看部位解剖位置、肉質特色、推薦料理與延伸細分切清單。
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
              />
            )}
            {activeCategory === 'pork' && (
              <PorkSvgMap
                selectedPrimalId={selectedPorkPrimal}
                onSelectPrimal={(id) => setSelectedPorkPrimal(id)}
                onSelectCutByName={handleOpenCutModalById}
              />
            )}
            {activeCategory === 'fish' && (
              <FishSvgMap
                selectedPrimalId={selectedFishPrimal}
                onSelectPrimal={(id) => setSelectedFishPrimal(id)}
                onSelectCutByName={handleOpenCutModalById}
              />
            )}
          </div>

          {/* 右側部位資訊面板 (5 欄) */}
          <div className="lg:col-span-5">
            {activeCategory === 'beef' && (
              <PrimalDetailPanel
                selectedPrimalId={selectedBeefPrimal}
                onOpenCutModalById={handleOpenCutModalById}
              />
            )}
            {activeCategory === 'pork' && (
              <PorkDetailPanel
                selectedPrimalId={selectedPorkPrimal}
                onOpenCutModalById={handleOpenCutModalById}
              />
            )}
            {activeCategory === 'fish' && (
              <FishDetailPanel
                selectedPrimalId={selectedFishPrimal}
                onOpenCutModalById={handleOpenCutModalById}
              />
            )}
          </div>

        </div>
      </section>

      {/* 選肉決策助手小工具 */}
      <TasteWizard
        activeCategory={activeCategory}
        wizardData={currentData.wizard}
        cutsData={currentData.cuts}
        onOpenCutModal={(cut) => setActiveModalCut(cut)}
      />

      {/* 12 款精選細切部位卡片庫 */}
      <CutsLibrary
        activeCategory={activeCategory}
        cutsData={currentData.cuts}
        onOpenModal={(cut) => setActiveModalCut(cut)}
      />

      {/* 餐酒搭配科學專題與料理速查 */}
      <WinePairingSection
        activeCategory={activeCategory}
        winePrinciples={currentData.winePrinciples}
      />

      {/* 規格比較表 */}
      <FullCutTable
        activeCategory={activeCategory}
        cutsData={currentData.cuts}
        primalAreas={currentData.primals}
        onOpenModal={(cut) => setActiveModalCut(cut)}
      />

      {/* 常見問答 FAQ */}
      <FaqSection
        activeCategory={activeCategory}
        faqsData={currentData.faqs}
      />

      {/* 頁尾 */}
      <Footer
        activeCategory={activeCategory}
      />

      {/* 部位詳情 Modal 彈窗 */}
      <CutModal
        cut={activeModalCut}
        onClose={() => setActiveModalCut(null)}
      />

    </div>
  );
}
