import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Samantha Matcha — our passion for premium Japanese matcha in Thailand.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="bg-matcha-50 border-b border-matcha-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-matcha-900 mb-2">Our Story</h1>
          <p className="text-matcha-900/60">The passion behind the powder.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center mb-12">
          <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-matcha-200 ring-offset-4 ring-offset-cream-50 shadow-xl">
            <Image
              src="/logo/samantha-logo.jpg"
              alt="Samantha Matcha"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        </div>

        <div className="prose prose-matcha max-w-none space-y-6 text-matcha-900/70 leading-relaxed">
          <p className="text-lg text-matcha-900/80 font-medium">
            Samantha Matcha started with a single cup of ceremonial matcha in Kyoto — and a question:
            why is it so hard to find this quality back home in Thailand?
          </p>

          <p>
            That question became an obsession. We spent months sourcing, tasting, and testing matcha
            from tea farms across Uji, Nishio, and Kagoshima. We learned the difference between
            first-flush and second-flush harvests. We learned why stone-grinding matters. We learned
            what makes a matcha vibrant green versus dull and muddy.
          </p>

          <p>
            Eventually, we found our farmers — a family in Uji who have been growing tencha (the
            leaf that becomes matcha) for four generations. Their commitment to traditional shading
            and hand-sorting results in matcha with a naturally sweet umami flavor that speaks for itself.
          </p>

          <p>
            We launched Samantha Matcha to bring that experience to Thailand. Every product we sell
            is something we drink ourselves. We do small batches, ship fast, and keep it honest.
          </p>

          <p>
            If you have a question about matcha — how to brew it, what grade to pick, whether it
            will survive Bangkok heat — just ask us on LINE. We love talking about this stuff.
          </p>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <Link
            href="/shop"
            className="flex-1 text-center bg-matcha-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-matcha-800 transition-colors"
          >
            Shop Our Matcha
          </Link>
          <Link
            href="/contact"
            className="flex-1 text-center border border-matcha-300 text-matcha-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-matcha-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
