import { useEffect } from 'react'

/**
 * Bloqueia o scroll do body enquanto um modal/menu está aberto,
 * compensando a largura da barra de rolagem para não “pular” o layout.
 */
export function useLockScroll(locked) {
  useEffect(() => {
    if (!locked) return
    const { body } = document
    const previousOverflow = body.style.overflow
    const previousPadding = body.style.paddingRight
    const gap = window.innerWidth - document.documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (gap > 0) body.style.paddingRight = `${gap}px`

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPadding
    }
  }, [locked])
}
