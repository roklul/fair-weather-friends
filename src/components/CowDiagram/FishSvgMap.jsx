import React, { useState } from 'react';
import { FISH_PRIMAL_AREAS } from '../../data/fishData';
import { Info, Sparkles, ChevronRight } from '../Icons';

export default function FishSvgMap({ selectedPrimalId, onSelectPrimal, onSelectCutByName }) {
  const [hoveredPrimalId, setHoveredPrimalId] = useState(null);

  const getPrimal = (id) => FISH_PRIMAL_AREAS.find((p) => p.id === id) || FISH_PRIMAL_AREAS[2];
  const activePrimal = getPrimal(selectedPrimalId || hoveredPrimalId || 'fish-dorsal');

  return (
    <div className="relative w-full bg-parchment-50 border border-parchment-300 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
      {/* 頂部引導指示 */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-parchment-200">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
          <Info className="w-4 h-4 text-beef-burgundy" />
          <span>點擊魚體部位探索 9 大通用分切與料理指南</span>
        </div>
        <div className="text-xs text-charcoal-muted hidden sm:block">
          當前選中：<span className="font-bold text-beef-burgundy">{activePrimal.name} ({activePrimal.enName})</span>
        </div>
      </div>

      {/* SVG 古典海味版畫流線魚體向量圖 */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 580"
          className="w-full h-full select-none filter drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 45 度古典版畫排線紋理 */}
            <pattern id="fishEtch" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="7" stroke="#1C1917" strokeWidth="0.8" opacity="0.22" />
            </pattern>
            {/* 魚鱗幾何紋理 */}
            <pattern id="fishScalePattern" width="14" height="14" patternUnits="userSpaceOnUse">
              <path d="M 0,7 C 3.5,2.5 10.5,2.5 14,7 C 10.5,11.5 3.5,11.5 0,7 Z" fill="none" stroke="#1C1917" strokeWidth="0.65" opacity="0.2" />
            </pattern>
            {/* 交叉陰影 */}
            <pattern id="fishCross" width="9" height="9" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="9" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
              <line x1="0" y1="0" x2="9" y2="0" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
            </pattern>
            <filter id="fishGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1C1917" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* ========================================================
              底層：寫實魚鰭、尾鰭、胸鰭與魚體外廓
              ======================================================== */}
          <g className="opacity-95" fill="#D3DDD7" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            
            {/* 背鰭 (Dorsal Fin - 優美弧線與鰭條) */}
            <path d="M 370,145 C 440,85 580,95 640,155 L 610,172 L 400,165 Z" fill="#B2C5BC" />
            <path d="M 400,145 L 420,165 M 440,120 L 465,166 M 485,108 L 505,167 M 530,105 L 550,168 M 575,118 L 590,169 M 615,138 L 625,168" stroke="#1C1917" strokeWidth="1.6" />

            {/* 腹鰭 (Pelvic Fin) */}
            <path d="M 360,400 C 375,445 410,460 435,435 L 405,395 Z" fill="#B2C5BC" />
            <path d="M 380,410 L 415,445 M 395,405 L 425,435" stroke="#1C1917" strokeWidth="1.4" />

            {/* 臀鰭 (Anal Fin) */}
            <path d="M 570,395 C 610,445 660,450 685,410 L 650,380 Z" fill="#B2C5BC" />
            <path d="M 595,405 L 635,440 M 625,395 L 665,430 M 650,390 L 675,418" stroke="#1C1917" strokeWidth="1.4" />

            {/* 尾鰭 (Caudal Fin - 優雅深叉形尾鰭) */}
            <path
              d="M 840,290 C 880,195 955,145 972,165 C 950,240 925,285 948,325 C 970,365 962,430 892,395 C 865,360 845,315 840,290 Z"
              fill="#9FB5A9"
            />
            {/* 尾鰭放射鰭條刻線 */}
            <path d="M 852,285 Q 905,230 958,175 M 858,290 Q 905,265 942,258 M 858,295 Q 905,320 942,330 M 852,300 Q 905,350 958,400" stroke="#1C1917" strokeWidth="1.6" />

            {/* 胸鰭 (Pectoral Fin - 位於鰓蓋後方) */}
            <path d="M 285,320 C 330,330 375,370 365,390 C 340,395 305,360 275,335 Z" fill="#8EA69A" />
            <path d="M 295,330 Q 330,355 355,380 M 310,332 Q 335,350 350,368" stroke="#1C1917" strokeWidth="1.3" />

            {/* 魚眼與魚吻寫實刻線 */}
            <circle cx="145" cy="255" r="9.5" fill="#FAF8F5" stroke="#1C1917" strokeWidth="2.5" />
            <circle cx="145" cy="255" r="5" fill="#1C1917" />
            <circle cx="147" cy="253" r="1.5" fill="#FAF8F5" />
            {/* 上下唇與下顎線 */}
            <path d="M 55,270 C 75,268 95,272 110,268" fill="none" stroke="#1C1917" strokeWidth="2.2" />
            <path d="M 65,280 C 85,290 115,295 130,285" fill="none" stroke="#1C1917" strokeWidth="1.8" />
          </g>

          {/* ========================================================
              魚類海鮮通用分切色塊主體 (流線型仿生解剖分界)
              ======================================================== */}

          {/* 1. 魚頭部 (#D8963E 暖芥末赭黃) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-head')}
            onMouseEnter={() => setHoveredPrimalId('fish-head')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-head' ? 'url(#fishGlow)' : undefined}
          >
            <path
              d="M 55,270 C 85,195 155,175 235,170 L 235,310 C 205,345 165,365 115,345 C 75,325 55,295 55,270 Z"
              fill={selectedPrimalId === 'fish-head' ? '#E5A54B' : '#D8963E'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-head' ? 4 : 2.5}
            />
            <path
              d="M 55,270 C 85,195 155,175 235,170 L 235,310 C 205,345 165,365 115,345 C 75,325 55,295 55,270 Z"
              fill="url(#fishEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-head' ? 4 : 2.5}
            />
            <text x="155" y="215" textAnchor="middle" fill="#1C1917" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none">
              魚頭部
            </text>
            <text x="155" y="238" textAnchor="middle" fill="#1C1917" fontSize="12" opacity="0.9" className="font-serif italic pointer-events-none">
              臉頰膠質·砂鍋湯
            </text>
          </g>

          {/* 2. 魚下巴 (Kama / 琵琶骨 #B84A39 陶土磚紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-collar')}
            onMouseEnter={() => setHoveredPrimalId('fish-collar')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-collar' ? 'url(#fishGlow)' : undefined}
          >
            <path
              d="M 235,310 L 315,298 L 295,405 C 245,395 215,355 235,310 Z"
              fill={selectedPrimalId === 'fish-collar' ? '#C95543' : '#B84A39'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-collar' ? 4 : 2.5}
            />
            <path
              d="M 235,310 L 315,298 L 295,405 C 245,395 215,355 235,310 Z"
              fill="url(#fishEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-collar' ? 4 : 2.5}
            />
            <text x="268" y="352" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="14" className="font-sans pointer-events-none drop-shadow">
              魚下巴
            </text>
            <text x="268" y="370" textAnchor="middle" fill="#FAF8F5" fontSize="10" opacity="0.95" className="font-serif italic pointer-events-none">
              琵琶骨·鹽烤
            </text>
          </g>

          {/* 3. 背肉 / 背脊肉 (Dorsal #5B705B 鼠尾草灰綠) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-dorsal')}
            onMouseEnter={() => setHoveredPrimalId('fish-dorsal')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-dorsal' ? 'url(#fishGlow)' : undefined}
          >
            <path
              d="M 235,170 C 360,140 525,140 685,175 L 685,280 C 530,270 380,275 235,290 Z"
              fill={selectedPrimalId === 'fish-dorsal' ? '#6C836C' : '#5B705B'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-dorsal' ? 4 : 2.5}
            />
            <path
              d="M 235,170 C 360,140 525,140 685,175 L 685,280 C 530,270 380,275 235,290 Z"
              fill="url(#fishScalePattern)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-dorsal' ? 4 : 2.5}
            />
            <text x="460" y="218" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="21" className="font-sans pointer-events-none drop-shadow">
              背肉 / 背脊肉 (Dorsal)
            </text>
            <text x="460" y="242" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              午仔魚 · 鱸魚 · 白鯧 · 清蒸香煎主力
            </text>
          </g>

          {/* 4. 腹肉 / 魚肚 (Belly · Toro #D26C42 珊瑚橘) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-belly')}
            onMouseEnter={() => setHoveredPrimalId('fish-belly')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-belly' ? 'url(#fishGlow)' : undefined}
          >
            <path
              d="M 315,298 C 420,285 540,280 685,280 L 685,370 C 555,420 405,425 295,405 Z"
              fill={selectedPrimalId === 'fish-belly' ? '#DF7B52' : '#D26C42'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-belly' ? 4 : 2.5}
            />
            <path
              d="M 315,298 C 420,285 540,280 685,280 L 685,370 C 555,420 405,425 295,405 Z"
              fill="url(#fishEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-belly' ? 4 : 2.5}
            />
            <text x="495" y="338" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none drop-shadow">
              腹肉 / 魚肚 (Belly · Toro)
            </text>
            <text x="495" y="360" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              虱目魚肚 · 黑鮪大腹 · 濃郁油脂精華
            </text>
          </g>

          {/* 5. 尾段 / 尾肉 (Tail #7C2333 深勃根地酒紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-tail')}
            onMouseEnter={() => setHoveredPrimalId('fish-tail')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-tail' ? 'url(#fishGlow)' : undefined}
          >
            <path
              d="M 685,175 C 740,195 800,235 840,290 C 800,340 740,365 685,370 Z"
              fill={selectedPrimalId === 'fish-tail' ? '#922C3E' : '#7C2333'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-tail' ? 4 : 2.5}
            />
            <path
              d="M 685,175 C 740,195 800,235 840,290 C 800,340 740,365 685,370 Z"
              fill="url(#fishEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-tail' ? 4 : 2.5}
            />
            <text x="748" y="275" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="18" className="font-sans pointer-events-none drop-shadow">
              尾段
            </text>
            <text x="748" y="296" textAnchor="middle" fill="#FAF8F5" fontSize="11" opacity="0.95" className="font-serif italic pointer-events-none">
              白帶魚·紅燒
            </text>
          </g>

          {/* 外框裝飾線與圖說 */}
          <rect x="10" y="10" width="980" height="560" fill="none" stroke="#1C1917" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
          <g className="font-serif italic text-xs" fill="#1C1917" opacity="0.85">
            <text x="30" y="50" className="font-sans font-bold text-sm tracking-wider">FIG. 03 — TAIWAN FISH & SEAFOOD CUT ANATOMY</text>
            <text x="30" y="70" className="text-xs">9 Universal Culinary Anatomical Breakdown System</text>
          </g>
        </svg>
      </div>

      {/* 底部 9 大部位快速切換標籤列 */}
      <div className="mt-4 pt-4 border-t border-parchment-200">
        <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2">
          快速切換 9 大通用魚體部位：
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {FISH_PRIMAL_AREAS.map((primal) => {
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
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
