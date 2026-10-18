import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, BellRing, CalendarClock, CalendarDays, Clock, MapPin, MicVocal } from 'lucide-react'
import Reveal from '../components/Reveal'
import Ornament from '../components/Ornament'
import { Wave } from '../components/PageHero'
import { Field } from '../components/WhatsAppForm'
import { phoneProps, sendToWhatsApp, whatsappLink } from '../lib/whatsapp'
import { events, performers, nextOccurrence, relativeDay } from '../data/events'
import { outlets } from '../data/info'
import { img } from '../data/images'
import useTitle from '../lib/useTitle'
import Equalizer from '../components/Equalizer'

const fmt = (d, opts) => d.toLocaleDateString('en-IN', opts)
const hasEvents = events.length > 0
const notifyLink = whatsappLink('Hi Caffee Delicioso! Please let me know when your next live music night is scheduled.')

export default function Events() {
  useTitle('Live Music Nights')
  const lineup = useMemo(() => {
    const now = new Date()
    return events
      .map((e) => ({ ...e, next: nextOccurrence(e, now) }))
      .sort((a, b) => a.next - b.next)
  }, [])
  const upNext = lineup[0]

  return (
    <>
      <EventsHero />
      <NextUp ev={upNext} />

      <section id="lineup" className="scroll-mt-20 pb-28 pt-8">
        <div className="container-x">
          <Reveal className="text-center">
            <p className="eyebrow">{hasEvents ? 'Every week at the café' : 'On the calendar'}</p>
            <h2 className="section-title mt-1">
              The <em className="font-normal text-brand-500">line-up</em>
            </h2>
            <Ornament className="mt-4" />
          </Reveal>

          {hasEvents ? (
            <div className="mx-auto mt-14 max-w-4xl space-y-6">
              {lineup.map((e, i) => (
                <Ticket key={e.title} ev={e} delay={i * 90} />
              ))}
            </div>
          ) : (
            <NoEvents />
          )}
        </div>
      </section>

      <section className="bg-beans relative isolate overflow-hidden bg-brand-800 text-white">
        <Spotlights />
        <div className="container-x relative py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-script text-3xl text-brand-200">Take the stage</p>
            <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Perform <em className="font-normal text-brand-200">with us</em>
            </h2>
            <Ornament className="mt-4" tone="text-brand-300" />
            <p className="mt-5 text-lg font-light text-white/75">
              Love to sing or play? We're always looking for fresh voices and talented musicians for our café nights.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {performers.map((o, i) => (
              <Reveal key={o.title} delay={i * 80} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/25">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-700 shadow-lg shadow-brand-900/30">
                  <o.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{o.title}</h3>
                <p className="mt-1 text-sm text-white/65">{o.text}</p>
              </Reveal>
            ))}
          </div>

          <PerformForm />
        </div>
      </section>
    </>
  )
}

function NoEvents() {
  return (
    <Reveal className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2.5rem] bg-white text-center shadow-xl shadow-brand-900/10 ring-1 ring-brand-900/5">
      <div className="bg-beans relative bg-brand-700 px-8 py-10 text-white">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-700 shadow-lg">
          <CalendarClock className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <Equalizer className="mx-auto mt-5 !h-6 justify-center" />
      </div>
      <div className="px-8 pb-10 pt-8 sm:px-12">
        <p className="font-script text-2xl text-brand-500">The stage is being set</p>
        <h3 className="mt-1 font-display text-3xl font-semibold text-brand-800">No events scheduled right now</h3>
        <p className="mx-auto mt-3 max-w-md text-brand-900/65">
          We&rsquo;re planning our next live music nights. Drop us a message and we&rsquo;ll let you know as soon as dates are announced.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={notifyLink} target="_blank" rel="noreferrer" className="btn-primary">
            <BellRing className="h-4 w-4" /> Notify me on WhatsApp
          </a>
          <a href="#perform" className="btn border border-brand-200 text-brand-700 hover:border-brand-400 hover:bg-brand-50">
            <MicVocal className="h-4 w-4" /> Want to perform?
          </a>
        </div>
      </div>
    </Reveal>
  )
}

