'use client';

// ============================================================================
//  MU AETHEL - Página principal
//  Orden de lectura: presentación -> eventos en vivo -> noticias ->
//  castle siege / ranking -> economía play-to-earn -> biblioteca -> descargas
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
    { label: t('hero.statExp'), value: SERVER.rates.exp },
    { label: t('hero.statDrop'), value: SERVER.rates.drop },
    { label: t('hero.statReset'), value: SERVER.rates.reset },
    { label: t('hero.statPlayers'), value: SERVER.rates.players },
  ];

  return (
    <section id="inicio" className="relative scroll-mt-24 overflow-hidden bg-abyss-900">
      <div className="absolute inset-0 bg-grid bg-grid-cell opacity-70" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-arcane-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="font-data text-xs tracking-[0.25em] text-arcane-400">{t('meta.tagline')}</p>

        <h1 className="mt-4 font-display text-5xl leading-[0.95] text-silver-300 sm:text-7xl">
          {t('hero.title')}
        </h1>

        <p className="mt-4 max-w-[26ch] font-display text-2xl leading-tight text-relic-300 sm:max-w-[32ch] sm:text-3xl">
          {t('hero.claim')}
        </p>

        <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-silver-400">
          {t('hero.body')}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#descargas"
            className="border border-arcane-400/80 bg-arcane-600/25 px-6 py-3 font-display text-lg tracking-wide text-arcane-200 shadow-neon transition-colors hover:bg-arcane-600/45 uppercase"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#economia"
            className="border border-steel-600 px-6 py-3 font-display text-lg tracking-wide text-silver-300 transition-colors hover:border-relic-400/70 hover:text-relic-300 uppercase"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px border border-steel-700 bg-steel-700 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-abyss-700 px-4 py-3">
              <dt className="font-data text-[11px] text-silver-500 uppercase">{stat.label}</dt>
              <dd className="mt-1 font-display text-xl text-arcane-300">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CastleSiegeAndRanking() {
  const { t } = useI18n();

  return (
    <section className="bg-abyss-900 border-t border-steel-700/60 pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Castle Siege Banner */}
        <div className="bg-[#0a111c] border border-[#102542] rounded-lg p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex-1">
            <h3 className="text-[#fce893] text-sm tracking-widest font-bold mb-1 uppercase">{t('home.castleSub')}</h3>
            <h2 className="text-4xl text-white font-bold mb-4 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>{t('home.castleTitle')}</h2>
            <p className="text-slate-300 text-sm max-w-md">{t('home.castleDesc')}</p>
          </div>
          <div className="bg-[#050a12] border border-[#102542] rounded p-6 text-center w-full md:w-auto shrink-0 shadow-inner">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Gremio Soberano</p>
            <div className="text-3xl font-black text-[#fce893] uppercase tracking-wider mb-2">{t('home.castleNone')}</div>
            <div className="text-xs text-[#51e2f5]">{t('home.castleNext')}</div>
          </div>
        </div>

        {/* Salón de la Fama */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#fce893] mb-3 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('home.rankTitle')}
          </h2>
          <p className="text-slate-400 uppercase tracking-widest text-xs">{t('home.rankSub')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Resets */}
          <div className="bg-[#0a111c] border border-[#102542] rounded p-6 shadow-lg">
            <h3 className="text-lg text-[#fce893] font-bold text-center mb-6 uppercase tracking-widest border-b border-[#102542] pb-2">{t('home.rankResets')}</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm"><span className="text-white font-bold"><span className="text-[#fce893]">#1</span> Jugador</span> <span className="text-slate-500 font-mono">50 Resets</span></li>
              <li className="flex justify-between items-center text-sm"><span className="text-white font-bold"><span className="text-slate-400">#2</span> Jugador</span> <span className="text-slate-500 font-mono">48 Resets</span></li>
              <li className="flex justify-between items-center text-sm"><span className="text-white font-bold"><span className="text-[#cba135]">#3</span> Jugador</span> <span className="text-slate-500 font-mono">45 Resets</span></li>
            </ul>
            <button className="w-full mt-6 py-2 bg-gradient-to-b from-[#167d9e] to-[#10567e] rounded text-white text-xs font-bold uppercase hover:from-[#51e2f5] hover:to-[#167d9e] transition-colors border border-[#102542]">
              {t('home.rankBtn')}
            </button>
          </div>

          {/* Top Killers */}
          <div className="bg-[#0a111c] border border-[#102542] rounded p-6 shadow-lg">
            <h3 className="text-lg text-[#fce893] font-bold text-center mb-6 uppercase tracking-widest border-b border-[#102542] pb-2">{t('home.rankKills')}</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm"><span className="text-white font-bold"><span className="text-[#fce893]">#1</span> Asesino</span> <span className="text-slate-500 font-mono">150 Kills</span></li>
              <li className="flex justify-between items-center text-sm"><span className="text-white font-bold"><span className="text-slate-400">#2</span> Asesino</span> <span className="text-slate-500 font-mono">134 Kills</span></li>
              <li className="flex justify-between items-center text-sm"><span className="text-white font-bold"><span className="text-[#cba135]">#3</span> Asesino</span> <span className="text-slate-500 font-mono">98 Kills</span></li>
            </ul>
            <button className="w-full mt-6 py-2 bg-gradient-to-b from-[#167d9e] to-[#10567e] rounded text-white text-xs font-bold uppercase hover:from-[#51e2f5] hover:to-[#167d9e] transition-colors border border-[#102542]">
              {t('home.rankBtn')}
            </button>
          </div>

          {/* Top Helpers */}
          <div className="bg-[#0a111c] border border-[#102542] rounded p-6 shadow-lg">
            <h3 className="text-lg text-[#fce893] font-bold text-center mb-6 uppercase tracking-widest border-b border-[#102542] pb-2">{t('home.rankHelpers')}</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm"><span className="text-white font-bold"><span className="text-[#fce893]">#1</span> Soporte</span> <span className="text-slate-500 font-mono">800 Tokens</span></li>
              <li className="flex justify-between items-center text-sm"><span className="text-white font-bold"><span className="text-slate-400">#2</span> Soporte</span> <span className="text-slate-500 font-mono">650 Tokens</span></li>
              <li className="flex justify-between items-center text-sm"><span className="text-white font-bold"><span className="text-[#cba135]">#3</span> Soporte</span> <span className="text-slate-500 font-mono">500 Tokens</span></li>
            </ul>
            <button className="w-full mt-6 py-2 bg-gradient-to-b from-[#167d9e] to-[#10567e] rounded text-white text-xs font-bold uppercase hover:from-[#51e2f5] hover:to-[#167d9e] transition-colors border border-[#102542]">
              {t('home.rankBtn')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function LibrarySection() {
  const { t } = useI18n();

  return (
    <section className="bg-abyss-900 border-y border-steel-700/60 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#51e2f5] text-xs font-bold tracking-widest uppercase mb-2">{t('home.librarySub')}</p>
          <h2 className="text-4xl text-[#fce893] mb-4 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('home.libraryTitle')}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            {t('home.libraryDesc')}
          </p>
          {/* El enlace arreglado a /guias */}
          <a href="/guias" className="inline-flex items-center gap-2 px-6 py-3 border border-[#fce893] text-[#fce893] rounded hover:bg-[#fce893] hover:text-[#050a12] transition-colors font-bold uppercase tracking-wider text-sm shadow-[0_0_10px_rgba(252,232,147,0.3)]">
            📖 {t('home.libraryBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <I18nProvider initialLang="es">
      <div className="min-h-screen bg-abyss-900 font-body text-silver-400 antialiased">
        <Header />
        <main>
          <Hero />
          <EventTimers />
          <NewsFeed />
          <CastleSiegeAndRanking />
          <TokenEconomy />
          <LibrarySection />
          <DownloadCenter />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
