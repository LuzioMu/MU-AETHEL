'use client';

// ============================================================================
//  MU AETHEL - Economía play-to-earn
//  Dos tarjetas espejadas: Honor Tokens (PvP) y Helper Tokens (comunidad).
//  Los textos y las listas salen del diccionario, así que no hay que tocar
//  este componente para reescribir la economía: se edita translations.js.
// ============================================================================

import { useI18n } from '../lib/i18n';

// Tema visual de cada moneda. Honor = cian de joya, Helper = oro de remache.
const TOKEN_THEME = {
  honor: {
    frame: 'border-arcane-500/50',
    glow: 'shadow-neon',
    title: 'text-arcane-300',
    chip: 'border-arcane-400/60 text-arcane-300',
    marker: 'bg-arcane-400',
    coin: 'from-arcane-400 to-arcane-600',
    shop: 'border-arcane-500/70 text-arcane-300 hover:bg-arcane-600/25',
  },
  helper: {
    frame: 'border-relic-500/50',
    glow: 'shadow-gold',
    title: 'text-relic-300',
    chip: 'border-relic-400/60 text-relic-300',
    marker: 'bg-relic-400',
    coin: 'from-relic-300 to-relic-600',
    shop: 'border-relic-500/70 text-relic-300 hover:bg-relic-600/25',
  },
};

function TokenList({ heading, items, markerClass }) {
  return (
    <div>
      <h4 className="font-data text-xs tracking-wider text-silver-500">{heading}</h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-silver-400">
            <span className={`mt-[9px] h-px w-3 shrink-0 ${markerClass}`} />
            <span className="max-w-[46ch]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TokenCard({ variant, titleKey, roleKey, howKey, earnKey, useKey, spendKey, shopKey }) {
  const { t } = useI18n();
  const theme = TOKEN_THEME[variant];

  return (
    <article className={`relative flex flex-col gap-5 border bg-panel p-6 shadow-inset ${theme.frame}`}>
      <header className="flex items-center gap-4">
        {/* Moneda: disco biselado, sin imagen externa */}
        <span
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-b ${theme.coin} font-display text-lg text-abyss-900 ${theme.glow}`}
          aria-hidden="true"
        >
          {variant === 'honor' ? 'H' : 'A'}
        </span>
        <div>
          <h3 className={`font-display text-2xl leading-none ${theme.title}`}>{t(titleKey)}</h3>
          <span className={`mt-1.5 inline-block border px-2 py-0.5 font-data text-[11px] ${theme.chip}`}>
            {t(roleKey)}
          </span>
        </div>
      </header>

      <TokenList heading={t(howKey)} items={t(earnKey)} markerClass={theme.marker} />
      <TokenList heading={t(useKey)} items={t(spendKey)} markerClass={theme.marker} />

      <span className="mt-auto block h-px w-full bg-steel-700/70" />
      <p className={`border px-4 py-2 text-center font-display text-sm tracking-wide ${theme.shop} transition-colors`}>
        {t(shopKey)}
      </p>
    </article>
  );
}

export default function TokenEconomy() {
  const { t } = useI18n();

  return (
    <section
      id="economia"
      className="scroll-mt-24 border-y border-steel-700/60 bg-abyss-800 bg-grid bg-grid-cell"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-[65ch]">
          <h2 className="font-display text-3xl text-silver-300 sm:text-4xl">{t('economy.title')}</h2>
          <p className="mt-2 text-sm text-silver-500">{t('economy.subtitle')}</p>
        </div>

        {/* Declaración de "sin VIP": el mensaje más importante de la página */}
        <div className="mt-8 border-l-2 border-relic-400 bg-abyss-700/70 p-5 sm:p-6">
          <h3 className="font-display text-xl text-relic-300">{t('economy.noVipTitle')}</h3>
          <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-silver-400">
            {t('economy.noVipBody')}
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <TokenCard
            variant="honor"
            titleKey="economy.honorTitle"
            roleKey="economy.honorFor"
            howKey="economy.honorHow"
            earnKey="economy.honorEarn"
            useKey="economy.honorUse"
            spendKey="economy.honorSpend"
            shopKey="economy.honorShop"
          />
          <TokenCard
            variant="helper"
            titleKey="economy.helperTitle"
            roleKey="economy.helperFor"
            howKey="economy.helperHow"
            earnKey="economy.helperEarn"
            useKey="economy.helperUse"
            spendKey="economy.helperSpend"
            shopKey="economy.helperShop"
          />
        </div>

        <p className="mt-5 font-data text-xs text-silver-500">{t('economy.transparency')}</p>
      </div>
    </section>
  );
}
