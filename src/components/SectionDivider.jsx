import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="relative py-4 overflow-hidden flex items-center justify-center">
      {/* Animated glowing laser beam */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#0071E3]/40 to-transparent relative"
      >
        {/* Shimmer light beam moving across */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-[#40A9FF] to-transparent opacity-75 blur-[1px]"
        />
      </motion.div>

      {/* Center glowing focal point */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute flex items-center justify-center"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071E3] opacity-50" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0071E3] shadow-[0_0_10px_#0071E3]" />
        </span>
      </motion.div>
    </div>
  )
}
