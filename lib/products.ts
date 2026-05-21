/**
 * Re-exports the canonical product catalog from data/products.ts.
 * Kept for backwards compatibility with existing imports.
 */
export type {
  Product,
  Brand,
  Grade,
  StockStatus,
  Category,
} from '@/data/products'

export {
  BRANDS,
  products,
  featuredProducts,
  productsByBrand,
  stockLabel,
  gradeLabel,
} from '@/data/products'
