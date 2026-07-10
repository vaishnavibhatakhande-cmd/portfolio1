import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const glow = glowRef.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
    }

    const render = () => {
      if (glow) {
        glow.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`
      }
      raf = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 hidden h-[400px] w-[400px] rounded-full opacity-[0.15] blur-3xl md:block"
      style={{
        background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
