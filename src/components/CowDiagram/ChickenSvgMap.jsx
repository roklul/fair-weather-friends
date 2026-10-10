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
      neck: { main: '雞頸部 (雞松阪)', sub: 'NECK (せせり·彈脆)' },
      breast: { main: '雞胸部 (胸肉·白肉)', sub: 'BREAST (低脂·舒肥)' },
      tender: { main: '雞柳部 (小里肌)', sub: 'TENDERLOIN (ささみ·極嫩)' },
      wing: { main: '雞翅部 (二節·翅小腿)', sub: 'WINGS (手羽先·皮脂焦香)' },
      thigh: { main: '雞腿部 (大腿排)', sub: 'THIGH (多汁·去骨腿排)' },
      drumstick: { main: '棒棒腿 (小腿)', sub: 'DRUMSTICK (膠質·美式炸雞)' },
      tail: { main: '雞尾與背部 (七里香·牡蠣肉)', sub: 'TAIL & BACK (ぼんじり·老饕)' },
      cartilage: { main: '軟骨與內臟 (三角骨·雞心)', sub: 'CARTILAGE (ヤゲン·喀吱下酒)' },
    },
    'en': {
      figTitle: 'FIG. 04 — POULTRY BUTCHERY & YAKITORI CUT ANATOMY',
      figSub: 'Standard Culinary Chicken 8 Primal Breakdown System',
      neck: { main: 'Neck Meat (Seseri)', sub: 'NECK (Crispy & Springy)' },
      breast: { main: 'Chicken Breast', sub: 'BREAST (Lean & High Protein)' },
      tender: { main: 'Tenderloin (Sasami)', sub: 'TENDER (Tender & Delicate)' },
      wing: { main: 'Chicken Wings', sub: 'WINGS (Tebasaki · Collagen)' },
      thigh: { main: 'Chicken Thigh', sub: 'THIGH (Juicy · Boneless Cut)' },
      drumstick: { main: 'Drumstick', sub: 'DRUMSTICK (Rich & Meaty)' },
      tail: { main: 'Tail & Oyster (Bonjiri)', sub: 'TAIL (Crispy Skin · Gourmet)' },
      cartilage: { main: 'Cartilage & Heart', sub: 'CARTILAGE (Yagen · Crunchy)' },
    },
    'ja': {
      figTitle: 'FIG. 04 — 鶏肉 8大部位解剖図・職人焼鳥マップ',
      figSub: '料理基準 鶏肉8大部位分割システム',
      neck: { main: 'ネック・せせり (首肉)', sub: 'NECK (希少部位·弾力食感)' },
      breast: { main: 'むね肉 (白肉)', sub: 'BREAST (高タンパク·ヘルシー)' },
      tender: { main: 'ささみ (小里肌)', sub: 'TENDER (最高峰の柔らかさ)' },
      wing: { main: '手羽先・手羽元', sub: 'WINGS (コラーゲン·ジューシー)' },
      thigh: { main: 'もも肉 (大腿)', sub: 'THIGH (肉汁たっぷり·定番)' },
      drumstick: { main: '骨付きすね肉', sub: 'DRUMSTICK (から揚げ·煮込み)' },
      tail: { main: 'ぼんじり・ソリレス', sub: 'TAIL (極上脂·希少部位)' },
      cartilage: { main: 'ヤゲン軟骨・ハツ', sub: 'CARTILAGE (コリコリ食感)' },
    }
  };

  const labels = svgLabels[currentLang] || svgLabels['zh-TW'];

  const getPathClasses = (primalId) => {
    const isSelected = selectedPrimalId === primalId;
    const isHovered = hoveredPrimalId === primalId;

    if (isSelected) {
      return 'fill-beef-burgundy stroke-beef-burgundy stroke-[3] filter drop-shadow-md cursor-pointer transition-all duration-300 opacity-95';
    }
    if (isHovered) {
      return 'fill-amber-600 stroke-amber-700 stroke-[2.5] cursor-pointer transition-all duration-200 opacity-90';
    }
    return 'fill-parchment-200 stroke-stone-600 stroke-[1.5] hover:fill-parchment-300 cursor-pointer transition-all duration-200';
  };

  const getTextFill = (primalId) => {
    if (selectedPrimalId === primalId || hoveredPrimalId === primalId) {
      return '#FFFFFF';
    }
    return '#1C1917';
  };

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
              圖鑑邊框與法規裝飾排版
             ======================================================== */}
          <rect x="15" y="15" width="970" height="550" rx="14" fill="none" stroke="#D1C7BD" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
          <text x="35" y="45" font-family="serif" font-size="11" font-weight="bold" fill="#78716C" letter-spacing="1.5">
            {labels.figTitle}
          </text>
          <text x="35" y="62" font-family="sans-serif" font-size="9" fill="#A8A29E" letter-spacing="0.5">
            {labels.figSub} · SCALE 1:1 CULINARY PROPORTION
          </text>

          {/* 背景輔助外框底形 */}
          <path
            d="M 230 140 C 210 90 280 50 330 60 C 370 70 410 110 430 150 C 470 140 540 130 630 140 C 720 150 780 190 830 220 C 870 240 880 280 840 310 C 810 330 780 340 760 380 C 750 430 730 490 680 510 C 640 520 600 500 580 460 C 560 440 520 440 480 450 C 430 460 380 480 350 470 C 320 450 310 420 300 370 C 270 340 240 300 220 260 C 210 220 220 180 230 140 Z"
            fill="#EFE9DE"
            stroke="#D6CDBF"
            strokeWidth="3"
            opacity="0.4"
          />

          {/* ========================================================
              1. 雞頸部 (雞松阪 / Seseri)
             ======================================================== */}
          <g
            id="primal-chicken-neck"
            className="group"
            onClick={() => onSelectPrimal('chicken-neck')}
            onMouseEnter={() => setHoveredPrimalId('chicken-neck')}
            onMouseLeave={() => setHoveredPrimalId(null)}
          >
            <path
              d="M 240 150 C 230 110 270 70 320 65 C 345 62 365 80 375 105 C 390 135 410 170 415 210 C 385 220 355 225 330 215 C 300 195 260 180 240 150 Z"
              className={getPathClasses('chicken-neck')}
            />
            <path
              d="M 240 150 C 230 110 270 70 320 65 C 345 62 365 80 375 105 C 390 135 410 170 415 210 C 385 220 355 225 330 215 C 300 195 260 180 240 150 Z"
              fill="url(#chickenEtch)"
              pointerEvents="none"
            />
            {/* 雞冠與雞喙裝飾標記 */}
            <circle cx="280" cy="95" r="4.5" fill="#1C1917" opacity="0.75" />
            <path d="M 240 115 L 220 125 L 245 130 Z" fill="#D97736" opacity="0.8" />
            <text x="320" y="140" textAnchor="middle" fontFamily="serif" fontSize="13" fontWeight="bold" fill={getTextFill('chicken-neck')} pointerEvents="none">
              {labels.neck.main}
            </text>
            <text x="320" y="156" textAnchor="middle" fontFamily="sans-serif" fontSize="9.5" fill={getTextFill('chicken-neck')} opacity="0.85" pointerEvents="none">
              {labels.neck.sub}
            </text>
          </g>

          {/* ========================================================
              2. 雞胸部 (胸肉·白肉)
             ======================================================== */}
          <g
            id="primal-chicken-breast"
            className="group"
            onClick={() => onSelectPrimal('chicken-breast')}
            onMouseEnter={() => setHoveredPrimalId('chicken-breast')}
            onMouseLeave={() => setHoveredPrimalId(null)}
          >
            <path
              d="M 330 215 C 355 225 385 220 415 210 C 425 240 440 280 435 320 C 400 345 360 365 315 370 C 290 350 260 320 250 280 C 265 245 295 225 330 215 Z"
              className={getPathClasses('chicken-breast')}
            />
            <path
              d="M 330 215 C 355 225 385 220 415 210 C 425 240 440 280 435 320 C 400 345 360 365 315 370 C 290 350 260 320 250 280 C 265 245 295 225 330 215 Z"
              fill="url(#chickenCross)"
              pointerEvents="none"
            />
            <text x="345" y="285" textAnchor="middle" fontFamily="serif" fontSize="13" fontWeight="bold" fill={getTextFill('chicken-breast')} pointerEvents="none">
              {labels.breast.main}
            </text>
            <text x="345" y="302" textAnchor="middle" fontFamily="sans-serif" fontSize="9.5" fill={getTextFill('chicken-breast')} opacity="0.85" pointerEvents="none">
              {labels.breast.sub}
            </text>
          </g>

          {/* ========================================================
              3. 雞柳部 (小里肌·Sasami)
             ======================================================== */}
          <g
            id="primal-chicken-tender"
            className="group"
            onClick={() => onSelectPrimal('chicken-tender')}
            onMouseEnter={() => setHoveredPrimalId('chicken-tender')}
            onMouseLeave={() => setHoveredPrimalId(null)}
          >
            <path
              d="M 315 370 C 360 365 400 345 435 320 C 445 350 450 380 440 410 C 390 425 350 430 310 415 C 305 395 310 380 315 370 Z"
              className={getPathClasses('chicken-tender')}
            />
            <path
              d="M 315 370 C 360 365 400 345 435 320 C 445 350 450 380 440 410 C 390 425 350 430 310 415 C 305 395 310 380 315 370 Z"
              fill="url(#chickenEtch)"
              pointerEvents="none"
            />
            <text x="375" y="380" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="bold" fill={getTextFill('chicken-tender')} pointerEvents="none">
              {labels.tender.main}
            </text>
            <text x="375" y="396" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill={getTextFill('chicken-tender')} opacity="0.85" pointerEvents="none">
              {labels.tender.sub}
            </text>
          </g>

          {/* ========================================================
              4. 雞翅部 (二節翅·翅小腿)
             ======================================================== */}
          <g
            id="primal-chicken-wing"
            className="group"
            onClick={() => onSelectPrimal('chicken-wing')}
            onMouseEnter={() => setHoveredPrimalId('chicken-wing')}
            onMouseLeave={() => setHoveredPrimalId(null)}
          >
            <path
              d="M 415 210 C 445 180 500 160 560 165 C 570 195 565 230 550 260 C 510 275 465 295 435 320 C 440 280 425 240 415 210 Z"
              className={getPathClasses('chicken-wing')}
            />
            <path
              d="M 415 210 C 445 180 500 160 560 165 C 570 195 565 230 550 260 C 510 275 465 295 435 320 C 440 280 425 240 415 210 Z"
              fill="url(#chickenCross)"
              pointerEvents="none"
            />
            <text x="495" y="225" textAnchor="middle" fontFamily="serif" fontSize="13" fontWeight="bold" fill={getTextFill('chicken-wing')} pointerEvents="none">
              {labels.wing.main}
            </text>
            <text x="495" y="242" textAnchor="middle" fontFamily="sans-serif" fontSize="9.5" fill={getTextFill('chicken-wing')} opacity="0.85" pointerEvents="none">
              {labels.wing.sub}
            </text>
          </g>

          {/* ========================================================
              5. 雞腿部 (大腿排·骨腿)
             ======================================================== */}
          <g
            id="primal-chicken-thigh"
            className="group"
            onClick={() => onSelectPrimal('chicken-thigh')}
            onMouseEnter={() => setHoveredPrimalId('chicken-thigh')}
            onMouseLeave={() => setHoveredPrimalId(null)}
          >
            <path
              d="M 550 260 C 565 230 570 195 560 165 C 620 165 680 185 725 220 C 735 255 720 295 690 325 C 640 345 590 340 550 310 C 540 295 545 275 550 260 Z"
              className={getPathClasses('chicken-thigh')}
            />
            <path
              d="M 550 260 C 565 230 570 195 560 165 C 620 165 680 185 725 220 C 735 255 720 295 690 325 C 640 345 590 340 550 310 C 540 295 545 275 550 260 Z"
              fill="url(#chickenEtch)"
              pointerEvents="none"
            />
            <text x="640" y="245" textAnchor="middle" fontFamily="serif" fontSize="13.5" fontWeight="bold" fill={getTextFill('chicken-thigh')} pointerEvents="none">
              {labels.thigh.main}
            </text>
            <text x="640" y="262" textAnchor="middle" fontFamily="sans-serif" fontSize="9.5" fill={getTextFill('chicken-thigh')} opacity="0.85" pointerEvents="none">
              {labels.thigh.sub}
            </text>
          </g>

          {/* ========================================================
              6. 棒棒腿 (小腿部)
             ======================================================== */}
          <g
            id="primal-chicken-drumstick"
            className="group"
            onClick={() => onSelectPrimal('chicken-drumstick')}
            onMouseEnter={() => setHoveredPrimalId('chicken-drumstick')}
            onMouseLeave={() => setHoveredPrimalId(null)}
          >
            <path
              d="M 550 310 C 590 340 640 345 690 325 C 700 360 705 400 680 440 C 650 480 610 495 570 480 C 550 450 545 400 540 360 C 540 335 545 320 550 310 Z"
              className={getPathClasses('chicken-drumstick')}
            />
            <path
              d="M 550 310 C 590 340 640 345 690 325 C 700 360 705 400 680 440 C 650 480 610 495 570 480 C 550 450 545 400 540 360 C 540 335 545 320 550 310 Z"
              fill="url(#chickenCross)"
              pointerEvents="none"
            />
            {/* 雞爪關節示意線 */}
            <path d="M 570 480 L 560 525 M 575 485 L 585 530 M 580 480 L 600 520" stroke="#78716C" strokeWidth="2.5" strokeLinecap="round" />
            <text x="625" y="405" textAnchor="middle" fontFamily="serif" fontSize="13" fontWeight="bold" fill={getTextFill('chicken-drumstick')} pointerEvents="none">
              {labels.drumstick.main}
            </text>
            <text x="625" y="422" textAnchor="middle" fontFamily="sans-serif" fontSize="9.5" fill={getTextFill('chicken-drumstick')} opacity="0.85" pointerEvents="none">
              {labels.drumstick.sub}
            </text>
          </g>

          {/* ========================================================
              7. 雞尾與背部 (七里香·牡蠣肉)
             ======================================================== */}
          <g
            id="primal-chicken-tail"
            className="group"
            onClick={() => onSelectPrimal('chicken-tail')}
            onMouseEnter={() => setHoveredPrimalId('chicken-tail')}
            onMouseLeave={() => setHoveredPrimalId(null)}
          >
            <path
              d="M 725 220 C 770 210 820 220 850 250 C 875 275 870 310 830 330 C 795 345 750 345 710 335 C 720 295 735 255 725 220 Z"
              className={getPathClasses('chicken-tail')}
            />
            <path
              d="M 725 220 C 770 210 820 220 850 250 C 875 275 870 310 830 330 C 795 345 750 345 710 335 C 720 295 735 255 725 220 Z"
              fill="url(#chickenEtch)"
              pointerEvents="none"
            />
            <text x="795" y="275" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="bold" fill={getTextFill('chicken-tail')} pointerEvents="none">
              {labels.tail.main}
            </text>
            <text x="795" y="292" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill={getTextFill('chicken-tail')} opacity="0.85" pointerEvents="none">
              {labels.tail.sub}
            </text>
          </g>

          {/* ========================================================
              8. 軟骨與內臟 (三角骨·雞心)
             ======================================================== */}
          <g
            id="primal-chicken-cartilage"
            className="group"
            onClick={() => onSelectPrimal('chicken-cartilage')}
            onMouseEnter={() => setHoveredPrimalId('chicken-cartilage')}
            onMouseLeave={() => setHoveredPrimalId(null)}
          >
            <path
              d="M 440 410 C 450 380 445 350 435 320 C 465 295 510 275 550 260 C 545 275 540 295 550 310 C 545 320 540 335 540 360 C 500 385 470 405 440 410 Z"
              className={getPathClasses('chicken-cartilage')}
            />
            <path
              d="M 440 410 C 450 380 445 350 435 320 C 465 295 510 275 550 260 C 545 275 540 295 550 310 C 545 320 540 335 540 360 C 500 385 470 405 440 410 Z"
              fill="url(#chickenCross)"
              pointerEvents="none"
            />
            <text x="495" y="340" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="bold" fill={getTextFill('chicken-cartilage')} pointerEvents="none">
              {labels.cartilage.main}
            </text>
            <text x="495" y="356" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill={getTextFill('chicken-cartilage')} opacity="0.85" pointerEvents="none">
              {labels.cartilage.sub}
            </text>
          </g>
        </svg>
      </div>

      {/* 底部圖例說明條 */}
      <div className="mt-4 pt-3 border-t border-parchment-200 flex flex-wrap items-center justify-between gap-2 text-xs text-charcoal-muted font-sans">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-beef-burgundy inline-block" />
            <span>{t.anatomy.legendSelected || '已選中部位'}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-parchment-300 border border-stone-500 inline-block" />
            <span>{t.anatomy.legendInteractive || '可點擊探索引導'}</span>
          </span>
        </div>
        <div className="text-[11px] italic font-serif text-charcoal-muted/80">
          * 依據日式職人燒鳥 (Yakitori) 與古典法式家禽分切標準
        </div>
      </div>
    </div>
  );
}
