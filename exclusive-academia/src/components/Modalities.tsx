import { modalities } from '../config/site'
import { Figure } from './ui/Figure'
import { Reveal } from './ui/Reveal'
import styles from './Modalities.module.css'

/**
 * Grade assimétrica de imagens grandes — não são cards tradicionais.
 * No hover: leve zoom, véu azul e o texto descritivo sobe.
 * No toque (sem hover), a descrição fica sempre visível.
 */
export function Modalities() {
  return (
    <section id="modalidades" aria-labelledby="modalities-title" className={`section ${styles.section}`}>
      <div className="shell">
        <Reveal className="sectionHead">
          <span className="sectionIndex">02</span>
          <span className="sectionLabel">Modalidades</span>
          <span className="sectionRule" aria-hidden="true" />
        </Reveal>

        <Reveal as="h2" delay={60} id="modalities-title" className={`display titleLg ${styles.title}`}>
          Escolha como você
          <br />
          quer <span className="accentText">evoluir.</span>
        </Reveal>

        <ul className={styles.grid}>
          {modalities.map((m, i) => (
            <Reveal
              as="li"
              key={m.id}
              delay={Math.min(i, 4) * 80}
              className={`${styles.item} ${m.span === 'wide' ? styles.wide : ''}`}
            >
              <article className={styles.card}>
                <Figure
                  src={m.image}
                  alt={`Modalidade ${m.name} na Exclusive Academia`}
                  className={styles.media}
                  imgClassName={styles.img}
                  sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
                />
                <span className={styles.veil} aria-hidden="true" />

                <div className={styles.content}>
                  <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.name}>{m.name}</h3>
                  <p className={styles.desc}>{m.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
