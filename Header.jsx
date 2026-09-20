'use client';

// ============================================================================
//  MU AETHEL - Encabezado, navegación y selector de idioma (ES / EN / PT)
// ============================================================================

import { useState } from 'react';
import { useI18n } from '../lib/i18n';
import { SERVER } from '../lib/serverConfig';

const NAV = [
  { href: '#inicio', key: 'nav.home' },
  { href: '#noticias', key: 'nav.news' },
  { href: '#economia', key: 'nav.economy' },
  { href: '#descargas', key: 'nav.download' },
];

function LanguageSwitch() {
  const { lang, setLang, languages, t } = useI18n();

  return (
    <div
      className="flex items-center gap-px border border-steel-700 bg-abyss-700 p-px"
      role="group"
      aria-label={t('nav.language')}
    >
      {languages.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            title={l.name}
            className={`px-2.5 py-1 font-data text-xs font-bold tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arcane-400 ${
              active
                ? 'bg-bevel text-arcane-300 shadow-inset'
                : 'text-silver-500 hover:bg-abyss-500 hover:text-silver-300'
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-700/70 bg-abyss-900/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        {/* Marca */}
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          {/* Sello: reemplazá por <Image src="/logo.png" .../> cuando tengas el arte */}
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-relic-600/70 bg-bevel font-display text-base text-relic-300 shadow-inset">
            A
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none text-silver-300">
              {SERVER.name}
            </span>
            <span className="block truncate font-data text-[10px] tracking-widest text-arcane-400">
              {SERVER.season}
            </span>
          </span>
        </a>

        {/* Navegación en escritorio */}
        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-silver-400 transition-colors hover:text-arcane-300"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LanguageSwitch />

          <a
            href="#descargas"
            className="hidden border border-arcane-500/70 bg-arcane-600/20 px-4 py-1.5 font-display text-sm tracking-wide text-arcane-300 shadow-neon transition-colors hover:bg-arcane-600/40 sm:inline-block"
          >
            {t('nav.play')}
          </a>

          {/* Botón de menú en móvil */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="border border-steel-700 px-3 py-1.5 text-sm text-silver-400 lg:hidden"
          >
            {open ? t('nav.close') : t('nav.menu')}
          </button>
        </div>
      </div>

      {/* Navegación en móvil */}
      {open && (
        <nav id="menu-movil" className="border-t border-steel-700/70 bg-abyss-800 lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-steel-700/40 py-3 text-sm text-silver-400"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
