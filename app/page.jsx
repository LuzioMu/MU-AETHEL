'use client';

// ============================================================================
//  MU AETHEL - Página principal (Segura y 100% Traducida)
// ============================================================================

import { I18nProvider, useI18n } from '../lib/i18n';
import { SERVER } from '../lib/serverConfig';

import Header from '../components/Header';
import EventTimers from '../components/EventTimers';
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/40 to-[#050a12]/90 pointer-events-none" />
      <div className="absolute left-1/2 top-10 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#51e2f5]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:py-16 flex flex-col items-center">
        <p className="font-data text-xs tracking-[0.3em] text-[#51e2f5] uppercase font-semibold">
          {t('meta.tagline') || 'Season 6 · Sin VIP · Todo se gana jugando'}
        </p>

        <h1 
          className="mt-3 text-6xl sm:text-8xl font-display font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#fff3b0] via-[#fce893] to-[#cba135] drop-shadow-[0_4px_12px_rgba(252,232,147,0.2)]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {t('hero.title') || 'Mu Aethel'}
        </h1>

        <p className="mt-2 text-lg sm:text-xl font-data tracking-widest text-white uppercase drop-shadow-md">
          {t('hero.season') || 'Season 6 Episode 3'}
        </p>

        <p className="mt-4 max-w-xl text-base text-slate-200 mx-auto leading-relaxed">
          {t('hero.claim') || 'Acá nadie compra su poder. Se lo gana.'}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs font-bold">
          <span className="px-4 py-2 rounded bg-[#0a182e]/90 border border-[#51e2f5]/50 text-[#51e2f5] tracking-wider shadow-[0_0_10px_rgba(81,226,245,0.1)]">
            ⚔️ Play-to-Earn
          </span>
          <span className="px-4 py-2 rounded bg-black/90 border border-red-500/60 text-red-400 tracking-wider shadow-[0_0_10px_rgba(239,68,68,0.15)]">
            🚫 No VIP
          </span>
          <span className="px-4 py-2 rounded bg-[#1a1508]/90 border border-[#fce893]/60 text-[#fce893] tracking-wider shadow-[0_0_10px_rgba(252,232,147,0.1)]">
            🗓️ Eventos Diarios
          </span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#descargas" className="mu-button mu-button-gold px-8 py-3 rounded text-[#050a12] font-black tracking-wide shadow-[0_0_15px_rgba(252,232,147,0.6)] hover:scale-105 transition-transform uppercase">
            {t('hero.ctaPrimary') || 'Descargar Cliente'}
          </a>
        </div>

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
          <h2 className="text-3xl sm:text-4xl mt-2 text-slate-200" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('features.mainTitle') || 'Modificaciones & Características'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="mu-frame p-6 rounded flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[#102542] shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#102542] text-[#51e2f5] border border-[#485c78]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl text-[#fce893] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CastleSiegeBanner() {
  const { t } = useI18n();
  return (
    <section className="relative z-10 py-12 bg-gradient-to-r from-[#050a12] via-[#0a182e] to-[#050a12] border-b border-slate-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="text-center md:text-left">
          <p className="text-xs tracking-[0.2em] text-[#cba135] uppercase font-bold mb-1">{t('home.castleSub') || 'El Trono del Reino'}</p>
          <h2 className="text-4xl text-white drop-shadow-md mb-2" style={{ fontFamily: "'Cinzel', serif" }}>{t('home.castleTitle') || 'Castle Siege'}</h2>
          <p className="text-sm text-slate-300 max-w-lg">{t('home.castleDesc') || 'La guerra de gremios más importante de Mu Online. El ganador controla el Valle de Loren y los impuestos del servidor.'}</p>
        </div>
        <div className="mu-frame bg-[#050a12]/80 p-5 rounded-lg flex items-center gap-6 min-w-[300px] justify-center shadow-[0_0_20px_rgba(203,161,53,0.15)]">
          <div className="text-center">
            <span className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1">{t('home.castleSovereign') || 'Gremio Soberano'}</span>
            <span className="block text-2xl text-[#fce893] font-bold uppercase" style={{ fontFamily: "'Cinzel', serif" }}>{t('home.castleNone') || 'NINGUNO'}</span>
            <span className="block text-xs text-[#51e2f5] mt-1">{t('home.castleNext') || 'Próxima batalla: Domingo 20:00'}</span>
          </div>
          <div className="h-12 w-px bg-slate-700"></div>
          <div className="text-center">
            <img src="https://via.placeholder.com/50/1a1a1a/cba135?text=LOGO" alt="Guild Logo" className="rounded shadow-md border border-[#cba135]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveRankings() {
  const { t } = useI18n();

  const tops = [
    { title: t('home.rankResets') || 'Top Resets', players: [{name: 'Luzio', val: '50 Resets'}, {name: 'Aethel', val: '48 Resets'}, {name: 'Knight', val: '45 Resets'}] },
    { title: t('home.rankKills') || 'Top Killers (Honor)', players: [{name: 'Asesino', val: '150 Kills'}, {name: 'DarkLord', val: '134 Kills'}, {name: 'PVPGod', val: '98 Kills'}] },
    { title: t('home.rankHelpers') || 'Top Helpers', players: [{name: 'SupportElf', val: '800 Tokens'}, {name: 'Healer', val: '650 Tokens'}, {name: 'Guia', val: '500 Tokens'}] },
  ];

  return (
    <section className="relative z-10 py-16 bg-[#050a12]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-[#fce893] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>{t('home.rankTitle') || 'Salón de la Fama'}</h2>
          <p className="font-data text-xs tracking-widest text-slate-400 mt-2 uppercase">{t('home.rankSub') || 'RANKINGS EN TIEMPO REAL'}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tops.map((top, idx) => (
            <div key={idx} className="mu-frame bg-[#0a111c] p-5 rounded border border-[#102542]">
              <h3 className="text-center text-[#51e2f5] mb-4 text-lg border-b border-slate-800 pb-2 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>{top.title}</h3>
              <ul className="space-y-3">
                {top.players.map((p, i) => (
                  <li key={i} className="flex justify-between items-center text-sm p-2 hover:bg-slate-800/50 rounded transition-colors">
                    <span className="flex items-center gap-2 text-slate-200">
                      <span className={`font-bold ${i === 0 ? 'text-[#fce893]' : i === 1 ? 'text-slate-300' : 'text-amber-700'}`}>#{i+1}</span> {p.name}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{p.val}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-4 py-2 text-xs text-slate-400 hover:text-white border border-slate-700 hover:border-[#51e2f5] rounded transition-all uppercase">{t('home.rankBtn') || 'Ver Ranking Completo'}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DropGuideBanner() {
  const { t } = useI18n();

  return (
    <section className="relative z-10 py-16 bg-[#0a111c] border-y border-[#102542] flex items-center justify-center">
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-[200px] w-[300px] rounded-full bg-[#fce893]/5 blur-[80px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="font-data text-xs tracking-[0.3em] text-[#51e2f5] uppercase font-bold mb-3">
          {t('home.librarySub') || 'Todo el conocimiento en un solo lugar'}
        </p>
        <h2 className="text-4xl sm:text-5xl text-white drop-shadow-md mb-6 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
          {t('home.libraryTitle') || 'La Gran Biblioteca de Aethel'}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          {t('home.libraryDesc') || '¿No sabés dónde cae la Jewel of Bless? ¿Querés armar tus Alas nivel 3 y te faltan materiales? Ingresá a nuestra Wiki oficial para ver todos los mapas, spots, niveles de monstruos y recompensas de los Jefes.'}
        </p>
        
        <a 
          href="/guias" 
          className="inline-block px-8 py-3 rounded border border-[#fce893] text-[#fce893] hover:bg-[#fce893] hover:text-[#050a12] font-black tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(252,232,147,0.1)] hover:shadow-[0_0_20px_rgba(252,232,147,0.4)]"
        >
          📖 {t('home.libraryBtn') || 'Leer Guía Completa de Drops'}
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <I18nProvider initialLang="es">
      <div className="min-h-screen font-body text-slate-300 antialiased bg-[url('/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat bg-[#050a12]">
        <Header />
        <main>
          <Hero />
          <ServerFeatures />
          <CastleSiegeBanner />
          <LiveRankings />
          <EventTimers />
          <DropGuideBanner />
          <TokenEconomy />
          <DownloadCenter />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
