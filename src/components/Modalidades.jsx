import { useCallback, useMemo, useState } from 'react'
import { ArrowRight, Check, Clock, Info } from 'lucide-react'
import { modalidades, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { Icon, WhatsAppIcon } from '../lib/icons.jsx'
import { SmartImage } from './ui/SmartImage.jsx'
import { Reveal } from './ui/Reveal.jsx'
import { SectionHeading } from './ui/SectionHeading.jsx'
import { Modal } from './ui/Modal.jsx'

/** Categorias geradas a partir da configuração — nada fica hard-coded aqui. */
function useFiltros() {
  return useMemo(() => {
    const tags = [...new Set(modalidades.map((m) => m.tag))]
    return ['Todas', ...tags]
  }, [])
}

export function Modalidades() {
  const filtros = useFiltros()
  const [filtro, setFiltro] = useState('Todas')
  const [aberta, setAberta] = useState(null)

  const lista = useMemo(
    () => (filtro === 'Todas' ? modalidades : modalidades.filter((m) => m.tag === filtro)),
    [filtro],
  )

  const fechar = useCallback(() => setAberta(null), [])

  return (
    <section
      id="modalidades"
      aria-labelledby="modalidades-titulo"
      className="section relative border-y border-line bg-ink-2"
    >
      <div
        aria-hidden="true"
        className="glow"
        style={{
          width: 'min(60vw, 520px)',
          height: 'min(60vw, 520px)',
          right: '-12%',
          top: '6%',
          background: 'rgba(255,36,54,.10)',
        }}
      />

      <div className="shell relative">
        <SectionHeading
          id="modalidades-titulo"
          eyebrow="Modalidades"
          title={
            <>
              Escolha como você
              <br />
              quer <span className="brand-text">treinar</span>
            </>
          }
          description="Musculação e aulas coletivas em um mesmo lugar. Toque em uma modalidade para ver os detalhes."
        />

        {/* ---------- Filtros ---------- */}
        <Reveal delay={140} className="mt-9 -mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Filtrar modalidades por categoria"
            className="flex w-max gap-2 sm:w-auto sm:flex-wrap"
          >
            {filtros.map((tag) => {
              const ativo = filtro === tag
              return (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={ativo}
                  onClick={() => setFiltro(tag)}
                  className={`rounded-full border px-4 py-2 font-display text-[0.72rem] font-bold tracking-[0.12em] uppercase transition-all duration-300 ${
                    ativo
                      ? 'border-brand bg-brand text-white'
                      : 'border-line bg-white/[0.03] text-[#b6bec9] hover:border-brand-light/50 hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ---------- Cards ---------- */}
        <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {lista.map((m, i) => (
            <Reveal
              as="li"
              key={m.id}
              delay={Math.min(i, 5) * 80}
              variant="reveal-scale"
              className="card card-hover group/card flex flex-col overflow-hidden"
            >
              {/* // SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE */}
              <div className="relative aspect-[16/10] w-full">
                <SmartImage
                  src={m.image}
                  alt={`Imagem ilustrativa de banco de imagens representando ${m.nome.toLowerCase()}`}
                  placeholderLabel={`Espaço reservado para foto de ${m.nome.toLowerCase()}`}
                  icon={m.icon}
                  className="h-full w-full"
                  imgClassName="img-zoom"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(7,8,10,.25) 0%, rgba(7,8,10,.15) 40%, rgba(17,20,25,.96) 100%)',
                  }}
                />
                <span className="absolute top-3.5 left-3.5 chip border-white/20 bg-black/55 text-white backdrop-blur-md">
                  {m.tag}
                </span>
                <span className="icon-badge absolute right-3.5 bottom-3.5 h-11 w-11 border-white/15 bg-black/55 backdrop-blur-md">
                  <Icon name={m.icon} size={20} />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <h3 className="display t-card leading-[1.05]">{m.nome}</h3>
                <p className="text-[0.9rem] leading-relaxed text-[#a9b2bd]">{m.resumo}</p>

                <button
                  type="button"
                  onClick={() => setAberta(m)}
                  className="btn btn-ghost mt-auto self-start px-0 text-brand-light hover:bg-transparent"
                  aria-label={`Saiba mais sobre ${m.nome}`}
                >
                  <span>Saiba mais</span>
                  <ArrowRight size={15} className="arrow" aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* ---------- Aviso de conteúdo a confirmar ---------- */}
        <Reveal
          delay={120}
          className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-light/20 bg-brand-light/[0.055] p-5 sm:mt-10"
        >
          <Info size={18} className="mt-0.5 shrink-0 text-brand-light" aria-hidden="true" />
          <p className="text-[0.85rem] leading-relaxed text-[#c3cbd6]">
            <strong className="font-semibold text-white">Conteúdo de demonstração.</strong> As
            modalidades acima foram usadas para montar esta apresentação e estão em uma estrutura
            fácil de editar. Nomes, disponibilidade e horários devem ser confirmados com a unidade
            antes da publicação oficial. Nenhum horário é exibido aqui de propósito.
          </p>
        </Reveal>
      </div>

      {/* ---------- Modal de detalhes ---------- */}
      <Modal open={Boolean(aberta)} onClose={fechar} labelledBy="modal-modalidade-titulo">
        {aberta && (
          <article>
            {/* // SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE */}
            <div className="relative aspect-[16/9] max-h-[38svh] w-full sm:max-h-[34svh]">
              <SmartImage
                src={aberta.image}
                alt={`Imagem ilustrativa de banco de imagens representando ${aberta.nome.toLowerCase()}`}
                placeholderLabel={`Espaço reservado para foto de ${aberta.nome.toLowerCase()}`}
                icon={aberta.icon}
                priority
                className="h-full w-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(11,13,17,.45) 0%, rgba(11,13,17,.35) 45%, rgba(11,13,17,.99) 100%)',
                }}
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-3.5 pr-14 sm:bottom-6 sm:left-7">
                <span className="icon-badge">
                  <Icon name={aberta.icon} size={23} />
                </span>
                <div>
                  <span className="font-display text-[0.6rem] font-bold tracking-[0.24em] text-brand-light uppercase">
                    {aberta.tag}
                  </span>
                  <h3
                    id="modal-modalidade-titulo"
                    className="display text-[1.35rem] leading-[1.05] sm:text-[1.85rem]"
                  >
                    {aberta.nome}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-5 sm:p-7">
              <p className="lead text-[1rem]">{aberta.sobre}</p>

              <div>
                <h4 className="font-display text-[0.68rem] font-bold tracking-[0.2em] text-fog uppercase">
                  O que esperar da modalidade
                </h4>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {aberta.topicos.map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-light/15 text-brand-light">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-[0.88rem] leading-relaxed text-[#c3cbd6]">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-white/[0.025] p-5">
                <span className="font-display text-[0.62rem] font-bold tracking-[0.2em] text-brand-light uppercase">
                  Indicado para
                </span>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-[#c3cbd6]">
                  {aberta.indicado}
                </p>
              </div>

              <div className="flex items-start gap-2.5 rounded-2xl border border-line bg-white/[0.02] p-4">
                <Clock size={16} className="mt-0.5 shrink-0 text-fog" aria-hidden="true" />
                <p className="text-[0.82rem] leading-relaxed text-fog">
                  <strong className="font-semibold text-[#c3cbd6]">Horários e disponibilidade:</strong>{' '}
                  consulte a unidade para informações atualizadas.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={waLink(
                    `Olá! Gostaria de saber mais sobre a modalidade ${aberta.nome} na academia.`,
                  )}
                  {...waAnchorProps}
                  className="btn btn-primary sm:flex-1"
                >
                  <WhatsAppIcon size={17} />
                  <span>Falar sobre esta modalidade</span>
                </a>
                <a
                  href={waLink(waMessages.aulas)}
                  {...waAnchorProps}
                  className="btn btn-outline sm:flex-1"
                >
                  <span>Ver aulas disponíveis</span>
                </a>
              </div>
            </div>
          </article>
        )}
      </Modal>
    </section>
  )
}
