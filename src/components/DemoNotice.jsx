import { Info } from 'lucide-react'

/**
 * Faixa de transparência exibida no topo de todas as telas.
 * ----------------------------------------------------------------------------
 * Deixa explícito que esta página é uma DEMONSTRAÇÃO DE CONCEITO independente,
 * e não uma publicação oficial da academia.
 * Mantenha esta faixa enquanto o projeto estiver em fase de apresentação.
 */
export function DemoNotice() {
  return (
    <div
      role="note"
      className="border-b border-brand-light/20 bg-[#140406]/95 text-brand-light backdrop-blur-xl"
    >
      <div className="shell flex items-center justify-center gap-2.5 py-2 text-center">
        <Info size={13} className="hidden shrink-0 sm:block" aria-hidden="true" />
        <p className="text-[0.6rem] leading-tight font-semibold tracking-[0.14em] uppercase sm:text-[0.68rem]">
          Demonstração de conceito
          <span className="mx-2 hidden opacity-40 sm:inline" aria-hidden="true">
            /
          </span>
          <span className="hidden font-medium tracking-[0.08em] normal-case opacity-90 sm:inline">
            Projeto independente — conteúdo de exemplo, não oficial
          </span>
          <span className="ml-1.5 font-medium tracking-[0.08em] opacity-80 sm:hidden">
            · não oficial
          </span>
        </p>
      </div>
    </div>
  )
}
