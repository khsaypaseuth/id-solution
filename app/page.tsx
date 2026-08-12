import { defaultLocale } from '@/i18n/config';

// Static-export-friendly root redirect to the default locale.
// The root layout is a pass-through, so this page renders the full document.
export default function RootPage() {
  const target = `/${defaultLocale}/`;
  return (
    <html lang={defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={target} />
        <title>Saypaseuth Advance Co., Ltd.</title>
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
        Redirecting to <a href={target}>{target}</a>…
      </body>
    </html>
  );
}
