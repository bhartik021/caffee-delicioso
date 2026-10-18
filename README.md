# Caffee Delicioso

Website for **Caffee Delicioso**, a coffee, shakes and beverages café with two outlets in Baner, Pune. Built with React, Vite and Tailwind CSS.

- **Pan Card Club Road:** Shop 1, Pride Valencia Apartment, Pan Card Club Road, Baner, Pune 411045
- **Near Balewadi High Street:** Survey No. 135, Lane 5, Ram Indu Park, Plot No. 128, Baner, Pune
- **Hours:** every day, 8:45 AM – 2:00 AM
- **Phone / WhatsApp:** +91 75076 57070

## Features

- **Home page** with hero, our story, signature drinks, a polaroid photo strip, live-music and hiring cards, and a Visit Us store locator.
- **Interactive menu** of 42 drinks in 8 categories, with a category sidebar on desktop, photo tabs on mobile, a description and price for each drink, and search across all drinks.
- **Visit Us locator** for both outlets, with a Google Map that follows the selected outlet, directions links, and a live "Open / Closed" status in India time.
- **Events page** for live music nights: an "up next" card, a ticket-style line-up and a performer sign-up form. It shows a "coming soon" state when nothing is scheduled.
- **Careers page** with perks, an expandable list of open roles and an application form. It switches to a "join our talent list" state when there are no openings.
- **WhatsApp forms:** there is no backend. Every form opens WhatsApp with a pre-filled message to the café's number.
- Responsive from phones to desktop, with scroll animations that respect reduced-motion settings.

## Tech stack

- [React 18](https://react.dev/) with [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [React Router 6](https://reactrouter.com/) for the `/`, `/events` and `/careers` pages
- [Lucide](https://lucide.dev/) icons
- Google Fonts: Fraunces (headings), Nunito (body), Caveat (handwritten accents)

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Updating content

All café content lives in `src/data/`, so most updates don't require touching components.

| What to change | File |
|---|---|
| Name, phone, WhatsApp, hours, outlet addresses and map pins | `src/data/info.js` |
| Menu categories, drinks, prices and descriptions | `src/data/menu.js` |
| Live music events | `src/data/events.js` |
| Job openings, perks and hiring steps | `src/data/careers.js` |
| Photos | `src/data/images.js` |

### Publishing events or job openings

`events` and `roles` are currently empty, so the site shows "coming soon" and "not hiring" states. To publish:

- **Events:** copy an entry from `exampleEvents` into `events` in `src/data/events.js` and set the title, weekday (0 = Sunday … 6 = Saturday), time and outlet. For a monthly event, use `monthly: 'last'`.
- **Jobs:** copy an entry from `exampleRoles` into `roles` in `src/data/careers.js`.

The Events page, Careers page and home page cards update automatically.

### Colours

The brand palette is taken from the logo's deep coffee green. It's defined as `brand-50` … `brand-900`, plus `cream` and `sand`, in `tailwind.config.js`.

## Project structure

```
src/
├── assets/        logo
├── components/    Navbar, Footer, Hero, Menu, Visit, Gallery, …
├── data/          editable café content (see above)
├── lib/           small helpers (WhatsApp links, scrolling, page titles)
└── pages/         Home, Events, Careers
```

## SEO

`npm run build` runs `vite build` and then `scripts/seo-build.mjs`. The second step writes a separate static HTML file for each page:

- **Per-page metadata:** title, meta description, canonical link, Open Graph and Twitter tags. Each page shares with the image `public/og-image.jpg` (1200×630).
- **JSON-LD structured data** (schema.org):
  - **Home:** `WebSite`, `Organization`, one `CafeOrCoffeeShop` per outlet (address, map coordinates, phone, opening hours 08:45–02:00, price range) and the full `Menu` with prices in INR.
  - **Events:** a `MusicEvent` for each scheduled night, plus breadcrumbs.
  - **Careers:** a `JobPosting` for each open role, plus breadcrumbs.

  Event and job markup only appears when `events` and `roles` have entries.
- **`sitemap.xml` and `robots.txt`.**
- **`404.html`:** marked `noindex`, so unknown URLs return a real 404 status.

Page titles and descriptions are defined in `src/seo.js`. The same values also update in the browser as visitors move between pages.

**Before going live, set the site's domain.** Canonical links, the sitemap and absolute share-image URLs need it. Either edit `SITE_URL` in `src/seo.js`, or build with:

```bash
VITE_SITE_URL=https://your-domain.com npm run build
```

After deploying:

1. Submit `https://your-domain.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).
2. Check the structured data with Google's [Rich Results Test](https://search.google.com/test/rich-results).
3. Create or claim a **Google Business Profile** for each outlet, using the same name, address and phone number as the site.

## Deployment

The site is static. Build it with `npm run build` and deploy the `dist/` folder.

Each page is its own HTML file (`/`, `/events/`, `/careers/`), so no rewrite rules are needed. Unknown URLs fall through to `404.html`. `vercel.json` turns on clean URLs (no trailing slash) for Vercel; Netlify serves this structure as-is.

## Credits

Photos are from [Unsplash](https://unsplash.com/) and are placeholders until real café photos are added. The logo belongs to Caffee Delicioso.
