import { useState } from 'react'
import { Check, Info, Send, ShieldCheck } from 'lucide-react'
import { formOptions, images, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { WhatsAppIcon } from '../lib/icons.jsx'
import { SmartImage } from './ui/SmartImage.jsx'
import { Reveal } from './ui/Reveal.jsx'

const CAMPOS_INICIAIS = {
  nome: '',
  whatsapp: '',
  objetivo: '',
  modalidade: '',
  horario: '',
}

/** Máscara simples de telefone brasileiro: (19) 99999-9999 */
function mascararTelefone(valor) {
  const d = valor.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.replace(/^(\d{0,2})/, '($1')
  if (d.length <= 6) return d.replace(/^(\d{2})(\d{0,4})/, '($1) $2')
  if (d.length <= 10) return d.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
  return d.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
}

function validar(dados) {
  const erros = {}
  if (dados.nome.trim().length < 2) erros.nome = 'Informe seu nome.'
  if (dados.whatsapp.replace(/\D/g, '').length < 10) {
    erros.whatsapp = 'Informe um WhatsApp com DDD.'
  }
  if (!dados.objetivo) erros.objetivo = 'Selecione um objetivo.'
  if (!dados.modalidade) erros.modalidade = 'Selecione uma modalidade.'
  if (!dados.horario) erros.horario = 'Selecione um horário.'
  return erros
}

export function AulaExperimental() {
  const [dados, setDados] = useState(CAMPOS_INICIAIS)
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)

  const atualizar = (campo) => (event) => {
    const valor = campo === 'whatsapp' ? mascararTelefone(event.target.value) : event.target.value
    setDados((prev) => ({ ...prev, [campo]: valor }))
    setErros((prev) => (prev[campo] ? { ...prev, [campo]: undefined } : prev))
  }

  const enviar = (event) => {
    event.preventDefault()
    const novosErros = validar(dados)
    setErros(novosErros)
    if (Object.keys(novosErros).length) {
      // foca o primeiro campo com erro
      const primeiro = document.getElementById(`campo-${Object.keys(novosErros)[0]}`)
      primeiro?.focus()
      return
    }
    /* ------------------------------------------------------------------
     * DEMONSTRAÇÃO: nenhum dado é enviado, salvo ou compartilhado.
     * Para integrar de verdade, troque este bloco por uma chamada à API,
     * a um serviço de formulários ou a um webhook do CRM da unidade.
     * ---------------------------------------------------------------- */
    setEnviado(true)
  }

  const reenviar = () => {
    setDados(CAMPOS_INICIAIS)
    setErros({})
    setEnviado(false)
  }

  /** Mensagem opcional para levar o mesmo interesse ao WhatsApp. */
  const mensagemWa = [
    'Olá! Gostaria de agendar uma aula experimental.',
    dados.nome && `Nome: ${dados.nome}`,
    dados.objetivo && `Objetivo: ${dados.objetivo}`,
    dados.modalidade && `Modalidade de interesse: ${dados.modalidade}`,
    dados.horario && `Melhor horário para contato: ${dados.horario}`,
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <section id="experimental" aria-labelledby="experimental-titulo" className="relative isolate overflow-hidden">
      {/* ---------- Fundo ----------
          // SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE */}
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={images.experimental}
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
              'linear-gradient(180deg, #07080a 0%, rgba(7,8,10,.90) 18%, rgba(7,8,10,.93) 70%, #07080a 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="glow"
          style={{
            width: 'min(70vw, 560px)',
            height: 'min(70vw, 560px)',
            right: '-10%',
            bottom: '-18%',
            background: 'rgba(255,36,54,.14)',
          }}
        />
      </div>

      <div className="shell section relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16 xl:gap-20">
          {/* ---------- Conteúdo ---------- */}
          <div className="flex flex-col justify-center">
            <Reveal as="span" className="eyebrow">
              Aula experimental
            </Reveal>

            <Reveal as="h2" delay={60} id="experimental-titulo" className="display t-section mt-5">
              Venha <span className="brand-text">conhecer</span>
            </Reveal>

            <Reveal as="p" delay={130} className="lead mt-6 max-w-[48ch] sm:text-[1.18rem]">
              Antes de decidir, conheça o ambiente, a estrutura e as possibilidades de treino.
            </Reveal>

            <Reveal delay={200} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={waLink(waMessages.experimental)}
                {...waAnchorProps}
                className="btn btn-primary btn-lg"
              >
                <WhatsAppIcon size={18} />
                <span>Quero fazer uma aula experimental</span>
              </a>
            </Reveal>

            <Reveal delay={260} className="mt-10 flex flex-col gap-3.5">
              {[
                'Conheça as áreas de treino antes de fechar qualquer plano',
                'Tire dúvidas sobre modalidades diretamente com a equipe',
                'Condições e regras da aula experimental: consulte a unidade',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-light/15 text-brand-light">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[0.9rem] leading-relaxed text-[#c3cbd6]">{item}</span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* ---------- Formulário ---------- */}
          <Reveal delay={140} variant="reveal-scale" className="lg:pt-2">
            <div className="card overflow-hidden border-line/90 bg-surface/95 backdrop-blur-xl">
              {!enviado ? (
                <form onSubmit={enviar} noValidate className="flex flex-col gap-5 p-6 sm:p-8">
                  <header className="flex flex-col gap-1.5">
                    <h3 className="display text-[1.2rem] sm:text-[1.35rem]">
                      Registre seu interesse
                    </h3>
                    <p className="text-[0.85rem] leading-relaxed text-fog">
                      Preencha os campos e a equipe da unidade poderá dar continuidade ao contato.
                    </p>
                  </header>

                  <div className="field">
                    <label className="field-label" htmlFor="campo-nome">
                      Nome
                    </label>
                    <input
                      id="campo-nome"
                      name="nome"
                      type="text"
                      autoComplete="name"
                      placeholder="Seu nome completo"
                      value={dados.nome}
                      onChange={atualizar('nome')}
                      aria-invalid={Boolean(erros.nome)}
                      aria-describedby={erros.nome ? 'erro-nome' : undefined}
                      className={`input ${erros.nome ? 'input-error' : ''}`}
                    />
                    {erros.nome && (
                      <span id="erro-nome" role="alert" className="error-msg">
                        <Info size={13} aria-hidden="true" /> {erros.nome}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label className="field-label" htmlFor="campo-whatsapp">
                      WhatsApp
                    </label>
                    <input
                      id="campo-whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="(19) 99999-9999"
                      value={dados.whatsapp}
                      onChange={atualizar('whatsapp')}
                      aria-invalid={Boolean(erros.whatsapp)}
                      aria-describedby={erros.whatsapp ? 'erro-whatsapp' : undefined}
                      className={`input ${erros.whatsapp ? 'input-error' : ''}`}
                    />
                    {erros.whatsapp && (
                      <span id="erro-whatsapp" role="alert" className="error-msg">
                        <Info size={13} aria-hidden="true" /> {erros.whatsapp}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label className="field-label" htmlFor="campo-objetivo">
                      Objetivo
                    </label>
                    <select
                      id="campo-objetivo"
                      name="objetivo"
                      value={dados.objetivo}
                      onChange={atualizar('objetivo')}
                      aria-invalid={Boolean(erros.objetivo)}
                      aria-describedby={erros.objetivo ? 'erro-objetivo' : undefined}
                      className={`input ${erros.objetivo ? 'input-error' : ''}`}
                    >
                      <option value="">Selecione seu objetivo</option>
                      {formOptions.objetivos.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    {erros.objetivo && (
                      <span id="erro-objetivo" role="alert" className="error-msg">
                        <Info size={13} aria-hidden="true" /> {erros.objetivo}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label className="field-label" htmlFor="campo-modalidade">
                      Modalidade de interesse
                    </label>
                    <select
                      id="campo-modalidade"
                      name="modalidade"
                      value={dados.modalidade}
                      onChange={atualizar('modalidade')}
                      aria-invalid={Boolean(erros.modalidade)}
                      aria-describedby={erros.modalidade ? 'erro-modalidade' : undefined}
                      className={`input ${erros.modalidade ? 'input-error' : ''}`}
                    >
                      <option value="">Selecione uma modalidade</option>
                      {formOptions.modalidades.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                    {erros.modalidade && (
                      <span id="erro-modalidade" role="alert" className="error-msg">
                        <Info size={13} aria-hidden="true" /> {erros.modalidade}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label className="field-label" htmlFor="campo-horario">
                      Melhor horário para contato
                    </label>
                    <select
                      id="campo-horario"
                      name="horario"
                      value={dados.horario}
                      onChange={atualizar('horario')}
                      aria-invalid={Boolean(erros.horario)}
                      aria-describedby={erros.horario ? 'erro-horario' : undefined}
                      className={`input ${erros.horario ? 'input-error' : ''}`}
                    >
                      <option value="">Selecione um período</option>
                      {formOptions.horarios.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                    {erros.horario && (
                      <span id="erro-horario" role="alert" className="error-msg">
                        <Info size={13} aria-hidden="true" /> {erros.horario}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg mt-1">
                    <Send size={17} aria-hidden="true" />
                    <span>Enviar interesse</span>
                  </button>

                  <p className="flex items-start gap-2 text-[0.74rem] leading-relaxed text-fog">
                    <ShieldCheck size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                    Demonstração: os dados não são enviados, armazenados nem compartilhados. O envio
                    apenas simula o fluxo de contato.
                  </p>
                </form>
              ) : (
                /* ---------- Estado de sucesso ---------- */
                <div
                  className="flex flex-col items-center gap-5 p-8 text-center sm:p-10"
                  style={{ animation: 'fadeUpIn .45s var(--ease-out-soft) both' }}
                >
                  <span className="grid h-16 w-16 place-items-center rounded-2xl border border-brand-light/35 bg-brand-light/12 text-brand-light">
                    <Check size={30} strokeWidth={2.6} aria-hidden="true" />
                  </span>

                  <div role="status" aria-live="polite" className="flex flex-col gap-2.5">
                    <h3 className="display text-[1.3rem] sm:text-[1.5rem]">
                      Obrigado! Sua solicitação foi registrada nesta demonstração.
                    </h3>
                    <p className="text-[0.9rem] leading-relaxed text-[#a9b2bd]">
                      Nenhum dado foi enviado ou armazenado. Em uma publicação oficial, esta
                      mensagem seria seguida do contato da equipe da unidade.
                    </p>
                  </div>

                  <div className="mt-1 flex w-full flex-col gap-2.5">
                    <a href={waLink(mensagemWa)} {...waAnchorProps} className="btn btn-primary btn-block">
                      <WhatsAppIcon size={17} />
                      <span>Continuar no WhatsApp</span>
                    </a>
                    <button type="button" onClick={reenviar} className="btn btn-outline btn-block">
                      Enviar outro interesse
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
