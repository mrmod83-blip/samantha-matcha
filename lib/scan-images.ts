/**
 * Server-only: recursively scans public/products/ and auto-matches image
 * files to product records. Safe to use in any Server Component or page.
 *
 * Supported formats: .jpg  .jpeg  .png  .webp
 *
 * Matching strategies (tried in priority order for each product):
 *
 *  Strategy 1 — flat exact
 *    File:    public/products/hoshino-tenju.jpg
 *    flatStem: "hoshino-tenju"   matches product.image basename OR product.id
 *
 *  Strategy 2 — sub-directory flat-join
 *    File:    public/products/hoshino/tenju.jpg
 *    flatStem: "hoshino-tenju"   (dir parts joined with "-" + filename)
 *    matches product.image basename OR product.id
 *
 *  Strategy 3 — filename-only (last resort, unique only)
 *    File:    public/products/tenju.jpg
 *    stem:    "tenju"            matches against each product.id token after "-"
 *
 *  In all cases the returned imageMap value is the correct Next.js public
 *  URL (starts with /products/…) derived from the actual file's path.
 */

import fs from 'fs'
import path from 'path'
import { products } from '@/data/products'
import type { Product } from '@/data/products'

// ─── Constants ────────────────────────────────────────────────────────────────

const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])
const PUBLIC_DIR = path.join(process.cwd(), 'public')
const PRODUCTS_DIR = path.join(PUBLIC_DIR, 'products')

// ─── Types ────────────────────────────────────────────────────────────────────

export type ImageMap = Record<string, string> // productId → "/products/…"

export type ScanReport = {
  imageMap: ImageMap
  matched: Array<{ product: Product; resolvedPath: string }>
  unmatched: Product[]
  scannedFiles: string[]   // all image files found (public URLs)
  orphanFiles: string[]    // found but not matched to any product
}

// ─── Internal file entry ──────────────────────────────────────────────────────

type FileEntry = {
  absolutePath: string
  /** e.g. "/products/hoshino/tenju.jpg"  (Next.js public URL) */
  publicUrl: string
  /** bare filename stem, lowercase — e.g. "tenju" */
  stem: string
  /** brand-dir parts + stem joined with "-", lowercase — e.g. "hoshino-tenju" */
  flatStem: string
}

// ─── Recursive directory walk ─────────────────────────────────────────────────

function walkDir(dir: string, relBase: string): FileEntry[] {
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return []
  }

  const results: FileEntry[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      // Keep the relative path for sub-folders (e.g. "hoshino")
      const childBase = relBase ? `${relBase}/${entry.name}` : entry.name
      results.push(...walkDir(fullPath, childBase))
      continue
    }

    if (!entry.isFile()) continue

    const ext = path.extname(entry.name).toLowerCase()
    if (!SUPPORTED_EXTS.has(ext)) continue

    const stem = path.basename(entry.name, ext).toLowerCase()

    // flatStem: join directory parts and filename with "-"
    // "hoshino/tenju.jpg" → "hoshino-tenju"
    // "hoshino/subtea/tenju.jpg" → "hoshino-subtea-tenju"
    const flatStem = relBase
      ? `${relBase.replace(/\//g, '-')}-${stem}`
      : stem

    const publicUrl = relBase
      ? `/products/${relBase}/${entry.name}`
      : `/products/${entry.name}`

    results.push({ absolutePath: fullPath, publicUrl, stem, flatStem })
  }

  return results
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function scanProductImages(): ScanReport {
  // 1. Recursively collect all image files
  const allEntries = walkDir(PRODUCTS_DIR, '')

  // 2. Build lookup index: flatStem → entry (for O(1) matching)
  const byStem    = new Map<string, FileEntry>()   // bare stem
  const byFlat    = new Map<string, FileEntry>()   // brand-flat stem

  for (const entry of allEntries) {
    if (!byStem.has(entry.stem))     byStem.set(entry.stem, entry)
    if (!byFlat.has(entry.flatStem)) byFlat.set(entry.flatStem, entry)
  }

  // 3. Match each product
  const imageMap: ImageMap = {}
  const usedUrls = new Set<string>()

  // Build a publicUrl → entry map for direct path matching (Strategy 0)
  const byPublicUrl = new Map<string, FileEntry>()
  for (const entry of allEntries) {
    byPublicUrl.set(entry.publicUrl, entry)
  }

  for (const product of products) {
    // Strategy 0 — exact public URL derived from product.image field
    //   product.image: "/products/hoshinoen/hoju-20g.png" → match directly
    const directEntry = byPublicUrl.get(product.image)
    if (directEntry) {
      imageMap[product.id] = directEntry.publicUrl
      usedUrls.add(directEntry.publicUrl)
      continue
    }

    // Primary key: basename of product.image field (without extension)
    const primary = path
      .basename(product.image, path.extname(product.image))
      .toLowerCase()
    // Secondary key: product.id
    const secondary = product.id.toLowerCase()

    // Strategy 1/2 — flatStem (brand-dir + filename), then Strategy 3 — bare stem
    const match =
      byFlat.get(primary) ??
      byFlat.get(secondary) ??
      byStem.get(primary) ??
      byStem.get(secondary)

    if (match) {
      imageMap[product.id] = match.publicUrl
      usedUrls.add(match.publicUrl)
    }
  }

  // 4. Build report
  const matched = products
    .filter((p) => imageMap[p.id])
    .map((p) => ({ product: p, resolvedPath: imageMap[p.id] }))

  const unmatched = products.filter((p) => !imageMap[p.id])

  const scannedFiles = allEntries.map((e) => e.publicUrl)
  const orphanFiles  = scannedFiles.filter((url) => !usedUrls.has(url))

  return { imageMap, matched, unmatched, scannedFiles, orphanFiles }
}
