// ============================================================================
//  MU AETHEL - Configuración del servidor
//  TODO lo que cambia entre temporadas vive acá. No hace falta tocar los
//  componentes para actualizar rates, horarios, IP o enlaces de descarga.
// ============================================================================

export const SERVER = {
  name: 'Mu Aethel',
  season: 'Season 6 Episode 3',
  // Desfase horario del servidor respecto de UTC. GMT-3 => -3
  utcOffset: -3,
  ip: 'play.muaethel.com',
  port: 44405,
  // Cambiá a false durante un mantenimiento (o conectalo a tu API de estado).
  online: true,
  rates: {
    exp: '250x',
    drop: '35%',
    reset: 'Sin límite',
    players: 412, // reemplazable por un fetch a /api/status
  },
};

// ----------------------------------------------------------------------------
//  EVENTOS
//  type: 'daily'  -> se repite todos los días en los horarios de `times`
//        'weekly' -> un día fijo de la semana (0 = domingo … 6 = sábado)
//  entryMinutes:    minutos de inscripción ANTES del inicio (estado ABIERTO)
//  durationMinutes: cuánto dura el evento (estado EN CURSO)
//  Los horarios se escriben en hora del servidor, formato 'HH:MM'.
// ----------------------------------------------------------------------------
export const EVENTS = [
  {
    id: 'bloodCastle',
    nameKey: 'events.bloodCastle',
    descKey: 'events.descBloodCastle',
    accent: 'arcane',
    type: 'daily',
    times: ['00:30', '02:30', '04:30', '06:30', '08:30', '10:30', '12:30', '14:30', '16:30', '18:30', '20:30', '22:30'],
    entryMinutes: 10,
    durationMinutes: 20,
  },
  {
    id: 'devilSquare',
    nameKey: 'events.devilSquare',
    descKey: 'events.descDevilSquare',
    accent: 'arcane',
    type: 'daily',
    times: ['01:00', '03:00', '05:00', '07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00', '23:00'],
    entryMinutes: 10,
    durationMinutes: 20,
  },
  {
    id: 'chaosCastle',
    nameKey: 'events.chaosCastle',
    descKey: 'events.descChaosCastle',
    accent: 'arcane',
    type: 'daily',
    times: ['01:30', '05:30', '09:30', '13:30', '17:30', '21:30'],
    entryMinutes: 10,
    durationMinutes: 15,
  },
  {
    id: 'kundun',
    nameKey: 'events.kundun',
    descKey: 'events.descKundun',
    accent: 'relic',
    type: 'daily',
    times: ['04:00', '10:00', '16:00', '22:00'],
    entryMinutes: 5,
    durationMinutes: 30,
  },
  {
    id: 'medusa',
    nameKey: 'events.medusa',
    descKey: 'events.descMedusa',
    accent: 'relic',
    type: 'daily',
    times: ['06:00', '14:00', '20:00'],
    entryMinutes: 5,
    durationMinutes: 30,
  },
  {
    id: 'castleSiege',
    nameKey: 'events.castleSiege',
    descKey: 'events.descCastleSiege',
    accent: 'relic',
    type: 'weekly',
    weekday: 0, // domingo
    time: '20:00',
    entryMinutes: 30,
    durationMinutes: 120,
  },
];

