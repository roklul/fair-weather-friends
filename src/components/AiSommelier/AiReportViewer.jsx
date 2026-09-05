import React, { useState } from 'react';
import {
  Sparkles,
  Wine,
  UtensilsCrossed,
  Info,
  CheckCircle2,
  Copy,
  CheckCheck,
  RotateCcw
} from '../Icons';

/**
 * 輔助組件：將包含 **粗體** 或 「引號」 的字串渲染為精美富文本 JSX
 */
function FormattedInlineText({ text = '' }) {
  if (!text) return null;

  // 切割 **粗體** 或 「引號」
  const parts = text.split(/(\*[^*]+\*|「[^」]+」)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2);
          return (
            <strong
              key={i}
              className="font-bold text-beef-burgundy bg-rose-50/90 px-1.5 py-0.5 rounded-md border border-rose-200/60 mx-0.5 inline-block"
            >
              {boldText}
            </strong>
          );
        }
        if (part.startsWith('「') && part.endsWith('」')) {
          return (
            <span
              key={i}
              className="font-semibold text-charcoal bg-amber-100/70 px-1 py-0.5 rounded border border-amber-200/60 mx-0.5"
            >
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

/**
 * 渲染單一區塊內的多行內容（段落與清單）
 */
function SectionBody({ lines = [] }) {
  const elements = [];
  let currentList = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <div key={`list-${elements.length}`} className="grid grid-cols-1 gap-3 my-3">
          {currentList.map((item, idx) => {
            // 嘗試拆分 "- **標題**: 內容" 或 "- 項目: 內容"
            const match = item.match(/^[-*]\s+(\*\*[^*]+\*\*|[^\s：:]+)[：:]\s*(.*)$/);
            if (match) {
              const itemTitle = match[1].replace(/\*\*/g, '');
              const itemDesc = match[2];
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-parchment-100/90 border border-parchment-300/90 hover:border-beef-burgundy/40 hover:bg-parchment-100 transition-all flex items-start gap-3.5 shadow-xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-beef-burgundy text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                    {idx + 1}
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div className="font-bold text-charcoal flex items-center gap-1.5">
                      <span className="text-beef-burgundy font-serif text-sm sm:text-base">{itemTitle}</span>
                    </div>
                    <p className="text-charcoal/90 leading-relaxed font-sans">
                      <FormattedInlineText text={itemDesc} />
                    </p>
                  </div>
                </div>
              );
            }

            // 一般清單項目
            const cleanItem = item.replace(/^[-*]\s+/, '');
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-parchment-100/70 border border-parchment-300/70 flex items-start gap-3 text-xs sm:text-sm text-charcoal shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-beef-burgundy mt-1.5 shrink-0" />
                <div className="leading-relaxed font-sans">
                  <FormattedInlineText text={cleanItem} />
                </div>
              </div>
            );
          })}
        </div>
      );
      currentList = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      currentList.push(trimmed);
    } else {
      flushList();
      elements.push(
        <p key={`p-${elements.length}`} className="text-xs sm:text-sm text-charcoal leading-relaxed my-2 font-sans bg-parchment-50/60 p-2.5 rounded-lg border border-parchment-200/50">
          <FormattedInlineText text={trimmed} />
        </p>
      );
    }
  });

  flushList();
  return <div className="space-y-2.5">{elements}</div>;
}

/**
 * 將 AI Markdown 報告切分為結構化卡片
 */
