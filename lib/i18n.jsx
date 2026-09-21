'use client';

// ============================================================================
//  MU AETHEL - Sistema de Traducciones (i18n)
// ============================================================================

import React, { createContext, useContext, useState } from 'react';

const translations = {
  es: {
    meta: {
      title: 'Mu Aethel - Season 6 Episode 3',
      tagline: 'SERVIDOR SLOW / MEDIUM - SEASON 6 EPISODE 3',
    },
    nav: {
      home: 'Inicio',
      news: 'Noticias',
      economy: 'Economía',
      downloads: 'Descargas',
      playNow: 'Jugar ahora',
    },
    hero: {
      title: 'Acá nadie compra su poder. Se lo gana.',
      claim: 'Sin VIP, sin packs, sin ventajas pagas. Cada set, cada ala y cada joya salen del esfuerzo propio, de la party que armaste y del PvP que ganaste.',
      body: 'Mu Aethel es un servidor libre de pay-to-win. Una economía basada en el esfuerzo, eventos con recompensas reales y dos monedas internas para premiar el combate y el compañerismo.',
      ctaPrimary: 'Descargar Cliente',
      ctaSecondary: 'Cómo funciona la economía',
      statExp: 'Experiencia',
      statDrop: 'Drop',
      statReset: 'Resets',
      statPlayers: 'Jugadores Online',
    },
    features: {
      subtitle: '¿QUÉ HACE ÚNICO A MU AETHEL?',
      mainTitle: 'Modificaciones & Características',
      bossesTitle: 'Jefes & Bosses Custom',
      bossesTag: 'PVE EXCLUSIVO',
      bossesDesc: 'World Bosses únicos con mecánicas avanzadas y eventos de invasión con drops exclusivos.',
      mapsTitle: 'Mapas Remasterizados',
      mapsTag: 'ZONAS PVP / SAFE',
      mapsDesc: 'Zonas de leveo optimizadas y zonas especiales de PvP abierto sin penalizaciones de PK.',
      balanceTitle: 'Balance PvP Season 6',
      balanceTag: 'EQUILIBRIO TOTAL',
      balanceDesc: 'Fórmulas ajustadas en las 7 clases para combates equilibrados en duelos y Castle Siege.',
      economyTitle: 'Economía Play-to-Earn',
      economyTag: 'SISTEMA ÚNICO',
      economyDesc: 'Obtené monedas por eliminaciones en eventos PvP y por ayudar a jugadores nuevos a subir de nivel.',
    },
    economy: {
      title: 'Economía Play-to-Earn',
      subtitle: 'Dos monedas internas. Cero dinero real. Una premia el combate, la otra premia ayudar.',
      noVipTitle: 'Sin sistema VIP ni ventajas vendidas',
      noVipBody: 'No vendemos experiencia, drop ni equipamiento. Nadie puede pagar para superarte: si alguien tiene mejor equipo, jugó más o jugó mejor.',
      honorTitle: 'Honor Tokens',
      honorTag: 'Moneda de PvP',
      honorHow: 'Cómo se consiguen:',
      honorItem1: 'Eliminaciones en Zonas Especiales de PvP',
      honorItem2: 'Victorias y participación en Eventos PvP dedicados',
      honorItem3: 'Defensa y batallas de Castle Siege',
      helperTitle: 'Helper Tokens',
      helperTag: 'Moneda de Comunidad',
      helperHow: 'Cómo se consiguen:',
      helperItem1: 'Party con jugadores nuevos durante su primera semana',
      helperItem2: 'Ayudar a subir de nivel a personajes con menor cantidad de resets',
      helperItem3: 'Incentivos de cooperación y soporte en la comunidad',
    },
    downloads: {
      title: 'Centro de Descargas',
      subtitle: 'Descargá el cliente oficial con el Launcher integrado para empezar a jugar.',
      clientTitle: 'Cliente Oficial + Launcher Integrado',
      clientDesc: 'Incluye el juego completo configurado, música, sonidos y el Launcher oficial con actualización automática.',
      btnDownload: 'Descargar Cliente Completo',
      reqTitle: 'Requisitos del Sistema',
      reqMin: 'Mínimos: Windows 7/10/11, 2GB RAM, GPU Integrada',
      reqRec: 'Recomendados: Windows 10/11, 4GB RAM, GPU Dedicada',
    },
  },
  en: {
    meta: {
      title: 'Mu Aethel - Season 6 Episode 3',
      tagline: 'SLOW / MEDIUM SERVER - SEASON 6 EPISODE 3',
    },
    nav: {
      home: 'Home',
      news: 'News',
      economy: 'Economy',
      downloads: 'Downloads',
      playNow: 'Play Now',
    },
    hero: {
      title: 'Nobody buys power here. You earn it.',
      claim: 'No VIP, no packs, no paid advantages. Every set, wing, and jewel comes from effort, teamwork, and won PvP.',
      body: 'Mu Aethel is a 100% play-to-earn server. An effort-based economy, events with real rewards, and two internal tokens rewarding combat and teamwork.',
      ctaPrimary: 'Download Client',
      ctaSecondary: 'How Economy Works',
      statExp: 'Experience',
      statDrop: 'Drop Rate',
      statReset: 'Resets',
      statPlayers: 'Online Players',
    },
    features: {
      subtitle: 'WHAT MAKES MU AETHEL UNIQUE?',
      mainTitle: 'Modifications & Features',
      bossesTitle: 'Custom Bosses',
      bossesTag: 'EXCLUSIVE PVE',
      bossesDesc: 'Unique World Bosses with advanced mechanics and invasion events with exclusive drops.',
      mapsTitle: 'Remastered Maps',
      mapsTag: 'PVP / SAFE ZONES',
      mapsDesc: 'Optimized leveling spots and special open PvP zones with no PK penalties.',
      balanceTitle: 'Season 6 PvP Balance',
      balanceTag: 'TOTAL BALANCE',
      balanceDesc: 'Adjusted formulas for all 7 classes ensuring fair fights in duels and Castle Siege.',
      economyTitle: 'Play-to-Earn Economy',
      economyTag: 'UNIQUE SYSTEM',
      economyDesc: 'Earn tokens through kills in PvP events and by helping new players level up.',
    },
    economy: {
      title: 'Play-to-Earn Economy',
      subtitle: 'Two internal tokens. Zero real money. One rewards combat, the other rewards helping.',
      noVipTitle: 'No VIP System or Paid Perks',
      noVipBody: 'We do not sell experience, drops, or gear. Nobody can pay to win: better gear means more effort or better strategy.',
      honorTitle: 'Honor Tokens',
      honorTag: 'PvP Currency',
      honorHow: 'How to earn:',
      honorItem1: 'Kills in Special PvP Zones',
      honorItem2: 'Wins and participation in dedicated PvP Events',
      honorItem3: 'Castle Siege defense and guild battles',
      helperTitle: 'Helper Tokens',
      helperTag: 'Community Currency',
      helperHow: 'How to earn:',
      helperItem1: 'Party with new players during their first week',
      helperItem2: 'Helping lower-reset players level up',
      helperItem3: 'Community cooperation and support incentives',
    },
    downloads: {
      title: 'Download Center',
      subtitle: 'Download the official client with the integrated Launcher to start playing.',
      clientTitle: 'Official Client + Integrated Launcher',
      clientDesc: 'Includes full game files, sound effects, music, and the auto-updating launcher.',
      btnDownload: 'Download Full Client',
      reqTitle: 'System Requirements',
      reqMin: 'Minimum: Windows 7/10/11, 2GB RAM, Integrated GPU',
      reqRec: 'Recommended: Windows 10/11, 4GB RAM, Dedicated GPU',
    },
  },
  pt: {
    meta: {
      title: 'Mu Aethel - Season 6 Episode 3',
      tagline: 'SERVIDOR SLOW / MEDIUM - SEASON 6 EPISODE 3',
    },
    nav: {
      home: 'Início',
      news: 'Notícias',
      economy: 'Economia',
      downloads: 'Downloads',
      playNow: 'Jogar Agora',
    },
    hero: {
      title: 'Ninguém compra poder aqui. Você conquista.',
      claim: 'Sem VIP, sem packs, sem vantagens pagas. Cada set, asa e jóia vem do seu esforço, da sua party e do PvP.',
      body: 'Mu Aethel é um servidor totalmente livre de pay-to-win. Uma economia baseada no esforço com recompensas reais.',
      ctaPrimary: 'Baixar Cliente',
      ctaSecondary: 'Como funciona a economia',
      statExp: 'Experiência',
      statDrop: 'Drop',
      statReset: 'Resets',
      statPlayers: 'Jogadores Online',
    },
    features: {
      subtitle: 'O QUE TORNA O MU AETHEL ÚNICO?',
      mainTitle: 'Modificações & Características',
      bossesTitle: 'Bosses Customizados',
      bossesTag: 'PVE EXCLUSIVO',
      bossesDesc: 'World Bosses únicos com mecânicas avançadas e invasões com drops exclusivos.',
      mapsTitle: 'Mapas Remasterizados',
      mapsTag: 'ZONAS PVP / SAFE',
      mapsDesc: 'Locais de treino otimizados e zonas de PvP aberto sem penalidade de PK.',
      balanceTitle: 'Balanço PvP Season 6',
      balanceTag: 'EQUILÍBRIO TOTAL',
      balanceDesc: 'Fórmulas ajustadas nas 7 classes para combates justos em duelos e Castle Siege.',
      economyTitle: 'Economia Play-to-Earn',
      economyTag: 'SISTEMA ÚNICO',
      economyDesc: 'Ganhe moedas por eliminações em eventos PvP e por ajudar novos jogadores.',
    },
    economy: {
      title: 'Economia Play-to-Earn',
      subtitle: 'Duas moedas internas. Zero dinheiro real. Uma premia o combate, a outra premia ajudar.',
      noVipTitle: 'Sem Sistema VIP ou Vantagens Pagas',
      noVipBody: 'Não vendemos experiência, drops ou itens. Ninguém pode pagar para vencer.',
      honorTitle: 'Honor Tokens',
      honorTag: 'Moeda de PvP',
      honorHow: 'Como obter:',
      honorItem1: 'Eliminações em Zonas Especiais de PvP',
      honorItem2: 'Vitórias e participação em Eventos PvP dedicados',
      honorItem3: 'Defesa e batalhas no Castle Siege',
      helperTitle: 'Helper Tokens',
      helperTag: 'Moeda da Comunidade',
      helperHow: 'Como obter:',
      helperItem1: 'Party com novos jogadores na primeira semana',
      helperItem2: 'Ajudar jogadores com menos resets a subir de nível',
      helperItem3: 'Cooperação e suporte na comunidade',
    },
    downloads: {
      title: 'Centro de Downloads',
      subtitle: 'Baixe o cliente oficial com o Launcher integrado para começar a jogar.',
      clientTitle: 'Cliente Oficial + Launcher Integrado',
      clientDesc: 'Inclui o jogo completo, áudio, música e o Launcher oficial com atualização automática.',
      btnDownload: 'Baixar Cliente Completo',
      reqTitle: 'Requisitos do Sistema',
      reqMin: 'Mínimos: Windows 7/10/11, 2GB RAM, GPU Integrada',
      reqRec: 'Recomendados: Windows 10/11, 4GB RAM, GPU Dedicada',
    },
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
