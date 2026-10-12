import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiHome,
  FiUser,
  FiCheckSquare,
  FiBriefcase,
  FiFolder,
  FiAward,
  FiBookOpen,
  FiMail,
} from 'react-icons/fi'

const SECTIONS = [
  { id: 'home', label: 'Home', icon: FiHome },
  { id: 'about', label: 'About', icon: FiUser },
  { id: 'skills', label: 'Skills', icon: FiCheckSquare },
  { id: 'experience', label: 'Experience', icon: FiBriefcase },
  { id: 'projects', label: 'Projects', icon: FiFolder },
  { id: 'certifications', label: 'Certifications', icon: FiAward },
  { id: 'education', label: 'Education', icon: FiBookOpen },
  { id: 'contact', label: 'Contact', icon: FiMail },
]

export default function FloatingSectionNav() {
  const [activeSection, setActiveSection] = useState('home')
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Find the section that occupies the center of the viewport
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= windowHeight * 0.45) {
            setActiveSection(SECTIONS[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-2.5 p-2 rounded-full bg-white/70 dark:bg-[#1D1D1F]/70 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl shadow-black/5"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id
        const Icon = sec.icon

        return (
          <div
            key={sec.id}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHovered(sec.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Tooltip on Hover */}
            <AnimatePresence>
              {hovered === sec.id && !isActive && (
                <motion.span
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="pointer-events-none absolute right-10 whitespace-nowrap rounded-md bg-[#1D1D1F] dark:bg-white px-2.5 py-1 text-[11px] font-medium text-white dark:text-[#1D1D1F] shadow-md font-mono"
                >
                  {sec.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Nav Button / Dot */}
            <button
              onClick={() => scrollTo(sec.id)}
              aria-label={`Scroll to ${sec.label}`}
              className={`group relative flex items-center transition-all duration-300 ${
                isActive
                  ? 'h-8 px-3 rounded-full bg-gradient-to-r from-[#0071E3] to-[#0066CC] text-white shadow-md shadow-[#0071E3]/30'
                  : 'h-3 w-3 rounded-full bg-slate-300 dark:bg-white/20 hover:bg-[#0071E3] dark:hover:bg-[#0071E3]'
              }`}
            >
              {isActive ? (
                <motion.div
                  layoutId="activeSectionIndicator"
                  className="flex items-center gap-1.5"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                >
                  <Icon size={13} className="shrink-0" />
                  <span className="text-[11px] font-medium tracking-wide">
                    {sec.label}
                  </span>
                </motion.div>
              ) : (
                <span className="sr-only">{sec.label}</span>
              )}
            </button>
          </div>
        )
      })}
    </aside>
  )
}
