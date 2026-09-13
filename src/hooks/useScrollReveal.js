import { useEffect } from 'react'

/**
 * Ativa a animação de entrada dos elementos marcados com a classe `.reveal`.
 * Usa IntersectionObserver (leve, sem dependências) e respeita
 * `prefers-reduced-motion` via CSS.
 */
export function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!nodes.length) return

    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  })
}
