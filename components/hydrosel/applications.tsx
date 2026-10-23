'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Anchor, Building2, CheckCircle2, LifeBuoy, Pickaxe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const sectors = [
  {
    id: 'construction',
    icon: Building2,
    label: 'İnşaat',
    image: '/images/vinc7.jpeg',
    headline: 'Çelik montajı ve altyapı projeleri',
    copy: 'Teleskopik ve katlanır bomlu araç üstü vinçlerimiz; çelik, prefabrik ve mekanik modülleri yoğun şehir şantiyelerinde milimetrik hassasiyetle yerleştirir.',
    points: ['Engebeli arazide yük taşıma', 'Dar alanlarda hızlı kurulum', 'Çift vinçle senkronize kaldırma'],
  },
  {
    id: 'rescue',
    icon: LifeBuoy,
    label: 'Dalgıç Kurtarma',
    image: '/images/dalgıc.jpg',
    headline: 'Kurtarma, afet müdahalesi ve savunma',
    copy: 'Hızlı konuşlanan araç üstü vinçlerimiz; araç kurtarma, enkaz kaldırma ve insani yardım lojistiğinde acil durum ekiplerinin güvenini kazanmıştır.',
    points: ['5 dakikadan kısa sürede kurulum', 'Uzaktan telsiz kontrol', 'Gece operasyonu aydınlatması'],
  },
]

export function Applications() {
  const [active, setActive] = useState(sectors[0].id)
  const sector = sectors.find((s) => s.id === active) ?? sectors[0]

  return (
    <section id="applications" aria-labelledby="applications-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="applications-title"
          eyebrow="Ağır Sanayi Uygulamaları"
          title="Hataya yer olmayan sahalarda güvenilen çözüm ortağı."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="Sektörler" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {sectors.map(({ id, icon: Icon, label }) => {
              const selected = id === active
              return (
                <button
                  key={id}
                  id={`tab-${id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${id}`}
                  onClick={() => setActive(id)}
                  className={cn(
                    'flex shrink-0 items-center gap-3 rounded-lg border px-4 py-4 text-left text-sm font-semibold transition-all',
                    selected
                      ? 'border-primary/60 bg-primary/10 text-foreground shadow-[inset_3px_0_0_var(--primary)]'
                      : 'border-border bg-card/40 text-muted-foreground hover:border-primary/30 hover:text-foreground',
                  )}
                >
                  <Icon className={cn('size-5', selected ? 'text-primary' : 'text-muted-foreground')} aria-hidden="true" />
                  {label}
                </button>
              )
            })}
          </div>

          <div
            key={sector.id}
            id={`panel-${sector.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${sector.id}`}
            className="relative grid overflow-hidden rounded-xl border border-border bg-card/60 animate-in fade-in md:grid-cols-2"
          >
            <div className="relative min-h-64">
                  <Image src={sector.image} alt={`${sector.label} sahasında çalışan Hydrosel araç üstü vinci`} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:bg-gradient-to-r md:from-transparent md:to-card" />
            </div>
            <div className="flex flex-col justify-center p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{sector.label}</p>
              <h3 className="mt-3 font-display text-2xl font-bold">{sector.headline}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{sector.copy}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {sector.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
