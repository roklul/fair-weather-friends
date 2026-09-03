import React, { useState, useEffect } from 'react';
import CutCard from './CutCard';
import { Search, Utensils } from '../Icons';

export default function CutsLibrary({ activeCategory, cutsData, onOpenModal }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 依品類定義專屬快速標籤
  const categoryFilters = {
    beef: [
      { id: 'all', label: '全部 12 款精選部位' },
      { id: 'steak', label: '經典牛排主力 (肋眼·菲力·紐約客·沙朗)' },
      { id: 'bbq-hotpot', label: '火鍋·燒烤首選 (牛小排·五花·翼板)' },
      { id: 'stew', label: '慢燉·紅燒·牛肉麵 (牛腱·牛腩)' },
      { id: 'lean', label: '低脂高蛋白·快炒 (板腱·腹脇·臀肉)' },
    ],
    pork: [
      { id: 'all', label: '全部 12 款精選部位' },
      { id: 'pork-stew', label: '控肉·滷燉·年菜 (五花·蹄膀·前腿)' },
      { id: 'pork-fry', label: '炸豬排·快炒 (大里肌·小里肌·松阪)' },
      { id: 'pork-bbq', label: '燒烤·叉燒·火鍋 (梅花肉·肋排·松阪)' },
      { id: 'pork-soup', label: '肉餡·膠質高湯 (胛心·後腿·豬腳)' },
    ],
    fish: [
      { id: 'all', label: '全部 12 款精選海味' },
      { id: 'fish-sear', label: '香煎·清蒸排 (鮭魚·石斑·鱸魚·扁鱈)' },
      { id: 'fish-fatty', label: '肥美魚肚·刺身 (鮪魚大腹·虱目魚肚·下巴)' },
      { id: 'fish-pot', label: '砂鍋·魚頭清湯 (大魚頭·石斑頭·白帶魚)' },
      { id: 'fish-special', label: '老饕珍味·年節 (野生烏魚子·土魠魚)' },
    ]
  };

  const filterTabs = categoryFilters[activeCategory] || categoryFilters.beef;

  // 重設篩選標籤
  useEffect(() => {
    setSelectedFilter('all');
    setSearchQuery('');
  }, [activeCategory]);

  const filteredCuts = cutsData.filter((cut) => {
    const matchesSearch =
      cut.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cut.enName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cut.aliases.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cut.primalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cut.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedFilter === 'all') return true;

    // 牛肉篩選
    if (activeCategory === 'beef') {
      if (selectedFilter === 'steak') return ['ribeye', 'tenderloin', 'new-york-strip', 'sirloin'].includes(cut.id);
      if (selectedFilter === 'bbq-hotpot') return ['short-rib', 'short-plate-cut', 'flat-iron'].includes(cut.id);
      if (selectedFilter === 'stew') return ['beef-shank', 'brisket-cut', 'short-rib'].includes(cut.id);
      if (selectedFilter === 'lean') return ['top-blade', 'flank-cut', 'round-rump', 'tenderloin'].includes(cut.id);
    }

    // 豬肉篩選
    if (activeCategory === 'pork') {
      if (selectedFilter === 'pork-stew') return ['pork-belly-cut', 'pork-hock-cut', 'pork-front-picnic'].includes(cut.id);
      if (selectedFilter === 'pork-fry') return ['pork-loin-chop', 'pork-tenderloin-cut', 'matsusaka-pork'].includes(cut.id);
      if (selectedFilter === 'pork-bbq') return ['pork-butt', 'pork-spare-ribs', 'matsusaka-pork', 'pork-belly-cut'].includes(cut.id);
      if (selectedFilter === 'pork-soup') return ['pork-blade-shoulder', 'pork-ham-leg', 'pork-trotters-cut', 'pork-jowl-cheek'].includes(cut.id);
    }

    // 魚類海鮮篩選
    if (activeCategory === 'fish') {
      if (selectedFilter === 'fish-sear') return ['salmon-fillet', 'grouper-fillet', 'barramundi-fillet', 'cod-steak', 'tilapia-fillet'].includes(cut.id);
      if (selectedFilter === 'fish-fatty') return ['tuna-otoro', 'milkfish-belly', 'salmon-collar'].includes(cut.id);
      if (selectedFilter === 'fish-pot') return ['fish-head-pot', 'ribbonfish-cut', 'mackerel-steak'].includes(cut.id);
      if (selectedFilter === 'fish-special') return ['mullet-roe', 'mackerel-steak', 'tuna-otoro'].includes(cut.id);
    }

    return true;
  });

  const categoryTitle = activeCategory === 'beef' ? '牛肉' : activeCategory === 'pork' ? '豬肉' : '魚類海鮮';

  return (
    <section id="cuts-library" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 標題與引言 */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beef-burgundy/10 border border-beef-burgundy/30 text-beef-burgundy text-xs font-semibold tracking-wider uppercase">
          <Utensils className="w-3.5 h-3.5" />
          <span>精選部位卡片庫 · 12 款熱門{categoryTitle}規格</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {categoryTitle}部位詳細卡片與三維指標
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base">
          採用標準化 7 大面向模板：解剖位置、三維指標打分、推薦料理、熟度原則與精準餐酒搭配。
        </p>
      </div>

      {/* 搜尋與分類過濾列 */}
      <div className="bg-parchment-50 p-4 sm:p-5 rounded-2xl border border-parchment-300 shadow-sm mb-8 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* 搜尋框 */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`搜尋${categoryTitle}中文、英文、別名或關鍵字...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-parchment-100 border border-parchment-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-beef-burgundy text-charcoal placeholder:text-charcoal-muted/60"
            />
          </div>

          {/* 統計筆數 */}
          <div className="text-xs text-charcoal-muted font-medium self-end md:self-center">
            符合條件：<span className="font-bold text-beef-burgundy">{filteredCuts.length}</span> / {cutsData.length} 款品項
          </div>
        </div>

        {/* 分類標籤籤頁 */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-parchment-200">
          {filterTabs.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                selectedFilter === cat.id
                  ? 'bg-beef-burgundy text-white border-beef-burgundy shadow-xs'
                  : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 12 款卡片網格 (3 欄) */}
      {filteredCuts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCuts.map((cut) => (
            <CutCard key={cut.id} cut={cut} onOpenModal={onOpenModal} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-parchment-50 rounded-2xl border border-parchment-300">
          <p className="text-charcoal-muted text-sm">找不到符合條件的部位，請嘗試更換搜尋字詞或分類標籤。</p>
        </div>
      )}

    </section>
  );
}
