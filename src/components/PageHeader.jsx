import { motion } from 'framer-motion'

export default function PageHeader({ title, text }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-x relative text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-5xl font-semibold sm:text-7xl">
          <span className="gold-text">{title}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.7 }} className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          {text}
        </motion.p>
      </div>
    </section>
  )
}
