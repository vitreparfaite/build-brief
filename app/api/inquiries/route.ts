import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(2).max(100), email: z.email().max(200), phone: z.string().trim().min(7).max(30),
  type: z.string().trim().min(2).max(80), date: z.string().max(20).optional(), guestCount: z.coerce.number().int().min(1).max(500).optional(),
  message: z.string().trim().min(10).max(3000), company: z.string().max(0).optional(),
})

export async function POST(request: Request) {
  let body: unknown
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Données invalides.' }, { status: 400 }) }
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Vérifiez les champs obligatoires.' }, { status: 400 })
  if (parsed.data.company) return NextResponse.json({ ok: true })
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.INQUIRY_TO_EMAIL
  if (!apiKey || !to) return NextResponse.json({ error: 'Le formulaire sera disponible dès que le service courriel sera configuré. Appelez-nous au 450-669-8699 entre-temps.' }, { status: 503 })
  const resend = new Resend(apiKey)
  const { name, email, phone, type, date, guestCount, message } = parsed.data
  const { error } = await resend.emails.send({ from: 'Racine Créole <onboarding@resend.dev>', to, replyTo: email, subject: `Nouvelle demande ${type} — ${name}`, text: `Nom: ${name}\nCourriel: ${email}\nTéléphone: ${phone}\nType: ${type}\nDate: ${date || 'Non précisée'}\nPersonnes: ${guestCount || 'Non précisé'}\n\n${message}` })
  if (error) return NextResponse.json({ error: 'L’envoi a échoué. Veuillez appeler le restaurant.' }, { status: 502 })
  return NextResponse.json({ ok: true })
}
