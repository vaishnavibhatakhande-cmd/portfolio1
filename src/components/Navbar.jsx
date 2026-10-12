import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle.jsx'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sectionIds = ['contact', 'education', 'certifications', 'projects', 'experience', 'skills', 'about']
      const scrollPos = window.scrollY + 160
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
          break
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#1D1D1F]/90 backdrop-blur-xl border-b border-[#1D1D1F]/10 dark:border-white/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-section flex items-center justify-between h-16">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleClick('#home')
          }}
          className="font-display font-bold text-lg text-[#1D1D1F] dark:text-white"
        >
          VP<span className="text-[#0071E3] dark:text-[#0071E3]">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href} className="relative">
                <button
                  onClick={() => handleClick(link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#0071E3] font-semibold'
                      : 'text-[#1D1D1F] dark:text-[#F5F5F7] hover:text-[#0071E3] dark:hover:text-[#0071E3]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[#0071E3]/10 dark:bg-[#0071E3]/20 -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => handleClick('#contact')} className="btn-primary !py-2.5 !px-5">
            Let's Talk
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="text-slate-700 dark:text-slate-200 text-2xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-[#1D1D1F] border-t border-[#1D1D1F]/10 dark:border-white/10"
          >
            <ul className="container-section py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="w-full text-left py-2 text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] hover:text-[#0071E3] dark:hover:text-[#0071E3] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <button onClick={() => handleClick('#contact')} className="btn-primary w-full mt-2">
                Let's Talk
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
