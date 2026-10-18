// React Router doesn't re-navigate when a "/#section" link points at the hash we're already on,
// so scroll manually in that case.
export function scrollToHash(to, location) {
  const i = to.indexOf('#')
  if (i === -1) return
  const path = to.slice(0, i) || '/'
  const hash = to.slice(i)
  if (location.pathname === path && location.hash === hash) {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }
}
