import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiClock } from 'react-icons/fi'
import { projects, highlightCard } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import { useGithubRepos } from '../hooks/useGithubRepos.js'

const GITHUB_PROFILE = 'https://github.com/vaishnavibhatakhande-cmd'

export default function Projects() {
  const { repos, loading, error } = useGithubRepos(4)

  return (
    <section id="projects" className="section-padding bg-slate-50/70 dark:bg-white/[0.02]">
      <div className="container-section">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
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
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          A mix of AI platforms, full-stack applications, and infrastructure tooling.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: projects.length * 0.08 }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent-teal p-8 text-white flex flex-col justify-center"
          >
            <p className="font-display text-5xl font-bold">{highlightCard.count}</p>
            <p className="mt-1 text-lg font-medium">{highlightCard.label}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {highlightCard.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GitHub Integration */}
        <motion.div
          className="mt-16 glass-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                <FiGithub size={20} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
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
              className="btn-secondary !py-2 !px-4 text-xs"
            >
              View Profile
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
                Repositories will appear here automatically once the GitHub API is reachable
                from your deployed domain — no changes needed.
              </p>
            )}

            {!loading &&
              !error &&
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 dark:border-white/10 p-4 hover:border-primary dark:hover:border-accent-sky transition-colors"
                >
                  <p className="font-medium text-sm text-slate-800 dark:text-white truncate">
                    {repo.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 min-h-[2.2em]">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <FiStar size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiGitBranch size={12} /> {repo.forks_count}
                    </span>
                    {repo.language && <span>{repo.language}</span>}
                    <span className="inline-flex items-center gap-1 ml-auto">
                      <FiClock size={12} />{' '}
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </a>
              ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
            <img
              src={`https://ghchart.rshah.org/2563EB/${GITHUB_PROFILE.split('/').pop()}`}
              alt="GitHub contributions graph"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
