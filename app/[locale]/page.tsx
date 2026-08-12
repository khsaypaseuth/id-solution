import Link from 'next/link';
import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import InquiryForm from '@/components/InquiryForm';
import Reveal from '@/components/Reveal';
import HeroDataCenter from '@/components/HeroDataCenter';
import ClientLogo from '@/components/ClientLogo';
import { WhatsAppIconLink } from '@/components/WhatsAppButton';
import { CLIENTS, HOME_FEATURED } from '@/lib/site';
import {
  IconTeam, IconServer, IconShield, IconSupport, IconPrice, IconGlobe,
  IconBuilding, IconBook, IconBank, IconTruck, IconFactory, IconShop, IconHotel, IconBriefcase,
  IconZap, IconSun, IconCamera, IconDrone, IconArrow, IconCheck,
} from '@/components/Icons';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '', dict.meta.pages.home);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);

  const whyItems = [
    { key: 'professionalTeam', Icon: IconTeam },
    { key: 'enterpriseExpertise', Icon: IconServer },
    { key: 'trustedBrands', Icon: IconShield },
    { key: 'afterSales', Icon: IconSupport },
    { key: 'pricing', Icon: IconPrice },
    { key: 'nationwide', Icon: IconGlobe },
  ] as const;

  const industries = [
    { key: 'government', Icon: IconBuilding },
    { key: 'education', Icon: IconBook },
    { key: 'banking', Icon: IconBank },
    { key: 'logistics', Icon: IconTruck },
    { key: 'manufacturing', Icon: IconFactory },
    { key: 'retail', Icon: IconShop },
    { key: 'hospitality', Icon: IconHotel },
    { key: 'energy', Icon: IconZap },
    { key: 'smes', Icon: IconBriefcase },
  ] as const;

  const productLinks = [
    { key: 'enterprise', href: 'enterprise', Icon: IconServer },
    { key: 'electrical', href: 'electricalProtection', Icon: IconZap },
    { key: 'solar', href: 'solarPower', Icon: IconSun },
    { key: 'security', href: 'cctv', Icon: IconCamera },
    { key: 'drone', href: 'droneSurvey', Icon: IconDrone },
    { key: 'services', href: '', Icon: IconSupport },
  ] as const;

  const featuredClients = HOME_FEATURED.clients
    .map((slug) => CLIENTS.find((c) => c.slug === slug))
    .filter(Boolean);

  const portfolioTitles = dict.portfolio.titles as Record<string, string>;
  const featuredPortfolio = HOME_FEATURED.portfolio.map((id) => ({
    id,
    image: `/portfolio/project-${id}.jpg`,
    title: portfolioTitles[String(id)] ?? dict.portfolio.categories.serverInstallation,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-primary text-white">
        <HeroDataCenter />
        <div className="absolute inset-0 bg-black/25" aria-hidden />
        {/* Left-heavy gradient — text on left; flipped racks + LEDs on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/88 via-brand-primary/55 to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
          <div className="hero-orb absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand-accent/30 blur-3xl" />
          <div className="hero-orb-delay absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="container-px relative py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="hero-line hero-line-1 mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
              {dict.home.intro.title}
            </p>
            <h1 className="hero-line hero-line-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {dict.home.hero.headline}
            </h1>
            <p className="hero-line hero-line-3 mt-5 max-w-2xl text-base text-white/85 md:text-lg">
              {dict.home.hero.subheadline}
            </p>
            <div className="hero-line hero-line-4 mt-8 flex flex-wrap items-center gap-3">
              <Link href={`/${loc}/contact#quote`} className="btn-primary">
                {dict.common.requestQuotation}
              </Link>
              <Link href={`/${loc}/contact`} className="btn-outline">
                {dict.common.contactUs}
              </Link>
              <WhatsAppIconLink label={dict.common.whatsapp} />
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="section-eyebrow">{dict.common.brandEyebrow}</p>
            <h2 className="section-title">{dict.home.intro.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80">{dict.home.intro.body}</p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3 text-ink/80">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                {dict.home.intro.experience}
              </li>
              <li className="flex gap-3 text-ink/80">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                {dict.home.intro.commitment}
              </li>
            </ul>
            <Link href={`/${loc}/products`} className="btn-secondary mt-8">
              {dict.common.learnMore}
            </Link>
          </Reveal>
          <Reveal delay={120} variant="slide-left">
            <div className="media-frame aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10">
              <img
                src="/images/about.jpg"
                alt="Saypaseuth team and technology"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section relative overflow-hidden bg-gray-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(42,43,109,0.06),transparent_50%)]" aria-hidden />
        <div className="container-px relative">
          <Reveal className="text-center">
            <p className="section-eyebrow mx-auto">Saypaseuth Advance</p>
            <h2 className="section-title mx-auto">{dict.home.why.title}</h2>
            <p className="section-subtitle mx-auto">{dict.home.why.subtitle}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map(({ key, Icon }, i) => (
              <Reveal key={key} delay={i * 70}>
                <div className="card card-premium group h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-primary">
                    {dict.home.why.items[key].title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">{dict.home.why.items[key].body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container-px">
          <Reveal className="text-center">
            <p className="section-eyebrow mx-auto">Saypaseuth Advance</p>
            <h2 className="section-title mx-auto">{dict.home.industries.title}</h2>
            <p className="section-subtitle mx-auto">{dict.home.industries.subtitle}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {industries.map(({ key, Icon }, i) => (
              <Reveal key={key} delay={i * 50} variant="scale">
                <div className="industry-tile flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent transition-transform duration-500">
                    <Icon />
                  </span>
                  <span className="text-sm font-medium text-ink/80">
                    {dict.home.industries.items[key]}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="section bg-gray-50">
        <div className="container-px">
          <Reveal className="text-center">
            <p className="section-eyebrow mx-auto">{dict.common.brandEyebrow}</p>
            <h2 className="section-title mx-auto">{dict.home.productsPreview.title}</h2>
            <p className="section-subtitle mx-auto">{dict.home.productsPreview.subtitle}</p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productLinks.map(({ key, href, Icon }, i) => (
              <Reveal key={key} delay={i * 50}>
                <Link
                  href={href ? `/${loc}/products#${href}` : `/${loc}/products`}
                  className="card card-premium group flex items-start gap-4 p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-brand-accent shadow-md shadow-brand-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon width={22} height={22} />
                  </span>
                  <span>
                    <span className="block font-semibold text-brand-primary group-hover:text-brand-secondary">
                      {dict.home.productsPreview.items[key]}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1 text-sm text-brand-secondary">
                      {dict.common.learnMore}
                      <IconArrow width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="section">
        <div className="container-px">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-eyebrow">{dict.common.brandEyebrow}</p>
              <h2 className="section-title">{dict.home.portfolio.title}</h2>
              <p className="section-subtitle !mx-0 !max-w-xl">{dict.home.portfolio.subtitle}</p>
            </div>
            <Link href={`/${loc}/portfolio`} className="btn-secondary shrink-0">
              {dict.common.viewAll}
              <IconArrow width={16} height={16} />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPortfolio.map((item, i) => (
              <Reveal key={item.id} delay={i * 60} variant="scale">
                <Link href={`/${loc}/portfolio`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-brand-primary shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-brand-primary/85 via-transparent to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">{item.title}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="section border-y border-gray-100 bg-white">
        <div className="container-px">
          <Reveal className="text-center">
            <p className="section-eyebrow mx-auto">{dict.common.brandEyebrow}</p>
            <h2 className="section-title mx-auto">{dict.home.clients.title}</h2>
            <p className="section-subtitle mx-auto">{dict.home.clients.subtitle}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
            {featuredClients.map((client, i) => client && (
              <Reveal key={client.slug} delay={i * 40} variant="scale">
                <div className="logo-card flex h-full flex-col items-center justify-center gap-3 p-5">
                  <ClientLogo client={client} />
                  <span className="text-center text-xs font-medium text-ink/70">{client.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link href={`/${loc}/clients`} className="btn-secondary">
              {dict.common.viewAll}
              <IconArrow width={16} height={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Quotation CTA + form */}
      <section id="quote" className="section relative overflow-hidden bg-brand-primary text-white">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
          <div className="hero-orb absolute right-10 top-0 h-56 w-56 rounded-full bg-brand-accent/40 blur-3xl" />
        </div>
        <div className="container-px relative grid items-start gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="section-eyebrow !text-brand-accent before:!bg-brand-accent">{dict.common.brandEyebrow}</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{dict.quote.title}</h2>
            <p className="mt-4 max-w-lg text-white/80">{dict.quote.subtitle}</p>

            <ul className="mt-8 space-y-4">
              {dict.quote.highlights.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                    <IconCheck width={14} height={14} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{item.title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-white/70">{item.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/65">
              {dict.quote.trustLine}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppIconLink label={dict.common.whatsapp} />
              <Link href={`/${loc}/contact`} className="btn-outline">
                {dict.common.contactUs}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} variant="slide-left">
            <div className="form-card-premium">
              <InquiryForm variant="quote" dict={dict} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
