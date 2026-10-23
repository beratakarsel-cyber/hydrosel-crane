'use server'

import { industries } from '@/lib/hydrosel-data'

export type QuoteState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'company' | 'industry' | 'specs', string>>
}

function field(formData: FormData, key: string, max: number) {
  return String(formData.get(key) ?? '').trim().slice(0, max)
}

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const name = field(formData, 'name', 120)
  const company = field(formData, 'company', 160)
  const industry = field(formData, 'industry', 60)
  const specs = field(formData, 'specs', 4000)

  const errors: QuoteState['errors'] = {}
  if (name.length < 2) errors.name = 'Lütfen adınızı ve soyadınızı girin.'
  if (company.length < 2) errors.company = 'Lütfen firma adınızı girin.'
  if (!(industries as readonly string[]).includes(industry)) errors.industry = 'Lütfen bir sektör seçin.'
  if (specs.length < 10) errors.specs = 'Lütfen projenizi en az 10 karakterle açıklayın.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors, message: 'Lütfen işaretli alanları düzeltin.' }
  }

  return {
    status: 'success',
    message: `Teşekkür ederiz, ${name}. Hydrosel mühendislerimiz bir iş günü içinde ${company} ile iletişime geçecektir.`,
  }
}

export async function subscribeNewsletter(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const email = field(formData, 'email', 254)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Lütfen geçerli bir e-posta adresi girin.' }
  }
  return { status: 'success', message: 'Aboneliğiniz başarıyla oluşturuldu. Aramıza hoş geldiniz.' }
}
