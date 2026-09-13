import { useCallback, useState } from 'react'
import { gallery } from '../config/site'
import { Figure } from './ui/Figure'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Lightbox } from './ui/Lightbox'
import styles from './Gallery.module.css'

/**
 * Galeria da estrutura.
 * Para adicionar fotos: coloque os arquivos em public/images/ e acrescente
 * itens em `gallery` (src/config/site.ts). A grade se ajusta sozinha.
 */
export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const close = useCallback(() => setOpenIndex(null), [])

  return (
    <section id="estrutura" aria-labelledby="gallery-title" className={`section ${styles.section}`}>
      <div className="shell">
        <Reveal className="sectionHead">
          <span className="sectionIndex">03</span>
          <span className="sectionLabel">Estrutura</span>
          <span className="sectionRule" aria-hidden="true" />
        </Reveal>

        <Reveal as="h2" delay={60} id="gallery-title" className={`display titleLg ${styles.title}`}>
          Não é só sobre treinar.
          <br />
          É sobre <span className="accentText">onde você treina.</span>
        </Reveal>

        <ul className={styles.grid}>
          {gallery.map((item, i) => (
            <Reveal
              as="li"
              key={item.id}
              delay={Math.min(i, 5) * 70}
              className={`${styles.cell} ${i % 5 === 0 ? styles.tall : ''}`}
            >
              <button
                type="button"
                className={styles.trigger}
                onClick={() => setOpenIndex(i)}
                aria-label={`Ampliar foto: ${item.caption}`}
              >
                <Figure
                  src={item.image}
                  alt={item.caption}
                  className={styles.media}
                  imgClassName={styles.img}
                  sizes="(max-width: 640px) 50vw, (max-width: 1080px) 33vw, 25vw"
                />
                <span className={styles.overlay} aria-hidden="true">
                  <Icon name="expand" size={20} />
                </span>
                <span className={styles.caption}>{item.caption}</span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Lightbox items={gallery} index={openIndex} onClose={close} onNavigate={setOpenIndex} />
    </section>
  )
}
