import { motion } from 'framer-motion'
import { achievements } from '../data/education.js'
import AnimatedCounter from './AnimatedCounter.jsx'

export default function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0071E3] via-[#0066CC] to-[#004FB8] relative overflow-hidden text-white">
      {/* Background ambient lighting & floating blobs */}
      <div className="absolute inset-0 opacity-25 bg-grid pointer-events-none" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="absolute block h-1.5 w-1.5 rounded-full bg-white/40 animate-float pointer-events-none"
          style={{
            top: `${(i * 23) % 90 + 5}%`,
            left: `${(i * 31) % 90 + 5}%`,
            animationDelay: `${(i % 4) * 0.7}s`,
          }}
        />
      ))}

      <div className="container-section relative grid grid-cols-2 gap-6 sm:grid-cols-4">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/5 hover:bg-white/15 transition-all"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.05 }}
          >
            <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              <AnimatedCounter value={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-2 text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wider font-mono">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
