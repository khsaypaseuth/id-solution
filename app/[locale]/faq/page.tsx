import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '/faq', dict.meta.pages.faq);
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);

  return (
    <>
      <PageHero
        title={dict.faq.title}
        subtitle={dict.faq.subtitle}
        eyebrow={dict.common.brandEyebrow}
      />
      <section className="container-px section max-w-3xl">
        <div className="space-y-4">
          {dict.faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <details className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-brand-primary marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="mt-1 text-brand-accent transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
