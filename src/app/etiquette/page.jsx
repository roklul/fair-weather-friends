'use client';

import React, { useState } from 'react';
import DemoDisclaimer from '../../components/Compliance/DemoDisclaimer';
import EtiquetteNavbar from '../../components/Etiquette/EtiquetteNavbar';
import EtiquetteHero from '../../components/Etiquette/EtiquetteHero';
import CultureComparison from '../../components/Etiquette/CultureComparison';
import RoundTableVisualizer from '../../components/Etiquette/RoundTableVisualizer';
import WesternTableVisualizer from '../../components/Etiquette/WesternTableVisualizer';
import ChineseDiningGuide from '../../components/Etiquette/ChineseDiningGuide';
import WesternDiningGuide from '../../components/Etiquette/WesternDiningGuide';
import FauxPasTable from '../../components/Etiquette/FauxPasTable';
import DiningScenarios from '../../components/Etiquette/DiningScenarios';
import CopyrightAndReliability from '../../components/Etiquette/CopyrightAndReliability';
import InteractiveChecklist from '../../components/Etiquette/InteractiveChecklist';
import EtiquetteFooter from '../../components/Etiquette/EtiquetteFooter';
import { ETIQUETTE_DATA } from '../../data/etiquetteData';

export default function EtiquettePage() {
  const [currentLang, setCurrentLang] = useState('zh-TW'); // 'zh-TW' | 'en' | 'ja'

  const data = ETIQUETTE_DATA[currentLang] || ETIQUETTE_DATA['zh-TW'];

  return (
    <div className="min-h-screen flex flex-col paper-texture">
      
      {/* 全站展示型免責橫幅 */}
      <DemoDisclaimer currentLang={currentLang} />

      {/* 專用頂部導航列 */}
      <EtiquetteNavbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
      />

      {/* 首屏 Hero */}
      <EtiquetteHero
        data={data}
        currentLang={currentLang}
      />

      {/* 1. 文化結構差異對比 */}
      <CultureComparison
        data={data}
        currentLang={currentLang}
      />

      {/* 2. 中餐座位安排 (互動式圓桌 SVG + 旋轉桌守則 + 6 大實務決策表) */}
      <RoundTableVisualizer
        data={data}
        currentLang={currentLang}
      />

      {/* 3. 西餐座位與餐桌擺設 (互動式西餐餐位 SVG + 上菜流程模擬器 + 餐具辨識表) */}
      <WesternTableVisualizer
        data={data}
        currentLang={currentLang}
      />

      {/* 4. 中餐用餐流程與筷子禮儀 (9 大筷子禁忌視覺卡 + 扣指謝茶禮) */}
      <ChineseDiningGuide
        data={data}
        currentLang={currentLang}
      />

      {/* 5. 西餐用餐流程與餐具語言 (餐巾 7 守則 + 刀叉 3 大服務訊號 + 優雅喝湯) */}
      <WesternDiningGuide
        data={data}
        currentLang={currentLang}
      />

      {/* 6. 13 大常見失禮行為深度對照表 (搜尋過濾 + 改善對策) */}
      <FauxPasTable
        data={data}
        currentLang={currentLang}
      />

      {/* 7. 三大用餐場合 (自助餐 Buffet 8 準則 + 正式宴會 + 日常家庭幼兒) */}
      <DiningScenarios
        data={data}
        currentLang={currentLang}
      />

      {/* 8. 版權安全圖像方案 & 9. 資料可靠性與 5 步判斷順序 */}
      <CopyrightAndReliability
        data={data}
        currentLang={currentLang}
      />

      {/* 10. 實用互動檢查清單 & 結語五大核心原則 */}
      <InteractiveChecklist
        data={data}
        currentLang={currentLang}
      />

      {/* 專題頁尾 */}
      <EtiquetteFooter
        currentLang={currentLang}
      />

    </div>
  );
}
