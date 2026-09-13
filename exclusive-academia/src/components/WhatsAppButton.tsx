import { useEffect, useRef, useState } from 'react'
import { waMessages, WHATSAPP_IS_PLACEHOLDER } from '../config/site'
import { externalLink, waLink } from '../lib/whatsapp'
import { Icon, WhatsAppIcon } from './ui/Icon'
import { useScrolled } from '../hooks/useScrolled'
import styles from './WhatsAppButton.module.css'

const SHORTCUTS = [
  { label: 'Informações gerais', message: waMessages.general },
  { label: 'Planos', message: waMessages.plans },
  { label: 'Aula experimental', message: waMessages.trial },
]

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const visible = useScrolled(420)
  const wrapRef = useRef<HTMLDivElement>(null)
  const panelOpen = open && visible

  useEffect(() => {
    if (!panelOpen) return
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [panelOpen])

  return (
    <div ref={wrapRef} className={`${styles.wrap} ${visible ? styles.visible : ''}`}>
      {panelOpen && (
        <div id="wa-shortcuts" className={styles.panel}>
          <p className={styles.panelTitle}>Fale conosco</p>
          <ul className={styles.list}>
            {SHORTCUTS.map((s) => (
              <li key={s.label}>
                <a
                  href={waLink(s.message)}
                  {...externalLink}
                  onClick={() => setOpen(false)}
                  className={styles.item}
                >
                  <span>{s.label}</span>
                  <Icon name="arrowUpRight" size={14} />
                </a>
              </li>
            ))}
          </ul>
          {WHATSAPP_IS_PLACEHOLDER && (
            <p className={styles.notice}>
              Número de exemplo — defina <code>WHATSAPP_NUMBER</code> em
              <code> src/config/site.ts</code>.
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        className={styles.fab}
        aria-expanded={panelOpen}
        aria-controls="wa-shortcuts"
        aria-label={panelOpen ? 'Fechar opções de contato' : 'Abrir opções de contato'}
        onClick={() => setOpen((v) => !v)}
      >
        <WhatsAppIcon size={20} />
        <span className={styles.fabLabel}>Fale conosco</span>
        <Icon
          name="chevronRight"
          size={15}
          className={`${styles.chevron} ${panelOpen ? styles.chevronOpen : ''}`}
        />
      </button>
    </div>
  )
}
