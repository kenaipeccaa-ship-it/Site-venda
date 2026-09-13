import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faq, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { WhatsAppIcon } from '../lib/icons.jsx'
import { Reveal } from './ui/Reveal.jsx'
import { SectionHeading } from './ui/SectionHeading.jsx'

export function FAQ() {
  const [aberto, setAberto] = useState(0)

  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      className="section relative border-t border-line bg-ink-2"
    >
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col lg:sticky lg:top-[130px] lg:self-start">
            <SectionHeading
              id="faq-titulo"
              eyebrow="FAQ"
              titleClassName="text-[clamp(1.9rem,5vw,2.9rem)]"
              title={
                <>
                  Perguntas <span className="brand-text">frequentes</span>
                </>
              }
              description="Quando a informação ainda não está confirmada, a resposta remete diretamente à unidade — nunca a uma suposição."
            />

            <Reveal delay={180} className="mt-8">
              <a href={waLink(waMessages.geral)} {...waAnchorProps} className="btn btn-outline">
                <WhatsAppIcon size={16} />
                <span>Tirar dúvidas no WhatsApp</span>
              </a>
            </Reveal>
          </div>

          {/* ---------- Acordeão ---------- */}
          <Reveal delay={80} className="flex flex-col">
            <ul className="flex flex-col gap-3">
              {faq.map((item, i) => {
                const open = aberto === i
                return (
                  <li
                    key={item.q}
                    className={`card overflow-hidden transition-colors duration-400 ${
                      open ? 'border-brand-light/40 bg-surface-2' : ''
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={`faq-painel-${i}`}
                        id={`faq-botao-${i}`}
                        onClick={() => setAberto(open ? -1 : i)}
                        className="flex w-full items-start justify-between gap-4 p-5 text-left sm:gap-6 sm:p-6"
                      >
                        <span
                          className={`font-display text-[0.98rem] font-bold tracking-[-0.01em] transition-colors duration-300 sm:text-[1.08rem] ${
                            open ? 'text-brand-light' : 'text-white'
                          }`}
                        >
                          {item.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-400 ${
                            open
                              ? 'rotate-[135deg] border-brand bg-brand text-white'
                              : 'border-line text-fog'
                          }`}
                        >
                          <Plus size={15} strokeWidth={2.6} />
                        </span>
                      </button>
                    </h3>

                    <div className="acc-panel" data-open={open}>
                      <div>
                        <div
                          id={`faq-painel-${i}`}
                          role="region"
                          aria-labelledby={`faq-botao-${i}`}
                          className="px-5 pb-5 sm:px-6 sm:pb-6"
                        >
                          <div className="hairline mb-4" />
                          <p className="text-[0.89rem] leading-relaxed text-[#b0b9c4]">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
