import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { menu } from '../data/menu'
import Reveal from './Reveal'
import Ornament from './Ornament'

const fromPrice = (items) => Math.min(...items.map((i) => i.price))

export default function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id)
  const [query, setQuery] = useState('')
  const active = menu.find((c) => c.id === activeId)
  const q = query.trim().toLowerCase()

  const results = useMemo(
    () =>
      q
        ? menu
            .map((c) => ({ ...c, items: c.items.filter((i) => `${i.name} ${i.desc ?? ''}`.toLowerCase().includes(q)) }))
            .filter((c) => c.items.length)
        : [],
    [q],
  )

  const pick = (id) => {
    setActiveId(id)
    setQuery('')
  }

  return (
    <section id="menu" className="bg-beans relative scroll-mt-16 overflow-hidden bg-brand-800 py-28 text-white">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-x relative">
        <Reveal className="text-center">
          <p className="font-script text-3xl text-brand-200">What we serve</p>
          <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Our <em className="font-normal text-brand-200">Menu</em>
          </h2>
          <Ornament className="mt-4" tone="text-brand-300" />
          <p className="mx-auto mt-5 max-w-xl text-lg font-light text-white/70">
            {menu.reduce((n, c) => n + c.items.length, 0)} handcrafted drinks across {menu.length} categories — all prices in ₹.
          </p>
        </Reveal>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-lg">
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search drinks… oreo, mint, mocha"
              aria-label="Search drinks"
              className="w-full rounded-full border border-white/15 bg-white/10 py-4 pl-14 pr-12 text-[15px] text-white placeholder-white/45 outline-none backdrop-blur [&::-webkit-search-cancel-button]:hidden focus:border-brand-200 focus:bg-white/15 focus:ring-4 focus:ring-brand-200/20"
            />
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
            {query && (
              <button onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 hover:bg-white/10 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Photo tabs — phones & tablets */}
        <div className="-mx-4 mt-10 flex gap-5 overflow-x-auto px-4 pb-3 [scrollbar-width:none] md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0 lg:hidden">
          {menu.map((c) => {
            const on = !q && c.id === activeId
            return (
              <button key={c.id} onClick={() => pick(c.id)} aria-pressed={on} className="group flex w-20 shrink-0 flex-col items-center gap-2.5 sm:w-24">
                <span
                  className={`relative block h-16 w-16 overflow-hidden rounded-full ring-offset-4 ring-offset-brand-800 transition duration-300 sm:h-20 sm:w-20 ${
                    on ? 'ring-2 ring-brand-200' : 'opacity-60 ring-1 ring-white/20 group-hover:opacity-100'
                  }`}
                >
                  <img src={c.image.replace('w=900', 'w=200')} alt="" loading="lazy" className="h-full w-full object-cover" />
                </span>
                <span className={`text-center text-xs font-semibold leading-tight ${on ? 'text-white' : 'text-white/60'}`}>{c.name}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[17rem_1fr]">
          {/* Sidebar — desktop */}
          <nav aria-label="Menu categories" className="hidden lg:block">
            <ul className="sticky top-28 space-y-1 rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm">
              {menu.map((c) => {
                const on = !q && c.id === activeId
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => pick(c.id)}
                      aria-pressed={on}
                      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition ${
                        on ? 'bg-white text-brand-800 shadow-lg' : 'text-white/75 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${on ? 'bg-brand-700 text-white' : 'bg-white/10'}`}>
                        <c.icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <span className="flex-1 text-sm font-bold leading-tight">{c.name}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${on ? 'bg-brand-50 text-brand-700' : 'bg-white/10 text-white/70'}`}>
                        {c.items.length}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Content */}
          <div className="min-w-0">
            {q ? (
              <SearchResults results={results} query={query} />
            ) : (
              <div key={active.id} className="animate-fade-up">
                <Banner cat={active} />
                <ItemGrid items={active.items} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Banner({ cat }) {
  return (
    <div className="relative isolate flex min-h-[15rem] items-end overflow-hidden rounded-[2rem] p-7 shadow-2xl shadow-brand-900/40 sm:min-h-[17rem] sm:p-9">
      <img src={cat.image} alt={cat.name} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/90 via-brand-900/55 to-brand-900/5" />
      <div className="max-w-md">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-700">
          <cat.icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <h3 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{cat.name}</h3>
        <p className="mt-1 font-script text-2xl text-brand-100">{cat.tagline}</p>
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
          {cat.items.length} drinks · from ₹{fromPrice(cat.items)}
        </p>
      </div>
    </div>
  )
}

function ItemGrid({ items }) {
  const sorted = [...items.filter((i) => i.tag), ...items.filter((i) => !i.tag)]
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {sorted.map((i) => (
        <li
          key={i.name}
          className={`group relative flex gap-4 rounded-3xl p-5 transition duration-300 hover:-translate-y-0.5 ${
            i.tag ? 'bg-brand-200 text-brand-900 sm:col-span-2' : 'bg-cream text-brand-900 hover:shadow-xl hover:shadow-brand-900/30'
          }`}
        >
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-display text-lg font-semibold leading-tight text-brand-800">{i.name}</h4>
              {i.tag && (
                <span className="rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">{i.tag}</span>
              )}
            </div>
            {i.desc && <p className="mt-1 text-sm leading-snug text-brand-900/60">{i.desc}</p>}
          </div>
          <span className="h-fit shrink-0 rounded-full bg-brand-700 px-3 py-1 font-display text-base font-semibold text-white">₹{i.price}</span>
        </li>
      ))}
    </ul>
  )
}

function SearchResults({ results, query }) {
  if (!results.length) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-12 text-center">
        <Search className="mx-auto h-8 w-8 text-white/40" />
        <p className="mt-3 text-white/70">No drinks match “{query}”. Try another search.</p>
      </div>
    )
  }
  return (
    <div className="animate-fade-up space-y-10">
      <p className="text-sm text-white/60">
        {results.reduce((n, c) => n + c.items.length, 0)} drinks match “{query}”
      </p>
      {results.map((c) => (
        <div key={c.id}>
          <h3 className="flex items-center gap-2 font-display text-2xl font-semibold">
            <c.icon className="h-5 w-5 text-brand-200" strokeWidth={1.75} /> {c.name}
          </h3>
          <ItemGrid items={c.items} />
        </div>
      ))}
    </div>
  )
}
