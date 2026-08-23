'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

type Status = { type: 'idle' | 'loading' | 'success' | 'error'; message?: string }

export function InquiryForm() {
  const [status, setStatus] = useState<Status>({ type: 'idle' })
  async function submit(formData: FormData) {
    setStatus({ type: 'loading' })
    const payload = Object.fromEntries(formData.entries())
    try {
      const response = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Impossible d’envoyer la demande.')
      setStatus({ type: 'success', message: 'Merci. Votre demande a bien été envoyée; notre équipe vous répondra dès que possible.' })
    } catch (error) { setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Une erreur est survenue.' }) }
  }
  return <form action={submit} className="flex flex-col gap-5" aria-label="Demande traiteur et groupe">
    <div className="grid gap-5 md:grid-cols-2">
      <label className="form-field">Nom complet<input name="name" required minLength={2} autoComplete="name" /></label>
      <label className="form-field">Courriel<input name="email" type="email" required autoComplete="email" /></label>
      <label className="form-field">Téléphone<input name="phone" type="tel" required autoComplete="tel" /></label>
      <label className="form-field">Type de demande<select name="type" required defaultValue=""><option value="" disabled>Choisir</option><option>Repas de groupe</option><option>Traiteur</option><option>Célébration privée</option><option>Autre</option></select></label>
      <label className="form-field">Date souhaitée<input name="date" type="date" /></label>
      <label className="form-field">Nombre de personnes<input name="guestCount" type="number" min="1" max="500" inputMode="numeric" /></label>
    </div>
    <label className="form-field">Parlez-nous de votre occasion<textarea name="message" required minLength={10} rows={6} placeholder="Format, besoins alimentaires, budget ou toute information utile…" /></label>
    <input name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <button type="submit" disabled={status.type === 'loading'} className="button-primary button-large w-fit"><Send aria-hidden="true" />{status.type === 'loading' ? 'Envoi…' : 'Envoyer la demande'}</button>
    {status.message && <p role="status" className={status.type === 'success' ? 'text-sm font-semibold text-primary' : 'text-sm font-semibold text-destructive'}>{status.message}</p>}
  </form>
}
