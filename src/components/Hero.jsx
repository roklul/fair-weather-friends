import React from 'react';
import { Flame, Soup, UtensilsCrossed, Sparkles, Wine, HeartPulse, Droplets, ArrowRight } from './Icons';

export default function Hero({ activeCategory, onQuickFilter }) {
  // 依品類動態配置文案與快速意圖
  const config = {
    beef: {
      tagline: '肉舖職人 × 現代侍酒指南 · 全面解密美式 8 大分切',
      mainTitle: '從部位開始，找到最適合你的那塊牛肉',
      highlightWord: '牛肉',
      subtitle: '從肋眼、菲力、牛小排到牛腱與牛腩，一次看懂牛肉來自哪裡、適合怎麼煮，以及該搭配什麼酒。',
      quote: '牛肉不是只有「嫩」或「柴」；不同部位的脂肪、纖維與結締組織，決定了它最適合的火候與料理方式。',
      quickActions: [
        { label: '我想吃火鍋', icon: Soup, filter: { type: 'wizard', cookingId: 'hotpot', textureId: 'fatty' }, color: 'hover:border-orange-600 hover:text-orange-700' },
        { label: '我想煎牛排', icon: UtensilsCrossed, filter: { type: 'wizard', cookingId: 'steak', textureId: 'tender' }, color: 'hover:border-beef-burgundy hover:text-beef-burgundy' },
        { label: '我想煮牛肉麵', icon: Soup, filter: { type: 'wizard', cookingId: 'beef-noodle', textureId: 'gelatinous' }, color: 'hover:border-amber-700 hover:text-amber-800' },
        { label: '我想燒烤', icon: Flame, filter: { type: 'wizard', cookingId: 'bbq', textureId: 'fatty' }, color: 'hover:border-red-600 hover:text-red-700' },
        { label: '我想燉煮', icon: Soup, filter: { type: 'wizard', cookingId: 'stew', textureId: 'gelatinous' }, color: 'hover:border-stone-700 hover:text-stone-800' },
        { label: '我喜歡油花多', icon: Droplets, filter: { type: 'wizard', textureId: 'fatty', cookingId: 'steak' }, color: 'hover:border-yellow-600 hover:text-yellow-700' },
        { label: '我想找低脂瘦肉', icon: HeartPulse, filter: { type: 'wizard', textureId: 'lean', cookingId: 'steak' }, color: 'hover:border-emerald-700 hover:text-emerald-800' },
        { label: '幫我選搭配的酒', icon: Wine, filter: { type: 'anchor', val: 'wine-pairing' }, color: 'hover:border-purple-800 hover:text-purple-900' }
      ]
    },
    pork: {
      tagline: '台灣肉舖常用命名 × 國際分切對照 · 實戰料理選肉指南',
      mainTitle: '找到最適合今天料理的那塊豬肉',
      highlightWord: '豬肉',
      subtitle: '從梅花、五花、松阪到大里肌與蹄膀，一次看懂豬肉部位特性、中英對照，以及完美去膩的佐餐酒與啤酒。',
      quote: '五花肉適合久燉慢熬，小里肌適合極速短烹；掌握不同部位的脂肪與筋膜，下廚絕不再踩雷。',
      quickActions: [
        { label: '我想煮控肉東坡肉', icon: Soup, filter: { type: 'wizard', cookingId: 'stew-braise', textureId: 'fatty' }, color: 'hover:border-amber-700 hover:text-amber-800' },
        { label: '我想做酥脆炸豬排', icon: UtensilsCrossed, filter: { type: 'wizard', cookingId: 'fry-cutlet', textureId: 'tender' }, color: 'hover:border-yellow-700 hover:text-yellow-800' },
        { label: '我想吃脆彈松阪燒肉', icon: Flame, filter: { type: 'wizard', cookingId: 'bbq-grill', textureId: 'crispy' }, color: 'hover:border-red-600 hover:text-red-700' },
        { label: '我想吃火鍋白切', icon: Soup, filter: { type: 'wizard', cookingId: 'hotpot', textureId: 'fatty' }, color: 'hover:border-orange-600 hover:text-orange-700' },
        { label: '我想煮花生豬腳湯', icon: Soup, filter: { type: 'wizard', cookingId: 'soup-slow', textureId: 'gelatinous' }, color: 'hover:border-orange-600 hover:text-orange-700' },
        { label: '我想調手工水餃肉餡', icon: UtensilsCrossed, filter: { type: 'wizard', cookingId: 'dumpling-filling', textureId: 'lean' }, color: 'hover:border-stone-700 hover:text-stone-800' },
        { label: '我想找低脂腰內肉', icon: HeartPulse, filter: { type: 'wizard', textureId: 'tender', cookingId: 'fry-cutlet' }, color: 'hover:border-emerald-700 hover:text-emerald-800' },
        { label: '幫我選搭豬肉的酒', icon: Wine, filter: { type: 'anchor', val: 'wine-pairing' }, color: 'hover:border-purple-800 hover:text-purple-900' }
      ]
    },
    fish: {
      tagline: '當令鮮魚部位圖鑑 × 頂級海味指南 · 產地海鮮佐餐風味學',
      mainTitle: '從魚頭到魚尾，挑選最鮮美的海鮮部位',
      highlightWord: '海味魚鮮',
      subtitle: '從鮭魚菲力、鮪魚大腹、石斑清肉到烤魚下巴與砂鍋魚頭，掌握鮮魚部位油脂、去腥關鍵與白酒、清酒、啤酒搭配。',
      quote: '魚背肉緊實細嫩宜香煎清蒸，魚腹肉豐腴濃郁宜刺身乾煎；以明亮酸度白酒或爽俐生啤酒洗刷魚油，成就純淨海味。',
      quickActions: [
        { label: '我想清蒸龍虎斑', icon: Soup, filter: { type: 'wizard', cookingId: 'steam-fresh', textureId: 'tender-steam' }, color: 'hover:border-emerald-700 hover:text-emerald-800' },
        { label: '我想煎脆皮鮭魚排', icon: UtensilsCrossed, filter: { type: 'wizard', cookingId: 'pan-sear', textureId: 'fatty-sear' }, color: 'hover:border-orange-600 hover:text-orange-700' },
        { label: '我想吃頂級刺身大腹', icon: Sparkles, filter: { type: 'wizard', cookingId: 'sashimi-plate', textureId: 'sashimi-raw' }, color: 'hover:border-rose-600 hover:text-rose-700' },
        { label: '我想烤居酒屋魚下巴', icon: Flame, filter: { type: 'wizard', cookingId: 'grill-bbq', textureId: 'offal-collagen' }, color: 'hover:border-amber-700 hover:text-amber-800' },
        { label: '我想煮砂鍋大魚頭', icon: Soup, filter: { type: 'wizard', cookingId: 'soup-pot', textureId: 'tender-steam' }, color: 'hover:border-stone-700 hover:text-stone-800' },
        { label: '我想少刺好入口', icon: HeartPulse, filter: { type: 'wizard', textureId: 'boneless-tender', cookingId: 'steam-fresh' }, color: 'hover:border-teal-700 hover:text-teal-800' },
        { label: '選海鮮白酒/清酒/啤酒', icon: Wine, filter: { type: 'anchor', val: 'wine-pairing' }, color: 'hover:border-purple-800 hover:text-purple-900' }
      ]
    }
  };

  const current = config[activeCategory] || config.beef;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-parchment-300">
      <div className="absolute inset-0 etching-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* 上標徽章 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-beef-burgundy/30 bg-beef-burgundy/5 text-beef-burgundy text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{current.tagline}</span>
          </div>

          {/* 主標題 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-[1.15]">
            從部位開始，找到最適合你的<br className="hidden sm:inline" />
            <span className="text-beef-burgundy italic relative">
              那塊{current.highlightWord}
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-beef-burgundy/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          {/* 副標題 */}
          <p className="text-base sm:text-lg lg:text-xl text-charcoal-muted max-w-3xl mx-auto font-sans leading-relaxed">
            {current.subtitle}
          </p>

          {/* 核心金句警句標語 */}
          <div className="my-6 p-4 sm:p-5 rounded-xl bg-parchment-200/80 border border-parchment-300 max-w-2xl mx-auto text-sm sm:text-base text-charcoal-light italic font-serif shadow-inner">
            <span className="text-beef-burgundy font-bold text-xl mr-1 font-sans">“</span>
            {current.quote}
            <span className="text-beef-burgundy font-bold text-xl ml-1 font-sans">”</span>
          </div>

          {/* 快速意圖入口按鈕網格 */}
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-parchment-400"></span>
              快速選肉捷徑 · 點選你的料理目標（自動連動選肉助手）
              <span className="h-px w-8 bg-parchment-400"></span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {current.quickActions.map((btn, idx) => (
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
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#diagram-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-charcoal hover:bg-charcoal-light text-white font-medium text-sm shadow-md transition-all group"
            >
              <span>探索互動分切圖鑑</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#wizard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-beef-burgundy hover:bg-beef-red text-white font-medium text-sm shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>「你想怎麼吃？」智能選肉</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
