import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiPlay, FiTerminal, FiShield, FiCpu } from 'react-icons/fi'

const TEST_STEPS = [
  {
    browser: 'chromium',
    suite: 'e2e/auth-flow.spec.ts',
    label: 'User Authentication & JWT Tokens',
    duration: '185ms',
    status: 'passed',
  },
  {
    browser: 'firefox',
    suite: 'e2e/booking-pom.spec.ts',
    label: 'End-to-End Course Registration POM',
    duration: '320ms',
    status: 'passed',
  },
  {
    browser: 'webkit',
    suite: 'api/endpoints.spec.ts',
    label: 'REST API Payload & HTTP 200 OK',
    duration: '94ms',
    status: 'passed',
  },
  {
    browser: 'chromium',
    suite: 'visual/accessibility.spec.ts',
    label: 'WCAG-AA Accessibility & Zero Regressions',
    duration: '142ms',
    status: 'passed',
  },
]

export default function HeroTerminalCard() {
  const cardRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  // Mouse tilt physics
  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(1000px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    }
  }

  // Automated test runner simulation cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (TEST_STEPS.length + 1))
    }, 1800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg transition-transform duration-200 ease-out will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#0071E3]/25 via-[#0066CC]/20 to-[#40A9FF]/20 blur-2xl opacity-70 -z-10 animate-pulse" />

      {/* Floating 3D Badge 1 (Top Right) */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-5 -right-3 z-20 flex items-center gap-2 rounded-full bg-white/90 dark:bg-[#1D1D1F]/90 backdrop-blur-xl border border-white/20 dark:border-white/10 px-3.5 py-1.5 shadow-xl text-xs font-semibold text-slate-800 dark:text-white"
        style={{ transform: 'translateZ(35px)' }}
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
        <FiCpu className="text-[#0071E3]" />
        <span>Playwright & PyTest SDET</span>
      </motion.div>

      {/* Floating 3D Badge 2 (Bottom Left) */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-5 -left-3 z-20 flex items-center gap-2 rounded-full bg-white/90 dark:bg-[#1D1D1F]/90 backdrop-blur-xl border border-white/20 dark:border-white/10 px-3.5 py-1.5 shadow-xl text-xs font-semibold text-slate-800 dark:text-white"
        style={{ transform: 'translateZ(30px)' }}
      >
        <FiShield className="text-[#0071E3]" />
        <span>100% Test Pass Rate</span>
      </motion.div>

      {/* Main Terminal Window */}
      <div className="overflow-hidden rounded-2xl bg-[#0D0E15] text-slate-300 border border-white/15 shadow-2xl">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-sm" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <FiTerminal className="text-[#0071E3]" size={13} />
            <span>playwright-automation-suite</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
        </div>

        {/* Terminal Command Line */}
        <div className="border-b border-white/5 bg-black/30 px-5 py-2.5 font-mono text-xs text-slate-400 flex items-center gap-2">
          <span className="text-emerald-400">$</span>
          <span className="text-slate-200">npx playwright test --headed --workers=4</span>
          <FiPlay size={10} className="text-[#0071E3] animate-pulse ml-auto" />
        </div>

        {/* Test Execution Rows */}
        <div className="p-5 space-y-2.5 font-mono text-xs">
          {TEST_STEPS.map((step, idx) => {
            const isCompleted = activeStep > idx || activeStep === TEST_STEPS.length
            const isCurrent = activeStep === idx

            return (
              <motion.div
                key={step.suite}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start justify-between gap-3 p-2 rounded-lg transition-all ${
                  isCurrent
                    ? 'bg-[#0071E3]/15 border border-[#0071E3]/30 shadow-inner'
                    : isCompleted
                    ? 'bg-white/[0.02] border border-white/5'
                    : 'opacity-40'
                }`}
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  {isCompleted ? (
                    <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                  ) : isCurrent ? (
                    <span className="h-3 w-3 rounded-full border-2 border-[#0071E3] border-t-transparent animate-spin shrink-0 mt-0.5" />
                  ) : (
                    <span className="h-3 w-3 rounded-full border border-slate-600 shrink-0 mt-0.5" />
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold text-white truncate text-[11px] sm:text-xs">
                      {step.label}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      [{step.browser}] › {step.suite}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[10px] shrink-0 font-medium ${
                    isCompleted ? 'text-emerald-400' : 'text-slate-500'
                  }`}
                >
                  {isCompleted ? step.duration : isCurrent ? 'testing...' : 'queued'}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Terminal Summary Footer */}
        <div className="border-t border-white/10 bg-white/[0.02] px-5 py-3 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-3 text-emerald-400 font-semibold">
            <span>✔ 48 Passed</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">0 Failed</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">0 Flaky</span>
          </div>
          <span className="text-[#0071E3] font-semibold">100% PASS</span>
        </div>
      </div>
    </div>
  )
}
