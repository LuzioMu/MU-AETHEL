
'use client';

// ============================================================================
//  MU AETHEL - Pie de página
// ============================================================================

import { useI18n } from '../lib/i18n';
import { SERVER } from '../lib/serverConfig';

const ICONS = {
  discord: 'M20.3 4.6A18 18 0 0 0 15.8 3l-.3.6a14 14 0 0 1 3.8 1.9 12.6 12.6 0 0 0-10.6 0A14 14 0 0 1 12.5 3.6L12.2 3a18 18 0 0 0-4.5 1.6C4.6 9.3 3.8 13.9 4.2 18.4A18 18 0 0 0 9.7 21l1-1.7c-.9-.3-1.8-.8-2.6-1.3l.6-.5a12.9 12.9 0 0 0 10.6 0l.6.5c-.8.5-1.7 1-2.6 1.3l1 1.7a18 18 0 0 0 5.5-2.6c.5-5.2-.8-9.8-3.5-13.8ZM9.7 15.4c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 2 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2Zm6.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 2 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2Z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm5.882-10.194a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88Z',
  paypal: 'M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106Zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a2.093 2.093 0 0 0-2.071 1.761l-.986 6.252h4.606a.641.641 0 0 0 .633-.541l.893-5.65c.082-.52.53-.9 1.054-.9h.8c4.298 0 7.664-1.748 8.647-6.798.115-.595.17-1.144.184-1.636.082-.472.13-.93.216-1.402Z'
};

export default function Footer() {
  const { t } = useI18n();
  const online = SERVER.online;

  return (
    <footer className="border-t border-[#102542] bg-[#050a12]/95 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        
        {/* ESTADO DEL SERVIDOR */}
        <section>
          <h2 className="text-xs font-bold tracking-widest text-[#51e2f5] uppercase mb-4">
            {t('footer.serverStatus')}
          </h2>
          <div className="rounded bg-[#0a182e]/50 border border-[#102542] p-5 flex flex-col items-center justify-center text-center">
            <span className="text-lg text-white mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
              {t('footer.gameServer')}
            </span>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-[#102542]">
              <span className={`h-2.5 w-2.5 rounded-full ${online ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className={`text-xs font-bold tracking-wider ${online ? 'text-green-400' : 'text-red-400'}`}>
                {online ? t('footer.online') : t('footer.offline') || 'EN LÍNEA'}
              </span>
            </div>
          </div>
        </section>

        {/* COMUNIDAD */}
        <section>
          <h2 className="text-xs font-bold tracking-widest text-[#51e2f5] uppercase mb-4">
            {t('footer.community')}
          </h2>
          <div className="flex flex-col gap-3">
            <a href="https://discord.gg/tu-link" target="_blank" className="flex items-center gap-3 border border-[#102542] bg-[#0a182e]/50 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-[#51e2f5] hover:text-white rounded">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#5865F2]"><path d={ICONS.discord} /></svg>
              Discord Oficial
            </a>
            <a href="https://instagram.com/tu-link" target="_blank" className="flex items-center gap-3 border border-[#102542] bg-[#0a182e]/50 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-[#E1306C] hover:text-white rounded">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#E1306C]"><path d={ICONS.instagram} /></svg>
              Instagram
            </a>
            <a href="https://paypal.me/tu-link" target="_blank" className="flex items-center gap-3 border border-[#cba135]/40 bg-[#1a1508]/50 px-4 py-2.5 text-sm text-[#fce893] font-bold transition-colors hover:border-[#fce893] hover:bg-[#cba135]/10 rounded shadow-[0_0_10px_rgba(252,232,147,0.05)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#00457C]"><path d={ICONS.paypal} /></svg>
              Apoyar Servidor (Donar)
            </a>
          </div>
        </section>

        {/* SOPORTE Y REGLAS */}
        <section>
          <h2 className="text-xs font-bold tracking-widest text-[#51e2f5] uppercase mb-4">
            {t('footer.support')}
          </h2>
          <p className="text-sm leading-relaxed text-slate-400 mb-4">
            {t('footer.supportBody')}
          </p>
          <ul className="space-y-2 text-sm font-medium">
            <li><a href="/noticias#reglas" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('footer.rules')}</a></li>
            <li><a href="/noticias#terminos" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('footer.terms')}</a></li>
            <li><a href="/noticias#privacidad" className="text-slate-300 hover:text-[#51e2f5] transition-colors">{t('footer.privacy')}</a></li>
          </ul>
        </section>
      </div>

      <div className="border-t border-[#102542] bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500">
          <p>© {new Date().getFullYear()} {SERVER.name}. {t('footer.rights')}</p>
          <p className="mt-2 md:mt-0">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}