import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import InquiryForm from '@/components/InquiryForm';
import Reveal from '@/components/Reveal';
import { SITE } from '@/lib/site';
import { WhatsAppIconLink } from '@/components/WhatsAppButton';
import { IconPin, IconPhone, IconMail } from '@/components/Icons';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '/contact', dict.meta.pages.contact);
}

export default async function ContactPage({
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
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
        image="/images/contact-hero.jpg"
        eyebrow={dict.common.brandEyebrow}
      />

      <section className="container-px section grid gap-12 lg:grid-cols-2">
        {/* Info */}
        <Reveal>
        <div>
          <h2 className="text-2xl font-bold text-brand-primary">{dict.contact.infoTitle}</h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary"><IconPin /></span>
              <div>
                <p className="text-sm font-semibold text-ink">{dict.contact.address}</p>
                <p className="text-sm text-ink/70">{SITE.address.lines.join(', ')}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary"><IconPhone /></span>
              <div>
                <p className="text-sm font-semibold text-ink">{dict.contact.phone}</p>
                <a href={SITE.phoneHref} className="text-sm text-brand-secondary hover:underline">{SITE.phone}</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary"><IconMail /></span>
              <div>
                <p className="text-sm font-semibold text-ink">{dict.contact.email}</p>
                <a href={`mailto:${SITE.email}`} className="text-sm text-brand-secondary hover:underline">{SITE.email}</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{dict.contact.hours}</p>
                <p className="text-sm text-ink/70">{dict.contact.hoursValue}</p>
              </div>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2 text-sm">
              {dict.contact.facebook}
            </a>
            <WhatsAppIconLink size="sm" tone="light" label={dict.contact.whatsapp} />
          </div>

          {/* Map */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold text-brand-primary">{dict.contact.mapTitle}</h3>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <iframe
                src={SITE.map.embed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Saypaseuth office location"
              />
            </div>
          </div>
        </div>
        </Reveal>

        {/* Contact form */}
        <Reveal delay={120} variant="slide-left">
        <div>
          <div className="form-card-premium">
            <h2 className="mb-6 text-2xl font-bold text-brand-primary">{dict.contact.form.title}</h2>
            <InquiryForm variant="contact" dict={dict} />
          </div>
        </div>
        </Reveal>
      </section>

      {/* Quotation form anchor */}
      <section id="quote" className="bg-gray-50">
        <div className="container-px section">
          <div className="mx-auto max-w-2xl">
            <Reveal className="text-center">
              <p className="section-eyebrow mx-auto">{dict.common.brandEyebrow}</p>
              <h2 className="section-title mx-auto">{dict.quote.title}</h2>
              <p className="section-subtitle mx-auto">{dict.quote.subtitle}</p>
            </Reveal>
            <Reveal delay={100}>
            <div className="form-card-premium mt-8">
              <InquiryForm variant="quote" dict={dict} />
            </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
