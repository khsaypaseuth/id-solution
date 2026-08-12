import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import { SITE, SHOW_TEAM_NAV, whatsappLink } from '@/lib/site';
import { IconFacebook, IconWhatsApp, IconPin } from '@/components/Icons';
import Reveal from '@/components/Reveal';

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = 2026;
  const quickLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/products`, label: dict.nav.products },
    ...(SHOW_TEAM_NAV ? [{ href: `/${locale}/team`, label: dict.nav.team }] : []),
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/partners`, label: dict.nav.partners },
    { href: `/${locale}/clients`, label: dict.nav.clients },
    { href: `/${locale}/contact`, label: dict.nav.contact },
    { href: `/${locale}/faq`, label: dict.nav.faq },
    { href: `/${locale}/privacy`, label: dict.footer.privacy },
  ];

  return (
    <footer className="relative overflow-hidden bg-brand-primary text-white">
      <div className="footer-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" aria-hidden />

      <div className="container-px relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <Reveal>
          <div>
            <div className="mb-4">
              <img src="/images/logow.png" alt={SITE.name} className="h-9 w-auto md:h-10" />
            </div>
            <p className="text-sm leading-relaxed text-white/70">{dict.footer.description}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              {dict.footer.contactTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{SITE.address.lines.join(', ')}</li>
              <li>
                <a href={SITE.phoneHref} className="footer-link">{SITE.phone}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="footer-link">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              {dict.contact.mapTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent hover:text-brand-primary hover:shadow-lg"
              >
                <IconFacebook width={18} height={18} />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent hover:text-brand-primary hover:shadow-lg"
              >
                <IconWhatsApp width={18} height={18} />
              </a>
              <a
                href={SITE.map.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.footer.viewOnMap}
                title={dict.footer.viewOnMap}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent hover:text-brand-primary hover:shadow-lg"
              >
                <IconPin width={18} height={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-px py-5 text-center text-xs text-white/60">
          © {year} {SITE.name} {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
