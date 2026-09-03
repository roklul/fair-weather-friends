import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ExternalLink } from '../Icons';

export default function FullCutTable({ activeCategory, cutsData, primalAreas, onOpenModal }) {
  const [filterPrimal, setFilterPrimal] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    setFilterPrimal('all');
    setQuery('');
  }, [activeCategory]);

  const filteredData = cutsData.filter((item) => {
    const matchesPrimal = filterPrimal === 'all' || item.primalId === filterPrimal;
    const matchesQuery =
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.enName.toLowerCase().includes(query.toLowerCase()) ||
      item.aliases.toLowerCase().includes(query.toLowerCase()) ||
      item.primalName.toLowerCase().includes(query.toLowerCase());
    return matchesPrimal && matchesQuery;
  });

  const categoryTitle = activeCategory === 'beef' ? '牛肉' : activeCategory === 'pork' ? '豬肉' : '魚類海鮮';

  return (
    <section id="comparison-table" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 區塊標題 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-charcoal text-xs font-semibold tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>全景對照 · 快速決策速查表</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          熱門{categoryTitle}部位規格總覽比較表
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base">
          一覽 12 款熱門部位的解剖區域、油脂口感、代表料理與建議酒款，方便快速橫向比對。
        </p>
      </div>

      {/* 篩選與搜尋列 */}
      <div className="bg-parchment-50 p-4 rounded-2xl border border-parchment-300 mb-6 flex flex-col md:flex-row items-center justify-between gap-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-bold text-charcoal-muted">分切區域：</span>
          <select
            value={filterPrimal}
            onChange={(e) => setFilterPrimal(e.target.value)}
            className="text-xs bg-parchment-100 border border-parchment-300 rounded-lg px-3 py-2 text-charcoal focus:outline-hidden focus:ring-2 focus:ring-beef-burgundy"
          >
            <option value="all">全部分切區域 (All Parts)</option>
            {primalAreas.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.enName})
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 text-charcoal-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={`搜尋${categoryTitle}部位或別名...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-parchment-100 border border-parchment-300 rounded-lg text-charcoal placeholder:text-charcoal-muted/60 focus:outline-hidden focus:ring-2 focus:ring-beef-burgundy"
          />
        </div>
      </div>

      {/* 響應式表格容器 */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
            <thead>
              <tr className="bg-parchment-200/80 border-b border-parchment-300 text-charcoal font-serif font-bold">
                <th className="py-3.5 px-4">部位名稱</th>
                <th className="py-3.5 px-4">標準英文名稱</th>
                <th className="py-3.5 px-4">解剖位置</th>
                <th className="py-3.5 px-4">油脂與口感</th>
                <th className="py-3.5 px-4">最適合料理</th>
                <th className="py-3.5 px-4">建議搭配酒款</th>
                <th className="py-3.5 px-4 text-center">詳情</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment-200 text-charcoal-light">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-parchment-100/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-charcoal">
                    <div className="flex items-center gap-1.5">
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-serif italic text-charcoal-muted">{item.enName}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-parchment-200 text-charcoal text-xs font-medium">
                      {item.primalName}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">{item.tagBadge}</td>
                  <td className="py-3.5 px-4">{item.cookingMethods.map((m) => m.name).join('、')}</td>
                  <td className="py-3.5 px-4 font-serif italic text-purple-950 font-medium">
                    {item.winePairing.wines[0]}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => onOpenModal(item)}
                      className="p-1.5 rounded-md hover:bg-beef-burgundy hover:text-white text-beef-burgundy transition-colors"
                      title="查看詳細規格"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
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
