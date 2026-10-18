import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BellRing, Briefcase, Clock, GraduationCap, MapPin, UserPlus } from 'lucide-react'
import Reveal from './Reveal'
import Equalizer from './Equalizer'
import { Bean } from './Ornament'
import { events, nextOccurrence, relativeDay } from '../data/events'
import { roles, perks } from '../data/careers'
import { img } from '../data/images'

export default function CtaBand() {
  return (
    <section className="pb-28">
      <div className="container-x grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <MusicCard />
        <HiringCard />
      </div>
    </section>
  )
}

function MusicCard() {
  const next = useMemo(() => {
    const now = new Date()
    return events.map((e) => ({ ...e, next: nextOccurrence(e, now) })).sort((a, b) => a.next - b.next)[0] ?? null
  }, [])

  return (
    <Reveal>
      <Link
        to="/events"
        className="bg-beans group relative isolate flex h-full flex-col gap-8 overflow-hidden rounded-[2.5rem] bg-brand-800 p-8 text-white shadow-2xl shadow-brand-900/20 sm:flex-row sm:items-stretch sm:p-10"
      >
        <div className="pointer-events-none absolute -left-20 -top-24 -z-10 h-80 w-64 -rotate-12 rounded-full bg-brand-300/15 blur-3xl" />

        <div className="flex flex-1 flex-col">
          <Equalizer className="!h-8" />
          <p className="mt-5 font-script text-2xl text-brand-200">Open mics &amp; karaoke</p>
          <h3 className="font-display text-4xl font-semibold leading-tight">
            Live music <em className="font-normal text-brand-200">nights</em>
          </h3>
          <p className="mt-3 max-w-sm text-white/75">
            {events.length
              ? `Sing, play or just sip and listen — ${events.length} music nights at our cafés every week.`
              : 'Open mics, karaoke and unplugged sets are coming soon to our cafés.'}
          </p>

          {!next && (
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.08] p-3 pr-5 backdrop-blur-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700">
                <BellRing className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-200">Coming soon</p>
                <p className="font-display text-lg font-semibold">No events scheduled yet</p>
                <p className="text-xs text-white/65">Get notified when dates are announced</p>
              </div>
            </div>
          )}

          {next?.next && (
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.08] p-3 pr-5 backdrop-blur-sm">
              <div className="flex w-16 shrink-0 flex-col items-center rounded-xl bg-white py-2 text-brand-800">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">
                  {next.next.toLocaleDateString('en-IN', { month: 'short' })}
                </span>
                <span className="font-display text-2xl font-semibold leading-none">{next.next.getDate()}</span>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-200">Up next · {relativeDay(next.next)}</p>
                <p className="truncate font-display text-lg font-semibold">{next.title}</p>
                <p className="flex flex-wrap gap-x-3 text-xs text-white/65">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {next.time}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {next.where}</span>
                </p>
              </div>
            </div>
          )}

          <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold">
            {next ? 'See the full line-up' : 'Get notified'} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>

        <div className="relative hidden w-48 shrink-0 sm:block">
          <div className="h-full min-h-[18rem] rounded-t-full border border-white/20 p-2">
            <img
              src={img.vintageMic(500)}
              alt="Vintage microphone"
              loading="lazy"
              className="h-full w-full rounded-t-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

function HiringCard() {
  const hiring = roles.length > 0
  return (
    <Reveal delay={120}>
      <Link
        to="/careers"
        className="group relative isolate flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-xl shadow-brand-900/10 ring-1 ring-brand-900/5 transition hover:shadow-2xl sm:p-10"
      >
        <Bean className="pointer-events-none absolute -right-8 -top-8 -z-10 h-44 w-36 rotate-[25deg] text-brand-50" />

        <div className="flex items-center gap-4">
          <img src={img.baristaFace(160)} alt="" loading="lazy" className="h-16 w-16 rounded-full object-cover ring-4 ring-brand-50" />
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
            <span className="relative flex h-2 w-2">
              {hiring && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />}
              <span className={`relative inline-flex h-2 w-2 rounded-full ${hiring ? 'bg-brand-500' : 'bg-brand-300'}`} />
            </span>
            {hiring ? `Now hiring · ${roles.length} roles` : 'No openings right now'}
          </span>
        </div>

        <p className="mt-6 font-script text-2xl text-brand-500">Join the crew</p>
        <h3 className="font-display text-4xl font-semibold leading-tight text-brand-800">
          {hiring ? (
            <>
              We&rsquo;re <em className="font-normal text-brand-500">hiring!</em>
            </>
          ) : (
            <>
              Work <em className="font-normal text-brand-500">with us</em>
            </>
          )}
        </h3>
        <p className="mt-3 max-w-sm text-brand-900/65">
          {hiring
            ? 'Love coffee and people? Come brew with us at Baner and Balewadi.'
            : 'We’re not hiring right now — join our talent list and be the first to know when a role opens.'}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {hiring
            ? roles.map((r) => (
                <li key={r.title} className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-cream px-3 py-1.5 text-sm font-semibold text-brand-800">
                  <Briefcase className="h-3.5 w-3.5 text-brand-500" strokeWidth={2} /> {r.title}
                </li>
              ))
            : perks.slice(0, 3).map((p) => (
                <li key={p.title} className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-cream px-3 py-1.5 text-sm font-semibold text-brand-800">
                  <p.icon className="h-3.5 w-3.5 text-brand-500" strokeWidth={2} /> {p.title}
                </li>
              ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
          <span className="flex items-center gap-2 text-sm text-brand-900/60">
            <GraduationCap className="h-4 w-4 text-brand-500" /> Freshers welcome · Training provided
          </span>
          <span className="btn-primary !px-5 !py-2.5">
            {hiring ? (
              <>
                See open roles <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4" /> Join talent list
              </>
            )}
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
