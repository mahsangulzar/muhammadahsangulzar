# Build Plan — Muhammad Ahsan Gulzar Portfolio

## Done
1. Brand theme (navy / black / white / electric blue, teal for healthcare), fonts, animation utilities — `src/styles.css`
2. AI imagery generated and saved in `public/img/` (enhanced portrait preserving real face, hero background, workspace, medical billing, six portfolio thumbnails)
3. Editable content file — `src/content/site.ts` (profile, services, projects, skills, experience placeholders, testimonials, social links)
4. Section components in `src/components/site/`: Navbar (desktop + mobile sheet), Hero, About, MarketingServices, BillingServices, Portfolio (filters), Skills, Experience timeline, Testimonials

## Remaining
5. Contact section + Netlify Forms (static skeleton `public/contact-form.html`, AJAX to that path, honeypot, honest success/error), then run the netlify-forms `enable.cjs` script
6. Footer, floating WhatsApp button, back-to-top button
7. Assemble all sections in `src/routes/index.tsx` and call `useScrollReveal()`
8. SEO: titles/meta, Open Graph, canonical, Person JSON-LD in `__root.tsx`; favicon, `robots.txt`, `sitemap.xml`; brand the 404 page; load Sora + Manrope fonts
9. Verify locally (nav, links, WhatsApp URL `wa.me/17323143417`, form states, reduced motion) and typecheck/lint
