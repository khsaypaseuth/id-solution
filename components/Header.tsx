'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/team`, label: dict.nav.team },
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/partners`, label: dict.nav.partners },
    { href: `/${locale}/clients`, label: dict.nav.clients },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href || pathname === `${href}/` : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        scrolled
          ? 'border-gray-200 bg-white/95 shadow-sm backdrop-blur'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2" aria-label="ID Solution home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary text-sm font-extrabold text-white">
            ID
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-bold text-brand-primary">ID Solution</span>
            <span className="text-[10px] uppercase tracking-wider text-ink/50">Sole Co., Ltd.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? 'text-brand-secondary'
                  : 'text-ink/80 hover:text-brand-primary'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <Link href={`/${locale}/contact#quote`} className="btn-primary hidden md:inline-flex !px-4 !py-2">
            {dict.nav.requestQuote}
          </Link>
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-primary lg:hidden"
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

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gray-100 bg-white lg:hidden">
          <div className="container-px flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-md px-3 py-3 text-base font-medium ${
                  isActive(l.href) ? 'text-brand-secondary' : 'text-ink/80'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href={`/${locale}/contact#quote`} className="btn-primary mt-2 w-full">
              {dict.nav.requestQuote}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