function Spotlights() {
  return (
    <>
      <div className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-[36rem] w-[22rem] -rotate-12 rounded-full bg-brand-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-[36rem] w-[22rem] rotate-12 rounded-full bg-brand-200/10 blur-3xl" />
    </>
  )
}

function EventsHero() {
  return (
    <section className="bg-beans relative isolate overflow-hidden bg-brand-800 pt-16 text-white">
      <Spotlights />
      <div className="container-x grid items-center gap-14 pb-16 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pb-24 lg:pt-20">
        <div>
          <Equalizer />
          <p className="mt-6 font-script text-3xl text-brand-200">Sing, play &amp; sip</p>
          <h1 className="mt-1 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Live music
            <br />
            <em className="font-normal text-brand-200">nights</em> at the café
          </h1>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/80">
            {hasEvents
              ? 'Open mics, karaoke, unplugged sets and retro sing-alongs. Grab a coffee, find a seat — or take the mic yourself.'
              : 'Open mics, karaoke and unplugged sets are coming soon to our cafés. Get notified when the first night is announced — or sign up to perform.'}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            {hasEvents ? (
              <a href="#lineup" className="btn-light group">
                See the line-up <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
              </a>
            ) : (
              <a href={notifyLink} target="_blank" rel="noreferrer" className="btn-light">
                <BellRing className="h-4 w-4" /> Notify me
              </a>
            )}
            <a href="#perform" className="btn-outline">
              <MicVocal className="h-4 w-4" /> Sign up to perform
            </a>
          </div>
          <nav className="mt-10 text-sm text-white/55">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Events</span>
          </nav>
        </div>

        <div className="relative mx-auto h-[28rem] w-full max-w-md sm:h-[34rem]">
          <div className="absolute inset-x-6 top-0 bottom-10 rounded-t-full border border-white/20 p-3">
            <img src={img.vintageMic(900)} alt="Vintage microphone on stage" className="h-full w-full rounded-t-full object-cover shadow-2xl shadow-brand-900/50" />
          </div>
          <div className="absolute bottom-0 left-0 rounded-3xl bg-white px-6 py-4 text-brand-800 shadow-2xl">
            <p className="font-script text-xl leading-none text-brand-500">{hasEvents ? 'Every week' : 'Stay tuned'}</p>
            <p className="font-display text-2xl font-semibold">{hasEvents ? `${events.length} music nights` : 'Coming soon'}</p>
          </div>
          <div className="absolute right-0 top-16 flex h-20 w-20 animate-float items-center justify-center rounded-full bg-brand-600 shadow-2xl ring-4 ring-brand-800">
            <MicVocal className="h-8 w-8 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
      <Wave className="text-cream" />
    </section>
  )
}

