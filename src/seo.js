// SEO settings shared by the app (live <head> updates) and the build step (scripts/seo-build.mjs).
// Plain JS only — no JSX — so Node can import it at build time.

// The site's public address, without a trailing slash, e.g. 'https://www.caffeedelicioso.in'.
// Needed for canonical links, the sitemap and absolute share-image URLs.
// You can also set it at build time: VITE_SITE_URL=https://example.com npm run build
const envUrl =
  import.meta.env?.VITE_SITE_URL ?? (typeof process !== 'undefined' ? process.env.VITE_SITE_URL : undefined) ?? ''
export const SITE_URL = envUrl.replace(/\/$/, '')

export const SITE_NAME = 'Caffee Delicioso'
export const OG_IMAGE = '/og-image.jpg'

export const pages = {
  '/': {
    title: 'Caffee Delicioso | Coffee, Shakes & Frappés in Baner, Pune',
    description:
      'Caffee Delicioso — handcrafted coffee, thick shakes, frappés, hot chocolate, iced tea and mojitos at two cafés in Baner, Pune (Pan Card Club Road & near Balewadi High Street). Open daily 8:45 AM – 2 AM.',
  },
  '/events': {
    title: 'Live Music Nights in Baner, Pune | Caffee Delicioso',
    description:
      'Open mics, karaoke, unplugged sets and sing-alongs at Caffee Delicioso, Baner, Pune. See upcoming live music nights or sign up to perform.',
  },
  '/careers': {
    title: 'Careers at Caffee Delicioso | Café Jobs in Baner, Pune',
    description:
      'Work at Caffee Delicioso in Baner, Pune — barista, café server and kitchen roles with training provided. Freshers welcome. See openings or join our talent list.',
  },
  '/404': {
    title: 'Page not found | Caffee Delicioso',
    description: 'This page doesn’t exist. Explore the Caffee Delicioso menu, events and outlets in Baner, Pune.',
    noindex: true,
  },
}

export const absoluteUrl = (path) => (SITE_URL ? `${SITE_URL}${path === '/' ? '/' : path}` : path)
