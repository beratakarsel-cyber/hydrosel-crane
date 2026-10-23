import { Activity, Cpu, ShieldHalf, Wrench } from 'lucide-react'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: ShieldHalf,
    title: 'Yüksek Mukavemetli Çelik',
    description:
      'Bomlarımız, üstün dayanım-ağırlık oranı ve uzun yorulma ömrü sağlayan S960 yapı çeliğinden üretilir.',
    stat: '960 MPa',
    statLabel: 'akma dayanımı',
  },
  {
    icon: Activity,
    title: 'Akıllı Yük Algılamalı Hidrolik',
    description:
      'Oransal valfler debiyi ihtiyaca göre anlık ayarlayarak akıcı ve eş zamanlı hareket sağlar; yakıt tüketimini %30’a kadar azaltır.',
    stat: '-%30',
    statLabel: 'enerji tüketimi',
  },
  {
    icon: Cpu,
    title: 'Uzaktan Dijital Arıza Tespiti',
    description:
      'Telemetri sistemi; hidrolik basınç, yağ sıcaklığı ve çalışma döngüsü verilerini kestirimci bakım için servis merkezimize iletir.',
    stat: '7/24',
    statLabel: 'filo takibi',
  },
  {
    icon: Wrench,
    title: 'Gelişmiş Güvenlik Sistemleri',
    description:
      'Her Hydrosel araç üstü vincinde yedekli yük moment sınırlayıcı, acil indirme ve sertifikalı aşırı yük koruması standarttır.',
    stat: 'SIL 2',
    statLabel: 'güvenlik seviyesi',
  },
]

export function Technology() {
  return (
    <section id="technology" aria-labelledby="technology-title" className="relative overflow-hidden border-y border-border bg-black/40 py-24 md:py-32">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="technology-title"
          eyebrow="Mühendislik ve Teknoloji"
          title="Çelikten yazılıma, hassasiyetle tasarlandı."
          description="Her Hydrosel araç üstü vinci, ağır hizmet tipi metalurjiyi akıllı hidrolik kontrolle birleştirir; böylece operatörler daha fazla yükü daha güvenle kaldırır."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description, stat, statLabel }) => (
            <li key={title} className="group relative flex flex-col bg-background p-7 transition-colors hover:bg-card">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30 transition-shadow group-hover:shadow-[0_0_24px_rgb(50_205_50/0.4)]">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <p className="mt-6 border-t border-border pt-4">
                <span className="font-display text-2xl font-bold text-primary">{stat}</span>{' '}
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{statLabel}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
