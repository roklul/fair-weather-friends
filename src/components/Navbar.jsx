import React, { useState } from 'react';
import { Compass, Wine, Utensils, BookOpen, HelpCircle, Menu, X, Sparkles, WineMeatBrandLogo } from './Icons';
import { TRANSLATIONS } from '../data/translations';

export default function Navbar({
  activeCategory,
  onSelectCategory,
  currentLang = 'zh-TW',
  onSelectLang
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];

  const categories = [
    { id: 'beef', label: t.categories.beef.label, shortLabel: t.categories.beef.shortLabel, icon: '🥩' },
    { id: 'pork', label: t.categories.pork.label, shortLabel: t.categories.pork.shortLabel, icon: '🐖' },
    { id: 'fish', label: t.categories.fish.label, shortLabel: t.categories.fish.shortLabel, icon: '🐟' },
  ];

  const languages = [
    { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  const navLinks = [
    { name: t.nav.diagram, href: '#diagram-section', icon: Compass },
    { name: t.nav.wizard, href: '#wizard', icon: Sparkles },
    { name: t.nav.cuts, href: '#cuts-library', icon: Utensils },
    { name: t.nav.wine, href: '#wine-pairing', icon: Wine },
    { name: t.nav.cocktail, href: '#cocktails', icon: Sparkles },
    { name: t.nav.table, href: '#comparison-table', icon: BookOpen },
    { name: t.nav.faq, href: '#faq', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-parchment-100/95 backdrop-blur-md border-b border-parchment-300 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          
          {/* 品牌識別：酒肉朋友 */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative shrink-0">
              <WineMeatBrandLogo className="w-10 h-10 sm:w-11 sm:h-11 shadow-md group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif font-extrabold text-lg sm:text-2xl tracking-tight text-charcoal flex items-center">
                  {t.brandName}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-beef-burgundy px-1 sm:px-1.5 py-0.5 border border-beef-burgundy/40 rounded bg-beef-burgundy/5 uppercase font-bold">
                  {t.brandTag}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-charcoal-muted tracking-wider hidden md:inline font-sans">
                {t.brandSubtitle}
              </span>
            </div>
          </a>

          {/* 三大肉品類別切換標籤 (防止斷字擠壓，嚴格水平排列) */}
          <div className="shrink-0 flex items-center bg-parchment-200/90 p-1 rounded-xl border border-parchment-300 shadow-inner">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-charcoal text-white shadow-sm'
                      : 'text-charcoal-light hover:text-charcoal hover:bg-parchment-100'
                  }`}
                >
                  <span className="text-xs sm:text-sm">{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* 超大螢幕桌面端完整選單 (2xl 以上) */}
          <nav className="hidden 2xl:flex items-center gap-3.5 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-charcoal-muted hover:text-beef-burgundy transition-all py-1 flex items-center gap-1 whitespace-nowrap"
              >
                <link.icon className="w-3.5 h-3.5 text-charcoal-muted/70 shrink-0" />
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* 右側操作區：多語系切換 + CTA + 手機選單按鈕 */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* 多語系切換器 (Language Selector) */}
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

            {/* CTA 按鈕 */}
            <a
              href="#wizard"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-beef-burgundy hover:bg-beef-red rounded-md shadow-sm transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.startBtn}</span>
            </a>

            {/* 響應式漢堡選單按鈕 (2xl 以下螢幕顯示) */}
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

      {/* 響應式下拉選單 */}
      {mobileMenuOpen && (
        <div className="2xl:hidden border-b border-parchment-300 bg-parchment-100 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-lg">
          <div className="text-xs font-bold text-charcoal-muted uppercase mb-1">切換品類：</div>
          <div className="grid grid-cols-3 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-xs font-bold border text-center flex flex-col items-center gap-1 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-charcoal text-white border-charcoal shadow-xs'
                    : 'bg-parchment-200 text-charcoal border-parchment-300 hover:bg-parchment-50'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-parchment-200 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-charcoal hover:bg-parchment-200 whitespace-nowrap"
              >
                <link.icon className="w-4 h-4 text-beef-burgundy shrink-0" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-parchment-200 flex items-center justify-between">
            <span className="text-xs text-charcoal-muted">多語系切換：</span>
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
