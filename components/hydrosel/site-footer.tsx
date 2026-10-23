'use client'

import { useActionState } from 'react'
import { ArrowRight, BadgeCheck, MapPin } from 'lucide-react'
import { subscribeNewsletter, type QuoteState } from '@/app/actions'
import { Logo } from './logo'

const regions = [
  { name: 'Türkiye', detail: 'Genel Merkez ve Üretim Tesisi' },
  { name: 'Avrupa', detail: 'Satış ve Servis Ağı' },
  { name: 'Orta Doğu', detail: 'Bölge Distribütörleri' },
  { name: 'Afrika ve Asya', detail: 'İhracat Pazarları' },
]

const certifications = ['CE Belgesi', 'ISO 9001', 'ISO 14001', 'TSE', 'EN 12999'] as const

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', short: 'in' },
  { label: 'YouTube', href: 'https://www.youtube.com', short: 'YT' },
  { label: 'X', href: 'https://x.com', short: 'X' },
]

const initial: QuoteState = { status: 'idle' }

export function SiteFooter() {
  const [state, action, pending] = useActionState(subscribeNewsletter, initial)

  return (
    <footer className="border-t border-border bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-6 font-display text-lg font-semibold text-primary">Güç ve Performansın Tek Adresi</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Katlanır bomlu ve teleskopik ağır hizmet tipi araç üstü hidrolik vinçler; 40’tan fazla ülkede güvenle kullanılıyor.
            </p>
            <form action={action} className="mt-8 max-w-sm">
              <label htmlFor="newsletter" className="text-sm font-semibold">E-bülten</label>
              <div className="mt-3 flex rounded-md border border-input bg-background/60 p-1 focus-within:border-primary">
                <input
                  id="newsletter"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="ornek@firmaniz.com"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button type="submit" disabled={pending} className="inline-flex items-center gap-1.5 rounded bg-primary px-4 py-2 text-sm font-semibold text-black disabled:opacity-70">
                  Abone Ol
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
              {state.message && (
                <p role="status" className={`mt-2 text-xs ${state.status === 'error' ? 'text-destructive' : 'text-primary'}`}>
                  {state.message}
                </p>
              )}
            </form>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Küresel Ağımız</h2>
            <ul className="mt-5 flex flex-col gap-4">
              {regions.map((r) => (
                <li key={r.name} className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sertifikalar</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-3 py-1.5 text-xs font-medium">
                  <BadgeCheck className="size-3.5 text-primary" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Bizi Takip Edin</h2>
            <ul className="mt-5 flex gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} üzerinde Hydrosel`}
                    className="flex size-10 items-center justify-center rounded-md border border-border text-xs font-bold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {s.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Hydrosel Crane. Tüm hakları saklıdır. · www.hydrosel.com.tr</p>
          <ul className="flex gap-6">
            <li><a href="#home" className="hover:text-foreground">Gizlilik Politikası</a></li>
            <li><a href="#home" className="hover:text-foreground">Kullanım Koşulları</a></li>
            <li><a href="#contact" className="hover:text-foreground">Destek</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
