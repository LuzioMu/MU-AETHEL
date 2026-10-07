// ============================================================================
//  MU AETHEL - Diccionario de traducción (ES / EN / PT)
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
      home: 'Inicio', news: 'Noticias', economy: 'Economía', download: 'Descargas', downloads: 'Descargas',
      rankings: 'Rankings', discord: 'Discord', play: 'Jugar ahora', menu: 'Menú', close: 'Cerrar', language: 'Idioma',
      guide: 'Guías', register: 'Crear Cuenta', login: 'Ingresar',
    },
    hero: {
      title: 'Mu Aethel', season: 'Season 6 Episode 3', claim: 'Acá nadie compra su poder. Se lo gana.',
      body: 'Sin VIP, sin packs, sin ventajas pagas. Cada set, cada ala y cada joya salen del esfuerzo propio, de la party que armaste y del PvP que ganaste.',
      ctaPrimary: 'Descargar cliente', ctaSecondary: 'Cómo funciona la economía',
      statPlayers: 'Jugadores conectados', statExp: 'Experiencia', statDrop: 'Drop', statReset: 'Resets',
    },
    features: {
      subtitle: 'Novedades de Mu Aethel', mainTitle: 'Modificaciones & Características',
      bossesTitle: 'Jefes & Bosses Custom', bossesTag: 'PVE EXCLUSIVO', bossesDesc: 'World Bosses únicos con mecánicas avanzadas y eventos de invasión con recompensas exclusivas.',
      mapsTitle: 'Mapas Remasterizados', mapsTag: 'ZONAS PVP / SAFE', mapsDesc: 'Zonas de leveo optimizadas y mapas especiales de PvP abierto sin penalizaciones.',
      balanceTitle: 'Balance PvP Season 6', balanceTag: 'EQUILIBRIO TOTAL', balanceDesc: 'Ajustes de daño y resistencia en las 7 clases para combates justos en duelos y Castle Siege.',
      economyTitle: 'Economía Play-to-Earn', economyTag: 'RECOMPENSAS P2E', economyDesc: 'Sistema de tokens por méritos dentro del juego. Cero pay-to-win, premiando el esfuerzo.',
    },
    home: {
      castleTitle: 'Castle Siege', castleSub: 'El Trono del Reino', castleDesc: 'La guerra de gremios más importante de Mu Online. El ganador controla el Valle de Loren y los impuestos del servidor.',
      castleSovereign: 'Gremio Soberano', castleNone: 'NINGUNO', castleNext: 'Próxima batalla: Domingo 20:00',
      rankTitle: 'Salón de la Fama', rankSub: 'Rankings en tiempo real', rankKills: 'Top Honor', rankHelpers: 'Top Helpers', rankBtn: 'Ver Ranking Completo',
      libraryTitle: 'La Gran Biblioteca de Aethel', librarySub: 'Todo el conocimiento en un solo lugar', libraryDesc: '¿No sabés dónde cae la Jewel of Bless? ¿Querés armar tus Alas nivel 3 y te faltan materiales? Ingresá a nuestra Wiki oficial para ver todos los mapas, spots, niveles de monstruos y recompensas de los Jefes.',
      libraryBtn: 'Leer Guía Completa de Drops',
    },
    rankings: {
      title: 'Salón de la Fama', subtitle: 'Los mejores guerreros del servidor. Actualizado cada hora.',
      tabKills: 'Top Honor', tabHelpers: 'Top Helpers', tabMilestones: 'Hitos del Reino',
      colRank: '#', colName: 'Personaje', colClass: 'Clase', colGuild: 'Gremio', colScore: 'Puntuación', lvl: 'Nvl.',
      msGuilds: 'Primeros Gremios Fundados', msBosses: 'Primeras Cacerías Épicas', msHeroes: 'Héroes Pioneros',
    },
    events: {
      title: 'Invasiones & Eventos Globales', subtitle: 'HORARIOS SINCRONIZADOS CON EL SERVIDOR',
      stateOpen: 'ABIERTO', stateRunning: '¡EN CURSO!', stateNext: 'El evento comienza en:', opensIn: 'Abre en',
      entryOpen: 'Entrada abierta', loading: 'Sincronizando horarios…', serverTime: 'Hora del servidor',
      mission: 'MISIÓN:', loot: 'RECOMPENSA (LOOT):',
      bloodCastle: 'Blood Castle', devilSquare: 'Devil Square', chaosCastle: 'Chaos Castle', kundun: 'Kundun', medusa: 'Medusa', castleSiege: 'Castle Siege',
      descBloodCastle: 'Misión de rescate del Arcángel. Rompe la puerta, destruye la estatua de cristal y entrega el arma divina al herido.',
      lootBloodCastle: 'Jewel of Bless, Jewel of Soul, Jewel of Chaos, Armas de Arcángel',
      descDevilSquare: 'Supervivencia extrema por puntos. Resiste oleadas continuas de monstruos para ganar una cantidad masiva de experiencia.',
      lootDevilSquare: 'Experiencia Masiva, Zen, Cajas Kundun',
      descChaosCastle: 'Batalla a muerte todos contra todos. Empuja a tus enemigos fuera del castillo que se derrumba para ser el último en pie.',
      lootChaosCastle: 'Jewel of Creation, Items Excelentes, Bless',
      descIllusionTemple: 'Batalla táctica por equipos (Gens). Captura el artefacto sagrado y llévalo a tu base para anotar puntos.',
      lootIllusionTemple: 'Materiales de Fenrir, Experiencia Alta, Joyas',
      descImperialGuardian: 'Instancia diaria de supervivencia. Atraviesa el fuerte de Varka y derrota a los jefes de cada zona.',
      lootImperialGuardian: 'Partes Secromicon, Items Excelentes de nivel alto',
      descCrywolf: 'Evento general de servidor. Defiende la estatua del Lobo Sagrado de las tropas invasoras de Balgass.',
      lootCrywolf: 'Items Season 4, Horn of Fenrir, Activa Kanturu Event',
      descKanturu: 'Adéntrate en la refinería de Kanturu Relics, sobrevive a las Manos de Maya y derrota al jefe final Nightmare.',
      lootKanturu: 'Items Excelentes 380, Gemstone, Refinería Abierta',
      descSelupan: 'Destruye los huevos de araña en Raklion Hatchery y enfréntate a la bestia gigante Selupan.',
      lootSelupan: 'Items Socket (Season 4), Esferas Tetras, Armas',
      descKundun: 'Invasión en los niveles profundos de Kalima 7. Derrota a la ilusión del Señor Oscuro.',
      lootKundun: 'Items Ancient, Armas nivel 380',
      descMedusa: 'Invasión de la bestia mítica en la zona segura de Swamp of Peace (Swamp of Calmness).',
      lootMedusa: 'Items Excelentes High Tier, Paquetes de Joyas',
      weeklyOn: 'Todos los {day} a las {time}',
    },
    days: {
      0: 'domingos', 1: 'lunes', 2: 'martes', 3: 'miércoles', 4: 'jueves', 5: 'viernes', 6: 'sábados',
    },
    news: {
      title: 'Noticias', subtitle: 'Cambios, eventos y mantenimientos anunciados por el staff.', readMore: 'Leer más', all: 'Todas',
      categories: { maintenance: 'Mantenimiento', event: 'Evento', update: 'Actualización', news: 'Noticia' },
      empty: 'Todavía no hay publicaciones en esta categoría.',
    },
    newsPage: {
      title: 'Novedades del Reino', subtitle: 'Mantente al tanto de actualizaciones, eventos y avisos importantes.', all: 'Todo', readMore: 'Leer noticia completa',
      eventsTitle: 'Inauguración del Reino', eventsDesc: 'Las puertas de Mu Aethel se abren oficialmente para todos los guerreros.',
      eventsBody1: 'Guerreros, la espera ha terminado. Las puertas de nuestro servidor oficial ya están abiertas para todos aquellos valientes dispuestos a forjar su propio destino.',
      eventsBody2: 'Entren y reclamen su lugar en la historia. Contaremos con eventos activos durante la primera semana y bonificaciones especiales de experiencia para los primeros exploradores del continente.',
      eventsBody3: '¡Preparen sus armas, nos vemos en el bar de Lorencia!',
      commTitle: 'Aporta tu grano al Reino', commDesc: 'Ayúdanos a mantener el servidor en línea y libre de Pay-to-Win.',
      commBody1: 'Mu Aethel está construido por y para la comunidad. Nuestro compromiso inquebrantable es mantener un servidor equilibrado y libre de mecánicas Pay-to-Win (P2W).',
      commBody2: 'Si disfrutas de tu estadía y quieres ayudarnos a costear el alojamiento mensual, la protección Anti-DDoS y asegurar futuras actualizaciones, puedes aportar tu grano de arena a través de donaciones voluntarias.',
      commDonation: 'Donación Voluntaria', commBtn: 'Aportar vía PayPal', commNote: 'Las donaciones no otorgan ventajas competitivas dentro del juego.'
    },
    legal: {
      rulesTitle: 'Reglas del Servidor', rulesHacks: 'Tolerancia Cero a Hacks y Cheats',
      rulesHacksDesc: 'Queda estrictamente prohibido el uso de programas de terceros, inyectores, bots (excepto el MuHelper oficial), aceleradores de velocidad o cualquier software que altere el cliente. La detección resultará en un baneo permanente e irrevocable de Cuenta, IP y HWID.',
      rulesIP: 'Límite de Conexiones por IP', rulesIPDesc: 'Para garantizar una economía sana y competencia justa, solo se permiten un máximo de dos (2) cuentas conectadas simultáneamente por cada dirección IP.',
      rulesConduct: 'Conducta y Respeto', rulesConductDesc: 'Se exige respeto hacia todos los miembros de la comunidad. El uso del Chat Global para emitir insultos graves resultará en el silenciamiento o bloqueo temporal de la cuenta.',
      rulesFraud: 'Fraudes y Suplantación', rulesFraudDesc: 'La administración nunca te pedirá tu contraseña dentro del juego. Hacerse pasar por un Administrador es motivo de expulsión inmediata.',
      termsTitle: 'Términos y Condiciones', termsDesc1: 'Al registrar una cuenta y conectarte a Mu Aethel, aceptas automáticamente estos Términos y Condiciones. Nos reservamos el derecho de desconectar los servidores por motivos de mantenimiento o fuerza mayor.',
      termsDesc2: 'Propiedad Virtual: Todas las cuentas, personajes, ítems, monedas virtuales y datos generados son propiedad exclusiva de la administración del servidor.',
      termsDesc3: 'Sistema de Donaciones: Mu Aethel es un servidor Free-to-Play. Cualquier aporte económico realizado es considerado una donación voluntaria. Por lo tanto, no existen devoluciones ni reembolsos.',
      privacyTitle: 'Política de Privacidad', privacyDesc1: 'Tu privacidad es fundamental para nosotros. La información recopilada durante el registro se utiliza estrictamente para fines de seguridad y funcionamiento del servidor.',
      privacyDesc2: 'Uso de la información: El correo electrónico proporcionado se utilizará exclusivamente para la validación de la cuenta, envío de códigos o notificaciones críticas. No enviaremos spam.',
      privacyDesc3: 'Protección de Datos: Todas las contraseñas se almacenan mediante métodos de encriptación seguros. Nunca venderemos ni compartiremos tus datos.'
    },
    economy: {
      title: 'Economía play-to-earn', subtitle: 'Dos monedas, cero dinero real. Una premia el PvP, la otra premia ayudar.',
      noVipTitle: 'Sin sistema VIP', noVipBody: 'No vendemos experiencia, drop, sets ni ventajas de ningún tipo. Nadie puede pagar para superarte: si alguien tiene mejor equipo, jugó más o jugó mejor.',
      honorTitle: 'Honor Tokens', honorTag: 'Moneda de PvP', honorHow: 'Cómo se consiguen:', honorItem1: 'Duelos y muertes en zonas PvP', honorItem2: 'Eventos PvP y arenas del staff', honorItem3: 'Castle Siege y defensa del castillo',
      honorShop: 'Tienda de Honor',
      helperTitle: 'Helper Tokens', helperTag: 'Moneda de comunidad', helperHow: 'Cómo se consiguen:', helperItem1: 'Party con jugadores de menor nivel que suben con vos', helperItem2: 'Apoyo a cuentas nuevas en su primera semana', helperItem3: 'Misiones de ayuda asignadas por el staff',
      helperShop: 'Tienda de Comunidad', transparency: 'Tasas publicadas y revisadas cada temporada. Sin conversión a dinero real.',
    },
    downloads: {
      title: 'Centro de Descargas', subtitle: 'Prepárate para la batalla',
      clientTitle: 'Cliente Oficial + Launcher', clientBody: 'Instalación limpia de Season 6 Episode 3, ya configurada para Mu Aethel.',
      clientDesc: 'Descarga el juego completo preconfigurado. Incluye el launcher automático que mantendrá tus archivos siempre actualizados sin necesidad de parches manuales.',
      clientButton: 'Descargar cliente', btnDirect: '⬇️ Descarga Directa (Recomendado)', altOptions: 'Opciones Alternativas',
      launcherTitle: 'Launcher', launcherBody: 'Actualiza los parches y abre el juego. Requiere el cliente instalado.', launcherButton: 'Descargar launcher',
      size: 'Tamaño:', version: 'Versión:', verified: 'SHA-256 Verificado ✅', mirror: 'Espejo alternativo',
      toolsTitle: 'Herramientas para el launcher', toolsSubtitle: 'Configuración base por si necesitás conectar el cliente a mano.',
      configFile: 'Archivo de conexión', listFile: 'Lista de servidores', patchTitle: 'Actualización de parches',
      patchBody: 'El launcher compara la versión local contra el servidor de parches y baja solo los archivos que cambiaron. Si un parche falla, borrá la carpeta indicada y volvé a abrir el launcher.',
      copy: 'Copiar', copied: 'Copiado', note: '⚠ Si el antivirus bloquea el launcher, añade la carpeta a exclusiones (Falso positivo habitual en clientes de Mu Online).',
      requirements: 'Requisitos', reqTitle: 'Requisitos Mínimos:', reqDesc: 'Windows 7/10/11 · 2GB RAM · DirectX 9.0c · 3GB Espacio Libre',
      requirementsBody: 'Windows 10/11 · 4 GB RAM · DirectX 9.0c · 6 GB libres',
    },
    footer: {
      community: 'Comunidad', support: 'Soporte', serverStatus: 'Estado del servidor', gameServer: 'GameServer Principal',
      connectionData: 'Datos de conexión', online: 'En línea', offline: 'Fuera de línea', ip: 'IP', port: 'Puerto',
      discord: 'Discord Oficial', facebook: 'Grupo de Facebook', whatsapp: 'Grupo de WhatsApp', instagram: 'Instagram Oficial', donate: 'Apoyar Servidor (Donar)',
      supportBody: 'Reportes de bugs y consultas de cuenta por el canal de tickets del Discord.', rules: 'Reglas del servidor', terms: 'Términos de uso', privacy: 'Política de Privacidad',
      rights: 'Todos los derechos reservados.', disclaimer: 'Mu Aethel es un servidor privado sin fines de lucro. MU Online es marca registrada de Webzen Inc.',
    },
    dash: {
      armory: 'Armería de', subtitle: 'Gestiona tu imperio, guild y recursos.', logout: 'Cerrar Sesión', 
      guildWindow: 'Ventana Guild', noGuild: 'Sin Gremio', noGuildDesc: 'Tus personajes no pertenecen a ningún Guild activo.', 
      rank: 'Posición Global', unranked: 'Sin rango', chars: 'Tus Personajes', lvl: 'Nivel', resets: 'Resets', 
      zen: 'Zen', exp: 'Experiencia', noChars: 'Aún no has creado ningún personaje.', soon: 'Equipo próximamente', 
      members: 'Miembros', online: 'Online', state: 'Estado de Loren', nocastle: 'Sin Castillo',
      securityTitle: 'Opciones y Seguridad', passTitle: 'Cambiar Contraseña', passDesc: 'Por tu seguridad, ya no solicitamos tu clave actual aquí. Si necesitas forjar una nueva contraseña, te enviaremos un pergamino mágico directamente a tu correo electrónico asociado.',
      passBtn: 'Solicitar Cambio por Correo', passSuccess: '¡Enlace enviado! Revisa tu correo electrónico.',
      pinTitle: 'Código PIN (7 Dígitos)', pinDesc: 'Necesario para borrar personajes o disolver tu Guild en el juego.',
      pinNew: 'Nuevo PIN', pinBtn: 'Actualizar PIN', pinForgot: '¿Olvidaste tu código actual?', pinEmail: 'Enviar a mi correo', pinSuccess: 'PIN actualizado con éxito.', pinEmailSent: 'El código PIN fue enviado a tu correo.',
      '2faTitle': 'Protección Avanzada (2FA)', '2faDesc': 'Próximamente podrás vincular tu cuenta con Google Authenticator para añadir una capa de seguridad impenetrable.', '2faBtn': 'Bloqueado',
      panicTitle: 'Botón de Pánico', panicDesc: 'Desconecta tu cuenta del servidor inmediatamente y bloquea el acceso. Se requerirá verificación por correo para desbloquearla.', panicBtn: 'Congelar Cuenta', panicConfirm: '¿ESTÁS SEGURO? Tu cuenta será desconectada y bloqueada.', panicLoading: 'Congelando...',
      invoking: 'Invocando...', loading: 'Cargando pergaminos...', connError: 'Error de conexión.'
    },
    guia: {
      pageTag: 'La Biblioteca del Reino', pageTitle: 'Guía Oficial de Drops & Spots', pageDesc: 'Todo el conocimiento de Mu Aethel en un solo lugar.',
      table1Title: '🗺️ Zonas de Leveo Básicas y Medias', table2Title: '🌋 Zonas Peligrosas (End-Game)', table3Title: '👹 Invasiones y Jefes Mundiales (World Bosses)',
      colMap: 'Mapa', colLvl: 'Rango Nivel', colMobs: 'Monstruos Destacados', colDrop: 'Drop Principal', colTime: 'Aparición', colGuaranteed: 'Botín Asegurado:',
      zonasBase: [
        { map: "Lorencia / Noria / Elbeland", mobs: "Spiders, Goblins, Lich, Mutans", lvl: "1 - 30", drop: "Items Básicos, Scroll of Fireball, Heal, Zen" },
        { map: "Devias (1, 2, 3)", mobs: "Elite Yeti, Assassin, Ice Queen", lvl: "30 - 60", drop: "Items tier 2, Horn of Uniria, Jewel of Chaos" },
        { map: "Dungeon (1, 2, 3)", mobs: "Skeleton, Poison Bull, Gorgon", lvl: "40 - 70", drop: "Jewel of Bless, Armas +3 / +4, Poison Ring" },
        { map: "Atlans (1, 2, 3)", mobs: "Bahamut, Vepar, Hydra", lvl: "70 - 100", drop: "Jewel of Soul, Armas Aquáticas, Cajas Ribbon" },
        { map: "Lost Tower (1 al 7)", mobs: "Shadow, Poison Knight, Balrog", lvl: "80 - 120", drop: "Jewel of Bless, Jewel of Soul, Items +5, Scroll of Twisting Slash" }
      ],
      zonasAltas: [
        { map: "Tarkan (1, 2)", mobs: "Mutant, Iron Wheel, Zaikan", lvl: "130 - 180", drop: "Items Excelentes bajos, Jewel of Life" },
        { map: "Icarus", mobs: "Alquamos, Mega Crust, Dark Phoenix", lvl: "170 - 230", drop: "Plumas (Loch's Feather), Crest of Monarch, Items Excelentes tier medio" },
        { map: "Kanturu (Ruins & Relics)", mobs: "Splinter Wolf, Iron Knight", lvl: "250 - 350", drop: "Gemstone, Items 380 No-Excelentes, Jewel of Harmony (Refinada)" },
        { map: "Raklion", mobs: "Ice Walker, Iron Knight, Giant Mammoth", lvl: "300 - 400", drop: "Items Socket (Season 4), Esferas Vacías, Items Excelentes altos" },
        { map: "Vulcanus (Mapa Gens)", mobs: "Zombies, Gladiators, Ashy", lvl: "300+", drop: "Drop aumentado x1.5, Items 380, Jewel of Creation" }
      ],
      bosses: [
        { name: "Invasión de Dorados", map: "Mapas aleatorios", time: "Cada 4 horas", drop: "Cajas Kundun +1, +2, +3, +4, +5 (Tiran Items Excelentes)" },
        { name: "White Wizard", map: "Lorencia, Noria, Devias", time: "Cada 2 horas", drop: "Ring of Magic (Wizard's Ring), Jewel of Bless" },
        { name: "Kundun (Ilusión)", map: "Kalima 7", time: "Evento Diario 20:00", drop: "Items Ancient (Set completos), Armas 380 Excelentes" },
        { name: "Selupan", map: "Raklion Hatchery", time: "Al abrir el huevo", drop: "Armas y Escudos Socket con 3 a 5 slots, Esferas nivel alto" },
        { name: "Medusa", map: "Swamp of Peace", time: "Domingos 22:00", drop: "Paquetes de Joyas (x10, x20, x30), Items Excelentes 380" }
      ]
    },
    auth: {
      loginTitle: 'Ingresar al Reino', registerTitle: 'Crear una Cuenta', user: 'Nombre de Usuario', email: 'Correo Electrónico', pass: 'Contraseña',
      passConfirm: 'Repetir Contraseña', btnLogin: 'Iniciar Sesión', btnRegister: 'Registrarse Ahora', forgot: '¿Olvidaste tu contraseña?',
      noAccount: '¿No tienes cuenta?', haveAccount: '¿Ya tienes una cuenta?', captcha: 'Validación de Seguridad', rulesConfirm: 'Acepto las Reglas del Servidor y la Política de Privacidad', userHelp: 'Entre 4 y 10 caracteres. Se usará para entrar al juego.'
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
      home: 'Home', news: 'News', economy: 'Economy', download: 'Downloads', downloads: 'Downloads',
      rankings: 'Rankings', discord: 'Discord', play: 'Play now', menu: 'Menu', close: 'Close', language: 'Language',
      guide: 'Guides', register: 'Sign Up', login: 'Login',
    },
    hero: {
      title: 'Mu Aethel', season: 'Season 6 Episode 3', claim: 'Nobody buys power here. They earn it.',
      body: 'No VIP, no packs, no paid advantages. Every set, every wing and every jewel comes from your own grind.',
      ctaPrimary: 'Download client', ctaSecondary: 'How the economy works',
      statPlayers: 'Players online', statExp: 'Experience', statDrop: 'Drop', statReset: 'Resets',
    },
    features: {
      subtitle: 'Mu Aethel Features', mainTitle: 'Modifications & Characteristics',
      bossesTitle: 'Custom Bosses', bossesTag: 'EXCLUSIVE PVE', bossesDesc: 'Unique World Bosses with advanced mechanics and invasion events with exclusive rewards.',
      mapsTitle: 'Remastered Maps', mapsTag: 'PVP / SAFE ZONES', mapsDesc: 'Optimized leveling zones and special open PvP maps without penalties.',
      balanceTitle: 'Season 6 PvP Balance', balanceTag: 'TOTAL BALANCE', balanceDesc: 'Damage and resistance tweaks for all 7 classes ensuring fair combat.',
      economyTitle: 'Play-to-Earn Economy', economyTag: 'P2E REWARDS', economyDesc: 'In-game token system based on merit. Zero pay-to-win.',
    },
    home: {
      castleTitle: 'Castle Siege', castleSub: 'The Throne of the Realm', castleDesc: 'The most important guild war in Mu Online. The winner controls the Valley of Loren and server taxes.',
      castleSovereign: 'Sovereign Guild', castleNone: 'NONE', castleNext: 'Next battle: Sunday 20:00',
      rankTitle: 'Hall of Fame', rankSub: 'Real-time rankings', rankKills: 'Top Honor', rankHelpers: 'Top Helpers', rankBtn: 'View Full Ranking',
      libraryTitle: 'The Great Library of Aethel', librarySub: 'All knowledge in one place', libraryDesc: "Don't know where Jewel of Bless drops? Enter our official Wiki.", libraryBtn: 'Read Full Drop Guide',
    },
    rankings: {
      title: 'Hall of Fame', subtitle: 'The best warriors of the realm. Updated hourly.',
      tabKills: 'Top Honor', tabHelpers: 'Top Helpers', tabMilestones: 'Realm Milestones',
      colRank: '#', colName: 'Character', colClass: 'Class', colGuild: 'Guild', colScore: 'Score', lvl: 'Lvl.',
      msGuilds: 'First Founded Guilds', msBosses: 'First Epic Hunts', msHeroes: 'Pioneer Heroes',
    },
    events: {
      title: 'Invasions & Global Events', subtitle: 'SCHEDULES SYNCHRONIZED WITH THE SERVER',
      stateOpen: 'OPEN', stateRunning: 'RUNNING!', stateNext: 'Event starts in:', opensIn: 'Opens in',
      entryOpen: 'Entry open', loading: 'Syncing schedule…', serverTime: 'Server time',
      mission: 'MISSION:', loot: 'REWARD (LOOT):',
      bloodCastle: 'Blood Castle', devilSquare: 'Devil Square', chaosCastle: 'Chaos Castle', kundun: 'Kundun', medusa: 'Medusa', castleSiege: 'Castle Siege',
      descBloodCastle: 'Archangel rescue mission. Break the gate, destroy the crystal statue and deliver the divine weapon.',
      lootBloodCastle: 'Jewel of Bless, Jewel of Soul, Jewel of Chaos, Archangel Weapons',
      descDevilSquare: 'Extreme survival for points. Resist continuous waves of monsters to gain massive experience.',
      lootDevilSquare: 'Massive Experience, Zen, Kundun Boxes',
      descChaosCastle: 'Free-for-all deathmatch. Push your enemies off the collapsing castle to be the last one standing.',
      lootChaosCastle: 'Jewel of Creation, Excellent Items, Bless',
      descIllusionTemple: 'Tactical team battle (Gens). Capture the sacred artifact and take it to your base to score points.',
      lootIllusionTemple: 'Fenrir Materials, High Experience, Jewels',
      descImperialGuardian: 'Daily survival instance. Cross the Varka fort and defeat the bosses in each zone.',
      lootImperialGuardian: 'Secromicon Parts, High Level Excellent Items',
      descCrywolf: 'General server event. Defend the Holy Wolf statue from Balgass invading troops.',
      lootCrywolf: 'Season 4 Items, Horn of Fenrir, Activates Kanturu Event',
      descKanturu: 'Delve into the Kanturu Relics refinery, survive the Hands of Maya and defeat the final boss Nightmare.',
      lootKanturu: 'Excellent 380 Items, Gemstone, Open Refinery',
      descSelupan: 'Destroy the spider eggs in Raklion Hatchery and face the giant beast Selupan.',
      lootSelupan: 'Socket Items (Season 4), Tetra Spheres, Weapons',
      descKundun: 'Invasion deep in Kalima 7. Defeat the illusion of the Dark Lord.',
      lootKundun: 'Ancient Items, Level 380 Weapons',
      descMedusa: 'Invasion of the mythical beast in the safe zone of Swamp of Peace.',
      lootMedusa: 'High Tier Excellent Items, Jewel Bundles',
      weeklyOn: 'Every {day} at {time}',
    },
    days: {
      0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday',
    },
    news: {
      title: 'News', subtitle: 'Changes, events and maintenance announced by the staff.', readMore: 'Read more', all: 'All',
      categories: { maintenance: 'Maintenance', event: 'Event', update: 'Update', news: 'News' },
      empty: 'No posts in this category yet.',
    },
    newsPage: {
      title: 'Realm News', subtitle: 'Stay updated on patches, events, and transparency.', all: 'All', readMore: 'Read full article',
      eventsTitle: 'Inauguration of the Realm', eventsDesc: 'The doors of Mu Aethel officially open for all warriors.',
      eventsBody1: 'Warriors, the wait is over. The doors of our official server are now open for all brave souls willing to forge their own destiny.',
      eventsBody2: 'Enter and claim your place in history. We will have active events during the first week and special experience bonuses for the first explorers of the continent.',
      eventsBody3: 'Prepare your weapons, see you in Lorencia bar!',
      commTitle: 'Contribute to the Realm', commDesc: 'Help us keep the server online and free of Pay-to-Win.',
      commBody1: 'Mu Aethel is built by and for the community. Our unwavering commitment is to maintain a balanced server free of Pay-to-Win (P2W) mechanics.',
      commBody2: 'If you enjoy your stay and want to help us pay for monthly hosting, Anti-DDoS protection, and secure future updates, you can contribute through voluntary donations.',
      commDonation: 'Voluntary Donation', commBtn: 'Contribute via PayPal', commNote: 'Donations do not grant competitive advantages in-game.'
    },
    legal: {
      rulesTitle: 'Server Rules', rulesHacks: 'Zero Tolerance for Hacks and Cheats',
      rulesHacksDesc: 'The use of third-party programs, injectors, bots (except official MuHelper), speed hacks, or any software that alters the client is strictly prohibited. Detection will result in a permanent and irrevocable ban of Account, IP, and HWID.',
      rulesIP: 'IP Connection Limit', rulesIPDesc: 'To ensure a healthy economy and fair competition, a maximum of two (2) connected accounts simultaneously per IP address is allowed.',
      rulesConduct: 'Conduct and Respect', rulesConductDesc: 'Respect towards all community members is required. Using Global Chat to issue serious insults will result in account muting or temporary blocking.',
      rulesFraud: 'Fraud and Impersonation', rulesFraudDesc: 'The administration will never ask for your password in-game. Impersonating an Administrator is grounds for immediate expulsion.',
      termsTitle: 'Terms and Conditions', termsDesc1: 'By registering an account and connecting to Mu Aethel, you automatically accept these Terms and Conditions. We reserve the right to disconnect servers for maintenance or force majeure.',
      termsDesc2: 'Virtual Property: All accounts, characters, items, virtual currencies, and generated data are the exclusive property of the server administration.',
      termsDesc3: 'Donation System: Mu Aethel is a Free-to-Play server. Any financial contribution is considered a voluntary donation. Therefore, there are no refunds or returns under any circumstances.',
      privacyTitle: 'Privacy Policy', privacyDesc1: 'Your privacy is essential to us. The information collected during registration is strictly used for security and server operation purposes.',
      privacyDesc2: 'Use of Information: The email provided will be used exclusively for account validation, sending codes, or critical notifications. We will not send spam.',
      privacyDesc3: 'Data Protection: All passwords are stored using secure encryption methods. We will never sell or share your data.'
    },
    economy: {
      title: 'Play-to-earn economy', subtitle: 'Two currencies, zero real money. One rewards PvP, the other rewards helping.',
      noVipTitle: 'No VIP system', noVipBody: 'We do not sell experience, drop, sets or advantages of any kind. Nobody can pay to outgear you.',
      honorTitle: 'Honor Tokens', honorTag: 'PvP currency', honorHow: 'How to earn them:', honorItem1: 'Duels and kills in PvP zones', honorItem2: 'Staff-run PvP events and arenas', honorItem3: 'Castle Siege and castle defense',
      helperTitle: 'Helper Tokens', helperTag: 'Community currency', helperHow: 'How to earn them:', helperItem1: 'Partying with lower-level players who level up with you', helperItem2: 'Supporting new accounts during their first week', helperItem3: 'Helper quests assigned by the staff',
    },
    downloads: {
      title: 'Download Center', subtitle: 'Prepare for battle',
      clientTitle: 'Official Client + Launcher', clientBody: 'Clean Season 6 Episode 3 install, already configured for Mu Aethel.',
      clientDesc: 'Download the fully preconfigured game. Includes the automatic launcher that will keep your files updated without manual patches.',
      clientButton: 'Download client', btnDirect: '⬇️ Direct Download (Recommended)', altOptions: 'Alternative Options',
      launcherTitle: 'Launcher', launcherBody: 'Patches the game and launches it. Requires the client installed.', launcherButton: 'Download launcher',
      size: 'Size:', version: 'Version:', verified: 'SHA-256 Verified ✅', mirror: 'Alternate mirror',
      toolsTitle: 'Launcher tools', toolsSubtitle: 'Base configuration in case you need to connect the client manually.',
      configFile: 'Connection file', listFile: 'Server list', patchTitle: 'Patch updates',
      patchBody: 'The launcher compares your local version against the patch server and downloads only changed files. If a patch fails, delete the listed folder and open the launcher again.',
      copy: 'Copy', copied: 'Copied', note: '⚠ If your antivirus blocks the launcher, add the folder to exclusions (Common false positive in Mu Online clients).',
      requirements: 'Requirements', reqTitle: 'Minimum Requirements:', reqDesc: 'Windows 7/10/11 · 2GB RAM · DirectX 9.0c · 3GB Free Space',
      requirementsBody: 'Windows 10/11 · 4 GB RAM · DirectX 9.0c · 6 GB free',
    },
    footer: {
      community: 'Community', support: 'Support', serverStatus: 'Server status', gameServer: 'GameServer',
      connectionData: 'Connection data', online: 'Online', offline: 'Offline', ip: 'IP', port: 'Port',
      discord: 'Discord', facebook: 'Facebook', whatsapp: 'WhatsApp', instagram: 'Official Instagram', donate: 'Support Server (Donate)',
      supportBody: 'Bug reports and account issues go through the Discord ticket channel.', rules: 'Server rules', terms: 'Terms of use', privacy: 'Privacy Policy',
      rights: 'All rights reserved.', disclaimer: 'Mu Aethel is a non-profit private server. MU Online is a trademark of Webzen Inc.',
    },
    dash: {
      armory: 'Armory of', subtitle: 'Manage your empire, guild and resources.', logout: 'Logout', 
      guildWindow: 'Guild Window', noGuild: 'No Guild', noGuildDesc: 'Your characters do not belong to an active Guild.', 
      rank: 'Global Rank', unranked: 'Unranked', chars: 'Your Characters', lvl: 'Level', resets: 'Resets', 
      zen: 'Zen', exp: 'Experience', noChars: 'You have not created any characters yet.', soon: 'Equipment coming soon', 
      members: 'Members', online: 'Online', state: 'Loren Status', nocastle: 'No Castle',
      securityTitle: 'Options & Security', passTitle: 'Change Password', passDesc: 'For your security, we no longer ask for your current password here. We will send a magic scroll directly to your linked email address to forge a new one.',
      passBtn: 'Request Change via Email', passSuccess: 'Link sent! Check your email.',
      pinTitle: 'PIN Code (7 Digits)', pinDesc: 'Required to delete characters or disband your Guild in-game.',
      pinNew: 'New PIN', pinBtn: 'Update PIN', pinForgot: 'Forgot your current code?', pinEmail: 'Send to my email', pinSuccess: 'PIN successfully updated.', pinEmailSent: 'PIN code sent to your email.',
      '2faTitle': 'Advanced Protection (2FA)', '2faDesc': 'Soon you will be able to link your account with Google Authenticator for an impenetrable layer of security.', '2faBtn': 'Locked',
      panicTitle: 'Panic Button', panicDesc: 'Instantly disconnects your account from the server and blocks access. Email verification will be required to unlock it.', panicBtn: 'Freeze Account', panicConfirm: 'ARE YOU SURE? Your account will be disconnected and blocked.', panicLoading: 'Freezing...',
      invoking: 'Invoking...', loading: 'Loading scrolls...', connError: 'Connection error.'
    },
    guia: {
      pageTag: 'The Kingdom Library', pageTitle: 'Official Drops & Spots Guide', pageDesc: 'All Mu Aethel knowledge in one place.',
      table1Title: '🗺️ Basic & Medium Leveling Zones', table2Title: '🌋 Dangerous Zones (End-Game)', table3Title: '👹 Invasions & World Bosses',
      colMap: 'Map', colLvl: 'Level Range', colMobs: 'Notable Monsters', colDrop: 'Main Drop', colTime: 'Spawn Time', colGuaranteed: 'Guaranteed Loot:',
      zonasBase: [
        { map: "Lorencia / Noria / Elbeland", mobs: "Spiders, Goblins, Lich, Mutans", lvl: "1 - 30", drop: "Basic Items, Scroll of Fireball, Heal, Zen" },
        { map: "Devias (1, 2, 3)", mobs: "Elite Yeti, Assassin, Ice Queen", lvl: "30 - 60", drop: "Tier 2 Items, Horn of Uniria, Jewel of Chaos" },
        { map: "Dungeon (1, 2, 3)", mobs: "Skeleton, Poison Bull, Gorgon", lvl: "40 - 70", drop: "Jewel of Bless, +3 / +4 Weapons, Poison Ring" },
        { map: "Atlans (1, 2, 3)", mobs: "Bahamut, Vepar, Hydra", lvl: "70 - 100", drop: "Jewel of Soul, Aquatic Weapons, Ribbon Boxes" },
        { map: "Lost Tower (1 to 7)", mobs: "Shadow, Poison Knight, Balrog", lvl: "80 - 120", drop: "Jewel of Bless, Jewel of Soul, +5 Items, Scroll of Twisting Slash" }
      ],
      zonasAltas: [
        { map: "Tarkan (1, 2)", mobs: "Mutant, Iron Wheel, Zaikan", lvl: "130 - 180", drop: "Low Excellent Items, Jewel of Life" },
        { map: "Icarus", mobs: "Alquamos, Mega Crust, Dark Phoenix", lvl: "170 - 230", drop: "Loch's Feather, Crest of Monarch, Mid Excellent Items" },
        { map: "Kanturu (Ruins & Relics)", mobs: "Splinter Wolf, Iron Knight", lvl: "250 - 350", drop: "Gemstone, Non-Excellent 380 Items, Jewel of Harmony" },
        { map: "Raklion", mobs: "Ice Walker, Iron Knight, Giant Mammoth", lvl: "300 - 400", drop: "Socket Items (Season 4), Empty Spheres, High Excellent Items" },
        { map: "Vulcanus (Gens Map)", mobs: "Zombies, Gladiators, Ashy", lvl: "300+", drop: "x1.5 Drop Rate, 380 Items, Jewel of Creation" }
      ],
      bosses: [
        { name: "Golden Invasion", map: "Random Maps", time: "Every 4 hours", drop: "Kundun Boxes +1 to +5 (Drop Excellent Items)" },
        { name: "White Wizard", map: "Lorencia, Noria, Devias", time: "Every 2 hours", drop: "Ring of Magic (Wizard's Ring), Jewel of Bless" },
        { name: "Kundun (Illusion)", map: "Kalima 7", time: "Daily Event 20:00", drop: "Ancient Items (Full Sets), Excellent 380 Weapons" },
        { name: "Selupan", map: "Raklion Hatchery", time: "When egg opens", drop: "Socket Weapons & Shields (3-5 slots), High Level Spheres" },
        { name: "Medusa", map: "Swamp of Peace", time: "Sundays 22:00", drop: "Jewel Bundles (x10, x20, x30), Excellent 380 Items" }
      ]
    },
    auth: {
      loginTitle: 'Enter the Kingdom', registerTitle: 'Create an Account', user: 'Username', email: 'Email Address', pass: 'Password',
      passConfirm: 'Repeat Password', btnLogin: 'Login', btnRegister: 'Register Now', forgot: 'Forgot your password?',
      noAccount: "Don't have an account?", haveAccount: 'Already have an account?', captcha: 'Security Validation', rulesConfirm: 'I accept the Server Rules and Privacy Policy', userHelp: 'Between 4 and 10 characters. Used to log into the game.'
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
      home: 'Início', news: 'Notícias', economy: 'Economia', download: 'Downloads', downloads: 'Downloads',
      rankings: 'Rankings', discord: 'Discord', play: 'Jogar agora', menu: 'Menu', close: 'Fechar', language: 'Idioma',
      guide: 'Guias', register: 'Criar Conta', login: 'Entrar',
    },
    hero: {
      title: 'Mu Aethel', season: 'Season 6 Episode 3', claim: 'Aqui ninguém compra poder. Conquista.',
      body: 'Sem VIP, sem packs, sem vantagens pagas. Cada set, cada asa e cada joia vêm do seu esforço.',
      ctaPrimary: 'Baixar cliente', ctaSecondary: 'Como funciona a economia',
      statPlayers: 'Jogadores online', statExp: 'Experiência', statDrop: 'Drop', statReset: 'Resets',
    },
    features: {
      subtitle: 'O que torna o Mu Aethel único?', mainTitle: 'Modificações & Características',
      bossesTitle: 'Chefes Customizados', bossesTag: 'PVE EXCLUSIVO', bossesDesc: 'World Bosses únicos com mecânicas avançadas e invasões com drops exclusivos.',
      mapsTitle: 'Mapas Remasterizados', mapsTag: 'ZONAS PVP / SAFE', mapsDesc: 'Locais de treino otimizados e zonas de PvP aberto sem penalidade de PK.',
      balanceTitle: 'Balanço PvP Season 6', balanceTag: 'EQUILÍBRIO TOTAL', balanceDesc: 'Fórmulas ajustadas nas 7 classes para combates justos em duelos e Castle Siege.',
      economyTitle: 'Economia Play-to-Earn', economyTag: 'SISTEMA ÚNICO', economyDesc: 'Ganhe moedas por eliminações em eventos PvP e por ajudar novos jogadores.',
    },
    home: {
      castleTitle: 'Castle Siege', castleSub: 'O Trono do Reino', castleDesc: 'A guerra de guildas mais importante do Mu Online. O vencedor controla o Vale de Loren e os impostos do servidor.',
      castleSovereign: 'Guilda Soberana', castleNone: 'NENHUMA', castleNext: 'Próxima batalha: Domingo 20:00',
      rankTitle: 'Salão da Fama', rankSub: 'Rankings em tempo real', rankKills: 'Top Honra', rankHelpers: 'Top Helpers', rankBtn: 'Ver Ranking Completo',
      libraryTitle: 'A Grande Biblioteca de Aethel', librarySub: 'Todo o conhecimento em um só lugar', libraryDesc: 'Não sabe onde cai a Jewel of Bless? Entre na nossa Wiki oficial para ver todos os mapas e drops.', libraryBtn: 'Ler Guia Completo de Drops',
    },
    rankings: {
      title: 'Salão da Fama', subtitle: 'Os melhores guerreiros do servidor. Atualizado por hora.',
      tabKills: 'Top Honra', tabHelpers: 'Top Helpers', tabMilestones: 'Marcos do Reino',
      colRank: '#', colName: 'Personagem', colClass: 'Classe', colGuild: 'Guilda', colScore: 'Pontuação', lvl: 'Nvl.',
      msGuilds: 'Primeiras Guildas Fundadas', msBosses: 'Primeiras Caçadas Épicas', msHeroes: 'Heróis Pioneiros',
    },
    events: {
      title: 'Invasões e Eventos Globais', subtitle: 'HORÁRIOS SINCRONIZADOS COM O SERVIDOR',
      stateOpen: 'ABERTO', stateRunning: 'EM ANDAMENTO!', stateNext: 'O evento começa em:', opensIn: 'Abre em',
      entryOpen: 'Entrada aberta', loading: 'Sincronizando horários…', serverTime: 'Hora do servidor',
      mission: 'MISSÃO:', loot: 'RECOMPENSA (LOOT):',
      bloodCastle: 'Blood Castle', devilSquare: 'Devil Square', chaosCastle: 'Chaos Castle', kundun: 'Kundun', medusa: 'Medusa', castleSiege: 'Castle Siege',
      descBloodCastle: 'Missão de resgate do Arcanjo. Quebre o portão, destrua a estátua de cristal e entregue a arma divina.',
      lootBloodCastle: 'Jewel of Bless, Jewel of Soul, Jewel of Chaos, Armas de Arcanjo',
      descDevilSquare: 'Sobrevivência extrema por pontos. Resista a ondas de monstros para ganhar experiência massiva.',
      lootDevilSquare: 'Experiência Massiva, Zen, Kundun Boxes',
      descChaosCastle: 'Batalha até a morte todos contra todos. Empurre seus inimigos do castelo em ruínas.',
      lootChaosCastle: 'Jewel of Creation, Itens Excelentes, Bless',
      descIllusionTemple: 'Batalha tática em equipe (Gens). Capture o artefato sagrado e leve para sua base para marcar pontos.',
      lootIllusionTemple: 'Materiais de Fenrir, Experiência Alta, Joias',
      descImperialGuardian: 'Instância diária de sobrevivência. Atravesse o forte de Varka e derrote os chefes.',
      lootImperialGuardian: 'Partes Secromicon, Itens Excelentes de alto nível',
      descCrywolf: 'Evento geral do servidor. Defenda a estátua do Lobo Sagrado das tropas invasoras de Balgass.',
      lootCrywolf: 'Itens Season 4, Horn of Fenrir, Ativa Kanturu Event',
      descKanturu: 'Entre na refinaria de Kanturu Relics, sobreviva às Mãos de Maya e derrote o chefe Nightmare.',
      lootKanturu: 'Itens Excelentes 380, Gemstone, Refinaria Aberta',
      descSelupan: 'Destrua os ovos de aranha em Raklion Hatchery e enfrente a fera gigante Selupan.',
      lootSelupan: 'Itens Socket (Season 4), Esferas Tetra, Armas',
      descKundun: 'Invasão profunda em Kalima 7. Derrote a ilusão do Senhor das Trevas.',
      lootKundun: 'Itens Ancient, Armas nível 380',
      descMedusa: 'Invasão da besta mítica na zona segura do Swamp of Peace.',
      lootMedusa: 'Itens Excelentes High Tier, Pacotes de Joias',
      weeklyOn: 'Todo {day} às {time}',
    },
    days: {
      0: 'domingo', 1: 'segunda-feira', 2: 'terça-feira', 3: 'quarta-feira', 4: 'quinta-feira', 5: 'sexta-feira', 6: 'sábado',
    },
    news: {
      title: 'Notícias', subtitle: 'Mudanças, eventos e manutenções anunciados pela equipe.', readMore: 'Ler mais', all: 'Todas',
      categories: { maintenance: 'Manutenção', event: 'Evento', update: 'Atualização', news: 'Notícia' },
      empty: 'Ainda não há publicações nesta categoria.',
    },
    newsPage: {
      title: 'Notícias do Reino', subtitle: 'Fique por dentro das atualizações, eventos e anúncios importantes.', all: 'Tudo', readMore: 'Ler artigo completo',
      eventsTitle: 'Inauguração do Reino', eventsDesc: 'As portas do Mu Aethel se abrem oficialmente para todos os guerreiros.',
      eventsBody1: 'Guerreiros, a espera acabou. As portas de nosso servidor oficial já estão abertas para todos aqueles corajosos dispostos a forjar seu próprio destino.',
      eventsBody2: 'Entrem e reivindiquem seu lugar na história. Teremos eventos ativos durante a primeira semana e bônus especiais de experiência para os primeiros exploradores.',
      eventsBody3: 'Preparem suas armas, nos vemos no bar de Lorencia!',
      commTitle: 'Contribua com o Reino', commDesc: 'Ajude-nos a manter o servidor online e livre de Pay-to-Win.',
      commBody1: 'Mu Aethel é construído pela e para a comunidade. Nosso compromisso inabalável é manter um servidor equilibrado e livre de mecânicas Pay-to-Win (P2W).',
      commBody2: 'Se você curte sua estadia e quer nos ajudar a custear a hospedagem mensal, proteção Anti-DDoS e garantir futuras atualizações, você pode contribuir através de doações voluntárias.',
      commDonation: 'Doação Voluntária', commBtn: 'Contribuir via PayPal', commNote: 'As doações não concedem vantagens competitivas dentro do jogo.'
    },
    legal: {
      rulesTitle: 'Regras do Servidor', rulesHacks: 'Tolerância Zero a Hacks e Cheats',
      rulesHacksDesc: 'É estritamente proibido o uso de programas de terceiros, injetores, bots (exceto MuHelper oficial), aceleradores de velocidade ou qualquer software que altere o cliente. A detecção resultará em banimento permanente e irrevogável de Conta, IP e HWID.',
      rulesIP: 'Limite de Conexões por IP', rulesIPDesc: 'Para garantir uma economia saudável e competição justa, é permitido um máximo de duas (2) contas conectadas simultaneamente por endereço IP.',
      rulesConduct: 'Conduta e Respeito', rulesConductDesc: 'É exigido respeito para com todos os membros da comunidade. O uso do Chat Global para emitir insultos graves resultará no silenciamento ou bloqueio temporário da conta.',
      rulesFraud: 'Fraudes e Falsidade Ideológica', rulesFraudDesc: 'A administração nunca pedirá sua senha no jogo. Passar-se por um Administrador é motivo para expulsão imediata.',
      termsTitle: 'Termos e Condições', termsDesc1: 'Ao registrar uma conta e se conectar ao Mu Aethel, você aceita automaticamente estes Termos e Condições. Reservamo-nos o direito de desconectar os servidores por motivos de manutenção ou força maior.',
      termsDesc2: 'Propriedade Virtual: Todas as contas, personagens, itens, moedas virtuais e dados gerados são propriedade exclusiva da administração do servidor.',
      termsDesc3: 'Sistema de Doações: Mu Aethel é um servidor Free-to-Play. Qualquer contribuição financeira é considerada uma doação voluntária. Portanto, não há devoluções ou reembolsos sob nenhuma circunstância.',
      privacyTitle: 'Política de Privacidade', privacyDesc1: 'Sua privacidade é fundamental para nós. As informações coletadas durante o registro são usadas estritamente para fins de segurança e funcionamento do servidor.',
      privacyDesc2: 'Uso da informação: O e-mail fornecido será usado exclusivamente para validação da conta, envio de códigos ou notificações críticas. Não enviaremos spam.',
      privacyDesc3: 'Proteção de Dados: Todas as senhas são armazenadas usando métodos de criptografia seguros. Nunca venderemos ou compartilharemos seus dados.'
    },
    economy: {
      title: 'Economia play-to-earn', subtitle: 'Duas moedas, zero dinheiro real. Uma premia o PvP, a outra premia ajudar.',
      noVipTitle: 'Sem sistema VIP', noVipBody: 'Não vendemos experiência, drop, sets nem vantagens de nenhum tipo. Ninguém pode pagar para te superar.',
      honorTitle: 'Honor Tokens', honorTag: 'Moeda de PvP', honorHow: 'Como conseguir:', honorItem1: 'Duelos e abates em zonas PvP', honorItem2: 'Eventos PvP e arenas da equipe', honorItem3: 'Castle Siege e defesa do castelo',
      helperTitle: 'Helper Tokens', helperTag: 'Moeda da comunidade', helperHow: 'Como conseguir:', helperItem1: 'Party com jogadores de nível menor que sobem com você', helperItem2: 'Apoio a contas novas na primeira semana', helperItem3: 'Missões de ajuda atribuídas pela equipe',
    },
    downloads: {
      title: 'Centro de Downloads', subtitle: 'Prepare-se para a batalha',
      clientTitle: 'Cliente Oficial + Launcher', clientBody: 'Instalação limpa de Season 6 Episode 3, já configurada para Mu Aethel.',
      clientDesc: 'Baixe o jogo completo pré-configurado. Inclui o launcher automático que manterá seus arquivos sempre atualizados sem necessidade de patches manuais.',
      clientButton: 'Baixar cliente', btnDirect: '⬇️ Download Direto (Recomendado)', altOptions: 'Opções Alternativas',
      launcherTitle: 'Launcher', launcherBody: 'Atualiza os patches e abre o jogo. Precisa do cliente instalado.', launcherButton: 'Baixar launcher',
      size: 'Tamanho:', version: 'Versão:', verified: 'SHA-256 Verificado ✅', mirror: 'Espelho alternativo',
      toolsTitle: 'Ferramentas do launcher', toolsSubtitle: 'Configuração base caso precise conectar o cliente manualmente.',
      configFile: 'Arquivo de conexão', listFile: 'Lista de servidores', patchTitle: 'Atualização de patches',
      patchBody: 'O launcher compara a versão local com o servidor de patches e baixa só os arquivos alterados. Se um patch falhar, apague a pasta indicada e abra o launcher de novo.',
      copy: 'Copiar', copied: 'Copiado', note: '⚠ Se o antivírus bloquear o launcher, adicione a pasta às exclusões (Falso positivo comum em clientes de Mu Online).',
      requirements: 'Requisitos', reqTitle: 'Requisitos Mínimos:', reqDesc: 'Windows 7/10/11 · 2GB RAM · DirectX 9.0c · 3GB Espaço Livre',
      requirementsBody: 'Windows 10/11 · 4 GB RAM · DirectX 9.0c · 6 GB livres',
    },
    footer: {
      community: 'Comunidade', support: 'Suporte', serverStatus: 'Status do servidor', gameServer: 'GameServer Principal',
      connectionData: 'Dados de conexão', online: 'Online', offline: 'Offline', ip: 'IP', port: 'Porta',
      discord: 'Servidor do Discord', facebook: 'Grupo do Facebook', whatsapp: 'Grupo do WhatsApp', instagram: 'Instagram Oficial', donate: 'Apoiar Servidor (Doar)',
      supportBody: 'Reporte de bugs e dúvidas de conta pelo canal de tickets do Discord.', rules: 'Regras do servidor', terms: 'Termos de uso', privacy: 'Privacidade',
      rights: 'Todos os direitos reservados.', disclaimer: 'Mu Aethel é um servidor privado sem fins lucrativos. MU Online é marca registrada da Webzen Inc.',
    },
    dash: {
      armory: 'Arsenal de', subtitle: 'Gerencie seu império, guild e recursos.', logout: 'Sair', 
      guildWindow: 'Janela da Guild', noGuild: 'Sem Guild', noGuildDesc: 'Seus personagens não pertencem a uma Guild ativa.', 
      rank: 'Posição Global', unranked: 'Sem rank', chars: 'Seus Personagens', lvl: 'Nível', resets: 'Resets', 
      zen: 'Zen', exp: 'Experiência', noChars: 'Você ainda não criou nenhum personagem.', soon: 'Equipamento em breve', 
      members: 'Membros', online: 'Online', state: 'Estado de Loren', nocastle: 'Sem Castelo',
      securityTitle: 'Opções e Segurança', passTitle: 'Mudar Senha', passDesc: 'Para sua segurança, não pedimos mais sua senha atual aqui. Enviaremos um pergaminho mágico diretamente para seu e-mail associado para forjar uma nova.',
      passBtn: 'Solicitar via E-mail', passSuccess: 'Link enviado! Verifique seu e-mail.',
      pinTitle: 'Código PIN (7 Dígitos)', pinDesc: 'Necessário para deletar personagens ou desfazer sua Guild no jogo.',
      pinNew: 'Novo PIN', pinBtn: 'Atualizar PIN', pinForgot: 'Esqueceu seu código atual?', pinEmail: 'Enviar para meu e-mail', pinSuccess: 'PIN atualizado com sucesso.', pinEmailSent: 'O código PIN foi enviado para o seu e-mail.',
      '2faTitle': 'Proteção Avançada (2FA)', '2faDesc': 'Em breve você poderá vincular sua conta ao Google Authenticator para adicionar uma camada de segurança impenetrável.', '2faBtn': 'Bloqueado',
      panicTitle: 'Botão de Pânico', panicDesc: 'Desconecta sua conta do servidor imediatamente e bloqueia o acesso. A verificação por e-mail será necessária para desbloqueá-la.', panicBtn: 'Congelar Conta', panicConfirm: 'TEM CERTEZA? Sua conta será desconectada e bloqueada.', panicLoading: 'Congelando...',
      invoking: 'Invocando...', loading: 'Carregando pergaminhos...', connError: 'Erro de conexão.'
    },
    guia: {
      pageTag: 'A Biblioteca do Reino', pageTitle: 'Guia Oficial de Drops & Spots', pageDesc: 'Todo o conhecimento do Mu Aethel em um só lugar.',
      table1Title: '🗺️ Zonas de Up Básicas e Médias', table2Title: '🌋 Zonas Perigosas (End-Game)', table3Title: '👹 Invasões e Chefes Mundiais (World Bosses)',
      colMap: 'Mapa', colLvl: 'Faixa de Nível', colMobs: 'Monstros Notáveis', colDrop: 'Drop Principal', colTime: 'Aparição', colGuaranteed: 'Saque Garantido:',
      zonasBase: [
        { map: "Lorencia / Noria / Elbeland", mobs: "Spiders, Goblins, Lich, Mutans", lvl: "1 - 30", drop: "Itens Básicos, Scroll of Fireball, Heal, Zen" },
        { map: "Devias (1, 2, 3)", mobs: "Elite Yeti, Assassin, Ice Queen", lvl: "30 - 60", drop: "Itens tier 2, Horn of Uniria, Jewel of Chaos" },
        { map: "Dungeon (1, 2, 3)", mobs: "Skeleton, Poison Bull, Gorgon", lvl: "40 - 70", drop: "Jewel of Bless, Armas +3 / +4, Poison Ring" },
        { map: "Atlans (1, 2, 3)", mobs: "Bahamut, Vepar, Hydra", lvl: "70 - 100", drop: "Jewel of Soul, Armas Aquáticas, Cajas Ribbon" },
        { map: "Lost Tower (1 a 7)", mobs: "Shadow, Poison Knight, Balrog", lvl: "80 - 120", drop: "Jewel of Bless, Jewel of Soul, Itens +5, Scroll of Twisting Slash" }
      ],
      zonasAltas: [
        { map: "Tarkan (1, 2)", mobs: "Mutant, Iron Wheel, Zaikan", lvl: "130 - 180", drop: "Itens Excelentes baixos, Jewel of Life" },
        { map: "Icarus", mobs: "Alquamos, Mega Crust, Dark Phoenix", lvl: "170 - 230", drop: "Loch's Feather, Crest of Monarch, Itens Excelentes médios" },
        { map: "Kanturu (Ruins & Relics)", mobs: "Splinter Wolf, Iron Knight", lvl: "250 - 350", drop: "Gemstone, Itens 380 Não-Excelentes, Jewel of Harmony" },
        { map: "Raklion", mobs: "Ice Walker, Iron Knight, Giant Mammoth", lvl: "300 - 400", drop: "Itens Socket (Season 4), Esferas Vazias, Itens Excelentes altos" },
        { map: "Vulcanus (Mapa Gens)", mobs: "Zombies, Gladiators, Ashy", lvl: "300+", drop: "Drop aumentado x1.5, Itens 380, Jewel of Creation" }
      ],
      bosses: [
        { name: "Invasão de Dourados", map: "Mapas aleatórios", time: "A cada 4 horas", drop: "Kundun Boxes +1 a +5 (Dropam Itens Excelentes)" },
        { name: "White Wizard", map: "Lorencia, Noria, Devias", time: "A cada 2 horas", drop: "Ring of Magic (Wizard's Ring), Jewel of Bless" },
        { name: "Kundun (Ilusão)", map: "Kalima 7", time: "Evento Diário 20:00", drop: "Itens Ancient (Set completo), Armas 380 Excelentes" },
        { name: "Selupan", map: "Raklion Hatchery", time: "Ao abrir o ovo", drop: "Armas e Escudos Socket (3 a 5 slots), Esferas de alto nível" },
        { name: "Medusa", map: "Swamp of Peace", time: "Domingos 22:00", drop: "Pacotes de Joias (x10, x20, x30), Itens Excelentes 380" }
      ]
    },
    auth: {
      loginTitle: 'Entrar no Reino', registerTitle: 'Criar uma Conta', user: 'Nome de Usuário', email: 'E-mail', pass: 'Senha',
      passConfirm: 'Repetir Senha', btnLogin: 'Fazer Login', btnRegister: 'Registrar Agora', forgot: 'Esqueceu sua senha?',
      noAccount: 'Não tem uma conta?', haveAccount: 'Já tem uma conta?', captcha: 'Validação de Segurança', rulesConfirm: 'Eu aceito as Regras do Servidor e Política de Privacidade', userHelp: 'Entre 4 e 10 caracteres. Usado para entrar no jogo.'
    },
  },
};

export function getTranslation(lang, path) {
  const read = (dict) =>
    path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), dict);

  const value = read(translations[lang]);
  if (value !== undefined) return value;

  const fallback = read(translations[DEFAULT_LANG]);
  return fallback !== undefined ? fallback : path;
}

export function interpolate(text, vars = {}) {
  if (typeof text !== 'string') return text;
  return text.replace(/\{(\w+)\}/g, (match, key) =>
    vars[key] !== undefined ? vars[key] : match
  );
}
