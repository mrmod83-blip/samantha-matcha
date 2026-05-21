import type { Metadata } from 'next'
import ProductCatalog from '@/components/ProductCatalog'
import { scanProductImages } from '@/lib/scan-images'

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'คลังมัทฉะพรีเมียม 16 รายการจาก 5 แบรนด์ชั้นนำของญี่ปุ่น — Hoshino, Marukyu, Yamamasa, Aoiseicha และ Ochamura',
}

export default function ShopPage() {
  const { imageMap } = scanProductImages()

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Page header */}
      <div className="bg-matcha-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold-400 mb-3">
            Samantha Matcha Shop
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            ร้านมัทฉะพรีเมียม
          </h1>
          <p className="text-matcha-300 text-sm max-w-xl leading-relaxed">
            คัดสรรมัทฉะจากไร่ชาชั้นนำของญี่ปุ่น ทั้ง Yame, Uji และ Nishio
            ส่งตรงถึงมือคุณทั่วประเทศไทย
          </p>
        </div>
      </div>

      {/* Catalog with filter + search */}
      <ProductCatalog imageMap={imageMap} />

      {/* Bottom CTA */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-cream-100 border border-cream-200 p-8 text-center">
            <p className="text-matcha-900/60 text-sm mb-4">
              สั่งซื้อผ่าน LINE ได้เลย — ส่งสลิปยืนยันการชำระเงิน แล้วรอรับของ!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-matcha-700 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-matcha-800 transition-colors"
            >
              ดูช่องทางการสั่งซื้อ
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
