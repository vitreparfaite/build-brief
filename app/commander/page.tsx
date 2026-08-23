import type { Metadata } from 'next'
import { ArrowUpRight, Phone, ShoppingBag } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { restaurant } from '@/config/restaurant'

export const metadata: Metadata = { title: 'Commander | Racine Créole', description: 'Commandez Racine Créole pour livraison ou ramassage via nos partenaires officiels.' }

export default function OrderPage() {
  return <main>
    <PageHero eyebrow="Racine chez vous" title="Commander" description="Choisissez votre plateforme préférée pour consulter les disponibilités, les prix et les délais en temps réel." image="/images/racine/dish-4.jpg" />
    <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-24">
      <div className="grid gap-5 md:grid-cols-2">{restaurant.ordering.map(provider => <a key={provider.name} href={provider.url} target="_blank" rel="noreferrer" className="group flex min-h-52 flex-col justify-between rounded-xl border border-border bg-card p-7 transition-transform hover:-translate-y-1"><ShoppingBag className="size-8 text-primary" aria-hidden="true" /><div className="flex items-end justify-between gap-4"><div><p className="text-sm text-muted-foreground">Commander avec</p><h2 className="font-serif text-4xl">{provider.name}</h2></div><ArrowUpRight className="size-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></div></a>)}</div>
      <div className="mt-8 rounded-xl bg-primary p-7 text-primary-foreground"><p className="eyebrow text-secondary">Besoin d&apos;aide?</p><h2 className="mt-2 font-serif text-3xl">Appelez directement le restaurant.</h2><a href={restaurant.phoneHref} className="mt-5 inline-flex min-h-11 items-center gap-3 font-semibold"><Phone className="size-5" aria-hidden="true" />{restaurant.phone}</a></div>
      <p className="mt-6 text-sm leading-6 text-muted-foreground">Les menus, prix, zones de livraison et heures affichés sur les plateformes sont gérés par les partenaires et peuvent varier.</p>
    </section>
  </main>
}
