'use client';

// ============================================================================
//  MU AETHEL - Salón de la Fama y Guilds (100% Completo y Anti-Fallos)
// ============================================================================

import { useState } from 'react';
import { I18nProvider, useI18n } from '../../lib/i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Escudo anti-errores de traducción
const tr = (t, path, fallback) => {
  const res = t(path);
  return res === path ? fallback : res;
};

// Generador de datos simulados (Top 50 jugadores y Top 20 Guilds)
function generateMockPlayers(type) {
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

function generateMockGuilds() {
  return Array.from({ length: 16 }).map((_, i) => ({
    rank: i + 1,
    name: `Guild${i + 1}`,
    logo: `https://via.placeholder.com/40/1a1a1a/cba135?text=G${i+1}`,
    members: Math.floor(Math.random() * 30) + 10, // Entre 10 y 40 miembros
    leader: `Lider${i + 1}`,
    captain: `Capitan${i + 1}`,
    topPlayer: `ProPlayer${i + 1}`
  }));
}

const rankData = {
  resets: generateMockPlayers('resets'),
  kills: generateMockPlayers('kills'),
  helpers: generateMockPlayers('helpers'),
  guilds: generateMockGuilds()
};

function PodiumCard({ player, position, label }) {
  const { t } = useI18n();
  
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
      <p className="text-[10px] text-[#51e2f5] uppercase tracking-widest mb-3">{player.charClass} · {tr(t, 'rankings.lvl', 'Nvl.')} {player.level}</p>
      
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

function GuildCard({ guild }) {
  const isTop3 = guild.rank <= 3;
  const borderColor = guild.rank === 1 ? 'border-[#fce893] shadow-[0_0_15px_rgba(252,232,147,0.2)]' : 
                      guild.rank === 2 ? 'border-slate-400 shadow-[0_0_10px_rgba(148,163,184,0.1)]' : 
                      guild.rank === 3 ? 'border-[#cba135] shadow-[0_0_10px_rgba(203,161,53,0.1)]' : 
                      'border-[#102542] hover:border-[#51e2f5]/50';

  return (
    <div className={`mu-frame bg-[#0a111c] border ${borderColor} rounded-lg p-5 flex flex-col hover:-translate-y-1 transition-all`}>
      {/* Cabecera del Gremio */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-3">
          <img src={guild.logo} alt={guild.name} className={`w-10 h-10 border rounded ${isTop3 ? 'border-[#fce893]' : 'border-slate-700'}`} />
          <div>
            <h3 className={`font-bold tracking-wider ${isTop3 ? 'text-[#fce893]' : 'text-white'}`} style={{ fontFamily: "'Cinzel', serif" }}>
              {guild.name}
            </h3>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Rank #{guild.rank}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="block text-xl font-bold text-[#51e2f5] leading-none">{guild.members}</span>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">Miembros</span>
        </div>
      </div>

      {/* Datos Internos */}
      <div className="space-y-2 font-data text-xs mt-auto">
        <div className="flex justify-between items-center bg-[#050a12] px-2 py-1.5 rounded border border-slate-800/50">
          <span className="text-slate-500 uppercase">Líder:</span>
          <span className="text-[#fce893] font-bold">{guild.leader}</span>
        </div>
        <div className="flex justify-between items-center px-2 py-1">
          <span className="text-slate-500 uppercase">Capitán:</span>
          <span className="text-slate-300">{guild.captain}</span>
        </div>
        <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-800/50 px-2">
          <span className="text-slate-500 uppercase text-[10px]">Mejor Rank:</span>
          <span className="text-[#51e2f5] font-bold">{guild.topPlayer}</span>
        </div>
      </div>
    </div>
  );
}

function RankingsContent() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState('resets');

  const currentData = rankData[activeTab];
  
  const getScoreLabel = () => {
    if (activeTab === 'resets') return 'Resets';
    if (activeTab === 'kills') return 'Honor Tokens';
    return 'Helper Tokens';
  };

  return (
    <section className="min-h-screen bg-[#050a12] py-16 bg-[url('/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Título de la página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-[#fce893] mb-4 uppercase drop-shadow-md" style={{ fontFamily: "'Cinzel', serif" }}>
            {tr(t, 'rankings.title', 'Salón de la Fama')}
          </h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest">
            {tr(t, 'rankings.subtitle', 'Los mejores guerreros del servidor. Actualizado cada hora.')}
          </p>
        </div>

        {/* Pestañas de Navegación */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-slate-800 pb-4">
          {[
            { id: 'resets', label: tr(t, 'rankings.tabResets', 'Top Resets') },
            { id: 'kills', label: tr(t, 'rankings.tabKills', 'Top Honor (Kills)') },
            { id: 'helpers', label: tr(t, 'rankings.tabHelpers', 'Top Helpers') },
            { id: 'guilds', label: 'Top Guilds' } // Fijo en español para esta versión
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.id 
                  ? 'bg-[#102542] text-[#51e2f5] border border-[#51e2f5] shadow-[0_0_10px_rgba(81,226,245,0.3)]' 
                  : 'bg-[#050a12]/80 text-slate-500 hover:text-slate-300 border border-slate-800 hover:border-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENIDO: GUILDS O JUGADORES */}
        {activeTab === 'guilds' ? (
          /* Grid de Guilds (4 columnas) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentData.map(guild => (
              <GuildCard key={guild.rank} guild={guild} />
            ))}
          </div>
        ) : (
          /* Podio y Tabla de Jugadores */
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-16 max-w-4xl mx-auto">
              <PodiumCard player={currentData[1]} position={2} label={getScoreLabel()} />
              <PodiumCard player={currentData[0]} position={1} label={getScoreLabel()} />
              <PodiumCard player={currentData[2]} position={3} label={getScoreLabel()} />
            </div>

            <div className="bg-[#0a111c]/95 border border-[#102542] rounded-lg shadow-2xl backdrop-blur overflow-hidden max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#102542]/50 border-b border-[#102542]">
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-16 text-center">{tr(t, 'rankings.colRank', '#')}</th>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">{tr(t, 'rankings.colName', 'Personaje')}</th>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:table-cell">{tr(t, 'rankings.colClass', 'Clase')}</th>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider hidden md:table-cell">{tr(t, 'rankings.colGuild', 'Gremio')}</th>
                      <th className="p-4 text-xs font-bold text-[#51e2f5] uppercase tracking-wider text-right">{tr(t, 'rankings.colScore', 'Puntuación')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {currentData.slice(3).map((player) => (
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
          </>
        )}

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
