'use client';

// ============================================================================
//  MU AETHEL - Temporizador de Eventos Season 6
// ============================================================================

import { useState, useEffect } from 'react';
import { useI18n } from '../lib/i18n';

const EVENTS_DATA = [
  {
    id: 'bloodCastle',
    name: 'Blood Castle',
    desc: 'Misión de rescate del Arcángel. Rompe la puerta, destruye la estatua de cristal y entrega el arma divina al herido.',
    loot: 'Jewel of Bless, Jewel of Soul, Jewel of Chaos, Armas de Arcángel',
    targetTime: new Date(new Date().getTime() + 45 * 60000), 
  },
  {
    id: 'devilSquare',
    name: 'Devil Square',
    desc: 'Supervivencia extrema por puntos. Resiste oleadas continuas de monstruos para ganar una cantidad masiva de experiencia.',
    loot: 'Experiencia Masiva, Zen, Cajas Kundun',
    targetTime: new Date(new Date().getTime() + 15 * 60000),
  },
  {
    id: 'chaosCastle',
    name: 'Chaos Castle',
    desc: 'Batalla a muerte todos contra todos. Empuja a tus enemigos fuera del castillo que se derrumba para ser el último en pie.',
    loot: 'Jewel of Creation, Items Excelentes, Bless',
    targetTime: new Date(new Date().getTime() + 120 * 60000),
  },
  {
    id: 'illusionTemple',
    name: 'Illusion Temple',
    desc: 'Batalla táctica por equipos (Gens). Captura el artefacto sagrado y llévalo a tu base para anotar puntos.',
    loot: 'Materiales de Fenrir, Experiencia Alta, Joyas',
    targetTime: new Date(new Date().getTime() + 180 * 60000),
  },
  {
    id: 'imperialGuardian',
    name: 'Imperial Guardian',
    desc: 'Instancia diaria de supervivencia. Atraviesa el fuerte de Varka y derrota a los jefes de cada zona.',
    loot: 'Partes Secromicon, Items Excelentes de nivel alto',
    targetTime: new Date(new Date().getTime() + 90 * 60000),
  },
  {
    id: 'crywolf',
    name: 'Crywolf Fortress',
    desc: 'Evento general de servidor. Defiende la estatua del Lobo Sagrado de las tropas invasoras de Balgass.',
    loot: 'Items Season 4, Horn of Fenrir, Activa Kanturu Event',
    targetTime: new Date(new Date().getTime() + 300 * 60000),
  },
  {
    id: 'kanturu',
    name: 'Kanturu (Maya & Nightmare)',
    desc: 'Adéntrate en la refinería de Kanturu Relics, sobrevive a las Manos de Maya y derrota al jefe final Nightmare.',
    loot: 'Items Excelentes 380, Gemstone, Refinería Abierta',
    targetTime: new Date(new Date().getTime() + 360 * 60000),
  },
  {
    id: 'selupan',
    name: 'Selupan (Raklion)',
    desc: 'Destruye los huevos de araña en Raklion Hatchery y enfréntate a la bestia gigante Selupan.',
    loot: 'Items Socket (Season 4), Esferas Tetras, Armas',
    targetTime: new Date(new Date().getTime() + 420 * 60000),
  },
  {
    id: 'kundun',
    name: 'Illusion of Kundun',
    desc: 'Invasión en los niveles profundos de Kalima 7. Derrota a la ilusión del Señor Oscuro.',
    loot: 'Items Ancient, Armas nivel 380',
    targetTime: new Date(new Date().getTime() + 240 * 60000),
  },
  {
    id: 'medusa',
    name: 'Medusa',
    desc: 'Invasión de la bestia mítica en la zona segura de Swamp of Peace (Swamp of Calmness).',
    loot: 'Items Excelentes High Tier, Paquetes de Joyas',
    targetTime: new Date(new Date().getTime() + 500 * 60000),
  }
];

export default function EventTimers() {
  const { t } = useI18n();
  const [activeEventId, setActiveEventId] = useState(EVENTS_DATA[0].id);
  const [timeLeft, setTimeLeft] = useState('');

  const activeEvent = EVENTS_DATA.find(e => e.id === activeEventId);

  useEffect(() => {
    if (!activeEvent) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = activeEvent.targetTime.getTime() - now;

      if (distance < 0) {
        setTimeLeft('¡EN CURSO!');
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeEvent]);

  return (
    <section id="eventos" className="relative z-10 py-16 bg-[#050a12]/85 backdrop-blur-md border-y border-[#102542]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-[#fce893] drop-shadow-md" style={{ fontFamily: "'Cinzel', serif" }}>
            Invasiones & Eventos Globales
          </h2>
          <p className="font-data text-xs tracking-widest text-slate-400 mt-2">
            HORARIOS SINCRONIZADOS CON EL SERVIDOR
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* MENÚ LATERAL (Scrollable si es muy largo) */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
            {EVENTS_DATA.map((evt) => (
              <button
                key={evt.id}
                onClick={() => setActiveEventId(evt.id)}
                className={`px-4 py-3 text-left text-sm font-bold tracking-wide transition-all border-l-4 ${
                  activeEventId === evt.id
                    ? 'bg-[#102542] border-[#51e2f5] text-[#51e2f5] shadow-[inset_0_0_20px_rgba(81,226,245,0.1)]'
                    : 'bg-[#0a182e]/50 border-transparent text-slate-400 hover:bg-[#0a182e] hover:text-slate-200'
                }`}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {evt.name}
              </button>
            ))}
          </div>

          {/* PANEL PRINCIPAL DE DETALLES */}
          <div className="w-full md:w-2/3 mu-frame bg-[#0a182e]/80 border border-[#102542] p-6 rounded shadow-lg flex flex-col justify-between">
            
            <div>
              {/* HEADER DEL EVENTO */}
              <h3 className="text-2xl text-white border-b border-slate-700 pb-3 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                {activeEvent?.name}
              </h3>

              {/* DESCRIPCIÓN */}
              <div className="mb-4 bg-black/40 border border-slate-800 p-4 rounded">
                <h4 className="text-[10px] font-bold text-[#51e2f5] uppercase tracking-wider mb-1.5">Misión:</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeEvent?.desc}
                </p>
              </div>

              {/* LOOT */}
              <div className="mb-6 bg-[#1a0a0a]/60 border border-red-900/50 p-4 rounded">
                <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1.5">Recompensa (Loot):</h4>
                <p className="text-sm text-[#fce893] font-semibold tracking-wide">
                  {activeEvent?.loot}
                </p>
              </div>
            </div>

            {/* TEMPORIZADOR */}
            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col items-center sm:items-start">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">El evento comienza en:</span>
              <div 
                className={`text-5xl sm:text-6xl font-black tracking-widest ${timeLeft === '¡EN CURSO!' ? 'text-green-400 animate-pulse' : 'text-white drop-shadow-[0_0_15px_rgba(81,226,245,0.3)]'}`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {timeLeft || '00:00:00'}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
