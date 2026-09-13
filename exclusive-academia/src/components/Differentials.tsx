import { differentials } from '../config/site'
import { Icon, type IconName } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import styles from './Differentials.module.css'

export function Differentials() {
  return (
    <section aria-labelledby="differentials-title" className={`section ${styles.section}`}>
      <div className="shell">
        <Reveal className="sectionHead">
          <span className="sectionIndex">04</span>
          <span className="sectionLabel">Diferenciais</span>
          <span className="sectionRule" aria-hidden="true" />
        </Reveal>

        <h2 id="differentials-title" className="srOnly">
          Diferenciais da Exclusive Academia
        </h2>

        <ul className={styles.grid}>
          {differentials.map((d, i) => (
            <Reveal as="li" key={d.id} delay={i * 70} className={styles.cell}>
              <Icon name={d.icon as IconName} size={26} strokeWidth={1.3} className={styles.icon} />
              <span className={styles.label}>{d.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
