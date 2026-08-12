'use client';

import { useMemo, useState, type CSSProperties } from 'react';
import Reveal from '@/components/Reveal';

export type PortfolioItem = {
  id: string;
  category: string;
  categoryLabel: string;
  image: string;
  title?: string;
  region?: string;
};

type RevealVariant = 'fade-up' | 'fade' | 'slide-left' | 'slide-right' | 'scale';

const REVEAL_VARIANTS: RevealVariant[] = ['fade-up', 'scale', 'slide-left', 'slide-right', 'fade'];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash += value.charCodeAt(i) * (i + 1);
  return hash;
}

/** Stable pseudo-random motion per item — varies delay, entrance, and subtle tilt. */
function motionFor(id: string, index: number, filter: string) {
  const seed = hashString(`${filter}-${id}`);
  return {
    variant: REVEAL_VARIANTS[seed % REVEAL_VARIANTS.length],
    delay: (seed % 9) * 48 + index * 28,
    tilt: ((seed % 5) - 2) * 0.35, // -0.7° … 0.7°
    featured: seed % 11 === 0,
  };
}

/** Light shuffle — different order each filter, stable within a filter session. */
function shuffledItems(items: PortfolioItem[], filter: string) {
  const sorted = [...items].sort((a, b) => {
    const ha = hashString(`${filter}-${a.id}`);
    const hb = hashString(`${filter}-${b.id}`);
    return ha - hb;
  });
  return sorted;
}

export default function PortfolioGallery({
  items,
  categories,
  allLabel,
}: {
  items: PortfolioItem[];
  categories: { key: string; label: string }[];
  allLabel: string;
}) {
  const [filter, setFilter] = useState<string>('all');
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const visible = useMemo(() => {
    const filtered = filter === 'all' ? items : items.filter((i) => i.category === filter);
    return shuffledItems(filtered, filter);
  }, [items, filter]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`filter-chip ${filter === 'all' ? 'is-active' : ''}`}
        >
          {allLabel}
        </button>
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setFilter(c.key)}
            className={`filter-chip ${filter === c.key ? 'is-active' : ''}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div
        key={filter}
        className="portfolio-grid-enter grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((item, i) => {
          const motion = motionFor(item.id, i, filter);
          return (
            <Reveal
              key={`${filter}-${item.id}`}
              delay={motion.delay}
              variant={motion.variant}
              className={motion.featured ? 'sm:col-span-2' : ''}
            >
              <button
                type="button"
                onClick={() => setLightbox(item)}
                className={`portfolio-card group ${motion.featured ? 'aspect-[2/1]' : 'aspect-[4/3]'}`}
                style={{ '--portfolio-tilt': `${motion.tilt}deg` } as CSSProperties}
              >
                <img
                  src={item.image}
                  alt={item.title ?? item.categoryLabel}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <span className="portfolio-card-shine" aria-hidden />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.region && (
                    <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
                      {item.region}
                    </span>
                  )}
                  <span className="text-sm font-semibold text-white">{item.title ?? item.categoryLabel}</span>
                  {item.title && (
                    <span className="mt-0.5 text-xs text-white/70">{item.categoryLabel}</span>
                  )}
                </span>
                {item.region && (
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-brand-primary/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {item.region}
                  </span>
                )}
                <span
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-primary opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>

      {lightbox && (
        <div
          className="lightbox-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          <figure className="lightbox-content max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.categoryLabel} className="max-h-[80vh] w-auto rounded-lg shadow-2xl" />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {lightbox.title && <span className="block font-semibold text-white">{lightbox.title}</span>}
              {lightbox.region ? `${lightbox.region} · ` : ''}
              {lightbox.categoryLabel}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
