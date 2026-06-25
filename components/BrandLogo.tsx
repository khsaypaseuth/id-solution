'use client';

import { useState } from 'react';

// Tries /partners/<slug>.svg, then .png, then falls back to the brand name text.
export default function BrandLogo({ name, slug }: { name: string; slug: string }) {
  const sources = [`/partners/${slug}.svg`, `/partners/${slug}.png`];
  const [idx, setIdx] = useState(0);

  if (idx >= sources.length) {
    return (
      <span className="text-base font-semibold text-gray-400 transition-colors duration-300 group-hover:text-brand-primary">
        {name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sources[idx]}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setIdx((i) => i + 1)}
      className="max-h-12 max-w-[80%] object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
    />
  );
}
