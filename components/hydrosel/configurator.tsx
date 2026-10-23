'use client'

import { useState } from 'react'
import { ArrowRight, SearchX } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { craneModels } from '@/lib/hydrosel-data'
import { SectionHeading } from './section-heading'

const LOAD = { min: 5, max: 150, step: 5 }
const REACH = { min: 5, max: 56, step: 1 }

export function Configurator() {
  const [load, setLoad] = useState(60)
  const [reach, setReach] = useState(25)

  const matches = craneModels
    .filter((m) => m.capacityTons >= load && m.reachMeters >= reach)
    .sort((a, b) => a.capacityTons - b.capacityTons)
    .slice(0, 3)

  return (
    <section id="configurator" aria-labelledby="configurator-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-background to-card p-6 md:p-12">
          <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                id="configurator-title"
                eyebrow="Vinç Seçim Aracı"
                title="İdeal kaldırma çözümünüzü bulun."
                description="İhtiyaç duyduğunuz kaldırma kapasitesini ve erişim mesafesini belirleyin; gereksinimlerinizi karşılayan Hydrosel modellerini anında listeleyelim."
              />
              <div className="mt-10 flex flex-col gap-10">
                <Control
                  id="load"
                  label="Gerekli Kaldırma Kapasitesi"
                  unit="Ton"
                  value={load}
                  {...LOAD}
                  onChange={setLoad}
                />
                <Control
                  id="reach"
                  label="Erişim Mesafesi"
                  unit="Metre"
                  value={reach}
                  {...REACH}
                  onChange={setReach}
                />
              </div>
            </div>

            <div className="glass flex flex-col rounded-xl p-6" aria-live="polite">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold">Önerilen Modeller</h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {matches.length} uygun model
                </span>
              </div>
              {matches.length > 0 ? (
                <ul className="mt-6 flex flex-col gap-3">
                  {matches.map((m, i) => (
                    <li key={m.id} className="flex items-center gap-4 rounded-lg border border-border bg-background/60 p-4 transition-colors hover:border-primary/50">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 font-display text-sm font-bold text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold">{m.name}</p>
                        <p className="text-xs text-muted-foreground">{m.series}</p>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <p><span className="font-display text-sm font-bold text-foreground">{m.capacityTons}</span> t</p>
                        <p><span className="font-display text-sm font-bold text-foreground">{m.reachMeters}</span> m</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-border p-8 text-center">
                  <SearchX className="size-8 text-muted-foreground" aria-hidden="true" />
                  <p className="mt-3 font-semibold">Uygun standart model bulunamadı</p>
                  <p className="mt-1 text-sm text-muted-foreground">Mühendislerimiz özel gereksinimleriniz için size özel çözümler geliştirir.</p>
                </div>
              )}
              <a
                href="#contact"
                className="glow mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                {matches.length > 0 ? 'Teklif Alın' : 'Mühendisimizle Görüşün'}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Control({
  id,
  label,
  unit,
  value,
  min,
  max,
  step,
  onChange,
}: {
  id: string
  label: string
  unit: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex items-end justify-between">
        <label id={`${id}-label`} className="text-sm font-medium text-muted-foreground">
          {label}
        </label>
        <p className="font-display text-3xl font-bold text-foreground">
          {value}
          <span className="ml-1 text-sm font-medium text-primary">{unit}</span>
        </p>
      </div>
      <Slider
        aria-labelledby={`${id}-label`}
        className="mt-4 [&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:size-5 [&_[data-slot=slider-thumb]]:border-2 [&_[data-slot=slider-thumb]]:border-primary [&_[data-slot=slider-track]]:h-2"
        value={value}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(Array.isArray(v) ? v[0] : v)}
      />
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}
