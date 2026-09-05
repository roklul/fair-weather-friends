'use client';

import React from 'react';
import { Compass, Sparkles, BookOpen, Utensils, Wine } from '../Icons';

export default function EtiquetteHero({ data, currentLang }) {
  const pillars = {
    'zh-TW': [
      { icon: '🤝', title: '尊重他人', desc: '長幼尊卑 · 關照主客 · 不越他人邊界' },
      { icon: '🧼', title: '維護衛生', desc: '公筷公匙 · 骨刺入碟 · 避免污染公共盤' },
      { icon: '🧘', title: '舉止從容', desc: '閉口咀嚼 · 吞後再語 · 安靜不急躁' },
      { icon: '🌿', title: '節制優雅', desc: '適量取食 · 禮貌回覆 · 飲酒有度' },
    ],
    'en': [
      { icon: '🤝', title: 'Respect Others', desc: 'Seniority & host hierarchy · Respect space' },
      { icon: '🧼', title: 'Maintain Hygiene', desc: 'Serving utensils · Bone dishes · Clean tablecloth' },
      { icon: '🧘', title: 'Calm Demeanor', desc: 'Chew with lips closed · Speak after swallowing' },
      { icon: '🌿', title: 'Restraint & Poise', desc: 'Moderate portions · Prompt RSVP · Responsible drinking' },
    ],
    'ja': [
      { icon: '🤝', title: '他者への敬意', desc: '長幼の序列 · ホストへの配慮 · 境界の尊重' },
      { icon: '🧼', title: '衛生の保持', desc: '取り箸の徹底 · 骨皿の使用 · 清潔な食卓' },
      { icon: '🧘', title: '落ち着いた所作', desc: '口を閉じて咀嚼 · 飲み込んでから話す' },
      { icon: '🌿', title: '節度と気品', desc: '適量の取り分け · 出欠の連絡 · 節度ある飲酒' },
    ]
  }[currentLang] || [
    { icon: '🤝', title: '尊重他人', desc: '長幼尊卑 · 關照主客 · 不越他人邊界' },
    { icon: '🧼', title: '維護衛生', desc: '公筷公匙 · 骨刺入碟 · 避免污染公共盤' },
    { icon: '🧘', title: '舉止從容', desc: '閉口咀嚼 · 吞後再語 · 安靜不急躁' },
    { icon: '🌿', title: '節制優雅', desc: '適量取食 · 禮貌回覆 · 飲酒有度' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-parchment-200/80 via-parchment-100 to-parchment-100 border-b border-parchment-300 py-12 sm:py-16 lg:py-20">
      
      {/* 裝飾性背景光斑 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-beef-burgundy/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 頂部標籤 */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            {data.badge}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-charcoal-muted text-xs font-semibold">
            🛡️ 100% 原創向量圖表 · CC0 安全準則
          </span>
        </div>

        {/* 主標題與副標題 */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-charcoal tracking-tight leading-tight sm:leading-none">
            {data.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal-muted max-w-3xl mx-auto font-sans leading-relaxed">
            {data.subtitle}
          </p>

          {/* 核心金句卡片 */}
          <div className="pt-2">
            <blockquote className="inline-block p-4 sm:p-5 rounded-2xl bg-parchment-50/90 border border-parchment-300 shadow-sm text-sm sm:text-base font-serif italic text-charcoal-light max-w-3xl">
              {data.introQuote}
            </blockquote>
          </div>
        </div>

        {/* 四大核心支柱卡片 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mt-10">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-parchment-50/80 border border-parchment-300 shadow-2xs hover:shadow-sm hover:border-amber-400 transition-all group text-left"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform inline-block">
                {p.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-charcoal font-serif">
                {p.title}
              </h3>
              <p className="text-xs text-charcoal-muted mt-1 leading-normal font-sans">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 快速直達十大章節導覽列 */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3 text-center flex items-center justify-center gap-2">
            <Compass className="w-3.5 h-3.5" />
            <span>章節快速直達導航（Quick Directory）：</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {data.quickNav.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-parchment-50 hover:bg-parchment-200 border border-parchment-300 text-xs font-semibold text-charcoal hover:text-beef-burgundy shadow-2xs transition-all hover:-translate-y-0.5"
              >
                <span>{nav.icon}</span>
                <span>{nav.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
