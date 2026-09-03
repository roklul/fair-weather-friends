import React from 'react';
import { Sparkles, ArrowUp, WineMeatBrandLogo } from './Icons';

export default function Footer({ activeCategory }) {
  const categoryTitle = activeCategory === 'beef' ? '牛肉' : activeCategory === 'pork' ? '豬肉' : '魚類海鮮';

  return (
    <footer className="bg-charcoal text-parchment-200 pt-16 pb-12 border-t border-charcoal-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA 橫幅卡片 */}
        <div className="bg-gradient-to-r from-beef-burgundy to-[#4a101b] rounded-2xl p-8 sm:p-10 mb-16 text-center space-y-4 shadow-xl border border-beef-red/30">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>找到你的專屬那塊肉</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
            準備好為今晚的餐桌挑選完美的{categoryTitle}了嗎？
          </h3>
          <p className="text-parchment-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            透過全方位解剖分切與科學餐酒搭配，讓每次下廚與聚餐都成為極致的風味享受。
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#wizard"
              className="px-6 py-3 rounded-lg bg-parchment-50 text-charcoal hover:bg-white text-xs sm:text-sm font-bold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              開啟「你想怎麼吃？」選肉助手
            </a>
            <a
              href="#diagram-section"
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/20 transition-all"
            >
              返回互動部位圖鑑
            </a>
          </div>
        </div>

        {/* 底部資訊欄 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-charcoal-muted/30 text-xs text-parchment-300">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <WineMeatBrandLogo className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white tracking-tight">
                  酒肉朋友 <span className="text-xs font-mono font-normal text-amber-300/80">FAIR-WEATHER FRIENDS</span>
                </span>
                <span className="text-[11px] text-parchment-400 font-sans">
                  肉品與海鮮部位選購 × 料理侍酒指南
                </span>
              </div>
            </div>
            <p className="max-w-sm text-parchment-400 leading-relaxed font-sans pt-1">
              全方位「肉品與海鮮部位選購 × 料理佐餐指南」，致力於將解剖分切、烹調火候與餐酒風味學整合成一站式決策流程。
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-white">快速導覽</h4>
            <ul className="space-y-1.5 text-parchment-400">
              <li><a href="#diagram-section" className="hover:text-white transition-colors">互動部位分切圖</a></li>
              <li><a href="#wizard" className="hover:text-white transition-colors">智能選肉小工具</a></li>
              <li><a href="#cuts-library" className="hover:text-white transition-colors">12 款熱門部位</a></li>
              <li><a href="#wine-pairing" className="hover:text-white transition-colors">餐酒搭配科學矩陣</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-white">專業標示原則</h4>
            <p className="text-parchment-400 text-[11px] leading-relaxed">
              本指南遵循美式 USDA、台灣傳統肉舖與水產分切標準，並針對市場常見稱呼進行名詞校準，避免誤導與消費混淆。
            </p>
          </div>
        </div>

        {/* 版權與回頂部 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-parchment-400">
          <div>
            © {new Date().getFullYear()} 酒肉朋友 (Fair-Weather Friends). All rights reserved.
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-charcoal-light hover:bg-charcoal-muted text-parchment-200 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>回到頂部</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
