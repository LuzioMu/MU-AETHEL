'use client';

// ============================================================================
//  MU AETHEL - Centro de Descargas
// ============================================================================

import { useI18n } from '../lib/i18n';

export default function DownloadCenter() {
  const { t } = useI18n();

  return (
    <section id="descargas" className="relative scroll-mt-24 bg-[#080d17] py-16 border-t border-slate-800/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <p className="font-data text-xs tracking-[0.2em] text-[#51e2f5] uppercase">
            {t('downloads.subtitle')}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display text-[#fce893] mt-2">
            {t('downloads.title')}
          </h2>
        </div>

        {/* Tarjeta de Descarga Principal */}
        <div className="mu-frame p-8 rounded bg-[#0a111c] text-center border border-slate-700/80 shadow-2xl">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-2xl font-display text-[#fce893] mb-3">
            {t('downloads.clientTitle')}
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            {t('downloads.clientDesc')}
          </p>

          <a
            href="/MuAethelClientFull.zip"
            download
            className="mu-button mu-button-gold inline-block px-8 py-4 rounded font-display text-xl tracking-wider text-center shadow-lg transition-transform hover:scale-105"
          >
            {t('downloads.btnDownload')}
          </a>

          {/* Requisitos del sistema */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs text-slate-400">
            <div>
              <span className="font-bold text-slate-300 block mb-1">⚙️ {t('downloads.reqTitle')}</span>
              <p>{t('downloads.reqMin')}</p>
            </div>
            <div>
              <span className="font-bold text-slate-300 block mb-1">🌟 Recomendado</span>
              <p>{t('downloads.reqRec')}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
