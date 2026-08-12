import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '/privacy', dict.meta.pages.privacy);
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  const p = dict.privacy;

  return (
    <>
      <PageHero title={p.title} subtitle={p.subtitle} eyebrow={dict.common.brandEyebrow} />
      <section className="container-px section max-w-3xl">
        <p className="text-sm text-ink/50">{p.updated}</p>
        <div className="mt-8 space-y-8">
          {p.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 40}>
              <h2 className="text-xl font-bold text-brand-primary">{section.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/80">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
