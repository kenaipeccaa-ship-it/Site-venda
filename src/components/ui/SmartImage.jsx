import { useState } from 'react'
import { Icon } from '../../lib/icons.jsx'

/**
 * SmartImage
 * ----------------------------------------------------------------------------
 * // SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE
 *
 * Todas as imagens desta demonstração são ILUSTRATIVAS (banco de imagens) e
 * não retratam a unidade. Este componente:
 *   1. mostra um esqueleto enquanto a imagem carrega;
 *   2. troca por um espaço reservado desenhado caso a imagem falhe —
 *      assim a apresentação nunca exibe imagem quebrada, mesmo offline;
 *   3. mantém o `alt` explícito de que a imagem é ilustrativa.
 */
export function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  placeholderLabel = 'Espaço reservado para foto da unidade',
  icon = 'Building2',
  priority = false,
  sizes,
}) {
  const [status, setStatus] = useState('loading') // loading | ready | error

  return (
    <div className={`img-frame ${className}`}>
      {/* Fundo/esqueleto: fica visível enquanto carrega e também no erro */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 20% 0%, rgba(255,36,54,0.10), transparent 55%), linear-gradient(150deg,#141922,#0a0c11)',
        }}
      />

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
          className={`relative h-full w-full object-cover transition-opacity duration-700 ${
            status === 'ready' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}

      {status === 'error' && (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white/5 text-brand-light">
            <Icon name={icon} size={22} />
          </span>
          <span className="max-w-[26ch] font-display text-[0.68rem] font-bold tracking-[0.16em] text-fog uppercase">
            {placeholderLabel}
          </span>
        </div>
      )}
    </div>
  )
}
