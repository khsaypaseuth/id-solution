import Link from 'next/link';
import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { IconCheck, IconShield, IconGlobe, IconTeam } from '@/components/Icons';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '/about', dict.meta.pages.about);
}

const valueIcons = {
  integrity: IconShield,
  quality: IconCheck,
  service: IconGlobe,
  partnership: IconTeam,
} as const;

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  const a = dict.about;

  return (
    <>
      <PageHero title={a.title} subtitle={a.subtitle} image="/images/about.jpg" eyebrow={dict.common.brandEyebrow} />

      <section className="container-px section grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-bold text-brand-primary">{a.mission.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">{a.mission.body}</p>
        </Reveal>
        <Reveal delay={100} variant="slide-left">
          <h2 className="text-2xl font-bold text-brand-primary">{a.vision.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">{a.vision.body}</p>
        </Reveal>
      </section>

      <section className="section bg-gray-50">
        <div className="container-px">
          <Reveal className="text-center">
            <p className="section-eyebrow mx-auto">{dict.common.brandEyebrow}</p>
            <h2 className="section-title mx-auto">{a.values.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(a.values.items) as Array<keyof typeof valueIcons>).map((key, i) => {
              const Icon = valueIcons[key];
              const item = a.values.items[key];
              return (
                <Reveal key={key} delay={i * 60}>
                  <div className="card card-premium h-full">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                      <Icon width={22} height={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-primary">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-px section">
        <Reveal className="text-center">
          <h2 className="section-title mx-auto">{a.stats.title}</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {Object.values(a.stats.items).map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70} variant="scale">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-brand-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-ink/70">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link href={`/${loc}/contact#quote`} className="btn-primary">
            {dict.common.requestQuotation}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
