import Image from 'next/image'

export function PageHero({ eyebrow, title, description, image = '/images/racine/hero-food.jpg' }: { eyebrow: string; title: string; description: string; image?: string }) {
  return (
    <section className="relative isolate min-h-[23rem] overflow-hidden bg-primary text-primary-foreground">
      <Image src={image} alt="" fill priority className="object-cover opacity-45" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      <div className="relative mx-auto flex min-h-[23rem] max-w-7xl flex-col justify-end gap-4 px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl leading-none md:text-7xl">{title}</h1>
        <p className="max-w-2xl text-pretty text-base leading-7 opacity-90 md:text-lg">{description}</p>
      </div>
    </section>
  )
}
