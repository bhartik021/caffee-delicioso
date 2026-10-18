import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { info } from '../data/info'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Scroll to #section when navigating to a hash link, otherwise to the top of a new page.
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      <a
        href={info.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl shadow-brand-900/30 ring-4 ring-white/70 transition hover:scale-105 hover:bg-brand-700"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 01-4.84-1.33l-.35-.21-3.6.94.96-3.5-.23-.36a9.46 9.46 0 01-1.45-5.04c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.72 2.79a9.43 9.43 0 012.78 6.72c0 5.24-4.27 9.5-9.5 9.5zm8.1-17.6A11.39 11.39 0 0012.04.5C5.73.5.6 5.63.6 11.94c0 2.02.53 3.98 1.53 5.72L.5 23.5l5.98-1.57a11.42 11.42 0 005.46 1.39h.01c6.3 0 11.44-5.13 11.44-11.44 0-3.06-1.19-5.93-3.35-8.09z" />
        </svg>
      </a>
    </>
  )
}
