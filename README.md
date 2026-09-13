> **Este repositório tem dois projetos independentes:**
>
> | Projeto | Pasta | Como rodar |
> | --- | --- | --- |
> | SkyFit Campo Grande (demonstração) | raiz do repositório | `npm run dev` |
> | Exclusive Academia | `exclusive-academia/` | `cd exclusive-academia && npm run dev` |
>
> O README abaixo é do projeto **SkyFit**.

---

# SkyFit Campo Grande — Demonstração de site para academia

> ⚠️ **Demonstração de conceito — projeto independente.**
> Esta página **não é** um canal oficial da academia e **não foi publicada por ela**.
> Foi criada de forma independente para apresentação comercial. Todo o conteúdo é
> exemplo de layout: nomes, modalidades, planos, horários, endereço e contatos
> precisam ser **confirmados e autorizados pela unidade** antes de qualquer publicação.

Landing page de conversão para academia, com foco em captar novos alunos,
apresentar a estrutura e as modalidades e levar o visitante ao WhatsApp
com o menor atrito possível.

---

## Começando

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # gera a versão de produção em dist/
npm run preview  # serve o build gerado
npm run lint     # análise estática
```

Requer Node.js 20+.

---

## O único arquivo que você precisa editar

Todo o conteúdo editável está em **`src/config/site.js`**.
Não é preciso mexer em nenhum componente para colocar as informações reais no ar.

### 1. WhatsApp (uma única variável)

```js
export const WHATSAPP_NUMBER = '5519000000000' // ⚠️ PLACEHOLDER
```

Formato: código do país + DDD + número, **somente dígitos** (ex.: `5519999999999`).
Essa variável alimenta **todos** os botões de WhatsApp do site — os planos, a aula
experimental, os modais de modalidade, o rodapé e o botão flutuante.

Enquanto o valor for o de demonstração, o site sinaliza isso no painel do botão
flutuante e no rodapé, para não passar um contato inválido como se fosse real.

### 2. Marca, contatos e localização — `site`

| Campo | O que é | Situação |
| --- | --- | --- |
| `brand`, `unit`, `city`, `region` | Identificação exibida no header, hero e rodapé | preenchido |
| `addressPlaceholder` | Marcador `[INSERIR MAPA/ENDEREÇO OFICIAL DA UNIDADE]` | ⚠️ a confirmar |
| `mapsUrl` | Link do botão **Como chegar** | genérico, trocar pelo oficial |
| `mapsEmbedUrl` | URL de incorporação do Google Maps | `null` → mostra o espaço reservado |
| `instagram`, `instagramHandle` | Link do Instagram | ⚠️ vazio → exibe "Instagram a definir" |
| `phone` | Telefone fixo, se houver | ⚠️ vazio |
| `hoursStatus` | Texto de horários | remete à unidade de propósito |

Assim que `mapsEmbedUrl` receber a URL oficial, o mapa interativo substitui
automaticamente o espaço reservado da seção **Onde estamos**.

### 3. Modalidades, planos, galeria, objetivos e FAQ

Listas simples de objetos, prontas para adicionar, remover ou reordenar itens.
Cada modalidade tem `nome`, `resumo`, `icon`, `tag`, `image`, `sobre`, `topicos`
e `indicado` — os dois últimos alimentam o modal de detalhes.

> As modalidades foram usadas para montar a demonstração. **Nomes, disponibilidade
> e horários devem ser confirmados com a unidade antes da publicação oficial.**
> Nenhum horário é exibido no site de propósito.

Os ícones são referenciados por **nome** (ex.: `icon: 'Dumbbell'`). Os nomes
disponíveis estão em `src/lib/iconMap.js` — para usar um novo, basta importá-lo
do `lucide-react` e adicioná-lo ao mapa.

---

## Trocando as imagens

**Todas as imagens atuais são genéricas, de banco de imagens, e servem apenas
como PLACEHOLDER.** Elas não retratam a unidade — e o site deixa isso explícito
(selo "Foto ilustrativa" na galeria, aviso na seção de estrutura e `alt` honesto
em cada imagem).

Para usar as fotos reais:

1. Coloque os arquivos em `public/fotos/`.
2. Em `src/config/site.js`, troque o caminho da imagem:

```js
hero: '/fotos/fachada.jpg',
// …
{ id: 'musculacao', image: '/fotos/musculacao-01.jpg', /* … */ }
```

3. Atualize o `alt` correspondente no componente, removendo a menção a
   "imagem ilustrativa de banco de imagens".
4. Remova os avisos de placeholder (`Estrutura.jsx` e o selo "Foto ilustrativa")
   quando todas as fotos forem reais.

Todos os pontos de troca estão marcados no código com
`// SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE`.

