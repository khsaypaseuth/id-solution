import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';
import { SITE } from '@/lib/site';

type PageMeta = { title: string; description: string };

export function pageMetadata(
  locale: Locale,
  path: string,
  meta: PageMeta,
): Metadata {
  const url = `${SITE.url}/${locale}${path}`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${SITE.url}/${l}${path}`]),
  );

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      siteName: SITE.name,
      url,
      images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: SITE.name }],
    },
    alternates: {
      canonical: url,
      languages,
    },
  };
}
