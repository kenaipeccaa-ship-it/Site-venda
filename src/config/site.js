/* ============================================================================
 *  CONFIGURAÇÃO CENTRAL DA DEMONSTRAÇÃO
 * ----------------------------------------------------------------------------
 *  Este é o ÚNICO arquivo que precisa ser editado para colocar as informações
 *  reais da unidade no ar (contatos, links, textos, modalidades e planos).
 *
 *  ⚠️  IMPORTANTE — ESTE PROJETO É UMA DEMONSTRAÇÃO DE CONCEITO INDEPENDENTE.
 *  Todos os campos marcados com "PLACEHOLDER" ou "CONFIRMAR" contêm valores
 *  neutros de exemplo. NADA aqui deve ser publicado como informação oficial
 *  antes de ser confirmado com a unidade.
 * ========================================================================== */

/* ----------------------------------------------------------------------------
 *  1. WHATSAPP  —  troque APENAS a linha abaixo
 * ----------------------------------------------------------------------------
 *  Formato: código do país + DDD + número, somente dígitos.
 *  Exemplo (Campinas/SP): "5519999999999"
 *  Enquanto o valor abaixo estiver como placeholder, os botões abrem o
 *  WhatsApp em um fluxo de teste (sem número válido) — é o comportamento
 *  esperado durante a apresentação.
 * -------------------------------------------------------------------------- */
export const WHATSAPP_NUMBER = '5519000000000' // ⚠️ PLACEHOLDER — inserir o número real da unidade

/** Indica se o número acima ainda é o de demonstração. */
export const WHATSAPP_IS_PLACEHOLDER = WHATSAPP_NUMBER === '5519000000000'

/* ----------------------------------------------------------------------------
 *  2. MARCA E CONTATOS
 * -------------------------------------------------------------------------- */
export const site = {
  brand: 'SKYFIT',
  unit: 'SATÉLITE ÍRIS',
  city: 'Campinas/SP',
  region: 'Satélite Íris',
  // Endereço completo NÃO confirmado — manter o marcador até a validação.
  addressPlaceholder: '[INSERIR MAPA/ENDEREÇO OFICIAL DA UNIDADE]',
  addressShort: 'Satélite Íris — Campinas/SP',
  // Link do Google Maps. Substituir pelo link oficial da unidade.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sat%C3%A9lite+%C3%8Dris%2C+Campinas+-+SP',
  // Iframe de mapa incorporado: deixar como `null` mantém o espaço reservado
  // com o marcador visual. Ao receber o endereço oficial, cole aqui a URL do
  // "Incorporar um mapa" do Google Maps.
  mapsEmbedUrl: null, // ⚠️ CONFIRMAR — colar aqui a URL de incorporação oficial
  instagram: '', // ⚠️ PLACEHOLDER — ex.: 'https://instagram.com/usuario_da_unidade'
  instagramHandle: '@unidade', // ⚠️ PLACEHOLDER
  phone: '', // ⚠️ PLACEHOLDER — telefone fixo, se houver
  // Horários NÃO confirmados: a demonstração sempre remete à unidade.
  hoursStatus: 'Consulte a unidade para informações atualizadas.',
}

/* ----------------------------------------------------------------------------
 *  3. MENSAGENS PRONTAS DE WHATSAPP
 * -------------------------------------------------------------------------- */
export const waMessages = {
  geral: 'Olá! Vi a página da academia e gostaria de conhecer os planos.',
  planos: 'Olá! Gostaria de saber mais sobre os planos da academia.',
  experimental: 'Olá! Gostaria de saber sobre a aula experimental.',
  aulas: 'Olá! Gostaria de saber quais aulas estão disponíveis.',
  horarios: 'Olá! Gostaria de saber os horários de funcionamento da unidade.',
  localizacao: 'Olá! Gostaria de confirmar o endereço da unidade.',
}

/* ----------------------------------------------------------------------------
 *  4. NAVEGAÇÃO
 * -------------------------------------------------------------------------- */
