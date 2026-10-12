import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import TypingText from './TypingText.jsx'
import MagneticButton from './MagneticButton.jsx'
import HeroTerminalCard from './HeroTerminalCard.jsx'

const ROLES = [
  'Software Tester / QA Engineer',
  'Automation Test Engineer (Playwright)',
  'Manual & API Testing Specialist',
  'Python & Full-Stack Developer',
]

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/vaishnavibhatakhande-cmd', label: 'GitHub' },
  {
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/vaishnavi-bhatakhande-050150335',
    label: 'LinkedIn',
  },
  { icon: FiMail, href: 'mailto:vaishnavibhatakhande@gmail.com', label: 'Email' },
]


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 bg-grid"
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#0071E3]/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-[#0066CC]/15 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#004FB8]/15 blur-3xl animate-blob [animation-delay:6s]" />

        {/* Floating particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1.5 w-1.5 rounded-full bg-[#0071E3]/30 dark:bg-[#0071E3]/40 animate-float"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 6) * 0.8}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="container-section relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr,0.85fr]">
        <div>
          <motion.p
            className="eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-accent-sky" />
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900 dark:text-white"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#0071E3] via-[#0066CC] to-[#004FB8] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Vaishnavi P Bhatakhande
            </span>
          </motion.h1>

          <motion.div
            className="mt-4 h-9 text-xl sm:text-2xl font-display font-semibold text-[#0071E3] dark:text-[#0071E3]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <TypingText words={ROLES} />
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-400"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Detail-oriented Software Tester / QA Engineer skilled in Manual &amp; Automation
            Testing, STLC/SDLC, Playwright, Selenium, API Testing, and Full-Stack Development.
            Passionate about high software quality and robust defect identification.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <MagneticButton
              as="a"
              href="/resume.pdf"
              download
              className="btn-primary"
            >
              <FiDownload /> Download Resume
            </MagneticButton>
            <MagneticButton
              as="button"
              onClick={() => scrollTo('#projects')}
              className="btn-secondary"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              as="button"
              onClick={() => scrollTo('#contact')}
              className="btn-secondary"
            >
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-9 flex items-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 dark:border-white/15 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-accent-sky dark:hover:text-accent-sky hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto flex items-center justify-center lg:justify-end w-full"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <HeroTerminalCard />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <FiArrowDown />
      </motion.button>
    </section>
  )
}
