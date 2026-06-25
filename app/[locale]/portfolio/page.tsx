import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import PageHero from '@/components/PageHero';
import PortfolioGallery, { type PortfolioItem } from '@/components/PortfolioGallery';
import { PORTFOLIO_CATEGORIES } from '@/lib/site';

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);

  const categories = PORTFOLIO_CATEGORIES.map((key) => ({
    key,
    label: dict.portfolio.categories[key as keyof typeof dict.portfolio.categories],
  }));

  // 2 placeholder projects per category (replace images under /public/portfolio)
  const items: PortfolioItem[] = PORTFOLIO_CATEGORIES.flatMap((category, ci) =>
    [1, 2].map((n) => ({
      id: `${category}-${n}`,
      category,
      categoryLabel: dict.portfolio.categories[category as keyof typeof dict.portfolio.categories],
      image: `/portfolio/project-${ci * 2 + n}.jpg`,
    })),
  );

  return (
    <>
      <PageHero title={dict.portfolio.title} subtitle={dict.portfolio.subtitle} />
      <section className="container-px section">
        <PortfolioGallery items={items} categories={categories} allLabel={dict.portfolio.all} />
      </section>
    </>
  );
}
