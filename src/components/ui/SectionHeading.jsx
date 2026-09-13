import { Reveal } from './Reveal.jsx'

/** Cabeçalho padronizado das seções (mantém o ritmo tipográfico do site). */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
  className = '',
  titleClassName = 't-section',
  children,
}) {
  const centered = align === 'center'
  return (
    <header
      className={`flex flex-col gap-5 ${centered ? 'items-center text-center' : 'items-start'} ${className}`}
    >
      {eyebrow && (
        <Reveal as="span" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" id={id} delay={60} className={`display max-w-[19ch] ${titleClassName}`}>
        {title}
      </Reveal>
      {description && (
        <Reveal as="p" delay={120} className={`lead ${centered ? 'max-w-[62ch]' : 'max-w-[54ch]'}`}>
          {description}
        </Reveal>
      )}
      {children}
    </header>
  )
}
