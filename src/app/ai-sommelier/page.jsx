'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import DemoDisclaimer from '../../components/Compliance/DemoDisclaimer';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import AiSommelierSection from '../../components/AiSommelier/AiSommelierSection';
import { WineMeatBrandLogo, ArrowLeft, ArrowUp } from '../../components/Icons';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

function AiSommelierInner() {
  const { currentLang = 'zh-TW' } = useLanguage() || {};
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get('category') || 'beef';
  const cookingParam = searchParams.get('cooking') || 'steak';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLabels = {
    'zh-TW': {
      title: 'AI 侍酒師工作台',
      subtitle: '米其林級肉品海鮮 × 侍酒調酒智能決策系統',
      backHome: '返回肉品侍酒圖鑑',
      etiquette: '🍽️ 餐桌禮儀指南',
      copyright: '版權聲明',
    },
    'en': {
      title: 'AI Sommelier Studio',
      subtitle: 'Michelin-Grade Meat & Wine/Cocktail Pairing Engine',
      backHome: 'Back to Meat Guide',
      etiquette: '🍽️ Dining Etiquette',
      copyright: 'Copyright Policy',
    },
    'ja': {
      title: 'AI ソムリエ専用スタジオ',
      subtitle: 'ミシュラン級の肉・海鮮 × ペアリング酒意思決定システム',
      backHome: '肉とワイン図鑑へ戻る',
      etiquette: '🍽️ テーブルマナー',
      copyright: '著作権について',
    }
  }[currentLang] || {
    title: 'AI 侍酒師工作台',
    subtitle: '米其林級肉品海鮮 × 侍酒調酒智能決策系統',
    backHome: '返回肉品侍酒圖鑑',
    etiquette: '🍽️ 餐桌禮儀指南',
    copyright: '版權聲明',
  };

  return (
    <div className="min-h-screen bg-parchment-100 text-charcoal font-sans selection:bg-amber-200 selection:text-amber-950 flex flex-col">
      {/* 受控展示型免責橫幅 */}
      <DemoDisclaimer currentLang={currentLang} />

      {/* 獨立頂部導覽列 */}
      <header className="sticky top-0 z-40 bg-parchment-50/95 backdrop-blur-md border-b border-parchment-300 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <WineMeatBrandLogo className="w-9 h-9 sm:w-10 sm:h-10 shadow-xs transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-base sm:text-lg text-charcoal group-hover:text-beef-burgundy transition-colors leading-tight">
                  {t.brandName}
                </span>
                <span className="text-[10px] font-mono text-beef-burgundy px-1.5 py-0.5 rounded bg-beef-burgundy/10 border border-beef-burgundy/20 font-bold uppercase">
                  AI STUDIO
                </span>
              </div>
              <span className="text-[11px] text-charcoal-muted hidden sm:inline font-sans">
                {navLabels.subtitle}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-charcoal-light hover:text-charcoal bg-parchment-100 hover:bg-parchment-200 transition-all border border-parchment-300 shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-beef-burgundy" />
              <span className="hidden sm:inline">{navLabels.backHome}</span>
              <span className="sm:hidden">首頁</span>
            </Link>

            <Link
              href="/etiquette"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-900 bg-amber-100/90 hover:bg-amber-200 transition-all border border-amber-300/80 shadow-2xs"
            >
              <span>{navLabels.etiquette}</span>
            </Link>

            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* 獨立主要內容區 */}
      <main className="flex-1">
        <AiSommelierSection
          key={`${categoryParam}-${cookingParam}`}
          currentLang={currentLang}
          initialCategory={categoryParam}
          initialCooking={cookingParam}
        />
      </main>

      {/* 頁尾 */}
      <footer className="bg-charcoal text-parchment-300 py-10 border-t border-charcoal-muted/30 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <WineMeatBrandLogo className="w-8 h-8 shrink-0" />
            <div>
              <div className="font-serif font-bold text-white text-sm">
                {t.brandName} · {navLabels.title}
              </div>
              <div className="text-[11px] text-parchment-400">
                嚴格遵循未成年護欄 · 支援自備 API Key (BYOK) · 零儲存隱私安全
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/copyright" className="hover:text-white transition-colors underline">
              {navLabels.copyright}
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-charcoal-light hover:bg-charcoal-muted text-parchment-200 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function AiSommelierPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-parchment-100 p-12 text-center font-mono text-sm text-charcoal">Loading AI Sommelier Studio...</div>}>
      <AiSommelierInner />
    </Suspense>
  );
}
