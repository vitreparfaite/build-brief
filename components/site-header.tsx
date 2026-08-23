import { Menu, Phone } from 'lucide-react'
import { restaurant } from '@/config/restaurant'

const navItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'Notre histoire', href: '#histoire' },
  { label: 'Sur place', href: '#restaurant' },
  { label: 'Nous trouver', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#accueil" className="flex min-h-11 items-center gap-3" aria-label="Racine Créole, accueil">
          <span className="flex size-10 items-center justify-center rounded-full border border-primary font-serif text-lg font-semibold text-primary">RC</span>
          <span className="font-serif text-xl font-semibold tracking-tight">Racine Créole</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={restaurant.phoneHref} className="action-icon lg:hidden" aria-label={`Appeler au ${restaurant.phone}`}>
            <Phone aria-hidden="true" />
          </a>
          <a href="#commander" className="button-primary">Commander</a>
          <details className="relative lg:hidden">
            <summary className="action-icon cursor-pointer list-none" aria-label="Ouvrir le menu">
              <Menu aria-hidden="true" />
            </summary>
            <nav className="absolute right-0 top-12 flex w-64 flex-col gap-1 rounded-2xl border border-border bg-background p-3 shadow-xl" aria-label="Navigation mobile">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium hover:bg-muted">
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
