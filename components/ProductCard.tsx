'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Product, Grade, StockStatus } from '@/data/products'
import { stockLabel } from '@/data/products'

// ─── Grade badge styling ───────────────────────────────────────────────────

const gradeBadgeClass: Record<Grade, string> = {
  Ceremonial:
    'border border-gold-500 text-gold-600 bg-gold-400/10 font-semibold tracking-wide',
  Superior:
    'border border-matcha-600 text-matcha-700 bg-matcha-50',
  Premium:
    'border border-matcha-300 text-matcha-600 bg-matcha-50',
  Standard:
    'border border-cream-300 text-matcha-500 bg-cream-100',
}

// ─── Stock indicator ───────────────────────────────────────────────────────

const stockDotClass: Record<StockStatus, string> = {
  in_stock: 'bg-matcha-500',
  low_stock: 'bg-amber-400',
  out_of_stock: 'bg-stone-400',
}

const stockTextClass: Record<StockStatus, string> = {
  in_stock: 'text-matcha-600',
  low_stock: 'text-amber-600',
  out_of_stock: 'text-stone-400',
}

// ─── Image placeholder ─────────────────────────────────────────────────────

function ProductPlaceholder({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-matcha-100 via-cream-100 to-cream-200">
      {/* Decorative Japanese character */}
      <span
        className="text-7xl font-thin text-matcha-300 select-none leading-none mb-3"
        aria-hidden="true"
      >
        抹
      </span>
      <p className="text-xs text-matcha-400 px-4 text-center leading-relaxed">
        รูปสินค้าจะอัปเดต
        <br />
        เร็ว ๆ นี้
      </p>
      {/* Subtle brand watermark */}
      <p className="absolute bottom-3 text-[10px] text-matcha-300 tracking-widest uppercase">
        {name}
      </p>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false)

  const isOutOfStock = product.stock === 'out_of_stock'

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-matcha-100 overflow-hidden hover:shadow-2xl hover:shadow-matcha-800/8 hover:-translate-y-0.5 transition-all duration-300">
      {/* ── Image / Placeholder ─────────────────────────────── */}
      <div className="relative h-56 bg-cream-100 overflow-hidden">
        {imgError ? (
          <ProductPlaceholder name={product.japaneseName} />
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}

        {/* Featured ribbon */}
        {product.featured && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 bg-matcha-800/90 text-cream-100 rounded-full backdrop-blur-sm">
            Featured
          </span>
        )}

        {/* Grade badge — overlaps image bottom */}
        <span
          className={`absolute bottom-3 right-3 text-[10px] px-2.5 py-0.5 rounded-full ${gradeBadgeClass[product.grade]} backdrop-blur-sm`}
        >
          {product.grade}
        </span>
      </div>

      {/* ── Card Body ───────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Brand */}
        <p className="text-[10px] font-semibold tracking-widest uppercase text-gold-600 mb-1">
          {product.brand}
        </p>

        {/* Name */}
        <h3 className="font-bold text-matcha-900 text-base leading-snug mb-0.5">
          {product.name}
        </h3>

        {/* Japanese name */}
        <p className="text-sm text-matcha-400 mb-3" lang="ja">
          {product.japaneseName}
        </p>

        {/* Origin + Size */}
        <div className="flex items-center gap-3 text-xs text-matcha-900/50 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {product.origin}
          </span>
          <span className="w-px h-3 bg-matcha-200" />
          <span>{product.size}</span>
        </div>

        {/* Tasting notes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tastingNotes.map((note) => (
            <span
              key={note}
              className="text-[10px] px-2 py-0.5 rounded-full bg-matcha-50 text-matcha-600 border border-matcha-100"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs text-matcha-900/55 leading-relaxed line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>

        {/* Price + Stock */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-matcha-900">
            ฿{product.price.toLocaleString()}
          </span>
          <span className={`flex items-center gap-1.5 text-xs font-medium ${stockTextClass[product.stock]}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${stockDotClass[product.stock]}`} />
            {stockLabel[product.stock]}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Link
            href={`/shop/${product.id}`}
            className="flex-1 text-center text-xs font-medium px-3 py-2.5 rounded-xl border border-matcha-200 text-matcha-700 hover:bg-matcha-50 hover:border-matcha-300 transition-colors"
          >
            ดูรายละเอียด
          </Link>
          <Link
            href="/contact"
            className={`flex-1 text-center text-xs font-semibold px-3 py-2.5 rounded-xl transition-colors ${
              isOutOfStock
                ? 'bg-stone-100 text-stone-400 cursor-not-allowed pointer-events-none'
                : 'bg-matcha-700 text-white hover:bg-matcha-800'
            }`}
            aria-disabled={isOutOfStock}
          >
            สั่งซื้อ
          </Link>
        </div>
      </div>
    </article>
  )
}
