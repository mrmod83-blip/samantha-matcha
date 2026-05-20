import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-matcha-50 via-cream-100 to-cream-200">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-matcha-400 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-matcha-300 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-400 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-2xl ring-4 ring-matcha-200 ring-offset-4 ring-offset-cream-100">
            <Image
              src="/logo/samantha-logo.jpg"
              alt="Samantha Matcha"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, 208px"
              priority
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-matcha-100 text-matcha-700 text-xs font-medium rounded-full mb-6 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-matcha-500 rounded-full" />
          Premium Japanese Matcha
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-matcha-900 leading-tight tracking-tight mb-6">
          Pure Matcha,
          <br />
          <span className="text-matcha-600">Purely Samantha</span>
        </h1>

        <p className="max-w-xl mx-auto text-matcha-900/60 text-lg leading-relaxed mb-10">
          Ceremonial-grade matcha sourced directly from Uji, Japan. Experience
          the difference quality makes in every vibrant green cup.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-matcha-700 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-matcha-800 transition-all shadow-lg shadow-matcha-700/20 hover:shadow-matcha-700/30"
          >
            Shop Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-matcha-300 text-matcha-700 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-matcha-50 transition-colors"
          >
            Our Story
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto">
          {[
            { value: '100%', label: 'Pure Matcha' },
            { value: 'Uji', label: 'Japan Origin' },
            { value: 'Daily', label: 'Fresh Batches' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-bold text-matcha-700">{stat.value}</div>
              <div className="text-xs text-matcha-900/50 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-matcha-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
