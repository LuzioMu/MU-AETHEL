'use client';

// ============================================================================
//  MU AETHEL - Sistema de Traducciones (i18n) + Base de Datos
// ============================================================================

import React, { createContext, useContext, useState } from 'react';

const translations = {
  es: {
    meta: { title: 'Mu Aethel - Season 6 Episode 3', tagline: 'SERVIDOR SLOW / MEDIUM' },
    nav: { home: 'Inicio', news: 'Noticias', economy: 'Economía', downloads: 'Descargas', playNow: 'Jugar ahora', guide: 'Guías', register: 'Crear Cuenta', login: 'Ingresar' },
    hero: {
      title: 'MU AETHEL', subtitle: 'SEASON 6 EPISODE 3', claim: 'Una experiencia clásica donde el poder se gana en el juego.',
      badge1: '🛡️ 100% Play-to-Earn', badge2: '⚔️ Cero Ventajas Pagas', badge3: '💎 Economía por Mérito',
      ctaPrimary: 'Descargar Cliente', ctaSecondary: 'Ver Economía',
      statExp: 'Experiencia', statDrop: 'Drop', statReset: 'Resets', statPlayers: 'Jugadores Online',
    },
    features: {
      subtitle: '¿QUÉ HACE ÚNICO A MU AETHEL?', mainTitle: 'Modificaciones & Características',
      bossesTitle: 'Jefes & Bosses Custom', bossesTag: 'PVE EXCLUSIVO', bossesDesc: 'World Bosses únicos con mecánicas avanzadas y eventos de invasión con drops exclusivos.',
      mapsTitle: 'Mapas Remasterizados', mapsTag: 'ZONAS PVP / SAFE', mapsDesc: 'Zonas de leveo optimizadas y zonas especiales de PvP abierto sin penalizaciones de PK.',
      balanceTitle: 'Balance PvP Season 6', balanceTag: 'EQUILIBRIO TOTAL', balanceDesc: 'Fórmulas ajustadas en las 7 clases para combates equilibrados en duelos y Castle Siege.',
      economyTitle: 'Economía Play-to-Earn', economyTag: 'SISTEMA ÚNICO', economyDesc: 'Obtené monedas por eliminaciones en eventos PvP y por ayudar a jugadores nuevos a subir de nivel.',
    },
    events: {
      title: 'Invasiones & Eventos', subtitle: 'Horarios sincronizados en tiempo real', serverTime: 'Hora del Servidor:',
      stateOpen: 'ABIERTO', stateNext: 'PRÓXIMO', weeklyOn: 'Domingos 20:00',
      bloodCastle: 'Blood Castle', descBloodCastle: 'Misión de rescate del Arcángel',
      devilSquare: 'Devil Square', descDevilSquare: 'Supervivencia por experiencia',
      chaosCastle: 'Chaos Castle', descChaosCastle: 'Batalla a muerte todos contra todos',
      kundun: 'Ilusion of Kundun', descKundun: 'Invasión en Kalima',
      medusa: 'Medusa', descMedusa: 'Invasión en Swamp of Peace',
      castleSiege: 'Castle Siege', descCastleSiege: 'Batalla épica por el castillo de Loren',
    },
    news: { title: 'Últimas Novedades', subtitle: 'Mantente al tanto de las actualizaciones del servidor', all: 'Todo', categories: { maintenance: 'Mantenimiento', event: 'Evento', update: 'Actualización', news: 'Noticia' }, readMore: 'Leer noticia completa' },
    newsPage: { title: 'Novedades del Reino', subtitle: 'Mantente al tanto de actualizaciones, eventos y transparencia.', selectArticle: 'Selecciona una noticia de la lista para leer los detalles.' },
    economy: {
      title: 'Economía Play-to-Earn', subtitle: 'Dos monedas internas. Cero dinero real. Una premia el combate, la otra premia ayudar.',
      noVipTitle: 'Sin sistema VIP ni ventajas vendidas', noVipBody: 'No vendemos experiencia, drop ni equipamiento. Nadie puede pagar para superarte: si alguien tiene mejor equipo, jugó más o jugó mejor.',
      honorTitle: 'Honor Tokens', honorTag: 'Moneda de PvP', honorHow: 'Cómo se consiguen:', honorItem1: 'Eliminaciones en Zonas Especiales de PvP', honorItem2: 'Victorias y participación en Eventos PvP dedicados', honorItem3: 'Defensa y batallas de Castle Siege',
      helperTitle: 'Helper Tokens', helperTag: 'Moneda de Comunidad', helperHow: 'Cómo se consiguen:', helperItem1: 'Party con jugadores nuevos durante su primera semana', helperItem2: 'Ayudar a subir de nivel a personajes con menor cantidad de resets', helperItem3: 'Incentivos de cooperación y soporte en la comunidad',
    },
    downloads: { title: 'Centro de Descargas', subtitle: 'Descargá el cliente oficial con el Launcher integrado para empezar a jugar.', clientTitle: 'Cliente Oficial + Launcher Integrado', clientDesc: 'Incluye el juego completo configurado, música, sonidos y el Launcher oficial con actualización automática.', btnDownload: 'Descargar Cliente Completo', reqTitle: 'Requisitos del Sistema', reqMin: 'Mínimos: Windows 7/10/11, 2GB RAM, GPU Integrada', reqRec: 'Recomendados: Windows 10/11, 4GB RAM, GPU Dedicada' },
    footer: { serverStatus: 'Estado del Servidor', gameServer: 'GameServer Principal', online: 'En Línea', ip: 'IP de Conexión', port: 'Puerto', community: 'Nuestra Comunidad', discord: 'Servidor de Discord', facebook: 'Grupo de Facebook', whatsapp: 'Grupo de WhatsApp', support: 'Soporte & Reglas', supportBody: '¿Necesitas ayuda? Contáctanos.', rules: 'Reglas del Servidor', terms: 'Términos y Condiciones', privacy: 'Política de Privacidad', rights: 'Todos los derechos reservados.', disclaimer: 'Mu Online es una marca registrada de Webzen Inc.' },
    guia: {
      pageTag: 'La Biblioteca del Reino', pageTitle: 'Guía Oficial de Drops & Spots', pageDesc: 'Todo el conocimiento de Mu Aethel en un solo lugar.', table1Title: '🗺️ Zonas de Leveo Básicas y Medias', table2Title: '🌋 Zonas Peligrosas (End-Game)', table3Title: '👹 Invasiones y Jefes Mundiales (World Bosses)', colMap: 'Mapa', colLvl: 'Rango Nivel', colMobs: 'Monstruos Destacados', colDrop: 'Drop Principal', colTime: 'Aparición', colGuaranteed: 'Botín Asegurado:',
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
      loginTitle: 'Ingresar al Reino',
      registerTitle: 'Crear una Cuenta',
      user: 'Nombre de Usuario',
      email: 'Correo Electrónico',
      pass: 'Contraseña',
      passConfirm: 'Repetir Contraseña',
      btnLogin: 'Iniciar Sesión',
      btnRegister: 'Registrarse Ahora',
      forgot: '¿Olvidaste tu contraseña?',
      noAccount: '¿No tienes cuenta?',
      haveAccount: '¿Ya tienes una cuenta?',
      captcha: 'Validación de Seguridad',
      rulesConfirm: 'Acepto las Reglas del Servidor y la Política de Privacidad',
      userHelp: 'Entre 4 y 10 caracteres. Se usará para entrar al juego.'
    },
    dash: {
      armory: 'Armería de', subtitle: 'Gestiona tu imperio, guild y recursos.', logout: 'Cerrar Sesión', 
      guildWindow: 'Ventana Guild', noGuild: 'Sin Gremio', noGuildDesc: 'Tus personajes no pertenecen a ningún Guild activo.', 
      rank: 'Posición Global', unranked: 'Sin rango', chars: 'Tus Personajes', lvl: 'Nivel', resets: 'Resets', 
      zen: 'Zen', exp: 'Experiencia', noChars: 'Aún no has creado ningún personaje.', soon: 'Equipo próximamente', 
      members: 'Miembros', online: 'Online', state: 'Estado de Loren', nocastle: 'Sin Castillo'
    }
  },
  en: {
    meta: { title: 'Mu Aethel - Season 6 Episode 3', tagline: 'SLOW / MEDIUM SERVER' },
    nav: { home: 'Home', news: 'News', economy: 'Economy', downloads: 'Downloads', playNow: 'Play Now', guide: 'Guides', register: 'Sign Up', login: 'Login' },
    hero: {
      title: 'MU AETHEL', subtitle: 'SEASON 6 EPISODE 3', claim: 'A classic experience where power is earned strictly in-game.',
      badge1: '🛡️ 100% Play-to-Earn', badge2: '⚔️ Zero Paid Perks', badge3: '💎 Merit-Based Economy',
      ctaPrimary: 'Download Client', ctaSecondary: 'View Economy',
      statExp: 'Experience', statDrop: 'Drop Rate', statReset: 'Resets', statPlayers: 'Online Players',
    },
    features: {
      subtitle: 'WHAT MAKES MU AETHEL UNIQUE?', mainTitle: 'Modifications & Features',
      bossesTitle: 'Custom Bosses', bossesTag: 'EXCLUSIVE PVE', bossesDesc: 'Unique World Bosses with advanced mechanics and invasion events with exclusive drops.',
      mapsTitle: 'Remastered Maps', mapsTag: 'PVP / SAFE ZONES', mapsDesc: 'Optimized leveling spots and special open PvP zones with no PK penalties.',
      balanceTitle: 'Season 6 PvP Balance', balanceTag: 'TOTAL BALANCE', balanceDesc: 'Adjusted formulas for all 7 classes ensuring fair fights in duels and Castle Siege.',
      economyTitle: 'Play-to-Earn Economy', economyTag: 'UNIQUE SYSTEM', economyDesc: 'Earn tokens through kills in PvP events and by helping new players level up.',
    },
    events: {
      title: 'Invasions & Events', subtitle: 'Schedules synchronized in real time', serverTime: 'Server Time:',
      stateOpen: 'OPEN', stateNext: 'UPCOMING', weeklyOn: 'Sundays 20:00',
      bloodCastle: 'Blood Castle', descBloodCastle: 'Archangel rescue mission',
      devilSquare: 'Devil Square', descDevilSquare: 'Survival for extreme experience',
      chaosCastle: 'Chaos Castle', descChaosCastle: 'Free-for-all deathmatch',
      kundun: 'Illusion of Kundun', descKundun: 'Kalima Invasion',
      medusa: 'Medusa', descMedusa: 'Swamp of Peace Invasion',
      castleSiege: 'Castle Siege', descCastleSiege: 'Epic battle for the Valley of Loren',
    },
    news: { title: 'Latest News', subtitle: 'Stay up to date with server updates', all: 'All', categories: { maintenance: 'Maintenance', event: 'Event', update: 'Update', news: 'News' }, readMore: 'Read full article' },
    newsPage: { title: 'Realm News', subtitle: 'Stay updated on patches, events, and transparency.', selectArticle: 'Select an article from the list to read the details.' },
    economy: {
      title: 'Play-to-Earn Economy', subtitle: 'Two internal tokens. Zero real money. One rewards combat, the other rewards helping.',
      noVipTitle: 'No VIP System or Paid Perks', noVipBody: 'We do not sell experience, drops, or gear. Nobody can pay to win: better gear means more effort or better strategy.',
      honorTitle: 'Honor Tokens', honorTag: 'PvP Currency', honorHow: 'How to earn:', honorItem1: 'Kills in Special PvP Zones', honorItem2: 'Wins and participation in dedicated PvP Events', honorItem3: 'Castle Siege defense and guild battles',
      helperTitle: 'Helper Tokens', helperTag: 'Community Currency', helperHow: 'How to earn:', helperItem1: 'Party with new players during their first week', helperItem2: 'Helping lower-reset players level up', helperItem3: 'Community cooperation and support incentives',
    },
    downloads: { title: 'Download Center', subtitle: 'Download the official client with the integrated Launcher to start playing.', clientTitle: 'Official Client + Integrated Launcher', clientDesc: 'Includes full game files, sound effects, music, and the auto-updating launcher.', btnDownload: 'Download Full Client', reqTitle: 'System Requirements', reqMin: 'Minimum: Windows 7/10/11, 2GB RAM, Integrated GPU', reqRec: 'Recommended: Windows 10/11, 4GB RAM, Dedicated GPU' },
    footer: { serverStatus: 'Server Status', gameServer: 'Main GameServer', online: 'Online', ip: 'Connection IP', port: 'Port', community: 'Our Community', discord: 'Discord Server', facebook: 'Facebook Group', whatsapp: 'WhatsApp Group', support: 'Support & Rules', supportBody: 'Need help? Contact us.', rules: 'Server Rules', terms: 'Terms of Service', privacy: 'Privacy Policy', rights: 'All rights reserved.', disclaimer: 'Mu Online is a registered trademark of Webzen Inc.' },
    guia: {
      pageTag: 'The Kingdom Library', pageTitle: 'Official Drops & Spots Guide', pageDesc: 'All Mu Aethel knowledge in one place.', table1Title: '🗺️ Basic & Medium Leveling Zones', table2Title: '🌋 Dangerous Zones (End-Game)', table3Title: '👹 Invasions & World Bosses', colMap: 'Map', colLvl: 'Level Range', colMobs: 'Notable Monsters', colDrop: 'Main Drop', colTime: 'Spawn Time', colGuaranteed: 'Guaranteed Loot:',
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
      loginTitle: 'Enter the Kingdom',
      registerTitle: 'Create an Account',
      user: 'Username',
      email: 'Email Address',
      pass: 'Password',
      passConfirm: 'Repeat Password',
      btnLogin: 'Login',
      btnRegister: 'Register Now',
      forgot: 'Forgot your password?',
      noAccount: 'Don\'t have an account?',
      haveAccount: 'Already have an account?',
      captcha: 'Security Validation',
      rulesConfirm: 'I accept the Server Rules and Privacy Policy',
      userHelp: 'Between 4 and 10 characters. Used to log into the game.'
    },
    dash: {
      armory: 'Armory of', subtitle: 'Manage your empire, guild and resources.', logout: 'Logout', 
      guildWindow: 'Guild Window', noGuild: 'No Guild', noGuildDesc: 'Your characters do not belong to an active Guild.', 
      rank: 'Global Rank', unranked: 'Unranked', chars: 'Your Characters', lvl: 'Level', resets: 'Resets', 
      zen: 'Zen', exp: 'Experience', noChars: 'You have not created any characters yet.', soon: 'Equipment coming soon', 
      members: 'Members', online: 'Online', state: 'Loren Status', nocastle: 'No Castle'
    }
  },
  pt: {
    meta: { title: 'Mu Aethel - Season 6 Episode 3', tagline: 'SERVIDOR SLOW / MEDIUM' },
    nav: { home: 'Início', news: 'Notícias', economy: 'Economia', downloads: 'Downloads', playNow: 'Jogar Agora', guide: 'Guias', register: 'Criar Conta', login: 'Entrar' },
    hero: {
      title: 'MU AETHEL', subtitle: 'SEASON 6 EPISODE 3', claim: 'Uma experiência clássica onde o poder é conquistado no jogo.',
      badge1: '🛡️ 100% Play-to-Earn', badge2: '⚔️ Sem Vantagens Pagas', badge3: '💎 Economia por Mérito',
      ctaPrimary: 'Baixar Cliente', ctaSecondary: 'Ver Economia',
      statExp: 'Experiência', statDrop: 'Drop', statReset: 'Resets', statPlayers: 'Jogadores Online',
    },
    features: {
      subtitle: 'O QUE TORNA O MU AETHEL ÚNICO?', mainTitle: 'Modificações & Características',
      bossesTitle: 'Bosses Customizados', bossesTag: 'PVE EXCLUSIVO', bossesDesc: 'World Bosses únicos com mecânicas avançadas e invasões com drops exclusivos.',
      mapsTitle: 'Mapas Remasterizados', mapsTag: 'ZONAS PVP / SAFE', mapsDesc: 'Locais de treino otimizados e zonas de PvP aberto sem penalidade de PK.',
      balanceTitle: 'Balanço PvP Season 6', balanceTag: 'EQUILÍBRIO TOTAL', balanceDesc: 'Fórmulas ajustadas nas 7 classes para combates justos em duelos e Castle Siege.',
      economyTitle: 'Economia Play-to-Earn', economyTag: 'SISTEMA ÚNICO', economyDesc: 'Ganhe moedas por eliminações em eventos PvP e por ajudar novos jogadores.',
    },
    events: {
      title: 'Invasões e Eventos', subtitle: 'Horários sincronizados em tempo real', serverTime: 'Hora do Servidor:',
      stateOpen: 'ABERTO', stateNext: 'PRÓXIMO', weeklyOn: 'Domingos 20:00',
      bloodCastle: 'Blood Castle', descBloodCastle: 'Missão de resgate do Arcanjo',
      devilSquare: 'Devil Square', descDevilSquare: 'Sobrevivência por experiência extrema',
      chaosCastle: 'Chaos Castle', descChaosCastle: 'Batalha até a morte todos contra todos',
      kundun: 'Illusion of Kundun', descKundun: 'Invasão em Kalima',
      medusa: 'Medusa', descMedusa: 'Invasão em Swamp of Peace',
      castleSiege: 'Castle Siege', descCastleSiege: 'Batalha épica pelo Vale de Loren',
    },
    news: { title: 'Últimas Notícias', subtitle: 'Fique por dentro das atualizações do servidor', all: 'Tudo', categories: { maintenance: 'Manutenção', event: 'Evento', update: 'Atualização', news: 'Notícia' }, readMore: 'Ler artigo completo' },
    newsPage: { title: 'Notícias do Reino', subtitle: 'Fique por dentro das atualizações, eventos e transparência.', selectArticle: 'Selecione uma notícia na lista para ler os detalhes.' },
    economy: {
      title: 'Economia Play-to-Earn', subtitle: 'Duas moedas internas. Zero dinheiro real. Uma premia o combate, a outra premia ajudar.',
      noVipTitle: 'Sem Sistema VIP ou Vantagens Pagas', noVipBody: 'Não vendemos experiência, drops ou itens. Ninguém pode pagar para vencer.',
      honorTitle: 'Honor Tokens', honorTag: 'Moeda de PvP', honorHow: 'Como obter:', honorItem1: 'Eliminações em Zonas Especiais de PvP', honorItem2: 'Vitórias e participação em Eventos PvP dedicados', honorItem3: 'Defesa e batalhas no Castle Siege',
      helperTitle: 'Helper Tokens', helperTag: 'Moeda da Comunidade', helperHow: 'Como obter:', helperItem1: 'Party com novos jogadores na primeira semana', helperItem2: 'Ajudar jogadores com menos resets a subir de nível', helperItem3: 'Cooperação e suporte na comunidade',
    },
    downloads: { title: 'Centro de Downloads', subtitle: 'Baixe o cliente oficial com o Launcher integrado para começar a jogar.', clientTitle: 'Cliente Oficial + Launcher Integrado', clientDesc: 'Inclui o jogo completo, áudio, música e o Launcher oficial com atualização automática.', btnDownload: 'Baixar Cliente Completo', reqTitle: 'Requisitos do Sistema', reqMin: 'Mínimos: Windows 7/10/11, 2GB RAM, GPU Integrada', reqRec: 'Recomendados: Windows 10/11, 4GB RAM, GPU Dedicada' },
    footer: { serverStatus: 'Status do Servidor', gameServer: 'GameServer Principal', online: 'Online', ip: 'IP de Conexão', port: 'Porta', community: 'Nossa Comunidade', discord: 'Servidor do Discord', facebook: 'Grupo do Facebook', whatsapp: 'Grupo do WhatsApp', support: 'Suporte e Regras', supportBody: 'Precisa de ajuda? Fale conosco.', rules: 'Regras do Servidor', terms: 'Termos de Serviço', privacy: 'Política de Privacidade', rights: 'Todos os direitos reservados.', disclaimer: 'Mu Online é uma marca registrada da Webzen Inc.' },
    guia: {
      pageTag: 'A Biblioteca do Reino', pageTitle: 'Guia Oficial de Drops & Spots', pageDesc: 'Todo o conhecimento do Mu Aethel em um só lugar.', table1Title: '🗺️ Zonas de Up Básicas e Médias', table2Title: '🌋 Zonas Perigosas (End-Game)', table3Title: '👹 Invasões e Chefes Mundiais (World Bosses)', colMap: 'Mapa', colLvl: 'Faixa de Nível', colMobs: 'Monstros Notáveis', colDrop: 'Drop Principal', colTime: 'Aparição', colGuaranteed: 'Saque Garantido:',
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
      loginTitle: 'Entrar no Reino',
      registerTitle: 'Criar uma Conta',
      user: 'Nome de Usuário',
      email: 'E-mail',
      pass: 'Senha',
      passConfirm: 'Repetir Senha',
      btnLogin: 'Fazer Login',
      btnRegister: 'Registrar Agora',
      forgot: 'Esqueceu sua senha?',
      noAccount: 'Não tem uma conta?',
      haveAccount: 'Já tem uma conta?',
      captcha: 'Validação de Segurança',
      rulesConfirm: 'Eu aceito as Regras do Servidor e Política de Privacidade',
      userHelp: 'Entre 4 e 10 caracteres. Usado para entrar no jogo.'
    },
    dash: {
      armory: 'Arsenal de', subtitle: 'Gerencie seu império, guild e recursos.', logout: 'Sair', 
      guildWindow: 'Janela da Guild', noGuild: 'Sem Guild', noGuildDesc: 'Seus personagens não pertencem a uma Guild ativa.', 
      rank: 'Posição Global', unranked: 'Sem rank', chars: 'Seus Personagens', lvl: 'Nível', resets: 'Resets', 
      zen: 'Zen', exp: 'Experiência', noChars: 'Você ainda não criou nenhum personagem.', soon: 'Equipamento em breve', 
      members: 'Membros', online: 'Online', state: 'Estado de Loren', nocastle: 'Sem Castelo'
    }
  },
};

const I18nContext = createContext();

export function I18nProvider({ children, initialLang = 'es' }) {
  const [lang, setLang] = useState(initialLang);

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang] || translations.es;

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n debe ser usado dentro de un I18nProvider');
  }
  return context;
}
