import React, { useState } from 'react';
import { CHICKEN_PRIMAL_AREAS } from '../../data/chickenData';
import { getLocalizedPrimal } from '../../data/primalsI18n';
import { TRANSLATIONS } from '../../data/translations';
import { Info } from '../Icons';

export default function ChickenSvgMap({ selectedPrimalId, onSelectPrimal, currentLang = 'zh-TW' }) {
  const [hoveredPrimalId, setHoveredPrimalId] = useState(null);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];

  const getPrimal = (id) => CHICKEN_PRIMAL_AREAS.find((p) => p.id === id) || CHICKEN_PRIMAL_AREAS[0];
  const activePrimal = getLocalizedPrimal(getPrimal(selectedPrimalId || hoveredPrimalId || 'chicken-thigh'), currentLang);

  const svgLabels = {
    'zh-TW': {
      figTitle: 'FIG. 04 — POULTRY BUTCHERY & YAKITORI CUT ANATOMY',
      figSub: 'Standard Culinary Chicken 8 Primal Breakdown System',
      neck: { main: '雞頸部 (雞松阪)', sub: 'せせり · 彈脆老饕' },
      breast: { main: '雞胸部 (胸肉)', sub: '低脂高蛋白 · 舒肥' },
      tender: { main: '雞柳部 (小里肌)', sub: 'ささみ · 極嫩無筋' },
      wing: { main: '雞翅部 (二節翅)', sub: '手羽先 · 膠質脆皮' },
      thigh: { main: '雞腿部 (大腿排)', sub: '多汁油潤 · 煎炸烤' },
      drumstick: { main: '棒棒腿 (小腿)', sub: '骨香肉美 · 慢火煲湯' },
      tail: { main: '七里香與背部', sub: 'ぼんじり · 雞牡蠣肉' },
      cartilage: { main: '三角軟骨與心', sub: 'ヤゲン · 喀吱下酒' },
    },
    'en': {
      figTitle: 'FIG. 04 — POULTRY BUTCHERY & YAKITORI CUT ANATOMY',
      figSub: 'Standard Culinary Chicken 8 Primal Breakdown System',
      neck: { main: 'Neck (Seseri)', sub: 'NECK · Crunchy & Tender' },
      breast: { main: 'Breast (White Meat)', sub: 'BREAST · Lean Protein' },
      tender: { main: 'Tenderloin (Sasami)', sub: 'TENDER · Ultra Delicate' },
      wing: { main: 'Wings (Double Wings)', sub: 'WINGS · Crispy Collagen' },
      thigh: { main: 'Thigh (Boneless)', sub: 'THIGH · Juicy & Rich' },
      drumstick: { main: 'Drumstick (Leg)', sub: 'DRUMSTICK · Meaty Stew' },
      tail: { main: 'Tail & Oyster', sub: 'BONJIRI · Sot-l\'y-laisse' },
      cartilage: { main: 'Cartilage & Heart', sub: 'YAGEN · Crunchy Offal' },
    },
    'ja': {
      figTitle: 'FIG. 04 — 鶏肉 8大部位解剖図・職人焼鳥マップ',
      figSub: '料理基準 鶏肉8大部位分割システム',
      neck: { main: 'せせり (首肉)', sub: 'NECK · 希少部位·弾力' },
      breast: { main: 'むね肉 (白肉)', sub: 'BREAST · 高タンパク' },
      tender: { main: 'ささみ (小里肌)', sub: 'TENDER · 極上の柔らかさ' },
      wing: { main: '手羽先 (二節翅)', sub: 'WINGS · コラーゲン·皮パリ' },
      thigh: { main: 'もも肉 (大腿排)', sub: 'THIGH · 肉汁たっぷり' },
      drumstick: { main: '手羽元 (小腿)', sub: 'DRUMSTICK · から揚げ·スープ' },
      tail: { main: 'ぼんじり・ソリレス', sub: 'BONJIRI · 極上脂·牡蠣肉' },
      cartilage: { main: 'ヤゲン軟骨・ハツ', sub: 'CARTILAGE · コリコリ食感' },
    }
  };

  const labels = svgLabels[currentLang] || svgLabels['zh-TW'];

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

      {/* SVG 古典肉舖版畫風格雞隻部位圖 */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 580"
          className="w-full h-full select-none filter drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 45 度古典版畫排線紋理 */}
            <pattern id="chickenEtch" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="7" stroke="#1C1917" strokeWidth="0.8" opacity="0.22" />
            </pattern>
            {/* 交叉排線陰影 */}
            <pattern id="chickenCross" width="9" height="9" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="9" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
              <line x1="0" y1="0" x2="9" y2="0" stroke="#1C1917" strokeWidth="0.75" opacity="0.25" />
            </pattern>
            <filter id="chickenGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1C1917" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* ========================================================
              底層：寫實古典家禽輪廓素描 (外廓形體底襯)
              ======================================================== */}
          <g className="opacity-95" fill="#E8DDD0" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* 雞喙 */}
            <polygon points="215,125 242,112 242,138" fill="#D97736" stroke="#1C1917" strokeWidth="2" />
            {/* 雞冠 */}
            <path
              d="M 270,75 C 265,55 285,45 295,58 C 305,45 325,48 328,65 C 338,55 355,62 352,78 Z"
              fill="#9E2A2B"
              stroke="#1C1917"
              strokeWidth="2"
            />
            {/* 肉垂 */}
            <path
              d="M 245,138 C 240,155 258,162 262,145 Z"
              fill="#9E2A2B"
              stroke="#1C1917"
              strokeWidth="2"
            />
            {/* 雞眼 */}
            <circle cx="275" cy="100" r="5" fill="#1C1917" />
            <circle cx="273" cy="98" r="1.5" fill="#FAF8F5" />
            {/* 尾羽俏麗線條 */}
            <path
              d="M 850,230 C 895,190 920,225 910,265 C 930,240 945,280 915,310 C 900,325 870,335 845,335"
              fill="none"
              stroke="#1C1917"
              strokeWidth="3"
            />
            {/* 雞爪 */}
            <path
              d="M 580,480 L 570,545 M 570,545 L 545,555 M 570,545 L 575,560 M 570,545 L 595,555 M 620,480 L 635,545 M 635,545 L 610,555 M 635,545 L 640,560 M 635,545 L 660,555"
              stroke="#5E4B3C"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* ========================================================
              中層：各分切部位向量路徑與高對比銘版排版 (同豬肉高品質風格)
              ======================================================== */}

          {/* 1. 雞頸部 (雞松阪 / Seseri) */}
          <g
            id="primal-chicken-neck"
            className="cursor-pointer transition-transform duration-200"
            onClick={() => onSelectPrimal('chicken-neck')}
            onMouseEnter={() => setHoveredPrimalId('chicken-neck')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chicken-neck' ? 'url(#chickenGlow)' : undefined}
          >
            <path
              d="M 240 150 C 230 110 270 70 320 65 C 345 62 365 80 375 105 C 390 135 410 170 415 210 C 385 220 355 225 330 215 C 300 195 260 180 240 150 Z"
              fill={selectedPrimalId === 'chicken-neck' ? '#9E2A2B' : '#7C2333'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-neck' ? 4 : 2.5}
            />
            <path
              d="M 240 150 C 230 110 270 70 320 65 C 345 62 365 80 375 105 C 390 135 410 170 415 210 C 385 220 355 225 330 215 C 300 195 260 180 240 150 Z"
              fill="url(#chickenEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-neck' ? 4 : 2.5}
              pointerEvents="none"
            />
            <text x="325" y="140" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              {labels.neck.main}
            </text>
            <text x="325" y="162" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              {labels.neck.sub}
            </text>
          </g>

          {/* 2. 雞胸部 (胸肉·白肉) */}
          <g
            id="primal-chicken-breast"
            className="cursor-pointer transition-transform duration-200"
            onClick={() => onSelectPrimal('chicken-breast')}
            onMouseEnter={() => setHoveredPrimalId('chicken-breast')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chicken-breast' ? 'url(#chickenGlow)' : undefined}
          >
            <path
              d="M 330 215 C 355 225 385 220 415 210 C 425 240 440 280 435 320 C 400 345 360 365 315 370 C 290 350 260 320 250 280 C 265 245 295 225 330 215 Z"
              fill={selectedPrimalId === 'chicken-breast' ? '#5B9A6E' : '#4A7C59'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-breast' ? 4 : 2.5}
            />
            <path
              d="M 330 215 C 355 225 385 220 415 210 C 425 240 440 280 435 320 C 400 345 360 365 315 370 C 290 350 260 320 250 280 C 265 245 295 225 330 215 Z"
              fill="url(#chickenCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-breast' ? 4 : 2.5}
              pointerEvents="none"
            />
            <text x="345" y="280" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              {labels.breast.main}
            </text>
            <text x="345" y="302" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              {labels.breast.sub}
            </text>
          </g>

          {/* 3. 雞柳部 (小里肌·Sasami) */}
          <g
            id="primal-chicken-tender"
            className="cursor-pointer transition-transform duration-200"
            onClick={() => onSelectPrimal('chicken-tender')}
            onMouseEnter={() => setHoveredPrimalId('chicken-tender')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chicken-tender' ? 'url(#chickenGlow)' : undefined}
          >
            <path
              d="M 315 370 C 360 365 400 345 435 320 C 445 350 450 380 440 410 C 390 425 350 430 310 415 C 305 395 310 380 315 370 Z"
              fill={selectedPrimalId === 'chicken-tender' ? '#785E4B' : '#5E4B3C'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-tender' ? 4 : 2.5}
            />
            <path
              d="M 315 370 C 360 365 400 345 435 320 C 445 350 450 380 440 410 C 390 425 350 430 310 415 C 305 395 310 380 315 370 Z"
              fill="url(#chickenEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-tender' ? 4 : 2.5}
              pointerEvents="none"
            />
            <text x="375" y="370" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="18" className="font-sans pointer-events-none drop-shadow">
              {labels.tender.main}
            </text>
            <text x="375" y="392" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              {labels.tender.sub}
            </text>
          </g>

          {/* 4. 雞翅部 (二節翅·翅小腿) */}
          <g
            id="primal-chicken-wing"
            className="cursor-pointer transition-transform duration-200"
            onClick={() => onSelectPrimal('chicken-wing')}
            onMouseEnter={() => setHoveredPrimalId('chicken-wing')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chicken-wing' ? 'url(#chickenGlow)' : undefined}
          >
            <path
              d="M 415 210 C 445 180 500 160 560 165 C 570 195 565 230 550 260 C 510 275 465 295 435 320 C 440 280 425 240 415 210 Z"
              fill={selectedPrimalId === 'chicken-wing' ? '#E88A4A' : '#D97736'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-wing' ? 4 : 2.5}
            />
            <path
              d="M 415 210 C 445 180 500 160 560 165 C 570 195 565 230 550 260 C 510 275 465 295 435 320 C 440 280 425 240 415 210 Z"
              fill="url(#chickenCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-wing' ? 4 : 2.5}
              pointerEvents="none"
            />
            <text x="490" y="220" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              {labels.wing.main}
            </text>
            <text x="490" y="242" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              {labels.wing.sub}
            </text>
          </g>

          {/* 5. 雞腿部 (大腿排·骨腿) */}
          <g
            id="primal-chicken-thigh"
            className="cursor-pointer transition-transform duration-200"
            onClick={() => onSelectPrimal('chicken-thigh')}
            onMouseEnter={() => setHoveredPrimalId('chicken-thigh')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chicken-thigh' ? 'url(#chickenGlow)' : undefined}
          >
            <path
              d="M 550 260 C 565 230 570 195 560 165 C 620 165 680 185 725 220 C 735 255 720 295 690 325 C 640 345 590 340 550 310 C 540 295 545 275 550 260 Z"
              fill={selectedPrimalId === 'chicken-thigh' ? '#CF5E32' : '#B84E28'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-thigh' ? 4 : 2.5}
            />
            <path
              d="M 550 260 C 565 230 570 195 560 165 C 620 165 680 185 725 220 C 735 255 720 295 690 325 C 640 345 590 340 550 310 C 540 295 545 275 550 260 Z"
              fill="url(#chickenEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-thigh' ? 4 : 2.5}
              pointerEvents="none"
            />
            <text x="640" y="240" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              {labels.thigh.main}
            </text>
            <text x="640" y="262" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              {labels.thigh.sub}
            </text>
          </g>

          {/* 6. 棒棒腿 (小腿部) */}
          <g
            id="primal-chicken-drumstick"
            className="cursor-pointer transition-transform duration-200"
            onClick={() => onSelectPrimal('chicken-drumstick')}
            onMouseEnter={() => setHoveredPrimalId('chicken-drumstick')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chicken-drumstick' ? 'url(#chickenGlow)' : undefined}
          >
            <path
              d="M 550 310 C 590 340 640 345 690 325 C 700 360 705 400 680 440 C 650 480 610 495 570 480 C 550 450 545 400 540 360 C 540 335 545 320 550 310 Z"
              fill={selectedPrimalId === 'chicken-drumstick' ? '#E29F5A' : '#D48C46'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-drumstick' ? 4 : 2.5}
            />
            <path
              d="M 550 310 C 590 340 640 345 690 325 C 700 360 705 400 680 440 C 650 480 610 495 570 480 C 550 450 545 400 540 360 C 540 335 545 320 550 310 Z"
              fill="url(#chickenCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-drumstick' ? 4 : 2.5}
              pointerEvents="none"
            />
            <text x="625" y="395" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="19" className="font-sans pointer-events-none drop-shadow">
              {labels.drumstick.main}
            </text>
            <text x="625" y="417" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              {labels.drumstick.sub}
            </text>
          </g>

          {/* 7. 雞尾與背部 (七里香·牡蠣肉) */}
          <g
            id="primal-chicken-tail"
            className="cursor-pointer transition-transform duration-200"
            onClick={() => onSelectPrimal('chicken-tail')}
            onMouseEnter={() => setHoveredPrimalId('chicken-tail')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chicken-tail' ? 'url(#chickenGlow)' : undefined}
          >
            <path
              d="M 725 220 C 770 210 820 220 850 250 C 875 275 870 310 830 330 C 795 345 750 345 710 335 C 720 295 735 255 725 220 Z"
              fill={selectedPrimalId === 'chicken-tail' ? '#A4586C' : '#8A4A5B'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-tail' ? 4 : 2.5}
            />
            <path
              d="M 725 220 C 770 210 820 220 850 250 C 875 275 870 310 830 330 C 795 345 750 345 710 335 C 720 295 735 255 725 220 Z"
              fill="url(#chickenEtch)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-tail' ? 4 : 2.5}
              pointerEvents="none"
            />
            <text x="795" y="270" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="18" className="font-sans pointer-events-none drop-shadow">
              {labels.tail.main}
            </text>
            <text x="795" y="292" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              {labels.tail.sub}
            </text>
          </g>

          {/* 8. 軟骨與內臟 (三角骨·雞心) */}
          <g
            id="primal-chicken-cartilage"
            className="cursor-pointer transition-transform duration-200"
            onClick={() => onSelectPrimal('chicken-cartilage')}
            onMouseEnter={() => setHoveredPrimalId('chicken-cartilage')}
            onMouseLeave={() => setHoveredPrimalId(null)}
            filter={selectedPrimalId === 'chicken-cartilage' ? 'url(#chickenGlow)' : undefined}
          >
            <path
              d="M 440 410 C 450 380 445 350 435 320 C 465 295 510 275 550 260 C 545 275 540 295 550 310 C 545 320 540 335 540 360 C 500 385 470 405 440 410 Z"
              fill={selectedPrimalId === 'chicken-cartilage' ? '#5C8283' : '#4A6B6C'}
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-cartilage' ? 4 : 2.5}
            />
            <path
              d="M 440 410 C 450 380 445 350 435 320 C 465 295 510 275 550 260 C 545 275 540 295 550 310 C 545 320 540 335 540 360 C 500 385 470 405 440 410 Z"
              fill="url(#chickenCross)"
              stroke="#FAF8F5"
              strokeWidth={selectedPrimalId === 'chicken-cartilage' ? 4 : 2.5}
              pointerEvents="none"
            />
            <text x="495" y="330" textAnchor="middle" fill="#FAF8F5" fontWeight="bold" fontSize="18" className="font-sans pointer-events-none drop-shadow">
              {labels.cartilage.main}
            </text>
            <text x="495" y="352" textAnchor="middle" fill="#FAF8F5" fontSize="12" opacity="0.95" className="font-serif italic pointer-events-none">
              {labels.cartilage.sub}
            </text>
          </g>

          {/* 外框裝飾線與圖說 */}
          <rect x="10" y="10" width="980" height="560" fill="none" stroke="#1C1917" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
          <g className="font-serif italic text-xs" fill="#1C1917" opacity="0.85">
            <text x="30" y="50" className="font-sans font-bold text-sm tracking-wider">{labels.figTitle}</text>
            <text x="30" y="70" className="text-xs">{labels.figSub}</text>
          </g>
        </svg>
      </div>

      {/* 底部色票快速切換標籤列（與豬肉完全一致） */}
      <div className="mt-4 pt-4 border-t border-parchment-200">
        <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2">
          {t.anatomy.quickSwitch}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {CHICKEN_PRIMAL_AREAS.map((primal) => {
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
