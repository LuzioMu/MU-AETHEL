'use client';

// ============================================================================
//  MU AETHEL - Página principal
// ============================================================================

import { I18nProvider, useI18n } from '../lib/i18n';
import { SERVER } from '../lib/serverConfig';

import Header from '../components/Header';
import EventTimers from '../components/EventTimers';
import NewsFeed from '../components/NewsFeed';
import TokenEconomy from '../components/TokenEconomy';
import DownloadCenter from '../components/DownloadCenter';
import Footer from '../components/Footer';

function Hero() {
  const { t } = useI18n();

  const stats = [
    { label: t('hero.statExp') || 'Experiencia', value: SERVER.rates.exp },
    { label: t('hero.statDrop') || 'Drop', value: SERVER.rates.drop },
    { label: t('hero.statReset') || 'Resets', value: SERVER.rates.reset },
    { label: t('hero.statPlayers') || 'Online', value: SERVER.rates.players },
  ];

  return (
    <section id="inicio" className="relative scroll-mt-24 min-h-[75vh] flex items-center justify-center">
      
      {/* DEGRADADO SUTIL (Solo para asegurar lectura, el fondo está en el contenedor principal) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/40 to-[#050a12]/90 pointer-events-none" />
      <div className="absolute left-1/2 top-10 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#51e2f5]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:py-16 flex flex-col items-center">
        
        {/* TAG SUPERIOR */}
        <p className="font-data text-xs tracking-[0.3em] text-[#51e2f5] uppercase font-semibold">
          {t('meta.tagline')}
        </p>

        {/* TÍTULO PRINCIPAL EN DORADO (El Dorado manda acá) */}
        <h1 
          className="mt-3 text-6xl sm:text-8xl font-display font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#fff3b0] via-[#fce893] to-[#cba135] drop-shadow-[0_4px_12px_rgba(252,232,147,0.2)]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {t('hero.title')}
        </h1>

        {/* SUBTÍTULO */}
        <p className="mt-2 text-lg sm:text-xl font-data tracking-widest text-white uppercase drop-shadow-md">
          {t('hero.subtitle')}
        </p>

        <p className="mt-4 max-w-xl text-base text-slate-200 mx-auto leading-relaxed">
          {t('hero.claim')}
        </p>

        {/* BADGES REDISEÑADOS (Celeste, Rojo/Negro, Dorado) */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs font-bold">
          {/* Badge Celeste */}
          <span className="px-4 py-2 rounded bg-[#0a182e]/80 border border-[#51e2f5]/50 text-[#51e2f5] tracking-wider shadow-[0_0_10px_rgba(81,226,245,0.1)]">
            {t('hero.badge1')}
          </span>
          {/* Badge Rojo/Negro (Alerta / Regla estricta) */}
          <span className="px-4 py-2 rounded bg-black/80 border border-red-500/60 text-red-400 tracking-wider shadow-[0_0_10px_rgba(239,68,68,0.15)]">
            {t('hero.badge2')}
          </span>
          {/* Badge Dorado (Economía) */}
          <span className="px-4 py-2 rounded bg-[#1a1508]/80 border border-[#fce893]/60 text-[#fce893] tracking-wider shadow-[0_0_10px_rgba(252,232,147,0.1)]">
            {t('hero.badge3')}
          </span>
        </div>

        {/* BOTONES PRINCIPALES */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#descargas"
            className="px-8 py-3 rounded bg-gradient-to-r from-[#cba135] to-[#fce893] text-black font-bold tracking-wide shadow-[0_0_15px_rgba(252,232,147,0.4)] hover:scale-105 transition-transform"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#economia"
            className="px-8 py-3 rounded bg-[#0a182e]/80 border border-[#51e2f5]/40 text-[#51e2f5] font-bold tracking-wide hover:bg-[#51e2f5]/10 hover:border-[#51e2f5] hover:scale-105 transition-all"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        {/* PANEL DE RATES (Azules profundos y blancos/dorados) */}
        <dl className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-px bg-slate-800/50 border border-slate-700/50 sm:grid-cols-4 rounded overflow-hidden shadow-2xl backdrop-blur-sm">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#050a12]/90 px-4 py-4 text-center hover:bg-[#0a182e]/90 transition-colors">
              <dt className="font-data text-[10px] text-slate-400 uppercase tracking-widest">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// (El componente ServerFeatures queda igual por ahora, no lo pego para ahorrar espacio, dejá el que ya tenías).
// ... ACÁ VA TU CÓDIGO DE ServerFeatures ...

export default function HomePage() {
  return (
    <I18nProvider initialLang="es">
      {/* ACÁ ESTÁ EL SECRETO DEL FONDO FIJO (bg-fixed) */}
      <div className="min-h-screen font-body text-slate-300 antialiased bg-[url('/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat bg-[#050a12]">
        <Header />
        <main>
          <Hero />
          {/* <ServerFeatures />  <-- Descomentá y dejá tus otras secciones acá */}
          {/* <EventTimers /> */}
          {/* <NewsFeed /> */}
          {/* <TokenEconomy /> */}
          {/* <DownloadCenter /> */}
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
