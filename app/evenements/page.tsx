import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarDays, Camera } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { restaurant } from '@/config/restaurant'

export const metadata: Metadata = { title: 'Événements | Racine Créole', description: 'Suivez les annonces officielles de Racine Créole et planifiez votre prochain rassemblement.' }

export default function EventsPage() {
  return <main>
    <PageHero eyebrow="La vie chez Racine" title="Événements" description="Des soirées et rendez-vous peuvent être annoncés au fil de l’année. Les informations confirmées sont toujours publiées sur nos canaux officiels." image="/images/racine/atmosphere.jpg" />
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <div className="flex flex-col items-center rounded-xl border border-border bg-card px-6 py-16 text-center"><CalendarDays className="size-10 text-primary" aria-hidden="true" /><p className="mt-6 eyebrow">Programmation</p><h2 className="mt-2 text-balance font-serif text-4xl md:text-5xl">Aucun événement confirmé pour le moment.</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">Nous ne publions ici que les dates confirmées par Racine Créole. Suivez Instagram pour les annonces les plus récentes.</p><a href={restaurant.social.instagram} target="_blank" rel="noreferrer" className="button-primary mt-7"><Camera aria-hidden="true" />Suivre sur Instagram</a></div>
      <div className="mt-8 rounded-xl bg-muted p-7 md:flex md:items-center md:justify-between"><div><h2 className="font-serif text-3xl">Vous organisez votre propre occasion?</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Parlez-nous d&apos;un repas de groupe ou d&apos;une demande traiteur.</p></div><Link href="/groupes" className="button-outline mt-5 md:mt-0">Faire une demande</Link></div>
    </section>
  </main>
}
