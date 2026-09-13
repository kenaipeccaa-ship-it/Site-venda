import { diferenciais } from '../config/site.js'
import { Icon } from '../lib/icons.jsx'
import { Reveal } from './ui/Reveal.jsx'
import { SectionHeading } from './ui/SectionHeading.jsx'

export function Features() {
  return (
    <section id="academia" aria-labelledby="diferenciais-titulo" className="section grid-bg relative">
      <div className="shell relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeading
            id="diferenciais-titulo"
            eyebrow="A academia"
            title={
              <>
                Mais do que
                <br />
                uma <span className="volt-text">academia</span>
              </>
            }
            description="Uma proposta de treino construída em torno do ambiente, da variedade de estímulos e da constância — para que cada pessoa encontre o seu próprio caminho de evolução."
          />

          <Reveal delay={160} className="shrink-0 lg:max-w-[20rem]">
            <div className="card p-6">
              <p className="text-[0.95rem] leading-relaxed text-[#c3cbd6]">
                O objetivo desta página é simples: apresentar a estrutura com clareza e tornar o
                primeiro contato com a academia o mais fácil possível.
              </p>
              <div className="hairline my-5" />
              <p className="text-[0.78rem] leading-relaxed text-fog">
                Informações operacionais — como horários e condições comerciais — sempre remetem
                diretamente à unidade.
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {diferenciais.map((item, i) => (
            <Reveal
              as="li"
              key={item.id}
              delay={i * 90}
              variant="reveal-scale"
              className="card card-hover group/card flex flex-col gap-5 overflow-hidden p-6 sm:p-7"
            >
              <span className="icon-badge">
                <Icon name={item.icon} size={23} />
              </span>

              <div className="flex flex-col gap-2.5">
                <h3 className="display text-[1.05rem] tracking-[-0.01em] sm:text-[1.15rem]">
                  {item.titulo}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-[#a9b2bd]">{item.texto}</p>
              </div>

              <span
                aria-hidden="true"
                className="mt-auto h-[2px] w-8 origin-left rounded-full bg-volt transition-transform duration-500 group-hover/card:scale-x-[2.6]"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
