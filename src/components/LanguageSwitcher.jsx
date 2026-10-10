'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { currentLang = 'zh-TW', setCurrentLang, languages = [
    { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ] } = useLanguage() || {};

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-parchment-300 bg-parchment-50 hover:bg-parchment-200 text-xs font-semibold text-charcoal shadow-2xs transition-all whitespace-nowrap"
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-charcoal-muted" />
        <span>{currentLangObj.flag}</span>
        <span className="hidden sm:inline">{currentLangObj.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-parchment-50 border border-parchment-300 rounded-xl shadow-lg p-1.5 z-50 animate-fadeIn">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrentLang?.(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-colors ${
                currentLang === lang.code
                  ? 'bg-beef-burgundy text-white'
                  : 'text-charcoal hover:bg-parchment-200'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
