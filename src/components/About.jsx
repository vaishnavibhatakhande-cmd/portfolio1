import { motion } from 'framer-motion'
import {
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'
import AnimatedCounter from './AnimatedCounter.jsx'

const HIGHLIGHTS = [
  { icon: FiCheckCircle, label: 'Automation Testing', desc: 'Playwright, Selenium, PyTest, POM & DDT' },
  { icon: FiCheckCircle, label: 'Manual & Functional QA', desc: 'STLC, Regression, Smoke, Sanity, UAT' },
  { icon: FiDatabase, label: 'API & Database Testing', desc: 'Postman, REST APIs, JSON & SQL CRUD' },
  { icon: FiUsers, label: 'Agile & Defect Tracking', desc: 'Jira, Bugzilla, Scrum & RCA reporting' },
  { icon: FiCode, label: 'Python & Web Development', desc: 'Python, Flask, React, Vite, MySQL' },
  { icon: FiTarget, label: 'Root Cause Analysis', desc: 'Structured defect isolation & test evidence' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-section grid gap-14 lg:grid-cols-[0.85fr,1.15fr] items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            className="glass-card p-8 group relative overflow-hidden"
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          >
            {/* Ambient hover light */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#0071E3]/20 via-[#40A9FF]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

            {/* Glowing avatar with dual rings */}
            <div className="relative mx-auto h-32 w-32 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="#0071E3" strokeWidth="1.5" strokeDasharray="6 8" strokeOpacity="0.6" />
              </svg>
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#0071E3] to-[#0066CC] p-[3px] shadow-lg shadow-[#0071E3]/30">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-surface-dark group-hover:scale-105 transition-transform">
                  <span className="font-display text-3xl font-extrabold bg-gradient-to-br from-[#0071E3] to-[#004FB8] bg-clip-text text-transparent">
                    VB
                  </span>
                </div>
              </div>
            </div>

            <h3 className="mt-5 text-center font-display text-xl font-bold text-slate-900 dark:text-white">
              Vaishnavi P Bhatakhande
            </h3>
            <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-1">
              BCA Graduate · CGPA 7.25 · Bengaluru
            </p>

            {/* Animated Counters Matrix */}
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-200 dark:border-white/10 pt-6">
              <div className="text-center">
                <p className="font-display text-2xl font-extrabold text-[#0071E3]">
                  <AnimatedCounter value={7} suffix="+" />
                </p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Projects</p>
              </div>
              <div className="text-center border-x border-slate-200 dark:border-white/10">
                <p className="font-display text-2xl font-extrabold text-[#0071E3]">
                  <AnimatedCounter value={2} />
                </p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Roles</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-extrabold text-[#0071E3]">
                  <AnimatedCounter value={100} suffix="%" />
                </p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Focus</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-accent-teal/20 -z-10"
            animate={{ rotate: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <div>
          <motion.p
            className="eyebrow"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            About Me
          </motion.p>
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Detail-oriented QA Engineer committed to bulletproof software quality
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ transformOrigin: 'left' }}
            className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0071E3] to-[#40A9FF] my-4"
          />

          <motion.p
            className="section-subtitle !mt-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Detail-oriented Software Tester / QA Engineer skilled in Manual and Automation
            Testing, STLC, SDLC, Functional, Regression, Smoke, Sanity, Integration, System,
            UAT, Exploratory, Compatibility, Usability, and Accessibility Testing. Experienced
            in test case design, test execution, defect reporting, API Testing, Jira, and Playwright,
            with a strong focus on software quality and defect identification.
          </motion.p>


          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
                whileHover={{ y: -4 }}
                className="glass-card p-4 flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0071E3]/10 dark:bg-[#0071E3]/15 text-[#0071E3] dark:text-[#0071E3]">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-slate-800 dark:text-white">
                    {label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
