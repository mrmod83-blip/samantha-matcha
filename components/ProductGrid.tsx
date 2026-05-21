import Link from 'next/link'
import ProductCard from './ProductCard'
import type { Product } from '@/data/products'

type Props = {
  products: Product[]
  title?: string
  subtitle?: string
  showViewAll?: boolean
}

export default function ProductGrid({ products, title, subtitle, showViewAll }: Props) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-matcha-900 mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-matcha-900/60 max-w-xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border border-matcha-300 text-matcha-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-matcha-50 transition-colors"
            >
              ดูสินค้าทั้งหมด
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
