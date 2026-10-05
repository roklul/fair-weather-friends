'use client';

import React, { useState } from 'react';
import { BookOpen } from '../Icons';

export default function FauxPasTable({ data, currentLang }) {
  const { fauxPas } = data;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const CAT_MAP = ['eating', 'eating', 'eating', 'utensils', 'utensils', 'eating', 'social', 'social', 'eating', 'social', 'eating', 'social', 'utensils'];

  const categories = [
    { id: 'all', label: fauxPas.filterAll },
    { id: 'eating', label: fauxPas.filterStart },
    { id: 'utensils', label: fauxPas.filterUtensils },
    { id: 'social', label: fauxPas.filterSocial },
  ];

  const filteredList = fauxPas.list.filter((item, idx) => {
    const itemCatId = item.catId || CAT_MAP[idx % CAT_MAP.length];
    const matchesCat =
      selectedCategory === 'all' ||
      itemCatId === selectedCategory ||
      item.category === selectedCategory;

    const matchesSearch =
      !searchTerm ||
      item.behavior.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.chinese.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.western.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.improvement.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <section id="faux-pas" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-parchment-300">
      
      {/* 標題與簡介 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5 text-amber-800" />
          <span>{data.chapters?.c06}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {fauxPas.title}
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
          {fauxPas.desc}
        </p>
      </div>

      {/* 篩選器與即時搜尋欄 */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-2xl p-4 sm:p-6 mb-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* 分類標籤按鈕 */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-charcoal text-white shadow-2xs'
                  : 'bg-parchment-200 text-charcoal hover:bg-parchment-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 搜尋輸入框 */}
        <div className="w-full sm:w-72 relative">
          <input
            type="text"
            placeholder={currentLang === 'en' ? 'Search faux pas or advice...' : currentLang === 'ja' ? 'マナー違反や改善策を検索...' : '搜尋失禮行為或改善對策...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-parchment-100 border border-parchment-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-beef-burgundy text-charcoal placeholder:text-charcoal-muted/60"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-charcoal-muted">🔍</span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-charcoal-muted hover:text-charcoal"
            >
              ✕
            </button>
          )}
        </div>

      </div>

      {/* 失禮行為比較表 */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-3xl p-5 sm:p-8 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b-2 border-parchment-300 bg-parchment-200/70 font-serif text-charcoal">
                <th className="py-3.5 px-4 font-bold text-xs uppercase w-[18%]">{fauxPas.tableHeaders?.behavior}</th>
                <th className="py-3.5 px-4 font-bold text-xs uppercase w-[27%] text-beef-burgundy">🥢 {fauxPas.tableHeaders?.chinese}</th>
                <th className="py-3.5 px-4 font-bold text-xs uppercase w-[27%] text-emerald-800">🍴 {fauxPas.tableHeaders?.western}</th>
                <th className="py-3.5 px-4 font-bold text-xs uppercase w-[28%] text-amber-900">✨ {fauxPas.tableHeaders?.improvement}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment-200 font-sans">
              {filteredList.map((row, idx) => (
                <tr key={idx} className="hover:bg-parchment-100/90 transition-colors">
                  <td className="py-4 px-4 font-bold text-charcoal text-xs align-top">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-amber-100/80 text-[10px] text-amber-900 font-mono mb-1 mr-1.5">
                      #{idx + 1}
                    </span>
                    <span className="block sm:inline">{row.behavior}</span>
                  </td>
                  <td className="py-4 px-4 text-xs text-charcoal-light leading-relaxed align-top">
                    {row.chinese}
                  </td>
                  <td className="py-4 px-4 text-xs text-charcoal-light leading-relaxed align-top">
                    {row.western}
                  </td>
                  <td className="py-4 px-4 text-xs font-medium text-emerald-950 bg-emerald-50/40 rounded-xl leading-relaxed align-top">
                    {row.improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredList.length === 0 && (
          <div className="py-12 text-center text-charcoal-muted text-xs">
            查無相符的失禮行為關鍵字，請嘗試清除搜尋條件。
          </div>
        )}
      </div>

    </section>
  );
}
