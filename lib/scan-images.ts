/**
 * Server-only: scans public/products/ and matches filenames to product records.
 * Must NOT be imported in any client component.
 *
 * Matching rules (priority order):
 *  1. Basename of product.image field  (e.g. "hoshino-tenju")
 *  2. product.id                       (e.g. "hoshino-tenju")
 * Extensions searched: .jpg .jpeg .png .webp
 */

import fs from 'fs'
import path from 'path'
import { products } from '@/data/products'
import type { Product } from '@/data/products'

const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const PRODUCTS_PUBLIC_DIR = path.join(process.cwd(), 'public', 'products')

/** productId → resolved public path, e.g. "/products/hoshino-tenju.png" */
export type ImageMap = Record<string, string>

export type ScanReport = {
  imageMap: ImageMap
  matched: Product[]
  unmatched: Product[]
  /** Raw filenames found in public/products/ */
  scannedFiles: string[]
  /** Files found but not matched to any product */
  orphanFiles: string[]
}

export function scanProductImages(): ScanReport {
  // ── 1. Read directory ────────────────────────────────────────────────────
  let allFiles: string[] = []
  try {
    allFiles = fs
      .readdirSync(PRODUCTS_PUBLIC_DIR)
      .filter((f) => SUPPORTED_EXTS.has(path.extname(f).toLowerCase()))
  } catch {
    // Directory missing or unreadable — treat as empty
    allFiles = []
  }

  // ── 2. Match each product ────────────────────────────────────────────────
  const imageMap: ImageMap = {}
  const usedFiles = new Set<string>()

  for (const product of products) {
    // Primary: basename of product.image (strips extension)
    const primary = path
      .basename(product.image, path.extname(product.image))
      .toLowerCase()

    // Fallback: product id
    const fallback = product.id.toLowerCase()

    const match = allFiles.find((f) => {
      const base = path.basename(f, path.extname(f)).toLowerCase()
      return base === primary || base === fallback
    })

    if (match) {
      imageMap[product.id] = `/products/${match}`
      usedFiles.add(match)
    }
  }

  // ── 3. Build report ──────────────────────────────────────────────────────
  const matched = products.filter((p) => imageMap[p.id])
  const unmatched = products.filter((p) => !imageMap[p.id])
  const orphanFiles = allFiles.filter((f) => !usedFiles.has(f))

  return { imageMap, matched, unmatched, scannedFiles: allFiles, orphanFiles }
}
