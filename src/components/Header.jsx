import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, site, waMessages } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { useScrolled } from '../hooks/useScrolled.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useLockScroll } from '../hooks/useLockScroll.js'
import { DemoNotice } from './DemoNotice.jsx'
import { Logo } from './Logo.jsx'
import { WhatsAppIcon } from '../lib/icons.jsx'

const SECTION_IDS = navLinks.map((l) => l.href.replace('#', ''))

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(30)
  const active = useActiveSection(SECTION_IDS)

  useLockScroll(menuOpen)

  // Fecha o menu com Esc e ao voltar para o desktop
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <>
      <a href="#modalidades" className="sr-only-focusable btn btn-primary btn-sm">
        Ir para o conteúdo
      </a>

      <div className="fixed top-0 right-0 left-0 z-[100]">
        <DemoNotice />

        <header
          className={`transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
            scrolled || menuOpen
              ? 'border-b border-line bg-ink/85 shadow-[0_10px_40px_-24px_rgba(0,0,0,1)] backdrop-blur-xl'
              : 'border-b border-transparent bg-transparent'
          }`}
        >
          <div className="shell flex h-[64px] items-center justify-between gap-4 sm:h-[72px]">
            <a
              href="#inicio"
              className="shrink-0 rounded-lg transition-opacity hover:opacity-85"
              aria-label={`${site.brand} ${site.unit} — ir para o início`}
              onClick={() => setMenuOpen(false)}
            >
              <Logo />
            </a>

            {/* ---------- Navegação desktop ---------- */}
            <nav aria-label="Navegação principal" className="hidden lg:block">
              <ul className="flex items-center gap-0.5">
                {navLinks.map((link) => {
                  const isActive = active === link.href.replace('#', '')
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={isActive ? 'true' : undefined}
                        className={`relative block rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors duration-300 xl:px-4 ${
                          isActive ? 'text-volt' : 'text-[#c3cbd6] hover:text-white'
                        }`}
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-volt transition-transform duration-400 ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* ---------- Ações ---------- */}
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={waLink(waMessages.geral)}
                {...waAnchorProps}
                className="btn btn-primary btn-sm hidden sm:inline-flex"
              >
                <span>Quero treinar</span>
                <ArrowUpRight size={15} className="arrow" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="menu-mobile"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/5 text-white transition-colors hover:border-volt hover:text-volt lg:hidden"
              >
                {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </header>

        {/* ---------- Menu mobile ---------- */}
        <div
          id="menu-mobile"
          hidden={!menuOpen}
          className="border-b border-line bg-ink/97 backdrop-blur-xl lg:hidden"
          style={menuOpen ? { animation: 'fadeUpIn .3s var(--ease-out-soft) both' } : undefined}
        >
          <nav aria-label="Navegação mobile" className="shell max-h-[calc(100dvh-160px)] overflow-y-auto py-5">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li key={link.href} className="border-b border-line/60 last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between gap-4 py-3.5 font-display text-[1.02rem] font-bold tracking-[-0.01em] text-white uppercase transition-colors hover:text-volt"
                  >
                    {link.label}
                    <span className="font-sans text-[0.7rem] font-medium tracking-widest text-fog">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={waLink(waMessages.experimental)}
                {...waAnchorProps}
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary btn-block"
              >
                <WhatsAppIcon size={17} />
                <span>Quero treinar</span>
              </a>
              <a
                href="#experimental"
                onClick={() => setMenuOpen(false)}
                className="btn btn-outline btn-block"
              >
                Aula experimental
              </a>
            </div>

            <p className="mt-5 text-center text-[0.72rem] text-fog">
              📍 {site.addressShort}
            </p>
          </nav>
        </div>
      </div>
    </>
  )
}
