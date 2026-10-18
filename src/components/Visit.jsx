import { useState } from 'react'
import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import Reveal from './Reveal'
import Ornament from './Ornament'
import { info, outlets, isOpenNow, todayIST, mapEmbedUrl, directionsUrl } from '../data/info'
import { img } from '../data/images'

const outletImages = [img.cafeInterior(300), img.greenCafe(300)]
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function Visit() {
  const open = isOpenNow()
  const today = days[(todayIST() + 6) % 7]
  const [activeId, setActiveId] = useState(outlets[0].id)
  const active = outlets.find((o) => o.id === activeId)

  return (
    <section id="visit" className="scroll-mt-16 bg-sand py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Come say hi</p>
          <h2 className="section-title mt-1">
            Visit <em className="font-normal text-brand-500">us</em>
          </h2>
          <Ornament className="mt-4" />
          <p className="mx-auto mt-5 max-w-xl text-lg font-light text-brand-900/70">
            Two cosy cafés in Baner, Pune — pick the one closest to you.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-brand-900/10 ring-1 ring-brand-900/5 lg:grid-cols-[26rem_1fr]">
          {/* ---------- Left: outlets, hours, contact ---------- */}
          <div className="flex flex-col gap-8 p-6 sm:p-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-700/60">Our cafés</h3>
              <div className="mt-4 space-y-3" role="radiogroup" aria-label="Choose an outlet">
                {outlets.map((o, i) => {
                  const on = o.id === activeId
                  return (
                    <div
                      key={o.id}
                      role="radio"
                      aria-checked={on}
                      tabIndex={0}
                      onClick={() => setActiveId(o.id)}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setActiveId(o.id))}
                      className={`group cursor-pointer rounded-3xl p-4 transition duration-300 ${
                        on ? 'bg-brand-700 text-white shadow-xl shadow-brand-700/25' : 'bg-cream text-brand-900 hover:bg-brand-50'
                      }`}
                    >
                      <div className="flex gap-4">
                        <img src={outletImages[i % outletImages.length]} alt="" className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
                        <div className="min-w-0">
                          <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${on ? 'text-brand-200' : 'text-brand-500'}`}>
                            Outlet {String(i + 1).padStart(2, '0')}
                          </p>
                          <h4 className="font-display text-xl font-semibold leading-tight">{o.name}</h4>
                          <p className={`mt-1 text-sm leading-snug ${on ? 'text-white/75' : 'text-brand-900/60'}`}>{o.address}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2 pl-24">
                        <a
                          href={directionsUrl(o.coords)}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                            on ? 'bg-white text-brand-800 hover:bg-brand-50' : 'bg-brand-700 text-white hover:bg-brand-600'
                          }`}
                        >
                          <Navigation className="h-3.5 w-3.5" /> Directions
                        </a>
                        <a
                          href={`tel:${info.phoneRaw}`}
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold transition ${
                            on ? 'border-white/30 text-white hover:bg-white/10' : 'border-brand-200 text-brand-700 hover:bg-white'
                          }`}
                        >
                          <Phone className="h-3.5 w-3.5" /> Call
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <h3 className="flex items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-[0.25em] text-brand-700/60">
                  <Clock className="h-4 w-4" /> Opening hours
                </h3>
                <span
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${
                    open ? 'bg-brand-50 text-brand-700' : 'bg-red-50 text-red-600'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${open ? 'animate-pulse bg-brand-500' : 'bg-red-500'}`} />
                  {open ? 'Open · closes 2:00 AM' : 'Closed · opens 8:45 AM'}
                </span>
              </div>
              <ul className="mt-4 divide-y divide-brand-100/70 rounded-2xl bg-cream px-4">
                {days.map((d) => {
                  const isToday = d === today
                  return (
                    <li key={d} className={`flex items-center justify-between py-2 text-sm ${isToday ? 'font-bold text-brand-800' : 'text-brand-900/65'}`}>
                      <span className="flex items-center gap-2">
                        {d}
                        {isToday && <span className="rounded-full bg-brand-700 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white">Today</span>}
                      </span>
                      <span>8:45 AM – 2:00 AM</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-2 gap-3">
              <a href={`tel:${info.phoneRaw}`} className="btn-primary">
                <Phone className="h-4 w-4" /> Call us
              </a>
              <a href={info.whatsapp} target="_blank" rel="noreferrer" className="btn border border-brand-200 text-brand-700 hover:border-brand-400 hover:bg-brand-50">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <p className="col-span-2 text-center text-sm text-brand-900/55">
                {info.phone} <span className="hidden sm:inline">· </span>
                <br className="sm:hidden" />
                same number for both outlets
              </p>
            </div>
          </div>

          {/* ---------- Right: map ---------- */}
          <div className="relative min-h-[22rem] bg-brand-50 lg:min-h-full">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-400">
              <MapPin className="h-10 w-10" strokeWidth={1.25} />
              <p className="text-sm">Loading map…</p>
            </div>
            <iframe
              key={active.id}
              title={`Caffee Delicioso – ${active.name}`}
              src={mapEmbedUrl(active.coords)}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-9 flex flex-wrap items-end justify-between gap-3 sm:inset-x-6 sm:bottom-10">
              <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-5 shadow-xl backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500">Showing</span>
                  <span className="block font-display text-base font-semibold leading-tight text-brand-800">{active.name}</span>
                </span>
              </div>
              <a
                href={directionsUrl(active.coords)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary pointer-events-auto shadow-xl"
              >
                <Navigation className="h-4 w-4" /> Get directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
