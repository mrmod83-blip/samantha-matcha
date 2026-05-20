import Link from 'next/link'
import type { Product } from '@/lib/products'

const categoryColors: Record<Product['category'], string> = {
  ceremonial: 'bg-matcha-100 text-matcha-700',
  blend: 'bg-cream-200 text-matcha-800',
  culinary: 'bg-gold-400/20 text-gold-600',
  gift: 'bg-matcha-50 text-matcha-600',
}

const categoryIcons: Record<Product['category'], string> = {
  ceremonial: '🍵',
  blend: '☕',
  culinary: '🧁',
  gift: '🎁',
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-matcha-100 p-6 hover:shadow-xl hover:shadow-matcha-700/5 hover:-translate-y-1 transition-all duration-300">
      {product.badge && (
        <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 bg-matcha-700 text-white rounded-full">
          {product.badge}
        </span>
      )}

      <div className="w-14 h-14 rounded-xl bg-matcha-50 flex items-center justify-center text-2xl mb-5">
        {categoryIcons[product.category]}
      </div>

      <div className="flex items-start gap-2 mb-2">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[product.category]}`}>
          {product.category}
        </span>
        <span className="text-xs text-matcha-900/40">{product.weight}</span>
      </div>

      <h3 className="font-semibold text-matcha-900 mb-1">{product.nameEn}</h3>
      <p className="text-xs text-matcha-900/50 mb-1 font-thai">{product.name}</p>
      <p className="text-sm text-matcha-900/60 leading-relaxed mb-5 line-clamp-2">
        {product.description}
      </p>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xl font-bold text-matcha-800">฿{product.price.toLocaleString()}</span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm bg-matcha-700 text-white px-4 py-2 rounded-full hover:bg-matcha-800 transition-colors"
        >
          Order
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
