import { useEffect, useRef } from 'react'
import { formatPrice } from '../../data/products'
import { waMessages } from '../../config/site'
import { externalLink, waLink } from '../../lib/whatsapp'
import { useLockScroll } from '../../hooks/useLockScroll'
import { Icon, WhatsAppIcon } from '../ui/Icon'
import { CartItem } from './CartItem'
import type { CartApi } from '../../hooks/useCart'
import styles from './Cart.module.css'

interface CartProps {
  open: boolean
  onClose: () => void
  cart: CartApi
}

/**
 * Monta a mensagem do pedido para o WhatsApp: lista os produtos com as
 * quantidades e, quando todos têm preço cadastrado, informa o subtotal.
 * Não há checkout nem pagamento online — o pedido é combinado na conversa.
 */
function buildOrderMessage(cart: CartApi): string {
  const itens = cart.lines
    .map((l) => {
      const valor = l.product.price === null ? 'sob consulta' : formatPrice(l.product.price * l.qty)
      return `• ${l.qty}x ${l.product.name} — ${valor}`
    })
    .join('\n')

  const rodape = cart.hasUnpriced
    ? '\n\nAlguns itens estão sob consulta. Poderia confirmar os valores e a disponibilidade?'
    : `\n\nSubtotal: ${formatPrice(cart.subtotal)}`

  return `${waMessages.orderIntro}\n\n${itens}${rodape}`
}

export function Cart({ open, onClose, cart }: CartProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<Element | null>(null)

  useLockScroll(open)

  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement
    panelRef.current?.focus({ preventScroll: true })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
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

  const vazio = cart.lines.length === 0

  return (
    <div className={styles.overlay}>
      <button type="button" className={styles.backdrop} aria-hidden="true" onClick={onClose} tabIndex={-1} />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="carrinho-titulo"
        tabIndex={-1}
        className={styles.panel}
      >
        <header className={styles.head}>
          <h3 id="carrinho-titulo" className={styles.title}>
            <Icon name="cart" size={18} />
            Seu pedido
            {cart.count > 0 && <span className={styles.count}>{cart.count}</span>}
          </h3>
          <button type="button" onClick={onClose} className={styles.close} aria-label="Fechar carrinho">
            <Icon name="close" size={18} />
          </button>
        </header>

        {vazio ? (
          <div className={styles.empty}>
            <span className={styles.emptyMark} aria-hidden="true" />
            <p className={styles.emptyText}>Seu carrinho está vazio.</p>
            <button type="button" onClick={onClose} className="btn btnGhost">
              Ver produtos
            </button>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {cart.lines.map((line) => (
                <CartItem
                  key={line.product.id}
                  line={line}
                  onSetQty={cart.setQty}
                  onRemove={cart.remove}
                />
              ))}
            </ul>

            <footer className={styles.foot}>
              <div className={styles.subtotal}>
                <span className={styles.subtotalLabel}>Subtotal</span>
                <span className={styles.subtotalValue}>
                  {cart.hasUnpriced && cart.subtotal === 0 ? 'A combinar' : formatPrice(cart.subtotal)}
                </span>
              </div>

              {cart.hasUnpriced && (
                <p className={styles.partial}>
                  O subtotal considera apenas os itens com preço cadastrado. Os demais são
                  confirmados no WhatsApp.
                </p>
              )}

              <a
                href={waLink(buildOrderMessage(cart))}
                {...externalLink}
                className="btn btnPrimary btnBlock"
              >
                <WhatsAppIcon size={17} />
                <span>Finalizar pedido pelo WhatsApp</span>
              </a>

              <button type="button" onClick={cart.clear} className={styles.clear}>
                Esvaziar carrinho
              </button>

              <p className={styles.note}>
                Sem pagamento online. Nenhum dado bancário é solicitado ou armazenado.
              </p>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