export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'A academia', href: '#academia' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Aula experimental', href: '#experimental' },
  { label: 'Localização', href: '#localizacao' },
]

/* ----------------------------------------------------------------------------
 *  5. IMAGENS
 * ----------------------------------------------------------------------------
 *  // SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE
 *
 *  Todas as imagens abaixo são GENÉRICAS, de bancos de imagem, e estão aqui
 *  apenas como PLACEHOLDER de layout. Elas NÃO retratam a unidade.
 *
 *  Como trocar: coloque os arquivos em `public/fotos/` e troque o caminho,
 *  por exemplo:  src: '/fotos/musculacao-01.jpg'
 *
 *  Se uma imagem não carregar, o componente <SmartImage> exibe automaticamente
 *  um espaço reservado elegante — a demonstração nunca mostra imagem quebrada.
 * -------------------------------------------------------------------------- */
const stock = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`

export const images = {
  hero: stock('1534438327276-14e5300c3a48', 2000),
  heroMobile: stock('1534438327276-14e5300c3a48', 900),
  academia: stock('1540497077202-7c8a3999166f', 1400),
  experimental: stock('1517836357463-d25dfeac3438', 2000),
  cta: stock('1541534741688-6078c6bfb5c5', 2000),
}

/* ----------------------------------------------------------------------------
 *  6. MODALIDADES
 * ----------------------------------------------------------------------------
 *  ⚠️ AVISO OBRIGATÓRIO PARA PUBLICAÇÃO OFICIAL
 *  As modalidades abaixo foram usadas para montar a DEMONSTRAÇÃO.
 *  Nomes, disponibilidade e horários devem ser CONFIRMADOS com a unidade
 *  antes de qualquer publicação. Nenhum horário é informado aqui de propósito.
 *
 *  Estrutura de cada item (fácil de editar / adicionar / remover):
 *    id        → identificador único (usado na URL do modal)
 *    nome      → título do card
 *    resumo    → frase curta exibida no card
 *    icon      → nome do ícone (ver src/lib/icons.js)
 *    tag       → etiqueta curta de categoria
 *    image     → imagem PLACEHOLDER (trocar por foto real)
 *    sobre     → parágrafo do modal
 *    topicos   → lista de pontos do modal (sem promessas de resultado)
 *    indicado  → para quem a modalidade costuma ser indicada
 * -------------------------------------------------------------------------- */
export const modalidades = [
  {
    id: 'musculacao',
    nome: 'MUSCULAÇÃO',
    resumo: 'Treinos de força para diferentes objetivos e níveis de experiência.',
    icon: 'Dumbbell',
    tag: 'Força',
    image: stock('1581009146145-b5ef050c2e1e', 1000),
    sobre:
      'O treino de força é organizado de acordo com o objetivo e o nível de experiência de cada aluno, respeitando a progressão individual.',
    topicos: [
      'Estrutura voltada a treinos de força',
      'Progressão ajustada ao nível de experiência',
      'Possibilidade de treinar com acompanhamento da equipe da unidade',
      'Indicado tanto para quem está começando quanto para quem já treina',
    ],
    indicado: 'Para quem quer desenvolver força e montar uma rotina consistente.',
  },
  {
    id: 'fit-dance',
    nome: 'FIT DANCE',
    resumo: 'Aulas com música e movimento para deixar o treino mais dinâmico.',
    icon: 'Music4',
    tag: 'Coletiva',
    image: stock('1533681904393-9ab6eee7e408', 1000),
    sobre:
      'Aula coletiva que combina música e coreografias simples, pensada para deixar a rotina de treino mais leve e dinâmica.',
    topicos: [
      'Aula em grupo, conduzida por profissional',
      'Coreografias de fácil acompanhamento',
      'Ritmo variado ao longo da aula',
      'Não exige experiência prévia em dança',
    ],
    indicado: 'Para quem gosta de treinar com música e em grupo.',
  },
  {
    id: 'cardio-training',
    nome: 'CARDIO TRAINING',
    resumo: 'Atividades voltadas ao condicionamento e à resistência.',
    icon: 'HeartPulse',
    tag: 'Cardio',
    image: stock('1571019613454-1cb2f99b2d8b', 1000),
    sobre:
      'Conjunto de atividades voltadas ao trabalho cardiovascular, com intensidade ajustável conforme o momento de cada aluno.',
    topicos: [
      'Foco em condicionamento e resistência',
      'Intensidade ajustável',
      'Pode complementar o treino de força',
      'Opções para diferentes níveis',
    ],
    indicado: 'Para quem quer trabalhar condicionamento e resistência.',
  },
  {
    id: 'power-bike',
    nome: 'POWER BIKE',
    resumo: 'Treinamento cardiovascular em bicicleta, com muita energia.',
    icon: 'Bike',
    tag: 'Coletiva',
    image: stock('1526506118085-60ce8714f8c5', 1000),
    sobre:
      'Aula coletiva sobre a bicicleta, conduzida com música e variações de intensidade ao longo da sessão.',
    topicos: [
      'Trabalho cardiovascular em grupo',
      'Carga e ritmo ajustados individualmente',
      'Aula guiada do início ao fim',
      'Baixo impacto nas articulações',
    ],
    indicado: 'Para quem busca um cardio intenso em ambiente coletivo.',
  },
  {
    id: 'body-jam',
    nome: 'BODY JAM',
    resumo: 'Aulas coletivas que combinam música, movimento e condicionamento.',
    icon: 'Disc3',
    tag: 'Coletiva',
    image: stock('1544367567-0f2fcb009e0b', 1000),
    sobre:
      'Aula coletiva que une música, movimento e trabalho de condicionamento em uma mesma sessão.',
    topicos: [
      'Sequências coreografadas com progressão',
      'Trabalho de coordenação e ritmo',
      'Ambiente coletivo e energético',
      'Acompanhamento do professor durante a aula',
    ],
    indicado: 'Para quem quer variar a rotina sem perder intensidade.',
  },
  {
    id: 'aerobicos',
    nome: 'AERÓBICOS',
    resumo: 'Atividades coletivas para movimentar o corpo e elevar a intensidade do treino.',
    icon: 'Activity',
    tag: 'Coletiva',
    image: stock('1518611012118-696072aa579a', 1000),
    sobre:
      'Atividades coletivas com foco em movimento contínuo, pensadas para elevar a intensidade do treino de forma progressiva.',
    topicos: [
      'Movimentação contínua em grupo',
      'Progressão de intensidade durante a aula',
      'Exercícios adaptáveis',
      'Boa opção para complementar a musculação',
    ],
    indicado: 'Para quem quer somar mais movimento à semana de treino.',
  },
  {
    id: 'aerower',
    nome: 'AEROWER',
    resumo: 'Treinamento coletivo com foco em movimento e condicionamento.',
    icon: 'Waves',
    tag: 'Coletiva',
    image: stock('1549060279-7e168fcee0c2', 1000),
    sobre:
      'Treinamento em grupo com foco em movimento e condicionamento, conduzido por profissional da unidade.',
    topicos: [
      'Aula conduzida em grupo',
      'Foco em movimento e condicionamento',
      'Variações conforme o nível dos participantes',
      'Dinâmica de treino em circuito',
    ],
    indicado: 'Para quem gosta de treinar em grupo com estímulos variados.',
  },
  {
    id: 'condicionamento-corporal',
    nome: 'CONDICIONAMENTO CORPORAL',
    resumo: 'Exercícios voltados ao desenvolvimento do condicionamento físico.',
    icon: 'Target',
    tag: 'Funcional',
    image: stock('1552674605-db6ffd4facb5', 1000),
    sobre:
      'Trabalho voltado ao desenvolvimento do condicionamento físico geral, com exercícios que envolvem o corpo como um todo.',
    topicos: [
      'Exercícios de corpo inteiro',
      'Foco em condicionamento geral',
      'Progressão ajustada por aluno',
      'Pode ser combinado com outras modalidades',
    ],
    indicado: 'Para quem quer desenvolver condicionamento de forma ampla.',
  },
]

/* ----------------------------------------------------------------------------
 *  7. ESTRUTURA / GALERIA
 * ----------------------------------------------------------------------------
 *  // SUBSTITUIR PELAS FOTOS REAIS DA UNIDADE
 *  Imagens genéricas de banco de imagem, usadas apenas como PLACEHOLDER.
 * -------------------------------------------------------------------------- */
export const galeria = [
  {
    id: 'musculacao',
    titulo: 'Área de musculação',
    legenda: 'Espaço destinado aos treinos de força.',
    icon: 'Dumbbell',
    image: stock('1534438327276-14e5300c3a48', 1200),
    span: 'wide',
  },
  {
    id: 'equipamentos',
    titulo: 'Equipamentos',
    legenda: 'Aparelhos e acessórios para diferentes tipos de treino.',
    icon: 'Layers',
    image: stock('1583454110551-21f2fa2afe61', 900),
  },
  {
    id: 'cardio',
    titulo: 'Área de cardio',
    legenda: 'Espaço voltado ao trabalho cardiovascular.',
    icon: 'HeartPulse',
    image: stock('1470468969717-61d5d54fd036', 900),
  },
  {
    id: 'coletivas',
    titulo: 'Aulas coletivas',
    legenda: 'Ambiente preparado para treinos em grupo.',
    icon: 'Users',
    image: stock('1594381898411-846e7d193883', 900),
  },
  {
    id: 'ambiente',
    titulo: 'Ambiente interno',
    legenda: 'Circulação e organização do espaço.',
    icon: 'Building2',
    image: stock('1574680096145-d05b474e2155', 1200),
    span: 'wide',
  },
]

/* ----------------------------------------------------------------------------
 *  8. PLANOS
 * ----------------------------------------------------------------------------
 *  ⚠️ NENHUM PREÇO É EXIBIDO — todos remetem à unidade.
 *  Os itens abaixo descrevem possibilidades de forma neutra, sem prometer
 *  serviços que não foram confirmados.
 * -------------------------------------------------------------------------- */
export const planos = [
  {
    id: 'essencial',
    nome: 'ESSENCIAL',
    resumo: 'Para quem quer começar sua rotina de treinos.',
    icon: 'Zap',
    destaque: false,
    preco: 'CONSULTE A UNIDADE',
    itens: [
      'Acesso à área de musculação',
      'Orientação inicial de treino',
      'Ideal para quem está começando',
      'Condições e vigência: consulte a unidade',
    ],
  },
  {
    id: 'plus',
    nome: 'PLUS',
    resumo: 'Mais possibilidades para sua rotina.',
    icon: 'Flame',
    destaque: true,
    preco: 'CONSULTE A UNIDADE',
    itens: [
      'Acesso à área de musculação',
      'Acesso à área de cardio',
      'Participação em aulas coletivas disponíveis',
      'Condições e vigência: consulte a unidade',
    ],
  },
  {
    id: 'premium',
    nome: 'PREMIUM',
    resumo: 'Para quem busca uma experiência mais completa.',
    icon: 'Sparkles',
    destaque: false,
    preco: 'CONSULTE A UNIDADE',
    itens: [
      'Acesso amplo às áreas de treino',
      'Participação nas modalidades disponíveis',
      'Acompanhamento conforme a rotina do aluno',
      'Condições e vigência: consulte a unidade',
    ],
  },
]

/* ----------------------------------------------------------------------------
 *  9. DIFERENCIAIS
 * -------------------------------------------------------------------------- */
export const diferenciais = [
  {
    id: 'estrutura',
    titulo: 'ESTRUTURA',
    texto: 'Um ambiente preparado para diferentes objetivos de treino.',
    icon: 'Building2',
  },
  {
    id: 'variedade',
    titulo: 'VARIEDADE',
    texto: 'Opções de treinamento para tornar sua rotina mais dinâmica.',
    icon: 'Layers',
  },
  {
    id: 'energia',
    titulo: 'ENERGIA',
    texto: 'Um ambiente que incentiva você a manter o foco.',
    icon: 'Flame',
  },
  {
    id: 'evolucao',
    titulo: 'EVOLUÇÃO',
    texto: 'Treine de acordo com seus objetivos e acompanhe sua evolução.',
    icon: 'TrendingUp',
  },
]

/* ----------------------------------------------------------------------------
 *  10. OBJETIVOS
 * -------------------------------------------------------------------------- */
export const objetivos = [
  { id: 'forca', emoji: '🔥', titulo: 'Ganhar força', icon: 'Dumbbell' },
  { id: 'condicionamento', emoji: '❤️', titulo: 'Melhorar condicionamento', icon: 'HeartPulse' },
  { id: 'disposicao', emoji: '⚡', titulo: 'Ter mais disposição', icon: 'Zap' },
  { id: 'resistencia', emoji: '🏃', titulo: 'Melhorar resistência', icon: 'Footprints' },
  { id: 'rotina', emoji: '💪', titulo: 'Desenvolver uma rotina de treino', icon: 'Repeat' },
]

/* ----------------------------------------------------------------------------
 *  11. FAQ
 * ----------------------------------------------------------------------------
 *  Sempre que a informação não estiver confirmada, a resposta remete à unidade.
 * -------------------------------------------------------------------------- */
export const faq = [
  {
    q: 'Quais modalidades estão disponíveis?',
    a: 'Esta demonstração apresenta musculação e um conjunto de aulas coletivas como referência de layout. A lista definitiva de modalidades e a disponibilidade de cada uma devem ser confirmadas: consulte a unidade para informações atualizadas.',
  },
  {
    q: 'Quais são os planos?',
    a: 'A página organiza os planos em três níveis (Essencial, Plus e Premium) para fins de apresentação. Valores, benefícios e condições não são divulgados aqui: consulte a unidade para informações atualizadas.',
  },
  {
    q: 'Como funciona a aula experimental?',
    a: 'O formulário desta página registra o interesse em conhecer a academia. Nesta demonstração nenhum dado é enviado ou armazenado. As regras da aula experimental devem ser confirmadas: consulte a unidade para informações atualizadas.',
  },
  {
    q: 'Quais são os horários?',
    a: 'Nenhum horário é informado nesta demonstração para evitar informação incorreta. Consulte a unidade para informações atualizadas.',
  },
  {
    q: 'Preciso ter experiência para começar?',
    a: 'A proposta apresentada contempla diferentes níveis de experiência, incluindo quem está começando. Orientações específicas e cuidados individuais devem ser tratados diretamente com a equipe: consulte a unidade para informações atualizadas.',
  },
  {
    q: 'Como posso entrar em contato?',
    a: 'Pelo botão de WhatsApp desta página. Enquanto esta demonstração estiver com dados de exemplo, o número utilizado é um placeholder e deve ser substituído pelo contato oficial antes de qualquer publicação.',
  },
]

/* ----------------------------------------------------------------------------
 *  12. FORMULÁRIO (opções dos campos)
 * -------------------------------------------------------------------------- */
export const formOptions = {
  objetivos: [
    'Ganhar força',
    'Melhorar condicionamento',
    'Ter mais disposição',
    'Melhorar resistência',
    'Desenvolver uma rotina de treino',
    'Outro objetivo',
  ],
  modalidades: [...modalidades.map((m) => m.nome), 'Ainda não sei / quero orientação'],
  horarios: [
    'Manhã',
    'Tarde',
    'Noite',
    'Qualquer horário',
  ],
}
