// ─── Types ───────────────────────────────────────────────────────────────────

export const BRANDS = [
  'Hoshino Seichaen',
  'Marukyu Koyamaen',
  'Yamamasa Koyamaen',
  'Aoiseicha',
  'Ochamura',
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
  origin: string        // e.g. "Yame, Fukuoka"
  grade: Grade
  size: string          // e.g. "40g"
  price: number         // Thai Baht
  tastingNotes: string[]
  description: string
  image: string         // path under /public, e.g. "/products/hoshino-tenju.jpg"
  stock: StockStatus
  featured?: boolean
  category: Category
}

// ─── Product Data ─────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ── Hoshino Seichaen ──────────────────────────────────────────────────────
  {
    id: 'hoshino-tenju',
    name: 'Hoshino Tenju',
    japaneseName: '星野天寿',
    brand: 'Hoshino Seichaen',
    origin: 'Yame, Fukuoka',
    grade: 'Ceremonial',
    size: '20g',
    price: 2800,
    tastingNotes: ['อูมามิเข้มข้น', 'หวานธรรมชาติ', 'ครีมมี่'],
    description:
      'มัทฉะระดับสูงสุดของ Hoshino Seichaen คัดสรรจากใบชาคุณภาพดีที่สุดของ Yame สีเขียวมรกตสด รสอูมามิลึก และความหวานที่แทรกมาหลังดื่ม เหมาะสำหรับพิธีชาและผู้รักมัทฉะขั้นสูง',
    image: '/products/hoshino-tenju.jpg',
    stock: 'low_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'hoshino-choan',
    name: 'Hoshino Choan',
    japaneseName: '星野長安',
    brand: 'Hoshino Seichaen',
    origin: 'Yame, Fukuoka',
    grade: 'Ceremonial',
    size: '30g',
    price: 2200,
    tastingNotes: ['สดชื่น', 'หวานละมุน', 'เนียนนุ่ม'],
    description:
      'มัทฉะชั้นพิธีการที่สมดุลระหว่างความหวานและอูมามิ เนื้อชาละเอียดมาก ให้สีเขียวสดใสในถ้วย เหมาะสำหรับ usucha และ koicha ทั้งสองแบบ',
    image: '/products/hoshino-choan.jpg',
    stock: 'in_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'hoshino-wako',
    name: 'Hoshino Wako',
    japaneseName: '星野和光',
    brand: 'Hoshino Seichaen',
    origin: 'Yame, Fukuoka',
    grade: 'Superior',
    size: '40g',
    price: 1600,
    tastingNotes: ['สมดุล', 'ขมเล็กน้อย', 'ผักสด'],
    description:
      'มัทฉะเกรด Superior ที่เหมาะสำหรับการดื่มประจำวัน รสชาติสมดุลระหว่างความขมและหวาน เนื้อละเอียดเสมอกัน เป็นตัวเลือกยอดนิยมสำหรับผู้เริ่มต้นสู่มัทฉะพรีเมียม',
    image: '/products/hoshino-wako.jpg',
    stock: 'in_stock',
    category: 'premium',
  },
  {
    id: 'hoshino-yame-no-hana',
    name: 'Hoshino Yame no Hana',
    japaneseName: '星野八女の花',
    brand: 'Hoshino Seichaen',
    origin: 'Yame, Fukuoka',
    grade: 'Premium',
    size: '40g',
    price: 1200,
    tastingNotes: ['ผักสด', 'หอมหญ้า', 'อูมามิ'],
    description:
      'มัทฉะดอกไม้แห่ง Yame เกรด Premium ที่ให้รสชาติของธรรมชาติ กลิ่นหอมเฉพาะตัวของใบชาจาก Fukuoka ความขมกลมกล่อมพร้อมอูมามิแฝง',
    image: '/products/hoshino-yame-no-hana.jpg',
    stock: 'in_stock',
    category: 'premium',
  },

  // ── Marukyu Koyamaen ──────────────────────────────────────────────────────
  {
    id: 'marukyu-wako',
    name: 'Marukyu Wako',
    japaneseName: '丸久小山園 和光',
    brand: 'Marukyu Koyamaen',
    origin: 'Uji, Kyoto',
    grade: 'Ceremonial',
    size: '30g',
    price: 2400,
    tastingNotes: ['อูมามิลึก', 'หวานนุ่ม', 'สีเขียวสด'],
    description:
      'จากบ้านชาอันทรงเกียรติแห่ง Uji ที่มีประวัติยาวนานกว่า 300 ปี Wako คือมัทฉะชั้นพิธีการที่ Marukyu Koyamaen ภาคภูมิใจ อูมามิที่ลึกและซับซ้อน สีเขียวมรกตสดใส',
    image: '/products/marukyu-wako.jpg',
    stock: 'in_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'marukyu-isuzu',
    name: 'Marukyu Isuzu',
    japaneseName: '丸久小山園 五十鈴',
    brand: 'Marukyu Koyamaen',
    origin: 'Uji, Kyoto',
    grade: 'Superior',
    size: '40g',
    price: 1800,
    tastingNotes: ['สดชื่น', 'ขมสมดุล', 'กลมกล่อม'],
    description:
      'มัทฉะที่ได้แรงบันดาลใจจากแม่น้ำ Isuzu รสสดชื่นและกลมกล่อม ความขมแบบ Uji ที่คุ้นเคยพร้อมความหวานที่ค่อยๆ ตามมา เหมาะสำหรับ usucha ทุกวัน',
    image: '/products/marukyu-isuzu.jpg',
    stock: 'in_stock',
    category: 'premium',
  },
  {
    id: 'marukyu-aoarashi',
    name: 'Marukyu Aoarashi',
    japaneseName: '丸久小山園 青嵐',
    brand: 'Marukyu Koyamaen',
    origin: 'Uji, Kyoto',
    grade: 'Premium',
    size: '40g',
    price: 1400,
    tastingNotes: ['ชาบดี', 'หอมหญ้า', 'ขมเด่น'],
    description:
      'Aoarashi หรือ "พายุเขียว" — มัทฉะที่มีรสชาติเข้มข้นกว่าปกติ กลิ่นหญ้าสดและความขมที่ชัดเจน เหมาะสำหรับทำมัทฉะลาเต้หรือดื่มเย็น',
    image: '/products/marukyu-aoarashi.jpg',
    stock: 'out_of_stock',
    category: 'premium',
  },
  {
    id: 'marukyu-yugen',
    name: 'Marukyu Yugen',
    japaneseName: '丸久小山園 幽玄',
    brand: 'Marukyu Koyamaen',
    origin: 'Uji, Kyoto',
    grade: 'Ceremonial',
    size: '20g',
    price: 3200,
    tastingNotes: ['ลึกลับ', 'อูมามิสูงสุด', 'ครีมมี่หรูหรา'],
    description:
      'Yugen — "ความงามที่ลึกซึ้งและเงียบงาม" มัทฉะระดับสูงสุดของ Marukyu ที่คัดสรรจากใบชาชั้นเลิศ รสอูมามิที่ซับซ้อน เนื้อครีมมี่ละเอียด สำหรับผู้รักมัทฉะตัวจริง',
    image: '/products/marukyu-yugen.jpg',
    stock: 'low_stock',
    featured: true,
    category: 'ceremonial',
  },

  // ── Yamamasa Koyamaen ─────────────────────────────────────────────────────
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
      'ตั้งชื่อตามภูเขา Ogura อันงดงาม มัทฉะชั้นพิธีการที่มีกลิ่นหอมดอกไม้แฝงอย่างพิเศษ รสชาติลึกและนุ่ม เนื้อเนียนละเอียด เหมาะสำหรับผู้ที่ต้องการประสบการณ์ Uji แท้',
    image: '/products/yamamasa-ogurayama.jpg',
    stock: 'in_stock',
    featured: true,
    category: 'ceremonial',
  },
  {
    id: 'yamamasa-matsukaze',
    name: 'Yamamasa Matsukaze',
    japaneseName: '山政小山園 松風',
    brand: 'Yamamasa Koyamaen',
    origin: 'Uji, Kyoto',
    grade: 'Superior',
    size: '40g',
    price: 1500,
    tastingNotes: ['สดใส', 'หญ้าสด', 'สมดุล'],
    description:
      'Matsukaze หรือ "ลมสน" — มัทฉะที่สดชื่นเหมือนลมพัดผ่านป่าสน กลิ่นหญ้าสดที่สดใส รสชาติสมดุล เหมาะสำหรับดื่มร้อนหรือ cold brew มัทฉะ',
    image: '/products/yamamasa-matsukaze.jpg',
    stock: 'in_stock',
    category: 'premium',
  },
  {
    id: 'yamamasa-samidori',
    name: 'Yamamasa Samidori',
    japaneseName: '山政小山園 さみどり',
    brand: 'Yamamasa Koyamaen',
    origin: 'Uji, Kyoto',
    grade: 'Premium',
    size: '40g',
    price: 1100,
    tastingNotes: ['เขียวสด', 'ขมเบา', 'ชาบด'],
    description:
      'Samidori หรือ "เขียวสดของต้นฤดูร้อน" — มัทฉะที่ได้รับความนิยมสูงในหมู่ผู้เริ่มดื่มมัทฉะคุณภาพ ราคาเข้าถึงได้แต่คุณภาพไม่ธรรมดา',
    image: '/products/yamamasa-samidori.jpg',
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
    size: '20g',
    price: 2600,
    tastingNotes: ['ยอดเยี่ยม', 'อูมามิเต็ม', 'ครีมมี่นุ่ม'],
    description:
      'ตั้งชื่อตามภูเขา Tennouzan สัญลักษณ์แห่งชัยชนะ มัทฉะระดับ Ceremonial ที่รวมความสมบูรณ์แบบของ Uji อูมามิที่เข้มข้น เนื้อครีมมี่ที่เปลี่ยนไปไม่ได้',
    image: '/products/yamamasa-tennouzan.jpg',
    stock: 'low_stock',
    featured: true,
    category: 'ceremonial',
  },

  // ── Aoiseicha ─────────────────────────────────────────────────────────────
  {
    id: 'aoiseicha-okumidori',
    name: 'Aoiseicha Okumidori',
    japaneseName: '葵製茶 奥みどり',
    brand: 'Aoiseicha',
    origin: 'Nishio, Aichi',
    grade: 'Superior',
    size: '40g',
    price: 1200,
    tastingNotes: ['หอมลึก', 'ผักสด', 'หวานแฝง'],
    description:
      'จาก Nishio แหล่งผลิตมัทฉะชื่อดังของ Aichi มัทฉะ Okumidori มีกลิ่นหอมลึกของใบชาและรสหวานที่แฝงอยู่ เนื้อเนียนเหมาะสำหรับดื่มแบบ usucha ทุกวัน',
    image: '/products/aoiseicha-okumidori.jpg',
    stock: 'in_stock',
    category: 'premium',
  },
  {
    id: 'aoiseicha-tsuyuhikari',
    name: 'Aoiseicha Tsuyuhikari',
    japaneseName: '葵製茶 つゆひかり',
    brand: 'Aoiseicha',
    origin: 'Nishio, Aichi',
    grade: 'Superior',
    size: '40g',
    price: 1600,
    tastingNotes: ['แสงน้ำค้าง', 'เนียนนุ่ม', 'สดชื่น'],
    description:
      'Tsuyuhikari หรือ "แสงน้ำค้าง" มัทฉะจากพันธุ์ชาพิเศษที่ให้รสชาติสดชื่นเหมือนน้ำค้างยามเช้า เนื้อเนียนละเอียด กลิ่นหอมเบาบางน่าหลงใหล',
    image: '/products/aoiseicha-tsuyuhikari.jpg',
    stock: 'in_stock',
    featured: true,
    category: 'premium',
  },

  // ── Ochamura ──────────────────────────────────────────────────────────────
  {
    id: 'ochamura-yame-suisho',
    name: 'Ochamura Yame Matcha Suisho',
    japaneseName: 'お茶村 八女抹茶 水晶',
    brand: 'Ochamura',
    origin: 'Yame, Fukuoka',
    grade: 'Superior',
    size: '40g',
    price: 1800,
    tastingNotes: ['ใสบริสุทธิ์', 'หวานนุ่ม', 'เนียนสะอาด'],
    description:
      'Suisho หรือ "คริสตัล" — มัทฉะ Yame ที่ผ่านกระบวนการบดอย่างพิถีพิถัน จนได้ความละเอียดที่ใสบริสุทธิ์เหมือนคริสตัล รสหวานนุ่มและเนียนสะอาด',
    image: '/products/ochamura-yame-suisho.jpg',
    stock: 'in_stock',
    featured: true,
    category: 'premium',
  },
  {
    id: 'ochamura-yame-matcha',
    name: 'Ochamura Yame Matcha',
    japaneseName: 'お茶村 八女抹茶',
    brand: 'Ochamura',
    origin: 'Yame, Fukuoka',
    grade: 'Premium',
    size: '100g',
    price: 1200,
    tastingNotes: ['เป็นธรรมชาติ', 'สดชื่น', 'กลมกล่อม'],
    description:
      'มัทฉะ Yame แท้ในขนาดคุ้มค่า เกรด Premium ที่เหมาะสำหรับดื่มประจำวันและใช้ในการทำขนม รสชาติธรรมชาติของ Fukuoka ที่กลมกล่อม',
    image: '/products/ochamura-yame-matcha.jpg',
    stock: 'in_stock',
    category: 'culinary',
  },
]

// ─── Derived Exports ──────────────────────────────────────────────────────────

export const featuredProducts = products.filter((p) => p.featured)

export const productsByBrand = BRANDS.reduce<Record<Brand, Product[]>>(
  (acc, brand) => {
    acc[brand] = products.filter((p) => p.brand === brand)
    return acc
  },
  {} as Record<Brand, Product[]>
)

export const stockLabel: Record<StockStatus, string> = {
  in_stock: 'มีสินค้า',
  low_stock: 'ใกล้หมด',
  out_of_stock: 'สินค้าหมด',
}

export const gradeLabel: Record<Grade, string> = {
  Ceremonial: 'Ceremonial',
  Superior: 'Superior',
  Premium: 'Premium',
  Standard: 'Standard',
}
