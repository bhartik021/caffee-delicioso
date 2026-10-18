import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import Ornament from './Ornament'
import { img } from '../data/images'
import HashLink from './HashLink'

const picks = [
  { name: 'Delicioso Frappé', note: 'Our signature', price: 169, image: img.freakShake(700) },
  { name: 'Oreo Shake', note: 'Thick & creamy', price: 129, image: img.oreoShake(700) },
  { name: 'Iced Latte', note: 'Cool & smooth', price: 109, image: img.icedLatte(700) },
  { name: 'Mojitos', note: 'Six refreshing flavours', price: 99, from: true, image: img.mojitos(700) },
]

export default function Signatures() {
  return (
    <section className="relative bg-sand py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Crowd favourites</p>
          <h2 className="section-title mt-1">
            Signature <em className="font-normal text-brand-500">sips</em>
          </h2>
          <Ornament className="mt-4" />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {picks.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className="group text-center">
              <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-t-full rounded-b-[2rem] bg-brand-100 shadow-xl shadow-brand-900/10 ring-1 ring-brand-900/5">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
              <div className="relative -mt-6 inline-flex flex-col items-center rounded-full bg-brand-700 px-4 py-1.5 font-display text-base font-semibold text-white shadow-lg ring-4 ring-sand sm:-mt-7 sm:px-5 sm:py-2 sm:text-lg">
                <span>
                  {p.from && <span className="mr-1 font-sans text-xs font-normal text-brand-200">from</span>}₹{p.price}
                </span>
              </div>
              <p className="mt-3 font-script text-lg text-brand-500 sm:text-xl">{p.note}</p>
              <h3 className="font-display text-lg font-semibold leading-tight text-brand-800 sm:text-2xl">{p.name}</h3>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <HashLink to="/#menu" className="btn-primary group">
            See the full menu <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </HashLink>
        </div>
      </div>
    </section>
  )
}
