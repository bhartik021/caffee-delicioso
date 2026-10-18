import { BadgeIndianRupee, Coffee, CupSoda, Moon } from 'lucide-react'
import Reveal from './Reveal'
import Ornament from './Ornament'
import { img } from '../data/images'

const features = [
  { icon: Coffee, title: 'Real Espresso', text: 'Every cup starts with a freshly pulled shot.' },
  { icon: CupSoda, title: 'Signature Frappés', text: 'From Classic Italian to KitKat Crush.' },
  { icon: Moon, title: 'Open Till 2 AM', text: 'Your late-night coffee spot in Baner.' },
  { icon: BadgeIndianRupee, title: 'Friendly Prices', text: 'Great coffee starting at just ₹59.' },
]

export default function Story() {
  return (
    <section id="about" className="relative py-28">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-t-full border border-brand-200 sm:-left-6 sm:-top-6" />
          <img
            src={img.lattesPlants(900)}
            alt="Cappuccinos on a café table"
            className="relative h-[26rem] w-full rounded-t-full sm:h-[34rem] object-cover shadow-2xl shadow-brand-900/20"
          />
          <div className="absolute -bottom-10 right-3 w-56 rounded-3xl sm:-right-12 sm:w-60 bg-brand-700 p-6 text-white shadow-2xl sm:-right-12">
            <p className="font-script text-2xl text-brand-200">Our promise</p>
            <p className="mt-1 font-display text-lg leading-snug">Every cup made fresh, exactly how you like it.</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="eyebrow">Our little story</p>
          <h2 className="section-title mt-1">
            A cosy corner for <em className="font-normal text-brand-500">coffee lovers</em>
          </h2>
          <Ornament className="mt-4" />
          <p className="mt-6 text-lg font-light leading-relaxed text-brand-900/70">
            Caffee Delicioso is a neighbourhood café serving coffee, shakes and beverages made the way you like them.
            Grab a quick espresso on your way to work, catch up with friends over a frappé, or unwind with a thick shake
            long after midnight.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="group flex gap-4 rounded-2xl border border-brand-100/70 bg-white/70 p-4 transition hover:border-brand-200 hover:bg-white hover:shadow-lg hover:shadow-brand-900/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white transition group-hover:rotate-6">
                  <f.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-800">{f.title}</h3>
                  <p className="text-sm text-brand-900/60">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
