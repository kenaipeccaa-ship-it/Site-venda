import { categoryLabel, formatPrice, type Product } from '../../data/products'
import { Figure } from '../ui/Figure'
import { Icon } from '../ui/Icon'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
  onView: (product: Product) => void
  onBuy: (product: Product) => void
  inCart: boolean
}

export function ProductCard({ product, onView, onBuy, inCart }: ProductCardProps) {
  const { name, category, image, price, available } = product

  return (
    <article className={`${styles.card} ${available ? '' : styles.off}`}>
      <div className={styles.media}>
        {/* // SUBSTITUIR PELA FOTO REAL DO PRODUTO — public/images/store/ */}
        <Figure
          src={image}
          alt={name}
          className={styles.figure}
          imgClassName={styles.img}
          sizes="(max-width: 640px) 50vw, (max-width: 1080px) 33vw, 25vw"
        />
        <span className={styles.tag}>{categoryLabel(category)}</span>
        {!available && <span className={styles.off_badge}>Indisponível</span>}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>

        <p className={`${styles.price} ${price === null ? styles.priceAsk : ''}`}>
          {formatPrice(price)}
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={() => onView(product)} className={styles.view}>
            Ver produto
          </button>

          <button
            type="button"
            onClick={() => onBuy(product)}
            disabled={!available}
            className={styles.buy}
            aria-label={
              available ? `Adicionar ${name} ao carrinho` : `${name} está indisponível`
            }
          >
            <Icon name={inCart ? 'check' : 'cart'} size={15} strokeWidth={2} />
            <span>{available ? (inCart ? 'No carrinho' : 'Comprar') : 'Indisponível'}</span>
          </button>
        </div>
      </div>
    </article>
  )
}
