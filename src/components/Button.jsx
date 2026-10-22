import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-gold-grad text-ink shadow-[0_8px_30px_-8px_rgba(212,175,55,0.6)] hover:shadow-[0_12px_40px_-6px_rgba(212,175,55,0.8)] hover:-translate-y-0.5',
  ghost: 'border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold',
}

export default function Button({ to, variant = 'primary', children, className = '', ...rest }) {
  const cls = `inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 ${styles[variant]} ${className}`
  return to ? (
    <Link to={to} className={cls} {...rest}>{children}</Link>
  ) : (
    <button className={cls} {...rest}>{children}</button>
  )
}
