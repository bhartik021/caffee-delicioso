import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BellRing, Briefcase, Check, ChevronDown, Clock, MapPin, Sparkles, UserPlus } from 'lucide-react'
import Reveal from '../components/Reveal'
import Ornament from '../components/Ornament'
import { Wave } from '../components/PageHero'
import { Field } from '../components/WhatsAppForm'
import { phoneProps, sendToWhatsApp, whatsappLink } from '../lib/whatsapp'
import { roles, interestAreas, perks, featuredPerk, steps } from '../data/careers'
import { outlets } from '../data/info'
import { img } from '../data/images'
import useTitle from '../lib/useTitle'

const hiring = roles.length > 0

export default function Careers() {
  useTitle('Careers')
  const [role, setRole] = useState(hiring ? roles[0].title : interestAreas[0])

  const apply = (title) => {
    setRole(title)
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <CareersHero />
      <Perks />
      <Roles onApply={apply} />
      <Process />
      <section id="apply" className="scroll-mt-20 pb-28">
        <div className="container-x">
          <ApplyForm role={role} setRole={setRole} />
        </div>
      </section>
    </>
  )
}

function CareersHero() {
  return (
    <section className="bg-beans relative isolate overflow-hidden bg-brand-800 pt-16 text-white">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[38rem] w-[38rem] translate-x-1/3 -translate-y-1/4 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="container-x grid items-center gap-14 pb-16 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pb-24 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-200" />{' '}
            {hiring ? <>{roles.length} open roles · Baner &amp; Balewadi</> : 'No open roles right now'}
          </span>
          <p className="mt-7 font-script text-3xl text-brand-200">Join the crew</p>
          <h1 className="mt-1 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Brew your <em className="font-normal text-brand-200">career</em> with us
          </h1>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/80">
            {hiring
              ? 'No fancy CV needed — just a love for coffee and people. We’ll teach you the rest.'
              : 'We’re not hiring at the moment, but we’d love to hear from people who love coffee. Join our talent list and we’ll reach out when a role opens.'}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            {hiring ? (
              <>
                <a href="#roles" className="btn-light group">
                  View open roles <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a href="#apply" className="btn-outline">Apply now</a>
              </>
            ) : (
              <a href="#apply" className="btn-light group">
                <UserPlus className="h-4 w-4" /> Join our talent list
              </a>
            )}
          </div>
          <nav className="mt-10 text-sm text-white/55">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Careers</span>
          </nav>
        </div>

        <div className="relative mx-auto h-[28rem] w-full max-w-md sm:h-[34rem]">
          <div className="absolute inset-x-6 bottom-10 top-0 rounded-t-full border border-white/20 p-3">
            <img src={img.baristaCounter(900)} alt="Barista serving a guest" className="h-full w-full rounded-t-full object-cover object-[22%_center] shadow-2xl shadow-brand-900/50" />
          </div>

          {/* rotating "now hiring" badge */}
          <div className="absolute -right-1 top-6 h-32 w-32 sm:h-36 sm:w-36">
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow text-brand-800">
              <circle cx="100" cy="100" r="100" fill="#fff" />
              <defs>
                <path id="hire-ring" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
              </defs>
              <text className="fill-current font-sans text-[17px] font-semibold uppercase tracking-[0.32em]">
                <textPath href="#hire-ring">{hiring ? 'Now hiring · Join the crew ·' : 'Love coffee? · Join the crew ·'}</textPath>
              </text>
            </svg>
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-700 text-white">
              <Briefcase className="h-6 w-6" strokeWidth={1.5} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 animate-float rounded-3xl bg-white px-6 py-4 text-brand-800 shadow-2xl">
            <p className="font-script text-xl leading-none text-brand-500">Freshers welcome</p>
            <p className="font-display text-2xl font-semibold">Training provided</p>
          </div>
        </div>
      </div>
      <Wave className="text-cream" />
    </section>
  )
}

