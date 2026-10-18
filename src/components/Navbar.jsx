import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { scrollToHash } from '../lib/scroll'
import logo from '../assets/logo.jpg'
import { info } from '../data/info'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/#menu', label: 'Menu', hash: true },
  { to: '/events', label: 'Events' },
  { to: '/careers', label: 'Careers' },
  { to: '/#visit', label: 'Visit Us', hash: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const linkClass = (l) => ({ isActive }) => {
    const active = l.hash ? location.pathname === '/' && location.hash === l.to.slice(1) : isActive && !location.hash
    return `relative py-1 text-sm font-medium tracking-wide transition after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-brand-200 after:transition-all ${
      active ? 'text-white after:w-full' : 'text-white/75 after:w-0 hover:text-white hover:after:w-full'
    }`
  }

  return (
    <header className={`fixed inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? 'top-3' : 'top-0'}`}>
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled || open
            ? 'max-w-5xl rounded-[1.75rem] border border-white/10 bg-brand-800/85 shadow-2xl shadow-brand-900/30 backdrop-blur-xl mx-3 lg:mx-auto'
            : 'max-w-6xl'
        }`}
      >
      <nav className={`flex h-16 items-center justify-between ${scrolled || open ? 'px-4 sm:px-6' : 'px-4 sm:px-6 lg:px-8'}`}>
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Caffee Delicioso logo" className="h-10 w-10 rounded-full bg-white object-contain p-0.5" />
          <span className="font-display text-xl font-semibold text-white">Caffee Delicioso</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={linkClass(l)} onClick={() => scrollToHash(l.to, location)}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href={`tel:${info.phoneRaw}`} className="btn-light !px-5 !py-2">Call Now</a>
          </li>
        </ul>

        <button
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => { scrollToHash(l.to, location); setOpen(false) }} className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={`tel:${info.phoneRaw}`} className="btn-light mt-2 w-full">Call Now</a>
          </li>
        </ul>
      )}
      </div>
    </header>
  )
}
