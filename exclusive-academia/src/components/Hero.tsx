import { brand, images, waMessages } from '../config/site'
import { externalLink, waLink } from '../lib/whatsapp'
import { Figure } from './ui/Figure'
import { Icon } from './ui/Icon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className={styles.hero}>
      {/* elemento geométrico discreto em azul elétrico, atrás da composição */}
      <span className={styles.grid} aria-hidden="true" />
      <span className={styles.glow} aria-hidden="true" />

      <div className={`shell ${styles.inner}`}>
        {/* ---------- Coluna de texto ---------- */}
        <div className={styles.copy}>
          <p className={styles.brandLine}>
            <span className={styles.brandName}>{brand.name}</span>
            <span className={styles.brandRule} aria-hidden="true" />
            <span className={styles.brandSuffix}>{brand.suffix}</span>
          </p>

          <h1 id="hero-title" className={`display ${styles.title}`}>
            Seu treino.
            <br />
            Seu <span className="accentText">próximo nível.</span>
          </h1>

          <p className={`lead ${styles.lead}`}>
            Treine com estrutura, ambiente e experiência pensados para a sua evolução.
          </p>

          <div className={styles.actions}>
            <a href={waLink(waMessages.general)} {...externalLink} className="btn btnPrimary">
              <span>Quero treinar</span>
              <Icon name="arrowRight" size={17} className="arrow" />
            </a>
            <a href="#academia" className="btn btnGhost">
              Conhecer a academia
            </a>
          </div>

          <div className={styles.place}>
            <span className={styles.placeRule} aria-hidden="true" />
            <p className={styles.placeText}>
              {brand.neighborhood}
              <span className={styles.placeCity}>
                {brand.city} — {brand.state}
              </span>
            </p>
          </div>
        </div>

        {/* ---------- Coluna da imagem (sangra até a borda no desktop) ---------- */}
        <div className={styles.media}>
          <span className={styles.mediaFrame} aria-hidden="true" />
          <Figure
            src={images.hero}
            alt="Ambiente de treino da Exclusive Academia"
            className={styles.mediaImage}
            priority
            sizes="(max-width: 1080px) 100vw, 52vw"
          />
        </div>
      </div>
    </section>
  )
}
