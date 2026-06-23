import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import { SITE, whatsappLink } from '@/lib/site';

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = 2026;
  const quickLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/team`, label: dict.nav.team },
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/partners`, label: dict.nav.partners },
    { href: `/${locale}/clients`, label: dict.nav.clients },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container-px grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-extrabold text-brand-primary">
              ID
            </span>
            <span className="text-base font-bold">{SITE.shortName}</span>
          </div>
          <p className="text-sm leading-relaxed text-white/70">{dict.footer.description}</p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
            {dict.footer.quickLinks}
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition-colors hover:text-brand-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
            {dict.footer.contactTitle}
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>{SITE.address.lines.join(', ')}</li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-brand-accent">{SITE.phone}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-brand-accent">{SITE.email}</a>
            </li>
          </ul>
        </div>

        {/* Connect + map */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
            {dict.contact.mapTitle}
          </h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-accent">
              Facebook
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-accent">
              WhatsApp
            </a>
            <a href={SITE.map.link} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-accent">
              {dict.footer.viewOnMap}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px py-5 text-center text-xs text-white/60">
          © {year} {SITE.name} {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
