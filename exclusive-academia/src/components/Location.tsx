import { contact, waMessages } from '../config/site'
import { externalLink, waLink } from '../lib/whatsapp'
import { Icon, WhatsAppIcon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import styles from './Location.module.css'

/**
 * Mapa estilizado em SVG, desenhado aqui mesmo: dá a referência visual de
 * localização sem carregar um iframe pesado do Google Maps.
 * O botão leva ao mapa real, com o endereço já preenchido.
 */
function StylizedMap() {
  return (
    <svg
      viewBox="0 0 640 460"
      className={styles.map}
      role="img"
      aria-label="Ilustração de mapa indicando a região da academia"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="640" height="460" fill="#0b1f35" />
      {/* quarteirões */}
      <g stroke="rgba(232,237,243,0.09)" strokeWidth="1">
        {[60, 140, 220, 300, 380, 460, 540].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x - 40} y2="460" />
        ))}
        {[70, 150, 230, 310, 390].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="640" y2={y + 26} />
        ))}
      </g>
      {/* avenidas principais */}
      <g stroke="rgba(232,237,243,0.2)" strokeWidth="3" strokeLinecap="round">
        <line x1="0" y1="243" x2="640" y2="269" />
        <line x1="300" y1="0" x2="260" y2="460" />
      </g>
      {/* área destacada */}
      <path d="M262 218 L340 220 L336 300 L258 298 Z" fill="rgba(23,105,255,0.16)" stroke="#1769ff" strokeWidth="1.5" />
      {/* marcador */}
      <g transform="translate(299 259)">
        <circle r="46" fill="rgba(23,105,255,0.14)" />
        <circle r="26" fill="rgba(23,105,255,0.24)" />
        <path
          d="M0 -26c-8.8 0-16 7.2-16 16 0 12 16 30 16 30s16-18 16-30c0-8.8-7.2-16-16-16Z"
          fill="#1769ff"
        />
        <circle cy="-10" r="5.6" fill="#ffffff" />
      </g>
    </svg>
  )
}

export function Location() {
  return (
    <section id="localizacao" aria-labelledby="location-title" className={`section ${styles.section}`}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy}>
          <Reveal className="sectionHead">
            <span className="sectionIndex">07</span>
            <span className="sectionLabel">Localização</span>
            <span className="sectionRule" aria-hidden="true" />
          </Reveal>

          <Reveal as="h2" delay={60} id="location-title" className={`display titleLg ${styles.title}`}>
            Onde
            <br />
            <span className="accentText">estamos.</span>
          </Reveal>

          {/* ✅ Endereço confirmado — editar em src/config/site.ts */}
          <Reveal delay={120} className={styles.address}>
            <Icon name="pin" size={22} className={styles.pin} />
            <address className={styles.addressText}>
              <span className={styles.street}>{contact.street}</span>
              <span>{contact.neighborhood}</span>
              <span>{contact.city}</span>
            </address>
          </Reveal>

          <Reveal delay={180} className={styles.actions}>
            <a href={contact.mapsUrl} {...externalLink} className="btn btnPrimary">
              <span>Abrir no Google Maps</span>
              <Icon name="arrowUpRight" size={16} className="arrow" />
            </a>
            <a href={waLink(waMessages.location)} {...externalLink} className="btn btnGhost">
              <WhatsAppIcon size={17} />
              <span>Falar no WhatsApp</span>
            </a>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={100} className={styles.mapWrap}>
          <StylizedMap />
          <a href={contact.mapsUrl} {...externalLink} className={styles.mapLink}>
            <span className={styles.mapLabel}>
              <Icon name="arrowUpRight" size={15} />
              Ver no Google Maps
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
