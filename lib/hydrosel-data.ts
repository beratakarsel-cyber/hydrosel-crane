export type ProductCategory = 'knuckle' | 'telescopic'

export type CraneModel = {
  id: string
  name: string
  series: string
  category: ProductCategory
  image: string
  description: string
  capacityTons: number
  reachMeters: number
  pressureBar: number
}

export const categories: { value: 'all' | ProductCategory; label: string }[] = [
  { value: 'all', label: 'Tüm Araç Üstü Vinçler' },
  { value: 'knuckle', label: 'Katlanır Bomlu' },
  { value: 'telescopic', label: 'Teleskopik' },
]

export const craneModels: CraneModel[] = [
  {
    id: 'hk-35',
    name: 'HK-35 Kompakt',
    series: 'Katlanır Bomlu Araç Üstü Vinç',
    category: 'knuckle',
    image: '/images/vinc1.jpeg',
    description:
      'Kamyonlar için hafif katlanır bomlu araç üstü vinç; yapı malzemesi teslimatı ve şehir içi lojistik için idealdir.',
    capacityTons: 35,
    reachMeters: 18,
    pressureBar: 320,
  },
  {
    id: 'hk-85',
    name: 'HK-85 Mafsallı',
    series: 'Katlanır Bomlu Araç Üstü Vinç',
    category: 'knuckle',
    image: '/images/vinc2.jpeg',
    description:
      'Çelik montajı ve prefabrik yerleşimi için uzatma bomlu, yüksek performanslı katlanır bomlu araç üstü vinç.',
    capacityTons: 85,
    reachMeters: 26,
    pressureBar: 365,
  },
  {
    id: 'hk-150',
    name: 'HK-150 Titan',
    series: 'Katlanır Bomlu Araç Üstü Vinç',
    category: 'knuckle',
    image: '/images/vinc3.jpeg',
    description:
      '360° kesintisiz dönüş ve akıllı yük kontrolüne sahip, ağır hizmet tipi amiral gemisi araç üstü vinç.',
    capacityTons: 150,
    reachMeters: 32,
    pressureBar: 380,
  },
  {
    id: 'ht-60',
    name: 'HT-60 Teleskopik',
    series: 'Teleskopik Araç Üstü Vinç',
    category: 'telescopic',
    image: '/images/vinc4.jpeg',
    description:
      '6 kademeli bom ve tam genişlikte destek ayağı izleme sistemiyle hızlı kurulan teleskopik araç üstü vinç.',
    capacityTons: 60,
    reachMeters: 42,
    pressureBar: 340,
  },
  {
    id: 'ht-100',
    name: 'HT-100 Arazi',
    series: 'Teleskopik Araç Üstü Vinç',
    category: 'telescopic',
    image: '/images/vinc5.jpeg',
    description:
      'Madencilik, enerji ve engebeli arazi şantiyeleri için tasarlanmış, tüm tekerlekten çekişli teleskopik araç üstü vinç.',
    capacityTons: 100,
    reachMeters: 50,
    pressureBar: 360,
  },
  {
    id: 'ht-130',
    name: 'HT-130 Ağır Kaldırma',
    series: 'Teleskopik Araç Üstü Vinç',
    category: 'telescopic',
    image: '/images/vinc6.jpeg',
    description:
      'Altyapı ve ağır sanayi projeleri için 7 kademeli bomlu, maksimum erişimli teleskopik araç üstü vinç.',
    capacityTons: 130,
    reachMeters: 56,
    pressureBar: 380,
  },
]

export const industries = [
  'İnşaat',
  'Dalgıç Kurtarma',
] as const