'use client';

// ============================================================================
//  MU AETHEL - Encabezado / Navegación
// ============================================================================

import { useI18n } from '../lib/i18n';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
];

export default function Header() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#050a12]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="font-display text-xl font-bold tracking-wider text-[#fce893] group-hover:text-white transition-colors">
            MU AETHEL
          </span>
          <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#102542] text-[#51e2f5] border border-[#485c78]">
            S6 EP3
          </span>
        </a>

        {/* NAVEGACIÓN */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#inicio" className="hover:text-[#fce893] transition-colors">{t('nav.home')}</a>
          <a href="#noticias" className="hover:text-[#fce893] transition-colors">{t('nav.news')}</a>
          <a href="#economia" className="hover:text-[#fce893] transition-colors">{t('nav.economy')}</a>
          <a href="#descargas" className="hover:text-[#fce893] transition-colors">{t('nav.downloads')}</a>
        </nav>

        {/* SELECTOR DE IDIOMA CON ANCHO FIJO */}
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded border border-slate-700/80 bg-[#0a111c] p-0.5">
            {languages.map((l) => {
              const active = l.code === lang;
              return (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`min-w-[32px] px-2 py-1 text-xs font-bold rounded transition-colors ${
                    active
                      ? 'bg-[#51e2f5] text-[#050a12]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {l.label}
                </button>
              );
            })}
          </div>

          <a
            href="#descargas"
            className="mu-button text-xs px-4 py-2 rounded font-display tracking-wide hidden sm:inline-block"
          >
            {t('nav.playNow')}
          </a>
        </div>

      </div>
    </header>
  );
}
