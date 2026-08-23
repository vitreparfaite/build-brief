import type { Metadata } from 'next'
import { Check, Phone } from 'lucide-react'
import { InquiryForm } from '@/components/inquiry-form'
import { PageHero } from '@/components/page-hero'
import { restaurant } from '@/config/restaurant'

export const metadata: Metadata = { title: 'Traiteur & groupes | Racine Créole', description: 'Soumettez une demande pour un repas de groupe, une célébration ou un service traiteur Racine Créole.' }

export default function GroupsPage() {
  return <main>
    <PageHero eyebrow="À votre table" title="Traiteur & groupes" description="Un repas de famille, une fête ou un événement d’équipe? Racontez-nous votre occasion et nous vous répondrons avec une proposition adaptée." image="/images/racine/dish-1.jpg" />
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-24">
      <div className="flex flex-col gap-7"><div><p className="eyebrow">Votre occasion</p><h2 className="mt-3 text-balance font-serif text-4xl md:text-5xl">Des saveurs créoles à partager.</h2></div><p className="leading-7 text-muted-foreground">Chaque demande est évaluée selon la date, le nombre de personnes et les besoins du groupe. L&apos;envoi du formulaire ne constitue pas une réservation confirmée.</p><ul className="flex flex-col gap-3">{['Repas de groupe au restaurant','Demandes traiteur','Célébrations et occasions privées','Besoins alimentaires à discuter'].map(item => <li key={item} className="flex items-center gap-3"><span className="flex size-7 items-center justify-center rounded-full bg-secondary"><Check className="size-4" aria-hidden="true" /></span>{item}</li>)}</ul><div className="rounded-xl bg-muted p-6"><p className="text-sm text-muted-foreground">Vous préférez parler à quelqu&apos;un?</p><a href={restaurant.phoneHref} className="mt-2 flex min-h-11 items-center gap-3 font-serif text-2xl"><Phone className="size-5" aria-hidden="true" />{restaurant.phone}</a></div></div>
      <div className="rounded-xl border border-border bg-card p-6 md:p-9"><h2 className="font-serif text-3xl">Faire une demande</h2><p className="mt-2 mb-7 text-sm leading-6 text-muted-foreground">Remplissez les détails ci-dessous. Les champs marqués sont requis.</p><InquiryForm /></div>
    </section>
  </main>
}
