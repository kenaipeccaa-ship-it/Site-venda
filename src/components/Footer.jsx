import { ArrowUpRight, MapPin } from 'lucide-react'
import { navLinks, site, waMessages, WHATSAPP_IS_PLACEHOLDER, WHATSAPP_NUMBER } from '../config/site.js'
import { waAnchorProps, waLink } from '../lib/whatsapp.js'
import { InstagramIcon, WhatsAppIcon } from '../lib/icons.jsx'
import { Logo } from './Logo.jsx'

/** Links do rodapé (subconjunto do menu, conforme o briefing). */
const FOOTER_LINKS = navLinks.filter((l) => l.label !== 'A academia')

export function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="shell relative py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          {/* ---------- Marca ---------- */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-[36ch] text-[0.88rem] leading-relaxed text-[#a9b2bd]">
              Academia na região do {site.region}, em {site.city}. Musculação, cardio e aulas
              coletivas em um só lugar.
            </p>

            <div className="flex items-center gap-2.5">
              <MapPin size={15} className="shrink-0 text-volt" aria-hidden="true" />
              <span className="text-[0.85rem] text-[#c3cbd6]">{site.addressShort}</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={waLink(waMessages.geral)}
                {...waAnchorProps}
                className="btn btn-primary btn-sm"
              >
                <WhatsAppIcon size={15} />
                <span>WhatsApp</span>
              </a>

              {/* Instagram: variável editável em src/config/site.js */}
              {site.instagram ? (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <InstagramIcon size={15} />
                  <span>Instagram</span>
                </a>
              ) : (
                <span
                  className="chip border-dashed border-volt/30 text-volt/80"
                  title="Adicione o link em src/config/site.js → site.instagram"
                >
                  <InstagramIcon size={14} />
                  Instagram a definir
                </span>
              )}
            </div>
          </div>

          {/* ---------- Navegação ---------- */}
          <nav aria-labelledby="footer-nav-titulo" className="flex flex-col gap-4">
            <h2
              id="footer-nav-titulo"
              className="font-display text-[0.65rem] font-bold tracking-[0.22em] text-fog uppercase"
            >
              Navegação
            </h2>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[0.88rem] text-[#c3cbd6] transition-colors hover:text-volt"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Contato ---------- */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[0.65rem] font-bold tracking-[0.22em] text-fog uppercase">
              Contato
            </h2>

            <ul className="flex flex-col gap-3 text-[0.86rem]">
              <li className="flex flex-col gap-1">
                <span className="text-[0.7rem] tracking-[0.14em] text-fog uppercase">WhatsApp</span>
                <span className="text-[#c3cbd6]">
                  {WHATSAPP_IS_PLACEHOLDER ? (
                    <span className="font-mono text-[0.8rem] text-volt/90">
                      número a definir (placeholder)
                    </span>
                  ) : (
                    <a
                      href={waLink(waMessages.geral)}
                      {...waAnchorProps}
                      className="transition-colors hover:text-volt"
                    >
                      +{WHATSAPP_NUMBER}
                    </a>
                  )}
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[0.7rem] tracking-[0.14em] text-fog uppercase">Endereço</span>
                <span className="font-mono text-[0.78rem] leading-relaxed break-words text-volt/90">
                  {site.addressPlaceholder}
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[0.7rem] tracking-[0.14em] text-fog uppercase">Horários</span>
                <span className="text-[#c3cbd6]">{site.hoursStatus}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        {/* ---------- Base do rodapé ---------- */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.78rem] leading-relaxed text-fog">
            {site.brand} · {site.unit} · {site.city}
            <span className="mx-2 opacity-40" aria-hidden="true">
              |
            </span>
            {ano}
          </p>

          <p className="flex items-center gap-2 text-[0.78rem] font-medium text-volt/90">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-volt"
            />
            Demonstração de conceito — projeto independente.
          </p>
        </div>

        <p className="mt-5 max-w-[90ch] text-[0.72rem] leading-relaxed text-fog/85">
          Esta página é uma demonstração criada de forma independente para fins de apresentação
          comercial. Não é um canal oficial da academia. Os textos, imagens, modalidades e planos
          exibidos são exemplos de layout: nomes, disponibilidade, horários, endereço, valores e
          contatos devem ser confirmados e autorizados pela unidade antes de qualquer publicação.
          Nenhum resultado de treino ou benefício de saúde é prometido aqui.
        </p>
      </div>
    </footer>
  )
}
