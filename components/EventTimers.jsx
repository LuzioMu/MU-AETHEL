'use client';

// ============================================================================
//  MU AETHEL - Temporizadores de eventos
//  Calcula, para cada evento de lib/serverConfig.js, si está ABIERTO (ventana
//  de entrada), EN CURSO, o cuánto falta para el próximo, en HH:MM:SS.
//  Todo el cálculo se hace en "hora del servidor" (SERVER.utcOffset), así el
//  contador es igual para un jugador en Lima, Montevideo o São Paulo.
// ============================================================================

import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../lib/i18n';
import { EVENTS, SERVER } from '../lib/serverConfig';

const MINUTE = 60 * 1000;
const DAY = 24 * 60 * MINUTE;

// --- Utilidades de tiempo ---------------------------------------------------

/** Devuelve un Date cuyos getters locales reflejan la hora del servidor. */
export function getServerNow(utcOffset = SERVER.utcOffset, base = new Date()) {
  return new Date(base.getTime() + (utcOffset * 60 + base.getTimezoneOffset()) * MINUTE);
}

/** Crea un Date a partir de otro, corrido N días y fijado a 'HH:MM'. */
function atTime(reference, hhmm, dayShift = 0) {
  const [h, m] = hhmm.split(':').map(Number);
  const d = new Date(reference);
  d.setDate(d.getDate() + dayShift);
  d.setHours(h, m, 0, 0);
  return d;
}

/** Todas las ocurrencias candidatas (ayer / hoy / mañana o semanas vecinas). */
function buildOccurrences(event, serverNow) {
  const list = [];

  if (event.type === 'weekly') {
    // Domingo más cercano (o el weekday configurado) en las semanas -1, 0 y +1.
    const base = new Date(serverNow);
    const diff = (event.weekday - base.getDay() + 7) % 7;
    const thisWeek = atTime(base, event.time, diff);
    for (const weekShift of [-1, 0, 1]) {
      list.push(new Date(thisWeek.getTime() + weekShift * 7 * DAY));
    }
  } else {
    for (const dayShift of [-1, 0, 1]) {
      for (const time of event.times) {
        list.push(atTime(serverNow, time, dayShift));
      }
    }
  }

  return list.sort((a, b) => a - b);
}

/**
 * Estado actual de un evento.
 * @returns {{ state: 'open'|'running'|'countdown', remainingMs: number, start: Date }}
 */
export function getEventState(event, serverNow) {
  const occurrences = buildOccurrences(event, serverNow);
  const entryMs = (event.entryMinutes ?? 0) * MINUTE;
  const durationMs = (event.durationMinutes ?? 0) * MINUTE;
  const now = serverNow.getTime();

  for (const start of occurrences) {
    const s = start.getTime();

    // EN CURSO: ya arrancó y todavía no terminó.
    if (now >= s && now < s + durationMs) {
      return { state: 'running', remainingMs: s + durationMs - now, start };
    }
    // ABIERTO: ventana de inscripción previa al inicio.
    if (now >= s - entryMs && now < s) {
      return { state: 'open', remainingMs: s - now, start };
    }
    // CUENTA REGRESIVA: primera ocurrencia futura.
    if (now < s - entryMs) {
      return { state: 'countdown', remainingMs: s - entryMs - now, start };
    }
  }

  // Salvaguarda: no debería ocurrir con la ventana de ±1 día.
  const fallback = occurrences[occurrences.length - 1] ?? serverNow;
  return { state: 'countdown', remainingMs: 0, start: fallback };
}

/** Milisegundos -> 'HH:MM:SS' (o '2d 04:11:09' si falta más de un día). */
export function formatCountdown(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const pad = (n) => String(n).padStart(2, '0');
  const clock = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  return days > 0 ? `${days}d ${clock}` : clock;
}

// --- Presentación -----------------------------------------------------------

