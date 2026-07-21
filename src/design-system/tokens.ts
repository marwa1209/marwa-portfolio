/**
 * Design system tokens — Marwa Portfolio
 * Source of truth for color, type, space, radius, elevation, motion.
 * Consumed by Tailwind via @theme in index.css.
 */
export const tokens = {
  color: {
    ink: '#080B14',
    inkSoft: '#101628',
    inkMuted: '#1A2238',
    mist: '#E8E4DC',
    mistSoft: '#C9C3B8',
    mistDim: '#8B8478',
    rose: '#C45C6A',
    roseDeep: '#9E3F4D',
    roseSoft: '#E8A0A8',
    copper: '#B8734A',
    champagne: '#E6D5B8',
    champagneBright: '#F2E6D0',
    line: 'rgba(232, 228, 220, 0.12)',
    lineStrong: 'rgba(232, 228, 220, 0.22)',
    focus: '#E6D5B8',
  },
  font: {
    display: '"Fraunces", Georgia, serif',
    body: '"Manrope", system-ui, sans-serif',
  },
  type: {
    display: { size: 'clamp(3.25rem, 9vw, 7.5rem)', weight: 600, line: 0.92, tracking: '-0.03em' },
    h1: { size: 'clamp(2.25rem, 5vw, 3.75rem)', weight: 600, line: 1.05, tracking: '-0.02em' },
    h2: { size: 'clamp(1.75rem, 3.5vw, 2.5rem)', weight: 600, line: 1.15, tracking: '-0.015em' },
    h3: { size: '1.25rem', weight: 600, line: 1.3, tracking: '-0.01em' },
    body: { size: '1.0625rem', weight: 400, line: 1.7, tracking: '0' },
    bodySm: { size: '0.9375rem', weight: 400, line: 1.65, tracking: '0.01em' },
    label: { size: '0.75rem', weight: 600, line: 1.2, tracking: '0.14em' },
  },
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.5rem',
    6: '2rem',
    7: '3rem',
    8: '4rem',
    9: '6rem',
    10: '8rem',
  },
  radius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1.25rem',
    xl: '1.75rem',
    full: '9999px',
  },
  shadow: {
    soft: '0 18px 50px rgba(0, 0, 0, 0.35)',
    glow: '0 0 80px rgba(196, 92, 106, 0.18)',
  },
  motion: {
    fast: 0.22,
    base: 0.45,
    slow: 0.8,
    easeOut: [0.22, 1, 0.36, 1] as const,
    easeInOut: [0.65, 0, 0.35, 1] as const,
  },
  layout: {
    max: '72rem',
    gutter: 'clamp(1.25rem, 4vw, 2.5rem)',
  },
} as const

export type Tokens = typeof tokens
