import { images, waMessages } from '../config/site'
import { externalLink, waLink } from '../lib/whatsapp'
import { Figure } from './ui/Figure'
import { Icon, WhatsAppIcon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import styles from './TrialCTA.module.css'

export function TrialCTA() {
  return (
    <section id="experimental" aria-labelledby="trial-title" className={styles.section}>
      <div className={styles.bg} aria-hidden="true">
        <Figure src={images.trial} alt="" className={styles.image} sizes="100vw" />
        <span className={styles.veil} />
      </div>

      <div className={`shell ${styles.inner}`}>
        <Reveal className="sectionHead">
          <span className="sectionIndex">06</span>
          <span className="sectionLabel">Aula experimental</span>
          <span className="sectionRule" aria-hidden="true" />
        </Reveal>

        <Reveal as="h2" delay={60} id="trial-title" className={`display titleXl ${styles.title}`}>
          Pronto para
          <br />
          <span className="accentText">começar?</span>
        </Reveal>

        <Reveal as="p" delay={120} className={`lead ${styles.lead}`}>
          Conheça a Exclusive Academia e descubra uma estrutura pensada para o seu treino.
        </Reveal>

        <Reveal delay={180} className={styles.actions}>
          <a href={waLink(waMessages.trial)} {...externalLink} className="btn btnPrimary">
            <WhatsAppIcon size={18} />
            <span>Agendar aula experimental</span>
          </a>
          <a href="#localizacao" className="btn btnGhost">
            <span>Ver localização</span>
            <Icon name="arrowRight" size={16} className="arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
