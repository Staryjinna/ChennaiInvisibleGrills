# Chennai Invisible Grills

Mobile-first marketing site (Next.js App Router + Tailwind v4, static export, Vercel-ready).

```bash
npm install
npm run dev      # local dev
npm run build    # static export to ./out
```

## Before going live
- `src/lib/site.ts`: business name, domain (`NEXT_PUBLIC_SITE_URL`), full address + PIN, email, warranty. Empty fields are hidden.
- `src/data/testimonials.ts`: starts empty; the section hides itself. Add real reviews only.
- `src/data/gallery.ts` + `public/gallery/`: add your own installation photos (replaces the "YOUR PHOTO" placeholders).
- Service copy and FAQs live in `src/lib/services.ts`. Specs you haven't confirmed (cable grade/gap, warranty, net life, hanger load, prices) were deliberately left out; add them once verified.
- Stock images come from Unsplash (see `src/lib/services.ts`); swap for your own where possible.
