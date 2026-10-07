
'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '../lib/i18n';

export default function EventTimers() {
  const { t } = useI18n();

  const EVENTS_DATA = [
    {
      id: 'bloodCastle',
      name: 'Blood Castle',
      desc: t('events.descBloodCastle'),
      loot: t('events.lootBloodCastle'),
      targetTime: new Date(new Date().getTime() + 45 * 60000), 
    },
    {
      id: 'devilSquare',
      name: 'Devil Square',
      desc: t('events.descDevilSquare'),
      loot: t('events.lootDevilSquare'),
      targetTime: new Date(new Date().getTime() + 15 * 60000),
    },
    {
      id: 'chaosCastle',
      name: 'Chaos Castle',
      desc: t('events.descChaosCastle'),
      loot: t('events.lootChaosCastle'),
      targetTime: new Date(new Date().getTime() + 120 * 60000),
    },
    {
      id: 'illusionTemple',
      name: 'Illusion Temple',
      desc: t('events.descIllusionTemple'),
      loot: t('events.lootIllusionTemple'),
      targetTime: new Date(new Date().getTime() + 180 * 60000),
    },
    {
      id: 'imperialGuardian',
      name: 'Imperial Guardian',
      desc: t('events.descImperialGuardian'),
      loot: t('events.lootImperialGuardian'),
      targetTime: new Date(new Date().getTime() + 90 * 60000),
    },
    {
      id: 'crywolf',
      name: 'Crywolf Fortress',
      desc: t('events.descCrywolf'),
      loot: t('events.lootCrywolf'),
      targetTime: new Date(new Date().getTime() + 300 * 60000),
    },
    {
      id: 'kanturu',
      name: 'Kanturu (Maya & Nightmare)',
      desc: t('events.descKanturu'),
      loot: t('events.lootKanturu'),
      targetTime: new Date(new Date().getTime() + 360 * 60000),
    },
    {
      id: 'selupan',
      name: 'Selupan (Raklion)',
      desc: t('events.descSelupan'),
      loot: t('events.lootSelupan'),
      targetTime: new Date(new Date().getTime() + 420 * 60000),
    },
    {
      id: 'kundun',
      name: 'Illusion of Kundun',
      desc: t('events.descKundun'),
      loot: t('events.lootKundun'),
      targetTime: new Date(new Date().getTime() + 240 * 60000),
    },
    {
      id: 'medusa',
      name: 'Medusa',
      desc: t('events.descMedusa'),
      loot: t('events.lootMedusa'),
      targetTime: new Date(new Date().getTime() + 500 * 60000),
    }
  ];

  const [activeEventId, setActiveEventId] = useState(EVENTS_DATA[0].id);
  const [timeLeft, setTimeLeft] = useState('');

  const activeEvent = EVENTS_DATA.find(e => e.id === activeEventId);

  useEffect(() => {
    if (!activeEvent) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = activeEvent.targetTime.getTime() - now;

      if (distance < 0) {
        setTimeLeft(t('events.stateRunning'));
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
  }, [activeEvent, t]);

  return (
    <section id="eventos" className="relative z-10 py-16 bg-[#050a12]/85 backdrop-blur-md border-y border-[#102542]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-[#fce893] drop-shadow-md" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('events.title')}
          </h2>
          <p className="font-data text-xs tracking-widest text-slate-400 mt-2">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          
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

          <div className="w-full md:w-2/3 mu-frame bg-[#0a182e]/80 border border-[#102542] p-6 rounded shadow-lg flex flex-col justify-between">
            
            <div>
              <h3 className="text-2xl text-white border-b border-slate-700 pb-3 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                {activeEvent?.name}
              </h3>

              <div className="mb-4 bg-black/40 border border-slate-800 p-4 rounded">
                <h4 className="text-[10px] font-bold text-[#51e2f5] uppercase tracking-wider mb-1.5">{t('events.mission')}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeEvent?.desc}
                </p>
              </div>

              <div className="mb-6 bg-[#1a0a0a]/60 border border-red-900/50 p-4 rounded">
                <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1.5">{t('events.loot')}</h4>
                <p className="text-sm text-[#fce893] font-semibold tracking-wide">
                  {activeEvent?.loot}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col items-center sm:items-start">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{t('events.stateNext')}</span>
              <div 
                className={`text-5xl sm:text-6xl font-black tracking-widest ${timeLeft === t('events.stateRunning') ? 'text-green-400 animate-pulse' : 'text-white drop-shadow-[0_0_15px_rgba(81,226,245,0.3)]'}`}
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