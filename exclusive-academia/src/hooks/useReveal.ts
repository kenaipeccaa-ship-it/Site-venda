import { useEffect } from 'react'

/**
 * Aplica a classe de "visível" nos elementos marcados com `data-reveal`
 * quando eles entram na viewport. IntersectionObserver, sem dependências.
 */
export function useReveal(visibleClass: string): void {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])'),
    )
    if (nodes.length === 0) return

    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => {
        n.classList.add(visibleClass)
        n.dataset.revealed = 'true'
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.classList.add(visibleClass)
          el.dataset.revealed = 'true'
          observer.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  })
}
