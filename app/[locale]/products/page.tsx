import Link from 'next/link';
import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import PageHero from '@/components/PageHero';
import { IconMonitor, IconServer, IconCamera, IconFingerprint, IconGate, IconArrow, IconCheck } from '@/components/Icons';

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);

  const sections = [
    { key: 'consumer', Icon: IconMonitor, image: '/images/products-consumer.jpg', items: dict.products.consumer.items, title: dict.products.consumer.title },
    { key: 'enterprise', Icon: IconServer, image: '/images/products-enterprise.jpg', items: dict.products.enterprise.items, title: dict.products.enterprise.title },
    { key: 'cctv', Icon: IconCamera, image: '/images/products-cctv.jpg', items: dict.products.cctv.items, title: dict.products.cctv.title },
    { key: 'accessControl', Icon: IconFingerprint, image: '/images/products-access.jpg', items: dict.products.accessControl.items, title: dict.products.accessControl.title },
    { key: 'gateBarrier', Icon: IconGate, image: '/images/products-gate.jpg', items: dict.products.gateBarrier.items, title: dict.products.gateBarrier.title },
  ] as const;

  return (
    <>
      <PageHero title={dict.products.title} subtitle={dict.products.subtitle} />

      <div className="container-px section space-y-20">
        {sections.map((sec, i) => {
          const itemList = Object.values(sec.items) as string[];
          return (
            <section key={sec.key} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                    <sec.Icon />
                  </span>
                  <h2 className="text-2xl font-bold text-brand-primary md:text-3xl">{sec.title}</h2>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {itemList.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-ink/80">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                        <IconCheck width={13} height={13} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10">
                <img src={sec.image} alt={sec.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="container-px flex flex-col items-center gap-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-brand-primary md:text-3xl">{dict.quote.title}</h2>
          <p className="max-w-xl text-ink/70">{dict.quote.subtitle}</p>
          <Link href={`/${loc}/contact#quote`} className="btn-primary mt-2">
            {dict.common.requestFreeQuotation}
            <IconArrow width={18} height={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
