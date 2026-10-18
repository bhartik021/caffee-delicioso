import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Coffee, MapPin } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { info, isOpenNow } from '../data/info'
import { events } from '../data/events'
import { img } from '../data/images'
import { Wave } from './PageHero'
import { Bean } from './Ornament'
import HashLink from './HashLink'

export default function Hero() {
  const open = isOpenNow()
  return (
    <section id="home" className="bg-beans relative isolate overflow-hidden bg-brand-800 pt-16 text-white">
      {/* glow + rings echoing the round logo */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[40rem] w-[40rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full border-[36px] border-brand-700/50" />

      <div className="container-x grid items-center gap-16 pb-20 pt-14 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur">
            <span className={`h-2 w-2 rounded-full ${open ? 'animate-pulse bg-emerald-300' : 'bg-red-300'}`} />
            {open ? 'Open now' : 'Closed now'} · {info.hoursText}
          </span>
          <p className="mt-7 font-script text-3xl text-brand-200">Welcome to Caffee Delicioso</p>
          <h1 className="mt-1 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            Freshly brewed,
            <br />
            <em className="font-normal text-brand-200">deliciously</em> yours.
          </h1>
          <p className="mt-7 max-w-lg text-lg font-light leading-relaxed text-white/80">
            Handcrafted coffees, creamy shakes, indulgent frappés and cool mojitos — poured with love at our two cafés
            in Baner, Pune.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <HashLink to="/#menu" className="btn-light group">
              Explore the Menu <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </HashLink>
            {events.length ? (
              <Link to="/events" className="btn-outline">Live Music Nights</Link>
            ) : (
              <HashLink to="/#visit" className="btn-outline">Find a café</HashLink>
            )}
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-sm text-white/75">
            <span className="flex items-center gap-2"><Coffee className="h-4 w-4 text-brand-200" strokeWidth={1.75} /> 40+ handcrafted drinks</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-200" strokeWidth={1.75} /> 2 outlets in Baner</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-200" strokeWidth={1.75} /> Open till 2 AM</span>
          </div>
        </div>

        {/* Arch-framed photo collage */}
        <div className="relative mx-auto h-[30rem] w-full max-w-[30rem] sm:h-[36rem]">
          <div className="absolute right-0 top-0 h-[85%] w-[68%] rounded-t-full border border-white/20 p-2.5">
            <img
              src={img.latteArtPour(900)}
              alt="Barista pouring latte art"
              className="h-full w-full rounded-t-full object-cover shadow-2xl shadow-brand-900/50"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[52%] w-[46%] overflow-hidden rounded-[2rem] border-[6px] border-brand-800 shadow-2xl">
            <img src={img.oreoShake(600)} alt="Oreo shake" className="h-full w-full object-cover" />
          </div>

          {/* rotating text badge around the logo */}
          <div className="absolute bottom-6 right-2 h-36 w-36 sm:right-6 sm:h-40 sm:w-40">
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow text-brand-800">
              <circle cx="100" cy="100" r="100" fill="#fff" />
              <defs>
                <path id="ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text className="fill-current font-sans text-[14px] font-bold uppercase tracking-[0.2em]">
                <textPath href="#ring">Freshly brewed · Open till 2 AM · Baner ·</textPath>
              </text>
            </svg>
            <img src={logo} alt="" className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full object-contain" />
          </div>

          <div className="absolute left-0 top-12 animate-float rounded-2xl bg-white/95 px-5 py-3 text-brand-800 shadow-xl backdrop-blur">
            <p className="font-script text-xl leading-none text-brand-500">Coffee from</p>
            <p className="font-display text-3xl font-semibold">₹59</p>
          </div>
        </div>
      </div>

      <Marquee />
      <Wave className="-mt-px bg-brand-700 text-cream" />
    </section>
  )
}

const words = ['Espresso', 'Cappuccino', 'Frappé', 'Thick Shakes', 'Hot Chocolate', 'Mojitos', 'Iced Tea', 'Cold Caffee']

function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="overflow-hidden border-y border-white/10 bg-brand-700 py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl italic text-white/90">
            {w} <Bean className="h-6 w-5 rotate-[20deg] text-brand-300" />
          </span>
        ))}
      </div>
    </div>
  )
}
