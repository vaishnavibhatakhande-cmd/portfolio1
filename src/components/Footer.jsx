import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/vaishnavibhatakhande-cmd', label: 'GitHub' },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/vaishnavi-bhatakhande-050150335',
    label: 'LinkedIn',
  },
  { icon: FiMail, href: 'mailto:vaishnavibhatakhande.cmd@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-surface-dark">
      <div className="container-section py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display font-bold text-lg text-slate-900 dark:text-white">
            Vaishnavi P Bhatakhande
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
            Software Developer · QA Engineer · Python Developer · AI &amp; Data Enthusiast.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-white/15 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-accent-sky dark:hover:text-accent-sky transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-accent-sky transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Let's connect
          </p>
          <a
            href="https://www.linkedin.com/in/vaishnavi-bhatakhande-050150335"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary dark:text-accent-sky"
          >
            Connect on LinkedIn <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/10 py-6">
        <p className="container-section text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Vaishnavi P Bhatakhande. Built with React, Tailwind CSS
          &amp; Framer Motion.
        </p>
      </div>
    </footer>
  )
}
