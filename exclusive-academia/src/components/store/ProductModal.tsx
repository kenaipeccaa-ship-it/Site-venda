import { useEffect, useRef } from 'react'
import { categoryLabel, formatPrice, type Product } from '../../data/products'
import { waMessages } from '../../config/site'
import { externalLink, waLink } from '../../lib/whatsapp'
import { useLockScroll } from '../../hooks/useLockScroll'
import { Figure } from '../ui/Figure'
import { Icon, WhatsAppIcon } from '../ui/Icon'
import styles from './ProductModal.module.css'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
  onAdd: (product: Product) => void
  inCart: boolean
}

export function ProductModal({ product, onClose, onAdd, inCart }: ProductModalProps) {
  const open = product !== null
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<Element | null>(null)

  useLockScroll(open)

  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement
    panelRef.current?.focus({ preventScroll: true })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
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
  }, [open, onClose])

  if (!product) return null

  return (
    <div className={styles.overlay}>
      <button type="button" className={styles.backdrop} aria-hidden="true" onClick={onClose} tabIndex={-1} />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="produto-titulo"
        tabIndex={-1}
        className={styles.panel}
      >
        <button type="button" onClick={onClose} className={styles.close} aria-label="Fechar produto">
          <Icon name="close" size={18} />
        </button>

        <div className={styles.grid}>
          {/* // SUBSTITUIR PELA FOTO REAL DO PRODUTO — public/images/store/ */}
          <Figure src={product.image} alt={product.name} className={styles.media} />

          <div className={styles.info}>
            <span className={styles.tag}>{categoryLabel(product.category)}</span>

            <h3 id="produto-titulo" className={styles.name}>
              {product.name}
            </h3>

            <p className={`${styles.price} ${product.price === null ? styles.priceAsk : ''}`}>
              {formatPrice(product.price)}
            </p>

            <p className={styles.desc}>{product.description}</p>

            <p className={`${styles.stock} ${product.available ? styles.inStock : styles.outStock}`}>
              <span className={styles.dot} aria-hidden="true" />
              {product.available ? 'Disponível na loja' : 'Indisponível no momento'}
            </p>

            <div className={styles.actions}>
              <a
                href={waLink(waMessages.product(product.name))}
                {...externalLink}
                className={`btn btnPrimary ${styles.wa} ${product.available ? '' : styles.waOff}`}
                aria-disabled={product.available ? undefined : 'true'}
                onClick={(e) => {
                  if (!product.available) e.preventDefault()
                }}
              >
                <WhatsAppIcon size={17} />
                <span>Comprar pelo WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onAdd(product)}
                disabled={!product.available}
                className={`btn btnGhost ${styles.addBtn}`}
              >
                <Icon name={inCart ? 'check' : 'cart'} size={16} strokeWidth={2} />
                <span>{inCart ? 'No carrinho' : 'Adicionar ao carrinho'}</span>
              </button>
            </div>

            <p className={styles.note}>
              O pedido é combinado pelo WhatsApp. Não há pagamento online nesta página.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
