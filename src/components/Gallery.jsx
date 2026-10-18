import Reveal from './Reveal'
import Ornament from './Ornament'
import { img } from '../data/images'

// Polaroid wall — swap in real café photos (and captions) when available.
const shots = [
  { src: img.cheersCups(500), caption: 'Cheers to coffee' },
  { src: img.icedCoffee(500), caption: 'Cold brew o’clock' },
  { src: img.oreoShake(500), caption: 'Shake it up' },
  { src: img.pourOver(500), caption: 'Slow pour rituals' },
  { src: img.greenCafe(500), caption: 'Our green corner' },
  { src: img.mintMojito(500), caption: 'Minty & chilled' },
  { src: img.latteArtPour(500), caption: 'Latte art love' },
  { src: img.hotChocolate(500), caption: 'Cocoa comfort' },
]
const tilts = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1']

export default function Gallery() {
  const row = [...shots, ...shots] // duplicated for a seamless loop

  return (
    <section className="overflow-hidden pb-20 pt-28">
      <Reveal className="container-x text-center">
        <p className="eyebrow">Moments at the café</p>
        <h2 className="section-title mt-1">
          Sip, share, <em className="font-normal text-brand-500">repeat</em>
        </h2>
        <Ornament className="mt-4" />
        <p className="mx-auto mt-5 max-w-xl text-lg font-light text-brand-900/70">
          Little moments from our tables — good coffee, great company and plenty of shakes.
        </p>
      </Reveal>

      <div className="group relative mt-8 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-x-auto">
        <ul className="flex w-max animate-marquee gap-8 px-4 py-12 [animation-duration:60s] group-hover:[animation-play-state:paused]">
          {row.map((s, i) => (
            <li
              key={i}
              aria-hidden={i >= shots.length}
              className={`w-56 shrink-0 bg-white p-3 pb-14 shadow-xl shadow-brand-900/15 ring-1 ring-brand-900/5 transition duration-500 hover:z-10 hover:rotate-0 hover:scale-105 sm:w-64 ${tilts[i % tilts.length]} relative`}
            >
              <img src={s.src} alt={s.caption} loading="lazy" className="aspect-square w-full object-cover" />
              <p className="absolute inset-x-3 bottom-3 text-center font-script text-2xl text-brand-700">{s.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
