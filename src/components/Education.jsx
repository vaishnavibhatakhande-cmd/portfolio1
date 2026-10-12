import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/education.js'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-[#F5F5F7] dark:bg-white/[0.02]">
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

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ transformOrigin: 'left' }}
          className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0071E3] to-[#40A9FF] my-4"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.level}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px -20px rgba(0,113,227,0.3)' }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0071E3]/10 dark:bg-[#0071E3]/15 text-[#0071E3] dark:text-[#0071E3]">
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
              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="inline-block rounded-full bg-gradient-to-r from-[#0071E3] to-[#0066CC] px-3 py-1 text-xs font-semibold text-white">
                  {edu.score}
                </span>
                {edu.year && (
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Class of {edu.year}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
