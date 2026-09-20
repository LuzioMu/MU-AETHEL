/** @type {import('tailwindcss').Config} */

// ============================================================================
//  MU AETHEL - Configuración de tema
//  Paleta inspirada en la UI clásica de MU Online Season 6:
//  marcos de inventario azul marino, cristal cian de las joyas,
//  remaches dorados y bisel plateado de los menús.
//  Cambiá cualquier hex de aquí y toda la web se actualiza.
// ============================================================================

module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // --- Fondos (del más profundo al más claro) ---
        abyss: {
          900: '#03060f', // fondo general de la página
          800: '#060c1c', // secciones alternas
          700: '#0a1428', // fondo de panel
          600: '#0f1e3a', // fondo de tarjeta
          500: '#16294d', // hover / relleno activo
        },
        // --- Azul marino estructural (marcos, divisores) ---
        steel: {
          700: '#1c3766',
          600: '#26498a',
          500: '#3562ad',
          400: '#4a7fd0',
        },
        // --- Cian: el "cristal" de las joyas y el glow de la UI ---
        arcane: {
          600: '#0e7f9c',
          500: '#17b3d4',
          400: '#3ad6f0', // color de acento principal
          300: '#7ae8fb',
        },
        // --- Oro: remaches, bordes de ítem excellent, precios ---
        relic: {
          600: '#8a6620',
          500: '#c9972f',
          400: '#e8bb53', // acento dorado principal
          300: '#f7dd9a',
        },
        // --- Plata: bisel metálico y texto secundario ---
        silver: {
          500: '#7f8fa6',
          400: '#a8b6c9',
          300: '#d3dce8',
        },
        // --- Semánticos (estado de servidor, etiquetas de noticias) ---
        status: {
          online: '#3ddc84',
          offline: '#e5484d',
          live: '#e8bb53',
          warn: '#f07c3a',
        },
      },

      fontFamily: {
        // Titulares: condensada, con carácter de placa metálica grabada.
        display: ['"Oswald"', 'Impact', 'sans-serif'],
        // Cuerpo: limpia y legible en móvil.
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        // Datos: contadores, IP, puerto, archivos de config.
        data: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },

      boxShadow: {
        // Glow neón azul de los marcos de UI.
        neon: '0 0 0 1px rgba(58,214,240,.35), 0 0 18px -4px rgba(58,214,240,.55)',
        'neon-lg': '0 0 0 1px rgba(58,214,240,.45), 0 0 42px -8px rgba(58,214,240,.7)',
        gold: '0 0 0 1px rgba(232,187,83,.45), 0 0 22px -6px rgba(232,187,83,.6)',
        // Relieve interno tipo placa de inventario.
        inset: 'inset 0 1px 0 rgba(168,182,201,.18), inset 0 -2px 6px rgba(0,0,0,.65)',
      },

      backgroundImage: {
        // Degradado de panel (cristal azul).
        panel: 'linear-gradient(160deg, rgba(22,41,77,.92) 0%, rgba(6,12,28,.96) 100%)',
        // Bisel metálico usado como borde con `border-image` o marcos.
        bevel: 'linear-gradient(180deg, #4a7fd0 0%, #1c3766 45%, #03060f 100%)',
        'bevel-gold': 'linear-gradient(180deg, #f7dd9a 0%, #c9972f 45%, #4a3410 100%)',
        // Trama sutil de circuito para los fondos de sección.
        grid: 'linear-gradient(rgba(58,214,240,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(58,214,240,.05) 1px, transparent 1px)',
      },

      backgroundSize: {
        // Se aplica junto a bg-grid: <div className="bg-grid bg-grid-cell" />
        'grid-cell': '44px 44px',
      },

      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.45' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },

      animation: {
        // Usado solo en el indicador de evento en curso y en el estado del server.
        'pulse-glow': 'pulseGlow 1.8s ease-in-out infinite',
        scan: 'scan 6s linear infinite',
      },
    },
  },
  plugins: [],
};
