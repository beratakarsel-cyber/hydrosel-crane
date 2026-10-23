'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Gauge, MoveHorizontal, Weight } from 'lucide-react'
import { categories, craneModels, type ProductCategory } from '@/lib/hydrosel-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

export function ProductShowcase() {
  const [filter, setFilter] = useState<'all' | ProductCategory>('all')
  const visible = filter === 'all' ? craneModels : craneModels.filter((m) => m.category === filter)

  return (
    <section id="products" aria-labelledby="products-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="products-title"
            eyebrow="Ürün Gamımız"
            title="En zorlu kaldırma operasyonları için tasarlanmış araç üstü vinç serileri."
          />
          <div role="group" aria-label="Vinç serisine göre filtrele" className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                aria-pressed={filter === cat.value}
                onClick={() => setFilter(cat.value)}
                className={cn(
                  'rounded-md border px-4 py-2 text-sm font-medium transition-all',
                  filter === cat.value
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground',
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((model) => (
            <li
              key={model.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-20px_rgb(50_205_50/0.35)] animate-in fade-in zoom-in-95"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={model.image}
                  alt={`${model.name} hidrolik vinç`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                <span className="glass absolute left-4 top-4 rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {model.series}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{model.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{model.description}</p>
                <dl className="mt-5 grid grid-cols-3 gap-2">
                  <Spec icon={Weight} label="Kapasite" value={`${model.capacityTons} t`} />
                  <Spec icon={MoveHorizontal} label="Erişim" value={`${model.reachMeters} m`} />
                  <Spec icon={Gauge} label="Basınç" value={`${model.pressureBar} bar`} />
                </dl>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-[#7CFC7C]"
                >
                  <span className="sr-only">{model.name} </span>
                  Teknik Özellikleri İnceleyin
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Weight
  label: string
  value: string
}) {
  return (
    <div className="rounded-md border border-border bg-secondary/40 px-2.5 py-2">
      <dt className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        <Icon className="size-3 text-primary" aria-hidden="true" />
        {label}
      </dt>
      <dd className="mt-0.5 font-display text-sm font-bold text-foreground">{value}</dd>
    </div>
  )
}
