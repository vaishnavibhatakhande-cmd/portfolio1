import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 6) * 0.06, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50/70 dark:bg-white/[0.02]">
      <div className="container-section">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          A toolbox built for building &amp; breaking things (on purpose)
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          From backend APIs to AI agents to test plans — technologies I reach for daily.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (gi % 3) * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -20px rgba(37,99,235,0.25)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent-teal" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="chip"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    whileHover={{ scale: 1.06, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
