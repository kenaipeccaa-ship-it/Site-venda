import { impactItems } from '../config/site'
import { Reveal } from './ui/Reveal'
import styles from './ImpactSection.module.css'

/**
 * Faixa horizontal logo abaixo do hero.
 * Composição tipográfica com divisores verticais — não são cards.
 */
export function ImpactSection() {
  return (
    <section aria-label="Frentes de treino" className={styles.band}>
      <div className={`shell ${styles.inner}`}>
        {impactItems.map((item, i) => (
          <Reveal key={item.id} delay={i * 90} className={styles.cell}>
            <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.label}>{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
