import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Audit from './pages/Audit'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
