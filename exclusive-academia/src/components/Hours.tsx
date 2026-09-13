import { hours, waMessages } from '../config/site'
import { externalLink, waLink } from '../lib/whatsapp'
import { Icon, WhatsAppIcon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import styles from './Hours.module.css'

/**
 * Horários de funcionamento.
 * ✅ Confirmados — para alterar, edite `hours` em src/config/site.ts.
 */
export function Hours() {
  return (
    <section id="horarios" aria-labelledby="hours-title" className={styles.section}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.head}>
          <Reveal className="sectionHead">
            <span className="sectionIndex">08</span>
            <span className="sectionLabel">Horários</span>
            <span className="sectionRule" aria-hidden="true" />
          </Reveal>

          <Reveal as="h2" delay={60} id="hours-title" className={`display titleMd ${styles.title}`}>
            <Icon name="clock" size={22} className={styles.clock} />
            Funcionamento
          </Reveal>
        </div>

        <ul className={styles.list}>
          {hours.map((h, i) => (
            <Reveal as="li" key={h.label} delay={i * 90} className={styles.row}>
              <span className={styles.day}>{h.label}</span>
              <span className={styles.time}>
                <span className={styles.open}>{h.open}</span>
                <span className={styles.dash} aria-hidden="true" />
                <span className={styles.close}>{h.close}</span>
              </span>
              {h.note && <span className={styles.note}>{h.note}</span>}
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className={styles.foot}>
          <a href={waLink(waMessages.hours)} {...externalLink} className="btn btnGhost">
            <WhatsAppIcon size={17} />
            <span>Confirmar horários</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
