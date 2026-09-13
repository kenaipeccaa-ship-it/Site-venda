import { Icon } from '../ui/Icon'
import styles from './SearchProducts.module.css'

interface SearchProductsProps {
  value: string
  onChange: (value: string) => void
  resultCount: number
}

export function SearchProducts({ value, onChange, resultCount }: SearchProductsProps) {
  return (
    <div className={styles.wrap}>
      <label htmlFor="busca-produto" className="srOnly">
        Pesquisar produto
      </label>
      <span className={styles.icon} aria-hidden="true">
        <Icon name="search" size={18} />
      </span>
      <input
        id="busca-produto"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Pesquisar produto..."
        autoComplete="off"
        className={styles.input}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className={styles.clear}
          aria-label="Limpar busca"
        >
          <Icon name="close" size={16} />
        </button>
      )}
      {/* anuncia o número de resultados para leitores de tela */}
      <span aria-live="polite" className="srOnly">
        {resultCount} produto{resultCount === 1 ? '' : 's'} encontrado
        {resultCount === 1 ? '' : 's'}
      </span>
    </div>
  )
}
