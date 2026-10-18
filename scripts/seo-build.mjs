// Runs after `vite build` (see package.json). For every page it writes static HTML with the right
// <title>, description, canonical, social tags and JSON-LD structured data, so search engines and
// link previews see them without running JavaScript. Also writes sitemap.xml, robots.txt and 404.html.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const { SITE_URL, SITE_NAME, OG_IMAGE, pages, absoluteUrl } = await import('../src/seo.js')
const { info, outlets, directionsUrl } = await import('../src/data/info.js')
const { menu } = await import('../src/data/menu.js')
const { events, nextOccurrence } = await import('../src/data/events.js')
const { roles } = await import('../src/data/careers.js')

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const template = readFileSync(dist + 'index.html', 'utf8')
// dist/index.html is overwritten below, so this step must always follow a fresh `vite build`.
if (!template.includes('<!--seo:jsonld-->')) {
  console.error('SEO step: dist/index.html was already processed — run `npm run build` (vite build first).')
  process.exit(1)
}
const today = new Date().toISOString().slice(0, 10)

if (!SITE_URL) {
  console.warn('\n⚠  SITE_URL is not set (src/seo.js or VITE_SITE_URL) — canonical links, sitemap and absolute share URLs are skipped.\n')
}

// ---------- Structured data ----------
const home = absoluteUrl('/')
const orgId = `${home}#organization`
const menuId = `${home}#menu`
const prices = menu.flatMap((c) => c.items.map((i) => i.price))
const priceRange = `₹${Math.min(...prices)}–₹${Math.max(...prices)}`
const everyDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const postalAddress = (o) => ({
  '@type': 'PostalAddress',
  streetAddress: o.address.replace(/,?\s*Pune.*$/, ''),
  addressLocality: 'Pune',
  addressRegion: 'Maharashtra',
  ...(o.address.match(/\b\d{6}\b/) ? { postalCode: o.address.match(/\b\d{6}\b/)[0] } : {}),
  addressCountry: 'IN',
})
const place = (o) => ({
  '@type': 'Place',
  name: `${SITE_NAME} – ${o.name}`,
  address: postalAddress(o),
  geo: { '@type': 'GeoCoordinates', latitude: o.coords[0], longitude: o.coords[1] },
})

const organization = {
  '@type': 'Organization',
  '@id': orgId,
  name: SITE_NAME,
  url: home,
  logo: absoluteUrl('/icon-512.png'),
  image: absoluteUrl(OG_IMAGE),
  telephone: info.phoneRaw,
  contactPoint: { '@type': 'ContactPoint', telephone: info.phoneRaw, contactType: 'customer service', areaServed: 'IN' },
}

const shops = outlets.map((o) => ({
  '@type': 'CafeOrCoffeeShop',
  '@id': `${home}#${o.id}`,
  name: `${SITE_NAME} – ${o.name}`,
  url: absoluteUrl('/'),
  image: absoluteUrl(OG_IMAGE),
  telephone: info.phoneRaw,
  priceRange,
  servesCuisine: ['Coffee', 'Beverages', 'Shakes', 'Desserts'],
  acceptsReservations: false,
  address: postalAddress(o),
  geo: { '@type': 'GeoCoordinates', latitude: o.coords[0], longitude: o.coords[1] },
  hasMap: directionsUrl(o.coords),
  // Open 8:45 AM until 2:00 AM the next morning, every day
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: everyDay, opens: '08:45', closes: '02:00' }],
  hasMenu: { '@id': menuId },
  parentOrganization: { '@id': orgId },
}))

const menuLd = {
  '@type': 'Menu',
  '@id': menuId,
  name: `${SITE_NAME} Menu`,
  url: absoluteUrl('/') + '#menu',
  inLanguage: 'en',
  hasMenuSection: menu.map((c) => ({
    '@type': 'MenuSection',
    name: c.name,
    description: c.tagline,
    hasMenuItem: c.items.map((i) => ({
      '@type': 'MenuItem',
      name: i.name,
      ...(i.desc ? { description: i.desc } : {}),
      offers: { '@type': 'Offer', price: String(i.price), priceCurrency: 'INR' },
    })),
  })),
}

const breadcrumb = (name, path) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: home },
    { '@type': 'ListItem', position: 2, name, item: absoluteUrl(path) },
  ],
})

