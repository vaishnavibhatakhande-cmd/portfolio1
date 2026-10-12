import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle } from 'react-icons/fi'
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
          Certifications &amp; Credentials
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

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ transformOrigin: 'left' }}
          className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0071E3] to-[#40A9FF] my-4"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="glass-card group relative overflow-hidden p-6 text-center border border-slate-200/80 dark:border-white/10 hover:border-[#0071E3]/50 transition-all flex flex-col items-center justify-between"
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Holographic light sweep on hover */}
              <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

              {/* Award Icon with Floating Animation */}
              <div className="relative mb-3 flex items-center justify-center">
                <div className="absolute -inset-2 rounded-full bg-[#0071E3]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0071E3] via-[#0066CC] to-[#004FB8] text-white shadow-lg shadow-[#0071E3]/30"
                >
                  <FiAward size={24} />
                </motion.span>
              </div>

              <div>
                <p className="font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0071E3] transition-colors">
                  {cert.title}
                </p>
                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <FiCheckCircle size={13} />
                <span>Verified Certification</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
