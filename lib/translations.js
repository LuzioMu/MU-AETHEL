// ============================================================================
//  MU AETHEL - Diccionario de traducción (ES / EN / PT)
//  Para agregar un texto nuevo: creá la clave en los tres idiomas.
//  Para agregar un idioma: copiá el bloque completo y traducilo.
// ============================================================================

export const LANGUAGES = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt', label: 'PT', name: 'Português' },
];

export const DEFAULT_LANG = 'es';

export const translations = {
  // ==========================================================================
  //  ESPAÑOL
  // ==========================================================================
  es: {
    meta: {
      tagline: 'Season 6 · Sin VIP · Todo se gana jugando',
    },

    nav: {
      home: 'Inicio',
      news: 'Noticias',
      economy: 'Economía',
      download: 'Descargas',
      rankings: 'Rankings',
      discord: 'Discord',
      play: 'Jugar ahora',
      menu: 'Menú',
      close: 'Cerrar',
      language: 'Idioma',
    },

    hero: {
      title: 'Mu Aethel',
      season: 'Season 6 Episode 3',
      claim: 'Acá nadie compra su poder. Se lo gana.',
      body: 'Sin VIP, sin packs, sin ventajas pagas. Cada set, cada ala y cada joya salen del esfuerzo propio, de la party que armaste y del PvP que ganaste.',
      ctaPrimary: 'Descargar cliente',
      ctaSecondary: 'Cómo funciona la economía',
      statPlayers: 'Jugadores conectados',
      statExp: 'Experiencia',
      statDrop: 'Drop',
      statReset: 'Resets',
    },

    events: {
      title: 'Invasiones & Eventos Globales',
      subtitle: 'Horarios sincronizados con el servidor',
      stateOpen: 'ABIERTO',
      stateRunning: 'EN CURSO',
      stateNext: 'Próximo en',
      opensIn: 'Abre en',
      entryOpen: 'Entrada abierta',
      loading: 'Sincronizando horarios…',
      serverTime: 'Hora del servidor',
      bloodCastle: 'Blood Castle',
      devilSquare: 'Devil Square',
      chaosCastle: 'Chaos Castle',
      kundun: 'Kundun',
      medusa: 'Medusa',
      castleSiege: 'Castle Siege',
      descBloodCastle: 'Rescatá el arma sagrada antes de que se acabe el tiempo.',
      descDevilSquare: 'Oleadas de invocados por puntaje. Requiere invitación.',
      descChaosCastle: 'Todos contra todos en una arena que se derrumba.',
      descKundun: 'Spawn en Kalima 7. El drop se reparte por daño.',
      descMedusa: 'Swamp of Calmness. Entrada por ticket de la Tienda de Comunidad.',
      descCastleSiege: 'Guerra de gremios semanal por el Castillo y sus impuestos.',
      weeklyOn: 'Todos los {day} a las {time}',
    },

    days: {
      0: 'domingos',
      1: 'lunes',
      2: 'martes',
      3: 'miércoles',
      4: 'jueves',
      5: 'viernes',
      6: 'sábados',
    },

    news: {
      title: 'Últimas Novedades',
      subtitle: 'Mantente al tanto de las actualizaciones del servidor',
      readMore: 'Leer más',
      all: 'Todas',
      categories: {
        maintenance: 'Mantenimiento',
        event: 'Evento',
        update: 'Actualización',
        news: 'Noticia',
      },
      empty: 'Todavía no hay publicaciones en esta categoría.',
    },
    
    home: {
      castleTitle: 'Castle Siege',
      castleSub: 'El Trono del Reino',
      castleDesc: 'La guerra de gremios más importante de Mu Online. El ganador controla el Valle de Loren y los impuestos del servidor.',
      castleNone: 'NINGUNO',
      castleNext: 'Próxima batalla: Domingo 20:00',
      rankTitle: 'Salón de la Fama',
      rankSub: 'Rankings en tiempo real',
      rankResets: 'Top Resets',
      rankKills: 'Top Killers (Honor)',
      rankHelpers: 'Top Helpers',
      rankBtn: 'Ver Ranking Completo',
      libraryTitle: 'La Gran Biblioteca de Aethel',
      librarySub: 'Todo el conocimiento en un solo lugar',
      libraryDesc: '¿No sabés dónde cae la Jewel of Bless? ¿Querés armar tus Alas nivel 3 y te faltan materiales? Ingresá a nuestra Wiki oficial para ver todos los mapas, spots, niveles de monstruos y recompensas de los Jefes.',
      libraryBtn: 'Leer Guía Completa de Drops'
    },

    economy: {
      title: 'Economía play-to-earn',
      subtitle: 'Dos monedas, cero dinero real. Una premia el PvP, la otra premia ayudar.',
      noVipTitle: 'Sin sistema VIP',
      noVipBody:
        'No vendemos experiencia, drop, sets ni ventajas de ningún tipo. Nadie puede pagar para superarte: si alguien tiene mejor equipo, jugó más o jugó mejor.',
      honorTitle: 'Honor Tokens',
      honorFor: 'Moneda de PvP',
      honorHow: 'Cómo se consiguen',
      honorUse: 'Dónde se gastan',
      honorEarn: [
        'Duelos y muertes en zonas PvP',
        'Eventos PvP y arenas del staff',
        'Sistema Gens (Vanert / Duprian)',
        'Castle Siege y defensa del castillo',
      ],
      honorSpend: [
        'Cajas de evento y cajas de Kundun',
        'Feather of Condor y Condor Flame',
        'Materiales para armar equipamiento top',
        'Alas de nivel 3 y sus componentes',
      ],
      honorShop: 'Tienda de Honor',
      helperTitle: 'Helper Tokens',
      helperFor: 'Moneda de comunidad',
      helperHow: 'Cómo se consiguen',
      helperUse: 'Dónde se gastan',
      helperEarn: [
        'Party con jugadores de menor nivel que suben con vos',
        'Tiempo online activo dentro del juego',
        'Apoyo a cuentas nuevas en su primera semana',
        'Misiones de ayuda asignadas por el staff',
      ],
      helperSpend: [
        'Entradas a Blood Castle, Devil Square y Chaos Castle',
        'Tickets de jefes (Kundun, Medusa)',
        'Joyas de Bless, Soul, Chaos y Life',
        'Cosméticos y aros de aspecto',
      ],
      helperShop: 'Tienda de Comunidad',
      transparency: 'Tasas publicadas y revisadas cada temporada. Sin conversión a dinero real.',
    },

    download: {
      title: 'Centro de Descargas',
      subtitle: 'Descarga el cliente oficial con el launcher integrado para empezar a jugar.',
      clientTitle: 'Cliente oficial',
      clientBody: 'Instalación limpia de Season 6 Episode 3, ya configurada para Mu Aethel.',
      clientButton: 'Descarga Directa (Recomendado)',
      launcherTitle: 'Launcher',
      launcherBody: 'Actualiza los parches y abre el juego. Requiere el cliente instalado.',
      launcherButton: 'Descargar launcher',
      size: 'Tamaño',
      version: 'Versión',
      mirror: 'Espejo alternativo',
      toolsTitle: 'Opciones Alternativas',
      toolsSubtitle: 'Configuración base por si necesitás conectar el cliente a mano.',
      configFile: 'Archivo de conexión',
      listFile: 'Lista de servidores',
      patchTitle: 'Requisitos Mínimos:',
      patchBody:
        'Windows 10/11 · 4 GB RAM · DirectX 9.0c · 6 GB libres',
      copy: 'Copiar',
      copied: 'Copiado',
      note: 'Si el antivirus bloquea el launcher, añade la carpeta a exclusiones (Falso positivo habitual en clientes de Mu Online).',
      requirements: 'Requisitos',
      requirementsBody: 'Windows 10/11 · 4 GB RAM · DirectX 9.0c · 6 GB libres',
    },

    footer: {
      community: 'Nuestra Comunidad',
      support: 'Soporte & Reglas',
      serverStatus: 'Estado del servidor',
      gameServer: 'GameServer Principal',
      connectionData: 'Datos de conexión',
      online: 'En Línea',
      offline: 'Fuera de línea',
      ip: 'IP de Conexión',
      port: 'Puerto',
      discord: 'Discord Oficial',
      facebook: 'Facebook',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      donate: 'Apoyar Servidor (Donar)',
      supportBody: '¿Necesitas ayuda? Contáctanos.',
      rules: 'Reglas del Servidor',
      terms: 'Términos y Condiciones',
      privacy: 'Política de Privacidad',
      rights: 'Todos los derechos reservados.',
      disclaimer:
        'Mu Online es una marca registrada de Webzen Inc.',
    },
  },

  // ==========================================================================
  //  ENGLISH
  // ==========================================================================
  en: {
    meta: {
      tagline: 'Season 6 · No VIP · Everything is earned in-game',
    },

    nav: {
      home: 'Home',
      news: 'News',
      economy: 'Economy',
      download: 'Downloads',
      rankings: 'Rankings',
      discord: 'Discord',
      play: 'Play now',
      menu: 'Menu',
      close: 'Close',
      language: 'Language',
    },

    hero: {
      title: 'Mu Aethel',
      season: 'Season 6 Episode 3',
      claim: 'Nobody buys power here. They earn it.',
      body: 'No VIP, no packs, no paid advantages. Every set, every wing and every jewel comes from your own grind, the party you built and the PvP you won.',
      ctaPrimary: 'Download client',
      ctaSecondary: 'How the economy works',
      statPlayers: 'Players online',
      statExp: 'Experience',
      statDrop: 'Drop',
      statReset: 'Resets',
    },

    events: {
      title: 'Global Events & Invasions',
      subtitle: 'Schedules synchronized with the server',
      stateOpen: 'OPEN',
      stateRunning: 'RUNNING',
      stateNext: 'Next in',
      opensIn: 'Opens in',
      entryOpen: 'Entry open',
      loading: 'Syncing schedule…',
      serverTime: 'Server time',
      bloodCastle: 'Blood Castle',
      devilSquare: 'Devil Square',
      chaosCastle: 'Chaos Castle',
      kundun: 'Kundun',
      medusa: 'Medusa',
      castleSiege: 'Castle Siege',
      descBloodCastle: 'Rescue the holy weapon before the timer runs out.',
      descDevilSquare: 'Scored waves of summons. Invitation required.',
      descChaosCastle: 'Free-for-all in a collapsing arena.',
      descKundun: 'Spawns in Kalima 7. Drop is split by damage dealt.',
      descMedusa: 'Swamp of Calmness. Entry ticket from the Community Shop.',
      descCastleSiege: 'Weekly guild war for the Castle and its taxes.',
      weeklyOn: 'Every {day} at {time}',
    },

    days: {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    },

    news: {
      title: 'Latest News',
      subtitle: 'Stay up to date with server updates',
      readMore: 'Read more',
      all: 'All',
      categories: {
        maintenance: 'Maintenance',
        event: 'Event',
        update: 'Update',
        news: 'News',
      },
      empty: 'No posts in this category yet.',
    },
    
    home: {
      castleTitle: 'Castle Siege',
      castleSub: 'The Throne of the Realm',
      castleDesc: 'The most important guild war in Mu Online. The winner controls the Valley of Loren and server taxes.',
      castleNone: 'NONE',
      castleNext: 'Next battle: Sunday 20:00',
      rankTitle: 'Hall of Fame',
      rankSub: 'Real-time rankings',
      rankResets: 'Top Resets',
      rankKills: 'Top Killers (Honor)',
      rankHelpers: 'Top Helpers',
      rankBtn: 'View Full Ranking',
      libraryTitle: 'The Great Library of Aethel',
      librarySub: 'All knowledge in one place',
      libraryDesc: 'Don\'t know where Jewel of Bless drops? Want to craft level 3 Wings but lack materials? Enter our official Wiki to see all maps, spots, monster levels, and Boss rewards.',
      libraryBtn: 'Read Full Drop Guide'
    },

    economy: {
      title: 'Play-to-earn economy',
      subtitle: 'Two currencies, zero real money. One rewards PvP, the other rewards helping.',
      noVipTitle: 'No VIP system',
      noVipBody:
        'We do not sell experience, drop, sets or advantages of any kind. Nobody can pay to outgear you: if someone is stronger, they played more or played better.',
      honorTitle: 'Honor Tokens',
      honorFor: 'PvP currency',
      honorHow: 'How to earn them',
      honorUse: 'Where to spend them',
      honorEarn: [
        'Duels and kills in PvP zones',
        'Staff-run PvP events and arenas',
        'Gens system (Vanert / Duprian)',
        'Castle Siege and castle defense',
      ],
      honorSpend: [
        'Event boxes and Kundun boxes',
        'Feather of Condor and Condor Flame',
        'Crafting materials for top-tier gear',
        'Level 3 wings and their components',
      ],
      honorShop: 'Honor Shop',
      helperTitle: 'Helper Tokens',
      helperFor: 'Community currency',
      helperHow: 'How to earn them',
      helperUse: 'Where to spend them',
      helperEarn: [
        'Partying with lower-level players who level up with you',
        'Active time online in game',
        'Supporting new accounts during their first week',
        'Helper quests assigned by the staff',
      ],
      helperSpend: [
        'Blood Castle, Devil Square and Chaos Castle entries',
        'Boss tickets (Kundun, Medusa)',
        'Bless, Soul, Chaos and Life jewels',
        'Cosmetics and appearance rings',
      ],
      helperShop: 'Community Shop',
      transparency: 'Rates published and reviewed each season. No conversion to real money.',
    },

    download: {
      title: 'Download Center',
      subtitle: 'Download the official client with the integrated launcher to start playing.',
      clientTitle: 'Official client',
      clientBody: 'Clean Season 6 Episode 3 install, already configured for Mu Aethel.',
      clientButton: 'Direct Download (Recommended)',
      launcherTitle: 'Launcher',
      launcherBody: 'Patches the game and launches it. Requires the client installed.',
      launcherButton: 'Download launcher',
      size: 'Size',
      version: 'Version',
      mirror: 'Alternate mirror',
      toolsTitle: 'Alternative Options',
      toolsSubtitle: 'Base configuration in case you need to connect the client manually.',
      configFile: 'Connection file',
      listFile: 'Server list',
      patchTitle: 'Minimum Requirements:',
      patchBody:
        'Windows 10/11 · 4 GB RAM · DirectX 9.0c · 6 GB free',
      copy: 'Copy',
      copied: 'Copied',
      note: 'If your antivirus blocks the launcher, add the folder to exclusions (Common false positive in Mu Online clients).',
      requirements: 'Requirements',
      requirementsBody: 'Windows 10/11 · 4 GB RAM · DirectX 9.0c · 6 GB free',
    },

    footer: {
      community: 'Our Community',
      support: 'Support & Rules',
      serverStatus: 'Server status',
      gameServer: 'Main GameServer',
      connectionData: 'Connection data',
      online: 'Online',
      offline: 'Offline',
      ip: 'Connection IP',
      port: 'Port',
      discord: 'Official Discord',
      facebook: 'Facebook',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      donate: 'Support Server (Donate)',
      supportBody: 'Need help? Contact us.',
      rules: 'Server Rules',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.',
      disclaimer:
        'Mu Online is a registered trademark of Webzen Inc.',
    },
  },

  // ==========================================================================
  //  PORTUGUÊS
  // ==========================================================================
  pt: {
    meta: {
      tagline: 'Season 6 · Sem VIP · Tudo se conquista jogando',
    },

    nav: {
      home: 'Início',
      news: 'Notícias',
      economy: 'Economia',
      download: 'Downloads',
      rankings: 'Rankings',
      discord: 'Discord',
      play: 'Jogar agora',
      menu: 'Menu',
      close: 'Fechar',
      language: 'Idioma',
    },

    hero: {
      title: 'Mu Aethel',
      season: 'Season 6 Episode 3',
      claim: 'Aqui ninguém compra poder. Conquista.',
      body: 'Sem VIP, sem packs, sem vantagens pagas. Cada set, cada asa e cada joia vêm do seu esforço, da party que você montou e do PvP que você venceu.',
      ctaPrimary: 'Baixar cliente',
      ctaSecondary: 'Como funciona a economia',
      statPlayers: 'Jogadores online',
      statExp: 'Experiência',
      statDrop: 'Drop',
      statReset: 'Resets',
    },

    events: {
      title: 'Invasões & Eventos Globais',
      subtitle: 'Horários sincronizados com o servidor',
      stateOpen: 'ABERTO',
      stateRunning: 'EM ANDAMENTO',
      stateNext: 'Próximo em',
      opensIn: 'Abre em',
      entryOpen: 'Entrada aberta',
      loading: 'Sincronizando horários…',
      serverTime: 'Hora do servidor',
      bloodCastle: 'Blood Castle',
      devilSquare: 'Devil Square',
      chaosCastle: 'Chaos Castle',
      kundun: 'Kundun',
      medusa: 'Medusa',
      castleSiege: 'Castle Siege',
      descBloodCastle: 'Resgate a arma sagrada antes que o tempo acabe.',
      descDevilSquare: 'Ondas de invocados por pontuação. Precisa de convite.',
      descChaosCastle: 'Todos contra todos numa arena que desaba.',
      descKundun: 'Nasce em Kalima 7. O drop é dividido por dano causado.',
      descMedusa: 'Swamp of Calmness. Entrada por ticket da Loja da Comunidade.',
      descCastleSiege: 'Guerra semanal de guildas pelo Castelo e seus impostos.',
      weeklyOn: 'Todo {day} às {time}',
    },

    days: {
      0: 'domingo',
      1: 'segunda-feira',
      2: 'terça-feira',
      3: 'quarta-feira',
      4: 'quinta-feira',
      5: 'sexta-feira',
      6: 'sábado',
    },

    news: {
      title: 'Últimas Notícias',
      subtitle: 'Fique por dentro das atualizações do servidor',
      readMore: 'Ler mais',
      all: 'Todas',
      categories: {
        maintenance: 'Manutenção',
        event: 'Evento',
        update: 'Atualização',
        news: 'Notícia',
      },
      empty: 'Ainda não há publicações nesta categoria.',
    },
    
    home: {
      castleTitle: 'Castle Siege',
      castleSub: 'O Trono do Reino',
      castleDesc: 'A guerra de guildas mais importante do Mu Online. O vencedor controla o Vale de Loren e os impostos do servidor.',
      castleNone: 'NENHUM',
      castleNext: 'Próxima batalha: Domingo 20:00',
      rankTitle: 'Salão da Fama',
      rankSub: 'Rankings em tempo real',
      rankResets: 'Top Resets',
      rankKills: 'Top Killers (Honra)',
      rankHelpers: 'Top Helpers',
      rankBtn: 'Ver Ranking Completo',
      libraryTitle: 'A Grande Biblioteca de Aethel',
      librarySub: 'Todo o conhecimento em um só lugar',
      libraryDesc: 'Não sabe onde cai a Jewel of Bless? Quer fazer suas Asas level 3 e faltam materiais? Entre na nossa Wiki oficial para ver todos os mapas, spots, níveis de monstros e recompensas de Chefes.',
      libraryBtn: 'Ler Guia Completo de Drops'
    },

    economy: {
      title: 'Economia play-to-earn',
      subtitle: 'Duas moedas, zero dinheiro real. Uma premia o PvP, a outra premia ajudar.',
      noVipTitle: 'Sem sistema VIP',
      noVipBody:
        'Não vendemos experiência, drop, sets nem vantagens de nenhum tipo. Ninguém pode pagar para te superar: se alguém está mais forte, jogou mais ou jogou melhor.',
      honorTitle: 'Honor Tokens',
      honorFor: 'Moeda de PvP',
      honorHow: 'Como conseguir',
      honorUse: 'Onde gastar',
      honorEarn: [
        'Duelos e abates em zonas PvP',
        'Eventos PvP e arenas da equipe',
        'Sistema Gens (Vanert / Duprian)',
        'Castle Siege e defesa do castelo',
      ],
      honorSpend: [
        'Caixas de evento e caixas de Kundun',
        'Feather of Condor e Condor Flame',
        'Materiais para montar equipamento top',
        'Asas de nível 3 e seus componentes',
      ],
      honorShop: 'Loja de Honra',
      helperTitle: 'Helper Tokens',
      helperFor: 'Moeda da comunidade',
      helperHow: 'Como conseguir',
      helperUse: 'Onde gastar',
      helperEarn: [
        'Party com jogadores de nível menor que sobem com você',
        'Tempo online ativo dentro do jogo',
        'Apoio a contas novas na primeira semana',
        'Missões de ajuda atribuídas pela equipe',
      ],
      helperSpend: [
        'Entradas de Blood Castle, Devil Square e Chaos Castle',
        'Tickets de chefes (Kundun, Medusa)',
        'Joias de Bless, Soul, Chaos e Life',
        'Cosméticos e anéis de aparência',
      ],
      helperShop: 'Loja da Comunidade',
      transparency: 'Taxas publicadas e revisadas a cada temporada. Sem conversão em dinheiro real.',
    },

    download: {
      title: 'Centro de Downloads',
      subtitle: 'Baixe o cliente oficial com o launcher integrado para começar a jogar.',
      clientTitle: 'Cliente oficial',
      clientBody: 'Instalação limpa de Season 6 Episode 3, já configurada para Mu Aethel.',
      clientButton: 'Download Direto (Recomendado)',
      launcherTitle: 'Launcher',
      launcherBody: 'Atualiza os patches e abre o jogo. Precisa do cliente instalado.',
      launcherButton: 'Baixar launcher',
      size: 'Tamanho',
      version: 'Versão',
      mirror: 'Espelho alternativo',
      toolsTitle: 'Opções Alternativas',
      toolsSubtitle: 'Configuração base caso precise conectar o cliente manualmente.',
      configFile: 'Arquivo de conexão',
      listFile: 'Lista de servidores',
      patchTitle: 'Requisitos Mínimos:',
      patchBody:
        'Windows 10/11 · 4 GB RAM · DirectX 9.0c · 6 GB livres',
      copy: 'Copiar',
      copied: 'Copiado',
      note: 'Se o antivírus bloquear o launcher, adicione a pasta às exclusões (Falso positivo comum em clientes de Mu Online).',
      requirements: 'Requisitos',
      requirementsBody: 'Windows 10/11 · 4 GB RAM · DirectX 9.0c · 6 GB livres',
    },

    footer: {
      community: 'Nossa Comunidade',
      support: 'Suporte & Regras',
      serverStatus: 'Status do servidor',
      gameServer: 'GameServer Principal',
      connectionData: 'Dados de conexão',
      online: 'Online',
      offline: 'Offline',
      ip: 'IP de Conexão',
      port: 'Porta',
      discord: 'Discord Oficial',
      facebook: 'Facebook',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      donate: 'Apoiar Servidor (Doar)',
      supportBody: 'Precisa de ajuda? Fale conosco.',
      rules: 'Regras do Servidor',
      terms: 'Termos de Serviço',
      privacy: 'Política de Privacidade',
      rights: 'Todos os direitos reservados.',
      disclaimer:
        'Mu Online é uma marca registrada da Webzen Inc.',
    },
  },
};

// --- Helpers -----------------------------------------------------------------

/**
 * Lee una clave anidada del diccionario: t('events.title').
 * Si falta la traducción cae a español y, si tampoco existe, devuelve la clave.
 */
export function getTranslation(lang, path) {
  const read = (dict) =>
    path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), dict);

  const value = read(translations[lang]);
  if (value !== undefined) return value;

  const fallback = read(translations[DEFAULT_LANG]);
  return fallback !== undefined ? fallback : path;
}

/** Reemplaza marcadores del tipo {day} dentro de un texto traducido. */
export function interpolate(text, vars = {}) {
  if (typeof text !== 'string') return text;
  return text.replace(/\{(\w+)\}/g, (match, key) =>
    vars[key] !== undefined ? vars[key] : match
  );
}
