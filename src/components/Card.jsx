import { motion } from 'framer-motion'

export default function Card({ children, featured = false, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group relative h-full overflow-hidden rounded-2xl border p-8 transition-colors duration-300 hover:border-gold/60 ${
        featured ? 'border-gold/60 bg-gradient-to-b from-gold/10 to-panel' : 'border-white/10 bg-panel'
      } ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
