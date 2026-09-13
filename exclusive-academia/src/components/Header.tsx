import { useEffect, useState } from 'react'
import { brand, navLinks, waMessages } from '../config/site'
import { externalLink, waLink } from '../lib/whatsapp'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLockScroll } from '../hooks/useLockScroll'
import { Icon } from './ui/Icon'
import styles from './Header.module.css'

const SECTION_IDS = navLinks.map((l) => l.href.replace('#', ''))

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(40)
  const active = useActiveSection(SECTION_IDS)

  useLockScroll(menuOpen)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth >= 1080 && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <>
      <a href="#academia" className={`btn btnLight skipLink ${styles.skip}`}>
        Ir para o conteúdo
      </a>

      <header
        className={`${styles.header} ${scrolled || menuOpen ? styles.solid : ''}`}
        data-open={menuOpen}
      >
        <div className={`shell ${styles.inner}`}>
          <a
            href="#inicio"
            className={styles.logo}
            aria-label={`${brand.full} — ir para o início`}
            onClick={() => setMenuOpen(false)}
          >
            <span className={styles.logoMain}>{brand.name}</span>
            <span className={styles.logoRule} aria-hidden="true" />
            <span className={styles.logoSub}>{brand.suffix}</span>
          </a>

          <nav aria-label="Navegação principal" className={styles.nav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => {
                const isActive = active === link.href.replace('#', '')
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href={waLink(waMessages.general)} {...externalLink} className={`btn btnPrimary ${styles.cta}`}>
              Quero treinar
            </a>

            <button
              type="button"
              className={styles.burger}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Menu mobile ---------- */}
      <div id="menu-mobile" className={styles.drawer} hidden={!menuOpen}>
        <nav aria-label="Navegação mobile" className={`shell ${styles.drawerInner}`}>
          <ul className={styles.drawerList}>
            {navLinks.map((link, i) => (
              <li key={link.href} className={styles.drawerItem}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className={styles.drawerLink}>
                  <span className={styles.drawerIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <span>{link.label}</span>
                  <Icon name="arrowUpRight" size={16} className={styles.drawerArrow} />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={waLink(waMessages.general)}
            {...externalLink}
            onClick={() => setMenuOpen(false)}
            className="btn btnPrimary btnBlock"
          >
            Quero treinar
          </a>

          <p className={styles.drawerFoot}>
            {brand.neighborhood}
            <br />
            {brand.city} — {brand.state}
          </p>
        </nav>
      </div>
    </>
  )
}
