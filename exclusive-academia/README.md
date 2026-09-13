# Exclusive Academia — site institucional

Site da **Exclusive Academia**, no Campo Grande, Campinas — SP.
React + TypeScript + Vite, CSS moderno (CSS Modules), sem bibliotecas de UI.

---

## Como executar localmente

O repositório tem **dois projetos independentes**. Este fica na subpasta
`exclusive-academia/`, então entre nela antes de rodar:

```bash
cd exclusive-academia
npm install
npm run dev        # http://localhost:5173
```

Outros comandos:

```bash
npm run build      # verifica os tipos e gera a versão de produção em dist/
npm run preview    # serve o build gerado
npm run lint       # análise estática
```

Requer Node.js 20+.

> Se você rodar `npm run dev` na **raiz** do repositório, vai abrir o outro
> projeto (SkyFit), não este. Sempre `cd exclusive-academia` primeiro.

---

## Onde editar cada coisa

Quase tudo está em **um único arquivo**: `src/config/site.ts`.

| O que | Onde | Observação |
| --- | --- | --- |
| **Número do WhatsApp** | `src/config/site.ts` → `WHATSAPP_NUMBER` | uma constante só, usada pelos 10 botões do site |
| **Endereço** | `src/config/site.ts` → `contact` | o link do Google Maps é montado sozinho a partir dele |
| **Horários** | `src/config/site.ts` → `hours` | edite `open` e `close` de cada linha |
| **Preços** | `src/config/site.ts` → `plans` | veja a seção abaixo |
| **Imagens** | `src/config/site.ts` → `images`, `modalities`, `gallery` | veja a seção abaixo |
| **Modalidades** | `src/config/site.ts` → `modalities` | |
| **Diferenciais** | `src/config/site.ts` → `differentials` | |
| **Menu** | `src/config/site.ts` → `navLinks` | |
| **Mensagens do WhatsApp** | `src/config/site.ts` → `waMessages` | |
| **Telefone / e-mail / Instagram** | `src/config/site.ts` → `contact` | ficam **ocultos** enquanto estiverem vazios |

### WhatsApp

```ts
export const WHATSAPP_NUMBER = '5519000000000' // ⚠️ EDITAR
```

Código do país + DDD + número, **somente dígitos**. Exemplo: `5519999999999`.
Enquanto estiver com o valor de exemplo, o painel do botão flutuante avisa
discretamente que o contato ainda não é o real.

### Preços

Nenhum valor foi informado, então **nenhum preço aparece no site** — os três
planos mostram *"Consulte nossas condições"*.

Quando receber os valores, troque no plano desejado:

```ts
price: null,                       // antes
price: 'R$ 000,00', period: '/mês' // depois
```

O cartão passa a exibir o valor automaticamente. Nada mais precisa mudar.

### Imagens

As imagens atuais são **provisórias**, geradas para o desenvolvimento. Elas
não são fotos da academia.

Para usar as fotos reais:

1. Coloque os arquivos em `public/images/`
2. Ajuste o caminho em `src/config/site.ts`

```ts
export const images = {
  hero: '/images/hero.jpg',     // era hero.png
  ...
}
```

Aceita `.jpg`, `.png` e `.webp` — basta manter a extensão no caminho.
**Dica:** fotos reais em `.jpg` otimizado costumam pesar bem menos que os
arquivos provisórios, deixando o site ainda mais rápido.

Arquivos usados hoje:

```
hero.png · sobre.png · aula-experimental.png · fachada.png
modalidade-{musculacao,funcional,personalizado,forca,fisiculturismo}.png
estrutura-{musculacao,equipamentos,funcional,recepcao,vestiario,ambiente,fachada}.png
```

**Para adicionar fotos novas à galeria**, acrescente um item em `gallery`:

```ts
{ id: 'sala-2', caption: 'Sala de treino 2', image: '/images/sala-2.jpg' }
```

A grade e o lightbox se ajustam sozinhos ao número de fotos.

Se um caminho estiver errado, o componente `<Figure>` mostra um espaço
reservado discreto em vez de uma imagem quebrada.

---

## Estrutura do projeto

```
src/
├─ config/site.ts            ← ⭐ configuração central (edite só isto)
├─ lib/whatsapp.ts           monta os links wa.me a partir de UMA constante
├─ hooks/                    reveal, trava de scroll, seção ativa, header
├─ styles/global.css         tokens, reset e primitivos (botões, títulos)
├─ assets/fonts/             Space Grotesk + Manrope auto-hospedadas
└─ components/
   ├─ ui/                    Figure · Reveal · Icon · Lightbox
   ├─ Header · Hero · ImpactSection · About · Modalities
   ├─ Gallery · Differentials · Plans · TrialCTA
   └─ Location · Hours · Footer · WhatsAppButton
```

Cada componente tem o seu `.module.css` ao lado, com escopo isolado.

---

## Decisões técnicas

- **Sem bibliotecas de UI ou de ícones.** Os ícones são SVG desenhados à mão
  em `src/components/ui/Icon.tsx` — traço consistente e bundle menor.
- **Fontes auto-hospedadas** (79 KB no total, subset latino). Sem depender do
  Google Fonts: carrega rápido e funciona mesmo com internet ruim.
- **Mapa em SVG**, desenhado no próprio componente, em vez de um iframe do
  Google Maps — dá a referência visual sem o peso. O botão leva ao mapa real.
- **`loading="lazy"` em 14 das 15 imagens**: só o hero entra na carga inicial.
- **Contraste medido, não estimado.** O azul elétrico puro (`#1769FF`) dá
  4,06:1 sobre o fundo, abaixo do mínimo de 4,5:1 para texto pequeno. Por isso
  há dois tons: `--accent` para preenchimentos com texto branco (4,67:1) e
  `--accent-bright` para texto, ícones e fios (5,30:1). Ambos passam no
  WCAG AA.
- **Acessibilidade:** HTML semântico, um único `<h1>`, hierarquia de headings
  sem saltos, `alt` em todas as imagens, foco visível, lightbox com
  `aria-modal` e foco preso, menu com `aria-expanded`/`aria-controls`, e
  `prefers-reduced-motion` respeitado.

---

## O que ainda depende de informação da academia

Nada foi inventado. Estes campos estão prontos para preencher:

- [ ] `WHATSAPP_NUMBER` — número oficial
- [ ] `plans[].price` — valores dos planos
- [ ] `contact.phone` — telefone fixo (some do site enquanto vazio)
- [ ] `contact.instagram` — perfil (some do site enquanto vazio)
- [ ] `contact.email` — e-mail (some do site enquanto vazio)
- [ ] Fotos reais em `public/images/`
- [ ] URL canônica no `index.html`, ao definir o domínio

Já confirmados e no ar: endereço, horários, modalidades e diferenciais.

---

## Verificações executadas

- `npm run build` e `npm run lint` sem erros nem avisos.
- Console limpo em 375, 390, 414, 768, 1024, 1440 e 1920 px.
- Sem scroll horizontal em nenhuma dessas larguras.
- Sem texto cortado; nenhum alvo de toque abaixo de 32 px.
- As 15 imagens carregam; todas com `alt`.
- Os 7 links do menu apontam para seções existentes, sem sobreposição pelo
  header fixo.
- 10 links de WhatsApp e 3 do Google Maps verificados.
- Menu mobile, botão flutuante e lightbox (abrir, avançar, voltar, navegação
  circular, Esc, botão fechar, trava de scroll) testados no desktop e no
  celular.
- Nenhum valor em R$ na página.
