import { useEffect } from 'react'

/** Trava o scroll do body (menu mobile e lightbox), sem "pular" o layout. */
export function useLockScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return
    const { body } = document
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight
    const gap = window.innerWidth - document.documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (gap > 0) body.style.paddingRight = `${gap}px`

    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
    }
  }, [locked])
}
