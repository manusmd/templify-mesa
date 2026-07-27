# Mesa

A high-quality restaurant website template — part of the **Templify** collection.
Built with **Next.js 16** (App Router) and **GSAP**. A wood-fired pizzeria in
Kreuzberg, Berlin.

- Editorial dark design · Bodoni Moda + Archivo, ember accent
- Split hero with stats, an interactive **tabbed menu**, story, and visit sections
- GSAP fade-up reveals — reduced-motion & no-JS safe
- Content-driven: the whole site renders from one typed object
- German **Impressum** and **Datenschutzerklärung** placeholder pages

---

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

The whole site renders from one file: **`lib/content.ts`** (a typed `content`
object — brand, hero, menu categories/dishes, story, visit, hours, footer).
Change it and the site updates. The `/impressum` and `/datenschutz` pages hold
placeholder legal text (every `[ … ]` marks a value to fill in) — complete and
have them legally reviewed before going live.

## Deploy to Vercel

Push this repo and import it on Vercel — it's a static Next.js site, nothing to
configure.

## Structure

```
lib/content.ts         Site content (typed, source of truth)
app/page.tsx           The restaurant site (server component)
app/components/        Sections, MenuTabs (client), Placeholder, Motion, Legal
app/impressum/         Impressum placeholder
app/datenschutz/       Datenschutzerklärung placeholder
```
