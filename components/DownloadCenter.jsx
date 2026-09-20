'use client';

// ============================================================================
//  MU AETHEL - Descargas y herramientas del launcher
//  Enlaces y contenidos de Config.ini / List.dat: lib/serverConfig.js
// ============================================================================

import { useState } from 'react';
import { useI18n } from '../lib/i18n';
import { DOWNLOADS, LAUNCHER_FILES } from '../lib/serverConfig';

function DownloadPanel({ titleKey, bodyKey, buttonKey, data, primary = false }) {
  const { t } = useI18n();

  return (
    <article
      className={`flex flex-col gap-4 border bg-panel p-6 shadow-inset ${
        primary ? 'border-arcane-500/60 shadow-neon' : 'border-steel-700'
      }`}
    >
      <div>
        <h3 className="font-display text-2xl text-silver-300">{t(titleKey)}</h3>
        <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-silver-500">{t(bodyKey)}</p>
      </div>

      <dl className="flex gap-6 font-data text-xs text-silver-500">
        <div>
          <dt className="text-silver-500">{t('download.version')}</dt>
          <dd className="mt-0.5 text-silver-300">{data.version}</dd>
        </div>
        <div>
          <dt className="text-silver-500">{t('download.size')}</dt>
          <dd className="mt-0.5 text-silver-300">{data.size}</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap items-center gap-3">
        <a
          href={data.href}
          className={`border px-5 py-2 font-display tracking-wide transition-colors ${
            primary
              ? 'border-arcane-400/80 bg-arcane-600/25 text-arcane-200 hover:bg-arcane-600/45'
              : 'border-steel-500 bg-abyss-600 text-silver-300 hover:border-arcane-500/70 hover:text-arcane-300'
          }`}
        >
          {t(buttonKey)}
        </a>
        <a href={data.mirror} className="text-xs text-silver-500 underline-offset-4 hover:text-silver-300 hover:underline">
          {t('download.mirror')}
        </a>
      </div>
    </article>
  );
}

function FileBlock({ file }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(file.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* el portapapeles puede estar bloqueado: el texto igual se ve completo */
    }
  };

  return (
    <div className="border border-steel-700 bg-abyss-900">
      <div className="flex items-center justify-between gap-3 border-b border-steel-700 bg-abyss-700 px-3 py-2">
        <span className="font-data text-xs text-arcane-300">{file.filename}</span>
        <button
          type="button"
          onClick={copy}
          className="border border-steel-600 px-2 py-0.5 font-data text-[11px] text-silver-400 transition-colors hover:border-arcane-500/70 hover:text-arcane-300"
        >
          {copied ? t('download.copied') : t('download.copy')}
        </button>
      </div>
      <pre className="overflow-x-auto px-3 py-3 font-data text-xs leading-relaxed text-silver-400">
        <code>{file.content}</code>
      </pre>
    </div>
  );
}

export default function DownloadCenter() {
  const { t } = useI18n();

  return (
    <section id="descargas" className="scroll-mt-24 bg-abyss-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-[65ch]">
          <h2 className="font-display text-3xl text-silver-300 sm:text-4xl">{t('download.title')}</h2>
          <p className="mt-2 text-sm text-silver-500">{t('download.subtitle')}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <DownloadPanel
            primary
            titleKey="download.clientTitle"
            bodyKey="download.clientBody"
            buttonKey="download.clientButton"
            data={DOWNLOADS.client}
          />
          <DownloadPanel
            titleKey="download.launcherTitle"
            bodyKey="download.launcherBody"
            buttonKey="download.launcherButton"
            data={DOWNLOADS.launcher}
          />
        </div>

        <p className="mt-4 border-l-2 border-status-warn/70 bg-abyss-800 px-4 py-3 text-xs leading-relaxed text-silver-400">
          {t('download.note')}
        </p>

        {/* --- Herramientas para el launcher --- */}
        <div className="mt-10 border border-steel-700 bg-panel p-6 shadow-inset">
          <h3 className="font-display text-2xl text-silver-300">{t('download.toolsTitle')}</h3>
          <p className="mt-2 max-w-[65ch] text-sm text-silver-500">{t('download.toolsSubtitle')}</p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {LAUNCHER_FILES.map((file) => (
              <FileBlock key={file.id} file={file} />
            ))}
          </div>

          <div className="mt-6 grid gap-6 border-t border-steel-700/70 pt-6 sm:grid-cols-2">
            <div>
              <h4 className="font-display text-lg text-arcane-300">{t('download.patchTitle')}</h4>
              <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-silver-500">
                {t('download.patchBody')}
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg text-arcane-300">{t('download.requirements')}</h4>
              <p className="mt-2 font-data text-sm leading-relaxed text-silver-500">
                {t('download.requirementsBody')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
