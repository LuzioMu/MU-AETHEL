'use client';

// ============================================================================
//  MU AETHEL - Estado global de idioma
//  Envolvé la app con <I18nProvider> y usá el hook useI18n() en cualquier
//  componente cliente para leer t(), lang y setLang().
// ============================================================================

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_LANG,
  LANGUAGES,
  getTranslation,
  interpolate,
} from './translations';

const STORAGE_KEY = 'mu-aethel:lang';

const I18nContext = createContext(null);

export function I18nProvider({ children, initialLang = DEFAULT_LANG }) {
  const [lang, setLangState] = useState(initialLang);

  // Recupera el idioma guardado o el del navegador (solo en cliente).
  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }

    const browser = navigator.language?.slice(0, 2);
    const supported = LANGUAGES.map((l) => l.code);
    const next =
      (stored && supported.includes(stored) && stored) ||
      (browser && supported.includes(browser) && browser) ||
      initialLang;

    setLangState(next);
  }, [initialLang]);

  // Mantiene sincronizado <html lang="…"> para accesibilidad y SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((code) => {
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* modo privado o storage bloqueado: se ignora */
    }
  }, []);

  /**
   * t('economy.title')            -> string
   * t('economy.honorEarn')        -> array (listas)
   * t('events.weeklyOn', { day }) -> string con variables reemplazadas
   */
  const t = useCallback(
    (path, vars) => {
      const value = getTranslation(lang, path);
      if (Array.isArray(value)) return value;
      return vars ? interpolate(value, vars) : value;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t, languages: LANGUAGES }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n debe usarse dentro de <I18nProvider>.');
  return ctx;
}
