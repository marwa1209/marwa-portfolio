# Design system

Tokens and small UI primitives used across the portfolio.

- `tokens.ts` — color, type, space, radius, motion
- `index.css` (`@theme`) — Tailwind wiring for those tokens
- `motion.ts` — Framer Motion presets
- `Button`, `Section`, `Container`, `IconBadge`, `SkillChip`

Prefer token-based utilities (`bg-ink`, `text-mist`, `font-display`) over one-off hex values.
