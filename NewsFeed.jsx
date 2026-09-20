'use client';

// ============================================================================
//  MU AETHEL - Noticias
//  Las publicaciones vienen de NEWS (lib/serverConfig.js). Cada una trae su
//  título y resumen en los tres idiomas; acá solo se elige el que corresponde.
// ============================================================================

import { useMemo, useState } from 'react';
import { useI18n } from '../lib/i18n';
import { NEWS } from '../lib/serverConfig';

// Color de cada etiqueta de categoría.
const CATEGORY_STYLES = {
  maintenance: 'border-status-warn/60 text-status-warn bg-status-warn/10',
  event: 'border-relic-400/60 text-relic-300 bg-relic-500/10',
  update: 'border-arcane-400/60 text-arcane-300 bg-arcane-500/10',
  news: 'border-silver-500/50 text-silver-300 bg-silver-500/10',
};

const FILTERS = ['all', 'maintenance', 'event', 'update', 'news'];

function formatDate(iso, lang) {
  const locale = { es: 'es-ES', en: 'en-US', pt: 'pt-BR' }[lang] ?? 'es-ES';
  return new Date(`${iso}T12:00:00`).toLocaleDateString(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function NewsFeed({ posts = NEWS }) {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState('all');

  const visible = useMemo(
    () => (filter === 'all' ? posts : posts.filter((p) => p.category === filter)),
    [posts, filter]
  );

  return (
    <section id="noticias" className="scroll-mt-24 bg-abyss-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl text-silver-300 sm:text-4xl">{t('news.title')}</h2>
            <p className="mt-2 max-w-[60ch] text-sm text-silver-500">{t('news.subtitle')}</p>
          </div>

          {/* Filtros por categoría */}
          <ul className="flex flex-wrap gap-2">
            {FILTERS.map((key) => {
              const active = filter === key;
              const label = key === 'all' ? t('news.all') : t(`news.categories.${key}`);
              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => setFilter(key)}
                    aria-pressed={active}
                    className={`border px-3 py-1 text-xs transition-colors ${
                      active
                        ? 'border-arcane-400/70 bg-arcane-500/15 text-arcane-300'
                        : 'border-steel-700 text-silver-500 hover:border-steel-500 hover:text-silver-300'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 border border-dashed border-steel-700 p-8 text-center text-sm text-silver-500">
            {t('news.empty')}
          </p>
        ) : (
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {visible.map((post) => (
              <li
                key={post.id}
                className="flex flex-col border border-steel-700 bg-panel p-5 shadow-inset transition-colors hover:border-arcane-500/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`border px-2 py-0.5 font-data text-[11px] ${
                      CATEGORY_STYLES[post.category] ?? CATEGORY_STYLES.news
                    }`}
                  >
                    {t(`news.categories.${post.category}`)}
                  </span>
                  <time dateTime={post.date} className="font-data text-[11px] text-silver-500">
                    {formatDate(post.date, lang)}
                  </time>
                </div>

                <h3 className="mt-3 font-display text-xl leading-snug text-silver-300">
                  {post.title[lang] ?? post.title.es}
                </h3>
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-silver-500">
                  {post.excerpt[lang] ?? post.excerpt.es}
                </p>

                <a
                  href={post.href}
                  className="mt-4 self-start border-b border-arcane-500/50 pb-0.5 text-sm text-arcane-300 transition-colors hover:border-arcane-300 hover:text-arcane-200"
                >
                  {t('news.readMore')}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
