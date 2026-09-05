'use client';

import React, { useState } from 'react';
import { Utensils, Wine, Sparkles, BookOpen } from '../Icons';

export default function WesternTableVisualizer({ data, currentLang }) {
  const { westernSetting } = data;
  const [selectedCourse, setSelectedCourse] = useState('all'); // 'all' | 'appetizer' | 'soup' | 'main' | 'dessert'
  const [highlightedUtensil, setHighlightedUtensil] = useState(null);

  const courseSteps = [
    { id: 'all', label: '全部餐位一覽', desc: '標準完整西餐餐位配置（三至四道菜規格）。' },
    { id: 'appetizer', label: '1. 前菜/沙律階段', desc: '使用最外側的沙律叉（左最外）與前菜刀（右中間）。' },
    { id: 'soup', label: '2. 湯品階段', desc: '使用右側最外側的圓形湯匙，由內向外舀取。' },
    { id: 'main', label: '3. 主菜肉類階段', desc: '使用最靠餐盤的主菜刀（右手）與主菜叉（左手），切一口吃一口。' },
    { id: 'dessert', label: '4. 甜點階段', desc: '使用餐盤正上方的甜點匙或甜點叉。' },
  ];

  return (
    <section id="western-setting" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">
      
      {/* 標題與簡介 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
          <Utensils className="w-3.5 h-3.5 text-emerald-800" />
          <span>CHAPTER 03 · 西餐餐位與餐具擺設</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {westernSetting.title}
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
          {westernSetting.desc}
        </p>
      </div>

      {/* 互動式西餐餐位向量圖 (Custom SVG Place Setting) */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-3xl p-5 sm:p-8 shadow-sm mb-12">
        
        {/* 上菜模擬器按鈕列 */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-parchment-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-charcoal uppercase tracking-wider">
              🍽️ 由外至內上菜模擬器：
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {courseSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setSelectedCourse(step.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCourse === step.id
                    ? 'bg-beef-burgundy text-white shadow-xs'
                    : 'bg-parchment-200/80 text-charcoal hover:bg-parchment-300'
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>
        </div>

        {/* 當前道數說明提示條 */}
        <div className="mb-6 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center justify-between">
          <span>💡 <strong>當前階段：</strong> {courseSteps.find(s => s.id === selectedCourse)?.desc}</span>
          <span className="text-amber-800 font-mono text-[11px] hidden sm:inline">由外至內 (Outside-In) 原則</span>
        </div>

        {/* SVG 餐位畫布 */}
        <div className="w-full max-w-4xl mx-auto aspect-[16/9] sm:aspect-[16/10] relative select-none bg-parchment-100/60 rounded-2xl border border-parchment-200 p-2 flex items-center justify-center">
          
          <svg viewBox="0 0 800 500" className="w-full h-full max-h-[480px]">
            
            {/* 桌布基底線條 */}
            <rect x="20" y="20" width="760" height="460" rx="16" fill="#FAF7F0" stroke="#E1D9C9" strokeWidth="2" />

            {/* 1. 左上方：麵包盤與奶油刀 */}
            <g
              className="cursor-pointer transition-all"
              onClick={() => setHighlightedUtensil('bread')}
              opacity={selectedCourse === 'all' || selectedCourse === 'appetizer' ? 1 : 0.4}
            >
              {/* 麵包盤 */}
              <circle cx="160" cy="110" r="55" fill="#EEEAE0" stroke="#CFC3B2" strokeWidth="2" />
              <circle cx="160" cy="110" r="38" fill="#FCFAF6" stroke="#CFC3B2" strokeWidth="1" />
              <text x="160" y="114" textAnchor="middle" fontSize="11" fill="#6B4C38" fontWeight="bold">麵包盤</text>
              {/* 奶油刀 (橫跨或斜置) */}
              <rect x="120" y="90" width="80" height="6" rx="3" fill="#A89279" transform="rotate(-30 160 90)" />
              <text x="160" y="145" textAnchor="middle" fontSize="9" fill="#57534E">奶油刀</text>
            </g>

            {/* 2. 右上方：玻璃杯組 (水杯、紅酒杯、白酒杯) */}
            <g className="cursor-pointer transition-all">
              {/* 水杯 (Water Goblet) - 最左/最高 */}
              <g onClick={() => setHighlightedUtensil('waterGlass')}>
                <ellipse cx="500" cy="100" rx="22" ry="10" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M 478 100 Q 500 150 522 100 Z" fill="#BAE6FD" opacity="0.6" stroke="#38BDF8" strokeWidth="1.5" />
                <line x1="500" y1="130" x2="500" y2="160" stroke="#38BDF8" strokeWidth="3" />
                <ellipse cx="500" cy="160" rx="18" ry="5" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
                <text x="500" y="80" textAnchor="middle" fontSize="10" fill="#0369A1" fontWeight="bold">水杯</text>
              </g>

              {/* 紅酒杯 (Red Wine) - 中間 */}
              <g onClick={() => setHighlightedUtensil('redWineGlass')}>
                <ellipse cx="560" cy="115" rx="20" ry="9" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.5" />
                <path d="M 540 115 Q 560 165 580 115 Z" fill="#FBCFE8" opacity="0.6" stroke="#DB2777" strokeWidth="1.5" />
                <line x1="560" y1="145" x2="560" y2="175" stroke="#DB2777" strokeWidth="3" />
                <ellipse cx="560" cy="175" rx="16" ry="4" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.5" />
                <text x="560" y="98" textAnchor="middle" fontSize="10" fill="#9D174D" fontWeight="bold">紅酒杯</text>
              </g>

              {/* 白酒杯 (White Wine) - 最右/較小 */}
              <g onClick={() => setHighlightedUtensil('whiteWineGlass')}>
                <ellipse cx="620" cy="130" rx="17" ry="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                <path d="M 603 130 Q 620 175 637 130 Z" fill="#FDE68A" opacity="0.6" stroke="#D97706" strokeWidth="1.5" />
                <line x1="620" y1="155" x2="620" y2="185" stroke="#D97706" strokeWidth="3" />
                <ellipse cx="620" cy="185" rx="14" ry="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                <text x="620" y="115" textAnchor="middle" fontSize="10" fill="#B45309" fontWeight="bold">白酒杯</text>
              </g>
            </g>

            {/* 3. 正上方：甜點餐具 (甜點匙向右、甜點叉向左) */}
            <g
              className="cursor-pointer transition-all"
              onClick={() => setHighlightedUtensil('dessert')}
              opacity={selectedCourse === 'all' || selectedCourse === 'dessert' ? 1 : 0.3}
            >
              {/* 甜點匙 (柄向右) */}
              <rect
                x="350"
                y="85"
                width="110"
                height="6"
                rx="3"
                fill={selectedCourse === 'dessert' ? '#D8963E' : '#7C2333'}
                className={selectedCourse === 'dessert' ? 'animate-pulse' : ''}
              />
              <ellipse cx="345" cy="88" rx="12" ry="7" fill={selectedCourse === 'dessert' ? '#D8963E' : '#7C2333'} />
              {/* 甜點叉 (柄向左) */}
              <rect
                x="340"
                y="105"
                width="110"
                height="6"
                rx="3"
                fill={selectedCourse === 'dessert' ? '#D8963E' : '#7C2333'}
                className={selectedCourse === 'dessert' ? 'animate-pulse' : ''}
              />
              <path d="M 450 102 L 465 102 M 450 105 L 465 105 M 450 108 L 465 108" stroke={selectedCourse === 'dessert' ? '#D8963E' : '#7C2333'} strokeWidth="2" />
              <text x="400" y="75" textAnchor="middle" fontSize="10" fill="#7C2333" fontWeight="bold">
                甜點匙 & 甜點叉 (柄向左右相反)
              </text>
            </g>

            {/* 4. 中央：展示盤與主餐盤 */}
            <g className="cursor-pointer" onClick={() => setHighlightedUtensil('plate')}>
              {/* 展示大盤 (Service Plate) */}
              <circle cx="400" cy="310" r="115" fill="#EEEAE0" stroke="#CFC3B2" strokeWidth="3" />
              {/* 主餐盤 (Dinner Plate) */}
              <circle cx="400" cy="310" r="95" fill="#FCFAF6" stroke="#B84A39" strokeWidth="2" />
              {/* 餐盤中央花紋 */}
              <circle cx="400" cy="310" r="65" fill="#F7F4ED" stroke="#E1D9C9" strokeWidth="1" strokeDasharray="4 2" />
              <text x="400" y="305" textAnchor="middle" fontSize="14" fill="#1C1917" fontWeight="bold" fontFamily="serif">
                展示盤 / 主餐盤
              </text>
              <text x="400" y="325" textAnchor="middle" fontSize="10" fill="#57534E">
                Service & Dinner Plate
              </text>
            </g>

            {/* 5. 左側餐叉組：沙律叉 (外) + 主菜叉 (內) */}
            <g className="cursor-pointer">
              
              {/* 最外側：沙律/前菜叉 (Salad Fork) */}
              <g
                onClick={() => setHighlightedUtensil('saladFork')}
                opacity={selectedCourse === 'all' || selectedCourse === 'appetizer' ? 1 : 0.3}
              >
                <rect
                  x="220"
                  y="240"
                  width="12"
                  height="140"
                  rx="4"
                  fill={selectedCourse === 'appetizer' ? '#B84A39' : '#57534E'}
                  className={selectedCourse === 'appetizer' ? 'animate-pulse' : ''}
                />
                {/* 叉齒 */}
                <path d="M 218 240 L 218 205 M 224 240 L 224 205 M 230 240 L 230 205" stroke={selectedCourse === 'appetizer' ? '#B84A39' : '#57534E'} strokeWidth="2.5" />
                <text x="225" y="405" textAnchor="middle" fontSize="10" fill="#B84A39" fontWeight="bold">沙律叉</text>
                <text x="225" y="420" textAnchor="middle" fontSize="8" fill="#57534E">(外側/先)</text>
              </g>

              {/* 內側：主菜叉 (Dinner Fork) */}
              <g
                onClick={() => setHighlightedUtensil('dinnerFork')}
                opacity={selectedCourse === 'all' || selectedCourse === 'main' ? 1 : 0.3}
              >
                <rect
                  x="255"
                  y="225"
                  width="14"
                  height="165"
                  rx="5"
                  fill={selectedCourse === 'main' ? '#B84A39' : '#1C1917'}
                  className={selectedCourse === 'main' ? 'animate-pulse' : ''}
                />
                <path d="M 252 225 L 252 185 M 258 225 L 258 185 M 264 225 L 264 185 M 270 225 L 270 185" stroke={selectedCourse === 'main' ? '#B84A39' : '#1C1917'} strokeWidth="2.5" />
                <text x="262" y="405" textAnchor="middle" fontSize="10" fill="#1C1917" fontWeight="bold">主菜叉</text>
                <text x="262" y="420" textAnchor="middle" fontSize="8" fill="#57534E">(內側/後)</text>
              </g>

            </g>

            {/* 6. 右側餐刀與湯匙組：主菜刀 (內) + 魚刀/前菜刀 (中) + 湯匙 (外) */}
            <g className="cursor-pointer">
              
              {/* 內側：主菜刀 (Dinner Knife - 刃朝內) */}
              <g
                onClick={() => setHighlightedUtensil('dinnerKnife')}
                opacity={selectedCourse === 'all' || selectedCourse === 'main' ? 1 : 0.3}
              >
                <rect
                  x="530"
                  y="225"
                  width="14"
                  height="165"
                  rx="4"
                  fill={selectedCourse === 'main' ? '#B84A39' : '#1C1917'}
                  className={selectedCourse === 'main' ? 'animate-pulse' : ''}
                />
                <path d="M 530 225 Q 520 185 530 185 L 544 185 L 544 225 Z" fill={selectedCourse === 'main' ? '#B84A39' : '#1C1917'} />
                <text x="537" y="405" textAnchor="middle" fontSize="10" fill="#1C1917" fontWeight="bold">主菜刀</text>
                <text x="537" y="420" textAnchor="middle" fontSize="8" fill="#57534E">(刃向內)</text>
              </g>

              {/* 中間：魚刀 / 前菜刀 */}
              <g
                onClick={() => setHighlightedUtensil('fishKnife')}
                opacity={selectedCourse === 'all' || selectedCourse === 'appetizer' ? 1 : 0.3}
              >
                <rect
                  x="565"
                  y="235"
                  width="12"
                  height="150"
                  rx="4"
                  fill={selectedCourse === 'appetizer' ? '#B84A39' : '#57534E'}
                  className={selectedCourse === 'appetizer' ? 'animate-pulse' : ''}
                />
                <path d="M 565 235 Q 556 198 565 198 L 577 198 L 577 235 Z" fill={selectedCourse === 'appetizer' ? '#B84A39' : '#57534E'} />
                <text x="571" y="405" textAnchor="middle" fontSize="10" fill="#57534E" fontWeight="bold">魚/前菜刀</text>
              </g>

              {/* 最外側：湯匙 (Soup Spoon) */}
              <g
                onClick={() => setHighlightedUtensil('soupSpoon')}
                opacity={selectedCourse === 'all' || selectedCourse === 'soup' ? 1 : 0.3}
              >
                <rect
                  x="600"
                  y="245"
                  width="12"
                  height="140"
                  rx="4"
                  fill={selectedCourse === 'soup' ? '#D8963E' : '#57534E'}
                  className={selectedCourse === 'soup' ? 'animate-pulse' : ''}
                />
                <ellipse cx="606" cy="215" rx="16" ry="24" fill={selectedCourse === 'soup' ? '#D8963E' : '#57534E'} />
                <text x="606" y="405" textAnchor="middle" fontSize="10" fill="#D8963E" fontWeight="bold">湯匙</text>
                <text x="606" y="420" textAnchor="middle" fontSize="8" fill="#57534E">(外側/先)</text>
              </g>

            </g>

            {/* 7. 最左側或餐盤上：餐巾 (Napkin) */}
            <g
              className="cursor-pointer"
              onClick={() => setHighlightedUtensil('napkin')}
            >
              <rect x="75" y="235" width="95" height="150" rx="8" fill="#FCFAF6" stroke="#B84A39" strokeWidth="2" strokeDasharray="4 2" />
              <text x="122" y="310" textAnchor="middle" fontSize="12" fill="#661824" fontWeight="bold" fontFamily="serif">
                餐巾 (Napkin)
              </text>
              <text x="122" y="330" textAnchor="middle" fontSize="9" fill="#57534E">
                入座後置於膝上
              </text>
            </g>

          </svg>

        </div>

      </div>

      {/* 西餐餐具辨識表 */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-2xl p-5 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-emerald-800" />
          <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal">
            {westernSetting.utensilsListTitle}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-parchment-300 bg-parchment-200/70 font-serif text-charcoal">
                <th className="py-3 px-4 font-bold text-xs uppercase w-[22%]">餐位位置</th>
                <th className="py-3 px-4 font-bold text-xs uppercase w-[33%] text-emerald-800">餐具名稱 (Name)</th>
                <th className="py-3 px-4 font-bold text-xs uppercase w-[45%] text-charcoal-muted">主要用途與功能 (Usage)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment-200 font-sans">
              {westernSetting.utensils.map((u, i) => (
                <tr key={i} className="hover:bg-parchment-100 transition-colors">
                  <td className="py-3 px-4 font-bold text-charcoal text-xs whitespace-nowrap">
                    {u.pos}
                  </td>
                  <td className="py-3 px-4 font-semibold text-emerald-900">
                    {u.name}
                  </td>
                  <td className="py-3 px-4 text-charcoal-light text-xs leading-relaxed">
                    {u.usage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
