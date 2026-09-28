'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '../lib/i18n';

// Datos estáticos por ahora; luego los conectarás a tu backend
const EVENTS_DATA = [
  {
    id: 'bloodCastle',
    name: 'Blood Castle',
    desc: 'Misión de rescate del Arcángel. Rompe la puerta, destruye la estatua de cristal y entrega el arma divina.',
    loot: 'Jewel of Bless, Jewel of Soul, Jewel of Chaos',
    targetTime: new Date(new Date().getTime() + 45 * 60000), // Ejemplo: 45 min en el futuro
  },
  {
    id: 'devilSquare',
    name: 'Devil Square',
    desc: 'Supervivencia extrema. Resiste oleadas de monstruos para ganar una cantidad masiva de experiencia.',
    loot: 'Experiencia x5, Zen, Cajas Kundun',
    targetTime: new Date(new Date().getTime() + 15 * 60000),
  },
  {
    id: 'chaosCastle',
    name: 'Chaos Castle',
    desc: 'Batalla a muerte todos contra todos. Empuja a tus enemigos fuera del castillo para ser el último en pie.',
    loot: 'Jewel of Creation, Items Excelentes, Bless',
    targetTime: new Date(new Date().getTime() + 120 * 60000),
  },
  {
    id: 'kundun',
    name: 'Illusion of Kundun',
    desc: 'Invasión en los niveles profundos de Kalima. Derrota a la ilusión del Señor Oscuro.',
    loot: 'Items Ancient, Armas 380',
    targetTime: new Date(new Date().getTime() + 240 * 60000),
  }
];

export default function EventTimers() {
  const { t } = useI18n();
  const [activeEventId, setActiveEventId] = useState(EVENTS_DATA[0].id);
  const [timeLeft, setTimeLeft] = useState('');

  const activeEvent = EVENTS_DATA.find(e => e.id === activeEventId);

  // Lógica básica del temporizador
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
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 
            className="text-3xl sm:text-4xl text-[#fce893] drop-shadow-md"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Invasiones & Eventos
          </h2>
          <p className="font-data text-xs tracking-widest text-slate-400 mt-2">
            HORARIOS SINCRONIZADOS CON EL SERVIDOR
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* MENÚ LATERAL DE EVENTOS */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            {EVENTS_DATA.map((evt) => (
              <button
                key={evt.id}
                onClick={() => setActiveEventId(evt.id)}
                className={`px-4 py-3 text-left font-bold tracking-wide transition-all border-l-4 ${
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
          <div className="w-full md:w-2/3 bg-[#0a182e]/80 border border-[#102542] p-6 rounded shadow-lg flex flex-col justify-between">
            
            <div>
              {/* DESCRIPCIÓN */}
              <div className="mb-6 bg-black/40 border border-slate-800 p-4 rounded">
                <h3 className="text-xs font-bold text-[#fce893] uppercase tracking-wider mb-2">Descripción:</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeEvent?.desc}
                </p>
              </div>

              {/* LOOT */}
              <div className="mb-6 bg-black/40 border border-slate-800 p-4 rounded">
                <h3 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">Botín (Loot):</h3>
                <p className="text-sm text-slate-300 font-semibold">
                  {activeEvent?.loot}
                </p>
              </div>
            </div>

            {/* TEMPORIZADOR GIGANTE */}
            <div className="mt-4 flex flex-col items-center sm:items-start">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Empieza en:</span>
              <div 
                className="text-5xl sm:text-6xl font-black text-white tracking-widest drop-shadow-[0_0_15px_rgba(81,226,245,0.3)]"
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
