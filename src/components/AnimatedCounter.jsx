import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)
  const isDecimal = value % 1 !== 0

  useEffect(() => {
    if (!isInView) return
    let start = null

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(value)
    }

    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {isDecimal ? display.toFixed(2) : Math.floor(display)}
      {suffix}
    </span>
  )
}
