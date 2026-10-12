import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })

    const px = x / rect.width - 0.5
    const py = y / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${py * -8}deg) rotateY(${px * 8}deg) translateY(-5px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (el) {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
      setMousePos({ x: -1000, y: -1000 })
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="glass-card group relative overflow-hidden p-6 transition-all duration-200 ease-out will-change-transform border border-slate-200/80 dark:border-white/10 hover:border-[#0071E3]/50 dark:hover:border-[#0071E3]/60 shadow-lg shadow-black/[0.02] hover:shadow-xl hover:shadow-[#0071E3]/10"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Dynamic Specular Mouse Light Reflection */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 113, 227, 0.12), transparent 45%)`,
        }}
      />

      {/* Ambient background blob */}
      <div
        className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-15 blur-2xl group-hover:opacity-30 transition-opacity`}
      />

      <div className="relative flex flex-col justify-between h-full">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0071E3] transition-colors">
              {project.title}
            </h3>
            {project.category && (
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#0071E3]/10 dark:bg-[#0071E3]/15 text-[#0071E3] shrink-0 border border-[#0071E3]/20">
                {project.category}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="chip group-hover:border-[#0071E3]/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Key test features */}
          <ul className="mt-5 space-y-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400"
              >
                <FiCheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Links */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-4">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0071E3] dark:hover:text-[#0071E3] transition-colors"
            >
              <FiGithub size={14} /> GitHub Repo
            </motion.a>
          )}
          {project.demo && project.demo !== '#' && (
            <motion.a
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071E3] hover:underline transition-colors"
            >
              <FiExternalLink size={14} /> Live Showcase
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
