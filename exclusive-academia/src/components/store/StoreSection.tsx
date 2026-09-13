import { useCallback, useMemo, useState } from 'react'
import { categories, products, type Product } from '../../data/products'
import { waMessages } from '../../config/site'
import { externalLink, waLink } from '../../lib/whatsapp'
import { useCart } from '../../hooks/useCart'
import { Icon, WhatsAppIcon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { ProductFilters } from './ProductFilters'
import { SearchProducts } from './SearchProducts'
import { ProductCard } from './ProductCard'
import { ProductModal } from './ProductModal'
import { Cart } from './Cart'
import styles from './StoreSection.module.css'

/** Normaliza para busca: minúsculas e sem acentos. */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

export function StoreSection() {
  const [category, setCategory] = useState('todos')
  const [query, setQuery] = useState('')
  const [openProduct, setOpenProduct] = useState<Product | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const cart = useCart()

  /* A busca é aplicada primeiro: os contadores dos filtros refletem
     o que realmente existe dentro do termo pesquisado. */
  const searched = useMemo(() => {
    const termo = normalize(query.trim())
    if (!termo) return products
    return products.filter((p) =>
      normalize(`${p.name} ${p.category} ${p.description}`).includes(termo),
    )
  }, [query])

  const counts = useMemo(() => {
    const acc: Record<string, number> = { todos: searched.length }
    for (const c of categories) acc[c.id] = 0
    for (const p of searched) acc[p.category] = (acc[p.category] ?? 0) + 1
    return acc
  }, [searched])

  const visible = useMemo(
    () => (category === 'todos' ? searched : searched.filter((p) => p.category === category)),
    [searched, category],
  )

  const addToCart = useCallback(
    (product: Product) => {
      cart.add(product)
      setCartOpen(true)
    },
    [cart],
  )

  const resetFilters = useCallback(() => {
    setQuery('')
    setCategory('todos')
  }, [])

  return (
    <section id="loja" aria-labelledby="store-title" className={`section ${styles.section}`}>
      <div className="shell">
        {/* ---------- Destaque da loja ---------- */}
        <Reveal className="sectionHead">
          <span className="sectionIndex">09</span>
          <span className="sectionLabel">Exclusive Store</span>
          <span className="sectionRule" aria-hidden="true" />
        </Reveal>

        <div className={styles.intro}>
          <Reveal as="h2" delay={60} id="store-title" className={`display titleLg ${styles.title}`}>
            Seu treino.
            <br />
            Seu suporte.
            <br />
            Sua <span className="accentText">suplementação.</span>
          </Reveal>

          <Reveal delay={120} className={styles.introText}>
            <p className={styles.subtitle}>Suplementação para acompanhar sua rotina de treino.</p>
            <p className={styles.lead}>
              A Exclusive Store é a loja da academia. Os produtos são retirados na recepção e o
              pedido é combinado pelo WhatsApp — sem pagamento online.
            </p>
            <a href={waLink(waMessages.store)} {...externalLink} className="btn btnGhost">
              <WhatsAppIcon size={17} />
              <span>Falar com a loja</span>
            </a>
          </Reveal>
        </div>

        {/* ---------- Barra de ferramentas ---------- */}
        <Reveal delay={60} className={styles.toolbar}>
          <ProductFilters active={category} onChange={setCategory} counts={counts} />

          <div className={styles.tools}>
            <SearchProducts value={query} onChange={setQuery} resultCount={visible.length} />

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className={styles.cartBtn}
              aria-label={`Abrir carrinho com ${cart.count} item${cart.count === 1 ? '' : 's'}`}
            >
              <Icon name="cart" size={18} />
              <span className={styles.cartLabel}>Carrinho</span>
              {cart.count > 0 && <span className={styles.cartCount}>{cart.count}</span>}
            </button>
          </div>
        </Reveal>

        {/* ---------- Vitrine ---------- */}
        {visible.length > 0 ? (
          <ul className={styles.grid}>
            {visible.map((p, i) => (
              <Reveal as="li" key={p.id} delay={Math.min(i, 5) * 60} className={styles.cell}>
                <ProductCard
                  product={p}
                  onView={setOpenProduct}
                  onBuy={addToCart}
                  inCart={cart.has(p.id)}
                />
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className={styles.emptyState} role="status">
            <p className={styles.emptyTitle}>Nenhum produto encontrado</p>
            <p className={styles.emptyText}>
              Tente outro termo ou volte para todas as categorias.
            </p>
            <button type="button" onClick={resetFilters} className="btn btnGhost">
              Limpar filtros
            </button>
          </div>
        )}

        <Reveal delay={80} className={styles.disclaimer}>
          <Icon name="info" size={16} className={styles.disclaimerIcon} />
          <p>
            Os produtos acima são exemplos de catálogo. Marcas, preços, tamanhos e sabores são
            confirmados diretamente com a loja. Suplementos não substituem uma alimentação
            equilibrada — consulte orientação profissional antes do uso.
          </p>
        </Reveal>
      </div>

      <ProductModal
        product={openProduct}
        onClose={() => setOpenProduct(null)}
        onAdd={(p) => {
          cart.add(p)
          setOpenProduct(null)
          setCartOpen(true)
        }}
        inCart={openProduct ? cart.has(openProduct.id) : false}
      />

      <Cart open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} />
    </section>
  )
}
