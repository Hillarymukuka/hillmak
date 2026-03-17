/**
 * One-time image optimization script.
 * Compresses all public/ images in-place — no filename changes, no code updates needed.
 *
 * Strategy:
 *  • AVIF / WebP  → already modern formats; re-encode at quality 82 / max 1920px
 *  • JPEG         → re-encode at quality 82 / max 1920px (biggest wins are here)
 *  • PNG          → re-encode at quality 85 / max 1200px
 *  • SVG / GIF    → skip (not handled by sharp)
 *
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, rename, unlink, writeFile } from 'fs/promises';
import { join, extname, basename } from 'path';

import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, '../public');
const MAX_HERO   = 1920;   // hero / full-width images
const MAX_THUMB  = 1200;   // project carousel  
const MAX_LOGO   = 600;    // client logos (Logos/ folder)

let saved = 0;
let count = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function maxWidth(filePath) {
  if (filePath.includes('Logos')) return MAX_LOGO;
  if (filePath.includes('Projects')) return MAX_THUMB;
  return MAX_HERO;
}

async function optimise(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) return;

  const before = (await stat(filePath)).size;
  const tmp = filePath + '.tmp';
  const max = maxWidth(filePath);

  try {
    const pipeline = sharp(filePath).resize({ width: max, withoutEnlargement: true });

    if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmp);
    } else if (ext === '.png') {
      await pipeline.png({ quality: 85, compressionLevel: 9 }).toFile(tmp);
    } else if (ext === '.webp') {
      await pipeline.webp({ quality: 82 }).toFile(tmp);
    } else if (ext === '.avif') {
      await pipeline.avif({ quality: 55 }).toFile(tmp);
    }

    const after = (await stat(tmp)).size;
    if (after < before) {
      // Read the compressed result into memory, then overwrite the original.
      // Avoids EBUSY on Windows (no unlink step).
      const { readFile } = await import('fs/promises');
      const buf = await readFile(tmp);
      await writeFile(filePath, buf);
      await unlink(tmp);
      const delta = before - after;
      saved += delta;
      count++;
      console.log(`✓  ${filePath.split('public')[1].padEnd(70)} ${(before/1024).toFixed(0).padStart(6)} KB → ${(after/1024).toFixed(0).padStart(5)} KB  (-${(delta/1024).toFixed(0)} KB)`);
    } else {
      await unlink(tmp);
      console.log(`–  ${filePath.split('public')[1].padEnd(70)} already optimal`);
    }
  } catch (err) {
    try { await unlink(tmp); } catch {}
    console.error(`✗  ${basename(filePath)}: ${err.message}`);
  }
}

const files = await walk(PUBLIC_DIR);
console.log(`\nOptimising ${files.length} files in ${PUBLIC_DIR}\n`);
for (const f of files) await optimise(f);
console.log(`\n✅  Done. ${count} files optimised. Total saved: ${(saved / 1024 / 1024).toFixed(2)} MB\n`);
