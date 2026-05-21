import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowToOrder from '@/components/HowToOrder'
import ProductCatalog from '@/components/ProductCatalog'
import { scanProductImages } from '@/lib/scan-images'

export const metadata: Metadata = {
  title: 'Samantha Matcha — Premium Japanese Matcha in Thailand',
}

export default function HomePage() {
  const { imageMap } = scanProductImages()

  return (
    <>
      <Hero />
      <ProductCatalog imageMap={imageMap} />
      <Features />
      <HowToOrder />
    </>
  )
}
