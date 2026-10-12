import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const glow = glowRef.current
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let raf

    const handleMouseMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      // Fluid linear interpolation (LERP) for smooth trailing physics
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12

      if (glow) {
        glow.style.transform = `translate3d(${currentX - 225}px, ${currentY - 225}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 hidden h-[450px] w-[450px] rounded-full opacity-25 dark:opacity-20 blur-[100px] md:block"
      style={{
        background: 'radial-gradient(circle, #0071E3 0%, #0066CC 40%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
