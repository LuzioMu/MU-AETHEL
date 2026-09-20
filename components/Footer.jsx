'use client';

// ============================================================================
//  MU AETHEL - Pie de página
//  Estado del GameServer, datos de conexión, redes y soporte.
//  Para un estado real: reemplazá SERVER.online por un fetch a tu endpoint.
// ============================================================================

import { useI18n } from '../lib/i18n';
import { SERVER, SOCIALS } from '../lib/serverConfig';

// Íconos inline: no dependemos de librerías externas.
const ICONS = {
  discord: 'M20.3 4.6A18 18 0 0 0 15.8 3l-.3.6a14 14 0 0 1 3.8 1.9 12.6 12.6 0 0 0-10.6 0A14 14 0 0 1 12.5 3.6L12.2 3a18 18 0 0 0-4.5 1.6C4.6 9.3 3.8 13.9 4.2 18.4A18 18 0 0 0 9.7 21l1-1.7c-.9-.3-1.8-.8-2.6-1.3l.6-.5a12.9 12.9 0 0 0 10.6 0l.6.5c-.8.5-1.7 1-2.6 1.3l1 1.7a18 18 0 0 0 5.5-2.6c.5-5.2-.8-9.8-3.5-13.8ZM9.7 15.4c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 2 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2Zm6.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 2 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2Z',
  facebook: 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V13h2.7v8h3.2Z',
  whatsapp: 'M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm0 1.8a7.2 7.2 0 0 1 5.6 11.7 7.2 7.2 0 0 1-9.4 1.4l-.4-.2-2.3.6.6-2.2-.2-.4A7.2 7.2 0 0 1 12 4.8Zm-2.7 3.4c-.2 0-.5 0-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.7 2.1.8 2.5.6 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3-1.6-.8c-.2 0-.4-.1-.6.2l-.8 1c-.2.2-.3.2-.5.1a6.2 6.2 0 0 1-3.1-2.7c-.2-.4 0-.5.1-.7l.4-.5.3-.5v-.5l-.8-1.9c-.2-.4-.4-.4-.6-.4h-.5Z',
};

function SocialLink({ social }) {
  const { t } = useI18n();
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 border border-steel-700 px-3 py-2 text-sm text-silver-400 transition-colors hover:border-arcane-500/70 hover:text-arcane-300"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d={ICONS[social.id]} />
      </svg>
      {t(social.labelKey)}
    </a>
  );
}

export default function Footer() {
  const { t } = useI18n();
  const online = SERVER.online;

  return (
    <footer className="border-t border-steel-700/70 bg-abyss-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Estado del servidor */}
        <section>
          <h2 className="font-data text-xs tracking-wider text-silver-500">
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
                className={`ml-auto font-data text-xs ${
                  online ? 'text-status-online' : 'text-status-offline'
                }`}
              >
                {online ? t('footer.online') : t('footer.offline')}
              </span>
            </p>

            <dl className="mt-4 space-y-1 font-data text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-silver-500">{t('footer.ip')}</dt>
                <dd className="text-arcane-300">{SERVER.ip}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-silver-500">{t('footer.port')}</dt>
                <dd className="text-arcane-300">{SERVER.port}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Comunidad */}
        <section>
          <h2 className="font-data text-xs tracking-wider text-silver-500">{t('footer.community')}</h2>
          <div className="mt-3 flex flex-col gap-2">
            {SOCIALS.map((social) => (
              <SocialLink key={social.id} social={social} />
            ))}
          </div>
        </section>

        {/* Soporte */}
        <section>
          <h2 className="font-data text-xs tracking-wider text-silver-500">{t('footer.support')}</h2>
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
