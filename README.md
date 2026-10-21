# Muhammad Ahsan Gulzar — Portfolio

## Fixes

- Connected all existing portfolio sections to the homepage.
- Added contact form, footer, WhatsApp and back-to-top links.
- Replaced starter metadata, corrected canonical URL and added sitemap, robots and favicon.
- Added a static Netlify Forms definition and enabled form detection on the existing project.
- Kept unfinished employment placeholders out of the published timeline.

## Run and deploy

Use Node 24 and pnpm. Run `pnpm install`, then `pnpm dev`.
Build: `pnpm build`; publish directory: `dist/client`.
Push the source to the repository connected to the existing Netlify project, then trigger a production build. This is an SSR application: uploading only dist/client omits the server function. For a local CLI deployment use `netlify deploy --build --prod --site f8a1e0b6-627c-4c88-a9fb-827db118239e` after authenticating. A subsequent Git production build replaces a manual deployment.

## Content

Edit `src/content/site.ts`. Existing experience figures, contact details and images are retained from the supplied source. Confirm the 15-year experience claim before publication. Project examples remain explicitly marked as samples. Employment history and social profile URLs still need your details. No invented client testimonials are published.

Contact messages post to `/__forms.html`; test delivery after deployment in Netlify Forms. Configure email notifications there if desired. Local development deliberately reports that messages cannot be sent.
