'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Product, Grade, StockStatus } from '@/data/products'
import { stockLabel } from '@/data/products'

// ─── Grade badge ──────────────────────────────────────────────────────────────

const gradeBadgeClass: Record<Grade, string> = {
  Ceremonial: 'bg-gold-400/15 border border-gold-500/60 text-gold-600 font-semibold tracking-wider',
  Superior:   'bg-matcha-700/10 border border-matcha-600/40 text-matcha-700 tracking-wide',
  Premium:    'bg-matcha-100 border border-matcha-200 text-matcha-600',
  Standard:   'bg-cream-200 border border-cream-300 text-matcha-500',
}

// ─── Stock dot + text ─────────────────────────────────────────────────────────

const stockStyles: Record<StockStatus, { dot: string; text: string }> = {
  in_stock:     { dot: 'bg-matcha-500', text: 'text-matcha-600' },
  low_stock:    { dot: 'bg-amber-400',  text: 'text-amber-600'  },
  out_of_stock: { dot: 'bg-stone-400',  text: 'text-stone-400'  },
}

// ─── Placeholder — pure CSS/HTML, no SVG ──────────────────────────────────────

function ImagePlaceholder({ japaneseName }: { japaneseName: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center select-none bg-gradient-to-br from-matcha-100 via-cream-100 to-cream-200">
      <span
        className="text-8xl font-thin text-matcha-300/60 leading-none mb-3"
        aria-hidden="true"
        lang="ja"
      >
        抹
      </span>
      <p className="text-[11px] text-matcha-500 text-center leading-relaxed px-4">
        รูปสินค้าจะอัปเดต
        <br />
        เร็ว ๆ นี้
      </p>
      <p
        className="absolute bottom-3 text-[9px] text-matcha-300 tracking-[0.2em] uppercase"
        lang="ja"
      >
        {japaneseName}
      </p>
    </div>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────

type Props = {
  product: Product
  /**
   * Server-resolved image URL.
   *   string    → file exists, render <Image>
   *   null/undef → file absent,  render placeholder
   */
  resolvedImage?: string | null
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProductCard({ product, resolvedImage }: Props) {
  const [imgError, setImgError] = useState(false)

  // Use resolved path unless runtime load failed
  const imageSrc = resolvedImage && !imgError ? resolvedImage : null
  const isOutOfStock = product.stock === 'out_of_stock'
  const { dot: dotClass, text: textClass } = stockStyles[product.stock]

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-matcha-100/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-matcha-900/8 hover:-translate-y-1 transition-all duration-300 will-change-transform">

      {/* ── Image area ─────────────────────────────────────────────────────
          aspect-[4/3] reserves space before load → zero CLS.
          overflow-hidden clips the zoom transform.

          Image display:
          • object-contain shows the FULL product — nothing is cropped.
          • The inner wrapper (absolute inset-3) provides breathing room
            around the product shot without affecting the outer fixed ratio.
          • Hover: scale-110 on the inner wrapper zooms the whole product.
      ────────────────────────────────────────────────────────────────────── */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {imageSrc ? (
          <>
            {/*
              Inner wrapper: inset-3 = 12 px padding on all sides.
              position: relative so the fill Image anchors to it.
              Zoom is applied here so the padding scales together with the image.
            */}
            <div className="absolute inset-3 relative transition-transform duration-500 ease-out group-hover:scale-110">
              <Image
                src={imageSrc}
                alt={`${product.name} — ${product.brand}`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(50vw - 2.5rem), (max-width: 1280px) calc(33vw - 2.5rem), calc(25vw - 2.5rem)"
                priority={product.featured === true}
                onError={() => setImgError(true)}
              />
            </div>
          </>
        ) : (
          <ImagePlaceholder japaneseName={product.japaneseName} />
        )}

        {/* Featured badge */}
        {product.featured && (
          <span className="absolute top-3 left-3 z-10 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 bg-matcha-900/80 text-cream-100 rounded-full backdrop-blur-sm">
            Featured
          </span>
        )}

        {/* Grade badge */}
        <span
          className={`absolute bottom-3 right-3 z-10 text-[10px] px-2.5 py-0.5 rounded-full backdrop-blur-sm ${gradeBadgeClass[product.grade]}`}
        >
          {product.grade}
        </span>
      </div>

      {/* ── Card body ──────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5">

        {/* Brand */}
        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gold-600 mb-1">
          {product.brand}
        </p>

        {/* Name */}
        <h3 className="font-bold text-matcha-900 text-[15px] leading-snug mb-0.5">
          {product.name}
        </h3>

        {/* Japanese name */}
        <p className="text-sm text-matcha-400 mb-3" lang="ja">
          {product.japaneseName}
        </p>

        {/* Origin + size */}
        <div className="flex items-center gap-2.5 text-[11px] text-matcha-900/45 mb-4 flex-wrap">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {product.origin}
          </span>
          <span className="w-px h-3 bg-matcha-200 shrink-0" />
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
        <p className="text-xs text-matcha-900/50 leading-relaxed line-clamp-2 mb-5 flex-1">
          {product.description}
        </p>

        {/* Price + stock */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-matcha-900 tabular-nums">
            ฿{product.price.toLocaleString()}
          </span>
          <span className={`flex items-center gap-1.5 text-[11px] font-medium ${textClass}`}>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotClass}`} />
            {stockLabel[product.stock]}
          </span>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/shop/${product.id}`}
            className="text-center text-xs font-medium px-3 py-2.5 rounded-xl border border-matcha-200 text-matcha-700 hover:bg-matcha-50 hover:border-matcha-300 transition-colors"
          >
            ดูรายละเอียด
          </Link>
          <Link
            href="/contact"
            aria-disabled={isOutOfStock}
            className={`text-center text-xs font-semibold px-3 py-2.5 rounded-xl transition-colors ${
              isOutOfStock
                ? 'bg-stone-100 text-stone-400 pointer-events-none'
                : 'bg-matcha-700 text-white hover:bg-matcha-800 active:bg-matcha-900'
            }`}
          >
            สั่งซื้อ
          </Link>
        </div>
      </div>
    </article>
  )
}
