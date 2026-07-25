# Marwa Mahmoud — Frontend Engineer Portfolio

**Live site:** [marwa-portfolio-roan.vercel.app](https://marwa-portfolio-roan.vercel.app)

Personal frontend portfolio for [Marwa Mahmoud](https://www.linkedin.com/in/marwa-mahmoud2) — Frontend Engineer in Alexandria, Egypt.

Production TypeScript UIs with **Angular**, **React**, and **Next.js**. Bilingual **English / Arabic (RTL)**, SSR, SEO, and Figma-to-code.

I built this to showcase work from **Blue Sky** and **Sourcya**.

## Links

| | |
| --- | --- |
| **Portfolio** | https://marwa-portfolio-roan.vercel.app |
| **LinkedIn** | https://www.linkedin.com/in/marwa-mahmoud2 |
| **GitHub** | https://github.com/marwa1209 |
| **Email** | marwamahmoud832001@gmail.com |

## Features

- Dark / light theme with saved preference
- English / Arabic with full RTL support
- Project gallery filtered by company (Blue Sky / Sourcya)
- Responsive layout, Framer Motion transitions, and a small design-token system
- Server-rendered Next.js with sitemap, robots.txt, and structured data (JSON-LD)

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

Deploy on **Vercel** — framework preset: Next.js (`vercel.json` included).

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

## License

This is a personal portfolio. Feel free to look through the code; ask before reusing substantial parts.
