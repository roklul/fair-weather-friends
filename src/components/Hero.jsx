import React from 'react';
import { Flame, Soup, UtensilsCrossed, Sparkles, Wine, HeartPulse, Droplets, ArrowRight } from './Icons';

export default function Hero({ onQuickFilter }) {
  const quickActions = [
    { label: '我想煎牛排', icon: UtensilsCrossed, filter: { type: 'cooking', val: '家庭牛排' }, color: 'hover:border-beef-burgundy hover:text-beef-burgundy' },
    { label: '我想煮牛肉麵', icon: Soup, filter: { type: 'cooking', val: '牛肉麵' }, color: 'hover:border-amber-700 hover:text-amber-800' },
    { label: '我想吃火鍋', icon: Soup, filter: { type: 'cooking', val: '火鍋 / 壽喜燒' }, color: 'hover:border-orange-600 hover:text-orange-700' },
    { label: '我想燒烤', icon: Flame, filter: { type: 'cooking', val: '日韓燒烤' }, color: 'hover:border-red-600 hover:text-red-700' },
    { label: '我想燉煮', icon: Soup, filter: { type: 'cooking', val: '燉煮' }, color: 'hover:border-stone-700 hover:text-stone-800' },
    { label: '我喜歡油花多', icon: Droplets, filter: { type: 'fat', val: 'high' }, color: 'hover:border-yellow-600 hover:text-yellow-700' },
    { label: '我想找低脂瘦肉', icon: HeartPulse, filter: { type: 'fat', val: 'low' }, color: 'hover:border-emerald-700 hover:text-emerald-800' },
    { label: '幫我選搭配的酒', icon: Wine, filter: { type: 'anchor', val: 'wine-pairing' }, color: 'hover:border-purple-800 hover:text-purple-900' }
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-parchment-300">
      {/* 典雅背景圖案裝飾 */}
      <div className="absolute inset-0 etching-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* 上標與出版格調徽章 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-beef-burgundy/30 bg-beef-burgundy/5 text-beef-burgundy text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>肉舖職人 × 現代餐酒指南 · 全面解密美式 8 大分切</span>
          </div>

          {/* 主標題 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-[1.15]">
            從部位開始，找到最適合你的<br className="hidden sm:inline" />
            <span className="text-beef-burgundy italic relative">
              那塊牛肉
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-beef-burgundy/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          {/* 副標題 */}
          <p className="text-base sm:text-lg lg:text-xl text-charcoal-muted max-w-3xl mx-auto font-sans leading-relaxed">
            從肋眼、菲力、牛小排到牛腱與牛腩，一次看懂牛肉來自哪裡、適合怎麼煮，以及該搭配什麼酒。
          </p>

          {/* 核心金句警句標語 */}
          <div className="my-8 p-4 sm:p-5 rounded-xl bg-parchment-200/80 border border-parchment-300 max-w-2xl mx-auto text-sm sm:text-base text-charcoal-light italic font-serif shadow-inner">
            <span className="text-beef-burgundy font-bold text-xl mr-1 font-sans">“</span>
            牛肉不是只有「嫩」或「柴」；不同部位的脂肪、纖維與結締組織，決定了它最適合的火候與料理方式。
            <span className="text-beef-burgundy font-bold text-xl ml-1 font-sans">”</span>
          </div>

          {/* 快速意圖入口按鈕網格 */}
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-parchment-400"></span>
              快速選肉捷徑 · 點選你的需求
              <span className="h-px w-8 bg-parchment-400"></span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {quickActions.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => onQuickFilter(btn.filter)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-parchment-50 border border-parchment-300 text-charcoal text-xs sm:text-sm font-medium shadow-sm transition-all transform hover:-translate-y-0.5 hover:shadow-md ${btn.color}`}
                >
                  <btn.icon className="w-4 h-4" />
                  <span>{btn.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 探索導引按鈕 */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cow-diagram"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-charcoal hover:bg-charcoal-light text-white font-medium text-sm shadow-md transition-all group"
            >
              <span>開始探索互動牛隻分切圖</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#wizard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-beef-burgundy hover:bg-beef-red text-white font-medium text-sm shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>智能選肉問卷決策</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
