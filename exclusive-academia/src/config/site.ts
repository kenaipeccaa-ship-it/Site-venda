/* ============================================================================
 *  EXCLUSIVE ACADEMIA — CONFIGURAÇÃO CENTRAL
 * ----------------------------------------------------------------------------
 *  Este é o ÚNICO arquivo que precisa ser editado para atualizar o site:
 *  contato, endereço, horários, modalidades, planos, preços e imagens.
 *
 *  Procure pelos marcadores:
 *    ⚠️ EDITAR    → informação ainda não confirmada, trocar antes de publicar
 *    ✅ CONFIRMADO → informação fornecida pela academia
 * ========================================================================== */

/* ----------------------------------------------------------------------------
 *  1. WHATSAPP — troque APENAS a constante abaixo
 * ----------------------------------------------------------------------------
 *  Formato: código do país + DDD + número, somente dígitos.
 *  Exemplo para Campinas: '5519999999999'
 *  Todos os botões de WhatsApp do site usam esta única constante.
 * -------------------------------------------------------------------------- */
export const WHATSAPP_NUMBER = '5519000000000' // ⚠️ EDITAR — número real da academia

/** Enquanto `true`, o site sinaliza discretamente que o contato é de exemplo. */
export const WHATSAPP_IS_PLACEHOLDER = WHATSAPP_NUMBER === '5519000000000'

/* ----------------------------------------------------------------------------
 *  2. IDENTIDADE E CONTATO
 * -------------------------------------------------------------------------- */
export const brand = {
  name: 'EXCLUSIVE',
  suffix: 'ACADEMIA',
  full: 'Exclusive Academia',
  city: 'Campinas',
  state: 'SP',
  neighborhood: 'Campo Grande',
} as const

export interface Contact {
  street: string
  neighborhood: string
  city: string
  mapsUrl: string
  phone: string
  instagram: string
  email: string
}

export const contact: Contact = {
  /** ✅ CONFIRMADO — endereço informado pela academia */
  street: 'Rua Álvaro Silveira Leite, 25',
  neighborhood: 'Campo Grande',
  city: 'Campinas — SP',
  /** Link do Google Maps montado a partir do endereço acima. */
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Rua Álvaro Silveira Leite, 25 - Campo Grande, Campinas - SP'),
  /** ⚠️ EDITAR — telefone fixo, se houver. Deixe '' para não exibir. */
  phone: '',
  /** ⚠️ EDITAR — perfil do Instagram. Deixe '' para não exibir. */
  instagram: '',
  /** ⚠️ EDITAR — e-mail de contato. Deixe '' para não exibir. */
  email: '',
}

/* ----------------------------------------------------------------------------
 *  3. HORÁRIOS  ✅ CONFIRMADO
 * ----------------------------------------------------------------------------
 *  Para alterar, edite apenas os campos `open` e `close` abaixo.
 * -------------------------------------------------------------------------- */
export interface OpeningHours {
  label: string
  open: string
  close: string
  note?: string
}

export const hours: OpeningHours[] = [
  { label: 'Segunda a sexta', open: '05:30', close: '23:00' },
  { label: 'Sábado', open: '08:00', close: '14:00' },
  { label: 'Domingo', open: '09:00', close: '12:00' },
]

/* ----------------------------------------------------------------------------
 *  4. IMAGENS
 * ----------------------------------------------------------------------------
 *  COMO TROCAR PELAS FOTOS REAIS:
 *    1. coloque o arquivo em  public/images/
 *    2. troque o caminho abaixo  (ex.: '/images/hero.jpg')
 *  Não é preciso mexer em nenhum componente.
 *
 *  As imagens atuais são PROVISÓRIAS, geradas para o desenvolvimento.
 *  Elas NÃO são fotos da Exclusive Academia.
 *
 *  Formatos aceitos: .jpg, .png, .webp — basta manter a extensão no caminho.
 *  Se um arquivo faltar, o componente <Figure> mostra um espaço reservado
 *  elegante em vez de uma imagem quebrada.
 * -------------------------------------------------------------------------- */
export const images = {
  hero: '/images/hero.png',
  about: '/images/sobre.png',
  trial: '/images/aula-experimental.png',
  location: '/images/fachada.png',
} as const

/* ----------------------------------------------------------------------------
 *  5. MODALIDADES  ✅ CONFIRMADO (somente as informadas pela academia)
 * -------------------------------------------------------------------------- */
export interface Modality {
  id: string
  name: string
  description: string
  image: string
  /** 'wide' ocupa duas colunas na grade assimétrica do desktop. */
  span?: 'wide'
}

export const modalities: Modality[] = [
  {
    id: 'musculacao',
    name: 'Musculação',
    description: 'Treino de força e hipertrofia com acompanhamento da equipe.',
    image: '/images/modalidade-musculacao.png',
    span: 'wide',
  },
  {
    id: 'funcional',
    name: 'Treinamento Funcional',
    description: 'Movimentos integrados para condicionamento e mobilidade.',
    image: '/images/modalidade-funcional.png',
  },
  {
    id: 'personalizado',
    name: 'Treinamento Personalizado',
    description: 'Programa individual, ajustado ao seu objetivo e à sua rotina.',
    image: '/images/modalidade-personalizado.png',
  },
  {
    id: 'forca',
    name: 'Treino de Força',
    description: 'Progressão de carga com foco em desempenho e técnica.',
    image: '/images/modalidade-forca.png',
  },
  {
    id: 'fisiculturismo',
    name: 'Fisiculturismo',
    description: 'Preparação voltada a quem busca competir ou evoluir a composição corporal.',
    image: '/images/modalidade-fisiculturismo.png',
  },
]

