import React, { useState } from 'react';
import { PRIMAL_AREAS } from '../../data/beefData';
import { getLocalizedPrimal } from '../../data/primalsI18n';
import { TRANSLATIONS } from '../../data/translations';
import { Info, Sparkles, Check, ChevronRight } from '../Icons';

export default function CowSvgMap({ selectedPrimalId, onSelectPrimal, onSelectCutByName, currentLang = 'zh-TW' }) {
  const [hoveredPrimalId, setHoveredPrimalId] = useState(null);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];

  const getPrimal = (id) => PRIMAL_AREAS.find((p) => p.id === id) || PRIMAL_AREAS[0];
  const activePrimal = getLocalizedPrimal(getPrimal(selectedPrimalId || hoveredPrimalId || 'rib'), currentLang);

  return (
    <div className="relative w-full bg-parchment-50 border border-parchment-300 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
      {/* 頂部引導指示 */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-parchment-200">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
          <Info className="w-4 h-4 text-beef-burgundy" />
          <span>{t.anatomy.svgHint}</span>
        </div>
        <div className="text-xs text-charcoal-muted hidden sm:block">
          {t.anatomy.selectedPrefix}<span className="font-bold text-beef-burgundy">{activePrimal.name} ({activePrimal.enName})</span>
        </div>
      </div>

      {/* SVG 古典肉舖版畫風格牛隻部位圖 */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 580"
          className="w-full h-full select-none filter drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 45 度古典銅版畫排線紋理 */}
            <pattern id="beefEtching" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="7" stroke="#1C1917" strokeWidth="0.8" opacity="0.22" />
            </pattern>
            {/* 交叉陰影紋理 */}
            <pattern id="beefCrossHatch" width="9" height="9" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="9" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
              <line x1="0" y1="0" x2="9" y2="0" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
            </pattern>
            {/* 選中發光效果 */}
            <filter id="beefGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1C1917" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* ========================================================
              底層：寫實古典牛隻輪廓素描 (牛頭、牛角、牛腿、牛蹄、牛尾)
              ======================================================== */}
          <g className="opacity-95" fill="#E8E1D5" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            
            {/* 牛尾 (優美自然垂落) */}
            <path d="M 875,250 C 900,280 910,340 905,400 C 900,435 912,470 916,495 C 908,495 898,470 896,430 C 894,370 885,300 870,250 Z" fill="#D5CBB9" />
            {/* 尾毛束 */}
            <path d="M 912,485 C 925,510 930,535 918,550 C 908,540 902,515 908,485 Z" fill="#5A3E2D" />

            {/* 後腿延伸至蹄部 (遠側後腿) */}
            <path d="M 720,430 L 730,525 L 755,525 L 748,430 Z" fill="#C5B8A5" />
            <path d="M 728,525 L 725,548 L 758,548 L 755,525 Z" fill="#3D2B1F" />

            {/* 前腿延伸至蹄部 (遠側前腿) */}
            <path d="M 285,420 L 290,525 L 315,525 L 310,420 Z" fill="#C5B8A5" />
            <path d="M 288,525 L 285,548 L 318,548 L 315,525 Z" fill="#3D2B1F" />

            {/* 近側前腿骨骼輪廓 (連至前蹄) */}
            <path d="M 200,440 L 205,525 L 235,525 L 230,440 Z" fill="#B3A28D" />
            <path d="M 203,525 L 200,548 L 238,548 L 235,525 Z" fill="#2E1F16" />

            {/* 近側後腿骨骼輪廓 (連至後蹄) */}
            <path d="M 810,440 L 815,525 L 845,525 L 840,440 Z" fill="#B3A28D" />
            <path d="M 813,525 L 810,548 L 848,548 L 845,525 Z" fill="#2E1F16" />

            {/* 典雅寫實牛頭、耳朵與優美牛角 */}
            {/* 遠側牛角 */}
            <path d="M 100,165 C 90,120 115,85 135,78 C 128,105 118,135 110,165 Z" fill="#5A3E2D" stroke="#1C1917" strokeWidth="2" />
            {/* 遠側耳朵 */}
            <path d="M 125,185 C 145,175 168,190 160,205 C 145,205 135,195 125,185 Z" fill="#C5B8A5" />
            
            {/* 牛頭主體 (額頭、口鼻、下顎與喉部垂皮) */}
            <path
              d="M 155,230 C 135,195 105,175 80,185 C 60,195 45,225 35,260 C 28,290 35,320 55,335 C 75,348 105,345 135,310 C 150,290 160,265 170,250 Z"
              fill="#E8E1D5"
              stroke="#1C1917"
              strokeWidth="2.5"
            />
            {/* 近側牛角 */}
            <path d="M 85,180 C 72,135 95,95 118,88 C 112,115 102,150 92,180 Z" fill="#78553E" stroke="#1C1917" strokeWidth="2.5" />
            {/* 近側耳朵 */}
            <path d="M 130,210 C 155,200 178,218 168,235 C 150,235 140,225 130,210 Z" fill="#D5CBB9" stroke="#1C1917" strokeWidth="2" />
            
            {/* 牛臉部寫實細節 (眼睛、口鼻孔、唇線與面部刻線) */}
            <circle cx="85" cy="225" r="5" fill="#1C1917" />
            <circle cx="87" cy="223" r="1.5" fill="#FAF8F5" />
            <ellipse cx="48" cy="295" rx="6" ry="4" fill="#1C1917" />
            <path d="M 40,305 C 55,320 75,320 85,308" fill="none" stroke="#1C1917" strokeWidth="2.2" />
            {/* 喉部垂皮折線 (Dewlap) */}
            <path d="M 95,335 C 120,370 150,390 180,395" fill="none" stroke="#1C1917" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
          </g>

          {/* ========================================================
              8 大解剖分切色塊主體 (8 Primal Cuts - 自然生物肌肉分界線)
              ======================================================== */}

          {/* 1. 肩胛部 Chuck (#B84A39 陶土磚紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('chuck')}
            onMouseEnter={() => setHoveredPrimalId('chuck')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chuck' ? 'url(#beefGlow)' : undefined}
          >
            <path
              d="M 160,240 C 185,185 240,155 330,150 L 375,155 L 375,305 L 290,305 L 275,385 C 240,390 200,380 180,335 C 165,300 155,265 160,240 Z"
              fill={selectedPrimalId === 'chuck' ? '#C95543' : '#B84A39'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chuck' ? 4 : 2.5}
            />
            <path
              d="M 160,240 C 185,185 240,155 330,150 L 375,155 L 375,305 L 290,305 L 275,385 C 240,390 200,380 180,335 C 165,300 155,265 160,240 Z"
              fill="url(#beefEtching)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chuck' ? 4 : 2.5}
            />
            <text x="270" y="235" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="21" className="font-sans pointer-events-none drop-shadow">
              肩胛部
            </text>
            <text x="270" y="258" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              CHUCK (板腱·翼板)
            </text>
          </g>

          {/* 2. 肋脊部 Rib (#D8963E 暖芥末赭黃) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('rib')}
            onMouseEnter={() => setHoveredPrimalId('rib')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'rib' ? 'url(#beefGlow)' : undefined}
          >
            <path
              d="M 375,155 C 440,152 505,152 530,156 L 530,305 L 375,305 Z"
              fill={selectedPrimalId === 'rib' ? '#E5A54B' : '#D8963E'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'rib' ? 4 : 2.5}
            />
            <path
              d="M 375,155 C 440,152 505,152 530,156 L 530,305 L 375,305 Z"
              fill="url(#beefEtching)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'rib' ? 4 : 2.5}
            />
            <text x="452" y="225" textAnchor="middle" fill="#1C1917" fontWeight="bold" fontSize="22" className="font-sans pointer-events-none">
              肋脊部
            </text>
            <text x="452" y="248" textAnchor="middle" fill="#1C1917" fontSize="13" opacity="0.9" className="font-serif italic pointer-events-none">
              RIB (肋眼·牛小排)
            </text>
          </g>

          {/* 3. 腰脊部 Loin (#5B705B 鼠尾草灰綠) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('loin')}
            onMouseEnter={() => setHoveredPrimalId('loin')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'loin' ? 'url(#beefGlow)' : undefined}
          >
            <path
              d="M 530,156 C 580,160 640,165 700,175 L 700,315 L 530,305 Z"
              fill={selectedPrimalId === 'loin' ? '#6C836C' : '#5B705B'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'loin' ? 4 : 2.5}
            />
            <path
              d="M 530,156 C 580,160 640,165 700,175 L 700,315 L 530,305 Z"
              fill="url(#beefEtching)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'loin' ? 4 : 2.5}
            />
            <text x="615" y="225" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="21" className="font-sans pointer-events-none drop-shadow">
              腰脊部
            </text>
            <text x="615" y="248" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              LOIN (菲力·紐約客·沙朗)
            </text>
          </g>

          {/* 4. 後腿部 Round (#7C2333 深勃根地酒紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('round')}
            onMouseEnter={() => setHoveredPrimalId('round')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'round' ? 'url(#beefGlow)' : undefined}
          >
            <path
              d="M 700,175 C 760,185 830,205 875,250 C 885,290 880,360 860,430 L 780,430 L 795,350 L 700,315 Z"
              fill={selectedPrimalId === 'round' ? '#922C3E' : '#7C2333'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'round' ? 4 : 2.5}
            />
            <path
              d="M 700,175 C 760,185 830,205 875,250 C 885,290 880,360 860,430 L 780,430 L 795,350 L 700,315 Z"
              fill="url(#beefEtching)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'round' ? 4 : 2.5}
            />
            <text x="785" y="280" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="21" className="font-sans pointer-events-none drop-shadow">
              後腿部
            </text>
            <text x="785" y="303" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              ROUND (臀肉·和尚頭)
            </text>
          </g>

          {/* 5. 前胸部 Brisket (#A89279 暖燕麥褐) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('brisket')}
            onMouseEnter={() => setHoveredPrimalId('brisket')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'brisket' ? 'url(#beefGlow)' : undefined}
          >
            <path
              d="M 290,305 L 375,305 L 375,410 L 275,410 L 290,305 Z"
              fill={selectedPrimalId === 'brisket' ? '#B8A48D' : '#A89279'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'brisket' ? 4 : 2.5}
            />
            <path
              d="M 290,305 L 375,305 L 375,410 L 275,410 L 290,305 Z"
              fill="url(#beefCrossHatch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'brisket' ? 4 : 2.5}
            />
            <text x="332" y="355" textAnchor="middle" fill="#1C1917" fontWeight="bold" fontSize="16" className="font-sans pointer-events-none">
              前胸部
            </text>
            <text x="332" y="375" textAnchor="middle" fill="#1C1917" fontSize="11" opacity="0.9" className="font-serif italic pointer-events-none">
              BRISKET
            </text>
          </g>

          {/* 6. 胸腹部 Plate (#D26C42 珊瑚橘) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('plate')}
            onMouseEnter={() => setHoveredPrimalId('plate')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'plate' ? 'url(#beefGlow)' : undefined}
          >
            <path
              d="M 375,305 L 530,305 L 530,410 C 475,415 420,415 375,410 Z"
              fill={selectedPrimalId === 'plate' ? '#DF7B52' : '#D26C42'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'plate' ? 4 : 2.5}
            />
            <path
              d="M 375,305 L 530,305 L 530,410 C 475,415 420,415 375,410 Z"
              fill="url(#beefEtching)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'plate' ? 4 : 2.5}
            />
            <text x="452" y="350" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              胸腹部
            </text>
            <text x="452" y="372" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              PLATE (牛五花·牛腩)
            </text>
          </g>

          {/* 7. 腹脇部 Flank (#333A42 炭墨黑) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('flank')}
            onMouseEnter={() => setHoveredPrimalId('flank')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'flank' ? 'url(#beefGlow)' : undefined}
          >
            <path
              d="M 530,305 L 700,315 L 700,380 C 650,405 580,412 530,410 Z"
              fill={selectedPrimalId === 'flank' ? '#444D57' : '#333A42'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'flank' ? 4 : 2.5}
            />
            <path
              d="M 530,305 L 700,315 L 700,380 C 650,405 580,412 530,410 Z"
              fill="url(#beefEtching)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'flank' ? 4 : 2.5}
            />
            <text x="615" y="352" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="18" className="font-sans pointer-events-none drop-shadow">
              腹脇部
            </text>
            <text x="615" y="372" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              FLANK (牛腩條·側腹)
            </text>
          </g>

          {/* 8. 腱子部 Shank (#6B4C38 雕刻深褐 - 前腱與後腱) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('shank')}
            onMouseEnter={() => setHoveredPrimalId('shank')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'shank' ? 'url(#beefGlow)' : undefined}
          >
            {/* 前腱肉塊 */}
            <path
              d="M 215,370 L 275,385 L 275,445 L 205,440 Z"
              fill={selectedPrimalId === 'shank' ? '#7F5B44' : '#6B4C38'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'shank' ? 3.5 : 2}
            />
            <path
              d="M 215,370 L 275,385 L 275,445 L 205,440 Z"
              fill="url(#beefCrossHatch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'shank' ? 3.5 : 2}
            />
            <text x="242" y="415" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="14" className="font-sans pointer-events-none drop-shadow">
              前腱
            </text>

            {/* 後腱肉塊 */}
            <path
              d="M 700,360 L 795,350 L 780,440 L 705,430 Z"
              fill={selectedPrimalId === 'shank' ? '#7F5B44' : '#6B4C38'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'shank' ? 3.5 : 2}
            />
            <path
              d="M 700,360 L 795,350 L 780,440 L 705,430 Z"
              fill="url(#beefCrossHatch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'shank' ? 3.5 : 2}
            />
            <text x="745" y="402" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="15" className="font-sans pointer-events-none drop-shadow">
              後腱
            </text>
          </g>

          {/* 外框裝飾線與圖說 */}
          <rect x="10" y="10" width="980" height="560" fill="none" stroke="#1C1917" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
          <g className="font-serif italic text-xs" fill="#1C1917" opacity="0.85">
            <text x="30" y="50" className="font-sans font-bold text-sm tracking-wider">FIG. 01 — PRIMAL BEEF CUT ANATOMY</text>
            <text x="30" y="70" className="text-xs">Standard USDA 8 Primal Breakdown System</text>
          </g>
        </svg>
      </div>

      {/* 底部色票快速切換標籤列 */}
      <div className="mt-4 pt-4 border-t border-parchment-200">
        <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2">
          {t.anatomy.quickSwitch}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {PRIMAL_AREAS.map((primal) => {
            const isSelected = selectedPrimalId === primal.id;
            const lp = getLocalizedPrimal(primal, currentLang);
            return (
              <button
                key={primal.id}
                onClick={() => onSelectPrimal(primal.id)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-charcoal text-white border-charcoal shadow-sm'
                    : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: primal.color }} />
                <span>{lp.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
