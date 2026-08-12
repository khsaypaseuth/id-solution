#!/usr/bin/env node
/** Deep-merge missing keys from en.json into other locale files. */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '../i18n/dictionaries');
const en = JSON.parse(readFileSync(join(dir, 'en.json'), 'utf8'));

function merge(base, target) {
  if (Array.isArray(base)) {
    return Array.isArray(target) && target.length ? target : base;
  }
  if (base && typeof base === 'object') {
    const out = { ...(target && typeof target === 'object' ? target : {}) };
    for (const key of Object.keys(base)) {
      out[key] = merge(base[key], out[key]);
    }
    return out;
  }
  return target !== undefined ? target : base;
}

for (const loc of ['lo', 'th', 'zh', 'vi']) {
  const path = join(dir, `${loc}.json`);
  const current = JSON.parse(readFileSync(path, 'utf8'));
  const merged = merge(en, current);
  writeFileSync(path, `${JSON.stringify(merged, null, 2)}\n`);
  console.log(`Synced ${loc}.json`);
}
