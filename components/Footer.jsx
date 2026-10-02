'use client';

// ============================================================================
//  MU AETHEL - Pie de página
//  Estado del GameServer, datos de conexión, redes y soporte.
// ============================================================================

import { useI18n } from '../lib/i18n';
import { SERVER, SOCIALS } from '../lib/serverConfig';

export default function Footer() {
  const { t } = useI18n();
  const online = SERVER.online;

  return (
    <footer className="border-t border-steel-700/70 bg-abyss-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Estado del servidor */}
        <section>
          <h2 className="font-data text-xs tracking-wider text-silver-500 uppercase">
            {t('footer.serverStatus')}
          </h2>
          <div className="mt-3 border border-steel-700 bg-panel p-4 shadow-inset">
            <p className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  online ? 'animate-pulse-glow bg-status-online' : 'bg-status-offline'
                }`}
              />
              <span className="font-display text-lg text-silver-300">{t('footer.gameServer')}</span>
              <span
                className={`ml-auto font-data text-xs uppercase ${
                  online ? 'text-status-online' : 'text-status-offline'
                }`}
              >
                {online ? t('footer.online') : t('footer.offline')}
              </span>
            </p>

            <dl className="mt-4 space-y-1 font-data text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-silver-500 uppercase">{t('footer.ip')}</dt>
                <dd className="text-arcane-300">{SERVER.ip}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-silver-500 uppercase">{t('footer.port')}</dt>
                <dd className="text-arcane-300">{SERVER.port}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Comunidad con traducciones dinámicas */}
        <section>
          <h2 className="text-[#fce893] font-bold tracking-widest uppercase mb-4 text-sm">{t('footer.community')}</h2>
          <ul className="space-y-3">
            <li>
              <a href="https://discord.gg/muaethel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded border border-[#102542] hover:border-[#51e2f5] hover:bg-[#10567e]/20 transition-all text-slate-300 hover:text-white text-sm">
                <span className="text-[#5865F2]">🎮</span> {t('footer.discord')}
              </a>
            </li>
            <li>
              <a href="https://instagram.com/muaethel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded border border-[#102542] hover:border-[#e1306c] hover:bg-[#e1306c]/20 transition-all text-slate-300 hover:text-white text-sm">
                <span className="text-[#e1306c]">📸</span> {t('footer.instagram')}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-2 rounded border border-[#cba135]/50 bg-[#102542]/30 hover:border-[#fce893] hover:bg-[#cba135]/20 transition-all text-[#51e2f5] font-bold text-sm">
                <span className="text-[#0070ba]">💳</span> {t('footer.donate')}
              </a>
            </li>
          </ul>
        </section>

        {/* Soporte */}
        <section>
          <h2 className="font-data text-xs tracking-wider text-silver-500 uppercase">{t('footer.support')}</h2>
          <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-silver-500">
            {t('footer.supportBody')}
          </p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {[
              { href: '/reglas', label: t('footer.rules') },
              { href: '/terminos', label: t('footer.terms') },
              { href: '/privacidad', label: t('footer.privacy') },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-silver-400 transition-colors hover:text-arcane-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="border-t border-steel-700/50">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <p className="font-data text-[11px] text-silver-500">
            © {new Date().getFullYear()} {SERVER.name}. {t('footer.rights')}
          </p>
          <p className="mt-1 max-w-[80ch] text-[11px] leading-relaxed text-silver-500/70">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
