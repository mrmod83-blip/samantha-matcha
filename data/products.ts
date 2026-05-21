// ─── Types ───────────────────────────────────────────────────────────────────

export const BRANDS = [
  'Hoshinoen',
  'Yamamasa Koyamaen',
  'Aoiseicha',
  'Ippodo',
  'Horii',
] as const

export type Brand = (typeof BRANDS)[number]

export type Grade = 'Ceremonial' | 'Superior' | 'Premium' | 'Standard'

export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock'

export type Category = 'ceremonial' | 'premium' | 'culinary' | 'gift'

export type Product = {
  id: string
  name: string          // English display name
  japaneseName: string  // Japanese kanji / kana
  brand: Brand
  origin: string
  grade: Grade
  size: string
  price: number         // Thai Baht
  tastingNotes: string[]
  description: string
  image: string         // exact public URL: /products/<folder>/<file>
  stock: StockStatus
  featured?: boolean
  category: Category
}

// ─── Product catalog ─────────────────────────────────────────────────────────
// Image paths match actual files in public/products/.
// Verified against: find public/products -type f | sort

export const products: Product[] = [

  // ── Hoshinoen (星野園) — Yame, Fukuoka ─────────────────────────────────────
  {
    id: 'hoshinoen-hoju',
    name: 'Hoshinoen Hoju',
    japaneseName: '星野園 鳳寿',
    brand: 'Hoshinoen',
    origin: 'Yame, Fukuoka',
    grade: 'Ceremonial',
    size: '20g',
    price: 2200,
    tastingNotes: ['อูมามิลึก', 'หวานธรรมชาติ', 'ครีมมี่'],
    description:
      'มัทฉะ Ceremonial grade คัดสรรจากสวนชา Yame ที่มีชื่อเสียงที่สุด รสอูมามิเข้มข้น สีเขียวมรกตสดใส เหมาะสำหรับพิธีชาและผู้รักมัทฉะขั้นสูง',
    image: '/products/hoshinoen/hoju-20g.png',
    stock: 'in_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'hoshinoen-hakuju',
    name: 'Hoshinoen Hakuju',
    japaneseName: '星野園 白寿',
    brand: 'Hoshinoen',
    origin: 'Yame, Fukuoka',
    grade: 'Ceremonial',
    size: '20g',
    price: 2800,
    tastingNotes: ['บริสุทธิ์', 'หวานเพียว', 'เนียนนุ่ม'],
    description:
      'มัทฉะระดับ Ceremonial สูงสุดของ Hoshinoen ความหวานที่เป็นธรรมชาติและเนื้อเนียนละเอียดเป็นเอกลักษณ์ของ Yame หมักไว้นานกว่าเกรดอื่น',
    image: '/products/hoshinoen/hoshino-hakuju-20g.png',
    stock: 'low_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'hoshinoen-seiho',
    name: 'Hoshinoen Seiho',
    japaneseName: '星野園 清峰',
    brand: 'Hoshinoen',
    origin: 'Yame, Fukuoka',
    grade: 'Superior',
    size: '20g',
    price: 1600,
    tastingNotes: ['สดชื่น', 'สมดุล', 'ขมเบา'],
    description:
      'มัทฉะ Superior grade ที่สดชื่นและสมดุล เหมาะสำหรับดื่มประจำวัน ความขมกลมกล่อมพร้อมกลิ่นหอมจาก Fukuoka เป็นตัวเลือกยอดนิยม',
    image: '/products/hoshinoen/seiho-20g.png',
    stock: 'in_stock',
    category: 'premium',
  },
  {
    id: 'hoshinoen-yame-no-tsuyu',
    name: 'Hoshinoen Yame no Tsuyu',
    japaneseName: '星野園 八女の露',
    brand: 'Hoshinoen',
    origin: 'Yame, Fukuoka',
    grade: 'Premium',
    size: '20g',
    price: 1200,
    tastingNotes: ['น้ำค้างยามเช้า', 'สดใส', 'ผักสด'],
    description:
      'ตั้งชื่อตามน้ำค้างแห่ง Yame มัทฉะ Premium grade ที่ให้ความสดชื่นเหมือนน้ำค้างยามเช้า เหมาะสำหรับผู้เริ่มต้นสู่มัทฉะคุณภาพจาก Fukuoka',
    image: '/products/hoshinoen/yame-no-tsuyu-20g.png',
    stock: 'in_stock',
    category: 'premium',
  },

  // ── Yamamasa Koyamaen (山政小山園) — Uji, Kyoto ────────────────────────────
  {
    id: 'yamamasa-ogurayama',
    name: 'Yamamasa Ogurayama',
    japaneseName: '山政小山園 小倉山',
    brand: 'Yamamasa Koyamaen',
    origin: 'Uji, Kyoto',
    grade: 'Ceremonial',
    size: '30g',
    price: 2000,
    tastingNotes: ['นุ่มลึก', 'หวานละมุน', 'หอมดอกไม้'],
    description:
      'ตั้งชื่อตามภูเขา Ogura อันงดงาม มัทฉะ Ceremonial grade ที่มีกลิ่นหอมดอกไม้แฝงอย่างพิเศษ รสชาติลึกและนุ่ม จากสวนชาเก่าแก่แห่ง Uji',
    image: '/products/yamamasa/ogurayama-30g.png',
    stock: 'in_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'yamamasa-samidori',
    name: 'Yamamasa Samidori',
    japaneseName: '山政小山園 さみどり',
    brand: 'Yamamasa Koyamaen',
    origin: 'Uji, Kyoto',
    grade: 'Premium',
    size: '30g',
    price: 1100,
    tastingNotes: ['เขียวสด', 'ขมเบา', 'สมดุล'],
    description:
      'Samidori หรือ "เขียวสดต้นฤดูร้อน" มัทฉะ Premium grade ยอดนิยมจาก Yamamasa เข้าถึงได้และให้รสชาติของ Uji ที่แท้จริง',
    image: '/products/yamamasa/samidori-30g.webp',
    stock: 'in_stock',
    category: 'premium',
  },
  {
    id: 'yamamasa-tennouzan',
    name: 'Yamamasa Tennouzan',
    japaneseName: '山政小山園 天王山',
    brand: 'Yamamasa Koyamaen',
    origin: 'Uji, Kyoto',
    grade: 'Ceremonial',
    size: '30g',
    price: 2600,
    tastingNotes: ['ยอดเยี่ยม', 'อูมามิเต็ม', 'ครีมมี่นุ่ม'],
    description:
      'ตั้งชื่อตามภูเขา Tennouzan สัญลักษณ์แห่งชัยชนะ มัทฉะ Ceremonial grade สูงสุดของ Yamamasa อูมามิเต็มและเนื้อครีมมี่นุ่มที่เป็นเอกลักษณ์',
    image: '/products/yamamasa/tennouzan-30g.png',
    stock: 'low_stock',
    featured: true,
    category: 'ceremonial',
  },

  // ── Aoiseicha (葵製茶) — Nishio, Aichi ────────────────────────────────────
  {
    id: 'aoiseicha-chiyo-no-kura',
    name: 'Aoiseicha Chiyo no Kura',
    japaneseName: '葵製茶 千代の倉',
    brand: 'Aoiseicha',
    origin: 'Nishio, Aichi',
    grade: 'Ceremonial',
    size: '30g',
    price: 1800,
    tastingNotes: ['ดั้งเดิม', 'อูมามิ', 'สีเขียวสด'],
    description:
      'มัทฉะ Ceremonial grade จากแหล่งผลิตชื่อดัง Nishio ที่มีประวัติการปลูกชายาวนาน รสอูมามิดั้งเดิม สีเขียวมรกตสดใส',
    image: '/products/aoi-seicha/chiyo-no-kura-30g.webp',
    stock: 'in_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'aoiseicha-miou',
    name: 'Aoiseicha Miou',
    japaneseName: '葵製茶 美鳳',
    brand: 'Aoiseicha',
    origin: 'Nishio, Aichi',
    grade: 'Superior',
    size: '30g',
    price: 1400,
    tastingNotes: ['หอมหวาน', 'นุ่มละเอียด', 'ผักสด'],
    description:
      'มัทฉะ Superior grade ที่มีกลิ่นหอมหวานเป็นเอกลักษณ์ เนื้อเนียนละเอียดเหมาะสำหรับ usucha ทุกวัน รสผักสดอ่อนๆ ตามมา',
    image: '/products/aoi-seicha/miou-30g.webp',
    stock: 'in_stock',
    category: 'premium',
  },
  {
    id: 'aoiseicha-nishinomori',
    name: 'Aoiseicha Nishinomori',
    japaneseName: '葵製茶 西の森',
    brand: 'Aoiseicha',
    origin: 'Nishio, Aichi',
    grade: 'Premium',
    size: '30g',
    price: 1100,
    tastingNotes: ['ป่าสด', 'ขมสมดุล', 'กลมกล่อม'],
    description:
      'Nishinomori หรือ "ป่าแห่งตะวันตก" มัทฉะ Premium grade ที่มีกลิ่นหอมธรรมชาติ รสขมสมดุลกลมกล่อม เหมาะสำหรับลาเต้และเมนูต่างๆ',
    image: '/products/aoi-seicha/nishinomori-30g.webp',
    stock: 'in_stock',
    category: 'premium',
  },

  // ── Ippodo (一保堂) — Uji, Kyoto ───────────────────────────────────────────
  {
    id: 'ippodo-ummon-no-mukashi',
    name: 'Ippodo Ummon no Mukashi',
    japaneseName: '一保堂 雲門の昔',
    brand: 'Ippodo',
    origin: 'Uji, Kyoto',
    grade: 'Ceremonial',
    size: '20g',
    price: 3500,
    tastingNotes: ['ยอดสูงสุด', 'อูมามิล้ำ', 'ครีมมี่หรูหรา'],
    description:
      'มัทฉะระดับสูงสุดจาก Ippodo ร้านชาชื่อดังแห่ง Kyoto ตั้งแต่ปี 1717 รสอูมามิที่ลึกและซับซ้อน เนื้อครีมมี่นุ่มเป็นพิเศษ สำหรับผู้รักมัทฉะตัวจริง',
    image: '/products/ippodo/ummon-no-mukashi-20g.webp',
    stock: 'low_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'ippodo-ikuyo-no-mukashi',
    name: 'Ippodo Ikuyo no Mukashi',
    japaneseName: '一保堂 幾世の昔',
    brand: 'Ippodo',
    origin: 'Uji, Kyoto',
    grade: 'Ceremonial',
    size: '20g',
    price: 2800,
    tastingNotes: ['ลึกและซับซ้อน', 'หวานนุ่ม', 'อูมามิ'],
    description:
      'มัทฉะ Ceremonial grade ชั้นยอดจาก Ippodo ที่สืบทอดความลึกซึ้งของรสชาติ Uji รุ่น Ikuyo no Mukashi ให้รสอูมามิที่ลึกและความหวานที่แฝงมา',
    image: '/products/ippodo/ikuyo-no-mukashi-20g.webp',
    stock: 'in_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'ippodo-hatsu-mukashi',
    name: 'Ippodo Hatsu Mukashi',
    japaneseName: '一保堂 初昔',
    brand: 'Ippodo',
    origin: 'Uji, Kyoto',
    grade: 'Superior',
    size: '20g',
    price: 2200,
    tastingNotes: ['สดใส', 'หอมหวาน', 'กลมกล่อม'],
    description:
      'รุ่นเริ่มต้นสู่ Ippodo — มัทฉะ Superior grade ที่ดุลยภาพระหว่างความหวานและอูมามิ เหมาะสำหรับผู้ที่ต้องการสัมผัสคุณภาพ Ippodo ในราคาที่เข้าถึงได้',
    image: '/products/ippodo/hatsu-mukashi-20g.webp',
    stock: 'in_stock',
    category: 'premium',
  },

  // ── Horii Shichimeien (堀井七茗園) — Uji, Kyoto ────────────────────────────
  {
    id: 'horii-premium-narino',
    name: 'Horii Premium Narino',
    japaneseName: '堀井 自園 プレミアム',
    brand: 'Horii',
    origin: 'Uji, Kyoto',
    grade: 'Ceremonial',
    size: '20g',
    price: 2400,
    tastingNotes: ['สวนชาเอง', 'พรีเมียม', 'อูมามิลึก'],
    description:
      'มัทฉะจากสวนชาของ Horii เอง ความหายากของการที่ผู้ผลิตปลูกชาเองทำให้คุณภาพยอดเยี่ยม รสอูมามิลึกและสีเขียวสดที่แท้จริง',
    image: '/products/horii/matcha-from-our-own-garden-premium-narino-20g.webp',
    stock: 'in_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'horii-udo-mukashi',
    name: 'Horii Udo Mukashi',
    japaneseName: '堀井 有道の昔',
    brand: 'Horii',
    origin: 'Uji, Kyoto',
    grade: 'Superior',
    size: '30g',
    price: 1800,
    tastingNotes: ['ดั้งเดิม', 'ลึกสมดุล', 'อูมามิ'],
    description:
      'มัทฉะ Superior grade ที่สืบทอดสูตรดั้งเดิมของ Horii รสชาติลึกและสมดุล ทำให้นึกถึงความเก่าแก่และศิลปะการชาแบบ Uji',
    image: '/products/horii/matcha-udo-mukashi-30g.webp',
    stock: 'in_stock',
    category: 'premium',
  },
  {
    id: 'horii-uji-old',
    name: 'Horii Uji Old',
    japaneseName: '堀井 宇治昔',
    brand: 'Horii',
    origin: 'Uji, Kyoto',
    grade: 'Premium',
    size: '30g',
    price: 1400,
    tastingNotes: ['คลาสสิก', 'ขมสมดุล', 'หอม Uji'],
    description:
      'มัทฉะ Premium grade ที่ถ่ายทอดกลิ่นหอมคลาสสิกแห่ง Uji ราคาเข้าถึงได้สำหรับมัทฉะคุณภาพ เหมาะสำหรับดื่มประจำวันและทำเมนูต่างๆ',
    image: '/products/horii/matcha-uji-old-30g.webp',
    stock: 'in_stock',
    category: 'premium',
  },
]

// ─── Derived exports ──────────────────────────────────────────────────────────

export const featuredProducts = products.filter((p) => p.featured)

export const productsByBrand = BRANDS.reduce<Record<Brand, Product[]>>(
  (acc, brand) => {
    acc[brand] = products.filter((p) => p.brand === brand)
    return acc
  },
  {} as Record<Brand, Product[]>
)

export const stockLabel: Record<StockStatus, string> = {
  in_stock:     'มีสินค้า',
  low_stock:    'ใกล้หมด',
  out_of_stock: 'สินค้าหมด',
}

export const gradeLabel: Record<Grade, string> = {
  Ceremonial: 'Ceremonial',
  Superior:   'Superior',
  Premium:    'Premium',
  Standard:   'Standard',
}
