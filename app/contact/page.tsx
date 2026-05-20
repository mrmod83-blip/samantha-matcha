import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Order matcha, ask questions, or just say hello. Contact Samantha Matcha via LINE, Instagram, or PromptPay.',
}

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'Browse our shop, pick your matcha, then pay via PromptPay and send us the slip on LINE. We confirm within 1 hour.',
  },
  {
    q: 'Do you ship nationwide?',
    a: 'Yes! We ship across Thailand via Kerry Express and Flash Express. Same-day shipping for orders before 2 PM.',
  },
  {
    q: 'How should I store matcha?',
    a: 'Store in an airtight tin away from light, heat, and strong odors. Refrigeration is ideal. Use within 2 months of opening.',
  },
  {
    q: 'What is the difference between ceremonial and culinary grade?',
    a: 'Ceremonial grade is made from the youngest leaves, stone-ground to a fine, sweet powder — best drunk as-is. Culinary grade is more robust and better for cooking, baking, and lattes.',
  },
  {
    q: 'Can I return a product?',
    a: 'If your order arrives damaged or incorrect, contact us within 24 hours and we will sort it out immediately.',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="bg-matcha-50 border-b border-matcha-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-matcha-900 mb-2">Contact Us</h1>
          <p className="text-matcha-900/60">We love hearing from fellow matcha enthusiasts.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-matcha-900 mb-8">Get in Touch</h2>

            <div className="space-y-5">
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-matcha-100 hover:shadow-md hover:border-matcha-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-matcha-900 group-hover:text-matcha-700 transition-colors">LINE Official</div>
                  <div className="text-sm text-matcha-900/50">@samanthamatcha — fastest response</div>
                </div>
                <svg className="w-4 h-4 text-matcha-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-matcha-100 hover:shadow-md hover:border-matcha-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-matcha-900 group-hover:text-matcha-700 transition-colors">Instagram</div>
                  <div className="text-sm text-matcha-900/50">@samanthamatcha</div>
                </div>
                <svg className="w-4 h-4 text-matcha-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-matcha-50 border border-matcha-100">
              <p className="text-sm font-medium text-matcha-800 mb-1">Business Hours</p>
              <p className="text-sm text-matcha-700">Monday – Saturday: 9 AM – 6 PM</p>
              <p className="text-sm text-matcha-700">Sunday: 10 AM – 4 PM</p>
              <p className="text-xs text-matcha-500 mt-2">Based in Bangkok, Thailand 🇹🇭</p>
            </div>
          </div>

          <div id="payment">
            <h2 className="text-2xl font-bold text-matcha-900 mb-8">Pay via PromptPay</h2>

            <div className="bg-white rounded-2xl border border-matcha-100 p-8 text-center shadow-sm">
              <p className="text-sm text-matcha-900/60 mb-6">
                Scan with any Thai banking app to pay securely. Then send your slip on LINE to confirm.
              </p>
              <div className="relative w-60 h-60 mx-auto mb-6">
                <Image
                  src="/payment/promptpay-qr.jpg"
                  alt="PromptPay QR Code for Samantha Matcha"
                  fill
                  className="object-contain rounded-xl"
                  sizes="240px"
                />
              </div>
              <p className="font-semibold text-matcha-800 mb-1">Samantha Matcha</p>
              <p className="text-sm text-matcha-900/50">สแกนจ่ายผ่านแอปธนาคาร</p>

              <div className="mt-6 pt-6 border-t border-matcha-100 text-left space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-matcha-100 text-matcha-700 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">1</span>
                  <p className="text-sm text-matcha-900/60">Scan QR or transfer to our PromptPay number</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-matcha-100 text-matcha-700 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">2</span>
                  <p className="text-sm text-matcha-900/60">Screenshot the payment slip</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-matcha-100 text-matcha-700 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">3</span>
                  <p className="text-sm text-matcha-900/60">Send slip + your address to us on LINE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="mt-20">
          <h2 className="text-2xl font-bold text-matcha-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-matcha-100 p-6"
              >
                <h3 className="font-semibold text-matcha-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-matcha-900/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-matcha-900/50 text-sm mb-4">Still have questions?</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-matcha-700 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-matcha-800 transition-colors"
          >
            Browse the Shop
          </Link>
        </div>
      </div>
    </div>
  )
}