function parseAiReport(rawText = '') {
  if (!rawText) return [];

  const lines = rawText.split('\n');
  const sections = [];
  let currentSection = null;

  lines.forEach((line) => {
    const trimmed = line.trim();
    // 匹配 ### 或 ## 開頭之標題
    if (trimmed.startsWith('###') || trimmed.startsWith('##')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      const rawTitle = trimmed.replace(/^#+\s*/, '');
      currentSection = {
        rawTitle,
        lines: []
      };
    } else if (currentSection) {
      currentSection.lines.push(line);
    } else if (trimmed) {
      // 標題前若有前言，收錄為引言
      currentSection = {
        rawTitle: '✨ 侍酒師品味導言 (Introduction)',
        lines: [line]
      };
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

/**
 * 依據標題內容判定卡片類別與視覺風格
 */
function getSectionMeta(rawTitle = '', currentLang = 'zh-TW') {
  const lower = rawTitle.toLowerCase();

  // 1. 推薦菜單與部位火候
  if (lower.includes('推薦') || lower.includes('部位') || lower.includes('火候') || lower.includes('cut') || lower.includes('cooking') || lower.includes('🍽')) {
    return {
      type: 'cuts',
      badge: currentLang === 'en' ? 'CUTS & CULINARY TECHNIQUE' : currentLang === 'ja' ? '推奨部位・火入れ技法' : '建議部位與烹調火候',
      icon: <UtensilsCrossed className="w-5 h-5 text-white" />,
      accentBorder: 'border-l-4 border-l-beef-burgundy',
      cardBg: 'bg-white',
      badgeClass: 'bg-rose-100 text-rose-900 border-rose-200',
      iconBg: 'bg-gradient-to-br from-rose-900 to-beef-burgundy text-white'
    };
  }

  // 2. 侍酒師搭餐推薦
  if (lower.includes('侍酒') || lower.includes('搭餐') || lower.includes('飲品') || lower.includes('酒') || lower.includes('pairing') || lower.includes('sommelier') || lower.includes('drink') || lower.includes('🥂')) {
    return {
      type: 'drinks',
      badge: currentLang === 'en' ? 'SOMMELIER PAIRING & MOCKTAIL' : currentLang === 'ja' ? 'ソムリエ厳選ペアリング' : '侍酒師嚴選搭餐調飲',
      icon: <Wine className="w-5 h-5 text-white" />,
      accentBorder: 'border-l-4 border-l-purple-800',
      cardBg: 'bg-white',
      badgeClass: 'bg-purple-100 text-purple-900 border-purple-200',
      iconBg: 'bg-gradient-to-br from-purple-950 to-indigo-900 text-white'
    };
  }

  // 3. 風味科學原理
  if (lower.includes('科學') || lower.includes('原理') || lower.includes('science') || lower.includes('synergy') || lower.includes('flavor') || lower.includes('🔬')) {
    return {
      type: 'science',
      badge: currentLang === 'en' ? 'FLAVOR SCIENCE & EMULSIFICATION' : currentLang === 'ja' ? '風味の分子科学原理' : '風味協同與乳化科學',
      icon: <Sparkles className="w-5 h-5 text-teal-200" />,
      accentBorder: 'border-l-4 border-l-teal-800',
      cardBg: 'bg-white',
      badgeClass: 'bg-teal-100 text-teal-900 border-teal-200',
      iconBg: 'bg-gradient-to-br from-teal-900 to-emerald-950 text-white'
    };
  }

  // 4. 場合禮儀與聚餐小提醒
  if (lower.includes('禮儀') || lower.includes('提醒') || lower.includes('etiquette') || lower.includes('tips') || lower.includes('service') || lower.includes('💡')) {
    return {
      type: 'etiquette',
      badge: currentLang === 'en' ? 'HOSPITALITY & SERVICE TIPS' : currentLang === 'ja' ? 'おもてなし・マナーの手引き' : '宴席款待與服務指南',
      icon: <Info className="w-5 h-5 text-white" />,
      accentBorder: 'border-l-4 border-l-amber-700',
      cardBg: 'bg-white',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-200',
      iconBg: 'bg-gradient-to-br from-amber-700 to-amber-900 text-white'
    };
  }

  // 預設通用
  return {
    type: 'generic',
    badge: 'SOMMELIER REPORT',
    icon: <Sparkles className="w-5 h-5 text-white" />,
    accentBorder: 'border-l-4 border-l-charcoal',
    cardBg: 'bg-white',
    badgeClass: 'bg-parchment-200 text-charcoal border-parchment-300',
    iconBg: 'bg-charcoal text-white'
  };
}

export default function AiReportViewer({ rawText = '', currentLang = 'zh-TW', onReset }) {
  const [copied, setCopied] = useState(false);
  const sections = parseAiReport(rawText);

  const handleCopy = () => {
    if (!rawText) return;
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-parchment-50 p-5 sm:p-8 rounded-3xl border-2 border-beef-burgundy shadow-2xl space-y-6 animate-fadeIn">
      {/* 頂部標題列與動作按鈕 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-parchment-300 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-beef-burgundy text-white flex items-center justify-center shadow-md shrink-0">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-charcoal">
                {currentLang === 'en'
                  ? 'AI Sommelier Tasting Consultation'
                  : currentLang === 'ja'
                  ? 'AI ソムリエ専属アドバイスレポート'
                  : 'AI 侍酒師專屬建議報告'}
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3" />
                科學護欄驗證
              </span>
            </div>
            <span className="text-xs text-charcoal-muted">
              {currentLang === 'en'
                ? 'Synthesized with Food Science & Sommelier Database'
                : currentLang === 'ja'
                ? '風味分子科学と公式部位データベースに基づいて生成'
                : '依據風味協同科學與部位百科生成 · BYOK 端對端加密傳輸'}
            </span>
          </div>
        </div>

        {/* 右側按鈕群：複製報告 & 重新調整 */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={handleCopy}
            type="button"
            className="px-3.5 py-2 rounded-xl text-xs font-bold border border-parchment-300 bg-white hover:bg-parchment-100 text-charcoal transition-all flex items-center gap-1.5 shadow-xs active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">
                  {currentLang === 'en' ? 'Copied!' : currentLang === 'ja' ? 'コピー完了！' : '已複製！'}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-charcoal-muted" />
                <span>
                  {currentLang === 'en' ? 'Copy Report' : currentLang === 'ja' ? 'レポートをコピー' : '複製報告'}
                </span>
              </>
            )}
          </button>

          {onReset && (
            <button
              onClick={onReset}
              type="button"
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-beef-burgundy text-white hover:bg-[#721522] transition-all flex items-center gap-1.5 shadow-xs active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>
                {currentLang === 'en' ? 'Adjust Query' : currentLang === 'ja' ? '条件を変更' : '重新諮詢'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* 結構化 4 大專屬精緻卡片群 */}
      <div className="grid grid-cols-1 gap-5">
        {sections.map((sec, sIdx) => {
          const meta = getSectionMeta(sec.rawTitle, currentLang);
          return (
            <div
              key={sIdx}
              className={`${meta.cardBg} ${meta.accentBorder} rounded-2xl p-5 sm:p-6 border border-parchment-300/80 shadow-sm hover:shadow-md transition-all space-y-3.5`}
            >
              {/* 卡片標頭 */}
              <div className="flex items-center gap-3 border-b border-parchment-200/80 pb-3">
                <div className={`w-9 h-9 rounded-xl ${meta.iconBg} flex items-center justify-center shadow-xs shrink-0`}>
                  {meta.icon}
                </div>
                <div className="space-y-0.5">
                  <span className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border ${meta.badgeClass}`}>
                    {meta.badge}
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-charcoal">
                    {sec.rawTitle}
                  </h4>
                </div>
              </div>

              {/* 卡片內容 */}
              <div className="pt-1">
                <SectionBody lines={sec.lines} />
              </div>
            </div>
          );
        })}
      </div>

      {/* 底部免責聲明與護欄標註 */}
      <div className="pt-3 border-t border-parchment-300/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[11px] text-charcoal-muted">
        <div className="flex items-center gap-1.5">
          <span>🔞 本建議由 AI 依據專案風味科學知識庫生成 · 受控展示用 · 未滿十八歲禁止飲酒</span>
        </div>
        <div className="text-[10px] text-charcoal-muted/80">
          Grounded with 10 Classic Cocktails & Food Pairing Science
        </div>
      </div>
    </div>
  );
}
