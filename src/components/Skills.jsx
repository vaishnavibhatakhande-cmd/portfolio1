import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillGroups } from '../data/skills.js'

const CATEGORY_TABS = [
  'All Skills',
  'Automation Testing',
  'Manual Testing',
  'API & Database',
  'Programming & Web',
  'CI/CD & Tools',
]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 8) * 0.04, duration: 0.45, ease: 'easeOut' },
  }),
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All Skills')

  const filteredGroups = skillGroups.filter((group) => {
    if (activeTab === 'All Skills') return true
    if (activeTab === 'Automation Testing') return group.category.includes('Automation')
    if (activeTab === 'Manual Testing') return group.category.includes('Manual') || group.category.includes('Methodologies')
    if (activeTab === 'API & Database') return group.category.includes('API') || group.category.includes('Database')
    if (activeTab === 'Programming & Web') return group.category.includes('Programming') || group.category.includes('Frameworks')
    if (activeTab === 'CI/CD & Tools') return group.category.includes('CI/CD') || group.category.includes('Tools')
    return true
  })

  return (
    <section id="skills" className="section-padding bg-[#F5F5F7] dark:bg-white/[0.02]">
      <div className="container-section">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills &amp; Expertise
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

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ transformOrigin: 'left' }}
          className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0071E3] to-[#40A9FF] my-4"
        />

        <motion.p
          className="section-subtitle !mt-0"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          From Playwright automation frameworks and STLC test plans to Postman API testing and Python development.
        </motion.p>

        {/* Interactive Animated Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 select-none ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skillFilterPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0071E3] to-[#0066CC] shadow-md shadow-[#0071E3]/25"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Cards Grid with Smooth Layout Animation */}
        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 25 }}
                transition={{ duration: 0.4, delay: gi * 0.05 }}
                className="glass-card p-6 flex flex-col justify-between group hover:border-[#0071E3]/40 transition-colors"
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0071E3] to-[#40A9FF] group-hover:scale-125 transition-transform" />
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                      {group.items.length} skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="chip"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
