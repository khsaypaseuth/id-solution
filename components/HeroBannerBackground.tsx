'use client';

type PanVariant = 'left' | 'right' | 'center';

const VARIANT_CLASS: Record<PanVariant, string> = {
  left: 'hero-banner-pan-left',
  right: 'hero-banner-pan-right',
  center: 'hero-banner-pan-center',
};

/** Pick a pan direction from the image path so each page feels slightly different. */
function panFromImage(image: string): PanVariant {
  const variants: PanVariant[] = ['left', 'right', 'center'];
  let hash = 0;
  for (let i = 0; i < image.length; i++) hash += image.charCodeAt(i);
  return variants[hash % variants.length];
}

export default function HeroBannerBackground({ image }: { image: string }) {
  const pan = panFromImage(image);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {/* img + overscan gives room for visible Ken Burns pan/zoom */}
        <img
          src={image}
          alt=""
          className={`hero-banner-media ${VARIANT_CLASS[pan]}`}
          draggable={false}
        />
      </div>
      <div className="hero-banner-shimmer pointer-events-none absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
    </>
  );
}
