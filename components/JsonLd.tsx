import { SITE } from '@/lib/site';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logoc.png`,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.lines[0],
      addressLocality: SITE.address.lines[1],
      addressRegion: SITE.address.lines[2],
      addressCountry: 'LA',
    },
    sameAs: [SITE.facebook, `https://wa.me/${SITE.whatsapp.number.replace(/[^\d]/g, '')}`],
    areaServed: { '@type': 'Country', name: 'Laos' },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
