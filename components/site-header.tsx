'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { restaurant } from '@/config/restaurant'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Le restaurant', href: '/restaurant' },
  { label: 'Traiteur & groupes', href: '/groupes' },
  { label: 'Événements', href: '/evenements' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <Link href="/" className="flex min-h-11 items-center" aria-label="Racine Créole, accueil">
          <Image src="/images/racine/logo-full.jpg" alt="Racine Créole — cuisine fusion" width={128} height={128} priority className="h-14 w-auto object-contain md:h-[4.5rem]" />
        </Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navigation principale">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={restaurant.phoneHref} className="action-icon xl:hidden" aria-label={`Appeler au ${restaurant.phone}`}><Phone aria-hidden="true" /></a>
          <Link href="/commander" className="button-primary">Commander</Link>
          <button type="button" onClick={() => setOpen(!open)} className="action-icon xl:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-border bg-background px-4 py-3 xl:hidden" aria-label="Navigation mobile">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium hover:bg-muted">{item.label}</Link>)}
          </div>
        </nav>
      )}
    </header>
  )
}
