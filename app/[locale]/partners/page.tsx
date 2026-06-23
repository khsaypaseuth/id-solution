import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import PageHero from '@/components/PageHero';
import { PARTNER_CATEGORIES } from '@/lib/site';

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
      <PageHero title={dict.partners.title} subtitle={dict.partners.subtitle} />
      <section className="container-px section space-y-14">
        {PARTNER_CATEGORIES.map((cat) => (
          <div key={cat.key}>
            <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-brand-primary">
              <span className="h-6 w-1.5 rounded-full bg-brand-accent" />
              {dict.partners.categories[cat.key as keyof typeof dict.partners.categories]}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {cat.brands.map((brand) => (
                <div
                  key={brand}
                  className="group flex h-24 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="text-base font-semibold text-gray-400 transition-colors duration-300 group-hover:text-brand-primary">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
