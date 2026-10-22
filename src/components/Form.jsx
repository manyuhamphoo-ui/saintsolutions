import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'

/**
 * Reusable form. fields: [{ name, label, type: 'text'|'email'|'url'|'select'|'textarea', options?, required? }]
 * Replace the console.log in handleSubmit with your API / Formspree / EmailJS call.
 */
export default function Form({ fields, submitLabel, successTitle, successText }) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = Object.fromEntries(new FormData(e.target))
    console.log('Form submission:', data) // TODO: send to your backend or form service
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border border-gold/50 bg-panel p-10 text-center" role="status">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold-grad text-2xl text-ink">✓</div>
          <h3 className="font-display text-3xl font-semibold">{successTitle}</h3>
          <p className="mt-3 text-white/60">{successText}</p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity: 0 }} className="space-y-5 rounded-2xl border border-white/10 bg-panel/60 p-6 sm:p-10">
          {fields.map((f) => (
            <div key={f.name}>
              <label htmlFor={f.name} className="mb-2 block text-sm font-medium text-white/80">{f.label}</label>
              {f.type === 'select' ? (
                <select id={f.name} name={f.name} required={f.required !== false} defaultValue="" className="input">
                  <option value="" disabled>Select an option</option>
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : f.type === 'textarea' ? (
                <textarea id={f.name} name={f.name} rows={5} required={f.required !== false} placeholder={f.placeholder} className="input resize-none" />
              ) : (
                <input id={f.name} name={f.name} type={f.type} required={f.required !== false} placeholder={f.placeholder} className="input" />
              )}
            </div>
          ))}
          <Button type="submit" disabled={loading} className="w-full disabled:opacity-60">{loading ? 'Sending...' : submitLabel}</Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
