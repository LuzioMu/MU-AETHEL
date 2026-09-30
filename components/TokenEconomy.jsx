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
          <h2 className="text-3xl sm:text-5xl font-display text-[#fce893] mt-2" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('economy.title')}
          </h2>
        </div>

        {/* Tarjeta Informativa Central: Cero P2W */}
        <div className="mu-frame p-6 mb-10 bg-[#0a111c]/90 rounded border border-slate-700/60 shadow-[0_0_20px_rgba(81,226,245,0.05)]">
          <h3 className="text-xl text-[#fce893] mb-2 flex items-center justify-center gap-2" style={{ fontFamily: "'Cinzel', serif" }}>
            <span>🛡️</span> {t('economy.noVipTitle')}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
            {t('economy.noVipBody')}
          </p>
        </div>

        {/* Rejilla de Monedas (Modo Compacto y Horizontal en PC) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Honor Tokens (PvP) */}
          <div className="mu-frame p-6 rounded bg-[#100505] border border-red-950/60 shadow-[inset_0_0_30px_rgba(153,27,27,0.1)]">
            <div className="flex items-center justify-between mb-4 border-b border-red-900/30 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]">⚔️</span>
                <h3 className="text-2xl text-[#fce893]" style={{ fontFamily: "'Cinzel', serif" }}>
                  {t('economy.honorTitle')}
                </h3>
              </div>
              <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded bg-red-950 text-red-400 border border-red-800/50 uppercase hidden sm:block">
                {t('economy.honorTag')}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <p className="font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-2 border-b border-slate-800 pb-1">
                  🟢 {t('economy.honorHow')}
                </p>
                <ul className="space-y-1.5 text-[13px] text-slate-300">
                  <li className="flex gap-2"><span>•</span><span>{t('economy.honorItem1')}</span></li>
                  <li className="flex gap-2"><span>•</span><span>{t('economy.honorItem2')}</span></li>
                  <li className="flex gap-2"><span>•</span><span>{t('economy.honorItem3')}</span></li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-2 border-b border-slate-800 pb-1">
                  🔴 En qué se gastan:
                </p>
                <ul className="space-y-1.5 text-[13px] text-slate-300">
                  <li className="flex gap-2"><span>•</span><span>Cajas Kundun y Event Boxes exclusivas</span></li>
                  <li className="flex gap-2"><span>•</span><span>Creación y evolución de Alas (Wings)</span></li>
                  <li className="flex gap-2"><span>•</span><span>Materiales raros para sets End-Game</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Helper Tokens (Comunidad) */}
          <div className="mu-frame p-6 rounded bg-[#050a12] border border-[#102542] shadow-[inset_0_0_30px_rgba(81,226,245,0.05)]">
            <div className="flex items-center justify-between mb-4 border-b border-[#102542] pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl drop-shadow-[0_0_10px_rgba(81,226,245,0.5)]">🤝</span>
                <h3 className="text-2xl text-[#fce893]" style={{ fontFamily: "'Cinzel', serif" }}>
                  {t('economy.helperTitle')}
                </h3>
              </div>
              <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded bg-[#0a182e] text-[#51e2f5] border border-[#102542] uppercase hidden sm:block">
                {t('economy.helperTag')}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <p className="font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-2 border-b border-slate-800 pb-1">
                  🟢 {t('economy.helperHow')}
                </p>
                <ul className="space-y-1.5 text-[13px] text-slate-300">
                  <li className="flex gap-2"><span>•</span><span>{t('economy.helperItem1')}</span></li>
                  <li className="flex gap-2"><span>•</span><span>{t('economy.helperItem2')}</span></li>
                  <li className="flex gap-2"><span>•</span><span>{t('economy.helperItem3')}</span></li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-2 border-b border-slate-800 pb-1">
                  🔴 En qué se gastan:
                </p>
                <ul className="space-y-1.5 text-[13px] text-slate-300">
                  <li className="flex gap-2"><span>•</span><span>Mascotas exóticas y Anillos de Transformación</span></li>
                  <li className="flex gap-2"><span>•</span><span>Jewels (Bless, Soul, Chaos, Life, etc.)</span></li>
                  <li className="flex gap-2"><span>•</span><span>Skins y cosméticos para tu personaje</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
