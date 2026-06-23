'use client';

import { useState } from 'react';

export type PortfolioItem = {
  id: string;
  category: string;
  categoryLabel: string;
  image: string;
};

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

  const visible = filter === 'all' ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            filter === 'all' ? 'bg-brand-primary text-white' : 'bg-gray-100 text-ink/70 hover:bg-gray-200'
          }`}
        >
          {allLabel}
        </button>
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setFilter(c.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === c.key ? 'bg-brand-primary text-white' : 'bg-gray-100 text-ink/70 hover:bg-gray-200'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 text-left"
          >
            <img
              src={item.image}
              alt={item.categoryLabel}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm font-medium text-white">{item.categoryLabel}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          <figure className="max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.categoryLabel} className="max-h-[80vh] w-auto rounded-lg" />
            <figcaption className="mt-3 text-center text-sm text-white/80">{lightbox.categoryLabel}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
