import { motion } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiCheckCircle,
  FiCpu,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'

const HIGHLIGHTS = [
  { icon: FiCode, label: 'Backend Development', desc: 'Flask, REST APIs, clean architecture' },
  { icon: FiCheckCircle, label: 'Manual Testing', desc: 'White & black box test design' },
  { icon: FiCpu, label: 'AI Development', desc: 'LangChain, LangGraph, agentic systems' },
  { icon: FiDatabase, label: 'Database Design', desc: 'MySQL, MongoDB, PostgreSQL, SQLite' },
  { icon: FiTarget, label: 'Problem Solving', desc: 'Turning ambiguity into shipped features' },
  { icon: FiUsers, label: 'Agile Methodologies', desc: 'Scrum ceremonies, sprint delivery' },
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
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            className="glass-card p-8"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-primary to-accent-teal p-[3px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-surface-dark">
                <span className="font-display text-3xl font-bold text-primary dark:text-accent-sky">
                  VB
                </span>
              </div>
            </div>
            <h3 className="mt-5 text-center font-display text-xl font-semibold text-slate-900 dark:text-white">
              Vaishnavi P Bhatakhande
            </h3>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              BCA Graduate · CGPA 7.25
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 dark:border-white/10 pt-6">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-primary dark:text-accent-sky">
                  10+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Projects</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-primary dark:text-accent-sky">
                  1
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Internship</p>
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
            Curious engineer, careful tester, and a builder at heart
          </motion.h2>
          <motion.p
            className="section-subtitle"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            I'm a BCA graduate (CGPA 7.25) who enjoys the full arc of building software —
            from designing a database schema to shipping a REST API to making sure it
            actually works under pressure. During my time as a Software Development Intern
            at Infokshetra, I worked across backend performance, SQL optimization, and code
            reviews. Outside of internships, I've built 10+ projects spanning AI systems,
            full-stack web apps, and infrastructure tooling — always looking for the
            intersection of clean engineering and real-world impact.
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
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 dark:bg-accent-sky/10 text-primary dark:text-accent-sky">
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
