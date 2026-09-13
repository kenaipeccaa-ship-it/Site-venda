import { brand, contact, hours, navLinks, waMessages } from '../config/site'
import { externalLink, waLink } from '../lib/whatsapp'
import { Icon, WhatsAppIcon } from './ui/Icon'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        {/* ---------- Marca ---------- */}
        <div className={styles.brandCol}>
          <p className={styles.logo}>
            <span className={styles.logoMain}>{brand.name}</span>
            <span className={styles.logoRule} aria-hidden="true" />
            <span className={styles.logoSub}>{brand.suffix}</span>
          </p>
          <p className={styles.city}>
            {brand.neighborhood}
            <br />
            {brand.city} — {brand.state}
          </p>
          <a href={waLink(waMessages.general)} {...externalLink} className="btn btnPrimary">
            <WhatsAppIcon size={17} />
            <span>Fale conosco</span>
          </a>
        </div>

        {/* ---------- Navegação ---------- */}
        <nav aria-labelledby="footer-nav" className={styles.col}>
          <h2 id="footer-nav" className={styles.colTitle}>
            Navegação
          </h2>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                  <Icon name="arrowUpRight" size={13} className={styles.linkArrow} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---------- Contato ---------- */}
        <div className={styles.col}>
          <h2 className={styles.colTitle}>Contato</h2>
          <address className={styles.address}>
            {contact.street}
            <br />
            {contact.neighborhood}
            <br />
            {contact.city}
          </address>
          <a href={contact.mapsUrl} {...externalLink} className={styles.link}>
            Abrir no Google Maps
            <Icon name="arrowUpRight" size={13} className={styles.linkArrow} />
          </a>
          {/* Telefone, e-mail e Instagram só aparecem quando preenchidos
              em src/config/site.ts — nada é inventado aqui. */}
          {contact.phone && (
            <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className={styles.link}>
              {contact.phone}
            </a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`} className={styles.link}>
              {contact.email}
            </a>
          )}
          {contact.instagram && (
            <a href={contact.instagram} {...externalLink} className={styles.link}>
              Instagram
              <Icon name="arrowUpRight" size={13} className={styles.linkArrow} />
            </a>
          )}
        </div>

        {/* ---------- Horários ---------- */}
        <div className={styles.col}>
          <h2 className={styles.colTitle}>Horários</h2>
          <ul className={styles.hours}>
            {hours.map((h) => (
              <li key={h.label} className={styles.hourRow}>
                <span className={styles.hourDay}>{h.label}</span>
                <span className={styles.hourTime}>
                  {h.open} — {h.close}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`shell ${styles.bottom}`}>
        <p>
          © {year} {brand.full}
        </p>
        <p className={styles.bottomCity}>
          {brand.city} — {brand.state}
        </p>
      </div>
    </footer>
  )
}
