import { Link } from 'react-router-dom'
import Ornament from './Ornament'

export default function PageHero({ image, eyebrow, title, subtitle, crumb }) {
  return (
    <section className="bg-beans relative isolate overflow-hidden bg-brand-800 pt-16 text-white">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-800/70 via-brand-800/80 to-brand-800" />
      <div className="container-x py-28 text-center sm:py-36">
        <p className="font-script text-3xl text-brand-200">{eyebrow}</p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight sm:text-7xl">{title}</h1>
        <Ornament className="mt-5" tone="text-brand-200" />
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>}
        <nav className="mt-8 text-sm text-white/60">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{crumb}</span>
        </nav>
      </div>
      <Wave className="text-cream" />
    </section>
  )
}

export function Wave({ className = '' }) {
  return (
    <svg className={`relative block w-full ${className}`} viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" d="M0,35 C240,70 480,0 720,30 C960,60 1200,10 1440,35 L1440,70 L0,70 Z" />
    </svg>
  )
}
