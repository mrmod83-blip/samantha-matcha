export type Product = {
  id: string
  name: string
  nameEn: string
  description: string
  price: number
  weight: string
  category: 'ceremonial' | 'culinary' | 'blend' | 'gift'
  badge?: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 'ceremonial-30g',
    name: 'มัทฉะเกรดพิธีชา',
    nameEn: 'Ceremonial Grade Matcha',
    description: 'Premium first-flush matcha from Uji, Japan. Vibrant green color with a naturally sweet, umami-rich flavor. Perfect for traditional tea ceremony.',
    price: 380,
    weight: '30g',
    category: 'ceremonial',
    badge: 'Best Seller',
    featured: true,
  },
  {
    id: 'premium-blend-50g',
    name: 'พรีเมียมมัทฉะบลेंด',
    nameEn: 'Premium Matcha Blend',
    description: 'Our signature blend of first and second-flush matcha. Balanced bitterness with a creamy finish — ideal for daily drinking.',
    price: 290,
    weight: '50g',
    category: 'blend',
    featured: true,
  },
  {
    id: 'latte-mix-200g',
    name: 'มัทฉะลาเต้มิกซ์',
    nameEn: 'Matcha Latte Mix',
    description: 'Ready-to-mix matcha latte powder with oat milk and a touch of cane sugar. Just add hot water or cold milk and enjoy.',
    price: 450,
    weight: '200g',
    category: 'blend',
    badge: 'New',
    featured: true,
  },
  {
    id: 'culinary-100g',
    name: 'มัทฉะคัลลิเนอรี่',
    nameEn: 'Culinary Matcha',
    description: 'Stone-ground culinary grade matcha with a robust flavor profile. Great for baking, smoothies, ice cream, and cooking.',
    price: 220,
    weight: '100g',
    category: 'culinary',
  },
  {
    id: 'gift-set',
    name: 'ชุดของขวัญมัทฉะพรีเมียม',
    nameEn: 'Premium Matcha Gift Set',
    description: 'The perfect gift — includes 30g Ceremonial Grade, a hand-crafted bamboo whisk (chasen), and a ceramic bowl. Beautifully boxed.',
    price: 890,
    weight: '30g + accessories',
    category: 'gift',
    badge: 'Gift',
    featured: true,
  },
  {
    id: 'daily-pack-30s',
    name: 'แพ็คมัทฉะรายวัน',
    nameEn: 'Daily Matcha Sachets',
    description: '30 individually sealed sachets of premium blend matcha. Freshness guaranteed with every cup — perfect for office or travel.',
    price: 520,
    weight: '2g × 30 sachets',
    category: 'blend',
  },
]

export const featuredProducts = products.filter((p) => p.featured)
