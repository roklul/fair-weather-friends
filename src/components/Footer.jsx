import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUp, WineMeatBrandLogo } from './Icons';
import { TRANSLATIONS } from '../data/translations';

export default function Footer({ activeCategory, currentLang = 'zh-TW' }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];
  const f = t.footer;
  const categoryTitle = t.categories[activeCategory]?.shortLabel || activeCategory;

  return (
    <footer className="bg-charcoal text-parchment-200 pt-16 pb-12 border-t border-charcoal-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA 橫幅卡片 */}
        <div className="bg-gradient-to-r from-beef-burgundy to-[#4a101b] rounded-2xl p-8 sm:p-10 mb-16 text-center space-y-4 shadow-xl border border-beef-red/30">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{f.ctaBadge}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
            {f.ctaTitle}
          </h3>
          <p className="text-parchment-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            {f.ctaSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#wizard"
              className="px-6 py-3 rounded-lg bg-parchment-50 text-charcoal hover:bg-white text-xs sm:text-sm font-bold shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              {f.ctaWizardBtn}
            </a>
            <Link
              href="/etiquette"
              className="px-6 py-3 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs sm:text-sm font-bold border border-amber-400/40 transition-all whitespace-nowrap"
            >
              {t.nav.etiquette || '🍽️ 餐桌禮儀指南'}
            </Link>
          </div>
        </div>

        {/* 底部資訊欄 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-charcoal-muted/30 text-xs text-parchment-300">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <WineMeatBrandLogo className="w-9 h-9 shrink-0" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white tracking-tight">
                  {t.brandName} <span className="text-xs font-mono font-normal text-amber-300/80">{t.brandTag}</span>
                </span>
                <span className="text-[11px] text-parchment-400 font-sans">
                  {t.brandSubtitle}
                </span>
              </div>
            </div>
            <p className="max-w-sm text-parchment-400 leading-relaxed font-sans pt-1">
              {f.desc}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-white">{f.quickNav}</h4>
            <ul className="space-y-1.5 text-parchment-400">
              <li><a href="#diagram-section" className="hover:text-white transition-colors">{t.nav.diagram}</a></li>
              <li><a href="#wizard" className="hover:text-white transition-colors">{t.nav.wizard}</a></li>
              <li><a href="#cuts-library" className="hover:text-white transition-colors">{t.nav.cuts}</a></li>
              <li><a href="#wine-pairing" className="hover:text-white transition-colors">{t.nav.wine}</a></li>
              <li><a href="#cocktails" className="hover:text-white transition-colors">{t.nav.cocktail}</a></li>
              <li><Link href="/etiquette" className="text-amber-300 hover:text-white transition-colors font-semibold">{t.nav.etiquette || '🍽️ 餐桌禮儀指南'}</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-white">{f.legalTitle}</h4>
            <p className="text-amber-400/90 text-xs leading-relaxed font-bold">
              {f.legalWarning}
            </p>
            <p className="text-parchment-400 text-[11px] leading-relaxed">
              {f.legalDesc}
            </p>
          </div>
        </div>

        {/* 版權與回頂部 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-parchment-400">
          <div>
            © {new Date().getFullYear()} {t.brandName}. {f.rights}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-charcoal-light hover:bg-charcoal-muted text-parchment-200 transition-colors whitespace-nowrap"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
