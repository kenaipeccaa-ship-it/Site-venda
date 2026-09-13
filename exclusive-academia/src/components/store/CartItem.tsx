import { formatPrice } from '../../data/products'
import type { CartLine } from '../../hooks/useCart'
import { Figure } from '../ui/Figure'
import { Icon } from '../ui/Icon'
import styles from './CartItem.module.css'

interface CartItemProps {
  line: CartLine
  onSetQty: (id: string, qty: number) => void
  onRemove: (id: string) => void
}

export function CartItem({ line, onSetQty, onRemove }: CartItemProps) {
  const { product, qty } = line
  const lineTotal = product.price === null ? null : product.price * qty

  return (
    <li className={styles.item}>
      <Figure src={product.image} alt={product.name} className={styles.thumb} />

      <div className={styles.info}>
        <p className={styles.name}>{product.name}</p>
        <p className={`${styles.unit} ${product.price === null ? styles.unitAsk : ''}`}>
          {formatPrice(product.price)}
        </p>

        <div className={styles.qtyRow}>
          <div className={styles.qty}>
            <button
              type="button"
              onClick={() => onSetQty(product.id, qty - 1)}
              className={styles.qtyBtn}
              aria-label={`Diminuir quantidade de ${product.name}`}
            >
              <Icon name="minus" size={14} strokeWidth={2.2} />
            </button>

            <span className={styles.qtyValue} aria-live="polite">
              {qty}
            </span>

            <button
              type="button"
              onClick={() => onSetQty(product.id, qty + 1)}
              className={styles.qtyBtn}
              aria-label={`Aumentar quantidade de ${product.name}`}
            >
              <Icon name="plus" size={14} strokeWidth={2.2} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => onRemove(product.id)}
            className={styles.remove}
            aria-label={`Remover ${product.name} do carrinho`}
          >
            <Icon name="trash" size={15} />
          </button>
        </div>
      </div>

      <p className={styles.total}>{lineTotal === null ? '—' : formatPrice(lineTotal)}</p>
    </li>
  )
}
