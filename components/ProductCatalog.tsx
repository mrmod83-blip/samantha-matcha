'use client'

import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { BRANDS, products } from '@/data/products'
import type { Brand } from '@/data/products'

type ActiveBrand = Brand | 'all'

// ─── Brand filter button ───────────────────────────────────────────────────

const brandShortLabel: Record<Brand, string> = {
  'Hoshino Seichaen': 'Hoshino',
  'Marukyu Koyamaen': 'Marukyu',
  'Yamamasa Koyamaen': 'Yamamasa',
  'Aoiseicha': 'Aoiseicha',
  'Ochamura': 'Ochamura',
}

// ─── Search icon ──────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function ClearIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// ─── Empty state ──────────────────────────────────────────────────────────

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-matcha-50 flex items-center justify-center mb-4">
        <span className="text-3xl" aria-hidden="true">🍵</span>
      </div>
      <h3 className="font-semibold text-matcha-900 mb-1">ไม่พบสินค้า</h3>
      <p className="text-sm text-matcha-900/50 mb-5">ลองเปลี่ยนคำค้นหาหรือตัวกรองใหม่</p>
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

export default function ProductCatalog() {
  const [activeBrand, setActiveBrand] = useState<ActiveBrand>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return products.filter((p) => {
      const matchBrand = activeBrand === 'all' || p.brand === activeBrand
      if (!matchBrand) return false
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

  const brandCounts = useMemo(
    () =>
      BRANDS.reduce<Record<Brand, number>>((acc, brand) => {
        acc[brand] = products.filter((p) => p.brand === brand).length
        return acc
      }, {} as Record<Brand, number>),
    []
  )

  function handleReset() {
    setActiveBrand('all')
    setSearchQuery('')
  }

  const hasFilter = activeBrand !== 'all' || searchQuery.length > 0

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ──────────────────────────────────── */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 mb-2">
            คอลเลกชันมัทฉะ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-matcha-900 mb-1">
            สินค้าทั้งหมด
          </h2>
          <p className="text-matcha-900/55 text-sm">
            คัดสรรมัทฉะพรีเมียมจากแหล่งชาชั้นนำของญี่ปุ่น {products.length} รายการ
          </p>
        </div>

        {/* ── Controls row ────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">

          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-matcha-400 pointer-events-none">
              <SearchIcon />
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
                <ClearIcon />
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

        {/* ── Brand filter ─────────────────────────────────────── */}
        <div className="flex gap-2 flex-wrap mb-10">
          <button
            onClick={() => setActiveBrand('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeBrand === 'all'
                ? 'bg-matcha-800 text-cream-50'
                : 'border border-matcha-200 text-matcha-700 hover:bg-matcha-50 hover:border-matcha-300'
            }`}
          >
            ทั้งหมด
            <span
              className={`ml-1.5 text-xs ${activeBrand === 'all' ? 'text-matcha-300' : 'text-matcha-400'}`}
            >
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
              <span
                className={`ml-1.5 text-xs ${activeBrand === brand ? 'text-matcha-300' : 'text-matcha-400'}`}
              >
                {brandCounts[brand]}
              </span>
            </button>
          ))}
        </div>

        {/* ── Product grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <EmptyState onReset={handleReset} />
          )}
        </div>

        {/* ── CTA banner ───────────────────────────────────────── */}
        {filtered.length > 0 && (
          <div className="mt-14 rounded-2xl bg-matcha-800 text-white p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">ไม่แน่ใจว่าจะเลือกตัวไหน?</h3>
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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.07 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                ปรึกษาผ่าน LINE
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
