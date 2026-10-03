'use client';

// ============================================================================
//  MU AETHEL - Salón de la Fama (Rankings Completos)
// ============================================================================

import { useState } from 'react';
import { I18nProvider, useI18n } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Generador de datos simulados (Top 50) para probar el diseño
// Cuando conectes tu base de datos SQL, reemplazarás "rankData" por tu fetch.
function generateMockData(type) {
  const classes = ['Blade Knight', 'Soul Master', 'Muse Elf', 'Magic Gladiator', 'Dark Lord'];
  return Array.from({ length: 50 }).map((_, i) => ({
    rank: i + 1,
    name: `Jugador${i + 1}`,
    charClass: classes[Math.floor(Math.random() * classes.length)],
    level: 400,
    guild: i % 4 === 0 ? 'Aethel' : i % 5 === 0 ? 'Titans' : '-',
    score: type === 'resets' ? 250 - (i * 4) : type === 'kills' ? 5000 - (i * 80) : 1000 - (i * 15)
  }));
}

const rankData = {
  resets: generateMockData('resets'),
  kills: generateMockData('kills'),
  helpers: generateMockData('helpers')
};

function PodiumCard({ player, position, label }) {
  const { t } = useI18n();
  
  // Colores y tamaños según la posición (1 Oro, 2 Plata, 3 Bronce)
  const isFirst = position === 1;
  const rankColor = isFirst ? 'text-[#fce893] border-[#fce893] shadow-[0_0_15px_rgba(252,232,147,0.3)]' : 
                    position === 2 ? 'text-slate-300 border-slate-400 shadow-[0_0_15px_rgba(148,163,184,0.2)]' : 
                    'text-[#cba135] border-[#cba135] shadow-[0_0_15px_rgba(203,161,53,0.2)]';

  const sizeClass = isFirst ? 'scale-105 z-10' : 'scale-95 opacity-90';

  if (!player) return null;

  return (
    <div className={`mu-frame bg-[#0a111c] border ${rankColor} rounded p-6 flex flex-col items-center text-center transition-transform ${sizeClass}`}>
      <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-display text-2xl font-black mb-4 ${rankColor}`} style={{ fontFamily: "'Cinzel', serif" }}>
        #{position}
      </div>
      <h3 className="text-xl font-bold text-white tracking-wide mb-1">{player.name}</h3>
      <p className="text-[10px] text-[#51e2f5] uppercase tracking-widest mb-3">{player.charClass} · {t('rankings.lvl')} {player.level}</p>
      
      {player.guild !== '-' && (
        <span className="px-3 py-1 bg-[#102542] border border-slate-700 rounded text-xs text-slate-300 mb-4">
          🛡️ {player.guild}
        </span>
      )}
      
      <div className="mt-auto pt-4 border-t border-slate-800 w-full">
        <span className="block text-xs text-slate-500 uppercase">{label}</span>
        <span className="block text-2xl font-mono font-bold text-white mt-1">{player.score}</span>
      </div>
    </div>
  );
}

function RankingsContent() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState('resets');

  const currentData = rankData[activeTab];
  const top3 = currentData.slice(0, 3);
  const restList = currentData.slice(3); // Puestos del 4 al 50

  const getScoreLabel = () => {
    if (activeTab === 'resets') return 'Resets';
    if (activeTab === 'kills') return 'Honor Tokens';
    return 'Helper Tokens';
  };

  return (
    <section className="min-h-screen bg-[#050a12] py-16 bg-[url('/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Título de la página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-[#fce893] mb-4 uppercase drop-shadow-md" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('rankings.title')}
          </h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest">{t('rankings.subtitle')}</p>
        </div>

        {/* Pestañas de Navegación */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-slate-800 pb-4">
          {[
            { id: 'resets', label: t('rankings.tabResets') },
            { id: 'kills', label: t('rankings.tabKills') },
            { id: 'helpers', label: t('rankings.tabHelpers') }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.id 
                  ? 'bg-[#102542] text-[#51e2f5] border border-[#51e2f5] shadow-[0_0_10px_rgba(81,226,245,0.3)]' 
                  : 'bg-transparent text-slate-500 hover:text-slate-300 border border-transparent hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PODIO TOP 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-16 max-w-4xl mx-auto">
          <PodiumCard player={top3[1]} position={2} label={getScoreLabel()} />
          <PodiumCard player={top3[0]} position={1} label={getScoreLabel()} />
          <PodiumCard player={top3[2]} position={3} label={getScoreLabel()} />
        </div>

        {/* LISTA DEL TOP 4 al 50 */}
        <div className="bg-[#0a111c]/95 border border-[#102542] rounded-lg shadow-2xl backdrop-blur overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#102542]/50 border-b border-[#102542]">
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-16 text-center">{t('rankings.colRank')}</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">{t('rankings.colName')}</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:table-cell">{t('rankings.colClass')}</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider hidden md:table-cell">{t('rankings.colGuild')}</th>
                  <th className="p-4 text-xs font-bold text-[#51e2f5] uppercase tracking-wider text-right">{t('rankings.colScore')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {restList.map((player) => (
                  <tr key={player.rank} className="hover:bg-[#102542]/30 transition-colors group">
                    <td className="p-4 text-sm text-slate-500 font-mono text-center">{player.rank}</td>
                    <td className="p-4 text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{player.name}</td>
                    <td className="p-4 text-xs text-slate-400 hidden sm:table-cell">{player.charClass}</td>
                    <td className="p-4 text-xs text-slate-500 hidden md:table-cell">{player.guild}</td>
                    <td className="p-4 text-sm font-mono text-[#fce893] font-bold text-right">{player.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function RankingsPage() {
  return (
    <I18nProvider initialLang="es">
      <div className="min-h-screen font-body text-slate-300 antialiased">
        <Header />
        <main>
          <RankingsContent />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
