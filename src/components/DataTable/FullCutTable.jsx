import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ExternalLink } from '../Icons';
import { TRANSLATIONS } from '../../data/translations';
import { getLocalizedPrimal } from '../../data/primalsI18n';
import { getLocalizedCut } from '../../data/cutsI18n';

export default function FullCutTable({ activeCategory, cutsData, primalAreas, onOpenModal, currentLang = 'zh-TW' }) {
  const [filterPrimal, setFilterPrimal] = useState('all');
  const [query, setQuery] = useState('');
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const tb = t.table;
  const categoryTitle = t.categories[activeCategory]?.shortLabel || activeCategory;

  useEffect(() => {
    setFilterPrimal('all');
    setQuery('');
  }, [activeCategory]);

  const filteredData = cutsData.filter((item) => {
    const matchesPrimal = filterPrimal === 'all' || item.primalId === filterPrimal;
    const matchesQuery =
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.enName.toLowerCase().includes(query.toLowerCase()) ||
      (item.aliases && item.aliases.toLowerCase().includes(query.toLowerCase())) ||
      (item.primalName && item.primalName.toLowerCase().includes(query.toLowerCase()));
    return matchesPrimal && matchesQuery;
  });

  return (
    <section id="comparison-table" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 區塊標題 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-charcoal text-xs font-semibold tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{tb.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {tb.title} ({categoryTitle})
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base">
          {tb.subtitle}
        </p>
      </div>

      {/* 篩選與搜尋列 */}
      <div className="bg-parchment-50 p-4 rounded-2xl border border-parchment-300 mb-6 flex flex-col md:flex-row items-center justify-between gap-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-bold text-charcoal-muted">{tb.filterPrimal}</span>
          <select
            value={filterPrimal}
            onChange={(e) => setFilterPrimal(e.target.value)}
            className="text-xs bg-parchment-100 border border-parchment-300 rounded-lg px-3 py-2 text-charcoal focus:outline-hidden focus:ring-2 focus:ring-beef-burgundy"
          >
            <option value="all">{tb.allPrimals}</option>
            {primalAreas.map((p) => {
              const lp = getLocalizedPrimal(p, currentLang);
              return (
                <option key={p.id} value={p.id}>
                  {lp.name} ({p.enName})
                </option>
              );
            })}
          </select>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 text-charcoal-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={tb.searchPlaceholder}
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
                <th className="py-3.5 px-4">{tb.thName}</th>
                <th className="py-3.5 px-4">{currentLang === 'en' ? 'Chinese / Aliases' : currentLang === 'ja' ? '英語 / 原名' : 'English / Scientific'}</th>
                <th className="py-3.5 px-4">{tb.thPrimal}</th>
                <th className="py-3.5 px-4">{tb.thFat}</th>
                <th className="py-3.5 px-4">{tb.thCooking}</th>
                <th className="py-3.5 px-4">{tb.thDrink}</th>
                <th className="py-3.5 px-4 text-center">{tb.thAction}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment-200 text-charcoal-light">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-charcoal-muted">
                    {tb.emptySearch}
                  </td>
                </tr>
              ) : (
                filteredData.map((rawItem) => {
                  const item = getLocalizedCut(rawItem, currentLang);
                  const cutDisplayName = currentLang === 'en' ? (item.enName || item.name) : item.name;
                  const cutSubName = currentLang === 'en' ? (item.aliases || rawItem.name) : (item.enName || rawItem.enName);
                  const lp = getLocalizedPrimal({ id: item.primalId, name: item.primalName }, currentLang);

                  return (
                    <tr key={item.id} className="hover:bg-parchment-100/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-charcoal">
                        <div className="flex items-center gap-1.5">
                          <span>{cutDisplayName}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-serif italic text-charcoal-muted">{cutSubName}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-parchment-200 text-charcoal text-xs font-medium">
                          {lp.name || item.primalName}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">{item.tagBadge}</td>
                      <td className="py-3.5 px-4">{item.cookingRecommendations || item.cookingMethods?.map((m) => m.name).join(' · ')}</td>
                      <td className="py-3.5 px-4 font-serif italic text-purple-950 font-medium">
                        {item.winePairingDisplay || item.winePairing?.wines?.[0] || '—'}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => onOpenModal(item)}
                          className="p-1.5 rounded-md hover:bg-beef-burgundy hover:text-white text-beef-burgundy transition-colors cursor-pointer"
                          title={tb.viewDetail}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}

