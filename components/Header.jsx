'use client';

// =========================================================================
// MU AETHEL - Encabezado / Navegación (Con Sesión Dinámica)
// =========================================================================

import { useState, useEffect } from 'react';
import { useI18n } from '../lib/i18n';

// Banderas SVG nativas
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
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
];

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Al cargar cualquier página, el Header pregunta si hay alguien logueado
    fetch('/api/auth/session')
      .then(res => res.ok ? res.json() : { loggedIn: false })
      .then(data => {
        if (data.loggedIn) setUser(data.username);
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#102542] bg-gradient-to-r from-[#050a12]/95 via-[#0a182e]/95 to-[#050a12]/95 backdrop-blur-md shadow-lg shadow-[#000000]/50">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6">
        
        {/* LADO IZQUIERDO: LOGO Y NOMBRE */}
        <a href="/#inicio" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="Mu Aethel" className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(252,232,147,0.3)] hover:scale-105 transition-transform" />
          <span className="text-2xl font-black tracking-widest text-[#fce893] drop-shadow-md hidden sm:block" style={{ fontFamily: "'Cinzel', serif" }}>
            Mu Aethel
          </span>
        </a>

        {/* CENTRO: NAVEGACIÓN CON RUTAS ABSOLUTAS */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-bold tracking-wider mx-auto">
          <a href="/#inicio" className="text-white hover:text-[#51e2f5] hover:-translate-y-0.5 transition-all drop-shadow-sm">{t('nav.home') || 'Inicio'}</a>
          <a href="/#noticias" className="text-white hover:text-[#51e2f5] hover:-translate-y-0.5 transition-all drop-shadow-sm">{t('nav.news') || 'Noticias'}</a>
          <a href="/#economia" className="text-white hover:text-[#51e2f5] hover:-translate-y-0.5 transition-all drop-shadow-sm">{t('nav.economy') || 'Economía'}</a>
          <a href="/#descargas" className="text-white hover:text-[#51e2f5] hover:-translate-y-0.5 transition-all drop-shadow-sm">{t('nav.downloads') || 'Descargas'}</a>
        </nav>

        {/* LADO DERECHO: BANDERAS Y CUENTA */}
        <div className="flex items-center gap-6 shrink-0">
          
          <div className="flex items-center gap-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                title={l.label}
                className={`p-0.5 rounded transition-all hover:scale-110 ${
                  lang === l.code 
                    ? 'border-2 border-[#fce893] shadow-[0_0_10px_rgba(252,232,147,0.5)] opacity-100' 
                    : 'border-2 border-transparent opacity-50 hover:opacity-100 grayscale-[30%]'
                }`}
              >
                {FLAGS[l.code]}
              </button>
            ))}
          </div>

          {/* LÓGICA DE SESIÓN: Si hay usuario muestra su nombre, sino los botones */}
          {user ? (
            <a 
              href="/cuenta" 
              className="hidden sm:flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-b from-[#10567e] to-[#167d9e] border border-[#51e2f5] text-white font-black text-sm tracking-wide shadow-[0_0_15px_rgba(81,226,245,0.4)] hover:shadow-[0_0_20px_rgba(81,226,245,0.7)] hover:scale-105 transition-all"
            >
              {user}
            </a>
          ) : (
            <>
              <a 
                href="/registro" 
                className="hidden sm:flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-b from-[#fce893] to-[#cba135] border border-[#fff3b0] text-[#050a12] font-black text-sm tracking-wide shadow-[0_0_15px_rgba(203,161,53,0.4)] hover:shadow-[0_0_20px_rgba(252,232,147,0.7)] hover:scale-105 transition-all"
              >
                Crear Cuenta
              </a>
              
              <a href="/login" className="hidden sm:block text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-[#51e2f5] transition-all">
                Ingresar
              </a>
            </>
          )}
        </div>

      </div>
    </header>
  );
}
