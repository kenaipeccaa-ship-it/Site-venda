import { plans, waMessages } from '../config/site'
import { externalLink, waLink } from '../lib/whatsapp'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import styles from './Plans.module.css'

export function Plans() {
  return (
    <section id="planos" aria-labelledby="plans-title" className={`section ${styles.section}`}>
      <div className="shell">
        <Reveal className="sectionHead">
          <span className="sectionIndex">05</span>
          <span className="sectionLabel">Planos</span>
          <span className="sectionRule" aria-hidden="true" />
        </Reveal>

        <Reveal as="h2" delay={60} id="plans-title" className={`display titleLg ${styles.title}`}>
          Encontre o plano
          <br />
          ideal <span className="accentText">para você.</span>
        </Reveal>

        <ul className={styles.grid}>
          {plans.map((plan, i) => (
            <Reveal
              as="li"
              key={plan.id}
              delay={i * 100}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
            >
              {plan.featured && <span className={styles.topBar} aria-hidden="true" />}

              <header className={styles.head}>
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.name}>{plan.name}</h3>
                <p className={styles.summary}>{plan.summary}</p>
              </header>

              <div className={styles.priceBlock}>
                {plan.price ? (
                  <p className={styles.price}>
                    {plan.price}
                    {plan.period && <span className={styles.period}>{plan.period}</span>}
                  </p>
                ) : (
                  /* Nenhum valor foi informado pela academia — ver src/config/site.ts */
                  <p className={styles.consult}>Consulte nossas condições</p>
                )}
              </div>

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <Icon name="check" size={15} strokeWidth={2} className={styles.check} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`${waMessages.plans} Tenho interesse no plano ${plan.name}.`)}
                {...externalLink}
                className={`btn btnBlock ${plan.featured ? 'btnPrimary' : 'btnGhost'} ${styles.cta}`}
                aria-label={`Falar sobre o plano ${plan.name} no WhatsApp`}
              >
                Falar sobre planos
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
