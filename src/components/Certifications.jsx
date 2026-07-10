import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-section">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Continuous learning, formalized
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-teal text-white">
                <FiAward size={20} />
              </span>
              <p className="mt-4 font-display text-sm font-semibold text-slate-900 dark:text-white">
                {cert.title}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
