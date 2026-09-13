import { Info, MapPin, Navigation } from 'lucide-react'
import { site, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { WhatsAppIcon } from '../lib/icons.jsx'
import { Reveal } from './ui/Reveal.jsx'
import { SectionHeading } from './ui/SectionHeading.jsx'

export function Localizacao() {
  return (
    <section id="localizacao" aria-labelledby="localizacao-titulo" className="section relative">
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-14">
          {/* ---------- Informações ---------- */}
          <div className="flex flex-col">
            <SectionHeading
              id="localizacao-titulo"
              eyebrow="Localização"
              title={
                <>
                  Onde <span className="volt-text">estamos</span>
                </>
              }
            />

            <Reveal delay={120} className="mt-8 flex flex-col gap-4">
              <div className="card flex items-start gap-3.5 p-5">
                <span className="icon-badge h-11 w-11">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <span className="font-display text-[0.62rem] font-bold tracking-[0.2em] text-fog uppercase">
                    Região
                  </span>
                  <p className="display mt-1 text-[1.05rem]">{site.region}</p>
                  <p className="text-[0.86rem] text-[#a9b2bd]">{site.city}</p>
                </div>
              </div>

              {/* ⚠️ ENDEREÇO NÃO CONFIRMADO — marcador mantido de propósito. */}
              <div className="card flex flex-col gap-2.5 border-dashed border-volt/35 bg-volt/[0.04] p-5">
                <span className="font-display text-[0.62rem] font-bold tracking-[0.2em] text-volt uppercase">
                  Endereço
                </span>
                <p className="font-mono text-[0.82rem] leading-relaxed break-words text-[#c3cbd6]">
                  {site.addressPlaceholder}
                </p>
                <p className="text-[0.78rem] leading-relaxed text-fog">
                  O endereço exato não está confirmado nesta demonstração. Consulte a unidade para
                  informações atualizadas.
                </p>
              </div>

              <div className="card flex flex-col gap-2.5 p-5">
                <span className="font-display text-[0.62rem] font-bold tracking-[0.2em] text-fog uppercase">
                  Horários
                </span>
                {/* ⚠️ NENHUM HORÁRIO É INVENTADO. */}
                <p className="text-[0.9rem] leading-relaxed text-[#c3cbd6]">{site.hoursStatus}</p>
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary sm:flex-1"
              >
                <Navigation size={16} aria-hidden="true" />
                <span>Como chegar</span>
              </a>
              <a
                href={waLink(waMessages.localizacao)}
                {...waAnchorProps}
                className="btn btn-outline sm:flex-1"
              >
                <WhatsAppIcon size={16} />
                <span>Confirmar endereço</span>
              </a>
            </Reveal>
          </div>

          {/* ---------- Mapa ---------- */}
          <Reveal delay={100} variant="reveal-scale" className="flex flex-col">
            <div className="card relative min-h-[320px] flex-1 overflow-hidden p-0 sm:min-h-[420px]">
              {site.mapsEmbedUrl ? (
                /* Ao receber o link oficial de incorporação, o mapa real aparece aqui. */
                <iframe
                  title={`Mapa da unidade ${site.brand} ${site.unit}`}
                  src={site.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
                />
              ) : (
                /* ---------- Espaço reservado para o mapa ---------- */
                <div className="absolute inset-0 grid-bg flex flex-col items-center justify-center gap-5 p-7 text-center">
                  <div
                    aria-hidden="true"
                    className="glow"
                    style={{
                      width: '60%',
                      height: '60%',
                      left: '20%',
                      top: '20%',
                      background: 'rgba(201,251,69,.10)',
                    }}
                  />
                  <span className="float-y relative grid h-16 w-16 place-items-center rounded-2xl border border-volt/30 bg-volt/10 text-volt">
                    <MapPin size={28} aria-hidden="true" />
                  </span>
                  <div className="relative flex flex-col gap-2.5">
                    <p className="display text-[1.05rem] sm:text-[1.2rem]">
                      Espaço reservado para o mapa
                    </p>
                    <p className="mx-auto max-w-[34ch] font-mono text-[0.78rem] leading-relaxed text-volt/90">
                      {site.addressPlaceholder}
                    </p>
                    <p className="mx-auto max-w-[44ch] text-[0.8rem] leading-relaxed text-fog">
                      Ao confirmar o endereço oficial, o mapa interativo é exibido aqui — basta
                      preencher <code className="text-[#c3cbd6]">mapsEmbedUrl</code> na configuração
                      central.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
              <Info size={16} className="mt-0.5 shrink-0 text-volt" aria-hidden="true" />
              <p className="text-[0.8rem] leading-relaxed text-fog">
                Nenhum endereço, telefone ou horário foi inventado nesta demonstração. Todos os
                campos estão preparados para receber as informações oficiais da unidade.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
