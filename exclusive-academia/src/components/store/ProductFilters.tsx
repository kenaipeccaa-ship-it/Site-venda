import { categories } from '../../data/products'
import styles from './ProductFilters.module.css'

interface ProductFiltersProps {
  active: string
  onChange: (id: string) => void
  /** Quantos produtos cada categoria tem, após a busca. */
  counts: Record<string, number>
}

/**
 * Filtros por categoria. A lista vem de `categories` em src/data/products.ts —
 * adicionar ou remover uma categoria lá reflete aqui automaticamente.
 * O botão "Todos" é gerado aqui e não precisa estar na configuração.
 */
export function ProductFilters({ active, onChange, counts }: ProductFiltersProps) {
  const todos = [{ id: 'todos', label: 'Todos' }, ...categories]

  return (
    <div className={styles.wrap}>
      <div role="tablist" aria-label="Filtrar produtos por categoria" className={styles.list}>
        {todos.map((c) => {
          const n = counts[c.id] ?? 0
          const isActive = active === c.id
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              disabled={n === 0 && !isActive}
              onClick={() => onChange(c.id)}
              className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
            >
              {c.label}
              <span className={styles.count}>{n}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
