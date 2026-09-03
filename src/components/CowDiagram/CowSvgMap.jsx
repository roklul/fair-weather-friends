import React, { useState } from 'react';
import { PRIMAL_AREAS } from '../../data/beefData';
import { Info, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function CowSvgMap({ selectedPrimalId, onSelectPrimal, onSelectCutByName }) {
  const [hoveredPrimalId, setHoveredPrimalId] = useState(null);

  const getPrimal = (id) => PRIMAL_AREAS.find((p) => p.id === id) || PRIMAL_AREAS[0];
  const activePrimal = getPrimal(selectedPrimalId || hoveredPrimalId || 'rib');

  return (
    <div className="relative w-full bg-parchment-50 border border-parchment-300 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
      {/* 頂部引導指示 */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-parchment-200">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
          <Info className="w-4 h-4 text-beef-burgundy" />
          <span>點擊牛身色塊探索 8 大部位解剖細節</span>
        </div>
        <div className="text-xs text-charcoal-muted hidden sm:block">
          當前選中：<span className="font-bold text-beef-burgundy">{activePrimal.name} ({activePrimal.enName})</span>
        </div>
      </div>

      {/* SVG 牛隻部位向量圖 */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 580"
          className="w-full h-full select-none filter drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 45 度古典版畫排線紋理 */}
            <pattern id="etchingLines" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#1C1917" strokeWidth="0.75" opacity="0.22" />
            </pattern>
            {/* 交叉排線陰影 */}
            <pattern id="etchingCross" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
              <line x1="0" y1="0" x2="10" y2="0" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
            </pattern>
            {/* 濾鏡與陰影 */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1C1917" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* 牛隻解剖輪廓底稿背景 (牛頭、牛角、牛尾、蹄部) */}
          <g className="opacity-90" fill="#E4DCCF" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* 牛頭與臉部 */}
            <path d="M 80,180 C 70,160 50,170 35,210 C 25,235 30,280 45,300 C 60,315 90,320 115,290 C 130,270 145,260 160,250 Z" />
            {/* 牛角 */}
            <path d="M 75,175 C 65,130 90,95 110,90 C 105,115 95,145 85,170 Z" fill="#6B4C38" />
            <path d="M 95,170 C 95,120 120,90 140,80 C 130,110 115,145 105,168 Z" fill="#5A3E2D" />
            {/* 牛耳 */}
            <path d="M 125,200 C 145,190 170,205 160,225 C 145,225 135,215 125,200 Z" fill="#CFC3B2" />
            {/* 眼睛與鼻孔刻線 */}
            <circle cx="85" cy="225" r="4" fill="#1C1917" />
            <ellipse cx="45" cy="285" rx="5" ry="3" fill="#1C1917" />
            <path d="M 40,295 Q 60,305 75,290" fill="none" strokeWidth="2" />

            {/* 牛尾 */}
            <path d="M 870,220 C 895,240 910,290 905,360 C 900,400 915,440 920,470 C 910,475 895,450 895,410 C 895,350 885,270 865,220 Z" fill="#CFC3B2" />
            {/* 尾毛 */}
            <path d="M 915,450 C 930,480 935,510 925,530 C 915,520 905,490 915,450 Z" fill="#6B4C38" />

            {/* 前腳蹄部 */}
            <path d="M 230,480 L 225,540 L 265,540 L 260,480 Z" fill="#423023" />
            <path d="M 330,480 L 325,540 L 365,540 L 360,480 Z" fill="#423023" />
            {/* 後腳蹄部 */}
            <path d="M 720,480 L 715,540 L 755,540 L 750,480 Z" fill="#423023" />
            <path d="M 820,480 L 815,540 L 855,540 L 850,480 Z" fill="#423023" />
          </g>

          {/* ========================================================
              8 大分切色塊主體 (美式 Primal Cuts)
              ======================================================== */}

          {/* 1. 肩胛部 Chuck (#B84A39 陶土磚紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('chuck')}
            onMouseEnter={() => setHoveredPrimalId('chuck')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chuck' ? 'url(#softGlow)' : undefined}
          >
            <path
              d="M 160,250 C 180,210 220,165 300,160 L 375,160 L 375,305 L 290,305 L 290,370 L 220,360 L 205,320 L 160,250 Z"
              fill={selectedPrimalId === 'chuck' ? '#C95543' : '#B84A39'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chuck' ? 4 : 2.5}
            />
            <path
              d="M 160,250 C 180,210 220,165 300,160 L 375,160 L 375,305 L 290,305 L 290,370 L 220,360 L 205,320 L 160,250 Z"
              fill="url(#etchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chuck' ? 4 : 2.5}
            />
            {/* 標籤文字 */}
            <text x="270" y="240" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none drop-shadow">
              肩胛部
            </text>
            <text x="270" y="262" textAnchor="middle" fill="#FAF8F5" fontSize="14" opacity="0.95" className="font-serif italic pointer-events-none">
              CHUCK
            </text>
          </g>

          {/* 2. 肋脊部 Rib (#D8963E 暖芥末赭黃) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('rib')}
            onMouseEnter={() => setHoveredPrimalId('rib')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'rib' ? 'url(#softGlow)' : undefined}
          >
            <path
              d="M 375,160 L 525,160 L 525,280 L 375,280 Z"
              fill={selectedPrimalId === 'rib' ? '#E5A54B' : '#D8963E'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'rib' ? 4 : 2.5}
            />
            <path
              d="M 375,160 L 525,160 L 525,280 L 375,280 Z"
              fill="url(#etchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'rib' ? 4 : 2.5}
            />
            <text x="450" y="215" textAnchor="middle" fill="#1C1917" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none">
              肋脊部
            </text>
            <text x="450" y="237" textAnchor="middle" fill="#1C1917" fontSize="14" opacity="0.9" className="font-serif italic pointer-events-none">
              RIB (肋眼·牛小排)
            </text>
          </g>

          {/* 3. 腰脊部 Loin (#5B705B 鼠尾草灰綠) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('loin')}
            onMouseEnter={() => setHoveredPrimalId('loin')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'loin' ? 'url(#softGlow)' : undefined}
          >
            <path
              d="M 525,160 L 690,165 L 690,290 L 525,280 Z"
              fill={selectedPrimalId === 'loin' ? '#6C836C' : '#5B705B'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'loin' ? 4 : 2.5}
            />
            <path
              d="M 525,160 L 690,165 L 690,290 L 525,280 Z"
              fill="url(#etchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'loin' ? 4 : 2.5}
            />
            <text x="607" y="218" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none drop-shadow">
              腰脊部
            </text>
            <text x="607" y="240" textAnchor="middle" fill="#FAF8F5" fontSize="14" opacity="0.95" className="font-serif italic pointer-events-none">
              LOIN (菲力·紐約客)
            </text>
          </g>

          {/* 4. 後腿部 Round (#7C2333 深勃根地酒紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('round')}
            onMouseEnter={() => setHoveredPrimalId('round')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'round' ? 'url(#softGlow)' : undefined}
          >
            <path
              d="M 690,165 C 750,175 830,195 870,225 C 885,270 880,360 850,420 L 780,420 L 780,330 L 690,290 Z"
              fill={selectedPrimalId === 'round' ? '#922C3E' : '#7C2333'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'round' ? 4 : 2.5}
            />
            <path
              d="M 690,165 C 750,175 830,195 870,225 C 885,270 880,360 850,420 L 780,420 L 780,330 L 690,290 Z"
              fill="url(#etchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'round' ? 4 : 2.5}
            />
            <text x="785" y="270" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none drop-shadow">
              後腿部
            </text>
            <text x="785" y="292" textAnchor="middle" fill="#FAF8F5" fontSize="14" opacity="0.95" className="font-serif italic pointer-events-none">
              ROUND
            </text>
          </g>

          {/* 5. 前胸部 Brisket (#A89279 暖燕麥褐) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('brisket')}
            onMouseEnter={() => setHoveredPrimalId('brisket')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'brisket' ? 'url(#softGlow)' : undefined}
          >
            <path
              d="M 290,305 L 375,305 L 375,395 L 290,395 Z"
              fill={selectedPrimalId === 'brisket' ? '#B8A38B' : '#A89279'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'brisket' ? 4 : 2.5}
            />
            <path
              d="M 290,305 L 375,305 L 375,395 L 290,395 Z"
              fill="url(#etchingCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'brisket' ? 4 : 2.5}
            />
            <text x="332" y="348" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="17" className="font-sans pointer-events-none drop-shadow">
              前胸部
            </text>
            <text x="332" y="368" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              BRISKET
            </text>
          </g>

          {/* 6. 胸腹部 Short Plate (#D26C42 珊瑚橘) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('plate')}
            onMouseEnter={() => setHoveredPrimalId('plate')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'plate' ? 'url(#softGlow)' : undefined}
          >
            <path
              d="M 375,280 L 525,280 L 525,395 L 375,395 Z"
              fill={selectedPrimalId === 'plate' ? '#DF7B52' : '#D26C42'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'plate' ? 4 : 2.5}
            />
            <path
              d="M 375,280 L 525,280 L 525,395 L 375,395 Z"
              fill="url(#etchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'plate' ? 4 : 2.5}
            />
            <text x="450" y="335" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="18" className="font-sans pointer-events-none drop-shadow">
              胸腹部
            </text>
            <text x="450" y="355" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              PLATE (牛五花)
            </text>
          </g>

          {/* 7. 腹脇部 Flank (#333A42 炭墨黑) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('flank')}
            onMouseEnter={() => setHoveredPrimalId('flank')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'flank' ? 'url(#softGlow)' : undefined}
          >
            <path
              d="M 525,280 L 690,290 L 690,395 L 525,395 Z"
              fill={selectedPrimalId === 'flank' ? '#444C56' : '#333A42'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'flank' ? 4 : 2.5}
            />
            <path
              d="M 525,280 L 690,290 L 690,395 L 525,395 Z"
              fill="url(#etchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'flank' ? 4 : 2.5}
            />
            <text x="607" y="335" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="18" className="font-sans pointer-events-none drop-shadow">
              腹脇部
            </text>
            <text x="607" y="355" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              FLANK
            </text>
          </g>

          {/* 8. 腱子部 Shank (#6B4C38 雕刻深褐) */}
          {/* 前腱 Fore Shank */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('shank')}
            onMouseEnter={() => setHoveredPrimalId('shank')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'shank' ? 'url(#softGlow)' : undefined}
          >
            <path
              d="M 220,360 L 290,370 L 290,470 L 230,470 Z"
              fill={selectedPrimalId === 'shank' ? '#7D5A44' : '#6B4C38'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'shank' ? 4 : 2.5}
            />
            <path
              d="M 220,360 L 290,370 L 290,470 L 230,470 Z"
              fill="url(#etchingCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'shank' ? 4 : 2.5}
            />
            <text x="258" y="425" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="14" className="font-sans pointer-events-none">
              前腱
            </text>
          </g>

          {/* 後腱 Hind Shank */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('shank')}
            onMouseEnter={() => setHoveredPrimalId('shank')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'shank' ? 'url(#softGlow)' : undefined}
          >
            <path
              d="M 780,330 L 780,470 L 720,470 L 690,395 L 780,330 Z"
              fill={selectedPrimalId === 'shank' ? '#7D5A44' : '#6B4C38'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'shank' ? 4 : 2.5}
            />
            <path
              d="M 780,330 L 780,470 L 720,470 L 690,395 L 780,330 Z"
              fill="url(#etchingCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'shank' ? 4 : 2.5}
            />
            <text x="745" y="415" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="14" className="font-sans pointer-events-none">
              後腱
            </text>
          </g>

          {/* 全局刻線裝飾與出版物風格外框線 */}
          <rect x="10" y="10" width="980" height="560" fill="none" stroke="#1C1917" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
          <circle cx="20" cy="20" r="3" fill="#1C1917" opacity="0.5" />
          <circle cx="980" cy="20" r="3" fill="#1C1917" opacity="0.5" />
          <circle cx="20" cy="560" r="3" fill="#1C1917" opacity="0.5" />
          <circle cx="980" cy="560" r="3" fill="#1C1917" opacity="0.5" />

          {/* 雜誌圖表批註標籤 (Annotation Callouts) */}
          <g className="font-serif italic text-xs" fill="#1C1917" opacity="0.85">
            <text x="30" y="50" className="font-sans font-bold text-sm tracking-wider">FIG. 01 — PRIMAL BEEF CUT ANATOMY</text>
            <text x="30" y="70" className="text-xs">Standard USDA 8 Primal Breakdown System</text>
          </g>
        </svg>
      </div>

      {/* 底部色票快速切換標籤列（手機與桌面通用） */}
      <div className="mt-4 pt-4 border-t border-parchment-200">
        <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2">
          快速切換大分切：
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {PRIMAL_AREAS.map((primal) => {
            const isSelected = selectedPrimalId === primal.id;
            return (
              <button
                key={primal.id}
                onClick={() => onSelectPrimal(primal.id)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium border transition-all ${
                  isSelected
                    ? 'bg-charcoal text-white border-charcoal shadow-sm'
                    : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: primal.color }} />
                <span>{primal.name}</span>
                <span className="text-[10px] opacity-75 font-serif">{primal.enName}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
