import React, { useState, useEffect } from 'react';
import { Sparkles, Wine, Utensils, CheckCircle2, AlertCircle, Key, Eye, EyeOff, RotateCcw, ArrowRight } from '../Icons';
import { AI_SOMMELIER_I18N } from '../../data/aiSommelierI18n';

export default function AiSommelierSection({ currentLang = 'zh-TW' }) {
  const t = AI_SOMMELIER_I18N[currentLang] || AI_SOMMELIER_I18N['zh-TW'];

  // BYOK State
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [saveToLocalStorage, setSaveToLocalStorage] = useState(true);

  // Form State
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [occasion, setOccasion] = useState('friends');
  const [meatCategory, setMeatCategory] = useState('beef');
  const [cookingStyle, setCookingStyle] = useState('steak');
  const [drinkPreference, setDrinkPreference] = useState('cocktail');
  const [customNote, setCustomNote] = useState('');

  // Execution & Output State
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [recommendationResult, setRecommendationResult] = useState(null);

  // Load API Key from localStorage on mount
  useEffect(() => {
    try {
      const savedKey = localStorage.getItem('fwf_openai_api_key');
      if (savedKey) {
        setApiKey(savedKey);
      }
    } catch (e) {
      // ignore storage access error
    }
  }, []);

  // Save/Remove API Key
  const handleKeyChange = (val) => {
    setApiKey(val);
    if (saveToLocalStorage) {
      try {
        localStorage.setItem('fwf_openai_api_key', val);
      } catch (e) {}
    }
  };

  const handleClearKey = () => {
    setApiKey('');
    try {
      localStorage.removeItem('fwf_openai_api_key');
    } catch (e) {}
  };

  // Apply Preset Scenario
  const handleApplyPreset = (preset) => {
    setMeatCategory(preset.category);
    setCookingStyle(preset.cooking);
    setDrinkPreference(preset.drink);
    setOccasion(preset.occasion);
    setCustomNote(preset.text);
    setErrorMsg('');
  };

  // Submit AI Request
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    if (!apiKey.trim()) {
      setErrorMsg(t.noKeyWarning);
      return;
    }

    setIsLoading(true);
    setRecommendationResult(null);

    try {
      const payload = {
        apiKey: apiKey.trim(),
        currentLang,
        scenario: {
          guests: { adults, kids },
          occasion,
          meatCategory,
          cookingStyle,
          drinkPreference,
          customNote: customNote.trim()
        }
      };

      const res = await fetch('/api/ai-sommelier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || '呼叫 AI 侍酒師失敗，請確認 API Key 與網路連線。');
      }

      setRecommendationResult(data.recommendation);
    } catch (err) {
      setErrorMsg(err.message || '發生未知錯誤，請稍後再試。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-sommelier" className="py-16 sm:py-24 bg-parchment-100/80 border-t border-parchment-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 區塊標題 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-beef-burgundy text-white text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
            {t.title}
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 1. BYOK API Key 密鑰保險箱 */}
        <div className="bg-parchment-50 p-5 sm:p-6 rounded-2xl border border-parchment-300 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-parchment-200 pb-3">
            <div className="flex items-center gap-2 text-charcoal font-serif font-bold text-sm sm:text-base">
              <Key className="w-4 h-4 text-beef-burgundy" />
              <span>{t.byokTitle}</span>
            </div>
            <div className="text-[11px] text-charcoal-muted">
              🔒 零伺服器儲存 · 瀏覽器端直接發送
            </div>
          </div>

          <p className="text-xs text-charcoal-light leading-relaxed font-sans">
            {t.byokDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative flex-1">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => handleKeyChange(e.target.value)}
                placeholder={t.apiKeyPlaceholder}
                className="w-full pl-3.5 pr-10 py-2 rounded-xl bg-parchment-100 border border-parchment-300 text-charcoal font-mono text-xs focus:outline-none focus:ring-2 focus:ring-beef-burgundy/40 focus:border-beef-burgundy transition-all"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal cursor-pointer p-1"
                aria-label="Toggle Key Visibility"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {apiKey && (
              <button
                type="button"
                onClick={handleClearKey}
                className="px-3 py-2 rounded-xl bg-parchment-200 hover:bg-rose-100 hover:text-rose-800 text-charcoal-muted text-xs font-semibold border border-parchment-300 transition-colors shrink-0 flex items-center justify-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.clearKeyLabel}</span>
              </button>
            )}
          </div>
        </div>

        {/* 2. 一鍵帶入經典情境預設按鈕 */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.presetBadge}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {t.presets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className="text-left p-3.5 rounded-xl bg-parchment-50 hover:bg-parchment-200 border border-parchment-300 hover:border-beef-burgundy transition-all shadow-2xs group cursor-pointer space-y-1"
              >
                <div className="font-bold text-xs text-charcoal flex items-center gap-1.5 group-hover:text-beef-burgundy">
                  <span>{preset.icon}</span>
                  <span>{preset.label}</span>
                </div>
                <div className="text-[11px] text-charcoal-muted line-clamp-2 leading-relaxed">
                  {preset.text}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 3. 結構化情境表單 (對齊預約 Concierge 規格) */}
        <form onSubmit={handleSubmit} className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border border-parchment-300 shadow-md space-y-8">
          
          {/* 3.1 用餐人數與客群 */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
              👥 1. {t.form.guestsTitle}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-parchment-100 p-3 rounded-xl border border-parchment-200 flex items-center justify-between">
                <span className="text-xs text-charcoal font-medium">{t.form.adultsLabel}</span>
                <div className="flex items-center gap-2 font-mono font-bold text-charcoal">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-6 h-6 rounded bg-parchment-50 hover:bg-beef-burgundy hover:text-white transition-colors flex items-center justify-center text-xs border border-parchment-300 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-6 h-6 rounded bg-parchment-50 hover:bg-beef-burgundy hover:text-white transition-colors flex items-center justify-center text-xs border border-parchment-300 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-parchment-100 p-3 rounded-xl border border-parchment-200 flex items-center justify-between">
                <span className="text-xs text-charcoal font-medium">{t.form.kidsLabel}</span>
                <div className="flex items-center gap-2 font-mono font-bold text-charcoal">
                  <button
                    type="button"
                    onClick={() => setKids(Math.max(0, kids - 1))}
                    className="w-6 h-6 rounded bg-parchment-50 hover:bg-beef-burgundy hover:text-white transition-colors flex items-center justify-center text-xs border border-parchment-300 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{kids}</span>
                  <button
                    type="button"
                    onClick={() => setKids(kids + 1)}
                    className="w-6 h-6 rounded bg-parchment-50 hover:bg-beef-burgundy hover:text-white transition-colors flex items-center justify-center text-xs border border-parchment-300 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3.2 聚餐目的與氛圍 */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
              🎯 2. {t.form.occasionTitle}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {t.form.occasions.map((occ) => (
                <button
                  key={occ.id}
                  type="button"
                  onClick={() => setOccasion(occ.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer space-y-1 ${
                    occasion === occ.id
                      ? 'bg-beef-burgundy text-white border-beef-burgundy shadow-xs'
                      : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
                  }`}
                >
                  <div className="font-bold text-xs">{occ.label}</div>
                  <div className={`text-[10px] line-clamp-1 ${occasion === occ.id ? 'text-parchment-200' : 'text-charcoal-muted'}`}>
                    {occ.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3.3 主要肉品品類 */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
              🥩 3. {t.form.meatTitle}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {t.form.meats.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMeatCategory(m.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer space-y-1 ${
                    meatCategory === m.id
                      ? 'bg-beef-burgundy text-white border-beef-burgundy shadow-xs'
                      : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
                  }`}
                >
                  <div className="font-bold text-xs">{m.label}</div>
                  <div className={`text-[10px] line-clamp-1 ${meatCategory === m.id ? 'text-parchment-200' : 'text-charcoal-muted'}`}>
                    {m.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3.4 烹調方式與手法 */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
              🍳 4. {t.form.cookingTitle}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {t.form.cookings.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCookingStyle(c.id)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap text-center ${
                    cookingStyle === c.id
                      ? 'bg-beef-burgundy text-white border-beef-burgundy shadow-xs'
                      : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3.5 飲品偏好 (有酒 / 無酒) */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
              🥂 5. {t.form.drinkTitle}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {t.form.drinks.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDrinkPreference(d.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer space-y-1 ${
                    drinkPreference === d.id
                      ? 'bg-purple-900 text-white border-purple-900 shadow-xs'
                      : 'bg-parchment-100 text-charcoal border-parchment-300 hover:bg-parchment-200'
                  }`}
                >
                  <div className="font-bold text-xs">{d.label}</div>
                  <div className={`text-[10px] line-clamp-1 ${drinkPreference === d.id ? 'text-purple-200' : 'text-charcoal-muted'}`}>
                    {d.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3.6 自訂自由提問與食材輸入框 */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
              💬 6. {t.form.customNoteTitle}
            </label>
            <textarea
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              rows={3}
              placeholder={t.form.customNotePlaceholder}
              className="w-full p-3.5 rounded-xl bg-parchment-100 border border-parchment-300 text-charcoal font-sans text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-beef-burgundy/40 focus:border-beef-burgundy transition-all"
            />
          </div>

          {/* 錯誤提示 */}
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-700" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* 送出按鈕 */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 rounded-xl font-bold text-sm sm:text-base text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isLoading
                ? 'bg-charcoal/60 cursor-not-allowed'
                : 'bg-beef-burgundy hover:bg-[#721522] hover:shadow-lg active:scale-[0.99]'
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{t.form.submittingBtn}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t.form.submitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* 4. 結構化 AI 建議結果卡片 */}
        {recommendationResult && (
          <div className="bg-parchment-50 p-6 sm:p-8 rounded-2xl border-2 border-beef-burgundy shadow-xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-parchment-300 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-beef-burgundy text-white flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-charcoal">
                    {t.results.title}
                  </h3>
                  <span className="text-xs text-charcoal-muted">
                    依據風味協同科學與部位百科生成
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  window.scrollTo({ top: document.getElementById('ai-sommelier')?.offsetTop - 80, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-beef-burgundy hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{t.results.reGenerateBtn}</span>
              </button>
            </div>

            {/* Markdown 渲染內容 */}
            <div className="prose prose-stone max-w-none text-charcoal font-sans text-xs sm:text-sm leading-relaxed space-y-4 whitespace-pre-wrap">
              {recommendationResult}
            </div>

            {/* 底部免責警語 */}
            <div className="pt-4 border-t border-parchment-200 text-center text-[11px] text-charcoal-muted">
              {t.results.disclaimer}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
