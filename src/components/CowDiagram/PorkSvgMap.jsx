import React, { useState } from 'react';
import { PORK_PRIMAL_AREAS } from '../../data/porkData';
import { Info, Sparkles, ChevronRight } from '../Icons';

export default function PorkSvgMap({ selectedPrimalId, onSelectPrimal, onSelectCutByName }) {
  const [hoveredPrimalId, setHoveredPrimalId] = useState(null);

  const getPrimal = (id) => PORK_PRIMAL_AREAS.find((p) => p.id === id) || PORK_PRIMAL_AREAS[0];
  const activePrimal = getPrimal(selectedPrimalId || hoveredPrimalId || 'pork-shoulder');

  return (
    <div className="relative w-full bg-parchment-50 border border-parchment-300 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
      {/* 頂部引導指示 */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-parchment-200">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
          <Info className="w-4 h-4 text-beef-burgundy" />
          <span>點擊豬隻色塊探索部位解剖與料理指南</span>
        </div>
        <div className="text-xs text-charcoal-muted hidden sm:block">
          當前選中：<span className="font-bold text-beef-burgundy">{activePrimal.name} ({activePrimal.enName})</span>
        </div>
      </div>

      {/* SVG 豬隻部位向量圖 */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 580"
          className="w-full h-full select-none filter drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 45 度古典版畫排線紋理 */}
            <pattern id="porkEtchingLines" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#1C1917" strokeWidth="0.75" opacity="0.22" />
            </pattern>
            {/* 交叉排線陰影 */}
            <pattern id="porkEtchingCross" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
              <line x1="0" y1="0" x2="10" y2="0" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
            </pattern>
            <filter id="porkSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1C1917" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* 豬隻解剖輪廓底稿背景 (豬頭、豬耳、豬鼻、豬蹄、捲尾) */}
          <g className="opacity-90" fill="#E8DDD0" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* 豬頭與臉部 */}
            <path d="M 120,230 C 100,210 70,230 45,260 C 30,285 35,320 50,335 C 70,350 110,350 140,320 C 155,300 170,290 190,280 Z" />
            {/* 豬鼻子 */}
            <ellipse cx="45" cy="285" rx="14" ry="20" fill="#E2B8AB" stroke="#1C1917" strokeWidth="2" />
            <circle cx="40" cy="280" r="3.5" fill="#1C1917" />
            <circle cx="40" cy="292" r="3.5" fill="#1C1917" />
            {/* 豬耳朵 */}
            <path d="M 130,205 C 115,160 155,140 175,170 C 160,195 150,210 130,205 Z" fill="#E2B8AB" />
            {/* 眼睛與表情刻線 */}
            <circle cx="95" cy="245" r="4" fill="#1C1917" />
            <path d="M 65,315 Q 85,325 105,315" fill="none" strokeWidth="2" />

            {/* 豬捲尾巴 */}
            <path d="M 870,240 C 900,230 925,250 915,275 C 905,295 885,280 895,265 C 900,255 915,260 910,270" fill="none" stroke="#1C1917" strokeWidth="3.5" strokeLinecap="round" />

            {/* 前腳蹄部 */}
            <path d="M 230,480 L 225,540 L 265,540 L 260,480 Z" fill="#423023" />
            <path d="M 330,480 L 325,540 L 365,540 L 360,480 Z" fill="#423023" />
            {/* 後腳蹄部 */}
            <path d="M 720,480 L 715,540 L 755,540 L 750,480 Z" fill="#423023" />
            <path d="M 820,480 L 815,540 L 855,540 L 850,480 Z" fill="#423023" />
          </g>

          {/* ========================================================
              豬肉 8 大分切色塊主體 (Pork Primals)
              ======================================================== */}

          {/* 1. 頸頰部 (松阪豬 / 嘴邊肉 #C58C36 琥珀金棕) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-neck')}
            onMouseEnter={() => setHoveredPrimalId('pork-neck')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-neck' ? 'url(#porkSoftGlow)' : undefined}
          >
            <path
              d="M 120,230 L 190,200 L 230,240 L 210,340 L 140,320 Z"
              fill={selectedPrimalId === 'pork-neck' ? '#D69E48' : '#C58C36'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-neck' ? 4 : 2.5}
            />
            <path
              d="M 120,230 L 190,200 L 230,240 L 210,340 L 140,320 Z"
              fill="url(#porkEtchingCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-neck' ? 4 : 2.5}
            />
            <text x="175" y="270" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="16" className="font-sans pointer-events-none drop-shadow">
              頸頰部
            </text>
            <text x="175" y="288" textAnchor="middle" fill="#FAF8F5" fontSize="11" opacity="0.95" className="font-serif italic pointer-events-none">
              松阪·嘴邊肉
            </text>
          </g>

          {/* 2. 肩胛部 (梅花肉 / 胛心 #B84A39 陶土磚紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-shoulder')}
            onMouseEnter={() => setHoveredPrimalId('pork-shoulder')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-shoulder' ? 'url(#porkSoftGlow)' : undefined}
          >
            <path
              d="M 190,200 C 230,175 280,165 375,165 L 375,305 L 230,305 L 230,240 Z"
              fill={selectedPrimalId === 'pork-shoulder' ? '#C95543' : '#B84A39'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-shoulder' ? 4 : 2.5}
            />
            <path
              d="M 190,200 C 230,175 280,165 375,165 L 375,305 L 230,305 L 230,240 Z"
              fill="url(#porkEtchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-shoulder' ? 4 : 2.5}
            />
            <text x="295" y="235" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              肩胛部
            </text>
            <text x="295" y="255" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              梅花肉 · 胛心肉
            </text>
          </g>

          {/* 3. 背脊部 (大里肌 #D8963E 暖芥末赭黃) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-loin')}
            onMouseEnter={() => setHoveredPrimalId('pork-loin')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-loin' ? 'url(#porkSoftGlow)' : undefined}
          >
            <path
              d="M 375,165 L 670,170 L 670,270 L 375,270 Z"
              fill={selectedPrimalId === 'pork-loin' ? '#E5A54B' : '#D8963E'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-loin' ? 4 : 2.5}
            />
            <path
              d="M 375,165 L 670,170 L 670,270 L 375,270 Z"
              fill="url(#porkEtchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-loin' ? 4 : 2.5}
            />
            <text x="522" y="215" textAnchor="middle" fill="#1C1917" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none">
              背脊部 (大里肌)
            </text>
            <text x="522" y="235" textAnchor="middle" fill="#1C1917" fontSize="13" opacity="0.9" className="font-serif italic pointer-events-none">
              PORK LOIN / 炸豬排主力
            </text>
          </g>

          {/* 4. 腰脊部 (小里肌 / 腰內肉 #5B705B 鼠尾草灰綠) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-tenderloin')}
            onMouseEnter={() => setHoveredPrimalId('pork-tenderloin')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-tenderloin' ? 'url(#porkSoftGlow)' : undefined}
          >
            <path
              d="M 525,270 L 670,270 L 670,320 L 525,320 Z"
              fill={selectedPrimalId === 'pork-tenderloin' ? '#6C836C' : '#5B705B'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-tenderloin' ? 4 : 2.5}
            />
            <path
              d="M 525,270 L 670,270 L 670,320 L 525,320 Z"
              fill="url(#porkEtchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-tenderloin' ? 4 : 2.5}
            />
            <text x="597" y="295" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="14" className="font-sans pointer-events-none drop-shadow">
              小里肌 (腰內肉)
            </text>
            <text x="597" y="310" textAnchor="middle" fill="#FAF8F5" fontSize="10" opacity="0.95" className="font-serif italic pointer-events-none">
              全豬最嫩 · TENDERLOIN
            </text>
          </g>

          {/* 5. 肋排部 (#7C2333 深勃根地酒紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-ribs')}
            onMouseEnter={() => setHoveredPrimalId('pork-ribs')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-ribs' ? 'url(#porkSoftGlow)' : undefined}
          >
            <path
              d="M 375,270 L 525,270 L 525,360 L 375,360 Z"
              fill={selectedPrimalId === 'pork-ribs' ? '#922C3E' : '#7C2333'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-ribs' ? 4 : 2.5}
            />
            <path
              d="M 375,270 L 525,270 L 525,360 L 375,360 Z"
              fill="url(#porkEtchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-ribs' ? 4 : 2.5}
            />
            <text x="450" y="315" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="16" className="font-sans pointer-events-none drop-shadow">
              肋排部
            </text>
            <text x="450" y="333" textAnchor="middle" fill="#FAF8F5" fontSize="11" opacity="0.95" className="font-serif italic pointer-events-none">
              PORK RIBS / 腩排
            </text>
          </g>

          {/* 6. 腹脅部 (五花肉 / 三層肉 #D26C42 珊瑚橘) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-belly')}
            onMouseEnter={() => setHoveredPrimalId('pork-belly')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-belly' ? 'url(#porkSoftGlow)' : undefined}
          >
            <path
              d="M 375,360 L 670,320 L 670,410 L 375,410 Z"
              fill={selectedPrimalId === 'pork-belly' ? '#DF7B52' : '#D26C42'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-belly' ? 4 : 2.5}
            />
            <path
              d="M 375,360 L 670,320 L 670,410 L 375,410 Z"
              fill="url(#porkEtchingLines)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-belly' ? 4 : 2.5}
            />
            <text x="522" y="375" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              腹脅部 (五花肉)
            </text>
            <text x="522" y="395" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              PORK BELLY / 三層肉 · 焢肉靈魂
            </text>
          </g>

          {/* 7. 前腿與蹄膀 (前腿·腿庫 #A89279 暖燕麥褐) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-front-leg')}
            onMouseEnter={() => setHoveredPrimalId('pork-front-leg')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-front-leg' ? 'url(#porkSoftGlow)' : undefined}
          >
            <path
              d="M 210,340 L 375,305 L 375,410 L 290,410 L 290,470 L 220,470 Z"
              fill={selectedPrimalId === 'pork-front-leg' ? '#B8A38B' : '#A89279'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-front-leg' ? 4 : 2.5}
            />
            <path
              d="M 210,340 L 375,305 L 375,410 L 290,410 L 290,470 L 220,470 Z"
              fill="url(#porkEtchingCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-front-leg' ? 4 : 2.5}
            />
            <text x="295" y="375" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="16" className="font-sans pointer-events-none drop-shadow">
              前腿 · 蹄膀
            </text>
            <text x="295" y="393" textAnchor="middle" fill="#FAF8F5" fontSize="11" opacity="0.95" className="font-serif italic pointer-events-none">
              腿庫 · 膠質大菜
            </text>
          </g>

          {/* 8. 後腿與蹄部 (後腿·豬蹄 #6B4C38 雕刻深褐) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-ham-trotter')}
            onMouseEnter={() => setHoveredPrimalId('pork-ham-trotter')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-ham-trotter' ? 'url(#porkSoftGlow)' : undefined}
          >
            <path
              d="M 670,170 C 730,185 810,210 860,240 C 880,285 870,360 840,420 L 780,420 L 780,470 L 720,470 L 670,410 Z"
              fill={selectedPrimalId === 'pork-ham-trotter' ? '#7D5A44' : '#6B4C38'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-ham-trotter' ? 4 : 2.5}
            />
            <path
              d="M 670,170 C 730,185 810,210 860,240 C 880,285 870,360 840,420 L 780,420 L 780,470 L 720,470 L 670,410 Z"
              fill="url(#porkEtchingCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-ham-trotter' ? 4 : 2.5}
            />
            <text x="765" y="280" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              後腿 · 豬蹄
            </text>
            <text x="765" y="300" textAnchor="middle" fill="#FAF8F5" fontSize="13" opacity="0.95" className="font-serif italic pointer-events-none">
              HAM & TROTTERS
            </text>
          </g>

          {/* 外框線與圖表裝飾 */}
          <rect x="10" y="10" width="980" height="560" fill="none" stroke="#1C1917" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
          <g className="font-serif italic text-xs" fill="#1C1917" opacity="0.85">
            <text x="30" y="50" className="font-sans font-bold text-sm tracking-wider">FIG. 02 — PRIMAL PORK CUT ANATOMY</text>
            <text x="30" y="70" className="text-xs">Taiwan Traditional & Standard Culinary Pork Breakdown</text>
          </g>
        </svg>
      </div>

      {/* 底部色票快速切換標籤列 */}
      <div className="mt-4 pt-4 border-t border-parchment-200">
        <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2">
          快速切換豬肉大分切：
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {PORK_PRIMAL_AREAS.map((primal) => {
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
