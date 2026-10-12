import { motion } from 'framer-motion'
import {
  FiCheckCircle,
  FiTerminal,
  FiCode,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiGitPullRequest,
  FiSliders,
} from 'react-icons/fi'

const TECH_ITEMS = [
  { name: 'Playwright', icon: FiTerminal, badge: 'E2E Testing' },
  { name: 'Python', icon: FiCode, badge: 'Automation' },
  { name: 'Selenium WebDriver', icon: FiCpu, badge: 'Browser QA' },
  { name: 'Postman', icon: FiSliders, badge: 'REST APIs' },
  { name: 'PyTest', icon: FiCheckCircle, badge: 'Test Runner' },
  { name: 'Jira & Bugzilla', icon: FiLayers, badge: 'Defect Tracking' },
  { name: 'Page Object Model', icon: FiLayers, badge: 'Architecture' },
  { name: 'GitHub Actions', icon: FiGitPullRequest, badge: 'CI/CD' },
  { name: 'Manual QA & STLC', icon: FiCheckCircle, badge: 'Validation' },
  { name: 'JavaScript & React', icon: FiCode, badge: 'Full-Stack' },
  { name: 'MySQL & CRUD', icon: FiDatabase, badge: 'Database QA' },
  { name: 'Data-Driven Testing', icon: FiSliders, badge: 'DDT Framework' },
]

export default function TechMarquee() {
  // Duplicate for seamless infinite loop
  const duplicatedItems = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <div className="relative w-full py-8 overflow-hidden bg-slate-50/50 dark:bg-white/[0.01] border-y border-slate-200/60 dark:border-white/5">
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white dark:from-[#1D1D1F] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white dark:from-[#1D1D1F] to-transparent z-10" />

      {/* Infinite scrolling track */}
      <motion.div
        className="flex items-center gap-4 w-max cursor-default"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 28,
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {duplicatedItems.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-white dark:bg-[#1D1D1F] border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-[#0071E3] dark:hover:border-[#0071E3] hover:shadow-md hover:shadow-[#0071E3]/15 transition-all select-none shrink-0"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0071E3]/10 dark:bg-[#0071E3]/20 text-[#0071E3] group-hover:scale-110 transition-transform">
                <Icon size={14} />
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-white whitespace-nowrap">
                {item.name}
              </span>
              <span className="rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                {item.badge}
              </span>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
