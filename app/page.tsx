import { SiteHeader } from '@/components/hydrosel/site-header'
import { Hero } from '@/components/hydrosel/hero'
import { ProductShowcase } from '@/components/hydrosel/product-showcase'
import { Technology } from '@/components/hydrosel/technology'
import { Applications } from '@/components/hydrosel/applications'
import { Configurator } from '@/components/hydrosel/configurator'
import { About } from '@/components/hydrosel/about'
import { QuoteForm } from '@/components/hydrosel/quote-form'
import { SiteFooter } from '@/components/hydrosel/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductShowcase />
        <Technology />
        <Applications />
        <Configurator />
        <About />
        <QuoteForm />
      </main>
      <SiteFooter />
    </>
  )
}
