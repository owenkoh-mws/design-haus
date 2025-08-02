'use client'

import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true)
      }
    }, options)

    observer.observe(element)

    return () => observer.disconnect()
  }, [hasIntersected, options])

  return { ref, isIntersecting, hasIntersected }
}

export function useScrollAnimation(threshold = 0.1) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin: '50px',
  })

  return { ref, isVisible: hasIntersected }
}

export function useStaggeredAnimation(itemCount: number, delay = 100) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const { ref, hasIntersected } = useIntersectionObserver()

  useEffect(() => {
    if (hasIntersected) {
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => new Set([...prev, i]))
        }, i * delay)
      }
    }
  }, [hasIntersected, itemCount, delay])

  return { ref, visibleItems }
}

export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false)

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  }

  return { isHovered, hoverProps }
}