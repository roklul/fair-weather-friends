'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, BookOpen } from '../Icons';

export default function InteractiveChecklist({ data, currentLang }) {
  const { checklist, conclusion } = data;
  const [checkedItems, setCheckedItems] = useState({});

  // 載入與暫存勾選狀態
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dining_etiquette_checklist');
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleToggle = (key) => {
    const next = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(next);
    try {
      localStorage.setItem('dining_etiquette_checklist', JSON.stringify(next));
    } catch (e) {
      // ignore
    }
  };

  const handleReset = () => {
    setCheckedItems({});
    try {
      localStorage.removeItem('dining_etiquette_checklist');
    } catch (e) {
      // ignore
    }
  };

  // 計算總項目與完成比例
  const allItemsCount = checklist.categories.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const percent = allItemsCount > 0 ? Math.round((completedCount / allItemsCount) * 100) : 0;

  return (
    <section id="checklist" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">
      
      {/* 標題與簡介 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
          <span>✅</span>
          <span>CHAPTER 10 · 實用互動檢查清單</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {checklist.title}
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
          {checklist.subtitle}
        </p>
      </div>

      {/* 互動進度儀表板 */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-3xl p-6 sm:p-8 shadow-sm mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <div>
              <span className="text-xs font-mono uppercase text-charcoal-muted font-bold">
                {checklist.progressLabel}
              </span>
              <div className="text-lg font-bold text-charcoal font-serif">
                已完成 {completedCount} / {allItemsCount} 項 · {percent}%
              </div>
            </div>
          </div>
          
          <button
            onClick={handleReset}
            className="px-3.5 py-1.5 rounded-lg border border-parchment-300 bg-parchment-100 hover:bg-parchment-200 text-xs font-bold text-charcoal-muted hover:text-charcoal transition-all"
          >
            {checklist.resetBtn}
          </button>
        </div>

        {/* 進度條 */}
        <div className="w-full bg-parchment-200 rounded-full h-3.5 overflow-hidden border border-parchment-300">
          <div
            className="bg-gradient-to-r from-amber-600 via-beef-burgundy to-emerald-700 h-full rounded-full transition-all duration-500 shadow-inner"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      {/* 4 大檢查分類卡片網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {checklist.categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-parchment-50 border border-parchment-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-charcoal mb-4 pb-3 border-b border-parchment-200">
                {cat.title}
              </h3>
              <div className="space-y-2.5">
                {cat.items.map((item, idx) => {
                  const key = `${cat.id}_${idx}`;
                  const isChecked = !!checkedItems[key];
                  return (
                    <label
                      key={idx}
                      onClick={() => handleToggle(key)}
                      className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer border transition-all ${
                        isChecked
                          ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950'
                          : 'bg-parchment-100/70 border-parchment-200 text-charcoal hover:bg-parchment-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 rounded border-parchment-300 text-beef-burgundy focus:ring-beef-burgundy"
                      />
                      <span className={`text-xs leading-relaxed ${isChecked ? 'line-through opacity-80' : ''}`}>
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 結語：五大現代餐桌禮儀核心原則 */}
      <div className="bg-parchment-50 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-2xl">🌟</span>
          <h3 className="text-xl sm:text-3xl font-serif font-bold text-charcoal">
            {conclusion.title}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
            {conclusion.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {conclusion.principles.map((pr, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-parchment-100/90 border border-parchment-300 flex flex-col justify-between hover:border-amber-400 transition-all text-center sm:text-left"
            >
              <div>
                <span className="text-xs font-mono font-bold text-beef-burgundy block mb-1">
                  RULE {pr.num}
                </span>
                <h4 className="text-sm font-serif font-bold text-charcoal mb-1">
                  {pr.title}
                </h4>
                <p className="text-[11px] text-charcoal-muted leading-relaxed font-sans">
                  {pr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
