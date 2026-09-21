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
    <section id="inicio" className="relative scroll-mt-24 overflow-hidden min-h-[70vh] flex items-center justify-center bg-[#050a12]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(24,37,56,0.8),rgba(5,10,18,1))]" />
      <div className="absolute left-1/2 top-10 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#51e2f5]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:py-16 flex flex-col items-center">
        
        {/* TAG SUPERIOR */}
        <p className="font-data text-xs tracking-[0.3em] text-[#51e2f5] uppercase font-semibold">
          {t('meta.tagline')}
        </p>

        {/* TÍTULO PRINCIPAL EN DORADO */}
        <h1 className="mt-3 text-6xl sm:text-8xl font-display font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#fff3b0] via-[#fce893] to-[#cba135] drop-shadow-[0_4px_12px_rgba(252,232,147,0.3)]">
          {t('hero.title')}
        </h1>

        {/* SUBTÍTULO Y BAJADA */}
        <p className="mt-2 text-lg sm:text-xl font-data tracking-widest text-slate-300 uppercase">
          {t('hero.subtitle')}
        </p>

        <p className="mt-4 max-w-xl text-base text-slate-300 mx-auto leading-relaxed">
          {t('hero.claim')}
        </p>

        {/* BADGES VISUALES (REEMPLAZAN AL TEXTO LARGO) */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-[#0d1b2a] border border-[#51e2f5]/30 text-[#51e2f5] font-medium tracking-wide">
            {t('hero.badge1')}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#0d1b2a] border border-[#fce893]/30 text-[#fce893] font-medium tracking-wide">
            {t('hero.badge2')}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#0d1b2a] border border-slate-700 text-slate-300 font-medium tracking-wide">
            {t('hero.badge3')}
          </span>
        </div>

        {/* BOTONES PRINCIPALES */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#descargas"
            className="mu-button mu-button-gold min-w-[190px] px-7 py-3 rounded font-display text-base tracking-wide shadow-lg transition-transform hover:scale-105 text-center"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#economia"
            className="mu-button min-w-[190px] px-7 py-3 rounded font-display text-base tracking-wide shadow-lg transition-transform hover:scale-105 text-center"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        {/* PANEL DE RATES */}
        <dl className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-px mu-frame p-1 sm:grid-cols-4 rounded">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#0b1320]/90 px-4 py-3 text-center">
              <dt className="font-data text-[11px] text-slate-400 uppercase tracking-wider">{stat.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-[#fce893]">{stat.value}</dd>
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
    <section className="relative z-10 py-16 bg-[#080d17] border-y border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-data text-xs tracking-[0.2em] text-[#51e2f5] uppercase">{t('features.subtitle') || 'Novedades de Mu Aethel'}</p>
          <h2 className="text-3xl sm:text-4xl mt-2">{t('features.mainTitle') || 'Modificaciones & Características'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="mu-frame p-6 rounded flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#102542] text-[#51e2f5] border border-[#485c78]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl text-[#fce893] mb-2">{item.title}</h3>
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
      <div className="min-h-screen bg-[#050a12] font-body text-slate-300 antialiased">
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
