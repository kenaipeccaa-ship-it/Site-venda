import { site } from '../config/site.js'

/**
 * Logotipo TEXTUAL criado para esta demonstração.
 * Não reproduz o logotipo, símbolo ou tipografia proprietária de terceiros.
 */
export function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-2.5 sm:gap-3">
      {/* Marca gráfica própria: barra ascendente = progressão */}
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] border border-line bg-gradient-to-br from-volt/25 to-transparent sm:h-10 sm:w-10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 17.5 L11 10 L14.5 13.5 L20 6.5"
            stroke="#c9fb45"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="4" cy="17.5" r="1.9" fill="#f4f6f8" />
          <circle cx="20" cy="6.5" r="1.9" fill="#c9fb45" />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span className="display text-[1.15rem] tracking-[-0.02em] sm:text-[1.3rem]">
          {site.brand}
        </span>
        {!compact && (
          <span className="mt-[3px] font-display text-[0.55rem] font-semibold tracking-[0.3em] text-fog sm:text-[0.6rem]">
            {site.unit}
          </span>
        )}
      </span>
    </span>
  )
}
