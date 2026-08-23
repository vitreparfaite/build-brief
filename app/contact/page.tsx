import type { Metadata } from 'next'
import { Camera, Car, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { fullAddress, restaurant } from '@/config/restaurant'

export const metadata: Metadata = { title: 'Contact | Racine Créole', description: 'Adresse, téléphone, itinéraire et informations pratiques pour visiter Racine Créole à Laval.' }

export default function ContactPage() {
  return <main>
    <PageHero eyebrow="Nous trouver" title="Venez manger avec nous." description="À Laval, sur le boulevard des Laurentides. Pour les heures les plus récentes, appelez le restaurant avant de vous déplacer." image="/images/racine/hero-food.jpg" />
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div className="grid gap-4 sm:grid-cols-2">{[
        [MapPin, 'Adresse', fullAddress, restaurant.mapUrl], [Phone, 'Téléphone', restaurant.phone, restaurant.phoneHref],
        [Mail, 'Courriel', restaurant.email, `mailto:${restaurant.email}`], [Camera, 'Instagram', '@racinecreole', restaurant.social.instagram],
      ].map(([Icon, label, value, href]) => { const I = Icon as typeof MapPin; return <a key={String(label)} href={String(href)} target={String(href).startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex min-h-48 flex-col justify-between rounded-xl border border-border bg-card p-6"><I className="size-7 text-primary" aria-hidden="true" /><div><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{String(label)}</p><p className="mt-2 font-serif text-2xl">{String(value)}</p></div></a>})}</div>
      <div className="flex flex-col gap-5 rounded-xl bg-primary p-7 text-primary-foreground md:p-9"><h2 className="font-serif text-4xl">Informations pratiques</h2><div className="flex gap-4 border-t border-primary-foreground/20 pt-5"><Car className="size-6 text-secondary" aria-hidden="true" /><div><p className="font-semibold">Stationnement</p><p className="text-sm opacity-75">{restaurant.parking}</p></div></div><div className="flex gap-4 border-t border-primary-foreground/20 pt-5"><Clock3 className="size-6 text-secondary" aria-hidden="true" /><div><p className="font-semibold">Heures d&apos;ouverture</p><p className="text-sm leading-6 opacity-75">{restaurant.hours.note} Appelez au {restaurant.phone} avant votre visite.</p></div></div><div className="flex gap-4 border-t border-primary-foreground/20 pt-5"><MapPin className="size-6 text-secondary" aria-hidden="true" /><div><p className="font-semibold">Service</p><p className="text-sm opacity-75">{restaurant.reservationPolicy}. Pour les groupes, envoyez une demande à l&apos;avance.</p></div></div><a href={restaurant.mapUrl} target="_blank" rel="noreferrer" className="mt-auto flex min-h-12 items-center justify-center rounded-lg bg-secondary px-5 font-bold text-secondary-foreground">Obtenir l&apos;itinéraire</a></div>
    </section>
  </main>
}
