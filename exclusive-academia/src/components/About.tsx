import { images } from '../config/site'
import { Figure } from './ui/Figure'
import { Reveal } from './ui/Reveal'
import styles from './About.module.css'

export function About() {
  return (
    <section id="academia" aria-labelledby="about-title" className={`section ${styles.section}`}>
      <div className={`shell ${styles.inner}`}>
        {/* ---------- Imagem (60% no desktop) ---------- */}
        <Reveal variant="fade" className={styles.media}>
          <span className={styles.frame} aria-hidden="true" />
          <Figure
            src={images.about}
            alt="Área de treino da Exclusive Academia"
            className={styles.image}
            sizes="(max-width: 960px) 100vw, 52vw"
          />
        </Reveal>

        {/* ---------- Texto ---------- */}
        <div className={styles.copy}>
          <Reveal className="sectionHead">
            <span className="sectionIndex">01</span>
            <span className="sectionLabel">A academia</span>
            <span className="sectionRule" aria-hidden="true" />
          </Reveal>

          <Reveal as="h2" delay={60} id="about-title" className={`display titleLg ${styles.title}`}>
            Mais que
            <br />
            um <span className="accentText">treino.</span>
          </Reveal>

          <Reveal delay={120} className={styles.body}>
            <p>
              A Exclusive Academia reúne musculação, treinamento funcional e trabalho de força em um
              mesmo espaço, pensado para quem quer treinar com consistência.
            </p>
            <p>
              A estrutura acompanha diferentes objetivos: de quem está começando a montar uma rotina
              a quem já treina e busca progressão. O treinamento personalizado está disponível para
              quem prefere um programa individual.
            </p>
            <p>
              O ambiente foi organizado para que cada etapa do treino tenha o seu lugar — e para que
              voltar no dia seguinte seja simples.
            </p>
          </Reveal>

          <Reveal delay={180} className={styles.marks}>
            <span className={styles.mark}>Musculação</span>
            <span className={styles.mark}>Funcional</span>
            <span className={styles.mark}>Força</span>
            <span className={styles.mark}>Personal</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
