import { objetivos, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { Icon, WhatsAppIcon } from '../lib/icons.jsx'
import { Reveal } from './ui/Reveal.jsx'
import { SectionHeading } from './ui/SectionHeading.jsx'

export function Objetivos() {
  return (
    <section
      id="objetivos"
      aria-labelledby="objetivos-titulo"
      className="section relative border-y border-line bg-ink-2"
    >
      <div className="shell relative">
        <SectionHeading
          align="center"
          id="objetivos-titulo"
          eyebrow="Objetivos"
          title={
            <>
              Qual é o seu <span className="volt-text">objetivo</span>?
            </>
          }
          description="O ponto de partida muda de pessoa para pessoa. O treino é organizado a partir do que você quer construir."
          className="mx-auto"
        />

        <ul className="mt-11 grid gap-3.5 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {objetivos.map((obj, i) => (
            <Reveal
              as="li"
              key={obj.id}
              delay={i * 80}
              variant="reveal-scale"
              className="card card-hover group/card relative flex items-center gap-4 overflow-hidden p-5 lg:flex-col lg:items-start lg:justify-between lg:gap-8 lg:p-6"
            >
              {/* Emoji decorativo do briefing, em marca d'água no canto do card */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-1 -right-1 text-[2.6rem] opacity-15 transition-all duration-500 select-none group-hover/card:scale-110 group-hover/card:opacity-30 lg:text-[3.2rem]"
              >
                {obj.emoji}
              </span>

              <span className="icon-badge shrink-0" aria-hidden="true">
                <Icon name={obj.icon} size={22} />
              </span>

              <h3 className="display relative text-[0.98rem] leading-[1.15] sm:text-[1.05rem]">
                {obj.titulo}
              </h3>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140} className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-[58ch] text-[0.84rem] leading-relaxed text-fog">
            Cada objetivo é conduzido de forma individual, respeitando o histórico e o momento de
            cada aluno. Esta página não promete resultados específicos nem faz recomendações de
            saúde — orientações individuais devem ser tratadas com profissionais da unidade.
          </p>
          <a href={waLink(waMessages.geral)} {...waAnchorProps} className="btn btn-outline">
            <WhatsAppIcon size={16} />
            <span>Falar sobre o meu objetivo</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
