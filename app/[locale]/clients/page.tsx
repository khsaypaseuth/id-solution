import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import ClientLogo from '@/components/ClientLogo';
import Reveal from '@/components/Reveal';
import { CLIENTS } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '/clients', dict.meta.pages.clients);
}

export default async function ClientsPage({
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
        title={dict.clients.title}
        subtitle={dict.clients.subtitle}
        image="/images/clients-hero.jpg"
        eyebrow={dict.common.brandEyebrow}
      />
      <section className="container-px section">
        <Reveal className="mb-10 text-center">
          <p className="section-eyebrow mx-auto">{dict.clients.sectionEyebrow}</p>
          <h2 className="section-title mx-auto">{dict.clients.sectionTitle}</h2>
          <p className="section-subtitle mx-auto">{dict.clients.sectionSubtitle}</p>
        </Reveal>

        {CLIENTS.length === 0 ? (
          <p className="text-center text-ink/60">{dict.clients.sectionSubtitle}</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {CLIENTS.map((client, i) => {
              const summary = dict.clients.summaries[client.slug as keyof typeof dict.clients.summaries];
              return (
              <Reveal key={client.slug} delay={i * 45} variant="scale">
                <div className="logo-card h-full">
                  <div className="relative z-10 flex h-20 w-full items-center justify-center">
                    <ClientLogo client={client} />
                  </div>
                  <span className="relative z-10 text-sm font-medium leading-snug text-ink/80">
                    {client.name}
                  </span>
                  {summary && (
                    <span className="relative z-10 text-xs leading-snug text-ink/50">
                      {summary}
                    </span>
                  )}
                </div>
              </Reveal>
            );})}
          </div>
        )}
      </section>
    </>
  );
}
