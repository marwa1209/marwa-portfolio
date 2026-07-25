import type { Variants } from 'framer-motion'
import { tokens } from './tokens'

const { motion } = tokens

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motion.base, ease: motion.easeOut },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: motion.base, ease: motion.easeOut },
  },
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: motion.slow, ease: motion.easeOut },
  },
}

export const floatY: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motion.slow, ease: motion.easeOut },
  },
}

export const slideIn: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: motion.slow, ease: motion.easeOut },
  },
}

export const pillPop: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: motion.base, ease: motion.easeOut },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: motion.slow, ease: motion.easeOut },
  },
}
