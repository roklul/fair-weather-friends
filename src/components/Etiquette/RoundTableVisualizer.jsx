'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, BookOpen, Utensils } from '../Icons';

export default function RoundTableVisualizer({ data, currentLang = 'zh-TW' }) {
  const { seating } = data;
  const [activeSeat, setActiveSeat] = useState('host'); // 'host' | 'vip1' | 'vip2' | 'cohost' | 'guest1' | 'guest2' | 'guest3' | 'guest4'
  const [isRotating, setIsRotating] = useState(false);

  const SEAT_I18N = {
    'zh-TW': {
      host: { label: '主位 (主人席)', badge: '最重要席次 · 面向大門', desc: '正對宴會廳大門、視野最好、最能縱觀全場之席位。負責掌控開席節奏、舉杯與招呼主賓。', short: '👑主位' },
      vip1: { label: '主賓 (第一貴賓)', badge: '以右為尊 · 主位右手側', desc: '全場最尊貴之客人，安排在主位的右手側。主人通常第一道菜先請主賓夾取，並最先向其敬茶。', short: '⭐主賓' },
      vip2: { label: '副主賓 (次賓)', badge: '主位左手側', desc: '全場第二位重要貴賓，安排在主位的左手側。由主人或副陪協助照料。', short: '副賓' },
      guest1: { label: '三賓 / 重要陪同', badge: '主賓右側', desc: '主賓方的核心主管或長輩，坐在主賓右手側，方便共同交流。', short: '三賓' },
      guest2: { label: '四賓 / 業務協調', badge: '次賓左側', desc: '次賓方的陪同人員或業務負責人，坐在次賓左手側。', short: '四賓' },
      guest3: { label: '一般賓客 / 陪同人員', badge: '側翼席位', desc: '依親疏或職務由外圍向內依序安排，協助熱絡席間氣氛。', short: '客' },
      guest4: { label: '一般賓客 / 隨員', badge: '側翼席位', desc: '依業務需求安排，方便與對座夥伴溝通交流。', short: '隨員' },
      cohost: { label: '副陪 (主陪助理)', badge: '背對大門 · 近服務動線', desc: '坐在主位正對面、背對大門位置。負責聯繫服務人員、催菜、倒酒及照顧下首賓客。', short: '副陪' },
      sharedDishes: '🍲 共享菜餚',
      doorIndicator: '🚪 宴會廳主要入口方向 (面門為上)',
      rotateBtnStop: '⏸️ 停止旋轉盤',
      rotateBtnStart: '🔄 模擬旋轉轉盤',
      clickSeatHint: '點擊上方任一座位查看尊卑與招呼責任',
      roleBadge: '席位角色詳解',
      keyRulesTitle: '📜 圓桌核心座次規則（Key Rules）：',
      rule1Title: '面門為尊：',
      rule1Desc: '主位必定正對大門，能掌握全場進出動線。',
      rule2Title: '以右為尊：',
      rule2Desc: '第一貴賓（主賓）坐主人右手邊，次賓坐左手邊。',
      rule3Title: '副陪照應：',
      rule3Desc: '背對大門為下座，由副陪坐鎮，負責催菜與服務。',
      quickSelect: '快速選擇席位：'
    },
    'en': {
      host: { label: 'Host Seat', badge: 'Primary Seat · Facing Entrance', desc: 'Directly faces the banquet hall entrance with optimal view of the entire room. Controls pace, toasts, and greets VIPs.', short: '👑Host' },
      vip1: { label: 'Guest of Honor (VIP 1)', badge: 'Honor on the Right', desc: 'The most distinguished guest, seated immediately to the host’s right. Served first and greeted earliest.', short: '⭐VIP1' },
      vip2: { label: 'Secondary VIP (VIP 2)', badge: 'Host’s Left Side', desc: 'The second most honored guest, seated to the host’s immediate left.', short: 'VIP2' },
      guest1: { label: '3rd Guest / Senior Colleague', badge: 'Right of VIP 1', desc: 'Senior executive or elder accompanying VIP 1, seated to their right for direct interaction.', short: 'Guest' },
      guest2: { label: '4th Guest / Coordinator', badge: 'Left of VIP 2', desc: 'Coordinator or key lead accompanying VIP 2, seated to their left.', short: 'Guest' },
      guest3: { label: 'General Guest / Colleague', badge: 'Wing Seat', desc: 'Arranged along the table sides to foster lively dinner conversation.', short: 'Guest' },
      guest4: { label: 'General Guest / Assistant', badge: 'Wing Seat', desc: 'Arranged according to business needs to facilitate communication across the table.', short: 'Guest' },
      cohost: { label: 'Co-Host (Vice Host)', badge: 'Back to Door · Service Liaison', desc: 'Seated directly opposite the host with back to the door. Coordinates with waitstaff and serves lower-table guests.', short: 'Co-Host' },
      sharedDishes: '🍲 Shared Dishes',
      doorIndicator: '🚪 Main Banquet Hall Entrance (Facing Door is Superior)',
      rotateBtnStop: '⏸️ Stop Lazy Susan',
      rotateBtnStart: '🔄 Simulate Lazy Susan Spin',
      clickSeatHint: 'Click any seat above to view seating hierarchy and responsibilities',
      roleBadge: 'Seat Role Details',
      keyRulesTitle: '📜 Core Round Table Seating Rules:',
      rule1Title: 'Facing Door is Superior:',
      rule1Desc: 'The host seat strictly faces the main door to maintain situational awareness.',
      rule2Title: 'Honor on the Right:',
      rule2Desc: 'The seat to the host’s right is the position of highest honor reserved for VIP 1.',
      rule3Title: 'Co-Host Liaison:',
      rule3Desc: 'The co-host sits back to the door to liaison with servers and manage course timing.',
      quickSelect: 'Quick select seat:'
    },
    'ja': {
      host: { label: '主位（ホスト席）', badge: '最重要席 · 入口正面', desc: '宴会場の入口を正面に見据え、全体を見渡せる最上位席。宴の進行、乾杯の音頭、主賓の歓待を担います。', short: '👑主位' },
      vip1: { label: '主賓（第1ゲスト）', badge: '右上位 · 主位の右側', desc: '最も尊ばれる来賓。主位の右隣に座り、料理の最初の一箸や最初の乾杯を受けます。', short: '⭐主賓' },
      vip2: { label: '副主賓（第2ゲスト）', badge: '主位の左側', desc: '2番目に重要な来賓。主位の左隣に座り、ホストや副ホストが手厚くもてなします。', short: '副賓' },
      guest1: { label: '第3ゲスト / 随行責任者', badge: '主賓の右側', desc: '主賓側の幹部や年長者。主賓の右側に座り、スムーズな会話を支えます。', short: '3賓' },
      guest2: { label: '第4ゲスト / 連絡係', badge: '副主賓の左側', desc: '副主賓側の随行者や実務担当者。副主賓の左隣に座ります。', short: '4賓' },
      guest3: { label: '一般ゲスト / 同席者', badge: '側翼席', desc: '双方の同席者や一般の知人。席を盛り上げ、会話をつなぐ位置に座ります。', short: '客' },
      guest4: { label: '一般ゲスト / アシスタント', badge: '側翼席', desc: '随行秘書や実務補佐。急な用件や調整をスムーズにサポートします。', short: '客' },
      cohost: { label: '副ホスト（サブホスト）', badge: '入口側 · サービス動線', desc: '主位の正面、入口に背を向けた下座。給仕との連絡、料理出しの調整を担当します。', short: '副陪' },
      sharedDishes: '🍲 共有料理',
      doorIndicator: '🚪 宴会場の主要入口方向（面門為上：入口正面が上座）',
      rotateBtnStop: '⏸️ ターンテーブル停止',
      rotateBtnStart: '🔄 ターンテーブル回転',
      clickSeatHint: '座席をクリックすると役割と作法の詳細が表示されます',
      roleBadge: '座席の役割解説',
      keyRulesTitle: '📜 円卓席順の基本原則（Key Rules）：',
      rule1Title: '入口正面が最上位：',
      rule1Desc: '主位は必ず入口を正面に見据え、部屋全体を把握できる位置にします。',
      rule2Title: '右上位の原則：',
      rule2Desc: '最重要ゲストは必ずホストの右隣に座ります。',
      rule3Title: '副ホストの補佐：',
      rule3Desc: '副ホストは入口側に座り、給仕との連絡や料理出しの調整を担います。',
      quickSelect: '座席を直接選択：'
    }
  };

  const ui = SEAT_I18N[currentLang] || SEAT_I18N['zh-TW'];

  // 圓桌席位定義
  const seats = [
    {
      id: 'host',
      label: ui.host.label,
      badge: ui.host.badge,
      short: ui.host.short,
      x: 250,
      y: 60,
      color: '#B84A39',
      desc: ui.host.desc
    },
    {
      id: 'vip1',
      label: ui.vip1.label,
      badge: ui.vip1.badge,
      short: ui.vip1.short,
      x: 375,
      y: 115,
      color: '#D8963E',
      desc: ui.vip1.desc
    },
    {
      id: 'vip2',
      label: ui.vip2.label,
      badge: ui.vip2.badge,
      short: ui.vip2.short,
      x: 125,
      y: 115,
      color: '#D8963E',
      desc: ui.vip2.desc
    },
    {
      id: 'guest1',
      label: ui.guest1.label,
      badge: ui.guest1.badge,
      short: ui.guest1.short,
      x: 430,
      y: 240,
      color: '#5B705B',
      desc: ui.guest1.desc
    },
    {
      id: 'guest2',
      label: ui.guest2.label,
      badge: ui.guest2.badge,
      short: ui.guest2.short,
      x: 70,
      y: 240,
      color: '#5B705B',
      desc: ui.guest2.desc
    },
    {
      id: 'guest3',
      label: ui.guest3.label,
      badge: ui.guest3.badge,
      short: ui.guest3.short,
      x: 375,
      y: 365,
      color: '#6B4C38',
      desc: ui.guest3.desc
    },
    {
      id: 'guest4',
      label: ui.guest4.label,
      badge: ui.guest4.badge,
      short: ui.guest4.short,
      x: 125,
      y: 365,
      color: '#6B4C38',
      desc: ui.guest4.desc
    },
    {
      id: 'cohost',
      label: ui.cohost.label,
      badge: ui.cohost.badge,
      short: ui.cohost.short,
      x: 250,
      y: 420,
      color: '#333A42',
      desc: ui.cohost.desc
    },
  ];

  const currentSeatObj = seats.find((s) => s.id === activeSeat) || seats[0];

  return (
    <section id="chinese-seating" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">
      
      {/* 標題與引導 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
          <Compass className="w-3.5 h-3.5 text-amber-800" />
          <span>{data.chapters?.c02}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {seating.title}
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
          {seating.desc}
        </p>
      </div>

      {/* 互動式原創圓桌向量圖 (Custom SVG) + 席位詳情面板 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-parchment-50 border border-parchment-300 rounded-3xl p-5 sm:p-8 shadow-sm mb-12">
        
        {/* 左側 SVG 圓桌地圖 (7 欄) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          
          <div className="w-full max-w-[460px] aspect-square relative select-none">
            
            {/* SVG 畫布 */}
            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-md">
              
              {/* 大圓桌主體 */}
              <circle
                cx="250"
                cy="240"
                r="170"
                fill="#EEEAE0"
                stroke="#CFC3B2"
                strokeWidth="3"
                className="transition-all"
              />

              {/* 旋轉桌轉盤 (Lazy Susan) */}
              <circle
                cx="250"
                cy="240"
                r="105"
                fill="#FCFAF6"
                stroke="#B84A39"
                strokeWidth="2"
                strokeDasharray="6 4"
                className={`transition-transform duration-1000 ${isRotating ? 'animate-spin' : ''}`}
                style={{ transformOrigin: '250px 240px' }}
              />

              {/* 轉盤中心料理盤示意 */}
              <g className={`transition-transform duration-1000 ${isRotating ? 'animate-spin' : ''}`} style={{ transformOrigin: '250px 240px' }}>
                <circle cx="250" cy="240" r="45" fill="#E1D9C9" stroke="#A89279" strokeWidth="1.5" />
                <circle cx="250" cy="240" r="25" fill="#D8963E" opacity="0.4" />
                <text x="250" y="244" textAnchor="middle" fill="#661824" fontSize="12" fontWeight="bold" fontFamily="serif">
                  {ui.sharedDishes}
                </text>
                
                {/* 轉盤外圍點綴盤皿 */}
                <circle cx="250" cy="165" r="16" fill="#F7F4ED" stroke="#CFC3B2" />
                <circle cx="325" cy="240" r="16" fill="#F7F4ED" stroke="#CFC3B2" />
                <circle cx="250" cy="315" r="16" fill="#F7F4ED" stroke="#CFC3B2" />
                <circle cx="175" cy="240" r="16" fill="#F7F4ED" stroke="#CFC3B2" />
              </g>

              {/* 連線至大門箭頭指示 */}
              <line x1="250" y1="460" x2="250" y2="485" stroke="#8B1E1E" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="245,465 250,455 255,465" fill="#8B1E1E" />

              {/* 各席位按鈕 */}
              {seats.map((seat) => {
                const isSelected = activeSeat === seat.id;
                return (
                  <g
                    key={seat.id}
                    onClick={() => setActiveSeat(seat.id)}
                    className="cursor-pointer group transition-all"
                  >
                    {/* 席位外光暈 (選中時) */}
                    {isSelected && (
                      <circle
                        cx={seat.x}
                        cy={seat.y}
                        r="32"
                        fill={seat.color}
                        opacity="0.25"
                        className="animate-pulse"
                      />
                    )}

                    {/* 席位圓圈 */}
                    <circle
                      cx={seat.x}
                      cy={seat.y}
                      r="26"
                      fill={isSelected ? seat.color : '#FCFAF6'}
                      stroke={seat.color}
                      strokeWidth={isSelected ? '3' : '2'}
                      className="transition-all transform group-hover:scale-110"
                    />

                    {/* 席位圖示或編號 */}
                    <text
                      x={seat.x}
                      y={seat.y + 4}
                      textAnchor="middle"
                      fill={isSelected ? '#FFFFFF' : seat.color}
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                    >
                      {seat.short}
                    </text>
                  </g>
                );
              })}

            </svg>

            {/* 底部入口方向標示 */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-beef-burgundy text-white text-[11px] font-bold shadow-sm whitespace-nowrap">
              <span>{ui.doorIndicator}</span>
            </div>
          </div>

          {/* 轉盤互動控制按鈕 */}
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-parchment-300 bg-parchment-100 hover:bg-parchment-200 text-xs font-bold text-charcoal shadow-2xs transition-all"
            >
              <span>{isRotating ? ui.rotateBtnStop : ui.rotateBtnStart}</span>
            </button>
            <span className="text-xs text-charcoal-muted">{ui.clickSeatHint}</span>
          </div>

        </div>

        {/* 右側席位說明抽屜卡片 (5 欄) */}
        <div className="lg:col-span-5 bg-parchment-100 border border-parchment-300 rounded-2xl p-6 shadow-inner space-y-4">
          
          <div className="flex items-center justify-between gap-2 border-b border-parchment-300 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-beef-burgundy font-bold px-2 py-0.5 rounded bg-beef-burgundy/10">
                {ui.roleBadge}
              </span>
              <h3 className="text-xl font-serif font-bold text-charcoal mt-1">
                {currentSeatObj.label}
              </h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              {currentSeatObj.badge}
            </span>
          </div>

          <p className="text-sm text-charcoal-light leading-relaxed font-sans">
            {currentSeatObj.desc}
          </p>

          <div className="pt-2 border-t border-parchment-200 space-y-2">
            <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
              {ui.keyRulesTitle}
            </h4>
            <ul className="text-xs text-charcoal-muted space-y-1.5 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-beef-burgundy font-bold">1.</span>
                <span><strong>{ui.rule1Title}</strong>{ui.rule1Desc}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-beef-burgundy font-bold">2.</span>
                <span><strong>{ui.rule2Title}</strong>{ui.rule2Desc}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-beef-burgundy font-bold">3.</span>
                <span><strong>{ui.rule3Title}</strong>{ui.rule3Desc}</span>
              </li>
            </ul>
          </div>

          {/* 快速切換席位標籤 */}
          <div className="pt-2">
            <span className="text-[11px] text-charcoal-muted font-bold block mb-1.5">{ui.quickSelect}</span>
            <div className="flex flex-wrap gap-1.5">
              {seats.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSeat(s.id)}
                  className={`px-2 py-1 rounded text-[11px] font-bold transition-all ${
                    activeSeat === s.id
                      ? 'bg-charcoal text-white'
                      : 'bg-parchment-50 text-charcoal-light border border-parchment-300 hover:bg-parchment-200'
                  }`}
                >
                  {s.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 旋轉桌 (Lazy Susan) 使用 6 大守則 */}
      <div className="bg-amber-50/70 border border-amber-300/80 rounded-2xl p-6 sm:p-8 mb-12">
        <h3 className="text-lg font-serif font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span>🔄</span>
          <span>旋轉桌（轉盤）使用 6 大優雅守則</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {seating.turntableRules.map((rule, idx) => (
            <div key={idx} className="bg-parchment-50/90 border border-amber-200/80 p-3.5 rounded-xl text-xs text-charcoal-light leading-relaxed">
              <span className="font-bold text-amber-900 mr-1.5">0{idx + 1}.</span>
              {rule}
            </div>
          ))}
        </div>
      </div>

      {/* 6 大實務決策表 */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-2xl p-5 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-beef-burgundy" />
          <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal">
            {seating.decisionTableTitle}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-parchment-300 bg-parchment-200/70 font-serif text-charcoal">
                <th className="py-3 px-4 font-bold text-xs uppercase w-[20%]">聚餐情境</th>
                <th className="py-3 px-4 font-bold text-xs uppercase w-[25%] text-beef-burgundy">優先考量</th>
                <th className="py-3 px-4 font-bold text-xs uppercase w-[55%] text-charcoal-muted">建議做法</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment-200 font-sans">
              {seating.decisionScenarios.map((sc, i) => (
                <tr key={i} className="hover:bg-parchment-100 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-charcoal whitespace-nowrap">
                    {sc.scenario}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-beef-burgundy">
                    {sc.priority}
                  </td>
                  <td className="py-3.5 px-4 text-charcoal-light leading-relaxed">
                    {sc.advice}
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
