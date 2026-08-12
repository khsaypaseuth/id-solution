import HeroBannerBackground from '@/components/HeroBannerBackground';

export default function PageHero({
  title,
  subtitle,
  image,
  eyebrow = 'Saypaseuth Advance',
}: {
  title: string;
  subtitle?: string;
  image?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-primary text-white">
      {image ? (
        <>
          <HeroBannerBackground image={image} />
          <div className="noise-overlay absolute inset-0 pointer-events-none" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/88 to-brand-primary/40"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/75 via-transparent to-brand-primary/35" aria-hidden />
          <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden>
            <div className="hero-orb absolute -left-16 top-8 h-56 w-56 rounded-full bg-brand-accent/25 blur-3xl" />
            <div className="hero-orb-delay absolute -right-10 bottom-4 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          </div>
        </>
      ) : (
        <>
          <div
            className="hero-banner-gradient absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 18% 20%, #F5B719 0, transparent 36%), radial-gradient(circle at 82% 0, #3F418A 0, transparent 40%)',
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
            <div className="hero-orb absolute -right-16 top-0 h-48 w-48 rounded-full bg-brand-accent/25 blur-3xl" />
          </div>
        </>
      )}

      <div className="container-px relative py-16 md:py-24">
        <p className="hero-line hero-line-1 mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
          <span className="h-px w-10 bg-brand-accent" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="hero-line hero-line-2 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="hero-line hero-line-3 mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
