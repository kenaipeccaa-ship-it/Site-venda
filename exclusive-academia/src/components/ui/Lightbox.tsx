import { useCallback, useEffect, useRef } from 'react'
import { Icon } from './Icon'
import { useLockScroll } from '../../hooks/useLockScroll'
import type { GalleryItem } from '../../config/site'
import styles from './Lightbox.module.css'

interface LightboxProps {
  items: GalleryItem[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

/**
 * Lightbox da galeria: navegação por setas do teclado e por botões,
 * fecha com Esc ou clique no fundo, e mantém o foco preso no diálogo.
 */
export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<Element | null>(null)

  useLockScroll(open)

  const go = useCallback(
    (step: number) => {
      if (index === null) return
      onNavigate((index + step + items.length) % items.length)
    },
    [index, items.length, onNavigate],
  )

  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement
    panelRef.current?.focus({ preventScroll: true })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key === 'ArrowRight') {
        go(1)
        return
      }
      if (event.key === 'ArrowLeft') {
        go(-1)
        return
      }
      if (event.key !== 'Tab') return

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href]',
      )
      if (!focusables || focusables.length === 0) return
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
  }, [open, onClose, go])

  if (index === null) return null
  const item = items[index]

  return (
    <div className={styles.overlay}>
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Fechar galeria"
        onClick={onClose}
        tabIndex={-1}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Galeria da estrutura — ${item.caption}`}
        tabIndex={-1}
        className={styles.panel}
      >
        <header className={styles.bar}>
          <span className={styles.counter}>
            {String(index + 1).padStart(2, '0')}
            <span className={styles.counterTotal}> / {String(items.length).padStart(2, '0')}</span>
          </span>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className={styles.stage}>
          <button
            type="button"
            className={`${styles.nav} ${styles.navPrev}`}
            onClick={() => go(-1)}
            aria-label="Imagem anterior"
          >
            <Icon name="chevronLeft" size={22} />
          </button>

          {/* key força a troca da imagem e reinicia a transição de entrada */}
          <img key={item.id} src={item.image} alt={item.caption} className={styles.image} />

          <button
            type="button"
            className={`${styles.nav} ${styles.navNext}`}
            onClick={() => go(1)}
            aria-label="Próxima imagem"
          >
            <Icon name="chevronRight" size={22} />
          </button>
        </div>

        <p className={styles.caption} aria-live="polite">
          {item.caption}
        </p>
      </div>
    </div>
  )
}
