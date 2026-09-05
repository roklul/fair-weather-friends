'use client';

import React, { useState } from 'react';
import { Utensils, Sparkles, BookOpen } from '../Icons';

export default function DiningScenarios({ data, currentLang }) {
  const { scenarios } = data;
  const [activeTab, setActiveTab] = useState('buffet'); // 'buffet' | 'banquet' | 'family'

  const tabs = [
    { id: 'buffet', label: '🥗 自助餐 (Buffet)', icon: '🥗' },
    { id: 'banquet', label: '🥂 正式宴會 (Banquet)', icon: '🥂' },
    { id: 'family', label: '🏡 日常家庭與幼兒', icon: '🏡' },
  ];

  return (
    <section id="scenarios" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">
      
      {/* 標題與簡介 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-800" />
          <span>CHAPTER 07 · 三大核心用餐場合</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {scenarios.title}
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
          {scenarios.desc}
        </p>
      </div>

      {/* 場合切換頁籤 */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 rounded-2xl bg-parchment-200 border border-parchment-300 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-charcoal text-white shadow-sm'
                  : 'text-charcoal-light hover:text-charcoal hover:bg-parchment-100'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 頁籤內容展示卡片 */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-3xl p-6 sm:p-10 shadow-sm">
        
        {/* 自助餐 */}
        {activeTab === 'buffet' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-parchment-200 pb-4">
              <span className="text-xs font-mono uppercase text-beef-burgundy font-bold">BUFFET RULES</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mt-1">
                {scenarios.buffet.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scenarios.buffet.points.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-parchment-100/80 border border-parchment-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-beef-burgundy/10 text-beef-burgundy text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 正式宴會 */}
        {activeTab === 'banquet' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-parchment-200 pb-4">
              <span className="text-xs font-mono uppercase text-amber-900 font-bold">BANQUET DECORUM</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mt-1">
                {scenarios.banquet.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scenarios.banquet.points.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-parchment-100/80 border border-parchment-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-900/10 text-amber-900 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 日常家庭與幼兒 */}
        {activeTab === 'family' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-parchment-200 pb-4">
              <span className="text-xs font-mono uppercase text-emerald-800 font-bold">FAMILY & CHILDREN</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mt-1">
                {scenarios.family.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scenarios.family.points.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-parchment-100/80 border border-parchment-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-800/10 text-emerald-800 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