// ----------------------------------------------------------------------------
//  NOTICIAS
//  category: 'maintenance' | 'event' | 'update' | 'news'
//  Reemplazá este array por el resultado de tu CMS o API cuando lo tengas.
// ----------------------------------------------------------------------------
export const NEWS = [
  {
    id: 'ns-014',
    category: 'update',
    date: '2026-09-18',
    title: {
      es: 'Ajuste de tasas de Helper Token',
      en: 'Helper Token rate adjustment',
      pt: 'Ajuste nas taxas de Helper Token',
    },
    excerpt: {
      es: 'Subimos la recompensa por party con personajes de menos de nivel 200 y agregamos un tope diario para evitar granjas con cuentas dobles.',
      en: 'We raised the reward for partying with characters under level 200 and added a daily cap to stop dual-account farming.',
      pt: 'Aumentamos a recompensa por party com personagens abaixo do nível 200 e criamos um limite diário para evitar farm com contas duplas.',
    },
    href: '/noticias/ns-014',
  },
  {
    id: 'ns-013',
    category: 'event',
    date: '2026-09-15',
    title: {
      es: 'Torneo de Honor: 64 llaves, entrada libre',
      en: 'Honor Tournament: 64 slots, free entry',
      pt: 'Torneio de Honra: 64 chaves, entrada livre',
    },
    excerpt: {
      es: 'Eliminación directa el sábado a las 21:00. El campeón se lleva 5.000 Honor Tokens y un Feather of Condor.',
      en: 'Single elimination on Saturday at 21:00. The champion takes 5,000 Honor Tokens and a Feather of Condor.',
      pt: 'Eliminação direta no sábado às 21:00. O campeão leva 5.000 Honor Tokens e uma Feather of Condor.',
    },
    href: '/noticias/ns-013',
  },
  {
    id: 'ns-012',
    category: 'maintenance',
    date: '2026-09-11',
    title: {
      es: 'Mantenimiento del GameServer',
      en: 'GameServer maintenance',
      pt: 'Manutenção do GameServer',
    },
    excerpt: {
      es: 'El servidor estará fuera de línea por 40 minutos para migrar la base de datos de personajes. Guardá tu inventario antes.',
      en: 'The server goes offline for 40 minutes to migrate the character database. Sort your inventory beforehand.',
      pt: 'O servidor ficará offline por 40 minutos para migrar o banco de personagens. Organize seu inventário antes.',
    },
    href: '/noticias/ns-012',
  },
  {
    id: 'ns-011',
    category: 'news',
    date: '2026-09-04',
    title: {
      es: 'Por qué Mu Aethel no va a tener VIP',
      en: 'Why Mu Aethel will never have VIP',
      pt: 'Por que Mu Aethel não vai ter VIP',
    },
    excerpt: {
      es: 'Explicamos cómo se sostiene el servidor sin vender ventajas y qué pasa con las donaciones que llegan al Discord.',
      en: 'How the server stays alive without selling advantages, and what happens to the donations that reach our Discord.',
      pt: 'Como o servidor se mantém sem vender vantagens e o que acontece com as doações que chegam pelo Discord.',
    },
    href: '/noticias/ns-011',
  },
];

// ----------------------------------------------------------------------------
//  DESCARGAS Y HERRAMIENTAS DEL LAUNCHER
// ----------------------------------------------------------------------------
export const DOWNLOADS = {
  client: {
    version: '1.04.6',
    size: '5.8 GB',
    href: 'https://cdn.muaethel.com/MuAethel-Client-Full.zip',
    mirror: 'https://mirror.muaethel.com/MuAethel-Client-Full.zip',
  },
  launcher: {
    version: '2.3.1',
    size: '18 MB',
    href: 'https://cdn.muaethel.com/MuAethel-Launcher.exe',
    mirror: 'https://mirror.muaethel.com/MuAethel-Launcher.exe',
  },
};

// Bloques de texto que se muestran (y se copian) en "Herramientas del launcher".
export const LAUNCHER_FILES = [
  {
    id: 'config',
    filename: 'Config.ini',
    language: 'ini',
    content: `[MuAethel]
ServerName=Mu Aethel
ServerIP=${SERVER.ip}
ServerPort=${SERVER.port}
Season=6
Language=0
FullScreen=1
Resolution=1280x720
MusicOn=1
SoundOn=1`,
  },
  {
    id: 'list',
    filename: 'List.dat',
    language: 'text',
    content: `//Mu Aethel - Season 6
1 "Aethel" ${SERVER.ip}:${SERVER.port} 1
2 "Aethel Test" ${SERVER.ip}:44406 0
end`,
  },
];

// ----------------------------------------------------------------------------
//  REDES SOCIALES
// ----------------------------------------------------------------------------
export const SOCIALS = [
  { id: 'discord', labelKey: 'footer.discord', href: 'https://discord.gg/muaethel' },
  { id: 'facebook', labelKey: 'footer.facebook', href: 'https://facebook.com/muaethel' },
  { id: 'whatsapp', labelKey: 'footer.whatsapp', href: 'https://chat.whatsapp.com/muaethel' },
];
