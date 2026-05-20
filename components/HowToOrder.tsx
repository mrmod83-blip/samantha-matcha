import Image from 'next/image'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Browse & Choose',
    description: 'Pick your matcha from our shop. Not sure? DM us on LINE or Instagram and we will help you choose.',
  },
  {
    number: '02',
    title: 'Transfer via PromptPay',
    description: 'Pay securely using PromptPay. Scan the QR code or transfer to our registered number. No card needed.',
  },
  {
    number: '03',
    title: 'Send Slip & Confirm',
    description: 'Send us your payment slip via LINE. We will confirm your order within 1 hour during business hours.',
  },
  {
    number: '04',
    title: 'Receive Your Matcha',
    description: 'Orders ship same day (before 2 PM) via Kerry or Flash Express. Track your package in real time.',
  },
]

export default function HowToOrder() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-matcha-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-matcha-700 text-matcha-100 text-xs font-medium rounded-full mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-matcha-300 rounded-full" />
              Easy Ordering
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Order in 4 Simple Steps
            </h2>
            <p className="text-matcha-200 mb-10 leading-relaxed">
              We make ordering matcha as smooth as the tea itself. Pay via PromptPay and get your order the same day.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-matcha-700 border border-matcha-600 flex items-center justify-center text-xs font-bold text-matcha-300 tabular-nums">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-matcha-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-white text-matcha-800 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-cream-100 transition-colors"
            >
              View Payment QR Code
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-xs w-full text-center">
              <p className="text-matcha-900/60 text-sm mb-4 font-medium">Pay via PromptPay</p>
              <div className="relative w-52 h-52 mx-auto mb-4">
                <Image
                  src="/payment/promptpay-qr.jpg"
                  alt="PromptPay QR Code"
                  fill
                  className="object-contain rounded-lg"
                  sizes="208px"
                />
              </div>
              <p className="text-xs text-matcha-900/40 leading-relaxed">
                Scan with any Thai banking app.<br />
                Then send the slip to confirm.
              </p>
              <div className="mt-4 pt-4 border-t border-matcha-100">
                <p className="text-xs text-matcha-600 font-medium">Samantha Matcha</p>
                <p className="text-xs text-matcha-900/40">ธุรกิจมัทฉะพรีเมียม</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