function Perks() {
  const F = featuredPerk
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Why work with us</p>
          <h2 className="section-title mt-1">
            More than <em className="font-normal text-brand-500">just a job</em>
          </h2>
          <Ornament className="mt-4" />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <Reveal className="group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[2rem] p-8 text-white md:row-span-2">
            <img src={img.latteArtPour(900)} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-800 via-brand-800/60 to-transparent" />
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-700">
              <F.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="mt-5 font-display text-3xl font-semibold">{F.title}</h3>
            <p className="mt-2 text-white/80">{F.text}</p>
          </Reveal>

          {perks.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i + 1) * 80}
              className={`flex flex-col justify-between rounded-[2rem] p-7 transition hover:-translate-y-1 ${
                i === 1 ? 'bg-brand-700 text-white' : 'bg-white shadow-sm ring-1 ring-brand-900/5 hover:shadow-xl'
              }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${i === 1 ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-600'}`}>
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="mt-8">
                <h3 className={`font-display text-xl font-semibold ${i === 1 ? '' : 'text-brand-800'}`}>{p.title}</h3>
                <p className={`mt-1 text-sm ${i === 1 ? 'text-white/75' : 'text-brand-900/60'}`}>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Roles({ onApply }) {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="roles" className="scroll-mt-20 bg-sand py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.6fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Open positions</p>
          <h2 className="section-title mt-1">
            Find your <em className="font-normal text-brand-500">role</em>
          </h2>
          <Ornament className="mt-4" />
          <p className="mt-5 text-lg font-light text-brand-900/70">
            {hiring
              ? 'We’re growing across both our Baner cafés. Tap a role to see what you’ll do — then apply in a minute.'
              : 'There are no openings right now — but new roles come up as we grow across our Baner cafés.'}
          </p>
          <div className="mt-8 hidden overflow-hidden rounded-[2rem] lg:block">
            <img src={img.coffeeBar(700)} alt="Our coffee bar" className="h-72 w-full object-cover" />
          </div>
        </Reveal>

        {!hiring && <NoOpenings />}
        <div className={hiring ? 'space-y-4' : 'hidden'}>
          {roles.map((r, i) => {
            const open = openIdx === i
            return (
              <Reveal key={r.title} delay={i * 80} className={`overflow-hidden rounded-[1.75rem] bg-white transition ${open ? 'shadow-2xl shadow-brand-900/10 ring-1 ring-brand-200' : 'shadow-sm ring-1 ring-brand-900/5 hover:shadow-lg'}`}>
                <button type="button" onClick={() => setOpenIdx(open ? -1 : i)} aria-expanded={open} className="flex w-full items-center gap-5 p-6 text-left sm:p-7">
                  <span className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-semibold sm:flex ${open ? 'bg-brand-700 text-white' : 'bg-brand-50 text-brand-700'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-brand-800">{r.title}</h3>
                    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-brand-500">
                      <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" strokeWidth={1.75} /> {r.type}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" strokeWidth={1.75} /> {r.shift}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" strokeWidth={1.75} /> Baner &amp; Balewadi</span>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-brand-500 transition duration-300 ${open ? 'rotate-180' : ''}`} />
                </button>

                <div className={`grid transition-all duration-500 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="border-t border-brand-100 px-6 pb-7 pt-5 sm:px-7 sm:pl-[5.75rem]">
                      <p className="text-brand-900/75">{r.summary}</p>
                      <div className="mt-5 grid gap-6 sm:grid-cols-2">
                        <List title="What you'll do" items={r.duties} />
                        <List title="You're a great fit if" items={r.fit} />
                      </div>
                      <button onClick={() => onApply(r.title)} className="btn-primary group mt-7">
                        Apply for this role <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function NoOpenings() {
  const notify = whatsappLink('Hi Caffee Delicioso! Please let me know when you have job openings.')
  return (
    <Reveal className="self-start overflow-hidden rounded-[2.5rem] bg-white text-center shadow-xl shadow-brand-900/10 ring-1 ring-brand-900/5">
      <div className="bg-beans relative bg-brand-700 px-8 py-10 text-white">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-700 shadow-lg">
          <Briefcase className="h-7 w-7" strokeWidth={1.5} />
        </div>
      </div>
      <div className="px-8 pb-10 pt-8 sm:px-12">
        <p className="font-script text-2xl text-brand-500">Nothing open right now</p>
        <h3 className="mt-1 font-display text-3xl font-semibold text-brand-800">We&rsquo;re not hiring at the moment</h3>
        <p className="mx-auto mt-3 max-w-md text-brand-900/65">
          Leave your details and you&rsquo;ll be the first to hear when a barista, server or kitchen role opens at either café.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="#apply" className="btn-primary">
            <UserPlus className="h-4 w-4" /> Join our talent list
          </a>
          <a href={notify} target="_blank" rel="noreferrer" className="btn border border-brand-200 text-brand-700 hover:border-brand-400 hover:bg-brand-50">
            <BellRing className="h-4 w-4" /> Notify me
          </a>
        </div>
      </div>
    </Reveal>
  )
}

function List({ title, items }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700/70">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((t) => (
          <li key={t} className="flex gap-2.5 text-sm text-brand-900/75">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Process() {
  return (
    <section className="py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Simple &amp; quick</p>
          <h2 className="section-title mt-1">
            How hiring <em className="font-normal text-brand-500">works</em>
          </h2>
          <Ornament className="mt-4" />
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-brand-200 lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="relative text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-700 text-white shadow-xl shadow-brand-700/25 ring-8 ring-cream">
                <s.icon className="h-7 w-7" strokeWidth={1.5} />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-200 text-xs font-bold text-brand-800">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-brand-800">{s.title}</h3>
              <p className="mx-auto mt-1 max-w-[14rem] text-sm text-brand-900/60">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApplyForm({ role, setRole }) {
  const [form, setForm] = useState({ name: '', phone: '', outlet: 'Any', experience: 'Fresher', about: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    sendToWhatsApp(hiring ? 'Hi Caffee Delicioso! I would like to apply for a job.' : 'Hi Caffee Delicioso! Please add me to your talent list for future openings.', [
      [hiring ? 'Role' : 'Interested in', role],
      ['Name', form.name],
      ['Phone', form.phone],
      ['Preferred outlet', form.outlet],
      ['Experience', form.experience],
      ['About me', form.about],
    ])
  }

  return (
    <Reveal className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-brand-900/10 lg:grid-cols-5">
      <div className="bg-beans relative isolate flex flex-col overflow-hidden bg-brand-700 p-10 text-white lg:col-span-2">
        <div className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-brand-500/40 blur-3xl" />
        <p className="font-script text-3xl text-brand-200">{hiring ? 'Ready to join?' : 'For future openings'}</p>
        <h2 className="mt-1 font-display text-4xl font-semibold leading-tight">{hiring ? 'Apply in a minute' : 'Join our talent list'}</h2>
        <p className="mt-4 text-white/80">
          {hiring
            ? 'Send us your details on WhatsApp — we usually reply within a day.'
            : 'Share your details on WhatsApp and we’ll contact you first when a role opens up.'}
        </p>
        <ul className="mt-8 space-y-3 text-sm">
          {['No CV required', 'Freshers welcome', 'Training on the job', hiring ? 'Both outlets hiring' : 'We’ll reach out when a role opens'].map((t) => (
            <li key={t} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={submit} className="grid gap-5 p-8 sm:grid-cols-2 sm:p-10 lg:col-span-3">
        <Field label={hiring ? 'Role' : 'Interested in'}>
          <select className="input" value={role} onChange={(e) => setRole(e.target.value)}>
            {(hiring ? roles.map((r) => r.title) : interestAreas).map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Preferred outlet">
          <select className="input" value={form.outlet} onChange={set('outlet')}>
            <option>Any</option>
            {outlets.map((o) => <option key={o.id}>{o.name}</option>)}
          </select>
        </Field>
        <Field label="Your name"><input required className="input" value={form.name} onChange={set('name')} placeholder="Full name" /></Field>
        <Field label="Phone"><input required {...phoneProps} className="input" value={form.phone} onChange={set('phone')} placeholder="98765 43210" /></Field>
        <Field as="div" label="Experience" className="sm:col-span-2">
          <div className="flex flex-wrap gap-2">
            {['Fresher', '< 1 year', '1–3 years', '3+ years'].map((x) => (
              <button
                type="button"
                key={x}
                onClick={() => setForm((f) => ({ ...f, experience: x }))}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  form.experience === x ? 'border-brand-700 bg-brand-700 text-white' : 'border-brand-100 text-brand-800 hover:border-brand-300'
                }`}
              >
                {x}
              </button>
            ))}
          </div>
        </Field>
        <Field label="Tell us about yourself" className="sm:col-span-2">
          <textarea rows="4" className="input resize-none" value={form.about} onChange={set('about')} placeholder="Where you've worked, your availability, your favourite drink…" />
        </Field>
        <button className="btn-primary group sm:col-span-2">
          {hiring ? 'Send application on WhatsApp' : 'Join the talent list on WhatsApp'} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      </form>
    </Reveal>
  )
}
