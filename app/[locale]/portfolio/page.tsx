import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import PortfolioGallery, { type PortfolioItem } from '@/components/PortfolioGallery';
import { PORTFOLIO_CATEGORIES } from '@/lib/site';

type Region = 'china' | 'thailand' | 'vietnam' | null;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '/portfolio', dict.meta.pages.portfolio);
}

/** Explicit portfolio set — includes regional projects from China, Thailand, and Vietnam. */
const PROJECTS: { image: number; category: (typeof PORTFOLIO_CATEGORIES)[number]; region: Region }[] = [
  // Existing core set
  { image: 1, category: 'itEquipmentSupply', region: null },
  { image: 2, category: 'itEquipmentSupply', region: null },
  { image: 3, category: 'serverInstallation', region: null },
  { image: 4, category: 'serverInstallation', region: null },
  { image: 5, category: 'networkInfrastructure', region: null },
  { image: 6, category: 'networkInfrastructure', region: null },
  { image: 7, category: 'cctvInstallation', region: null },
  { image: 8, category: 'cctvInstallation', region: null },
  { image: 9, category: 'accessControlProjects', region: null },
  { image: 10, category: 'accessControlProjects', region: null },
  { image: 11, category: 'enterpriseSolutions', region: null },
  { image: 12, category: 'enterpriseSolutions', region: null },
  { image: 13, category: 'electricalProtection', region: null },
  { image: 14, category: 'electricalProtection', region: null },
  { image: 15, category: 'droneSurvey', region: null },
  { image: 16, category: 'droneSurvey', region: null },
  // China
  { image: 17, category: 'electricalProtection', region: 'china' },
  { image: 18, category: 'serverInstallation', region: 'china' },
  { image: 19, category: 'cctvInstallation', region: 'china' },
  { image: 20, category: 'droneSurvey', region: 'china' },
  // Thailand
  { image: 21, category: 'itEquipmentSupply', region: 'thailand' },
  { image: 22, category: 'accessControlProjects', region: 'thailand' },
  { image: 23, category: 'networkInfrastructure', region: 'thailand' },
  { image: 24, category: 'accessControlProjects', region: 'thailand' },
  // Vietnam
  { image: 25, category: 'droneSurvey', region: 'vietnam' },
  { image: 26, category: 'cctvInstallation', region: 'vietnam' },
  { image: 27, category: 'serverInstallation', region: 'vietnam' },
  { image: 28, category: 'electricalProtection', region: 'vietnam' },
  // Practical site-work photos
  { image: 29, category: 'networkInfrastructure', region: null },
  { image: 30, category: 'cctvInstallation', region: null },
  { image: 31, category: 'accessControlProjects', region: null },
  { image: 32, category: 'electricalProtection', region: null },
  { image: 33, category: 'droneSurvey', region: null },
  { image: 34, category: 'serverInstallation', region: null },
  { image: 35, category: 'itEquipmentSupply', region: null },
  { image: 36, category: 'accessControlProjects', region: null },
  { image: 37, category: 'networkInfrastructure', region: null },
  { image: 38, category: 'enterpriseSolutions', region: null },
  { image: 39, category: 'droneSurvey', region: null },
  { image: 40, category: 'networkInfrastructure', region: null },
  // More practical installation photos
  { image: 41, category: 'networkInfrastructure', region: null },
  { image: 42, category: 'networkInfrastructure', region: null },
  { image: 43, category: 'electricalProtection', region: null },
  { image: 44, category: 'cctvInstallation', region: null },
  { image: 45, category: 'accessControlProjects', region: null },
  { image: 46, category: 'serverInstallation', region: null },
  { image: 47, category: 'droneSurvey', region: null },
  { image: 48, category: 'accessControlProjects', region: null },
  { image: 49, category: 'itEquipmentSupply', region: null },
  { image: 50, category: 'enterpriseSolutions', region: null },
  { image: 51, category: 'networkInfrastructure', region: null },
  { image: 52, category: 'electricalProtection', region: null },
  // Solar power installation
  { image: 53, category: 'solarInstallation', region: null },
  { image: 54, category: 'solarInstallation', region: null },
  { image: 56, category: 'solarInstallation', region: null },
];

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

  const titles = dict.portfolio.titles as Record<string, string>;

  const items: PortfolioItem[] = PROJECTS.map((p) => ({
    id: `project-${p.image}`,
    category: p.category,
    categoryLabel: dict.portfolio.categories[p.category as keyof typeof dict.portfolio.categories],
    image: `/portfolio/project-${p.image}.jpg`,
    title: titles[String(p.image)],
    region: p.region ? dict.portfolio.regions[p.region] : undefined,
  }));

  return (
    <>
      <PageHero
        title={dict.portfolio.title}
        subtitle={dict.portfolio.subtitle}
        image="/images/portfolio-hero.jpg"
        eyebrow={dict.common.brandEyebrow}
      />
      <section className="container-px section">
        <PortfolioGallery items={items} categories={categories} allLabel={dict.portfolio.all} />
      </section>
    </>
  );
}