/* ----------------------------------------------------------------------------
 *  6. GALERIA DA ESTRUTURA
 * ----------------------------------------------------------------------------
 *  Para adicionar uma foto nova: coloque o arquivo em public/images/ e
 *  acrescente um item nesta lista. A galeria e o lightbox se ajustam sozinhos.
 * -------------------------------------------------------------------------- */
export interface GalleryItem {
  id: string
  /** Usado como legenda e como texto alternativo da imagem. */
  caption: string
  image: string
}

export const gallery: GalleryItem[] = [
  { id: 'musculacao', caption: 'Área de musculação', image: '/images/estrutura-musculacao.png' },
  { id: 'equipamentos', caption: 'Equipamentos', image: '/images/estrutura-equipamentos.png' },
  { id: 'funcional', caption: 'Área funcional', image: '/images/estrutura-funcional.png' },
  { id: 'recepcao', caption: 'Recepção', image: '/images/estrutura-recepcao.png' },
  { id: 'vestiario', caption: 'Vestiário', image: '/images/estrutura-vestiario.png' },
  { id: 'ambiente', caption: 'Ambiente interno', image: '/images/estrutura-ambiente.png' },
  { id: 'fachada', caption: 'Fachada', image: '/images/estrutura-fachada.png' },
]

/* ----------------------------------------------------------------------------
 *  7. DIFERENCIAIS  ✅ CONFIRMADO (somente os informados pela academia)
 * -------------------------------------------------------------------------- */
export interface Differential {
  id: string
  label: string
  /** Nome do ícone — ver src/components/ui/Icon.tsx */
  icon: string
}

export const differentials: Differential[] = [
  { id: 'climatizado', label: 'Ambiente climatizado', icon: 'climate' },
  { id: 'armarios', label: 'Armários', icon: 'locker' },
  { id: 'estacionamento', label: 'Estacionamento', icon: 'parking' },
  { id: 'vestiario', label: 'Vestiário', icon: 'shower' },
  { id: 'wifi', label: 'Wi-Fi', icon: 'wifi' },
  { id: 'personal', label: 'Treinamento personalizado', icon: 'personal' },
]

/* ----------------------------------------------------------------------------
 *  8. PLANOS
 * ----------------------------------------------------------------------------
 *  ⚠️ NENHUM PREÇO FOI INFORMADO — por isso nenhum valor é exibido.
 *
 *  QUANDO RECEBER OS VALORES:
 *    troque  price: null
 *    por     price: 'R$ 000,00', period: '/mês'
 *  O cartão passa a exibir o valor automaticamente, no lugar da frase
 *  "Consulte nossas condições". Nada mais precisa ser alterado.
 * -------------------------------------------------------------------------- */
export interface Plan {
  id: string
  name: string
  summary: string
  /** null = exibe "Consulte nossas condições". */
  price: string | null
  /** Ex.: '/mês'. Só aparece quando há preço. */
  period?: string
  features: string[]
  featured?: boolean
}

export const plans: Plan[] = [
  {
    id: 'mensal',
    name: 'Mensal',
    summary: 'Sem fidelidade, para quem quer começar agora.',
    price: null, // ⚠️ EDITAR quando os valores forem definidos
    features: [
      'Acesso à musculação',
      'Acesso à área funcional',
      'Avaliação e montagem de treino',
    ],
  },
  {
    id: 'trimestral',
    name: 'Trimestral',
    summary: 'Para quem quer manter a constância.',
    price: null, // ⚠️ EDITAR
    featured: true,
    features: [
      'Tudo do plano mensal',
      'Acompanhamento contínuo da evolução',
      'Reajuste de treino ao longo do período',
    ],
  },
  {
    id: 'anual',
    name: 'Anual',
    summary: 'O compromisso mais longo com o seu treino.',
    price: null, // ⚠️ EDITAR
    features: [
      'Tudo do plano trimestral',
      'Planejamento de treino de longo prazo',
      'Condições especiais — consulte a recepção',
    ],
  },
]

/* ----------------------------------------------------------------------------
 *  9. MENSAGENS PRONTAS DE WHATSAPP
 * -------------------------------------------------------------------------- */
export const waMessages = {
  general: 'Olá! Gostaria de mais informações sobre a Exclusive Academia.',
  plans: 'Olá! Gostaria de saber mais sobre os planos da Exclusive Academia.',
  trial: 'Olá! Gostaria de saber mais sobre a aula experimental da Exclusive Academia.',
  location: 'Olá! Gostaria de confirmar a localização da Exclusive Academia.',
  hours: 'Olá! Gostaria de confirmar os horários de funcionamento da Exclusive Academia.',
} as const

/* ----------------------------------------------------------------------------
 *  10. NAVEGAÇÃO
 * -------------------------------------------------------------------------- */
export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'A academia', href: '#academia' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Planos', href: '#planos' },
  { label: 'Aula experimental', href: '#experimental' },
  { label: 'Localização', href: '#localizacao' },
]

/* ----------------------------------------------------------------------------
 *  11. SEÇÃO DE IMPACTO (logo abaixo do hero)
 * -------------------------------------------------------------------------- */
export const impactItems = [
  { id: 'musculacao', label: 'Musculação' },
  { id: 'funcional', label: 'Funcional' },
  { id: 'forca', label: 'Treino de força' },
  { id: 'personal', label: 'Personal' },
] as const
