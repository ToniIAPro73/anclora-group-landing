import { useEffect, useRef, useState } from 'react'
import { getHeaderOffset, syncHeaderOffset } from '../navigation/scroll'

export function useActiveSectionIndex(sectionIds: string[]): number {
  const [activeIndex, setActiveIndex] = useState(0)
  const indexRef = useRef(0)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      const headerOffset = syncHeaderOffset()
      const probeY = headerOffset + (window.innerHeight - getHeaderOffset()) * 0.35
      let nextIndex = 0

      elements.forEach((element, index) => {
        if (element.getBoundingClientRect().top <= probeY) {
          nextIndex = index
        }
      })

      if (nextIndex !== indexRef.current) {
        indexRef.current = nextIndex
        setActiveIndex(nextIndex)
      }
    }

    const scheduleUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [sectionIds])

  return activeIndex
}
