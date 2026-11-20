# Capsure website

Live site: https://capsure.netlify.app (deploys automatically from the `main` branch)

A one-page marketing site for Capsure, plus Privacy and Terms pages.
Built with Astro, which turns these files into a plain, fast website. It's hosted free on Netlify.

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
- **Web address:** Netlify fills it in for search engines and the sitemap, and uses your own domain once it's connected.
- **Enquiry form:** Netlify detects it on the first deploy. Submissions appear in Netlify under *Forms*.

## Putting it live on Netlify (one-time)

1. Log in at netlify.com, then **Add new site → Import an existing project → GitHub**, and pick this repository.
2. Leave the build settings as they are. Netlify reads them from `netlify.toml`.
3. Click **Deploy**. You'll get a free `something.netlify.app` address straight away.
4. **Domain management → Add a domain** to connect your own domain.
5. **Forms → Enable form detection**, then redeploy once. Under **Forms → Notifications**, add an email notification so each enquiry is emailed to you.

## Running it on a computer (optional)

```
npm install
npm run dev      # opens a live preview at http://localhost:4321
npm run build    # makes the finished site in the dist/ folder
```
