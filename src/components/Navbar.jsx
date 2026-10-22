import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const linkCls = ({ isActive }) =>
    `
    text-sm font-medium transition duration-300 
    hover:text-gold
    ${
      isActive
        ? 'text-gold'
        : 'text-white/70'
    }
    `

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${
          scrolled || open
            ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl'
            : ''
        }
      `}
    >

      <nav
        className="container-x flex h-24 items-center justify-between"
        aria-label="Main Navigation"
      >

        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="SaintSolutions Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">

          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={linkCls}
            >
              {link.label}
            </NavLink>
          ))}


          <Button 
            to="/audit"
            className="!px-5 !py-2.5"
          >
            Free Website Audit
          </Button>

        </div>



        {/* Mobile Menu Button */}
        <button
          className="
            flex h-11 w-11 flex-col 
            items-center justify-center 
            gap-1.5 md:hidden
          "
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >

          <span
            className={`
              h-0.5 w-6 bg-gold transition
              ${
                open
                  ? 'translate-y-2 rotate-45'
                  : ''
              }
            `}
          />

          <span
            className={`
              h-0.5 w-6 bg-gold transition
              ${
                open
                  ? 'opacity-0'
                  : ''
              }
            `}
          />


          <span
            className={`
              h-0.5 w-6 bg-gold transition
              ${
                open
                  ? '-translate-y-2 -rotate-45'
                  : ''
              }
            `}
          />

        </button>

      </nav>



      {/* Mobile Navigation */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}

            animate={{
              height: 'auto',
              opacity: 1,
            }}

            exit={{
              height: 0,
              opacity: 0,
            }}

            className="overflow-hidden md:hidden"
          >

            <div
              className="
                container-x flex flex-col 
                gap-6 pb-8 pt-4
              "
            >

              {links.map((link) => (

                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `
                    font-display text-3xl
                    transition
                    ${
                      isActive
                        ? 'text-gold'
                        : 'text-white'
                    }
                    `
                  }
                >
                  {link.label}
                </NavLink>

              ))}


              <Button
                to="/audit"
                className="mt-3"
              >
                Free Website Audit
              </Button>


            </div>

          </motion.div>

        )}

      </AnimatePresence>


    </header>
  )
}