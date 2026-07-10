import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
