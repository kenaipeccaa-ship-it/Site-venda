import type { ElementType, ReactNode } from 'react'
import styles from './Reveal.module.css'

interface RevealProps {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
  /** 'up' desliza de baixo; 'fade' só esmaece. */
  variant?: 'up' | 'fade'
  /** Repassado ao elemento — usado para ligar títulos a aria-labelledby. */
  id?: string
}

/**
 * Envelope de animação de entrada. O hook `useReveal` observa o atributo
 * `data-reveal` e adiciona a classe de visível quando o elemento aparece.
 */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  variant = 'up',
  id,
  children,
}: RevealProps) {
  return (
    <Tag
      id={id}
      data-reveal=""
      className={`${styles.reveal} ${variant === 'fade' ? styles.fade : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
