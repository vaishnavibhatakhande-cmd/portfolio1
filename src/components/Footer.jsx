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
    href: 'https://linkedin.com/in/vaishnavi-bhatakhande-050150335',
    label: 'LinkedIn',
  },
  { icon: FiMail, href: 'mailto:vaishnavibhatakhande@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#1D1D1F]/10 dark:border-white/10 bg-[#F5F5F7] dark:bg-[#1D1D1F]">
      <div className="container-section py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display font-bold text-lg text-[#1D1D1F] dark:text-white">
            Vaishnavi P Bhatakhande
          </p>
          <p className="mt-2 text-sm text-[#6E6E73] dark:text-[#6E6E73] max-w-xs">
            Software Tester / QA Engineer · Playwright Automation · Manual Testing · Python Full Stack
          </p>
          <div className="mt-4 flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1D1D1F]/20 dark:border-white/15 text-[#6E6E73] dark:text-[#6E6E73] hover:border-[#0071E3] hover:text-[#0071E3] dark:hover:border-[#0071E3] dark:hover:text-[#0071E3] transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] dark:text-[#6E6E73]">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-[#6E6E73] dark:text-[#6E6E73] hover:text-[#0071E3] dark:hover:text-[#0071E3] transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] dark:text-[#6E6E73]">
            Let's connect
          </p>
          <a
            href="https://linkedin.com/in/vaishnavi-bhatakhande-050150335"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0071E3] dark:text-[#0071E3] hover:text-[#0066CC] dark:hover:text-[#0066CC] transition-colors"
          >
            Connect on LinkedIn <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-[#1D1D1F]/10 dark:border-white/10 py-6">
        <p className="container-section text-center text-xs text-[#6E6E73] dark:text-[#6E6E73]">
          © {new Date().getFullYear()} Vaishnavi P Bhatakhande. Built with React, Tailwind CSS
          &amp; Framer Motion.
        </p>
      </div>
    </footer>
  )
}
