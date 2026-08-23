import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { menuNotice, menuSections } from '@/config/menu'

export const metadata: Metadata = { title: 'Menu | Racine Créole', description: 'Découvrez les entrées, plats créoles, créations fusion, accompagnements, desserts et boissons de Racine Créole.' }

export default function MenuPage() {
  return <main>
    <PageHero eyebrow="À table" title="Le menu" description="Des classiques haïtiens aux créations fusion, une cuisine généreuse qui fait voyager sans quitter Laval." image="/images/racine/ambiance-bg.jpg" />
    <nav className="sticky top-16 z-30 overflow-x-auto border-b border-border bg-background/95 px-4 backdrop-blur md:top-20" aria-label="Catégories du menu">
      <div className="mx-auto flex min-w-max max-w-7xl gap-2 py-3">{menuSections.map(section => <a key={section.id} href={`#${section.id}`} className="flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-semibold hover:bg-muted">{section.title}</a>)}</div>
    </nav>
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
      <div className="flex flex-col gap-16">
        {menuSections.map((section, index) => <section key={section.id} id={section.id} className="scroll-mt-36">
          <div className="mb-7 flex items-end justify-between gap-4 border-b border-border pb-4"><div><p className="eyebrow">{String(index + 1).padStart(2, '0')}</p><h2 className="font-serif text-4xl md:text-5xl">{section.title}</h2>{section.subtitle && <p className="mt-2 text-sm text-muted-foreground">{section.subtitle}</p>}</div></div>
          <div className="grid gap-x-12 md:grid-cols-2">{section.items.map(item => <article key={item.name} className="flex min-h-28 justify-between gap-5 border-b border-border/70 py-5"><div className="flex flex-col gap-1"><h3 className="font-serif text-2xl">{item.name}</h3>{item.description && <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>}{item.note && <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.note}</p>}</div>{item.price && <p className="font-mono text-sm font-bold">{item.price} $</p>}</article>)}</div>
        </section>)}
      </div>
      <p className="mt-14 rounded-lg bg-muted p-5 text-sm leading-6 text-muted-foreground">{menuNotice}</p>
      <div className="mt-10 flex flex-wrap gap-3"><Link href="/commander" className="button-primary button-large">Commander en ligne <ArrowRight aria-hidden="true" /></Link><Link href="/groupes" className="button-outline button-large">Traiteur & groupes</Link></div>
    </div>
  </main>
}
