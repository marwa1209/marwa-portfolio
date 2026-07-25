'use client'

import { motion } from 'framer-motion'
import { ProfileImage } from '@/components/ProfileImage'
import { scaleIn } from '@/design-system/motion'

export function HeroAvatar() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="show"
      className="relative mx-auto w-fit lg:mx-0"
    >
      <motion.div
        className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-br from-sage/25 via-transparent to-terracotta/25 blur-md"
        animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.98, 1.03, 0.98] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute -inset-2 rounded-full border border-dashed border-sage/35"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ProfileImage size="lg" priority className="relative z-10" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute -bottom-2 -end-2 z-20 rounded-full border border-line bg-ink-soft px-3 py-1 text-xs font-semibold text-sage-soft shadow-soft"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        Available
      </motion.div>
    </motion.div>
  )
}
