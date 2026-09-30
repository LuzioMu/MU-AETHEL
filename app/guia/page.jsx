'use client';

// ============================================================================
//  MU AETHEL - Guía Completa de Drops y Spots (/guia)
// ============================================================================

import { I18nProvider, useI18n } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function GuiaContent() {
  const { t } = useI18n();

  // Llamamos a las listas directamente desde nuestra base de datos en i18n.jsx
  const zonasBase = t('guia.zonasBase') || [];
  const zonasAltas = t('guia.zonasAltas') || [];
  const bosses = t('guia.bosses') || [];

  return (
    <main className="relative z-10 py-16 bg-[#050a12]/90 backdrop-blur-md min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* TÍTULO DE LA PÁGINA */}
        <div className="text-center mb-16">
          <p className="font-data text-xs tracking-[0.3em] text-[#51e2f5] uppercase font-bold mb-2">
            {t('guia.pageTag')}
          </p>
          <h1 className="text-4xl sm:text-6xl text-[#fce893] drop-shadow-md" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('guia.pageTitle')}
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            {t('guia.pageDesc')}
          </p>
        </div>

        {/* TABLA 1: Mapas Iniciales y Medios */}
        <div className="mb-12">
          <h2 className="text-2xl text-[#51e2f5] mb-4 border-b border-[#102542] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('guia.table1Title')}
          </h2>
          <div className="mu-frame bg-[#0a111c] rounded overflow-hidden shadow-xl border border-[#102542]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#102542] text-[#fce893] uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-4 py-3">{t('guia.colMap')}</th>
                    <th className="px-4 py-3">{t('guia.colLvl')}</th>
                    <th className="px-4 py-3">{t('guia.colMobs')}</th>
                    <th className="px-4 py-3">{t('guia.colDrop')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {Array.isArray(zonasBase) && zonasBase.map((z, i) => (
                    <tr key={i} className="hover:bg-[#0a182e]/50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-white">{z.map}</td>
                      <td className="px-4 py-3 text-cyan-400 font-mono text-xs">{z.lvl}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{z.mobs}</td>
                      <td className="px-4 py-3 text-[#fce893] text-xs">{z.drop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* TABLA 2: Mapas Altos y End-Game */}
        <div className="mb-12">
          <h2 className="text-2xl text-[#51e2f5] mb-4 border-b border-[#102542] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('guia.table2Title')}
          </h2>
          <div className="mu-frame bg-[#0a111c] rounded overflow-hidden shadow-xl border border-[#102542]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#2b1010] text-[#fce893] uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-4 py-3">{t('guia.colMap')}</th>
                    <th className="px-4 py-3">{t('guia.colLvl')}</th>
                    <th className="px-4 py-3">{t('guia.colMobs')}</th>
                    <th className="px-4 py-3">{t('guia.colDrop')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {Array.isArray(zonasAltas) && zonasAltas.map((z, i) => (
                    <tr key={i} className="hover:bg-[#1a0f0f]/50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-white">{z.map}</td>
                      <td className="px-4 py-3 text-red-400 font-mono text-xs">{z.lvl}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{z.mobs}</td>
                      <td className="px-4 py-3 text-[#fce893] text-xs">{z.drop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* TABLA 3: Invasiones y Bosses */}
        <div className="mb-12">
          <h2 className="text-2xl text-[#51e2f5] mb-4 border-b border-[#102542] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('guia.table3Title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(bosses) && bosses.map((b, i) => (
              <div key={i} className="bg-[#050a12] border border-red-900/50 p-4 rounded shadow-[inset_0_0_15px_rgba(153,27,27,0.1)] hover:border-red-500/50 transition-colors">
                <h3 className="text-lg text-white font-bold mb-1" style={{ fontFamily: "'Cinzel', serif" }}>{b.name}</h3>
                <div className="text-xs text-slate-400 mb-3 flex justify-between border-b border-slate-800 pb-2">
                  <span>📍 {b.map}</span>
                  <span className="text-cyan-400">⏱️ {b.time}</span>
                </div>
                <p className="text-xs text-[#fce893] font-semibold">
                  <span className="text-slate-500 uppercase block text-[9px] mb-1">{t('guia.colGuaranteed')}</span>
                  {b.drop}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

export default function GuiaPage() {
  return (
    <I18nProvider initialLang="es">
      <div className="min-h-screen font-body text-slate-300 antialiased bg-[url('/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat bg-[#050a12]">
        <Header />
        <GuiaContent />
        <Footer />
      </div>
    </I18nProvider>
  );
}
