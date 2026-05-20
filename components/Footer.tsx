import Image from 'next/image'
import Link from 'next/link'

const shopLinks = [
  { href: '/shop', label: 'All Products' },
  { href: '/shop#ceremonial', label: 'Ceremonial Grade' },
  { href: '/shop#blends', label: 'Matcha Blends' },
  { href: '/shop#gifts', label: 'Gift Sets' },
]

const infoLinks = [
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/contact#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer className="bg-matcha-900 text-matcha-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-matcha-600">
                <Image
                  src="/logo/samantha-logo.jpg"
                  alt="Samantha Matcha"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <span className="font-semibold text-white">Samantha Matcha</span>
            </Link>
            <p className="text-sm text-matcha-400 leading-relaxed max-w-xs">
              Premium Japanese matcha, delivered to your door in Thailand.
              Every cup is a ceremony.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-matcha-800 hover:bg-matcha-700 flex items-center justify-center transition-colors"
                aria-label="LINE"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-matcha-800 hover:bg-matcha-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-matcha-400 hover:text-matcha-200 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Info</h4>
            <ul className="space-y-2">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-matcha-400 hover:text-matcha-200 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-matcha-500">Hours</p>
              <p className="text-sm text-matcha-300 mt-1">Mon–Sat: 9 AM – 6 PM</p>
              <p className="text-sm text-matcha-300">Sunday: 10 AM – 4 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-matcha-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-matcha-500">
            © {new Date().getFullYear()} Samantha Matcha. All rights reserved.
          </p>
          <p className="text-xs text-matcha-600">
            Premium matcha • Bangkok, Thailand 🇹🇭
          </p>
        </div>
      </div>
    </footer>
  )
}