function NextUp({ ev }) {
  if (!ev?.next) return null
  return (
    <section className="relative z-10 -mt-6 pb-20">
      <div className="container-x">
        <Reveal className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-brand-900/15 md:grid-cols-[auto_1fr_auto]">
          <div className="flex flex-row items-center justify-center gap-4 bg-brand-700 px-8 py-6 text-white md:flex-col md:gap-0 md:py-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">{fmt(ev.next, { month: 'short' })}</span>
            <span className="font-display text-6xl font-semibold leading-none">{fmt(ev.next, { day: 'numeric' })}</span>
            <span className="text-sm text-white/80">{fmt(ev.next, { weekday: 'long' })}</span>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-8">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Up next · {relativeDay(ev.next)}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-brand-800 sm:text-4xl">{ev.title}</h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-brand-900/65">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand-500" strokeWidth={1.75} /> {ev.time} onwards</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-brand-500" strokeWidth={1.75} /> {ev.where}</span>
            </div>
          </div>
          <div className="hidden w-56 md:block">
            <img src={ev.image} alt="" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Ticket({ ev, delay }) {
  return (
    <Reveal delay={delay} className="group flex overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-brand-900/5 ring-1 ring-brand-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10">
      {/* Stub */}
      <div className="flex w-24 shrink-0 flex-col items-center justify-center bg-brand-700 px-2 py-6 text-center text-white sm:w-32">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-200">
          {fmt(ev.next, { weekday: 'short' })}
        </span>
        <span className="mt-1 font-display text-2xl font-semibold leading-none sm:text-3xl">{ev.time.replace(' PM', '')}</span>
        <span className="mt-1 text-xs text-white/70">PM</span>
      </div>

      {/* Perforation */}
      <div className="my-4 w-0 border-l-2 border-dashed border-brand-200" aria-hidden="true" />

      <div className="hidden w-44 shrink-0 overflow-hidden sm:block">
        <img src={ev.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>

      <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-2xl font-semibold text-brand-800">{ev.title}</h3>
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-600">{ev.tag}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-brand-500">
          <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" strokeWidth={1.75} /> {ev.when}</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" strokeWidth={1.75} /> {ev.where}</span>
        </div>
        <p className="mt-2 text-brand-900/65">{ev.text}</p>
      </div>

      <div className="hidden shrink-0 flex-col items-center justify-center border-l border-brand-100 px-6 text-center md:flex">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-900/40">Next</span>
        <span className="font-display text-xl font-semibold text-brand-800">{fmt(ev.next, { day: 'numeric', month: 'short' })}</span>
        <span className="text-xs text-brand-500">{relativeDay(ev.next)}</span>
      </div>
    </Reveal>
  )
}

function PerformForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    act: 'Solo singer',
    genre: '',
    event: hasEvents ? events[0].title : 'Any upcoming night',
    outlet: 'Any',
    link: '',
    notes: '',
  })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    sendToWhatsApp('Hi Caffee Delicioso! I would like to perform at your music night.', [
      ['Name', form.name],
      ['Phone', form.phone],
      ['Act', form.act],
      ['Genre', form.genre],
      ['Event', form.event],
      ['Outlet', form.outlet],
      ['Sample link', form.link],
      ['Notes', form.notes],
    ])
  }

  return (
    <Reveal id="perform" className="mx-auto mt-16 grid max-w-5xl scroll-mt-24 overflow-hidden rounded-[2rem] bg-white text-brand-900 shadow-2xl shadow-brand-900/40 lg:grid-cols-5">
      <div className="relative isolate hidden p-10 text-white lg:col-span-2 lg:flex lg:flex-col">
        <img src={img.singerGuitar(800)} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-800/90 to-brand-800/60" />
        <p className="font-script text-3xl text-brand-200">Your stage awaits</p>
        <h3 className="mt-1 font-display text-3xl font-semibold">Sign up to perform</h3>
        <p className="mt-4 text-white/80">Tell us about your act and we'll get back to you on WhatsApp with a slot.</p>
      </div>
      <form onSubmit={submit} className="grid gap-5 p-8 sm:grid-cols-2 sm:p-10 lg:col-span-3">
        <Field label="Your name"><input required className="input" value={form.name} onChange={set('name')} placeholder="Name or stage name" /></Field>
        <Field label="Phone"><input required {...phoneProps} className="input" value={form.phone} onChange={set('phone')} placeholder="98765 43210" /></Field>
        <Field label="Your act">
          <select className="input" value={form.act} onChange={set('act')}>
            {['Solo singer', 'Singer + guitar', 'Duo', 'Band', 'Instrumentalist'].map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field label="Genre"><input className="input" value={form.genre} onChange={set('genre')} placeholder="Bollywood, indie, rock…" /></Field>
        <Field label="Event">
          <select className="input" value={form.event} onChange={set('event')}>
            {hasEvents ? events.map((e) => <option key={e.title}>{e.title}</option>) : <option>Any upcoming night</option>}
          </select>
        </Field>
        <Field label="Outlet">
          <select className="input" value={form.outlet} onChange={set('outlet')}>
            <option>Any</option>
            {outlets.map((o) => <option key={o.id}>{o.name}</option>)}
          </select>
        </Field>
        <Field label="Sample of your work" className="sm:col-span-2">
          <input type="text" inputMode="url" className="input" value={form.link} onChange={set('link')} placeholder="Instagram / YouTube / SoundCloud link" />
        </Field>
        <Field label="Anything else?" className="sm:col-span-2">
          <textarea rows="3" className="input resize-none" value={form.notes} onChange={set('notes')} placeholder="Setlist ideas, equipment you'll bring, preferred dates…" />
        </Field>
        <button className="btn-primary sm:col-span-2">Send on WhatsApp <ArrowRight className="h-4 w-4" /></button>
      </form>
    </Reveal>
  )
}
