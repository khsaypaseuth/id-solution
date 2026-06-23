import type { ReactNode } from 'react';
import './globals.css';

// Root pass-through layout. The real <html>/<body> live in app/[locale]/layout.tsx
// so the lang attribute and fonts can be locale-aware (i18n static-export pattern).
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
