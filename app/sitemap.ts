import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { SITE } from '@/lib/site';

const paths = ['', '/about', '/products', '/team', '/portfolio', '/partners', '/clients', '/contact', '/faq', '/privacy'];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${SITE.url}/${locale}${p}`,
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : 0.7,
    })),
  );
}
