import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio)
        })

        let nextActive = sectionIds[0] ?? ''
        let highestRatio = 0

        sectionIds.forEach((id) => {
          const ratio = ratios.get(id) ?? 0
          if (ratio > highestRatio) {
            highestRatio = ratio
            nextActive = id
          }
        })

        if (highestRatio > 0) {
          setActiveSection(nextActive)
        }
      },
      {
        rootMargin: '-32% 0px -48% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

export function sectionHrefToId(href: string) {
  return href.replace('#', '')
}
