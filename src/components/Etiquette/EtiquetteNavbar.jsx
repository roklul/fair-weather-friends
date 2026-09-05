'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { WineMeatBrandLogo, Sparkles, Menu, X, ArrowLeft, BookOpen, Utensils } from '../Icons';

export default function EtiquetteNavbar({ currentLang = 'zh-TW', onSelectLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  const navLabels = {
    'zh-TW': {
      brand: '酒肉朋友',
      tag: 'DINING ETIQUETTE',
      subtitle: '中西餐桌禮儀全方位指南',
      backToHome: '返回肉品侍酒圖鑑',
      sections: [
        { name: '文化差異', href: '#culture-diff' },
        { name: '中餐座次', href: '#chinese-seating' },
        { name: '西餐餐位', href: '#western-setting' },
        { name: '筷子禁忌', href: '#chinese-flow' },
        { name: '刀叉語言', href: '#western-flow' },
        { name: '失禮對照', href: '#faux-pas' },
        { name: '用餐場合', href: '#scenarios' },
        { name: '實用清單', href: '#checklist' },
      ],
      startChecklist: '開始檢查',
    },
    'en': {
      brand: 'FAIR-WEATHER',
      tag: 'DINING ETIQUETTE',
      subtitle: 'Chinese & Western Dining Etiquette Guide',
      backToHome: 'Return to Meat & Wine Guide',
      sections: [
        { name: 'Culture', href: '#culture-diff' },
        { name: 'Chinese Seating', href: '#chinese-seating' },
        { name: 'Western Setting', href: '#western-setting' },
        { name: 'Chopsticks', href: '#chinese-flow' },
        { name: 'Cutlery Signals', href: '#western-flow' },
        { name: 'Faux Pas', href: '#faux-pas' },
        { name: 'Scenarios', href: '#scenarios' },
        { name: 'Checklist', href: '#checklist' },
      ],
      startChecklist: 'Checklist',
    },
    'ja': {
      brand: '酒肉朋友',
      tag: 'DINING ETIQUETTE',
      subtitle: '中華・西洋テーブルマナー完全ガイド',
      backToHome: '肉とワイン図鑑へ戻る',
      sections: [
        { name: '文化差異', href: '#culture-diff' },
        { name: '中華の席順', href: '#chinese-seating' },
        { name: '西洋の配置', href: '#western-setting' },
        { name: '箸のタブー', href: '#chinese-flow' },
        { name: 'カトラリー合図', href: '#western-flow' },
        { name: '無作法比較', href: '#faux-pas' },
        { name: '食事シーン', href: '#scenarios' },
        { name: 'チェックリスト', href: '#checklist' },
      ],
      startChecklist: '確認する',
    }
  }[currentLang] || {
    brand: '酒肉朋友',
    tag: 'DINING ETIQUETTE',
    subtitle: '中西餐桌禮儀全方位指南',
    backToHome: '返回肉品侍酒圖鑑',
    sections: [
      { name: '文化差異', href: '#culture-diff' },
      { name: '中餐座次', href: '#chinese-seating' },
      { name: '西餐餐位', href: '#western-setting' },
      { name: '筷子禁忌', href: '#chinese-flow' },
      { name: '刀叉語言', href: '#western-flow' },
      { name: '失禮對照', href: '#faux-pas' },
      { name: '用餐場合', href: '#scenarios' },
      { name: '實用清單', href: '#checklist' },
    ],
    startChecklist: '開始檢查',
  };

  return (
    <header className="sticky top-0 z-40 bg-parchment-100/95 backdrop-blur-md border-b border-parchment-300 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          
          {/* 品牌識別與標題 */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative shrink-0">
              <WineMeatBrandLogo className="w-10 h-10 sm:w-11 sm:h-11 shadow-md group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif font-extrabold text-lg sm:text-2xl tracking-tight text-charcoal">
                  {navLabels.brand}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-amber-900 px-1 sm:px-1.5 py-0.5 border border-amber-800/40 rounded bg-amber-100/80 uppercase font-bold">
                  {navLabels.tag}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-charcoal-muted tracking-wider hidden md:inline font-sans">
                {navLabels.subtitle}
              </span>
            </div>
          </Link>

          {/* 返回首頁快捷按鈕 */}
          <Link
            href="/"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-parchment-300 bg-parchment-50 hover:bg-parchment-200 text-xs font-semibold text-charcoal shadow-2xs transition-all whitespace-nowrap"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-beef-burgundy" />
            <span>{navLabels.backToHome}</span>
          </Link>

          {/* 錨點章節導航 */}
          <nav className="hidden 2xl:flex items-center gap-3 shrink-0">
            {navLabels.sections.map((sec) => (
              <a
                key={sec.name}
                href={sec.href}
                className="text-xs font-medium text-charcoal-muted hover:text-beef-burgundy transition-all py-1 whitespace-nowrap"
              >
                {sec.name}
              </a>
            ))}
          </nav>

          {/* 右側：語言切換 + CTA + 手機漢堡 */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* 多語系切換器 */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-parchment-300 bg-parchment-50 hover:bg-parchment-200 text-xs font-semibold text-charcoal shadow-2xs transition-all whitespace-nowrap"
                aria-label="Select Language"
              >
                <span>{currentLangObj.flag}</span>
                <span className="hidden md:inline">{currentLangObj.label}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-parchment-50 border border-parchment-300 rounded-xl shadow-lg p-1.5 z-50 animate-fadeIn">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLang?.(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-colors ${
                        currentLang === lang.code
                          ? 'bg-beef-burgundy text-white'
                          : 'text-charcoal hover:bg-parchment-200'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 清單直達 CTA */}
            <a
              href="#checklist"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-beef-burgundy hover:bg-beef-red rounded-md shadow-sm transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{navLabels.startChecklist}</span>
            </a>

            {/* 漢堡選單 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-2 rounded-md text-charcoal hover:bg-parchment-200 transition-colors shrink-0"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 手機選單 */}
      {mobileMenuOpen && (
        <div className="2xl:hidden border-b border-parchment-300 bg-parchment-100 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-bold text-beef-burgundy bg-beef-burgundy/10 border border-beef-burgundy/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{navLabels.backToHome}</span>
          </Link>

          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLabels.sections.map((sec) => (
              <a
                key={sec.name}
                href={sec.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-charcoal hover:bg-parchment-200"
              >
                <span>•</span>
                <span>{sec.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-parchment-200 flex items-center justify-between">
            <span className="text-xs text-charcoal-muted">多語系：</span>
            <div className="flex gap-1.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    onSelectLang?.(l.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                    currentLang === l.code
                      ? 'bg-beef-burgundy text-white border-beef-burgundy'
                      : 'bg-parchment-50 text-charcoal border-parchment-300'
                  }`}
                >
                  {l.flag} {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
