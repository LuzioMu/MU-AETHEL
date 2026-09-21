'use client';

// ============================================================================
//  MU AETHEL - Sección de Economía Play-to-Earn (Honor & Helper Tokens)
// ============================================================================

import { useI18n } from '../lib/i18n';

export default function TokenEconomy() {
  const { t } = useI18n();

  return (
    <section id="economia" className="relative scroll-mt-24 bg-[#050a12] py-16 border-t border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <p className="font-data text-xs tracking-[0.2em] text-[#51e2f5] uppercase">
            {t('economy.subtitle')}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display text-[#fce893] mt-2">
            {t('economy.title')}
          </h2>
        </div>

        {/* Tarjeta Informativa: Cero P2W */}
        <div className="mu-frame p-6 mb-12 bg-[#0a111c]/90 rounded border border-slate-700/60">
          <h3 className="text-xl font-display text-[#fce893] mb-2 flex items-center gap-2">
            <span>🛡️</span> {t('economy.noVipTitle')}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t('economy.noVipBody')}
          </p>
        </div>

        {/* Rejilla de Monedas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Honor Tokens (PvP) */}
          <div className="mu-frame p-8 rounded bg-[#080d17] flex flex-col justify-between border border-red-950/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">⚔️</span>
                <span className="text-xs font-bold tracking-wider px-3 py-1 rounded bg-red-950/60 text-red-400 border border-red-800/50 uppercase">
                  {t('economy.honorTag')}
                </span>
              </div>
              <h3 className="text-2xl font-display text-[#fce893] mb-4">
                {t('economy.honorTitle')}
              </h3>

              <div className="space-y-3 text-sm text-slate-300">
                <p className="font-semibold text-slate-400 uppercase text-xs tracking-wider">
                  {t('economy.honorHow')}
                </p>
                <ul className="space-y-2 list-disc list-inside text-slate-300">
                  <li>{t('economy.honorItem1')}</li>
                  <li>{t('economy.honorItem2')}</li>
                  <li>{t('economy.honorItem3')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Helper Tokens (Comunidad/Ayuda) */}
          <div className="mu-frame p-8 rounded bg-[#080d17] flex flex-col justify-between border border-cyan-950/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">🤝</span>
                <span className="text-xs font-bold tracking-wider px-3 py-1 rounded bg-cyan-950/60 text-[#51e2f5] border border-cyan-800/50 uppercase">
                  {t('economy.helperTag')}
                </span>
              </div>
              <h3 className="text-2xl font-display text-[#fce893] mb-4">
                {t('economy.helperTitle')}
              </h3>

              <div className="space-y-3 text-sm text-slate-300">
                <p className="font-semibold text-slate-400 uppercase text-xs tracking-wider">
                  {t('economy.helperHow')}
                </p>
                <ul className="space-y-2 list-disc list-inside text-slate-300">
                  <li>{t('economy.helperItem1')}</li>
                  <li>{t('economy.helperItem2')}</li>
                  <li>{t('economy.helperItem3')}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
