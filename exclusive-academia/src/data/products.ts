/* ============================================================================
 *  EXCLUSIVE STORE — CATÁLOGO DE PRODUTOS
 * ----------------------------------------------------------------------------
 *  Este é o ÚNICO arquivo que precisa ser editado para manter a loja:
 *  cadastrar produtos, alterar preços, trocar imagens e ajustar categorias.
 *
 *  ⚠️ OS PRODUTOS ABAIXO SÃO EXEMPLOS DE ESTRUTURA.
 *  Servem para montar a vitrine e demonstrar o funcionamento da loja.
 *  Nenhuma marca, preço, tamanho, sabor, composição ou informação nutricional
 *  foi inventada — esses dados devem ser cadastrados pela academia.
 *
 *  ------------------------------------------------------------------------
 *  COMO CADASTRAR UM PRODUTO NOVO
 *  ------------------------------------------------------------------------
 *  1. Coloque a foto em  public/images/store/
 *  2. Acrescente um item em `products` abaixo:
 *
 *       {
 *         id: 'whey-isolado',            // único, sem espaços nem acentos
 *         name: 'Whey Protein Isolado',
 *         category: 'whey',              // um dos ids em `categories`
 *         description: 'Texto curto e neutro sobre o produto.',
 *         image: '/images/store/whey-isolado.jpg',
 *         price: 189.9,                  // número, ou null para "sob consulta"
 *         available: true,               // false mostra "INDISPONÍVEL"
 *       }
 *
 *  A vitrine, os filtros, a busca, o modal e o carrinho se ajustam sozinhos.
 *
 *  ------------------------------------------------------------------------
 *  COMO ALTERAR UM PREÇO
 *  ------------------------------------------------------------------------
 *  Troque `price: null` por um número, em reais: `price: 189.9`
 *  O valor é formatado automaticamente (R$ 189,90) no card, no modal e no
 *  subtotal do carrinho. Enquanto for `null`, aparece "Sob consulta" e o
 *  item entra no pedido do WhatsApp sem valor.
 *
 *  ------------------------------------------------------------------------
 *  COMO ADICIONAR OU REMOVER UMA CATEGORIA
 *  ------------------------------------------------------------------------
 *  Edite a lista `categories`. O filtro "Todos" é gerado automaticamente e
 *  não precisa estar na lista. Ao remover uma categoria, lembre-se de
 *  reatribuir os produtos que a usavam.
 * ========================================================================== */

export interface Category {
  /** Usado no campo `category` dos produtos. */
  id: string
  /** Texto exibido no botão do filtro. */
  label: string
}

export interface Product {
  id: string
  name: string
  category: string
  description: string
  /** Caminho a partir de public/ — ex.: '/images/store/whey.jpg' */
  image: string
  /** Em reais. `null` exibe "Sob consulta". */
  price: number | null
  /** `false` exibe "INDISPONÍVEL" e desabilita a compra. */
  available: boolean
}

/* ----------------------------------------------------------------------------
 *  CATEGORIAS
 * -------------------------------------------------------------------------- */
export const categories: Category[] = [
  { id: 'whey', label: 'Whey' },
  { id: 'creatina', label: 'Creatina' },
  { id: 'pre-treino', label: 'Pré-treino' },
  { id: 'barras', label: 'Barras' },
  { id: 'vitaminas', label: 'Vitaminas' },
  { id: 'outros', label: 'Outros' },
]

/* ----------------------------------------------------------------------------
 *  PRODUTOS
 * ----------------------------------------------------------------------------
 *  ⚠️ IMAGENS PROVISÓRIAS
 *  Os arquivos em public/images/store/ são ilustrações geradas para o
 *  desenvolvimento — não são fotos dos produtos reais nem de marca alguma.
 *  Substitua cada arquivo mantendo o mesmo nome, ou ajuste o caminho aqui.
 *
 *  ⚠️ PREÇOS
 *  Todos estão como `null` porque nenhum valor foi informado. Ao receber a
 *  tabela de preços, basta trocar o `null` pelo número.
 * -------------------------------------------------------------------------- */
export const products: Product[] = [
  {
    id: 'whey-concentrado',
    name: 'Whey Protein Concentrado',
    category: 'whey',
    description:
      'Suplemento proteico em pó, para complementar a ingestão de proteína da rotina alimentar.',
    image: '/images/store/whey-concentrado.png',
    price: null,
    available: true,
  },
  {
    id: 'whey-isolado',
    name: 'Whey Protein Isolado',
    category: 'whey',
    description:
      'Versão isolada do suplemento proteico em pó. Consulte a equipe da loja sobre as opções disponíveis.',
    image: '/images/store/whey-isolado.png',
    price: null,
    available: true,
  },
  {
    id: 'creatina',
    name: 'Creatina Monoidratada',
    category: 'creatina',
    description:
      'Suplemento em pó, de uso comum entre praticantes de treino de força. Consulte orientação profissional sobre o uso.',
    image: '/images/store/creatina.png',
    price: null,
    available: true,
  },
  {
    id: 'pre-treino',
    name: 'Pré-Treino',
    category: 'pre-treino',
    description:
      'Suplemento consumido antes do treino. Consulte a equipe da loja e orientação profissional antes do uso.',
    image: '/images/store/pre-treino.png',
    price: null,
    available: true,
  },
  {
    id: 'barra-proteina',
    name: 'Barra de Proteína',
    category: 'barras',
    description: 'Barra com proteína na composição, prática para levar na bolsa de treino.',
    image: '/images/store/barra-proteina.png',
    price: null,
    available: true,
  },
  {
    id: 'barra-cereal',
    name: 'Barra de Cereal',
    category: 'barras',
    description: 'Opção de lanche rápido para o intervalo entre as refeições.',
    image: '/images/store/barra-cereal.png',
    price: null,
    available: false,
  },
  {
    id: 'multivitaminico',
    name: 'Multivitamínico',
    category: 'vitaminas',
    description:
      'Suplemento vitamínico em cápsulas. Consulte orientação profissional antes do uso.',
    image: '/images/store/multivitaminico.png',
    price: null,
    available: true,
  },
  {
    id: 'vitamina-c',
    name: 'Vitamina C',
    category: 'vitaminas',
    description: 'Suplemento de vitamina C. Consulte orientação profissional antes do uso.',
    image: '/images/store/vitamina-c.png',
    price: null,
    available: true,
  },
  {
    id: 'glutamina',
    name: 'Glutamina',
    category: 'outros',
    description: 'Suplemento em pó. Consulte a equipe da loja sobre as opções disponíveis.',
    image: '/images/store/glutamina.png',
    price: null,
    available: false,
  },
  {
    id: 'coqueteleira',
    name: 'Coqueteleira',
    category: 'outros',
    description: 'Acessório para preparo e transporte de bebidas durante o treino.',
    image: '/images/store/coqueteleira.png',
    price: null,
    available: true,
  },
]

/* ----------------------------------------------------------------------------
 *  Formata o preço para exibição. `null` vira "Sob consulta".
 * -------------------------------------------------------------------------- */
export function formatPrice(price: number | null): string {
  if (price === null) return 'Sob consulta'
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

/** Rótulo da categoria a partir do id. */
export function categoryLabel(id: string): string {
  return categories.find((c) => c.id === id)?.label ?? id
}
