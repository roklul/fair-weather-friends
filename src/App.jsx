import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CowSvgMap from './components/CowDiagram/CowSvgMap';
import PrimalDetailPanel from './components/CowDiagram/PrimalDetailPanel';
import TasteWizard from './components/Wizard/TasteWizard';
import CutsLibrary from './components/CutCard/CutsLibrary';
import WinePairingSection from './components/WineSection/WinePairingSection';
import FullCutTable from './components/DataTable/FullCutTable';
import FaqSection from './components/Faq/FaqSection';
import Footer from './components/Footer';
import CutModal from './components/CutCard/CutModal';
import { BEEF_CUTS_DATA } from './data/beefData';
import { Compass, Sparkles } from './components/Icons';

export default function App() {
  const [selectedPrimalId, setSelectedPrimalId] = useState('rib');
  const [activeModalCut, setActiveModalCut] = useState(null);

  // 處理由名稱開啟 Modal
  const handleOpenCutModalById = (cutId) => {
    const targetCut = BEEF_CUTS_DATA.find((c) => c.id === cutId);
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
      
      {/* 頂部導覽列 */}
      <Navbar />

      {/* 首屏 Hero */}
      <Hero onQuickFilter={handleQuickFilter} />

      {/* 互動式牛隻 8 大部位分切圖 Section */}
      <section id="cow-diagram" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-amber-800" />
            <span>解剖圖鑑 · 8 大美式分切系統 (USDA Standard Primals)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            互動牛肉部位圖
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base">
            點選下方牛隻向量色塊，立即查看部位解剖位置、肉質特色、推薦料理與延伸細分切清單。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 左側向量地圖 (7 欄) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <CowSvgMap
              selectedPrimalId={selectedPrimalId}
              onSelectPrimal={(id) => setSelectedPrimalId(id)}
              onSelectCutByName={handleOpenCutModalById}
            />
          </div>

          {/* 右側部位資訊面板 (5 欄) */}
          <div className="lg:col-span-5">
            <PrimalDetailPanel
              selectedPrimalId={selectedPrimalId}
              onOpenCutModalById={handleOpenCutModalById}
            />
          </div>
        </div>
      </section>

      {/* 選肉決策助手小工具 */}
      <TasteWizard onOpenCutModal={(cut) => setActiveModalCut(cut)} />

      {/* 12 款精選細切部位卡片庫 */}
      <CutsLibrary onOpenModal={(cut) => setActiveModalCut(cut)} />

      {/* 餐酒搭配科學專題與料理速查 */}
      <WinePairingSection />

      {/* 規格比較表 */}
      <FullCutTable onOpenModal={(cut) => setActiveModalCut(cut)} />

      {/* 常見問答 FAQ */}
      <FaqSection />

      {/* 頁尾 */}
      <Footer />

      {/* 部位詳情 Modal 彈窗 */}
      <CutModal
        cut={activeModalCut}
        onClose={() => setActiveModalCut(null)}
      />

    </div>
  );
}
