import { ArrowRight, MapPin } from 'lucide-react'
import { images, site, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { SmartImage } from './ui/SmartImage.jsx'
import { Reveal } from './ui/Reveal.jsx'
import { WhatsAppIcon } from '../lib/icons.jsx'

/** Faixa rolante de destaques — reforça as três frentes de treino. */
const HIGHLIGHTS = ['Musculação', 'Cardio', 'Aulas coletivas']

/* Sequência repetida para o loop contínuo da faixa (duas cópias = 50% de deslocamento) */
const MARQUEE_ITEMS = Array.from({ length: 4 }).flatMap((_, block) =>
  HIGHLIGHTS.map((word) => ({ word, key: `${block}-${word}` })),
)

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="relative isolate overflow-hidden">
      {/* ---------- Imagem de fundo ----------
          // SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE
          Imagem ilustrativa de banco de imagens, usada apenas como placeholder. */}
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={images.hero}
          alt="Imagem ilustrativa de banco de imagens mostrando um ambiente de academia com equipamentos de musculação"
          placeholderLabel="Espaço reservado para a foto principal da unidade"
          icon="Dumbbell"
          priority
          className="h-full w-full"
          imgClassName="object-center"
        />
        {/* Camadas de overlay: garantem contraste de leitura em qualquer imagem */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(7,8,10,.92) 0%, rgba(7,8,10,.62) 32%, rgba(7,8,10,.80) 72%, #07080a 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 85% at 12% 40%, rgba(7,8,10,.94) 0%, rgba(7,8,10,.35) 55%, transparent 78%)',
          }}
        />
        <div
          aria-hidden="true"
          className="glow"
          style={{
            width: 'min(70vw, 620px)',
            height: 'min(70vw, 620px)',
            left: '-14%',
            bottom: '-22%',
            background: 'rgba(201,251,69,.16)',
            animation: 'softPulse 9s ease-in-out infinite',
          }}
        />
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pt-[132px] pb-8 sm:min-h-[92svh] sm:justify-center sm:pt-[150px] sm:pb-[132px] lg:min-h-[100svh]">
        <div className="max-w-[64rem]">
          <Reveal as="div" className="mb-6 flex flex-wrap items-center gap-2.5">
            <span className="chip border-volt/35 bg-volt/10 text-volt">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-volt"
                style={{ animation: 'softPulse 2.4s ease-in-out infinite' }}
              />
              <span className="hidden sm:inline">Academia · </span>
              {site.region}
            </span>
            <span className="chip">Campinas/SP</span>
          </Reveal>

          <Reveal as="h1" delay={80} id="hero-titulo" className="display t-hero">
            Seu próximo nível
            <br />
            <span className="volt-text">começa aqui.</span>
          </Reveal>

          <Reveal as="p" delay={180} className="lead mt-6 max-w-[46ch] sm:mt-7 sm:text-[1.2rem]">
            Treine, evolua e faça parte de uma experiência pensada para quem busca mais
            disposição, saúde e performance.
          </Reveal>

          <Reveal delay={260} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href={waLink(waMessages.experimental)}
              {...waAnchorProps}
              className="btn btn-primary btn-lg"
            >
              <WhatsAppIcon size={18} />
              <span>Quero fazer uma aula experimental</span>
            </a>
            <a href="#academia" className="btn btn-outline btn-lg">
              <span>Conhecer a academia</span>
              <ArrowRight size={17} className="arrow" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={340} className="mt-8 flex items-center gap-2.5 sm:mt-9">
            <MapPin size={17} className="shrink-0 text-volt" aria-hidden="true" />
            <p className="text-[0.9rem] font-medium text-[#c3cbd6]">
              {site.addressShort}
              <span className="block text-[0.78rem] text-fog sm:ml-2 sm:inline">
                (endereço completo: consulte a unidade)
              </span>
            </p>
          </Reveal>
        </div>

        {/* ---------- Indicador de rolagem (desktop) ---------- */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 bottom-[150px] hidden flex-col items-center gap-3 lg:flex"
        >
          <span className="font-display text-[0.6rem] font-bold tracking-[0.3em] text-fog [writing-mode:vertical-rl]">
            Role para ver
          </span>
          <span className="relative h-12 w-[1px] bg-line">
            <span className="scroll-hint-dot absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-volt" />
          </span>
        </div>
      </div>

      {/* ---------- Faixa rolante ---------- */}
      <div className="relative border-y border-line bg-ink-2/70 backdrop-blur-sm">
        <div className="flex overflow-hidden py-3.5 sm:py-4">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex items-center" aria-hidden={copy === 1}>
                {MARQUEE_ITEMS.map((item) => (
                  <li
                    key={`${copy}-${item.key}`}
                    className="flex items-center gap-5 px-5 sm:gap-7 sm:px-7"
                  >
                    <span className="font-display text-[0.78rem] font-bold tracking-[0.26em] whitespace-nowrap text-[#dfe4ea] uppercase sm:text-[0.92rem]">
                      {item.word}
                    </span>
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-volt" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
