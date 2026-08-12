import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import BrandLogo from '@/components/BrandLogo';
import Reveal from '@/components/Reveal';
import { PARTNER_CATEGORIES } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '/partners', dict.meta.pages.partners);
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);

  return (
    <>
      <PageHero
        title={dict.partners.title}
        subtitle={dict.partners.subtitle}
        image="/images/partners-hero.jpg"
        eyebrow={dict.common.brandEyebrow}
      />
      <section className="container-px section space-y-14">
        {PARTNER_CATEGORIES.map((cat, catIdx) => (
          <Reveal key={cat.key} delay={catIdx * 80}>
            <div>
              <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-brand-primary">
                <span className="h-6 w-1.5 rounded-full bg-brand-accent" />
                {dict.partners.categories[cat.key as keyof typeof dict.partners.categories]}
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {cat.brands.map((brand, i) => (
                  <Reveal key={brand.slug} delay={i * 40} variant="scale">
                    <div className="group flex h-24 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-primary/10 hover:shadow-xl">
                      <BrandLogo name={brand.name} slug={brand.slug} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
