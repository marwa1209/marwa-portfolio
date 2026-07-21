# Design system

Ink + rose-copper palette. Display type is Fraunces; UI/body is Manrope.

## Tokens

| Layer | Role |
| --- | --- |
| `ink` / `ink-soft` / `ink-muted` | Surfaces |
| `mist` / `mist-soft` / `mist-dim` | Text |
| `rose` / `rose-deep` / `rose-soft` | Primary accent |
| `copper` / `champagne` | Warm secondary accents |
| `line` / `line-strong` | Borders |

## Type

- `text-display` — hero brand
- `text-h1` / `text-h2` / `text-h3` — section titles
- `text-body` / `text-body-sm` — copy
- `text-label` — eyebrows / overlines

## Components

- `Button` — `primary` | `ghost` | `link`
- `Container` / `Section` — layout rhythm
- `IconBadge` / `SkillChip` — small UI marks
- Motion presets in `motion.ts` for Framer Motion

Use Tailwind utilities mapped from `@theme` in `src/index.css`. Prefer tokens over one-off hex values.
