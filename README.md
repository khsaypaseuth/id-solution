# ID Solution Sole Co., Ltd. — Corporate Website

Modern, responsive, multilingual corporate website for **ID Solution Sole Co., Ltd.** —
distributor of IT equipment, enterprise infrastructure, CCTV security, access control,
gate barrier systems, and office supplies in Lao PDR.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, exported as a fully
static site that deploys anywhere (Vercel, Netlify, Hostinger, or any web host).

---

## ✨ Features

- **4 languages** — English (default), Lao, Thai, Chinese — with header language switcher
- **7 pages** — Home, Products & Services, Team, Portfolio, Partners, Clients, Contact
- Sticky desktop nav + mobile hamburger menu
- Quotation & contact forms (via [Web3Forms](https://web3forms.com) — no backend needed)
- Floating WhatsApp button (pre-filled message)
- Embedded Google Map on Contact page + footer link
- Portfolio gallery with category filter + lightbox
- Partner logos (grayscale → color on hover), categorized
- SEO optimized — meta tags, sitemap.xml, robots.txt, per-locale alternates
- Static export → fast, Lighthouse-friendly, host anywhere
- Brand theme baked in (Primary `#0B3B75`, Secondary `#1E88E5`, Accent `#FF9800`)
- Noto Sans Lao + Inter fonts

---

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # build static site into ./out
```

The static site is generated into the **`out/`** folder after `npm run build`.

---

## 🌐 Deployment

| Host | How |
|------|-----|
| **Vercel** | Import the repo — auto-detected. |
| **Netlify** | Build command `npm run build`, publish directory `out`. |
| **Hostinger / cPanel / any host** | Run `npm run build`, upload the contents of `out/` to `public_html`. |

Because `output: 'export'` is set, no Node server is required.

---

## ⚙️ Configuration (edit these before going live)

### 1. Contact / Quotation forms — **required**
The forms use [Web3Forms](https://web3forms.com) (free). Get an access key and set it in
[`lib/site.ts`](lib/site.ts):

```ts
web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
```

Submissions are emailed to the address you register with Web3Forms (use `Id7.Solution@gmail.com`).

### 2. Contact details, partners, clients, team
All language-neutral data lives in [`lib/site.ts`](lib/site.ts):
- Phone, email, address, Facebook, WhatsApp number, Google Map coordinates
- Partner brand lists (by category)
- Client list (add new clients here)
- Team roster (photo paths)

### 3. Site URL
Set the production domain in [`lib/site.ts`](lib/site.ts) (`SITE.url`) so sitemap & SEO tags are correct.

---

## 🖼️ Replacing Images

Placeholder SVGs are generated under `public/`. Replace them with real stock photos
(from [Unsplash](https://unsplash.com), [Pexels](https://pexels.com), [Pixabay](https://pixabay.com)):

| Location | Path | Used on |
|----------|------|---------|
| Hero | `public/images/hero.svg` | Home |
| About | `public/images/about.svg` | Home |
| Product sections | `public/images/products-*.svg` | Products |
| Team photos | `public/team/member-1..7.svg` | Team |
| Portfolio | `public/portfolio/project-1..12.svg` | Portfolio |

> **Tip:** Keep the same file names to swap images with zero code changes. If you switch
> file extensions (e.g. to `.jpg`), update the paths in `lib/site.ts` (team) and the
> page files (`app/[locale]/page.tsx`, `products/page.tsx`, `portfolio/page.tsx`).

To regenerate placeholders: `node scripts/gen-placeholders.mjs`

---

## 🌍 Editing / Adding Translations

Translation files are plain JSON in [`i18n/dictionaries/`](i18n/dictionaries/):
`en.json`, `lo.json`, `th.json`, `zh.json`.

- Edit any text by changing the **values** (never the keys).
- All four files share the **same key structure**.
- To add a language: add the locale to [`i18n/config.ts`](i18n/config.ts), create a new
  `<locale>.json`, and register it in [`i18n/dictionaries.ts`](i18n/dictionaries.ts).

---

## 📁 Project Structure

```
app/
  layout.tsx              # root pass-through
  page.tsx                # / → redirect to /en
  sitemap.ts, robots.ts   # SEO
  [locale]/
    layout.tsx            # <html>, fonts, header/footer/WhatsApp, metadata
    page.tsx              # Home
    products/ team/ portfolio/ partners/ clients/ contact/
components/               # Header, Footer, LanguageSwitcher, WhatsAppButton,
                          # PageHero, InquiryForm, PortfolioGallery, Icons
i18n/                     # config, dictionary loader, JSON translations
lib/site.ts               # central config & data
public/                   # images, fonts handled by next/font
scripts/                  # placeholder image generator
```

---

## 🔮 Future Expansion

The structure is ready for: Product Catalog, E-Commerce, News & Articles, Careers,
Customer Portal, Support Tickets, Online Service Requests.

---

© 2026 ID Solution Sole Co., Ltd. All Rights Reserved.
