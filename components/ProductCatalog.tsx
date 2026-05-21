'use client'

import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { BRANDS, products } from '@/data/products'
import type { Brand } from '@/data/products'
import type { ImageMap } from '@/lib/scan-images'

type ActiveBrand = Brand | 'all'

// ─── Brand short labels ────────────────────────────────────────────────────

const brandShortLabel: Record<Brand, string> = {
  'Hoshino Seichaen':  'Hoshino',
  'Marukyu Koyamaen':  'Marukyu',
  'Yamamasa Koyamaen': 'Yamamasa',
  'Aoiseicha':         'Aoiseicha',
  'Ochamura':          'Ochamura',
}

// ─── Icons (inline SVG — not images) ──────────────────────────────────────

function IconSearch() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}
function IconX() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// ─── Empty state ──────────────────────────────────────────────────────────

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-matcha-50 flex items-center justify-center mb-4 text-3xl select-none">
        🍵
      </div>
      <h3 className="font-semibold text-matcha-900 mb-1">ไม่พบสินค้า</h3>
      <p className="text-sm text-matcha-900/50 mb-5">
        ลองเปลี่ยนคำค้นหาหรือตัวกรองใหม่
      </p>
      <button
        onClick={onReset}
        className="text-sm text-matcha-700 border border-matcha-300 px-5 py-2 rounded-full hover:bg-matcha-50 transition-colors"
      >
        ล้างตัวกรอง
      </button>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────

type Props = {
  /**
   * Resolved image map from scanProductImages() — productId → "/products/file.ext"
   * Passed from a Server Component page so the scan runs server-side only.
   */
  imageMap?: ImageMap
}

export default function ProductCatalog({ imageMap = {} }: Props) {
  const [activeBrand, setActiveBrand] = useState<ActiveBrand>('all')
  const [searchQuery, setSearchQuery]  = useState('')

  // ── Filtering ──────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return products.filter((p) => {
      if (activeBrand !== 'all' && p.brand !== activeBrand) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.japaneseName.includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.grade.toLowerCase().includes(q) ||
        p.tastingNotes.some((t) => t.includes(q)) ||
        p.description.includes(q)
      )
    })
  }, [activeBrand, searchQuery])

  // ── Brand product counts ───────────────────────────────────────────────
  const brandCounts = useMemo(
    () =>
      BRANDS.reduce<Record<Brand, number>>(
        (acc, b) => { acc[b] = products.filter((p) => p.brand === b).length; return acc },
        {} as Record<Brand, number>
      ),
    []
  )

  const hasFilter = activeBrand !== 'all' || searchQuery.length > 0

  function reset() {
    setActiveBrand('all')
    setSearchQuery('')
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ────────────────────────────────────────── */}
        <div className="mb-10">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold-600 mb-2">
            คอลเลกชันมัทฉะ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-matcha-900 mb-1">
            สินค้าทั้งหมด
          </h2>
          <p className="text-matcha-900/55 text-sm">
            คัดสรรมัทฉะพรีเมียมจากแหล่งชาชั้นนำของญี่ปุ่น {products.length} รายการ
          </p>
        </div>

        {/* ── Controls ──────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search input */}
          <div className="relative flex-1 max-w-sm">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-matcha-400 pointer-events-none">
              <IconSearch />
            </span>
            <input
              type="search"
              placeholder="ค้นหาสินค้า, แบรนด์, รสชาติ…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-sm rounded-xl border border-matcha-200 bg-white text-matcha-900 placeholder-matcha-400/70 focus:outline-none focus:border-matcha-400 focus:ring-2 focus:ring-matcha-200 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-matcha-400 hover:text-matcha-700 transition-colors"
                aria-label="ล้างการค้นหา"
              >
                <IconX />
              </button>
            )}
          </div>

          {/* Result count */}
          <div className="flex items-center text-sm text-matcha-900/50 shrink-0">
            {hasFilter
              ? `แสดง ${filtered.length} จาก ${products.length} สินค้า`
              : `${products.length} สินค้า`}
          </div>
        </div>

        {/* ── Brand filter ──────────────────────────────────── */}
        <div className="flex gap-2 flex-wrap mb-10" role="group" aria-label="กรองตามแบรนด์">
          <button
            onClick={() => setActiveBrand('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeBrand === 'all'
                ? 'bg-matcha-800 text-cream-50'
                : 'border border-matcha-200 text-matcha-700 hover:bg-matcha-50 hover:border-matcha-300'
            }`}
          >
            ทั้งหมด
            <span className={`ml-1.5 text-xs ${activeBrand === 'all' ? 'text-matcha-300' : 'text-matcha-400'}`}>
              {products.length}
            </span>
          </button>

          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeBrand === brand
                  ? 'bg-matcha-800 text-cream-50'
                  : 'border border-matcha-200 text-matcha-700 hover:bg-matcha-50 hover:border-matcha-300'
              }`}
            >
              {brandShortLabel[brand]}
              <span className={`ml-1.5 text-xs ${activeBrand === brand ? 'text-matcha-300' : 'text-matcha-400'}`}>
                {brandCounts[brand]}
              </span>
            </button>
          ))}
        </div>

        {/* ── Product grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.length > 0
            ? filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  resolvedImage={imageMap[product.id] ?? null}
                />
              ))
            : <EmptyState onReset={reset} />
          }
        </div>

        {/* ── CTA banner ────────────────────────────────────── */}
        {filtered.length > 0 && (
          <div className="mt-14 rounded-2xl bg-matcha-800 text-white p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  ไม่แน่ใจว่าจะเลือกตัวไหน?
                </h3>
                <p className="text-matcha-300 text-sm">
                  ทีมงานของเราพร้อมแนะนำมัทฉะที่เหมาะกับรสนิยมของคุณ
                </p>
              </div>
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-white text-matcha-800 px-6 py-3 rounded-full text-sm font-semibold hover:bg-cream-100 transition-colors"
              >
                ปรึกษาผ่าน LINE
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
