import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import PageHero from '@/components/PageHero';
import { CLIENTS } from '@/lib/site';

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
      <PageHero title={dict.clients.title} subtitle={dict.clients.subtitle} />
      <section className="container-px section">
        {CLIENTS.length === 0 ? (
          <p className="text-center text-ink/60">{dict.clients.empty}</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-primary/5 text-2xl font-bold text-brand-primary">
                  {client.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </div>
                <span className="text-sm font-medium text-ink/80">{client.name}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
