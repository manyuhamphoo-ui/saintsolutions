import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-9" />
            <span className="font-display text-2xl font-semibold">Saint<span className="gold-text">Solutions</span></span>
          </div>
          <p className="mt-4 max-w-sm text-white/60">Digital Solutions That Help Businesses Grow.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Explore</h3>
          <ul className="mt-4 space-y-3 text-white/60">
            {[['/', 'Home'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/audit', 'Free audit']].map(([to, l]) => (
              <li key={to}><Link to={to} className="transition hover:text-gold">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-white/60">
            <li><a href="mailto:hello@saintsolutions.co.za" className="transition hover:text-gold">hello@saintsolutions.co.za</a></li>
            <li>Pretoria, South Africa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">© {new Date().getFullYear()} SaintSolutions. All rights reserved.</div>
    </footer>
  )
}
