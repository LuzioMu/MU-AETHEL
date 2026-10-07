'use client';

// ============================================================================
//  MU AETHEL - Sistema de Traducciones (i18n)
//  Ahora lee los textos desde el archivo centralizado translations.js
// ============================================================================

import React, { createContext, useContext, useState } from 'react';
import { translations, DEFAULT_LANG } from './translations';

const I18nContext = createContext();

export function I18nProvider({ children, initialLang = 'es' }) {
  const [lang, setLang] = useState(initialLang);

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang] || translations[DEFAULT_LANG] || translations.es;

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Si no encuentra la traducción, devuelve la clave.
        return path;
      }
    }
    return current;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n debe ser usado dentro de un I18nProvider');
  }
  return context;
}