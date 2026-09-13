import { WHATSAPP_NUMBER } from '../config/site'

/**
 * Monta o link do WhatsApp com a mensagem pré-preenchida.
 * O número vem de uma única constante em src/config/site.ts.
 */
export function waLink(message: string): string {
  const digits = String(WHATSAPP_NUMBER).replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

/** Atributos padrão para abrir link externo com segurança. */
export const externalLink = {
  target: '_blank' as const,
  rel: 'noopener noreferrer',
}
