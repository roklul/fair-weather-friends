'use client';

import React from 'react';
import Link from 'next/link';
import { WineMeatBrandLogo, ArrowLeft } from '../Icons';

export default function EtiquetteFooter({ currentLang = 'zh-TW' }) {
  const footerText = {
    'zh-TW': {
      brand: '酒肉朋友 · 餐桌禮儀專題',
      subtitle: '肉品海鮮選購 × 料理侍酒 × 中西餐桌社交禮儀實務指南',
      disclaimer: '【受控展示與生活指南聲明】本專案為餐飲文化、部位解剖與餐桌禮儀之技術與知識展示 Demo，不涉及真實商品販售、交易或醫療健康建議。各項座次與餐具規範僅供社交決策輔助，正式宴請請依現場主人與餐廳服務人員指引為準。',
      copyright: '© 2026 酒肉朋友 Fair-Weather Friends. 本頁面所有向量圖表與教材均為前端原創繪製，符合 CC0 與公有領域授權規範。',
      backToHome: '← 返回肉品侍酒圖鑑首頁',
      backToTop: '↑ 回到頂部'
    },
    'en': {
      brand: 'FAIR-WEATHER · DINING ETIQUETTE',
      subtitle: 'Meat & Seafood Selection × Wine Pairing × Dining Etiquette Guide',
      disclaimer: '[DEMO & CULINARY GUIDE DISCLAIMER] This project is a controlled demonstration of culinary culture, anatomy diagrams, and dining etiquette without commercial transactions or medical advice. Table settings and seating charts serve as practical social aids; always defer to the host in formal events.',
      copyright: '© 2026 Fair-Weather Friends. All vector diagrams and content are originally created in accordance with CC0 / Public Domain standards.',
      backToHome: '← Return to Meat & Wine Guide',
      backToTop: '↑ Back to Top'
    },
    'ja': {
      brand: '酒肉朋友 · テーブルマナー特集',
      subtitle: '肉・海鮮選び × ワインペアリング × 中華・西洋テーブルマナー実践ガイド',
      disclaimer: '【展示・マナーガイドに関する声明】本プロジェクトは食文化、部位解剖、テーブルマナーに関する技術・知識のデモ展示であり、商品の販売や医療的助言を行うものではありません。席順やカトラリーの規則は意思決定のサポートであり、実際の場では主催者やスタッフの指示に従ってください。',
      copyright: '© 2026 酒肉朋友 Fair-Weather Friends. 本ページのベクター図面および教材はすべてオリジナルで描画されており、CC0およびパブリックドメイン基準に準拠しています。',
      backToHome: '← 肉とワインの図鑑トップへ戻る',
      backToTop: '↑ トップへ戻る'
    }
  }[currentLang] || {
    brand: '酒肉朋友 · 餐桌禮儀專題',
    subtitle: '肉品海鮮選購 × 料理侍酒 × 中西餐桌社交禮儀實務指南',
    disclaimer: '【受控展示與生活指南聲明】本專案為餐飲文化、部位解剖與餐桌禮儀之技術與知識展示 Demo，不涉及真實商品販售、交易或醫療健康建議。各項座次與餐具規範僅供社交決策輔助，正式宴請請依現場主人與餐廳服務人員指引為準。',
    copyright: '© 2026 酒肉朋友 Fair-Weather Friends. 本頁面所有向量圖表與教材均為前端原創繪製，符合 CC0 與公有領域授權規範。',
    backToHome: '← 返回肉品侍酒圖鑑首頁',
    backToTop: '↑ 回到頂部'
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-parchment-200/90 border-t border-parchment-300 py-12 text-charcoal font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 頂部品牌與跳轉 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-parchment-300">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <WineMeatBrandLogo className="w-10 h-10 shadow-sm shrink-0" />
            <div>
              <div className="font-serif font-bold text-lg text-charcoal">
                {footerText.brand}
              </div>
              <div className="text-xs text-charcoal-muted font-sans">
                {footerText.subtitle}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-parchment-100 hover:bg-parchment-50 border border-parchment-300 text-xs font-bold text-beef-burgundy shadow-2xs transition-all"
            >
              <span>{footerText.backToHome}</span>
            </Link>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-parchment-100 hover:bg-parchment-50 border border-parchment-300 text-xs font-bold text-charcoal-muted hover:text-charcoal transition-all"
            >
              <span>{footerText.backToTop}</span>
            </button>
          </div>
        </div>

        {/* 免責聲明文字 */}
        <div className="py-6 border-b border-parchment-300/80 text-[11px] text-charcoal-muted leading-relaxed space-y-2">
          <p>{footerText.disclaimer}</p>
        </div>

        {/* 版權標記 */}
        <div className="pt-6 text-center text-xs text-charcoal-muted font-mono">
          <p>{footerText.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
