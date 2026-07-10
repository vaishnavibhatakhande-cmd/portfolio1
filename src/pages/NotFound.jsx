import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-light dark:bg-surface-dark px-6 text-center bg-grid">
      <motion.p
        className="font-display text-8xl font-bold bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.p>
      <motion.h1
        className="mt-4 font-display text-2xl font-semibold text-slate-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        This page wandered off the roadmap
      </motion.h1>
      <motion.p
        className="mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <Link to="/" className="btn-primary mt-8">
          <FiArrowLeft /> Back to home
        </Link>
      </motion.div>
    </div>
  )
}
