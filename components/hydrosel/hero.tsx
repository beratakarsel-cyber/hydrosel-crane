import Image from 'next/image'
import { ArrowRight, Globe2, ShieldCheck, Weight } from 'lucide-react'

const metrics = [
  { icon: Weight, value: '150T+', label: 'Maksimum Vinç Kapasitesi' },
  { icon: Globe2, value: '40+', label: 'İhracat Yapılan Ülke' },
  { icon: ShieldCheck, value: 'ISO 9001', label: 'Kalite Sertifikası' },
]

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-svh flex-col overflow-hidden pt-28">
      <Image
        src="/images/hero-crane.png"
        alt="Hydrosel araç üstü hidrolik vinç"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_right,black,transparent_70%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-16 md:px-6">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-primary">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          GÜCÜN KONTROL MERKEZİ
        </p>
        <h1 className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          GÜÇLÜ ARAÇ ÜSTÜ{' '}
          <span className="bg-gradient-to-r from-[#28a745] via-primary to-[#7CFC7C] bg-clip-text text-transparent">
            HİDROLİK VİNÇLER
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-gray-300 sm:text-xl">
          <span className="font-display font-semibold text-primary">Güç ve Performansın Tek Adresi</span>
          {' — '}
          Ağır kaldırma operasyonları için maksimum hassasiyet, yüksek güvenlik ve üstün dayanıklılık.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="glow group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            Teklif Alın
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#products"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-primary"
          >
            Ürünlerimizi İnceleyin
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-10 md:px-6">
        <dl className="glass grid grid-cols-1 divide-y divide-white/10 rounded-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {metrics.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 px-6 py-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col-reverse">
                <dt className="text-sm text-muted-foreground">{label}</dt>
                <dd className="font-display text-2xl font-bold text-foreground">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
