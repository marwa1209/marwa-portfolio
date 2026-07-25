# Marwa Mahmoud — Portfolio

Personal frontend portfolio for [Marwa Mahmoud Elsayed](https://www.linkedin.com/in/marwa-mahmoud2).

I built this to showcase production work from **Blue Sky** and **Sourcya**, plus a clear view of how I design, ship, and localize UI.

**Live focus:** Angular · React · Next.js · TypeScript · bilingual EN/AR (RTL)

## Features

- Dark / light theme with saved preference
- English / Arabic with full RTL support
- Project gallery filtered by company (Blue Sky / Sourcya)
- Responsive layout, Framer Motion transitions, and a small design-token system

## Stack

| Layer | Choice |
| --- | --- |
| App | **Next.js 15** (App Router, SSR) + React 19 + TypeScript |
| Styles | Tailwind CSS v4 |
| Motion | Framer Motion |
| Icons | lucide-react |
| Package manager | pnpm |

## Getting started

Requirements: Node.js 20+ and pnpm 9+.

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

```bash
pnpm build
pnpm start
```

Deploy on **Vercel** — framework auto-detects Next.js (no `dist` output folder).

## Project structure

```text
app/              # Next.js layout, page, metadata, sitemap
src/
  components/     # Page sections
  data/           # Profile + project content
  design-system/  # Tokens, motion, UI primitives
  i18n/           # EN / AR messages + provider
  theme/          # Dark / light provider
```

## Contact

- Email: marwamahmoud832001@gmail.com
- LinkedIn: [marwa-mahmoud2](https://www.linkedin.com/in/marwa-mahmoud2)
- GitHub: [marwa1209](https://github.com/marwa1209)
- Location: Alexandria, Egypt

## License

This is a personal portfolio. Feel free to look through the code; ask before reusing substantial parts.
