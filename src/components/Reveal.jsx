import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  // Kept in React state (not added via classList) so re-renders that change
  // className — e.g. a selected card — don't wipe the visible state.
  const [visible, setVisible] = useState(false)
  // Once the fade-in has finished, drop the stagger delay so hover effects respond instantly.
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [visible])

  useEffect(() => {
    if (!visible || settled) return
    const t = setTimeout(() => setSettled(true), delay + 850)
    return () => clearTimeout(t)
  }, [visible, settled, delay])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ...(settled ? null : { transitionDelay: `${delay}ms` }), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
