import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', as = 'div' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const Tag = as

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'is-in' : ''} ${className}`}>
      {children}
    </Tag>
  )
}


