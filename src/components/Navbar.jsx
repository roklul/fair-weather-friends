import React, { useState } from 'react';
import { Compass, Wine, Utensils, BookOpen, HelpCircle, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenWizard }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '互動牛隻圖鑑', href: '#cow-diagram', icon: Compass },
    { name: '選肉決策助手', href: '#wizard', icon: Sparkles },
    { name: '12 大熱門部位', href: '#cuts-library', icon: Utensils },
    { name: '餐酒搭配科學', href: '#wine-pairing', icon: Wine },
    { name: '規格比較表', href: '#comparison-table', icon: BookOpen },
    { name: '常見問答', href: '#faq', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-parchment-100/95 backdrop-blur-md border-b border-parchment-300 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 品牌識別 */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-beef-burgundy flex items-center justify-center text-white shadow-md group-hover:bg-beef-red transition-colors">
              <span className="text-2xl select-none">🥩</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-charcoal flex items-center gap-1.5">
                BEEF & WINE <span className="text-xs font-sans tracking-widest text-beef-burgundy px-1.5 py-0.5 border border-beef-burgundy rounded">GUIDE</span>
              </span>
              <span className="text-xs text-charcoal-muted tracking-wider">牛肉部位選購與料理搭配指南</span>
            </div>
          </a>

          {/* 桌面端選單 */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal-muted hover:text-beef-burgundy hover:border-b-2 hover:border-beef-burgundy transition-all py-1 flex items-center gap-1.5"
              >
                <link.icon className="w-4 h-4 text-charcoal-muted/70" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA 按鈕 */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#wizard"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-beef-burgundy hover:bg-beef-red rounded-md shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              開始選肉
            </a>
          </div>

          {/* 手機版漢堡選單按鈕 */}
          <div className="flex lg:hidden">
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
        <div className="lg:hidden border-b border-parchment-300 bg-parchment-100 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium text-charcoal hover:bg-parchment-200"
            >
              <link.icon className="w-5 h-5 text-beef-burgundy" />
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#wizard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-beef-burgundy text-white font-medium rounded-md"
            >
              <Sparkles className="w-4 h-4" />
              立即啟動「你想怎麼吃？」選肉助手
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
