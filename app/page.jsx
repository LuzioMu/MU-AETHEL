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
      
      {/* DEGRADADO SUTIL (Solo para asegurar lectura) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/40 to-[#050a12]/90 pointer-events-none" />
      <div className="absolute left-1/2 top-10 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#51e2f5]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:py-16 flex flex-col items-center">
        
        {/* TAG SUPERIOR */}
        <p className="font-data text-xs tracking-[0.3em] text-[#51e2f5] uppercase font-semibold">
          {t('meta.tagline')}
        </p>

        {/* TÍTULO PRINCIPAL EN DORADO */}
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

{/* BADGES REDISEÑADOS */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs font-bold">
          <span className="px-4 py-2 rounded bg-[#0a182e]/90 border border-[#51e2f5]/50 text-[#51e2f5] tracking-wider shadow-[0_0_10px_rgba(81,226,245,0.1)]">
            ⚔️ Play-to-Earn
          </span>
          <span className="px-4 py-2 rounded bg-black/90 border border-red-500/60 text-red-400 tracking-wider shadow-[0_0_10px_rgba(239,68,68,0.15)]">
            🚫 No VIP
          </span>
          <span className="px-4 py-2 rounded bg-[#1a1508]/90 border border-[#fce893]/60 text-[#fce893] tracking-wider shadow-[0_0_10px_rgba(252,232,147,0.1)]">
            🗓️ Events every Week
          </span>
        </div>

        {/* BOTONES PRINCIPALES */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#descargas"
            className="px-8 py-3 rounded bg-gradient-to-r from-[#cba135] to-[#fce893] text-[#050a12] font-black tracking-wide shadow-[0_0_15px_rgba(252,232,147,0.6)] hover:scale-105 transition-transform"
          >
            {t('hero.ctaPrimary') || 'Descargar Cliente'}
          </a>
          <a
            href="#economia"
            className="px-8 py-3 rounded bg-[#0a182e]/90 border border-[#51e2f5]/40 text-[#51e2f5] font-bold tracking-wide hover:bg-[#51e2f5]/10 hover:border-[#51e2f5] hover:scale-105 transition-all"
          >
            {t('hero.ctaSecondary') || 'Ver Economía'}
          </a>
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

        {/* PANEL DE RATES */}
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

function ServerFeatures() {
  const { t } = useI18n();

  const features = [
    {
      icon: "⚔️",
      title: t('features.bossesTitle') || "Jefes & Bosses Custom",
      tag: t('features.bossesTag') || "PVE EXCLUSIVO",
      desc: t('features.bossesDesc') || "World Bosses únicos con mecánicas avanzadas y eventos de invasión con recompensas exclusivas."
    },
    {
      icon: "🗺️",
      title: t('features.mapsTitle') || "Mapas Remasterizados",
      tag: t('features.mapsTag') || "ZONAS PVP / SAFE",
      desc: t('features.mapsDesc') || "Zonas de leveo optimizadas y mapas especiales de PvP abierto sin penalizaciones."
    },
    {
      icon: "⚖️",
      title: t('features.balanceTitle') || "Balance PvP Season 6",
      tag: t('features.balanceTag') || "EQUILIBRIO TOTAL",
      desc: t('features.balanceDesc') || "Ajustes de daño y resistencia en las 7 clases para combates justos en duelos y Castle Siege."
    },
    {
      icon: "💎",
      title: t('features.economyTitle') || "Economía Play-to-Earn",
      tag: t('features.economyTag') || "RECOMPENSAS P2E",
      desc: t('features.economyDesc') || "Sistema de tokens por méritos dentro del juego. Cero pay-to-win, premiando el esfuerzo."
    }
  ];

  return (
    <section className="relative z-10 py-16 bg-[#080d17]/95 border-y border-slate-800/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-data text-xs tracking-[0.2em] text-[#51e2f5] uppercase">{t('features.subtitle') || 'Novedades de Mu Aethel'}</p>
          <h2 
            className="text-3xl sm:text-4xl mt-2 text-slate-200"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {t('features.mainTitle') || 'Modificaciones & Características'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-[#050a12] border border-slate-800 p-6 rounded flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[#102542] shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#102542] text-[#51e2f5] border border-[#485c78]">
                    {item.tag}
                  </span>
                </div>
                <h3 
                  className="text-xl text-[#fce893] mb-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <I18nProvider initialLang="es">
      {/* FONDO FIJO CONbg-fixed */}
      <div className="min-h-screen font-body text-slate-300 antialiased bg-[url('/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat bg-[#050a12]">
        <Header />
        <main>
          <Hero />
          <ServerFeatures />
          <EventTimers />
          <NewsFeed />
          <TokenEconomy />
          <DownloadCenter />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
