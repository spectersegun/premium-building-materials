# PREMIUM Building Materials

Standalone Next.js (App Router) site for the Building Materials division of Premier HQ Limited.

**Theme** — `#1a6faa` navy on a light paper ground. Built on the Industry design system: Barlow Condensed headings over Barlow, blueprint corner registration marks, square corners, hairline borders.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Routes

- `/` — home: hero carousel, featured categories, trust bar, sourcing
- `/products` — all 11 categories, add-to-quote per category
- `/projects` — completed projects gallery
- `/about` — mission, vision, value props, sourcing network
- `/contact` — catalogue / quote request form
- `/checkout` — quote list, project details, submit

## Checkout

Add categories to a quote list with project name, site address and target date, submit a quote request. Reference format `BM-xxxxxx`.

No payment gateway is wired. Submitting composes a fully itemised email to
`info@thepremiumcompanies.online` via `mailto:`. To take payment online, replace
`submitOrder()` in `lib/order.js` with a POST to an API route and add a provider —
Paystack or Flutterwave are the usual choices for NGN.

## Structure

```
app/
  layout.js         html shell + metadata
  globals.css       Industry tokens + the three theme classes
  page.js           home
components/
  SiteChrome.js     nav, footer, cart drawer, theme class
  Header.js         sticky header with live cart count
  CartDrawer.js     slide-out cart
  Blueprint.js      Frame / Corners / BpButton — the blueprint primitives
  HeroCarousel.js   cross-fading hero images
lib/
  data.js           all site content and contact details
  cart.js           cart context/provider
  order.js          order submission + reference generation
public/assets/      logo + photography
```

## Cross-site links

`SIBLINGS` in `lib/data.js` holds the links to the other two PREMIUM sites.
They point at placeholder subdomains — edit them to your real deployed URLs.

## Editing content

All copy, categories, contact details and project captions live in `lib/data.js`.
Colours are the `--color-accent*` variables in the theme class at the bottom of
`app/globals.css`.
# premium-building-materials
