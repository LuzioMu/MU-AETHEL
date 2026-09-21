'use client';

// ============================================================================
//  MU AETHEL - Página principal
//  Orden de lectura: presentación -> características únicas -> eventos en vivo ->
//  noticias -> economía play-to-earn -> descargas -> pie.
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
    <section id="inicio" className="relative scroll-mt-24 overflow-hidden min-h-[80vh] flex items-center bg-[#050a12]">
      {/* Trama de fondo estilo interfaz metálica/mística sin imágenes externas que se rompan */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(24,37,56,0.8),rgba(5,10,18,1))]" />
      <div className="absolute left-1/2 top-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#51e2f5]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="font-data text-xs tracking-[0.25em] text-[#51e2f5] uppercase">{t('meta.tagline')}</p>

        <h1 className="mt-4 text-5xl leading-[0.95] sm:text-7xl">
          {t('hero.title')}
        </h1>

        <p className="mt-4 max-w-[26ch] font-display text-2xl leading-tight subtitle-mu sm:max-w-[32ch] sm:text-3xl">
          {t('hero.claim')}
        </p>

        <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-slate-300">
          {t('hero.body')}
        </p>

        {/* BOTONES METÁLICO/DORADO */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#descargas"
            className="mu-button mu-button-gold inline-block px-7 py-3.5 rounded font-display text-lg tracking-wide shadow-lg transition-transform hover:scale-105"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#economia"
            className="mu-button inline-block px-7 py-3.5 rounded font-display text-lg tracking-wide shadow-lg transition-transform hover:scale-105"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        {/* RATES: Panel metálico */}
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px mu-frame p-1 sm:grid-cols-4 rounded">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0b1320]/90 px-4 py-3 text-center">
              <dt className="font-data text-[11px] text-slate-400 uppercase tracking-wider">{stat.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-[#fce893]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

{/* SECCIÓN: Novedades, Modificaciones y Sistemas Custom */}
function ServerFeatures() {
  const features = [
    {
      icon: "⚔️",
      title: "Jefes & Bosses Custom",
      tag: "PVE EXCLUSIVO",
      desc: "Nuevos World Bosses con rutinas de ataque avanzadas, invadiendo zonas clave a horas específicas con drops de items únicos."
    },
    {
      icon: "🗺️",
      title: "Mapas Remasterizados",
      tag: "ZONAS PVP / SAFE",
      desc: "Zonas de leveo rediseñadas con spots optimizados, mapas PvP sin penalización de PK y áreas especiales de farmeo."
    },
    {
      icon: "⚖️",
      title: "Balance de Clases S6",
      tag: "PVP 100% EQUILIBRADO",
      desc: "Fórmulas de daño y defensa ajustadas para que todas las clases (BK, SM, ELF, MG, DL, RF, SUM) sean viables en Castle Siege."
    },
    {
      icon: "💎",
      title: "Economía Play-to-Earn",
      tag: "SISTEMA ÚNICO",
      desc: "Comerciá joyas, sets y recursos valiosos en el mercado interno del servidor sin ventajas p2w. Tu esfuerzo vale."
    }
  ];

  return (
    <section className="relative z-10 py-16 bg-[#080d17] border-y border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-data text-xs tracking-[0.2em] text-[#51e2f5] uppercase">¿Qué hace único a Mu Aethel?</p>
          <h2 className="text-3xl sm:text-4xl mt-2">Modificaciones & Características</h2>
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
