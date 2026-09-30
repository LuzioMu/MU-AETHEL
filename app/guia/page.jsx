'use client';

// ============================================================================
//  MU AETHEL - Guía Completa de Drops y Spots (/guia)
// ============================================================================

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GuiaPage() {
  const zonasBase = [
    { map: "Lorencia / Noria / Elbeland", mobs: "Spiders, Goblins, Lich, Mutans", lvl: "1 - 30", drop: "Items Básicos, Scroll of Fireball, Heal, Zen" },
    { map: "Devias (1, 2, 3)", mobs: "Elite Yeti, Assassin, Ice Queen", lvl: "30 - 60", drop: "Items tier 2, Horn of Uniria, Jewel of Chaos" },
    { map: "Dungeon (1, 2, 3)", mobs: "Skeleton, Poison Bull, Gorgon", lvl: "40 - 70", drop: "Jewel of Bless, Armas +3 / +4, Poison Ring" },
    { map: "Atlans (1, 2, 3)", mobs: "Bahamut, Vepar, Hydra", lvl: "70 - 100", drop: "Jewel of Soul, Armas Aquáticas, Cajas Ribbon" },
    { map: "Lost Tower (1 al 7)", mobs: "Shadow, Poison Knight, Balrog", lvl: "80 - 120", drop: "Jewel of Bless, Jewel of Soul, Items +5, Scroll of Twisting Slash" },
  ];

  const zonasAltas = [
    { map: "Tarkan (1, 2)", mobs: "Mutant, Iron Wheel, Zaikan", lvl: "130 - 180", drop: "Items Excelentes bajos, Jewel of Life" },
    { map: "Icarus", mobs: "Alquamos, Mega Crust, Dark Phoenix", lvl: "170 - 230", drop: "Plumas (Loch's Feather), Crest of Monarch, Items Excelentes tier medio" },
    { map: "Kanturu (Ruins & Relics)", mobs: "Splinter Wolf, Iron Knight", lvl: "250 - 350", drop: "Gemstone, Items 380 No-Excelentes, Jewel of Harmony (Refinada)" },
    { map: "Raklion", mobs: "Ice Walker, Iron Knight, Giant Mammoth", lvl: "300 - 400", drop: "Items Socket (Season 4), Esferas Vacías, Items Excelentes altos" },
    { map: "Vulcanus (Mapa Gens)", mobs: "Zombies, Gladiators, Ashy", lvl: "300+", drop: "Drop aumentado x1.5, Items 380, Jewel of Creation" },
  ];

  const bosses = [
    { name: "Invasión de Dorados", map: "Mapas aleatorios", time: "Cada 4 horas", drop: "Cajas Kundun +1, +2, +3, +4, +5 (Tiran Items Excelentes)" },
    { name: "White Wizard", map: "Lorencia, Noria, Devias", time: "Cada 2 horas", drop: "Ring of Magic (Wizard's Ring), Jewel of Bless" },
    { name: "Kundun (Ilusión)", map: "Kalima 7", time: "Evento Diario 20:00", drop: "Items Ancient (Set completos), Armas 380 Excelentes" },
    { name: "Selupan", map: "Raklion Hatchery", time: "Al abrir el huevo", drop: "Armas y Escudos Socket con 3 a 5 slots, Esferas nivel alto" },
    { name: "Medusa", map: "Swamp of Peace", time: "Domingos 22:00", drop: "Paquetes de Joyas (x10, x20, x30), Items Excelentes 380" },
  ];

  return (
    <div className="min-h-screen font-body text-slate-300 antialiased bg-[url('/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat bg-[#050a12]">
      <Header />
      
      <main className="relative z-10 py-16 bg-[#050a12]/90 backdrop-blur-md min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          {/* TÍTULO DE LA PÁGINA */}
          <div className="text-center mb-16">
            <p className="font-data text-xs tracking-[0.3em] text-[#51e2f5] uppercase font-bold mb-2">La Biblioteca del Reino</p>
            <h1 className="text-4xl sm:text-6xl text-[#fce893] drop-shadow-md" style={{ fontFamily: "'Cinzel', serif" }}>
              Guía Oficial de Drops & Spots
            </h1>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Todo el conocimiento de Mu Aethel en un solo lugar. Descubre qué monstruos cazar, en qué zonas entrenar y dónde conseguir los objetos más codiciados del servidor.
            </p>
          </div>

          {/* TABLA 1: Mapas Iniciales y Medios */}
          <div className="mb-12">
            <h2 className="text-2xl text-[#51e2f5] mb-4 border-b border-[#102542] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
              🗺️ Zonas de Leveo Básicas y Medias
            </h2>
            <div className="mu-frame bg-[#0a111c] rounded overflow-hidden shadow-xl border border-[#102542]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#102542] text-[#fce893] uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="px-4 py-3">Mapa</th>
                      <th className="px-4 py-3">Rango Nivel</th>
                      <th className="px-4 py-3">Monstruos Destacados</th>
                      <th className="px-4 py-3">Drop Principal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {zonasBase.map((z, i) => (
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
              🌋 Zonas Peligrosas (End-Game)
            </h2>
            <div className="mu-frame bg-[#0a111c] rounded overflow-hidden shadow-xl border border-[#102542]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#2b1010] text-[#fce893] uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="px-4 py-3">Mapa</th>
                      <th className="px-4 py-3">Rango Nivel</th>
                      <th className="px-4 py-3">Monstruos Destacados</th>
                      <th className="px-4 py-3">Drop Principal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {zonasAltas.map((z, i) => (
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
              👹 Invasiones y Jefes Mundiales (World Bosses)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bosses.map((b, i) => (
                <div key={i} className="bg-[#050a12] border border-red-900/50 p-4 rounded shadow-[inset_0_0_15px_rgba(153,27,27,0.1)] hover:border-red-500/50 transition-colors">
                  <h3 className="text-lg text-white font-bold mb-1" style={{ fontFamily: "'Cinzel', serif" }}>{b.name}</h3>
                  <div className="text-xs text-slate-400 mb-3 flex justify-between border-b border-slate-800 pb-2">
                    <span>📍 {b.map}</span>
                    <span className="text-cyan-400">⏱️ {b.time}</span>
                  </div>
                  <p className="text-xs text-[#fce893] font-semibold">
                    <span className="text-slate-500 uppercase block text-[9px] mb-1">Botín Asegurado:</span>
                    {b.drop}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
