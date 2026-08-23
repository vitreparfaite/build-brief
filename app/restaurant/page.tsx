import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, MapPin, UtensilsCrossed, Users } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { fullAddress, restaurant } from '@/config/restaurant'

export const metadata: Metadata = { title: 'Le restaurant | Racine Créole', description: 'Découvrez l’histoire, l’ambiance et l’accueil de Racine Créole à Laval.' }

export default function RestaurantPage() {
  return <main>
    <PageHero eyebrow="Notre maison" title="Des racines, une table." description="Racine Créole célèbre une cuisine inspirée d’Haïti, façonnée à Laval et portée par le plaisir de recevoir." />
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div className="relative min-h-[28rem] overflow-hidden rounded-xl"><Image src="/images/racine/hero-food.jpg" alt="Décor végétal et enseigne Racine Créole dans la salle" fill className="object-cover object-[50%_38%]" sizes="(max-width: 768px) 100vw, 50vw" /></div>
      <div className="flex flex-col justify-center gap-6"><p className="eyebrow">L&apos;histoire</p><h2 className="text-balance font-serif text-4xl md:text-6xl">La mémoire des recettes, l&apos;élan d&apos;aujourd&apos;hui.</h2><p className="leading-7 text-muted-foreground">Notre cuisine part de saveurs créoles familières et les fait dialoguer avec le Québec d&apos;aujourd&apos;hui. Chaque assiette cherche l&apos;équilibre entre générosité, caractère et précision.</p><p className="leading-7 text-muted-foreground">Le restaurant est un lieu de rassemblement accessible : on y vient pour un repas, pour célébrer, ou simplement pour retrouver un goût qui parle de chez soi.</p><Link href="/menu" className="button-primary w-fit">Voir le menu</Link></div>
    </section>
    <section className="bg-muted"><div className="mx-auto grid max-w-7xl gap-5 px-5 py-14 md:grid-cols-3 md:px-8 md:py-20">{[
      [UtensilsCrossed, 'Cuisine vivante', 'Des classiques haïtiens et des créations fusion sans perdre le fil des racines.'],
      [Heart, 'Accueil chaleureux', 'Un service humain et une salle pensée pour partager un vrai moment.'],
      [Users, 'Fait pour se retrouver', 'Repas en famille, sorties entre amis et occasions à célébrer.'],
    ].map(([Icon, title, text]) => { const I = Icon as typeof Heart; return <article key={String(title)} className="rounded-xl bg-card p-7"><I className="size-7 text-primary" aria-hidden="true" /><h3 className="mt-8 font-serif text-3xl">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(text)}</p></article>})}</div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="rounded-xl bg-primary p-8 text-primary-foreground md:flex md:items-end md:justify-between md:p-12"><div><MapPin className="size-7 text-secondary" aria-hidden="true" /><h2 className="mt-6 font-serif text-4xl md:text-5xl">Venez nous voir à Laval.</h2><p className="mt-3 opacity-80">{fullAddress} · {restaurant.parking}</p></div><a href={restaurant.mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-secondary px-5 font-bold text-secondary-foreground md:mt-0">Obtenir l&apos;itinéraire</a></div></section>
  </main>
}
