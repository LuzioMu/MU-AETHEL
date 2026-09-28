'use client';

// =========================================================================
// MU AETHEL - Encabezado / Navegación
// =========================================================================

import { useI18n } from '../lib/i18n';

const languages = [
  { code: 'es', label: '🇪🇸' },
  { code: 'en', label: '🇺🇸' },
  { code: 'pt', label: '🇧🇷' },
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

        {/* NAVEGACIÓN CENTRAL (Bien espaciada) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide flex-1 justify-center">
          <a href="#inicio" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('nav.home') || 'Inicio'}</a>
          <a href="#noticias" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('nav.news') || 'Noticias'}</a>
          <a href="#economia" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('nav.economy') || 'Economía'}</a>
          <a href="#descargas" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('nav.downloads') || 'Descargas'}</a>
        </nav>

        {/* CONTROLES DERECHOS */}
        <div className="flex items-center gap-6 shrink-0">
          
          {/* BOTONES LOGIN / REGISTRO */}
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <a href="#login" className="text-slate-300 hover:text-white transition-colors">Ingresar</a>
            <a href="#registro" className="px-4 py-1.5 rounded bg-transparent border border-[#51e2f5]/50 text-[#51e2f5] hover:bg-[#51e2f5]/10 hover:border-[#51e2f5] transition-all">
              Crear Cuenta
            </a>
          </div>

          <div className="hidden md:block w-px h-5 bg-slate-700"></div> {/* Separador */}

{/* SELECTOR DE IDIOMA ELEGANTE */}
          <div className="flex items-center gap-3 text-lg font-bold tracking-wider">
            {languages.map((l, index) => {
              const active = l.code === lang;
              return (
                <div key={l.code} className="flex items-center gap-3">
                  <button
                    onClick={() => setLang(l.code)}
                    className={`transition-colors hover:scale-110 ${active ? 'opacity-100 drop-shadow-[0_0_8px_rgba(81,226,245,0.8)]' : 'opacity-50 hover:opacity-80'}`}
                    title={l.code.toUpperCase()}
                  >
                    {l.label}
                  </button>
                  {index < languages.length - 1 && <span className="text-slate-700 text-sm">|</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
