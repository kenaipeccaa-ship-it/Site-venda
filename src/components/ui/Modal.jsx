import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useLockScroll } from '../../hooks/useLockScroll.js'

/**
 * Modal acessível e leve:
 *  - fecha com Esc, clique no fundo e botão;
 *  - trava o scroll da página;
 *  - devolve o foco ao elemento que o abriu;
 *  - mantém o foco preso dentro do diálogo (tab cycle).
 */
export function Modal({ open, onClose, labelledBy, children, maxWidth = '860px' }) {
  const panelRef = useRef(null)
  const lastFocused = useRef(null)

  useLockScroll(open)

  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement

    const panel = panelRef.current
    panel?.focus({ preventScroll: true })

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panel) return

      const focusables = panel.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (lastFocused.current instanceof HTMLElement) {
        lastFocused.current.focus({ preventScroll: true })
      }
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/80 backdrop-blur-sm"
        style={{ animation: 'overlayIn .25s ease both' }}
        tabIndex={-1}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className="relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[24px] border border-line bg-ink-2 shadow-[0_-20px_80px_-30px_rgba(0,0,0,1)] outline-none sm:max-h-[88dvh] sm:rounded-[24px]"
        style={{ maxWidth, animation: 'sheetIn .4s cubic-bezier(.22,1,.36,1) both' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-3.5 right-3.5 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition hover:border-brand-light hover:text-brand-light"
        >
          <X size={18} aria-hidden="true" />
        </button>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">{children}</div>
      </div>
    </div>
  )
}
