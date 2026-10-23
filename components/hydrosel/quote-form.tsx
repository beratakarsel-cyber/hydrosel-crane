'use client'

import { useActionState } from 'react'
import { CheckCircle2, Globe, Loader2, Mail, Send } from 'lucide-react'
import { submitQuote, type QuoteState } from '@/app/actions'
import { industries } from '@/lib/hydrosel-data'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SectionHeading } from './section-heading'

const initialState: QuoteState = { status: 'idle' }
const fieldClass = 'h-11 bg-background/60 dark:bg-background/60 focus-visible:border-primary'

export function QuoteForm() {
  const [state, action, pending] = useActionState(submitQuote, initialState)
  const errors = state.errors ?? {}

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Teklif Alın"
            title="Bir sonraki projenizi birlikte planlayalım."
            description="Proje gereksinimlerinizi paylaşın; uygulama mühendislerimiz size özel araç üstü vinç teklifini eksiksiz teknik dokümantasyonla hazırlasın."
          />
          <ul className="mt-10 flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
                <Globe className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Web sitesi</p>
                <a href="https://www.hydrosel.com.tr" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary">www.hydrosel.com.tr</a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">E-posta</p>
                <a href="mailto:info@hydrosel.com.tr" className="font-semibold hover:text-primary">info@hydrosel.com.tr</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="glass rounded-2xl p-6 md:p-10">
          {state.status === 'success' ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center animate-in fade-in zoom-in-95" role="status">
              <CheckCircle2 className="size-14 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-bold">Talebiniz alındı</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">{state.message}</p>
            </div>
          ) : (
            <form action={action} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Ad Soyad" error={errors.name}>
                <Input id="name" name="name" autoComplete="name" placeholder="Ahmet Yılmaz" required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className={fieldClass} />
              </Field>
              <Field id="company" label="Firma Adı" error={errors.company}>
                <Input id="company" name="company" autoComplete="organization" placeholder="Anadolu Lojistik A.Ş." required aria-invalid={!!errors.company} aria-describedby={errors.company ? 'company-error' : undefined} className={fieldClass} />
              </Field>
              <div className="sm:col-span-2">
                <Field id="industry" label="Sektör" error={errors.industry}>
                  <Select name="industry" required>
                    <SelectTrigger id="industry" aria-invalid={!!errors.industry} className={`w-full ${fieldClass}`}>
                      <SelectValue placeholder="Sektörünüzü seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((i) => (
                        <SelectItem key={i} value={i}>{i}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="specs" label="Proje Detayları" error={errors.specs}>
                  <Textarea id="specs" name="specs" rows={5} placeholder="Gerekli kapasite, erişim mesafesi, araç tipi, çalışma ortamı, teslim süresi..." required aria-invalid={!!errors.specs} aria-describedby={errors.specs ? 'specs-error' : undefined} className="min-h-32 bg-background/60 dark:bg-background/60 focus-visible:border-primary" />
                </Field>
              </div>
              {state.status === 'error' && state.message && (
                <p className="text-sm text-destructive sm:col-span-2" role="alert">{state.message}</p>
              )}
              <button
                type="submit"
                disabled={pending}
                className="glow inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:col-span-2"
              >
                {pending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
                {pending ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-sm text-muted-foreground">{label}</Label>
      {children}
      {error && <p id={`${id}-error`} className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
