'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import LanguageSwitcher from './LanguageSwitcher';
import { SHOW_TEAM_NAV } from '@/lib/site';

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/products`, label: dict.nav.products },
    ...(SHOW_TEAM_NAV ? [{ href: `/${locale}/team`, label: dict.nav.team }] : []),
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/partners`, label: dict.nav.partners },
    { href: `/${locale}/clients`, label: dict.nav.clients },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href || pathname === `${href}/` : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href={`/${locale}`}
          className="flex items-center transition-opacity duration-300 hover:opacity-80"
          aria-label="Saypaseuth home"
        >
          <img
            src="/images/logoc.png"
            alt="Saypaseuth Advance Co., Ltd."
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${isActive(l.href) ? 'is-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-primary transition-colors hover:bg-brand-primary/5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav-panel border-t border-gray-100 bg-white/98 backdrop-blur-md lg:hidden ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="container-px flex flex-col py-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-3 text-base font-medium transition-colors duration-300 ${
                isActive(l.href) ? 'bg-brand-primary/5 text-brand-secondary' : 'text-ink/80 hover:bg-gray-50'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />
    </header>
  );
}
