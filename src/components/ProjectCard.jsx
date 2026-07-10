import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${py * -8}deg) rotateY(${px * 8}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-card group relative overflow-hidden p-6 transition-transform duration-200 ease-out will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-2xl group-hover:opacity-35 transition-opacity`}
      />

      <div className="relative">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary dark:bg-accent-sky" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-accent-sky transition-colors"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-accent-sky transition-colors"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