// India Standard Time (+05:30) ISO string for a local Date
const istIso = (d) => {
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:00+05:30`
}
const outletsFor = (where) => {
  const match = outlets.filter((o) => where?.includes(o.name))
  return match.length ? match : outlets
}

const musicEvents = events
  .map((e) => ({ e, next: nextOccurrence(e) }))
  .filter(({ next }) => next)
  .map(({ e, next }) => ({
    '@type': 'MusicEvent',
    name: `${e.title} at ${SITE_NAME}`,
    description: e.text,
    startDate: istIso(next),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: outletsFor(e.where).map(place),
    organizer: { '@id': orgId },
    image: absoluteUrl(OG_IMAGE),
    isAccessibleForFree: true,
  }))

const validThrough = new Date(Date.now() + 60 * 864e5).toISOString().slice(0, 10)
const jobPostings = roles.map((r) => ({
  '@type': 'JobPosting',
  title: r.title,
  description: `<p>${r.summary}</p><p><strong>What you'll do</strong></p><ul>${r.duties.map((d) => `<li>${d}</li>`).join('')}</ul><p><strong>You're a great fit if</strong></p><ul>${r.fit.map((d) => `<li>${d}</li>`).join('')}</ul>`,
  datePosted: today,
  validThrough,
  employmentType: [/full/i.test(r.type) && 'FULL_TIME', /part/i.test(r.type) && 'PART_TIME'].filter(Boolean),
  hiringOrganization: { '@type': 'Organization', name: SITE_NAME, sameAs: home, logo: absoluteUrl('/icon-512.png') },
  jobLocation: outlets.map((o) => ({ '@type': 'Place', address: postalAddress(o) })),
}))

const graphs = {
  '/': [{ '@type': 'WebSite', '@id': `${home}#website`, name: SITE_NAME, url: home, inLanguage: 'en-IN', publisher: { '@id': orgId } }, organization, ...shops, menuLd],
  '/events': [organization, breadcrumb('Live Music Nights', '/events'), ...musicEvents],
  '/careers': [organization, breadcrumb('Careers', '/careers'), ...jobPostings],
  '/404': [],
}

// ---------- HTML ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const setTag = (html, re, value) => {
  if (!re.test(html)) throw new Error(`SEO tag not found in template: ${re}`)
  return html.replace(re, (_, pre, post) => `${pre}${esc(value)}${post}`)
}

function render(path) {
  const page = pages[path]
  const url = absoluteUrl(path)
  const image = absoluteUrl(OG_IMAGE)
  let html = template
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
  html = setTag(html, /(<meta name="description" content=")[^"]*(")/, page.description)
  html = setTag(html, /(<meta name="robots" content=")[^"]*(")/, page.noindex ? 'noindex, follow' : 'index, follow')
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, page.title)
  html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, page.description)
  html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, url)
  html = setTag(html, /(<meta property="og:image" content=")[^"]*(")/, image)
  html = setTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, page.title)
  html = setTag(html, /(<meta name="twitter:description" content=")[^"]*(")/, page.description)
  html = setTag(html, /(<meta name="twitter:image" content=")[^"]*(")/, image)
  html = html.replace('<!--seo:canonical-->', SITE_URL && !page.noindex ? `<link rel="canonical" href="${esc(url)}" />` : '')
  const graph = graphs[path]
  const jsonLd = graph.length
    ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`
    : ''
  return html.replace('<!--seo:jsonld-->', jsonLd)
}

const write = (file, content) => {
  mkdirSync(dirname(dist + file), { recursive: true })
  writeFileSync(dist + file, content)
}

write('index.html', render('/'))
write('events/index.html', render('/events'))
write('careers/index.html', render('/careers'))
write('404.html', render('/404'))

const indexable = Object.keys(pages).filter((p) => !pages[p].noindex)
if (SITE_URL) {
  write(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
      .map((p) => `  <url><loc>${absoluteUrl(p)}</loc><lastmod>${today}</lastmod></url>`)
      .join('\n')}\n</urlset>\n`,
  )
}
write('robots.txt', `User-agent: *\nAllow: /\n${SITE_URL ? `\nSitemap: ${SITE_URL}/sitemap.xml\n` : ''}`)

console.log(
  `SEO: wrote ${indexable.length} pages + 404.html, robots.txt${SITE_URL ? ', sitemap.xml' : ''} · JSON-LD: ${shops.length} cafés, ${menuLd.hasMenuSection.length} menu sections, ${musicEvents.length} events, ${jobPostings.length} job postings`,
)
