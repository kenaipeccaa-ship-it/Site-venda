/* ----------------------------------------------------------------------------
 *  Ícones minimalistas, desenhados à mão em SVG.
 *  Sem biblioteca externa: mantém o bundle pequeno e o traço consistente.
 *  Para adicionar um ícone, acrescente uma entrada em `paths`.
 * -------------------------------------------------------------------------- */
import type { ReactElement, SVGProps } from 'react'

export type IconName =
  | 'climate'
  | 'locker'
  | 'parking'
  | 'shower'
  | 'wifi'
  | 'personal'
  | 'arrowRight'
  | 'arrowUpRight'
  | 'close'
  | 'menu'
  | 'chevronLeft'
  | 'chevronRight'
  | 'pin'
  | 'clock'
  | 'check'
  | 'expand'

const paths: Record<IconName, ReactElement> = {
  // Ambiente climatizado — floco de neve
  climate: (
    <>
      <path d="M12 2v20M4.2 7l15.6 10M19.8 7L4.2 17" />
      <path d="M12 6.4 9.6 4M12 6.4 14.4 4M12 17.6 9.6 20M12 17.6l2.4 2.4" />
      <path d="m6.6 9.6-3.3-.5M6.6 14.4l-3.3.5M17.4 9.6l3.3-.5M17.4 14.4l3.3.5" />
    </>
  ),
  // Armários
  locker: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 3v18M8.4 8.5v2M15.6 8.5v2" />
    </>
  ),
  // Estacionamento
  parking: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M9.6 16.5V7.5h3.1a2.9 2.9 0 0 1 0 5.8H9.6" />
    </>
  ),
  // Vestiário — chuveiro
  shower: (
    <>
      <path d="M5 21V7a3.2 3.2 0 0 1 6.4 0v1.4" />
      <path d="M9.4 9.6h9.2a1 1 0 0 1 1 1.2c-.5 2.3-2.6 3.4-5.6 3.4s-5.1-1.1-5.6-3.4a1 1 0 0 1 1-1.2Z" />
      <path d="M11.6 17.4v1.2M14 19.6v1.2M16.4 17.4v1.2" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 9a15.5 15.5 0 0 1 19 0" />
      <path d="M6 12.8a10.2 10.2 0 0 1 12 0" />
      <path d="M9.4 16.5a5 5 0 0 1 5.2 0" />
      <path d="M12 20.2h.01" />
    </>
  ),
  // Treinamento personalizado — pessoa + halter
  personal: (
    <>
      <circle cx="9" cy="5.6" r="2.6" />
      <path d="M4.4 21v-4.2a4.6 4.6 0 0 1 9.2 0V21" />
      <path d="M17.2 9.4v6M20.2 10.6v3.6M18.7 12.4h-1.5" />
    </>
  ),
  arrowRight: <path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5" />,
  arrowUpRight: <path d="M7 17 17 7m-8.2 0H17v8.2" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  chevronLeft: <path d="m14.5 5-7 7 7 7" />,
  chevronRight: <path d="m9.5 5 7 7-7 7" />,
  pin: (
    <>
      <path d="M12 21.5s7-6.2 7-11.1A7 7 0 0 0 5 10.4c0 4.9 7 11.1 7 11.1Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  expand: <path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5" />,
}

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 24, strokeWidth = 1.5, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}

/** Ícone de marca do WhatsApp (não faz parte do conjunto de traço acima). */
export function WhatsAppIcon({ size = 22, ...rest }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.19-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-3.2 4.2c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.68 2.68 4.15 3.65 2.05.81 2.47.65 2.91.61.44-.04 1.43-.59 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.02-.37.1-.49.11-.11.26-.3.38-.46.12-.16.16-.28.24-.44.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.19-.46-.39-.47-.54-.48h-.38Z" />
    </svg>
  )
}
