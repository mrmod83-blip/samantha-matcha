import type { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Browse all Samantha Matcha products — ceremonial grade, blends, culinary matcha, and gift sets.',
}

const categories = [
  { key: 'all', label: 'All Products' },
  { key: 'ceremonial', label: 'Ceremonial' },
  { key: 'blend', label: 'Blends' },
  { key: 'culinary', label: 'Culinary' },
  { key: 'gift', label: 'Gift Sets' },
] as const

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="bg-matcha-50 border-b border-matcha-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-matcha-900 mb-2">Shop</h1>
          <p className="text-matcha-900/60">
            {products.length} products — premium matcha for every occasion.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <span
              key={cat.key}
              className={`px-4 py-1.5 rounded-full text-sm cursor-default transition-colors ${
                cat.key === 'all'
                  ? 'bg-matcha-700 text-white'
                  : 'border border-matcha-200 text-matcha-700 hover:bg-matcha-50'
              }`}
            >
              {cat.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-matcha-800 text-white p-8 sm:p-10 text-center">
          <h2 className="text-xl font-semibold mb-2">Can&apos;t decide?</h2>
          <p className="text-matcha-300 text-sm mb-6">
            Chat with us on LINE and we will recommend the perfect matcha for your taste.
          </p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-matcha-800 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-cream-100 transition-colors"
          >
            Chat on LINE
          </a>
        </div>
      </div>
    </div>
  )
}
