import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_Lao } from 'next/font/google';
import { locales, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { SITE } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansLao = Noto_Sans_Lao({
  subsets: ['lao'],
  variable: '--font-lao',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#2A2B6D',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : 'en');
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL(SITE.url),
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    manifest: '/site.webmanifest',
    keywords: [
      'IT Laos', 'Server Laos', 'Firewall Laos', 'CCTV Laos', 'Hikvision Laos',
      'Fortinet Laos', 'Access Control Laos', 'Office Supplies Laos',
      'Networking Laos', 'Enterprise Solutions Laos',
    ],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: 'website',
      siteName: SITE.name,
      images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: SITE.name }],
    },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(safeLocale);

  return (
    <html lang={safeLocale} className={`${inter.variable} ${notoSansLao.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        <Header locale={safeLocale} dict={dict} />
        <main className="page-canvas">{children}</main>
        <Footer locale={safeLocale} dict={dict} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
