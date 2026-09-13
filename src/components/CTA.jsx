import { ArrowRight } from 'lucide-react'
import { images, site, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { SmartImage } from './ui/SmartImage.jsx'
import { Reveal } from './ui/Reveal.jsx'
import { WhatsAppIcon } from '../lib/icons.jsx'

export function CTA() {
  return (
    <section aria-labelledby="cta-titulo" className="relative isolate overflow-hidden">
      {/* // SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE */}
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={images.cta}
          alt=""
          placeholderLabel=""
          icon="Flame"
          className="h-full w-full"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #07080a 0%, rgba(7,8,10,.86) 25%, rgba(7,8,10,.92) 75%, #07080a 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="glow"
          style={{
            width: 'min(80vw, 700px)',
            height: 'min(80vw, 700px)',
            left: '50%',
            top: '10%',
            transform: 'translateX(-50%)',
            background: 'rgba(255,36,54,.15)',
          }}
        />
      </div>

      <div className="shell relative flex flex-col items-center py-[clamp(80px,12vw,160px)] text-center">
        <Reveal as="span" className="eyebrow">
          Próximo passo
        </Reveal>

        <Reveal as="h2" delay={70} id="cta-titulo" className="display t-section mt-6 max-w-[22ch]">
          Seu objetivo.
          <br />
          Seu treino.
          <br />
          <span className="brand-text">Seu próximo nível.</span>
        </Reveal>

        <Reveal as="p" delay={150} className="lead mt-6 max-w-[44ch] sm:text-[1.15rem]">
          Comece hoje a construir uma rotina mais ativa.
        </Reveal>

        <Reveal delay={220} className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={waLink(waMessages.geral)} {...waAnchorProps} className="btn btn-primary btn-lg">
            <WhatsAppIcon size={18} />
            <span>Quero conhecer</span>
          </a>
          <a href="#planos" className="btn btn-outline btn-lg">
            <span>Ver planos</span>
            <ArrowRight size={17} className="arrow" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={280} className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span className="chip">📍 {site.addressShort}</span>
          <span className="chip">Musculação</span>
          <span className="chip">Aulas coletivas</span>
        </Reveal>
      </div>
    </section>
  )
}
