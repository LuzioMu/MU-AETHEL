'use client';

// ============================================================================
//  MU AETHEL - Página principal
//  Orden de lectura: presentación -> eventos en vivo -> noticias ->
//  economía play-to-earn -> descargas -> pie.
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
      {/* Fondo: trama de circuito + halo cian. Reemplazable por una imagen
          del juego con <Image fill className="object-cover opacity-30" /> */}
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
            className="border border-arcane-400/80 bg-arcane-600/25 px-6 py-3 font-display text-lg tracking-wide text-arcane-200 shadow-neon transition-colors hover:bg-arcane-600/45"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#economia"
            className="border border-steel-600 px-6 py-3 font-display text-lg tracking-wide text-silver-300 transition-colors hover:border-relic-400/70 hover:text-relic-300"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        {/* Rates: placa de datos tipo panel de estado del juego */}
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px border border-steel-700 bg-steel-700 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-abyss-700 px-4 py-3">
              <dt className="font-data text-[11px] text-silver-500">{stat.label}</dt>
              <dd className="mt-1 font-display text-xl text-arcane-300">{stat.value}</dd>
            </div>
          ))}
        </dl>
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
          <TokenEconomy />
          <DownloadCenter />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
