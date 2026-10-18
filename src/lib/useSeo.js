import { useEffect } from 'react'
import { pages, absoluteUrl, OG_IMAGE } from '../seo'

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

// Keeps <title>, description, canonical and social tags in sync with the current page.
// The same values are written into static HTML at build time by scripts/seo-build.mjs.
export default function useSeo(path) {
  useEffect(() => {
    const page = pages[path] ?? pages['/']
    const url = absoluteUrl(path)
    document.title = page.title
    setMeta('name', 'description', page.description)
    setMeta('name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow')
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', absoluteUrl(OG_IMAGE))
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    if (!page.noindex) setCanonical(url)
  }, [path])
}
