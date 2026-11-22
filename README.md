# Capsure website

Live site: https://capsure.wandeiyanda1.workers.dev, hosted on Cloudflare (every change pushed to the `main` branch goes live automatically in about a minute)

A one-page marketing site for Capsure, plus Privacy and Terms pages.
Built with Astro, which turns these files into a plain, fast website. It's hosted free on Cloudflare Pages.

## The one file you edit

**`src/content.js`** holds every word, price, stat, case study, FAQ answer and contact detail.
To change the site, ask Claude something like *"In content.js, change the Response Engine price to £1,750"*.

Anything in `[SQUARE BRACKETS]` is a placeholder. On the page it's **highlighted yellow**, so you can see at a glance what still needs filling in.

| To change… | Where |
|---|---|
| Words, prices, stats, FAQ, contact details, Cal.com link | `src/content.js` |
| Audio clips | Replace the files in `public/audio/` (keep the same names, or update `content.js`) |
| Colours | The top of `src/styles/global.css` (`--accent` is the green) |
| Privacy Policy / Terms text | `src/pages/privacy.astro`, `src/pages/terms.astro` |
| Social share image | Edit `scripts/og-image.html`, then run `node scripts/make-images.cjs` |

## Things that switch on automatically

- **Booking calendar:** appears as soon as `calLink` in `content.js` is a real Cal.com link.
- **Analytics + cookie banner:** appear as soon as `plausibleDomain` in `content.js` is filled in. Analytics only loads after a visitor clicks "Accept".
- **Web address:** set `url` in `content.js` to your live address (e.g. your own domain) so search engines and the sitemap use it.
- **Enquiry form:** each enquiry is emailed to you by Web3Forms (free, 250 a month), using the key in `content.js`.

## Hosting (Cloudflare Pages)

The site is connected to this GitHub repository in Cloudflare (*Workers & Pages*).
Build command `npm run build`, output folder `dist`. Every push to `main` goes live.
Security headers live in `public/_headers`.

## Running it on a computer (optional)

```
npm install
npm run dev      # opens a live preview at http://localhost:4321
npm run build    # makes the finished site in the dist/ folder
```
