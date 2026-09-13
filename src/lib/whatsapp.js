import { WHATSAPP_NUMBER } from '../config/site.js'

/**
 * Monta o link do WhatsApp com uma mensagem pré-preenchida.
 * O número vem de uma única variável (WHATSAPP_NUMBER, em src/config/site.js),
 * então basta editá-la em um lugar para o site inteiro passar a usar o contato real.
 */
export function waLink(message = '') {
  const digits = String(WHATSAPP_NUMBER).replace(/\D/g, '')
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${digits}${text}`
}

/** Atributos padrão para abrir o WhatsApp em nova aba com segurança. */
export const waAnchorProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}
