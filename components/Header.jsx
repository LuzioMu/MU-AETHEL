'use client';

// =========================================================================
// MU AETHEL - Encabezado / Navegación
// =========================================================================

import { useI18n } from '../lib/i18n';

// Banderas SVG nativas (Carga garantizada en Windows, Mac y Móviles)
const FLAGS = {
  es: (
    <svg className="w-5 h-3.5 rounded-sm overflow-hidden inline-block shrink-0" viewBox="0 0 640 480">
      <path fill="#c1311b" d="M0 0h640v480H0z"/>
      <path fill="#f1bf00" d="M0 120h640v240H0z"/>
    </svg>
  ),
  en: (
    <svg className="w-5 h-3.5 rounded-sm overflow-hidden inline-block shrink-0" viewBox="0 0 640 480">
      <path fill="#bd3d44" d="M0 0h640v480H0z"/>
      <path fill="#fff" d="M0 37h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0z"/>
      <path fill="#192f5d" d="M0 0h256v258H0z"/>
      <g fill="#fff">
        <path d="M26 18l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM77 18l3 8h9l-7 5 3 9-7-5-8 5 3-9-7-5h9zM128 18l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM179 18l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM230 18l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9z"/>
        <path d="M51 51l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM102 51l3 8h9l-7 5 3 9-7-5-8 5 3-9-7-5h9zM153 51l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM204 51l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9z"/>
        <path d="M26 84l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM77 84l3 8h9l-7 5 3 9-7-5-8 5 3-9-7-5h9zM128 84l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM179 84l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM230 84l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9z"/>
        <path d="M51 117l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM102 117l3 8h9l-7 5 3 9-7-5-8 5 3-9-7-5h9zM153 117l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM204 117l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9z"/>
        <path d="M26 150l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM77 150l3 8h9l-7 5 3 9-7-5-8 5 3-9-7-5h9zM128 150l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM179 150l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM230 150l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9z"/>
        <path d="M51 183l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM102 183l3 8h9l-7 5 3 9-7-5-8 5 3-9-7-5h9zM153 183l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM204 183l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9z"/>
        <path d="M26 216l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM77 216l3 8h9l-7 5 3 9-7-5-8 5 3-9-7-5h9zM128 216l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM179 216l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9zM230 216l3 8h9l-7 5 3 9-8-5-7 5 3-9-7-5h9z"/>
      </g>
    </svg>
  ),
  pt: (
    <svg className="w-5 h-3.5 rounded-sm overflow-hidden inline-block shrink-0" viewBox="0 0 640 480">
      <path fill="#009c3b" d="M0 0h640v480H0z"/>
      <path fill="#ffdf00" d="M320 40 600 240 320 440 40 240z"/>
      <circle fill="#002776" cx="320" cy="240" r="105"/>
    </svg>
  )
};

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
];

export default function Header() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#102542] bg-[#050a12]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3 group shrink-0">
          <img src="/logo.png" alt="Mu Aethel Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(252,232,147,0.4)]" />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-[#fce893] group-hover:text-white transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
              MU AETHEL
            </span>
            <span className="text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#102542] text-[#51e2f5] w-fit mt-0.5 uppercase">
              S6 EP3
            </span>
          </div>
        </a>

        {/* NAVEGACIÓN CENTRAL */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide flex-1 justify-center">
          <a href="#inicio" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('nav.home') || 'Inicio'}</a>
          <a href="#noticias" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('nav.news') || 'Noticias'}</a>
          <a href="#economia" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('nav.economy') || 'Economía'}</a>
          <a href="#descargas" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('nav.downloads') || 'Descargas'}</a>
        </nav>

        {/* CONTROLES DERECHOS */}
        <div className="flex items-center gap-5 shrink-0">
          
          {/* BOTONES LOGIN / REGISTRO */}
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <a href="#login" className="text-slate-300 hover:text-white transition-colors">Ingresar</a>
            <a href="#registro" className="px-4 py-1.5 rounded bg-transparent border border-[#51e2f5]/50 text-[#51e2f5] hover:bg-[#51e2f5]/10 hover:border-[#51e2f5] transition-all">
              Crear Cuenta
            </a>
          </div>

          <div className="hidden md:block w-px h-5 bg-slate-700"></div>

          {/* SELECTOR DE IDIOMA CON TEXTO 'IDIOMA' */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mr-1 hidden sm:inline-block">
              Idioma:
            </span>
            <div className="flex items-center gap-2 bg-[#0a182e]/60 border border-[#102542] p-1 rounded">
              {languages.map((l, index) => {
                const active = l.code === lang;
                return (
                  <div key={l.code} className="flex items-center gap-2">
                    <button
                      onClick={() => setLang(l.code)}
                      className={`flex items-center gap-1.5 px-2 py-0.5 rounded transition-all ${
                        active 
                          ? 'bg-[#102542] border border-[#51e2f5]/50 text-white shadow-[0_0_8px_rgba(81,226,245,0.3)]' 
                          : 'text-slate-400 hover:text-slate-200 opacity-70 hover:opacity-100'
                      }`}
                      title={l.code.toUpperCase()}
                    >
                      {FLAGS[l.code]}
                      <span className="text-xs font-bold">{l.label}</span>
                    </button>
                    {index < languages.length - 1 && <span className="text-slate-700 text-xs">|</span>}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
