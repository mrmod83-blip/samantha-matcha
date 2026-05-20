import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import Features from '@/components/Features'
import HowToOrder from '@/components/HowToOrder'
import { featuredProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Samantha Matcha — Premium Japanese Matcha in Thailand',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid
        products={featuredProducts}
        title="Featured Products"
        subtitle="Our most loved matcha selections — from ceremony-ready to everyday sipping."
        showViewAll
      />
      <Features />
      <HowToOrder />
    </>
  )
}
