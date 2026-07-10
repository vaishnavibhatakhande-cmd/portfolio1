import { useEffect, useState } from 'react'

export default function TypingText({ words, typingSpeed = 60, pauseTime = 1400 }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const timeout = setTimeout(() => setDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1))
      },
      deleting ? typingSpeed / 2 : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, typingSpeed, pauseTime])

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="inline-block w-[2px] h-[1em] bg-primary dark:bg-accent-sky ml-1 align-middle animate-pulse" />
    </span>
  )
}
