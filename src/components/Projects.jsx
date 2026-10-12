import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiClock } from 'react-icons/fi'
import { projects, highlightCard } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import { useGithubRepos } from '../hooks/useGithubRepos.js'

const GITHUB_PROFILE = 'https://github.com/vaishnavibhatakhande-cmd'

const PROJECT_TABS = [
  'All Projects',
  'QA Automation',
  'Manual QA',
  'Full Stack & Web',
]

export default function Projects() {
  const { repos, loading, error } = useGithubRepos(4)
  const [activeTab, setActiveTab] = useState('All Projects')

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'All Projects') return true
    if (activeTab === 'QA Automation') return project.category.includes('Automation')
    if (activeTab === 'Manual QA') return project.category.includes('Manual') || project.category.includes('QA')
    if (activeTab === 'Full Stack & Web') return project.category.includes('Full Stack') || project.category.includes('Web') || project.category.includes('Backend')
    return true
  })

  return (
    <section id="projects" className="section-padding bg-[#F5F5F7] dark:bg-white/[0.02]">
      <div className="container-section">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects &amp; Work
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Things I've built, tested, and shipped
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
          Test automation frameworks, manual QA verifications, API testing, and full-stack applications.
        </motion.p>

        {/* Interactive Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {PROJECT_TABS.map((tab) => {
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
                    layoutId="projectTabPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0071E3] to-[#0066CC] shadow-md shadow-[#0071E3]/25"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid with AnimatePresence & layout */}
        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>

          <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0071E3] via-[#0066CC] to-[#004FB8] p-8 text-white flex flex-col justify-center shadow-xl shadow-[#0071E3]/20"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <p className="font-display text-5xl font-extrabold">{highlightCard.count}</p>
            <p className="mt-1 text-lg font-semibold">{highlightCard.label}</p>
            <p className="mt-2 text-xs text-blue-100 max-w-sm">
              Comprehensive test coverage, zero defect leakage mindset, and continuous integration delivery.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {highlightCard.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-medium border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* GitHub Integration */}
        <motion.div
          className="mt-16 glass-card p-6 sm:p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md">
                <FiGithub size={20} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Latest from GitHub
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Live-fetched via the GitHub REST API
                </p>
              </div>
            </div>
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !py-2 !px-4 text-xs hover:border-[#0071E3] transition-colors"
            >
              View GitHub Profile ↗
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {loading &&
              Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-24 animate-pulse rounded-xl bg-slate-100 dark:bg-white/5"
                />
              ))}

            {!loading && (error || repos.length === 0) && (
              <p className="sm:col-span-2 text-sm text-slate-500 dark:text-slate-400">
                Repositories will appear here automatically once the GitHub API is reachable.
              </p>
            )}

            {!loading &&
              !error &&
              repos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-slate-200 dark:border-white/10 p-4 hover:border-[#0071E3] dark:hover:border-[#0071E3] transition-colors bg-white/40 dark:bg-white/[0.02]"
                >
                  <p className="font-semibold text-sm text-slate-800 dark:text-white truncate">
                    {repo.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 min-h-[2.2em]">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1 text-[#0071E3]">
                      <FiStar size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiGitBranch size={12} /> {repo.forks_count}
                    </span>
                    {repo.language && (
                      <span className="text-[11px] text-slate-600 dark:text-slate-300">
                        {repo.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 ml-auto text-[10px]">
                      <FiClock size={11} />{' '}
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </motion.a>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
