import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-section">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Where I've put these skills to work
        </motion.h2>

        <div className="relative mt-14 max-w-2xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent-sky to-accent-teal" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="relative pl-14 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <motion.span
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30"
                whileInView={{ scale: [0.5, 1.15, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.1 }}
              >
                <FiBriefcase size={16} />
              </motion.span>

              <div className="glass-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="chip">{job.duration}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary dark:text-accent-sky">
                  {job.company}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
