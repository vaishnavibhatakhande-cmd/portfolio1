import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="relative flex h-9 w-16 items-center rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 px-1 transition-colors"
    >
      <motion.span
        className="flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-md text-primary dark:text-accent-sky"
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
      </motion.span>
    </button>
  )
}
