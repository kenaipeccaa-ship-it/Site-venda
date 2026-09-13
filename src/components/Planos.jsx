import { ArrowUpRight, Check, Info } from 'lucide-react'
import { planos, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { Icon, WhatsAppIcon } from '../lib/icons.jsx'
import { Reveal } from './ui/Reveal.jsx'
import { SectionHeading } from './ui/SectionHeading.jsx'

export function Planos() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-titulo"
      className="section grid-bg relative border-y border-line bg-ink-2"
    >
      <div className="shell relative">
        <SectionHeading
          align="center"
          id="planos-titulo"
          eyebrow="Planos"
          title={
            <>
              Escolha seu <span className="volt-text">plano</span>
            </>
          }
          description="Três formatos pensados para momentos diferentes de treino. Valores e condições são informados diretamente pela unidade."
          className="mx-auto"
        />

        <ul className="mx-auto mt-12 grid max-w-md gap-4 sm:mt-16 sm:max-w-xl sm:gap-5 lg:max-w-none lg:grid-cols-3">
          {planos.map((plano, i) => (
            <Reveal
              as="li"
              key={plano.id}
              delay={i * 110}
              variant="reveal-scale"
              className={`card card-hover group/card relative flex flex-col overflow-hidden p-6 sm:p-7 ${
                plano.destaque
                  ? 'border-volt/45 bg-gradient-to-b from-volt/[0.07] to-transparent lg:-mt-4 lg:mb-4 lg:shadow-[0_30px_80px_-40px_rgba(201,251,69,.30)]'
                  : ''
              }`}
            >
              {/* Etiqueta puramente visual: NÃO afirma popularidade nem número de
                  contratações — nenhum dado desse tipo foi inventado. */}
              {plano.destaque && (
                <span className="absolute top-0 right-0 rounded-bl-2xl bg-volt px-4 py-1.5 font-display text-[0.6rem] font-bold tracking-[0.18em] text-[#0a0f02] uppercase">
                  Destaque
                </span>
              )}

              <span className="icon-badge">
                <Icon name={plano.icon} size={23} />
              </span>

              <h3 className="display mt-5 text-[1.4rem] sm:text-[1.6rem]">{plano.nome}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-[#a9b2bd]">{plano.resumo}</p>

              <div className="my-6">
                <div className="hairline" />
                <div className="pt-6">
                  <span className="font-display text-[0.6rem] font-bold tracking-[0.22em] text-fog uppercase">
                    Investimento
                  </span>
                  {/* ⚠️ NENHUM PREÇO É INVENTADO — o valor sempre remete à unidade. */}
                  <p className="display mt-2 text-[1.25rem] leading-tight text-volt sm:text-[1.4rem]">
                    {plano.preco}
                  </p>
                </div>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {plano.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-volt/15 text-volt">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-[0.87rem] leading-relaxed text-[#c3cbd6]">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`${waMessages.planos} Tenho interesse no plano ${plano.nome}.`)}
                {...waAnchorProps}
                className={`btn mt-7 btn-block ${plano.destaque ? 'btn-primary' : 'btn-outline'}`}
                aria-label={`Quero saber mais sobre o plano ${plano.nome} pelo WhatsApp`}
              >
                {plano.destaque ? <WhatsAppIcon size={17} /> : null}
                <span>Quero saber mais</span>
                {!plano.destaque && <ArrowUpRight size={15} className="arrow" aria-hidden="true" />}
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal
          delay={120}
          className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-line bg-surface p-5 sm:mt-10"
        >
          <Info size={18} className="mt-0.5 shrink-0 text-volt" aria-hidden="true" />
          <p className="text-[0.85rem] leading-relaxed text-[#c3cbd6]">
            <strong className="font-semibold text-white">Sem valores nesta demonstração.</strong>{' '}
            Preços, benefícios, vigência e condições de cada plano devem ser confirmados com a
            unidade. Os itens listados descrevem possibilidades de layout, não uma oferta comercial.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
