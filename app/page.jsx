'use client';

// ============================================================================
//  MU AETHEL - Página principal
//  Orden de lectura: presentación -> galería -> eventos en vivo -> noticias ->
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
    <section id="inicio" className="relative scroll-mt-24 overflow-hidden min-h-[85vh] flex items-center">
      {/* 1. IMAGEN DE FONDO PRINCIPAL DE MU ONLINE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://wallpapercave.com/wp/wp2519119.jpg" 
          alt="Mu Online Background" 
          className="h-full w-full object-cover object-center opacity-35"
        />
        {/* Sombra degradada superior e inferior para integrar con el fondo web */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/60 to-[#050a12]" />
      </div>

      {/* Trama de circuito + halo cian decorativo */}
      <div className="absolute inset-0 bg-grid bg-grid-cell opacity-40 z-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-arcane-500/10 blur-3xl z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="font-data text-xs tracking-[0.25em] text-arcane-400">{t('meta.tagline')}</p>

        <h1 className="mt-4 text-5xl leading-[0.95] sm:text-7xl">
          {t('hero.title')}
        </h1>

        <p className="mt-4 max-w-[26ch] font-display text-2xl leading-tight subtitle-mu sm:max-w-[32ch] sm:text-3xl">
          {t('hero.claim')}
        </p>

        <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-slate-300">
          {t('hero.body')}
        </p>

        {/* BOTONES ESTILO METÁLICO/DORADO DE MU */}
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

        {/* RATES: Panel metálico tipo inventario de Mu */}
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px mu-frame p-1 sm:grid-cols-4 rounded">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0b1320]/80 px-4 py-3 text-center">
              <dt className="font-data text-[11px] text-slate-400 uppercase tracking-wider">{stat.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-[#fce893]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

{/* 2. SECCIÓN DE GALERÍA DE IMÁGENES SEASON 6 */}
function ShowcaseGallery() {
  const images = [
    {
      title: "Lorencia & Devias",
      desc: "Los clásicos mapas reinventados",
      url: "https://wallpaperaccess.com/full/1500366.jpg"
    },
    {
      title: "Personajes Season 6",
      desc: "Balanced PvP & PvE System",
      url: "https://wallpaperaccess.com/full/1500375.jpg"
    },
    {
      title: "Batallas Épicas",
      desc: "Castle Siege & Eventos diarios",
      url: "https://wallpapercave.com/wp/wp2519142.jpg"
    }
  ];

  return (
    <section className="relative z-10 py-12 bg-[#050a12]/90 border-y border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl mb-8">MU Online Season 6 Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="mu-frame group overflow-hidden rounded transition-all hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
              </div>
              <div className="p-4 bg-[#0a111c]">
                <h3 className="text-lg text-[#fce893]">{img.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{img.desc}</p>
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
          <ShowcaseGallery />
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
