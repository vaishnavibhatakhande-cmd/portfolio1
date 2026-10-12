import { motion } from 'framer-motion'
import { achievements } from '../data/education.js'
import AnimatedCounter from './AnimatedCounter.jsx'

export default function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0071E3] via-[#0066CC] to-[#004FB8] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-grid" />
      <div className="container-section relative grid grid-cols-2 gap-8 sm:grid-cols-4">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            className="text-center text-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="font-display text-4xl sm:text-5xl font-bold">
              <AnimatedCounter value={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-white/80">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
