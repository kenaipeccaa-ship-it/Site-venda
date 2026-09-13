import { ImageOff } from 'lucide-react'
import { galeria, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { Icon } from '../lib/icons.jsx'
import { SmartImage } from './ui/SmartImage.jsx'
import { Reveal } from './ui/Reveal.jsx'
import { SectionHeading } from './ui/SectionHeading.jsx'

export function Estrutura() {
  return (
    <section id="estrutura" aria-labelledby="estrutura-titulo" className="section relative">
      <div className="shell relative">
        <SectionHeading
          id="estrutura-titulo"
          eyebrow="Estrutura"
          title={
            <>
              Um espaço para
              <br />
              você <span className="volt-text">evoluir</span>
            </>
          }
          description="Áreas de musculação, cardio e aulas coletivas organizadas para que cada treino tenha o seu lugar."
        />

        {/* ---------- Galeria ----------
            // SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE
            As imagens abaixo são genéricas, de banco de imagens, e servem apenas
            como PLACEHOLDER de layout. Elas NÃO retratam a unidade. */}
        <ul className="mt-11 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-6">
          {galeria.map((item, i) => {
            const wide = item.span === 'wide'
            return (
              <Reveal
                as="li"
                key={item.id}
                delay={Math.min(i, 4) * 90}
                variant="reveal-scale"
                className={`card card-hover group/card relative overflow-hidden ${
                  wide ? 'lg:col-span-3' : 'lg:col-span-2'
                }`}
              >
                <div className={`relative w-full ${wide ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                  <SmartImage
                    src={item.image}
                    alt={`Imagem ilustrativa de banco de imagens representando ${item.titulo.toLowerCase()} — não é foto da unidade`}
                    placeholderLabel={`Espaço reservado: ${item.titulo}`}
                    icon={item.icon}
                    className="h-full w-full"
                    imgClassName="img-zoom"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(7,8,10,.15) 0%, rgba(7,8,10,.10) 35%, rgba(7,8,10,.93) 100%)',
                    }}
                  />

                  {/* Selo de transparência: deixa claro que a foto é ilustrativa */}
                  <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.1em] text-white/80 uppercase backdrop-blur-md">
                    <ImageOff size={11} aria-hidden="true" />
                    Foto ilustrativa
                  </span>

                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5">
                    <div>
                      <h3 className="display text-[1rem] sm:text-[1.15rem]">{item.titulo}</h3>
                      <p className="mt-1 text-[0.8rem] leading-snug text-[#a9b2bd]">
                        {item.legenda}
                      </p>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/15 bg-black/50 text-volt backdrop-blur-md">
                      <Icon name={item.icon} size={16} />
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>

        <Reveal
          delay={120}
          className="mt-8 flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div className="flex items-start gap-3">
            <ImageOff size={18} className="mt-0.5 shrink-0 text-volt" aria-hidden="true" />
            <p className="max-w-[62ch] text-[0.85rem] leading-relaxed text-[#c3cbd6]">
              <strong className="font-semibold text-white">Imagens ilustrativas.</strong> Esta
              demonstração usa fotos genéricas de banco de imagens como espaço reservado. Na versão
              oficial, todas devem ser substituídas por fotos reais da unidade.
            </p>
          </div>
          <a
            href={waLink(waMessages.geral)}
            {...waAnchorProps}
            className="btn btn-outline btn-sm shrink-0"
          >
            Conhecer a estrutura
          </a>
        </Reveal>
      </div>
    </section>
  )
}
