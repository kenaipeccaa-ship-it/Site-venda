/* ----------------------------------------------------------------------------
 *  Componentes de ícone
 * ----------------------------------------------------------------------------
 *  `Icon` resolve um ícone pelo NOME definido em src/config/site.js,
 *  mantendo a configuração livre de código React.
 * -------------------------------------------------------------------------- */
import { Sparkles } from 'lucide-react'
import { iconMap } from './iconMap.js'

/** Renderiza um ícone pelo nome. Nome desconhecido cai em um ícone neutro. */
export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] ?? Sparkles
  return <Cmp aria-hidden="true" {...props} />
}

/* ----------------------------------------------------------------------------
 *  Ícones de marca desenhados aqui (não fazem parte do pacote de ícones)
 * -------------------------------------------------------------------------- */
export function WhatsAppIcon({ size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.19-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-3.2 4.2c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.68 2.68 4.15 3.65 2.05.81 2.47.65 2.91.61.44-.04 1.43-.59 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.02-.37.1-.49.11-.11.26-.3.38-.46.12-.16.16-.28.24-.44.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.19-.46-.39-.47-.54-.48h-.38Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
