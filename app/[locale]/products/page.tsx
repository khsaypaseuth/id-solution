import Link from 'next/link';
import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import HeroBannerBackground from '@/components/HeroBannerBackground';
import Reveal from '@/components/Reveal';
import { WhatsAppIconLink } from '@/components/WhatsAppButton';
import {
  IconMonitor, IconServer, IconCamera, IconFingerprint, IconGate,
  IconArrow, IconCheck, IconZap, IconSun, IconDrone,
} from '@/components/Icons';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '/products', dict.meta.pages.products);
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  const p = dict.products;

  const sections = [
    { key: 'electricalProtection', Icon: IconZap, image: '/images/products-electrical.jpg', group: p.electricalProtection },
    { key: 'solarPower', Icon: IconSun, image: '/images/products-solar.jpg', group: p.solarPower },
    { key: 'droneSurvey', Icon: IconDrone, image: '/images/products-drone.jpg', group: p.droneSurvey },
    { key: 'enterprise', Icon: IconServer, image: '/images/products-enterprise.jpg', group: p.enterprise },
    { key: 'cctv', Icon: IconCamera, image: '/images/products-cctv.jpg', group: p.cctv },
    { key: 'accessControl', Icon: IconFingerprint, image: '/images/products-access.jpg', group: p.accessControl },
    { key: 'gateBarrier', Icon: IconGate, image: '/images/products-gate.jpg', group: p.gateBarrier },
    { key: 'consumer', Icon: IconMonitor, image: '/images/products-consumer.jpg', group: p.consumer },
  ] as const;

  const serviceSteps = ['supply', 'installation', 'maintenance', 'support'] as const;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-primary text-white">
        <HeroBannerBackground image="/images/products-hero.jpg" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/92 to-brand-primary/35"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-brand-primary/45" aria-hidden />
        <div className="noise-overlay absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden>
          <div className="hero-orb absolute -left-16 top-8 h-56 w-56 rounded-full bg-brand-accent/25 blur-3xl" />
          <div className="hero-orb-delay absolute -right-10 bottom-4 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="container-px relative flex min-h-[32rem] flex-col justify-center py-20 md:py-28 lg:py-32">
          <p className="hero-line hero-line-1 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
            <span className="h-px w-10 bg-brand-accent" aria-hidden />
            {p.eyebrow}
          </p>

          <h1 className="hero-line hero-line-2 mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {p.title}
          </h1>

          <p className="hero-line hero-line-3 mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {p.subtitle}
          </p>

          <div className="hero-line hero-line-4 mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
              {p.categoriesLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sections.map((sec) => (
                <a key={sec.key} href={`#${sec.key}`} className="chip-link">
                  <sec.Icon width={15} height={15} aria-hidden />
                  {sec.group.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" aria-hidden>
          <div className="h-px w-24 bg-brand-accent md:w-40" />
        </div>
      </section>

      {/* ── Category sections ────────────────────────────────── */}
      <div className="bg-white">
        {sections.map((sec, i) => {
          const items = Object.values(sec.group.items) as string[];
          const flip = i % 2 === 1;

          return (
            <section
              key={sec.key}
              id={sec.key}
              className={`scroll-mt-24 border-b border-gray-100 py-16 md:py-24 ${flip ? 'bg-gray-50/60' : 'bg-white'}`}
            >
              <div className="container-px grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Copy */}
                <Reveal
                  variant={flip ? 'slide-left' : 'slide-right'}
                  className={`lg:col-span-6 ${flip ? 'lg:order-2 lg:col-start-7' : ''}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="index-numeral">{String(i + 1).padStart(2, '0')}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand-accent to-transparent" aria-hidden />
                  </div>

                  <div className="mt-6 flex items-start gap-4">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-brand-accent shadow-md shadow-brand-primary/20">
                      <sec.Icon width={21} height={21} />
                    </span>
                    <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-primary md:text-[2rem]">
                      {sec.group.title}
                    </h2>
                  </div>

                  <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                    {items.map((item) => (
                      <li key={item} className="spec-row">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                          <IconCheck width={11} height={11} strokeWidth={3.5} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/${loc}/contact#quote`}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
                  >
                    <span className="link-underline">{dict.common.requestQuotation}</span>
                    <IconArrow
                      width={16}
                      height={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </Reveal>

                {/* Image */}
                <Reveal
                  delay={120}
                  variant="scale"
                  className={`lg:col-span-6 ${flip ? 'lg:order-1 lg:col-start-1' : ''}`}
                >
                  <div className="relative">
                    <div
                      className={`absolute -inset-3 rounded-[1.75rem] border border-brand-accent/25 ${flip ? '-rotate-1' : 'rotate-1'}`}
                      aria-hidden
                    />
                    <div className="media-frame relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-primary shadow-2xl shadow-brand-primary/20">
                      <img
                        src={sec.image}
                        alt={sec.group.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-brand-primary/55 via-transparent to-transparent"
                        aria-hidden
                      />
                    </div>
                    <span
                      className="absolute -bottom-4 left-6 rounded-full bg-brand-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-primary shadow-lg"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── End-to-end delivery ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-primary py-20 text-white md:py-24">
        <div className="grid-lines absolute inset-0 opacity-[0.14]" aria-hidden />
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl" aria-hidden />

        <div className="container-px relative">
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
              <span className="h-px w-10 bg-brand-accent" aria-hidden />
              {p.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">{p.services.title}</h2>
            <p className="mt-4 text-base text-white/70">{p.services.subtitle}</p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {serviceSteps.map((step, i) => (
              <Reveal key={step} delay={i * 80} className="bg-brand-primary">
                <div className="step-cell h-full p-7">
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{p.services.items[step].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {p.services.items[step].body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,183,25,0.14),transparent_55%)]"
          aria-hidden
        />
        <Reveal className="container-px relative flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">
            {dict.quote.title}
          </h2>
          <p className="max-w-xl text-base text-ink/70">{dict.quote.subtitle}</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link href={`/${loc}/contact#quote`} className="btn-primary">
              {dict.common.requestFreeQuotation}
              <IconArrow width={18} height={18} />
            </Link>
            <WhatsAppIconLink label={dict.common.whatsapp} />
          </div>
        </Reveal>
      </section>
    </>
  );
}
