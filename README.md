# Mu Aethel — Web oficial (Next.js + Tailwind)

Web del servidor de MU Online Season 6 **Mu Aethel**: sin VIP, economía play-to-earn con Honor y Helper Tokens, y temporizadores de eventos en vivo, en español, inglés y portugués.

## Instalación

```bash
npx create-next-app@latest mu-aethel --js --tailwind --app --no-src-dir
cd mu-aethel
```

Después copiá encima los archivos de este paquete (sobrescribiendo `app/page.jsx`, `app/layout.jsx`, `app/globals.css` y `tailwind.config.js`) y levantá el proyecto:

```bash
npm run dev
```

No hace falta instalar dependencias extra: no se usan librerías de iconos ni de i18n.

## Mapa de archivos

| Archivo | Qué hace |
|---|---|
| `app/page.jsx` | Página principal: hero + ensamblado de todas las secciones |
| `app/layout.jsx` | Layout raíz, metadatos y tipografías |
| `app/globals.css` | Base de Tailwind, scrollbar, foco visible, clase `.mu-frame` |
| `tailwind.config.js` | Paleta azul/cian/oro, sombras neón y biseles metálicos |
| `lib/translations.js` | Diccionario ES / EN / PT + helpers `getTranslation` e `interpolate` |
| `lib/i18n.jsx` | Estado global de idioma (`I18nProvider`, hook `useI18n`) |
| `lib/serverConfig.js` | **Lo que vas a editar seguido**: rates, IP, horarios, noticias, descargas, redes |
| `components/Header.jsx` | Navegación + selector ES/EN/PT |
| `components/EventTimers.jsx` | Cuenta regresiva de eventos y jefes |
| `components/NewsFeed.jsx` | Noticias con etiquetas de categoría y filtros |
| `components/TokenEconomy.jsx` | Honor Tokens, Helper Tokens y declaración de "sin VIP" |
| `components/DownloadCenter.jsx` | Cliente, launcher y herramientas (`Config.ini`, `List.dat`) |
| `components/Footer.jsx` | Redes, estado del GameServer y soporte |

## Cómo cambiar cosas

**Horarios de eventos** → `lib/serverConfig.js`, array `EVENTS`.
Para uno diario agregá horas a `times` (hora del servidor, `'HH:MM'`).
Para uno semanal usá `type: 'weekly'` con `weekday` (0 = domingo) y `time`.
`entryMinutes` es la ventana en que la tarjeta muestra **ABIERTO**; `durationMinutes`, la que muestra **EN CURSO**.

**Zona horaria** → `SERVER.utcOffset` (`-3` = GMT-3). El contador se calcula en hora del servidor, así que da lo mismo desde qué país entre el jugador.

**Textos** → `lib/translations.js`. Toda clave nueva tiene que existir en `es`, `en` y `pt`; si falta una, cae a español automáticamente.

**Colores** → `tailwind.config.js`. `arcane` es el cian de las joyas, `relic` el dorado de los remaches, `abyss` los fondos y `steel` los marcos.

## Conectar datos reales

Tres puntos están preparados para enchufarles tu API:

1. `SERVER.online` y `SERVER.rates.players` → reemplazá por un `fetch('/api/status')` en un Server Component o con `useEffect`.
2. `NEWS` → cambialo por la respuesta de tu CMS; cada post necesita `title` y `excerpt` con las tres claves de idioma.
3. `DOWNLOADS` → apuntá `href` y `mirror` a tu CDN.

## Nota legal

La plantilla incluye un aviso en el pie aclarando que es un servidor privado sin fines de lucro y sin relación con Webzen. Revisalo con lo que aplique en tu país antes de publicar.
