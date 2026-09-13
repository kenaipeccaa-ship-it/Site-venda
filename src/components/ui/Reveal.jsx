/**
 * Wrapper de animação de entrada.
 * A classe `.reveal` é observada pelo hook `useScrollReveal`.
 */
export function Reveal({
  as: Tag = 'div',
  variant = '',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`reveal ${variant} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
