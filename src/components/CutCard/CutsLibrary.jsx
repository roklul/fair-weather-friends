import React, { useState, useEffect } from 'react';
import CutCard from './CutCard';
import { Search, Utensils, ChevronDown, ChevronUp } from '../Icons';
import { TRANSLATIONS } from '../../data/translations';

export default function CutsLibrary({ activeCategory, cutsData, onOpenModal, currentLang = 'zh-TW' }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const cl = t.cutsLibrary;
  const categoryTitle = t.categories[activeCategory]?.shortLabel || activeCategory;

  // 依品類與語言定義專屬快速標籤
  const categoryFilters = {
    beef: {
      'zh-TW': [
        { id: 'all', label: '全部 12 款精選部位' },
        { id: 'steak', label: '經典牛排主力 (肋眼·菲力·紐約客·沙朗)' },
        { id: 'bbq-hotpot', label: '火鍋·燒烤首選 (牛小排·五花·翼板)' },
        { id: 'stew', label: '慢燉·紅燒·牛肉麵 (牛腱·牛腩)' },
        { id: 'lean', label: '低脂高蛋白·快炒 (板腱·腹脇·臀肉)' },
      ],
      'en': [
        { id: 'all', label: 'All 12 Featured Beef Cuts' },
        { id: 'steak', label: 'Steakhouse Classics (Ribeye · Filet · Strip · Sirloin)' },
        { id: 'bbq-hotpot', label: 'BBQ & Hotpot (Short Rib · Plate · Flat Iron)' },
        { id: 'stew', label: 'Slow Stew & Braise (Shank · Brisket)' },
        { id: 'lean', label: 'Lean & High Protein (Top Blade · Flank · Round)' },
      ],
      'ja': [
        { id: 'all', label: '厳選牛肉12部位すべて' },
        { id: 'steak', label: 'ステーキの王道 (リブロース·フィレ·サーロイン)' },
        { id: 'bbq-hotpot', label: '焼肉・しゃぶしゃぶ (カルビ·ミスジ·ザブトン)' },
        { id: 'stew', label: 'コトコト煮込み (スネ肉·ブリスケット)' },
        { id: 'lean', label: 'ヘルシー赤身 (ミスジ·フランク·モモ)' },
      ]
    },
    pork: {
      'zh-TW': [
        { id: 'all', label: '全部 12 款精選部位' },
        { id: 'pork-stew', label: '控肉·滷燉·年菜 (五花·蹄膀·前腿)' },
        { id: 'pork-fry', label: '炸豬排·快炒 (大里肌·小里肌·松阪)' },
        { id: 'pork-bbq', label: '燒烤·叉燒·火鍋 (梅花肉·肋排·松阪)' },
        { id: 'pork-soup', label: '肉餡·膠質高湯 (胛心·後腿·豬腳)' },
      ],
      'en': [
        { id: 'all', label: 'All 12 Featured Pork Cuts' },
        { id: 'pork-stew', label: 'Braise & Stew (Belly · Hock · Picnic)' },
        { id: 'pork-fry', label: 'Tonkatsu & Flash Sear (Loin · Tenderloin · Jowl)' },
        { id: 'pork-bbq', label: 'BBQ & Hotpot (Collar · Ribs · Belly)' },
        { id: 'pork-soup', label: 'Mince & Collagen Broth (Shoulder · Ham · Trotters)' },
      ],
      'ja': [
        { id: 'all', label: '厳選豚肉12部位すべて' },
        { id: 'pork-stew', label: '角煮・煮込み (バラ·豚足·ウデ)' },
        { id: 'pork-fry', label: 'とんかつ・炒め物 (ロース·ヒレ·トントロ)' },
        { id: 'pork-bbq', label: '焼肉・BBQ・鍋 (肩ロース·スペアリブ·バラ)' },
        { id: 'pork-soup', label: 'ひき肉・コラーゲンスープ (モモ·豚足·頬肉)' },
      ]
    },
    fish: {
      'zh-TW': [
        { id: 'all', label: '全部 12 款精選海味' },
        { id: 'fish-sear', label: '香煎·清蒸排 (鮭魚·石斑·鱸魚·扁鱈)' },
        { id: 'fish-fatty', label: '肥美魚肚·刺身 (鮪魚大腹·虱目魚肚·下巴)' },
        { id: 'fish-pot', label: '砂鍋·魚頭清湯 (大魚頭·石斑頭·白帶魚)' },
        { id: 'fish-special', label: '老饕珍味·年節 (野生烏魚子·土魠魚)' },
      ],
      'en': [
        { id: 'all', label: 'All 12 Featured Seafood Cuts' },
        { id: 'fish-sear', label: 'Pan-Sear & Steam Fillet (Salmon · Grouper · Sea Bass)' },
        { id: 'fish-fatty', label: 'Rich Belly & Sashimi (Otoro · Belly Strips · Collar)' },
        { id: 'fish-pot', label: 'Claypot & Fish Head Soup (Split Head · Ribbonfish)' },
        { id: 'fish-special', label: 'Gourmet Delicacies (Wild Mullet Roe · King Mackerel)' },
      ],
      'ja': [
        { id: 'all', label: '厳選海鮮12部位すべて' },
        { id: 'fish-sear', label: 'ソテー・清蒸フィレ (サーモン·ハタ·スズキ)' },
        { id: 'fish-fatty', label: '極上脂・刺身 (大トロ·ハラス·カマ)' },
        { id: 'fish-pot', label: '鍋物・アラ汁 (魚頭·太刀魚·サバ)' },
        { id: 'fish-special', label: '珍味・祝宴 (からすみ·サワラ)' },
      ]
    }
  };

  const langKey = ['en', 'ja'].includes(currentLang) ? currentLang : 'zh-TW';
  const filterTabs = categoryFilters[activeCategory]?.[langKey] || categoryFilters.beef['zh-TW'];

  // 重設篩選標籤與展開狀態
  useEffect(() => {
    setSelectedFilter('all');
    setSearchQuery('');
    setIsExpanded(false);
  }, [activeCategory]);

  const filteredCuts = cutsData.filter((cut) => {
    const matchesSearch =
      cut.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cut.enName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cut.aliases && cut.aliases.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (cut.primalName && cut.primalName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (cut.keywords && cut.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase())));

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
      if (selectedFilter === 'fish-sear') return ['salmon-fillet-cut', 'grouper-fillet', 'barramundi-fillet', 'threadfin-steak', 'spanish-mackerel'].includes(cut.id);
      if (selectedFilter === 'fish-fatty') return ['tuna-otoro-cut', 'milkfish-belly-cut', 'amberjack-collar', 'mackerel-fillet'].includes(cut.id);
      if (selectedFilter === 'fish-pot') return ['barramundi-fillet', 'grouper-fillet', 'pomfret-steak', 'milkfish-belly-cut'].includes(cut.id);
      if (selectedFilter === 'fish-special') return ['mullet-bottarga', 'milkfish-loin-cut', 'spanish-mackerel', 'tuna-otoro-cut'].includes(cut.id);
    }

    return true;
  });

  // 判斷是否需要收納折疊：若未搜尋且未選特定分類且未展開，則只顯示前 6 筆
  const shouldLimit = selectedFilter === 'all' && searchQuery.trim() === '' && !isExpanded;
  const displayedCuts = shouldLimit ? filteredCuts.slice(0, 6) : filteredCuts;

  const expandLabel = currentLang === 'en'
    ? `Show All ${filteredCuts.length} Cuts`
    : currentLang === 'ja'
    ? `全 ${filteredCuts.length} 部位をすべて表示`
    : `展開查看全部 ${filteredCuts.length} 款部位`;

  const collapseLabel = currentLang === 'en'
    ? 'Show Less'
    : currentLang === 'ja'
    ? '折りたたむ'
    : '收合精選清單';

  return (
    <section id="cuts-library" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 標題與引言 */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beef-burgundy/10 border border-beef-burgundy/30 text-beef-burgundy text-xs font-semibold tracking-wider uppercase">
          <Utensils className="w-3.5 h-3.5" />
          <span>{cl.badge} ({categoryTitle})</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
          {categoryTitle}{cl.title}
        </h2>
        <p className="text-charcoal-muted text-sm sm:text-base">
          {cl.subtitle}
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
              placeholder={currentLang === 'en' ? `Search ${categoryTitle} cuts or keywords...` : currentLang === 'ja' ? `${categoryTitle}の部位名やキーワードで検索...` : `搜尋${categoryTitle}中文、英文、別名或關鍵字...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-parchment-100 border border-parchment-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-beef-burgundy text-charcoal placeholder:text-charcoal-muted/60"
            />
          </div>

          {/* 統計筆數 */}
          <div className="text-xs text-charcoal-muted font-medium self-end md:self-center">
            {currentLang === 'en' ? (
              <>Showing: <span className="font-bold text-beef-burgundy">{displayedCuts.length}</span> / {cutsData.length} items</>
            ) : currentLang === 'ja' ? (
              <>該当: <span className="font-bold text-beef-burgundy">{displayedCuts.length}</span> / {cutsData.length} 件</>
            ) : (
              <>符合條件：<span className="font-bold text-beef-burgundy">{displayedCuts.length}</span> / {cutsData.length} 款品項</>
            )}
          </div>
        </div>

        {/* 分類標籤籤頁 */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-parchment-200">
          {filterTabs.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedFilter(cat.id);
                if (cat.id !== 'all') setIsExpanded(true);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
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

      {/* 卡片網格 (3 欄) */}
      {displayedCuts.length > 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCuts.map((cut) => (
              <CutCard key={cut.id} cut={cut} onOpenModal={onOpenModal} currentLang={currentLang} />
            ))}
          </div>

          {/* 展開 / 收合控制按鈕 */}
          {filteredCuts.length > 6 && selectedFilter === 'all' && searchQuery.trim() === '' && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-parchment-100 hover:bg-parchment-200 text-charcoal border border-parchment-300 font-bold text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                {isExpanded ? (
                  <>
                    <span>{collapseLabel}</span>
                    <ChevronUp className="w-4 h-4 text-beef-burgundy" />
                  </>
                ) : (
                  <>
                    <span>{expandLabel}</span>
                    <ChevronDown className="w-4 h-4 text-beef-burgundy" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16 bg-parchment-50 rounded-2xl border border-parchment-300">
          <p className="text-charcoal-muted text-sm">
            {currentLang === 'en' ? 'No matching cuts found. Try a different search term or category.' : currentLang === 'ja' ? '該当する部位が見つかりませんでした。検索条件を変更してください。' : '找不到符合條件的部位，請嘗試更換搜尋字詞或分類標籤。'}
          </p>
        </div>
      )}

    </section>
  );
}
