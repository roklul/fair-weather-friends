'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

const LanguageContext = createContext({
  currentLang: 'zh-TW',
  setCurrentLang: () => {},
  t: TRANSLATIONS['zh-TW'],
  languages: [
    { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ],
});

export function LanguageProvider({ children, initialLang = 'zh-TW' }) {
  const [currentLang, setCurrentLangState] = useState(initialLang);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fwf_lang');
      if (saved && (saved === 'zh-TW' || saved === 'en' || saved === 'ja')) {
        setCurrentLangState(saved);
        if (typeof document !== 'undefined') {
          document.documentElement.lang = saved;
        }
      } else if (typeof document !== 'undefined') {
        document.documentElement.lang = initialLang;
      }
    } catch {
      // localStorage may fail in restricted environments
    }
  }, [initialLang]);

  const setCurrentLang = (lang) => {
    if (lang === 'zh-TW' || lang === 'en' || lang === 'ja') {
      setCurrentLangState(lang);
      try {
        localStorage.setItem('fwf_lang', lang);
      } catch {
        // ignore
      }
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    }
  };

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['zh-TW'];

  const languages = [
    { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageContext;
