import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-light dark:bg-surface-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent-teal"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.p
              className="font-display text-sm tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Vaishnavi P Bhatakhande
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
