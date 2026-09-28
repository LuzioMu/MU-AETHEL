'use client';

// =========================================================================
// MU AETHEL - Encabezado / Navegación
// =========================================================================

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
        
        {/* LOGO NUEVO CON IMAGEN */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Mu Aethel Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(252,232,147,0.4)]" />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-[#fce893] group-hover:text-white transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
              MU AETHEL
            </span>
            <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#102542] text-[#51e2f5] border border-[#485c78] w-fit mt-0.5">
              S6 EP3
            </span>
          </div>
        </a>

        {/* NAVEGACIÓN (Ocultamos enlaces rotos por ahora) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#inicio" className="hover:text-[#fce893] transition-colors">{t('nav.home') || 'Inicio'}</a>
          <a href="#noticias" className="hover:text-[#fce893] transition-colors">{t('nav.news') || 'Noticias'}</a>
          <a href="#economia" className="hover:text-[#fce893] transition-colors">{t('nav.economy') || 'Economía'}</a>
          <a href="#descargas" className="hover:text-[#fce893] transition-colors">{t('nav.downloads') || 'Descargas'}</a>
        </nav>

        {/* CONTROLES DERECHOS */}
        <div className="flex items-center gap-4">
          
          {/* BOTONES LOGIN / REGISTRO */}
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium border-r border-slate-700 pr-4">
            <a href="#login" className="text-slate-300 hover:text-white transition-colors">Ingresar</a>
            <a href="#registro" className="px-4 py-1.5 rounded bg-[#102542]/50 border border-[#fce893]/40 text-[#fce893] hover:bg-[#fce893]/10 hover:border-[#fce893] transition-all shadow-[0_0_10px_rgba(252,232,147,0.1)]">
              Crear Cuenta
            </a>
          </div>

          {/* SELECTOR DE IDIOMA */}
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

          {/* BOTÓN JUGAR AHORA */}
          <a
            href="#descargas"
            className="mu-button text-xs px-4 py-2 rounded tracking-wide hidden sm:inline-block bg-gradient-to-r from-blue-700 to-blue-900 border border-blue-500 text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all font-bold"
          >
            {t('nav.playNow') || 'Jugar ahora'}
          </a>
        </div>
      </div>
    </header>
  );
}
