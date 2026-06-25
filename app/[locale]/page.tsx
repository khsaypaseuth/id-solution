import Link from 'next/link';
import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { whatsappLink } from '@/lib/site';
import InquiryForm from '@/components/InquiryForm';
import {
  IconTeam, IconServer, IconShield, IconSupport, IconPrice, IconGlobe,
  IconBuilding, IconBook, IconBank, IconTruck, IconFactory, IconShop, IconHotel, IconBriefcase,
} from '@/components/Icons';

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
    { key: 'smes', Icon: IconBriefcase },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-primary text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero.jpg)' }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/95 via-brand-primary/85 to-brand-secondary/70" aria-hidden />
        <div className="container-px relative py-24 md:py-32">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {dict.home.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">
              {dict.home.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${loc}/contact#quote`} className="btn-primary">
                {dict.common.requestQuotation}
              </Link>
              <Link href={`/${loc}/contact`} className="btn-outline">
                {dict.common.contactUs}
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                {dict.common.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <div>
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
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10">
            {/* Replace /public/images/about.jpg */}
            <img
              src="/images/about.jpg"
              alt="ID Solution team and technology"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container-px">
          <div className="text-center">
            <h2 className="section-title mx-auto">{dict.home.why.title}</h2>
            <p className="section-subtitle mx-auto">{dict.home.why.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map(({ key, Icon }) => (
              <div key={key} className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary">
                  {dict.home.why.items[key].title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{dict.home.why.items[key].body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container-px">
          <div className="text-center">
            <h2 className="section-title mx-auto">{dict.home.industries.title}</h2>
            <p className="section-subtitle mx-auto">{dict.home.industries.subtitle}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map(({ key, Icon }) => (
              <div
                key={key}
                className="flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-transform hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <Icon />
                </span>
                <span className="text-sm font-medium text-ink/80">
                  {dict.home.industries.items[key]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation CTA + form */}
      <section id="quote" className="section bg-brand-primary text-white">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{dict.quote.title}</h2>
            <p className="mt-4 max-w-md text-white/80">{dict.quote.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                {dict.common.whatsapp}
              </a>
              <Link href={`/${loc}/contact`} className="btn-outline">
                {dict.common.contactUs}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
            <InquiryForm variant="quote" dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
