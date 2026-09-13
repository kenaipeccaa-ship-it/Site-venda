import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { waMessages, WHATSAPP_IS_PLACEHOLDER } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { WhatsAppIcon } from '../lib/icons.jsx'
import { useScrolled } from '../hooks/useScrolled.js'

/**
 * Botão flutuante de WhatsApp com mensagens prontas.
 * O número vem de uma ÚNICA variável: WHATSAPP_NUMBER (src/config/site.js).
 */
const ATALHOS = [
  { label: 'Conhecer os planos', message: waMessages.geral },
  { label: 'Aula experimental', message: waMessages.experimental },
  { label: 'Aulas disponíveis', message: waMessages.aulas },
]

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const visible = useScrolled(320)
  const wrapperRef = useRef(null)
  const painelAberto = open && visible

  // Fecha ao clicar fora ou com Esc
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      ref={wrapperRef}
      className={`fixed right-4 z-[110] flex flex-col items-end gap-3 transition-all duration-500 sm:right-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      {/* ---------- Painel de atalhos ---------- */}
      {painelAberto && (
        <div
          id="wa-atalhos"
          className="w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-[20px] border border-line bg-ink-2/97 shadow-[0_30px_70px_-30px_rgba(0,0,0,1)] backdrop-blur-xl"
          style={{ animation: 'fadeUpIn .28s var(--ease-out-soft) both' }}
        >
          <div className="flex items-center gap-3 border-b border-line bg-white/[0.03] p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-white">
              <WhatsAppIcon size={18} />
            </span>
            <div className="min-w-0">
              <p className="font-display text-[0.8rem] font-bold tracking-[0.06em] uppercase">
                Falar no WhatsApp
              </p>
              <p className="truncate text-[0.72rem] text-fog">Escolha um assunto para começar</p>
            </div>
          </div>

          <ul className="flex flex-col p-2">
            {ATALHOS.map((atalho) => (
              <li key={atalho.label}>
                <a
                  href={waLink(atalho.message)}
                  {...waAnchorProps}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-[0.86rem] text-[#c3cbd6] transition-colors hover:bg-brand-light/10 hover:text-brand-light"
                >
                  <span>{atalho.label}</span>
                  <WhatsAppIcon size={15} />
                </a>
              </li>
            ))}
          </ul>

          {WHATSAPP_IS_PLACEHOLDER && (
            <p className="border-t border-line px-4 py-3 text-[0.68rem] leading-relaxed text-fog">
              Demonstração: o número de WhatsApp é um <strong>placeholder</strong>. Substitua a
              variável <code className="text-brand-light/90">WHATSAPP_NUMBER</code> pelo contato oficial.
            </p>
          )}
        </div>
      )}

      {/* ---------- Botão ---------- */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={painelAberto}
        aria-controls="wa-atalhos"
        aria-label={painelAberto ? 'Fechar atalhos do WhatsApp' : 'Abrir atalhos do WhatsApp'}
        className="group flex items-center gap-2.5 rounded-full bg-brand py-3.5 pr-4 pl-4 font-display text-[0.76rem] font-bold tracking-[0.1em] text-white uppercase shadow-[0_14px_38px_-14px_rgba(227,6,19,.85)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_-14px_rgba(227,6,19,.95)] active:translate-y-0 active:scale-[0.97] sm:pr-5"
      >
        <WhatsAppIcon size={20} />
        <span className="hidden sm:inline">Falar no WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
        <ChevronDown
          size={15}
          aria-hidden="true"
          className={`transition-transform duration-400 ${painelAberto ? 'rotate-0' : 'rotate-180'}`}
        />
      </button>
    </div>
  )
}
