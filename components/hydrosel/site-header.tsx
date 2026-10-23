'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'

const links = [
  { href: '#home', label: 'Anasayfa' },
  { href: '#products', label: 'Ürünler' },
  { href: '#technology', label: 'Teknoloji' },
  { href: '#about', label: 'Hakkımızda' },
  { href: '#contact', label: 'İletişim' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Ana menü"
        className="glass mx-auto flex max-w-7xl items-center justify-between rounded-xl px-4 py-3 md:px-6"
      >
        <Logo />
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="glow hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Teklif Alın
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-secondary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Menüyü kapat' : 'Menüyü aç'}</span>
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="glass mx-auto mt-2 max-w-7xl rounded-xl p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="glow block rounded-md bg-primary px-3 py-2.5 text-center text-sm font-semibold text-black"
              >
                Teklif Alın
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
