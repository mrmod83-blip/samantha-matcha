'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-matcha-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-matcha-200">
              <Image
                src="/logo/samantha-logo.jpg"
                alt="Samantha Matcha"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <span className="font-semibold text-matcha-800 tracking-tight">
              Samantha Matcha
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  pathname === l.href
                    ? 'text-matcha-700 font-medium'
                    : 'text-matcha-900/70 hover:text-matcha-700'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="text-sm bg-matcha-700 text-white px-5 py-2 rounded-full hover:bg-matcha-800 transition-colors"
            >
              Order Now
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-matcha-700 hover:bg-matcha-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-matcha-100">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    pathname === l.href
                      ? 'bg-matcha-100 text-matcha-800 font-medium'
                      : 'text-matcha-900/70 hover:bg-matcha-50 hover:text-matcha-700'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="mt-2 text-sm bg-matcha-700 text-white px-4 py-2 rounded-full text-center hover:bg-matcha-800 transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
