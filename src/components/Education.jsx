import { motion } from 'framer-motion'
import { FiBookOpen, FiAward } from 'react-icons/fi'
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
          Education &amp; Academics
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
              className="glass-card group p-6 relative overflow-hidden flex flex-col justify-between border border-slate-200/80 dark:border-white/10 hover:border-[#0071E3]/50 transition-all"
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background gradient flare on hover */}
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#0071E3]/10 blur-2xl group-hover:bg-[#0071E3]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0071E3]/10 dark:bg-[#0071E3]/15 text-[#0071E3] group-hover:scale-110 transition-transform">
                    <FiBookOpen size={20} />
                  </span>
                  {edu.year && (
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 font-medium">
                      Class of {edu.year}
                    </span>
                  )}
                </div>

                <p className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0071E3] transition-colors">
                  {edu.level}
                </p>
                {edu.institution && (
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {edu.institution}
                  </p>
                )}
                {edu.board && (
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                    {edu.board}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Result
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0071E3] to-[#0066CC] px-3.5 py-1 text-xs font-bold text-white shadow-md shadow-[#0071E3]/25 group-hover:scale-105 transition-transform">
                  <FiAward size={12} />
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
