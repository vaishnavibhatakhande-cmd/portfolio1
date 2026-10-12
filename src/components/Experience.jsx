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

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ transformOrigin: 'left' }}
          className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0071E3] to-[#40A9FF] my-4"
        />

        <div className="relative mt-14 max-w-2xl">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#0071E3] via-[#0066CC] to-[#004FB8] shadow-[0_0_8px_#0071E3]"
          />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="relative pl-14 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
            >
              <motion.span
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0071E3] text-white shadow-lg shadow-[#0071E3]/40"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.1 }}
              >
                <span className="absolute -inset-1 rounded-full border border-[#0071E3] animate-ping opacity-30 [animation-duration:3s]" />
                <FiBriefcase size={16} />
              </motion.span>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      {job.website ? (
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-primary dark:text-accent-sky hover:underline"
                        >
                          {job.company} ↗
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-primary dark:text-accent-sky">
                          {job.company}
                        </span>
                      )}
                      {job.type && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary/10 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                          {job.type}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="chip">{job.duration}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071E3] shadow-[0_0_6px_#0071E3]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
