import React, { useState } from 'react';
import { Compass, Wine, Utensils, BookOpen, HelpCircle, Menu, X, Sparkles, WineMeatBrandLogo } from './Icons';

export default function Navbar({ activeCategory, onSelectCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'beef', label: '牛肉指南', icon: '🥩', subtitle: '8 大美式分切' },
    { id: 'pork', label: '豬肉指南', icon: '🐖', subtitle: '台灣常用分切' },
    { id: 'fish', label: '魚類海鮮', icon: '🐟', subtitle: '海味部位分切' },
  ];

  const navLinks = [
    { name: '互動解剖圖鑑', href: '#diagram-section', icon: Compass },
    { name: '選肉決策助手', href: '#wizard', icon: Sparkles },
    { name: '12 大熱門部位', href: '#cuts-library', icon: Utensils },
    { name: '餐酒搭配科學', href: '#wine-pairing', icon: Wine },
    { name: '經典調酒搭餐', href: '#cocktails', icon: Sparkles },
    { name: '規格比較表', href: '#comparison-table', icon: BookOpen },
    { name: '常見問答', href: '#faq', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-parchment-100/95 backdrop-blur-md border-b border-parchment-300 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* 品牌識別：酒肉朋友 */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <WineMeatBrandLogo className="w-11 h-11 shadow-md group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif font-extrabold text-xl sm:text-2xl tracking-tight text-charcoal flex items-center gap-1.5">
                  酒肉朋友
                </span>
                <span className="text-[10px] font-mono tracking-widest text-beef-burgundy px-1.5 py-0.5 border border-beef-burgundy/40 rounded bg-beef-burgundy/5 uppercase font-bold">
                  FAIR-WEATHER
                </span>
              </div>
              <span className="text-[11px] text-charcoal-muted tracking-wider hidden sm:inline font-sans">
                肉品與海鮮部位選購 × 料理侍酒指南
              </span>
            </div>
          </a>

          {/* 三大肉品類別切換標籤 (中心醒目切換) */}
          <div className="inline-flex bg-parchment-200/90 p-1 rounded-xl border border-parchment-300 shadow-inner">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-charcoal text-white shadow-sm'
                      : 'text-charcoal-light hover:text-charcoal hover:bg-parchment-100'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* 桌面端選單 */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-charcoal-muted hover:text-beef-burgundy transition-all py-1 flex items-center gap-1.5"
              >
                <link.icon className="w-3.5 h-3.5 text-charcoal-muted/70" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA 按鈕 */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#wizard"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-beef-burgundy hover:bg-beef-red rounded-md shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              開始選肉
            </a>
          </div>

          {/* 手機版漢堡選單按鈕 */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-charcoal hover:bg-parchment-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 手機版下拉選單 */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-parchment-300 bg-parchment-100 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="text-xs font-bold text-charcoal-muted uppercase mb-1">切換品類：</div>
          <div className="grid grid-cols-3 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-xs font-bold border text-center flex flex-col items-center gap-1 ${
                  activeCategory === cat.id
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-parchment-200 text-charcoal border-parchment-300'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
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
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-charcoal hover:bg-parchment-200"
              >
                <link.icon className="w-4 h-4 text-beef-burgundy" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
