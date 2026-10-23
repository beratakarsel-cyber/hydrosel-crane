import { SectionHeading } from './section-heading'

const stats = [
  { value: '37', label: 'Yıllık mühendislik tecrübesi' },
  { value: '12.000+', label: 'Sahada çalışan vinç' },
  { value: '1.400', label: 'Uzman çalışan' },
  { value: '%99,2', label: 'Filo çalışma süresi' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-y border-border bg-black/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            id="about-title"
            eyebrow="Hakkımızda"
            title="Dünyanın en ağır yüklerini kaldırmada yılların tecrübesi."
            description="Küçük bir hidrolik atölyesinden küresel bir üreticiye dönüşen Hydrosel; her araç üstü vinci kendi bünyesinde tasarlar, üretir ve servis eder. Kaliteyi ham çelikten son yük testine kadar her aşamada kontrol eder."
          />
        </div>
        <dl className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-2 rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40">
              <dt className="text-sm text-muted-foreground">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
