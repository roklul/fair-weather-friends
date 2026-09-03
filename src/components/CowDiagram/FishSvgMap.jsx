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
          <span>點擊魚隻部位探索 9 大通用分切與料理指南</span>
        </div>
        <div className="text-xs text-charcoal-muted hidden sm:block">
          當前選中：<span className="font-bold text-beef-burgundy">{activePrimal.name} ({activePrimal.enName})</span>
        </div>
      </div>

      {/* SVG 魚類海鮮部位向量圖 */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 580"
          className="w-full h-full select-none filter drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 45 度古典版畫排線紋理 */}
            <pattern id="fishEtchingLines" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#1C1917" strokeWidth="0.75" opacity="0.22" />
            </pattern>
            {/* 交叉排線陰影 */}
            <pattern id="fishEtchingCross" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
              <line x1="0" y1="0" x2="10" y2="0" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
            </pattern>
            {/* 魚鱗幾何紋理 */}
            <pattern id="fishScales" width="12" height="12" patternUnits="userSpaceOnUse">
              <path d="M 0,6 C 3,2 9,2 12,6 C 9,10 3,10 0,6 Z" fill="none" stroke="#1C1917" strokeWidth="0.6" opacity="0.2" />
            </pattern>
            <filter id="fishSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1C1917" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* 魚隻輪廓底稿背景 (背鰭、尾鰭、胸鰭、魚吻) */}
          <g className="opacity-90" fill="#DDE5E0" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* 背鰭 (Dorsal Fin) */}
            <path d="M 380,130 C 440,90 560,95 620,150 L 590,165 L 420,160 Z" fill="#B9CCC2" />
            <path d="M 400,140 L 420,160 M 450,120 L 470,160 M 510,115 L 530,160 M 570,125 L 580,160" stroke="#1C1917" strokeWidth="1.5" />

            {/* 腹鰭與臀鰭 (Pelvic & Anal Fin) */}
            <path d="M 540,410 C 580,450 630,460 660,420 L 630,390 L 550,400 Z" fill="#B9CCC2" />

            {/* 尾鰭 (Caudal Fin) */}
            <path d="M 850,290 C 890,200 960,160 970,180 C 950,250 930,290 950,330 C 970,360 960,420 890,380 C 870,350 850,310 850,290 Z" fill="#A8BFB3" />
            {/* 尾鰭放射刻線 */}
            <path d="M 860,285 Q 910,240 955,190 M 865,290 Q 905,270 940,265 M 865,295 Q 905,315 940,325 M 860,300 Q 910,340 955,390" stroke="#1C1917" strokeWidth="1.5" />

            {/* 胸鰭 (Pectoral Fin) */}
            <path d="M 290,330 C 330,340 370,380 360,400 C 340,405 310,370 280,345 Z" fill="#9FB5A9" />

            {/* 魚眼與魚吻刻線 */}
            <circle cx="150" cy="255" r="9" fill="#FAF8F5" stroke="#1C1917" strokeWidth="2.5" />
            <circle cx="150" cy="255" r="4.5" fill="#1C1917" />
            <path d="M 70,280 C 90,285 110,295 125,290" fill="none" strokeWidth="2" />
          </g>

          {/* ========================================================
              魚類海鮮通用分切色塊主體 (Universal Fish Cuts)
              ======================================================== */}

          {/* 1. 魚頭部 (#D8963E 暖芥末赭黃) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-head')}
            onMouseEnter={() => setHoveredPrimalId('fish-head')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-head' ? 'url(#fishSoftGlow)' : undefined}
          >
            <path
              d="M 60,270 C 90,200 160,180 240,175 L 240,320 C 210,350 170,370 120,350 C 80,330 60,300 60,270 Z"
              fill={selectedPrimalId === 'fish-head' ? '#E5A54B' : '#D8963E'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-head' ? 4 : 2.5}
            />
            <path
              d="M 60,270 C 90,200 160,180 240,175 L 240,320 C 210,350 170,370 120,350 C 80,330 60,300 60,270 Z"
              fill="url(#fishEtchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-head' ? 4 : 2.5}
            />
            <text x="160" y="220" textAnchor="middle" fill="#1C1917" fontWeight="bold" fontSize="18" className="font-sans pointer-events-none">
              魚頭部
            </text>
            <text x="160" y="240" textAnchor="middle" fill="#1C1917" fontSize="12" opacity="0.9" className="font-serif italic pointer-events-none">
              臉頰膠質·砂鍋湯
            </text>
          </g>

          {/* 2. 魚下巴 (Kama / 琵琶骨 #B84A39 陶土磚紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-collar')}
            onMouseEnter={() => setHoveredPrimalId('fish-collar')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-collar' ? 'url(#fishSoftGlow)' : undefined}
          >
            <path
              d="M 240,320 L 320,310 L 300,410 C 250,400 220,360 240,320 Z"
              fill={selectedPrimalId === 'fish-collar' ? '#C95543' : '#B84A39'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-collar' ? 4 : 2.5}
            />
            <path
              d="M 240,320 L 320,310 L 300,410 C 250,400 220,360 240,320 Z"
              fill="url(#fishEtchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-collar' ? 4 : 2.5}
            />
            <text x="270" y="360" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="14" className="font-sans pointer-events-none drop-shadow">
              魚下巴
            </text>
            <text x="270" y="376" textAnchor="middle" fill="#FAF8F5" fontSize="10" opacity="0.95" className="font-serif italic pointer-events-none">
              琵琶骨·鹽烤首選
            </text>
          </g>

          {/* 3. 背肉 / 背脊肉 (#5B705B 鼠尾草灰綠) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-dorsal')}
            onMouseEnter={() => setHoveredPrimalId('fish-dorsal')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-dorsal' ? 'url(#fishSoftGlow)' : undefined}
          >
            <path
              d="M 240,175 C 360,150 520,150 680,180 L 680,285 L 240,285 Z"
              fill={selectedPrimalId === 'fish-dorsal' ? '#6C836C' : '#5B705B'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-dorsal' ? 4 : 2.5}
            />
            <path
              d="M 240,175 C 360,150 520,150 680,180 L 680,285 L 240,285 Z"
              fill="url(#fishScales)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-dorsal' ? 4 : 2.5}
            />
            <text x="460" y="225" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="21" className="font-sans pointer-events-none drop-shadow">
              背肉 / 背脊肉 (Dorsal)
            </text>
            <text x="460" y="250" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              午仔魚 · 鱸魚 · 白鯧 · 清蒸香煎主力
            </text>
          </g>

          {/* 4. 腹肉 / 魚肚 (#D26C42 珊瑚橘) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-belly')}
            onMouseEnter={() => setHoveredPrimalId('fish-belly')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-belly' ? 'url(#fishSoftGlow)' : undefined}
          >
            <path
              d="M 320,285 L 680,285 L 680,375 C 550,420 400,430 300,410 L 320,285 Z"
              fill={selectedPrimalId === 'fish-belly' ? '#DF7B52' : '#D26C42'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-belly' ? 4 : 2.5}
            />
            <path
              d="M 320,285 L 680,285 L 680,375 C 550,420 400,430 300,410 L 320,285 Z"
              fill="url(#fishEtchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-belly' ? 4 : 2.5}
            />
            <text x="490" y="340" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              腹肉 / 魚肚 (Belly · Toro)
            </text>
            <text x="490" y="360" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              虱目魚肚 · 黑鮪大腹 · 濃郁油脂精華
            </text>
          </g>

          {/* 5. 尾段 / 尾肉 (#7C2333 深勃根地酒紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('fish-tail')}
            onMouseEnter={() => setHoveredPrimalId('fish-tail')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'fish-tail' ? 'url(#fishSoftGlow)' : undefined}
          >
            <path
              d="M 680,180 C 740,200 800,240 850,290 C 800,340 740,370 680,375 Z"
              fill={selectedPrimalId === 'fish-tail' ? '#922C3E' : '#7C2333'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-tail' ? 4 : 2.5}
            />
            <path
              d="M 680,180 C 740,200 800,240 850,290 C 800,340 740,370 680,375 Z"
              fill="url(#fishEtchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'fish-tail' ? 4 : 2.5}
            />
            <text x="750" y="275" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="17" className="font-sans pointer-events-none drop-shadow">
              尾段
            </text>
            <text x="750" y="295" textAnchor="middle" fill="#FAF8F5" fontSize="11" opacity="0.95" className="font-serif italic pointer-events-none">
              白帶魚·紅燒
            </text>
          </g>

          {/* 外框線與圖表裝飾 */}
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