const ACCENTS = {
  arcane: {
    frame: 'border-steel-700 hover:border-arcane-500/70',
    label: 'text-arcane-300',
    clock: 'text-arcane-300',
    bar: 'bg-arcane-400',
  },
  relic: {
    frame: 'border-relic-600/60 hover:border-relic-400/80',
    label: 'text-relic-300',
    clock: 'text-relic-300',
    bar: 'bg-relic-400',
  },
};

function StateBadge({ state, t }) {
  if (state === 'running') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-sm bg-status-live/15 px-2 py-0.5 font-data text-[11px] font-bold tracking-wide text-status-live">
        <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-status-live" />
        {t('events.stateRunning')}
      </span>
    );
  }
  if (state === 'open') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-sm bg-status-online/15 px-2 py-0.5 font-data text-[11px] font-bold tracking-wide text-status-online">
        <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-status-online" />
        {t('events.stateOpen')}
      </span>
    );
  }
  return (
    <span className="rounded-sm bg-abyss-500/60 px-2 py-0.5 font-data text-[11px] text-silver-400">
      {t('events.stateNext')}
    </span>
  );
}

function EventCard({ event, status, t }) {
  const accent = ACCENTS[event.accent] ?? ACCENTS.arcane;
  const isLive = status?.state === 'running';

  return (
    <li
      className={`group relative flex flex-col justify-between gap-3 border bg-panel p-4 shadow-inset transition-colors ${accent.frame} ${
        isLive ? 'shadow-neon' : ''
      }`}
    >
      {/* Remaches de esquina: guiño al marco de inventario de MU */}
      <span className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t border-silver-500/50" />
      <span className="pointer-events-none absolute right-0 top-0 h-2 w-2 border-r border-t border-silver-500/50" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-2 w-2 border-b border-l border-silver-500/50" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r border-silver-500/50" />

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className={`font-display text-lg leading-tight ${accent.label}`}>{t(event.nameKey)}</h3>
          <p className="mt-1 max-w-[34ch] text-xs leading-relaxed text-silver-500">
            {t(event.descKey)}
          </p>
        </div>
        <StateBadge state={status?.state ?? 'countdown'} t={t} />
      </div>

      <div className="flex items-end justify-between gap-2">
        <time
          className={`font-data text-2xl font-bold tabular-nums tracking-tight sm:text-[26px] ${accent.clock}`}
          dateTime={status ? new Date(status.start).toISOString() : undefined}
        >
          {status ? formatCountdown(status.remainingMs) : '--:--:--'}
        </time>
        {event.type === 'weekly' && (
          <span className="pb-1 text-right text-[11px] leading-tight text-silver-500">
            {t('events.weeklyOn', { day: t(`days.${event.weekday}`), time: event.time })}
          </span>
        )}
      </div>

      <span
        className={`h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${accent.bar}`}
      />
    </li>
  );
}

export default function EventTimers({ events = EVENTS, utcOffset = SERVER.utcOffset }) {
  const { t } = useI18n();
  const [now, setNow] = useState(null); // null en SSR: evita desajustes de hidratación

  useEffect(() => {
    const tick = () => setNow(getServerNow(utcOffset));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [utcOffset]);

  const statuses = useMemo(() => {
    if (!now) return {};
    return Object.fromEntries(events.map((e) => [e.id, getEventState(e, now)]));
  }, [events, now]);

  const clock = now
    ? `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(
        now.getSeconds()
      ).padStart(2, '0')}`
    : '--:--:--';

  return (
    <section id="eventos" className="scroll-mt-24 border-y border-steel-700/60 bg-abyss-800">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl text-silver-300 sm:text-4xl">{t('events.title')}</h2>
            <p className="mt-2 max-w-[60ch] text-sm text-silver-500">{t('events.subtitle')}</p>
          </div>
          <p className="font-data text-sm text-arcane-300">
            <span className="mr-2 text-silver-500">{t('events.serverTime')}</span>
            <span className="tabular-nums">{clock}</span>
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} status={statuses[event.id]} t={t} />
          ))}
        </ul>
      </div>
    </section>
  );
}
