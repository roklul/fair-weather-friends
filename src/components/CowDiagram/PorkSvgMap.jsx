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
          <span>點擊豬隻部位探索 8 大台灣常用分切細節</span>
        </div>
        <div className="text-xs text-charcoal-muted hidden sm:block">
          當前選中：<span className="font-bold text-beef-burgundy">{activePrimal.name} ({activePrimal.enName})</span>
        </div>
      </div>

      {/* SVG 古典肉舖版畫風格豬隻部位圖 */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 580"
          className="w-full h-full select-none filter drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 45 度古典版畫排線紋理 */}
            <pattern id="porkEtch" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="7" stroke="#1C1917" strokeWidth="0.8" opacity="0.22" />
            </pattern>
            {/* 交叉陰影 */}
            <pattern id="porkCross" width="9" height="9" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="9" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
              <line x1="0" y1="0" x2="9" y2="0" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
            </pattern>
            <filter id="porkGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1C1917" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* ========================================================
              底層：寫實古典豬隻輪廓素描 (豬頭、豬耳、豬蹄、捲尾)
              ======================================================== */}
          <g className="opacity-95" fill="#E8DDD0" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            
            {/* 豬捲尾巴 (俏皮古典線條) */}
            <path
              d="M 875,250 C 905,235 930,255 920,285 C 910,310 885,295 895,275 C 902,262 918,268 912,280"
              fill="none"
              stroke="#1C1917"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* 後腿延伸至蹄部 (遠側後腿) */}
            <path d="M 720,430 L 730,525 L 755,525 L 748,430 Z" fill="#C5B8A5" />
            <path d="M 728,525 L 725,548 L 758,548 L 755,525 Z" fill="#3D2B1F" />

            {/* 前腿延伸至蹄部 (遠側前腿) */}
            <path d="M 285,420 L 290,525 L 315,525 L 310,420 Z" fill="#C5B8A5" />
            <path d="M 288,525 L 285,548 L 318,548 L 315,525 Z" fill="#3D2B1F" />

            {/* 近側前蹄 (自前腿延伸) */}
            <path d="M 195,435 L 200,525 L 230,525 L 225,435 Z" fill="#B3A28D" />
            <path d="M 198,525 L 195,548 L 233,548 L 230,525 Z" fill="#2E1F16" />

            {/* 近側後蹄 (自後腿延伸) */}
            <path d="M 805,435 L 810,525 L 840,525 L 835,435 Z" fill="#B3A28D" />
            <path d="M 808,525 L 805,548 L 843,548 L 840,525 Z" fill="#2E1F16" />

            {/* 豬頭主體 (額頭、口鼻、下顎與臉頰) */}
            <path
              d="M 140,215 C 110,195 75,220 48,255 C 32,280 35,315 52,335 C 75,355 115,350 145,320 C 160,300 172,280 185,260 Z"
              fill="#E8DDD0"
              stroke="#1C1917"
              strokeWidth="2.5"
            />
            {/* 豬鼻子 */}
            <ellipse cx="45" cy="285" rx="14" ry="20" fill="#E2B8AB" stroke="#1C1917" strokeWidth="2.2" />
            <ellipse cx="40" cy="280" rx="3.5" ry="4" fill="#1C1917" />
            <ellipse cx="40" cy="292" rx="3.5" ry="4" fill="#1C1917" />

            {/* 豬耳朵 (自然前傾微垂) */}
            <path d="M 135,195 C 120,150 162,130 182,160 C 168,188 158,202 135,195 Z" fill="#E2B8AB" stroke="#1C1917" strokeWidth="2.2" />
            {/* 眼睛與微笑刻線 */}
            <circle cx="95" cy="245" r="4.5" fill="#1C1917" />
            <circle cx="97" cy="243" r="1.5" fill="#FAF8F5" />
            <path d="M 68,318 C 88,328 108,318 118,310" fill="none" stroke="#1C1917" strokeWidth="2.2" />
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
            filter={selectedPrimalId === 'pork-neck' ? 'url(#porkGlow)' : undefined}
          >
            <path
              d="M 140,215 L 210,185 L 245,240 L 225,340 L 145,320 Z"
              fill={selectedPrimalId === 'pork-neck' ? '#D69E48' : '#C58C36'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-neck' ? 4 : 2.5}
            />
            <path
              d="M 140,215 L 210,185 L 245,240 L 225,340 L 145,320 Z"
              fill="url(#porkEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-neck' ? 4 : 2.5}
            />
            <text x="180" y="260" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="16" className="font-sans pointer-events-none drop-shadow">
              頸頰部
            </text>
            <text x="180" y="278" textAnchor="middle" fill="#FAF8F5" fontSize="11" opacity="0.95" className="font-serif italic pointer-events-none">
              松阪豬·嘴邊肉
            </text>
          </g>

          {/* 2. 肩胛部 (梅花肉 / 胛心肉 #B84A39 陶土磚紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-shoulder')}
            onMouseEnter={() => setHoveredPrimalId('pork-shoulder')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-shoulder' ? 'url(#porkGlow)' : undefined}
          >
            <path
              d="M 210,185 C 255,160 310,155 375,155 L 375,305 L 245,305 L 245,240 Z"
              fill={selectedPrimalId === 'pork-shoulder' ? '#C95543' : '#B84A39'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-shoulder' ? 4 : 2.5}
            />
            <path
              d="M 210,185 C 255,160 310,155 375,155 L 375,305 L 245,305 L 245,240 Z"
              fill="url(#porkEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-shoulder' ? 4 : 2.5}
            />
            <text x="305" y="225" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none drop-shadow">
              肩胛部
            </text>
            <text x="305" y="248" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              梅花肉 · 胛心肉
            </text>
          </g>

          {/* 3. 背脊部 (大里肌 #5B705B 鼠尾草灰綠) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-loin')}
            onMouseEnter={() => setHoveredPrimalId('pork-loin')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-loin' ? 'url(#porkGlow)' : undefined}
          >
            <path
              d="M 375,155 C 440,155 520,160 590,165 L 590,265 L 375,265 Z"
              fill={selectedPrimalId === 'pork-loin' ? '#6C836C' : '#5B705B'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-loin' ? 4 : 2.5}
            />
            <path
              d="M 375,155 C 440,155 520,160 590,165 L 590,265 L 375,265 Z"
              fill="url(#porkEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-loin' ? 4 : 2.5}
            />
            <text x="480" y="205" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none drop-shadow">
              背脊部 (大里肌)
            </text>
            <text x="480" y="225" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              LOIN (炸豬排·排骨)
            </text>
          </g>

          {/* 4. 腰脊部 (小里肌 / 腰內肉 #6B4C38 雕刻深褐) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-tenderloin')}
            onMouseEnter={() => setHoveredPrimalId('pork-tenderloin')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-tenderloin' ? 'url(#porkGlow)' : undefined}
          >
            <path
              d="M 590,165 C 635,170 675,180 710,195 L 710,265 L 590,265 Z"
              fill={selectedPrimalId === 'pork-tenderloin' ? '#7F5B44' : '#6B4C38'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-tenderloin' ? 4 : 2.5}
            />
            <path
              d="M 590,165 C 635,170 675,180 710,195 L 710,265 L 590,265 Z"
              fill="url(#porkCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-tenderloin' ? 4 : 2.5}
            />
            <text x="650" y="210" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="16" className="font-sans pointer-events-none drop-shadow">
              小里肌
            </text>
            <text x="650" y="228" textAnchor="middle" fill="#FAF8F5" fontSize="11" opacity="0.95" className="font-serif italic pointer-events-none">
              腰內肉·極嫩
            </text>
          </g>

          {/* 5. 肋排部 (豬肋排 #D8963E 暖芥末赭黃) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-ribs')}
            onMouseEnter={() => setHoveredPrimalId('pork-ribs')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-ribs' ? 'url(#porkGlow)' : undefined}
          >
            <path
              d="M 375,265 L 560,265 L 560,335 L 375,335 Z"
              fill={selectedPrimalId === 'pork-ribs' ? '#E5A54B' : '#D8963E'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-ribs' ? 4 : 2.5}
            />
            <path
              d="M 375,265 L 560,265 L 560,335 L 375,335 Z"
              fill="url(#porkEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-ribs' ? 4 : 2.5}
            />
            <text x="465" y="298" textAnchor="middle" fill="#1C1917" fontWeight="bold" fontSize="17" className="font-sans pointer-events-none">
              肋排部 (Ribs)
            </text>
            <text x="465" y="316" textAnchor="middle" fill="#1C1917" fontSize="11" opacity="0.9" className="font-serif italic pointer-events-none">
              腩排 · 烤肋排
            </text>
          </g>

          {/* 6. 腹脅部 (五花肉 / 三層肉 #D26C42 珊瑚橘) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-belly')}
            onMouseEnter={() => setHoveredPrimalId('pork-belly')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-belly' ? 'url(#porkGlow)' : undefined}
          >
            <path
              d="M 375,335 L 710,335 L 710,410 C 650,425 580,430 375,410 Z"
              fill={selectedPrimalId === 'pork-belly' ? '#DF7B52' : '#D26C42'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-belly' ? 4 : 2.5}
            />
            <path
              d="M 375,335 L 710,335 L 710,410 C 650,425 580,430 375,410 Z"
              fill="url(#porkEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-belly' ? 4 : 2.5}
            />
            <text x="540" y="370" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none drop-shadow">
              腹脅部 (五花肉 · 三層肉)
            </text>
            <text x="540" y="390" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              BELLY (焢肉·東坡肉·培根)
            </text>
          </g>

          {/* 7. 前腿與蹄膀 (前腿 / 腿庫 #A89279 暖燕麥褐) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-front-leg')}
            onMouseEnter={() => setHoveredPrimalId('pork-front-leg')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-front-leg' ? 'url(#porkGlow)' : undefined}
          >
            <path
              d="M 225,340 L 375,305 L 375,410 L 270,410 L 195,435 Z"
              fill={selectedPrimalId === 'pork-front-leg' ? '#B8A48D' : '#A89279'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-front-leg' ? 4 : 2.5}
            />
            <path
              d="M 225,340 L 375,305 L 375,410 L 270,410 L 195,435 Z"
              fill="url(#porkCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-front-leg' ? 4 : 2.5}
            />
            <text x="300" y="365" textAnchor="middle" fill="#1C1917" fontWeight="bold" fontSize="16" className="font-sans pointer-events-none">
              前腿與蹄膀
            </text>
            <text x="300" y="382" textAnchor="middle" fill="#1C1917" fontSize="11" opacity="0.9" className="font-serif italic pointer-events-none">
              腿庫 · 滷肉
            </text>
          </g>

          {/* 8. 後腿與蹄部 (後腿肉 / 豬腳 #7C2333 深勃根地酒紅) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectPrimal('pork-hind-leg')}
            onMouseEnter={() => setHoveredPrimalId('pork-hind-leg')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'pork-hind-leg' ? 'url(#porkGlow)' : undefined}
          >
            <path
              d="M 710,195 C 770,210 835,230 875,260 C 885,300 880,370 860,430 L 805,435 L 710,410 L 710,265 Z"
              fill={selectedPrimalId === 'pork-hind-leg' ? '#922C3E' : '#7C2333'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-hind-leg' ? 4 : 2.5}
            />
            <path
              d="M 710,195 C 770,210 835,230 875,260 C 885,300 880,370 860,430 L 805,435 L 710,410 L 710,265 Z"
              fill="url(#porkEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'pork-hind-leg' ? 4 : 2.5}
            />
            <text x="795" y="300" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="20" className="font-sans pointer-events-none drop-shadow">
              後腿與蹄部
            </text>
            <text x="795" y="322" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              HAM (肉餡·肉燥·豬腳)
            </text>
          </g>

          {/* 外框裝飾線與圖說 */}
          <rect x="10" y="10" width="980" height="560" fill="none" stroke="#1C1917" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
          <g className="font-serif italic text-xs" fill="#1C1917" opacity="0.85">
            <text x="30" y="50" className="font-sans font-bold text-sm tracking-wider">FIG. 02 — TAIWAN PORK CUT ANATOMY</text>
            <text x="30" y="70" className="text-xs">Standard Taiwan Culinary 8 Primal Breakdown System</text>
          </g>
        </svg>
      </div>

      {/* 底部色票快速切換標籤列 */}
      <div className="mt-4 pt-4 border-t border-parchment-200">
        <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2">
          快速切換台灣常用 8 大分切：
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
