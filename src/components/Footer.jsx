import { Link, useLocation } from 'react-router-dom'
import { Clock, Heart, MessageCircle, Phone } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { info, outlets } from '../data/info'
import { Wave } from './PageHero'
import HashLink from './HashLink'

// Background behind the footer's top wave = colour of the last section on each page
const waveBg = { '/': 'bg-sand', '/events': 'bg-brand-800' }

export default function Footer() {
  const { pathname } = useLocation()
  return (
    <footer className={waveBg[pathname] ?? 'bg-cream'}>
      <Wave className="text-brand-700" />
      <div className="bg-brand-700 pb-8 pt-6 text-brand-50/80">
        <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-14 w-14 rounded-full bg-white object-contain p-0.5" />
              <div>
                <p className="font-display text-xl font-semibold text-white">{info.name}</p>
                <p className="font-script text-xl text-brand-200">{info.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm">Freshly brewed coffee, thick shakes and cool mojitos — open till 2 AM in Baner, Pune.</p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><HashLink to="/#menu" className="hover:text-white">Our Menu</HashLink></li>
              <li><Link to="/events" className="hover:text-white">Live Music Nights</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><HashLink to="/#visit" className="hover:text-white">Find Us</HashLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white">Our Outlets</h4>
            <ul className="mt-4 space-y-4 text-sm">
              {outlets.map((o) => (
                <li key={o.id}>
                  <p className="font-medium text-white">{o.name}</p>
                  <p>{o.address}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`tel:${info.phoneRaw}`} className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 text-brand-200" strokeWidth={1.75} /> {info.phone}
                </a>
              </li>
              <li>
                <a href={info.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                  <MessageCircle className="h-4 w-4 text-brand-200" strokeWidth={1.75} /> WhatsApp us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-200" strokeWidth={1.75} /> {info.hoursText}, every day
              </li>
            </ul>
          </div>
        </div>

        <div className="container-x mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {info.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-script text-lg text-brand-200">
            Brewed with love in Pune <Heart className="h-4 w-4 fill-brand-200" strokeWidth={0} />
          </p>
        </div>
      </div>
    </footer>
  )
}
