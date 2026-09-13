import { useState } from 'react'
import styles from './Figure.module.css'

interface FigureProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  /** Carrega imediatamente (usar só na imagem do hero). */
  priority?: boolean
  sizes?: string
}

/**
 * Imagem com dois cuidados:
 *  1. esmaece ao carregar, em vez de "pipocar";
 *  2. se o arquivo não existir, mostra um espaço reservado discreto —
 *     assim trocar uma foto por um caminho errado nunca quebra o layout.
 */
export function Figure({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  sizes,
}: FigureProps) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  return (
    <div className={`${styles.frame} ${className}`}>
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
          className={`${styles.img} ${status === 'ready' ? styles.ready : ''} ${imgClassName}`}
        />
      )}

      {status === 'error' && (
        <div className={styles.fallback}>
          <span className={styles.fallbackMark} aria-hidden="true" />
          <span className={styles.fallbackText}>Imagem a definir</span>
        </div>
      )}
    </div>
  )
}
