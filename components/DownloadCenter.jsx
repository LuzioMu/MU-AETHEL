'use client';

// ============================================================================
//  MU AETHEL - Centro de Descargas (Compacto y Funcional)
// ============================================================================

import { useI18n } from '../lib/i18n';

export default function DownloadCenter() {
  const { t } = useI18n();

  return (
    <section id="descargas" className="relative scroll-mt-24 bg-[#080d17]/95 py-16 border-t border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-8">
          <p className="font-data text-xs tracking-[0.2em] text-[#51e2f5] uppercase">
            {t('downloads.subtitle') || 'Prepárate para la batalla'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-display text-[#fce893] mt-2" style={{ fontFamily: "'Cinzel', serif" }}>
            {t('downloads.title') || 'Centro de Descargas'}
          </h2>
        </div>

        {/* Tarjeta de Descarga Principal (Horizontal) */}
        <div className="mu-frame p-6 sm:p-8 rounded bg-[#0a111c] border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          
          {/* Info del Cliente */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-display text-[#fce893] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
              🚀 Cliente Oficial + Launcher
            </h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Descarga el juego completo preconfigurado. Incluye el launcher automático que mantendrá tus archivos siempre actualizados sin necesidad de parches manuales.
            </p>
            
            {/* Detalles Técnicos */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              <span className="text-[10px] bg-black/60 border border-slate-700 text-slate-300 px-3 py-1 rounded font-mono">Versión: v1.0.0</span>
              <span className="text-[10px] bg-black/60 border border-slate-700 text-slate-300 px-3 py-1 rounded font-mono">Tamaño: ~1.2 GB</span>
              <span className="text-[10px] bg-black/60 border border-slate-700 text-slate-300 px-3 py-1 rounded font-mono">SHA-256 Verificado ✅</span>
            </div>

            <div className="text-xs text-slate-500 flex flex-col gap-1 mt-6">
              <span className="font-bold text-slate-400">⚙️ Requisitos Mínimos:</span>
              <span>Windows 7/10/11 · 2GB RAM · DirectX 9.0c · 3GB Espacio Libre</span>
            </div>
          </div>

          {/* Botones y Espejos */}
          <div className="flex-1 w-full flex flex-col gap-3">
            <a
              href="https://github.com/LuzioMu/MU-AETHEL/releases/download/v1.0.0/Mu.Aethel.zip"
              className="mu-button mu-button-gold w-full px-6 py-4 rounded font-display text-lg tracking-wider text-center shadow-lg transition-transform hover:scale-105"
            >
              ⬇️ Descarga Directa (Recomendado)
            </a>
            
            <div className="flex items-center gap-2 my-1">
              <div className="h-px bg-slate-700 flex-1"></div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Opciones Alternativas</span>
              <div className="h-px bg-slate-700 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="mu-button text-center py-2.5 rounded text-xs tracking-wider border border-slate-600 hover:border-[#51e2f5]">
                Mirror: MEGA
              </a>
              <a href="#" className="mu-button text-center py-2.5 rounded text-xs tracking-wider border border-slate-600 hover:border-[#51e2f5]">
                Mirror: Google Drive
              </a>
            </div>
            
            <p className="text-[10px] text-slate-500 text-center mt-2">
              ⚠️️ Si el antivirus bloquea el launcher, añade la carpeta a exclusiones (Falso positivo habitual en clientes de Mu Online).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
