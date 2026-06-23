// Generates lightweight SVG placeholder images under /public.
// Replace these with real stock photos (Unsplash / Pexels / Pixabay) later —
// keep the same file names/paths and the site picks them up automatically.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';

const PUBLIC = join(process.cwd(), 'public');

function svg(label, w, h, c1, c2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <text x="50%" y="50%" fill="#ffffff" fill-opacity="0.9" font-family="Inter,system-ui,sans-serif"
    font-size="${Math.round(Math.min(w, h) / 12)}" font-weight="700" text-anchor="middle" dominant-baseline="middle">${label}</text>
</svg>`;
}

function write(path, content) {
  const full = join(PUBLIC, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content);
}

const PRIMARY = '#0B3B75';
const SECONDARY = '#1E88E5';
const ACCENT = '#FF9800';

const files = [
  ['images/hero.svg', 'Enterprise Technology', 1600, 900, PRIMARY, SECONDARY],
  ['images/about.svg', 'About ID Solution', 800, 600, SECONDARY, PRIMARY],
  ['images/products-consumer.svg', 'Consumer IT', 800, 600, SECONDARY, PRIMARY],
  ['images/products-enterprise.svg', 'Enterprise Solutions', 800, 600, PRIMARY, SECONDARY],
  ['images/products-cctv.svg', 'CCTV Security', 800, 600, PRIMARY, ACCENT],
  ['images/products-access.svg', 'Access Control', 800, 600, SECONDARY, ACCENT],
  ['images/products-gate.svg', 'Gate Barriers', 800, 600, PRIMARY, SECONDARY],
];

for (const [p, label, w, h, c1, c2] of files) write(p, svg(label, w, h, c1, c2));

for (let i = 1; i <= 7; i++) {
  write(`team/member-${i}.svg`, svg('Team Member', 600, 750, PRIMARY, SECONDARY));
}

const projectLabels = [
  'IT Equipment', 'IT Equipment', 'Server Install', 'Server Install',
  'Network Infra', 'Network Infra', 'CCTV Install', 'CCTV Install',
  'Access Control', 'Access Control', 'Enterprise', 'Enterprise',
];
projectLabels.forEach((label, idx) => {
  write(`portfolio/project-${idx + 1}.svg`, svg(label, 800, 600, idx % 2 ? PRIMARY : SECONDARY, idx % 2 ? SECONDARY : PRIMARY));
});

// Favicon
write('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${PRIMARY}"/><text x="50%" y="54%" fill="#fff" font-family="Inter,sans-serif" font-size="28" font-weight="800" text-anchor="middle" dominant-baseline="middle">ID</text></svg>`);

console.log('Placeholder images generated under /public.');
