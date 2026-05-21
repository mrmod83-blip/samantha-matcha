import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowToOrder from '@/components/HowToOrder'
import ProductCatalog from '@/components/ProductCatalog'

export const metadata: Metadata = {
  title: 'Samantha Matcha — Premium Japanese Matcha in Thailand',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCatalog />
      <Features />
      <HowToOrder />
    </>
  )
}
