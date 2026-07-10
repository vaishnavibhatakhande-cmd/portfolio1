import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/education.js'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-50/70 dark:bg-white/[0.02]">
      <div className="container-section">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Academic foundation
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.level}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 dark:bg-accent-sky/10 text-primary dark:text-accent-sky">
                <FiBookOpen size={18} />
              </span>
              <p className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                {edu.level}
              </p>
              {edu.institution && (
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{edu.institution}</p>
              )}
              {edu.board && (
                <p className="text-xs text-slate-500 dark:text-slate-500">{edu.board}</p>
              )}
              <p className="mt-3 inline-block rounded-full bg-gradient-to-r from-primary to-accent-teal px-3 py-1 text-xs font-semibold text-white">
                {edu.score}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