O componente `SmartImage` exibe um espaço reservado elegante caso alguma imagem
falhe ao carregar — a apresentação nunca mostra ícone de imagem quebrada.

---

## Antes de publicar oficialmente

- [ ] Autorização da unidade para usar marca, nome e conteúdo
- [ ] `WHATSAPP_NUMBER` com o contato oficial
- [ ] Endereço confirmado + `mapsEmbedUrl` preenchido
- [ ] Horários de funcionamento confirmados (ou manter o texto que remete à unidade)
- [ ] Modalidades revisadas (nomes e disponibilidade)
- [ ] Planos revisados — decidir se os valores entram no site ou continuam sob consulta
- [ ] Fotos reais no lugar dos placeholders
- [ ] Link do Instagram
- [ ] Formulário conectado a um destino real (ver abaixo)
- [ ] Remover a faixa "Demonstração de conceito" (`src/components/DemoNotice.jsx`)
- [ ] Remover o aviso final do rodapé (`src/components/Footer.jsx`)
- [ ] Remover `<meta name="robots" content="noindex, nofollow">` do `index.html`
- [ ] Definir a URL canônica no `index.html`
- [ ] Gerar uma nova imagem de Open Graph com a identidade final

### Formulário da aula experimental

Hoje o formulário **não envia nada**: valida os campos, mostra a mensagem de
confirmação da demonstração e oferece continuar a conversa no WhatsApp com os
dados já preenchidos. Nenhum dado é armazenado ou compartilhado.

Para integrar de verdade, substitua o bloco marcado em
`src/components/AulaExperimental.jsx` (função `enviar`) por uma chamada à API,
a um serviço de formulários ou ao webhook do CRM da unidade.

---

## Estrutura do projeto

```
src/
├─ config/site.js          ← ⭐ configuração central (edite só isto)
├─ lib/
│  ├─ iconMap.js           mapa nome → ícone
│  ├─ icons.jsx            componente Icon + ícones de marca (WhatsApp, Instagram)
│  └─ whatsapp.js          montagem dos links wa.me a partir de UMA variável
├─ hooks/                  scroll reveal, trava de scroll, seção ativa, header
├─ styles/index.css        design system (tokens, componentes, animações)
├─ components/
│  ├─ ui/                  SmartImage · Reveal · SectionHeading · Modal
│  ├─ Header · Hero · Features · Modalidades · Estrutura · Planos
│  ├─ AulaExperimental · Objetivos · Localizacao · FAQ · CTA · Footer
│  └─ WhatsAppButton · DemoNotice · Logo
└─ assets/fonts/           Archivo + Inter auto-hospedadas
```

---

## Decisões técnicas

- **React 19 + Vite + Tailwind CSS v4.** Build de produção em ~1 s; CSS ~10 kB gzip.
- **Fontes auto-hospedadas** (Archivo + Inter, subset latino). Sem dependência do
  Google Fonts: a demonstração abre rápido e funciona mesmo sem internet boa na
  hora da apresentação.
- **Estilos de componente na camada `components`** do Tailwind, para que qualquer
  utilitário (`hidden`, `flex`, `px-0`…) sempre vença na cascata.
- **Animações discretas**, com `IntersectionObserver` para a entrada dos elementos
  e respeito total a `prefers-reduced-motion`.
- **Acessibilidade:** HTML semântico, um único `<h1>`, hierarquia de headings sem
  saltos, `alt` em todas as imagens, foco visível, modal com `aria-modal`, foco
  preso e retorno de foco, menu mobile com `aria-expanded`/`aria-controls`.
- **SEO:** title e meta description definidos, Open Graph e Twitter Card com
  imagem própria, favicon SVG e `apple-touch-icon`. A página está com
  `noindex` enquanto for demonstração.

## Verificações executadas

- Build de produção e lint sem erros nem avisos.
- Console limpo em 360, 390, 430, 768, 1024, 1440 e 1920 px.
- Sem scroll horizontal em nenhuma dessas larguras (largura do conteúdo = largura da viewport).
- Todos os links do menu apontam para seções existentes, sem sobreposição pelo header fixo.
- 13 links de WhatsApp verificados: número único e mensagem pronta em todos.
- Menu mobile, modais de modalidade, filtros, acordeão do FAQ e botão flutuante testados.
- Formulário: validação dos 5 campos, máscara de telefone, mensagem de sucesso e reinício.
