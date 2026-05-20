import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Samantha Matcha — Premium Japanese Matcha in Thailand',
    template: '%s | Samantha Matcha',
  },
  description:
    'Premium ceremonial and culinary grade matcha sourced from Uji, Japan. Order online with PromptPay — same-day shipping across Thailand.',
  keywords: ['matcha', 'japanese matcha', 'ceremonial matcha', 'matcha thailand', 'มัทฉะ'],
  openGraph: {
    title: 'Samantha Matcha',
    description: 'Premium Japanese matcha, delivered in Thailand.',
    siteName: 'Samantha Matcha',
    locale: 'th_TH',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream-50 text-matcha-900 antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
