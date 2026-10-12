import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const LETTERS = ['V', 'A', 'I', 'S', 'H', 'N', 'A', 'V', 'I']
const COLUMNS = [0, 1, 2, 3, 4]

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [statusText, setStatusText] = useState('INITIALIZING ENVIRONMENT')
  const completedRef = useRef(false)

  useEffect(() => {
    // Lock scroll during preloader
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Smooth progressive cadence
        const step = Math.floor(Math.random() * 6) + 3
        const next = Math.min(prev + step, 100)

        if (next < 25) {
          setStatusText('SYSTEM BOOT · INITIALIZING')
        } else if (next < 55) {
          setStatusText('LOADING AUTOMATION SUITES & PROJECTS')
        } else if (next < 85) {
          setStatusText('CALIBRATING QA & SDET METRICS')
        } else {
          setStatusText('ACCESS GRANTED · WELCOME')
        }

        return next
      })
    }, 45)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = prevOverflow
    }
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsExiting(true)
      }, 350)
      return () => clearTimeout(timer)
    }
  }, [progress])

  const handleSkip = () => {
    if (!isExiting) {
      setProgress(100)
      setIsExiting(true)
    }
  }

  const handleFinalExit = () => {
    if (completedRef.current) return
    completedRef.current = true
    document.body.style.overflow = ''
    if (onComplete) onComplete()
  }

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[100] overflow-hidden select-none cursor-pointer"
      title="Click to skip"
    >
      {/* Staggered Vertical Curtain Shutter Columns (Exit Wave) */}
      <div className="absolute inset-0 flex pointer-events-none">
        {COLUMNS.map((col) => (
          <motion.div
            key={col}
            className="relative h-full flex-1 bg-[#0B0B0F] border-r border-white/[0.03] last:border-r-0"
            initial={{ y: '0%' }}
            animate={isExiting ? { y: '-100%' } : { y: '0%' }}
            transition={{
              duration: 0.9,
              delay: isExiting ? 0.08 + col * 0.07 : 0,
              ease: [0.77, 0, 0.175, 1],
            }}
            onAnimationComplete={
              col === COLUMNS.length - 1 && isExiting ? handleFinalExit : undefined
            }
          >
            {/* Glowing bottom edge of each sliding shutter */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#0071E3] to-transparent shadow-[0_4px_20px_#0071E3]" />
          </motion.div>
        ))}
      </div>

      {/* Ambient Lighting & Tech Grid Overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#0071E3]/20 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-[#0066CC]/25 blur-[70px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        {/* Ambient floating light particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-[#0071E3]/50 shadow-[0_0_8px_#0071E3]"
            style={{
              top: `${(i * 17) % 85 + 5}%`,
              left: `${(i * 29) % 90 + 5}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content Card (Fades & Glides on Exit) */}
      <motion.div
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center"
        animate={
          isExiting
            ? { opacity: 0, y: -45, scale: 0.92, filter: 'blur(10px)' }
            : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
        }
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-lg w-full flex flex-col items-center">
          {/* Dual-Orbital 3D Monogram Crest */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative mb-7 flex items-center justify-center"
          >
            {/* Outer Expanding Radar Beacon */}
            <div className="absolute -inset-4 rounded-full border border-[#0071E3]/30 animate-ping opacity-30 [animation-duration:3.2s]" />

            {/* Outer Clockwise Orbital Ring */}
            <svg className="w-28 h-28 animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#0071E3"
                strokeWidth="1.2"
                strokeDasharray="4 10"
                strokeOpacity="0.7"
              />
            </svg>

            {/* Inner Counter-Clockwise Orbital Ring */}
            <svg
              className="absolute w-20 h-20 animate-[spin_8s_linear_infinite_reverse]"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="#40A9FF"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                strokeOpacity="0.5"
              />
            </svg>

            {/* Center Glass Insignia */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-3.5 rounded-2xl bg-gradient-to-br from-white/10 via-[#0071E3]/20 to-black/40 backdrop-blur-2xl border border-white/20 shadow-[0_0_35px_rgba(0,113,227,0.45)] flex items-center justify-center"
            >
              <span className="font-display font-extrabold text-2xl tracking-widest bg-gradient-to-br from-white via-slate-100 to-[#0071E3] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
                VB
              </span>
            </motion.div>
          </motion.div>

          {/* Staggered 3D Letter Reveal: VAISHNAVI */}
          <div className="overflow-hidden py-1">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              {LETTERS.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 55, opacity: 0, rotateX: -60, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.65,
                    delay: 0.15 + index * 0.055,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white bg-gradient-to-b from-white via-slate-100 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(0,113,227,0.35)]"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle with expanding letter tracking */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.15em', y: 10 }}
            animate={{ opacity: 1, letterSpacing: '0.42em', y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="mt-2 text-xs sm:text-sm text-[#8E8E93] font-medium uppercase font-mono"
          >
            BHATAKHANDE
          </motion.p>

          {/* QA Engineering Status Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="mt-5 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner"
          >
            {/* Equalizer Micro-Animation */}
            <div className="flex items-center gap-0.5 h-3">
              {[0.4, 0.85, 0.5, 0.95].map((h, i) => (
                <motion.span
                  key={i}
                  className="w-0.5 bg-[#0071E3] rounded-full"
                  animate={{ height: ['25%', '100%', '35%'] }}
                  transition={{
                    duration: 0.5 + i * 0.12,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
            <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
              QA & SDET AUTOMATION SPECIALIST
            </span>
          </motion.div>

          {/* Precision Laser Loading Bar & Real-time Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-8 w-full max-w-xs space-y-3"
          >
            {/* Progress Bar with Glowing Comet Leading Edge */}
            <div className="relative h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="relative h-full bg-gradient-to-r from-[#0071E3] via-[#40A9FF] to-[#0071E3] rounded-full shadow-[0_0_15px_#0071E3]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              >
                {/* Comet Leading Edge Spark */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_#40A9FF]" />
              </motion.div>
            </div>

            {/* Status & Numeric Counter */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-wider">
              <span className="text-[#8E8E93] truncate max-w-[210px] text-left">
                {statusText}
              </span>
              <span className="text-[#0071E3] font-bold tabular-nums">
                {progress.toString().padStart(2, '0')}%
              </span>
            </div>
          </motion.div>

          {/* Skip Instruction */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 1.2 }}
            className="mt-7 text-[10px] tracking-widest text-[#8E8E93] uppercase font-mono hover:text-white transition-colors"
          >
            Click anywhere to enter ↗
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
