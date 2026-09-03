import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/beefData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-parchment-200/50 border-t border-parchment-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 標題 */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-charcoal text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-beef-burgundy" />
            <span>名詞釐清 · 常見迷思問答</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            常見問答 FAQ
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base">
            解答台灣消費者在選購牛肉與餐酒搭配時最容易混淆的專有名詞與料理疑問。
          </p>
        </div>

        {/* 摺疊問答清單 */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-parchment-50 border border-parchment-300 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-parchment-100 transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-charcoal flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-beef-burgundy/10 text-beef-burgundy flex items-center justify-center text-xs font-mono shrink-0">
                      Q
                    </span>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-beef-burgundy shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-charcoal-muted shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-charcoal-light leading-relaxed border-t border-parchment-200 bg-parchment-100/50">
                    <p className="font-sans">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
