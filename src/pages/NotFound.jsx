import { Link } from 'react-router-dom'
import { ArrowRight, Coffee } from 'lucide-react'
import HashLink from '../components/HashLink'
import { Wave } from '../components/PageHero'
import { Bean } from '../components/Ornament'
import useSeo from '../lib/useSeo'

export default function NotFound() {
  useSeo('/404')
  return (
    <section className="bg-beans relative isolate overflow-hidden bg-brand-800 pt-16 text-white">
      <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <Bean className="h-14 w-11 -rotate-12 text-brand-200" />
        <p className="mt-6 font-script text-3xl text-brand-200">Oops — spilled the beans</p>
        <h1 className="mt-1 font-display text-5xl font-semibold tracking-tight sm:text-6xl">Page not found</h1>
        <p className="mt-5 max-w-md text-lg font-light text-white/75">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back to the good stuff.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-light group">
            Back to home <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <HashLink to="/#menu" className="btn-outline">
            <Coffee className="h-4 w-4" /> See the menu
          </HashLink>
        </div>
      </div>
      <Wave className="text-cream" />
    </section>
  )
}
