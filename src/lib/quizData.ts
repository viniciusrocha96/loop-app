export const quizSteps = [
  // ETAPA 0: CAPA
  { 
    type: 'intro', 
    title: 'Por que algumas pessoas conseguem organizar a vida em poucas semanas… enquanto outras vivem recomeçando toda segunda-feira?', 
    subtitle: 'Em menos de 2 minutos descubra se você está preso no ciclo invisível da inconsistência — e como sair dele usando o LOOP: Seu Guia de Metas Diárias.', 
    buttonText: 'Fazer o diagnóstico agora' 
  },
  // ETAPA 1: SITUAÇÃO
  { 
    type: 'question', 
    question: 'Quando você tenta organizar sua vida ou rotina, o que normalmente acontece?', 
    options: [
      'Faço um planejamento bonito… e abandono poucos dias depois', 
      'Começo animado, mas a rotina me engole', 
      'Me sinto sobrecarregado antes mesmo de começar', 
      'Crio muitas listas… mas avanço pouco', 
      'Nem sei por onde deveria começar'
    ] 
  },
  // ETAPA 2: SITUAÇÃO
  { 
    type: 'question', 
    question: 'No final de um dia comum, qual sensação aparece com mais frequência?', 
    options: [
      'Trabalhei o dia todo… mas avancei pouco', 
      'Procrastinei mais do que gostaria', 
      'Minha cabeça está cheia de tarefas', 
      'Parece que o dia simplesmente sumiu', 
      'Sinto que poderia ter feito muito mais'
    ] 
  },
  // ETAPA 3: PROBLEMA
  { 
    type: 'question', 
    question: 'O que mais te frustra quando tenta melhorar sua rotina?', 
    options: [
      'Começo empolgado… e paro rápido', 
      'Nunca consigo manter constância', 
      'Tenho muitas ideias, mas pouca execução', 
      'Me sinto sempre atrasado na vida', 
      'Não consigo enxergar progresso real'
    ] 
  },
  // ETAPA 4: TELA DE IMPACTO
  { 
    type: 'impact', 
    title: 'Você não está sozinho nisso.', 
    text: 'Um estudo publicado na Harvard Business Review mostrou que a maioria das pessoas abandona sistemas de organização nas primeiras semanas. Não por falta de disciplina, mas porque não conseguem enxergar progresso real no dia a dia.', 
    buttonText: 'Entendi, continuar' 
  },
  // ETAPA 5: SINTOMA
  {
    type: 'question',
    question: 'Durante projetos mais longos, quando você se desmotiva e desiste?',
    options: [
      'Quando surgem os primeiros obstáculos difíceis',
      'Quando demoro muito para ver resultados palpáveis',
      'Quando me sinto confuso sobre o próximo passo',
      'Quando perco o registro e organização',
      'Simplesmente deixo de lado inconscientemente'
    ]
  },
  // ETAPA 6: SOLUÇÃO TENTADA
  {
    type: 'question',
    question: 'Quantos métodos ou apps de organização você já tentou usar nos últimos 12 meses?',
    options: [
      '1 a 2',
      '3 a 5',
      'Mais de 5, já testei de tudo',
      'Nenhum',
      'Uso o mesmo de sempre, mesmo não funcionando bem'
    ]
  },
  // ETAPA 7: SINTOMA DE SISTEMA
  {
    type: 'question',
    question: 'As suas metas geralmente...',
    options: [
      'Ficam esquecidas num caderno/bloco de notas antigo',
      'São tão distantes que perdem o sentido no dia a dia',
      'Nunca são definidas formalmente',
      'São vagas (ex: "ganhar mais dinheiro", "emagrecer")',
      'Sinto-me pressionado e evito olhar para elas'
    ]
  },
  // ETAPA 8: TELA DE IMPACTO 2
  {
    type: 'impact',
    title: 'O cérebro precisa de retorno.',
    text: 'Neurologicamente, a motivação é alimentada pela dopamina liberada quando fechamos um ciclo e vemos progresso. Se seus objetivos são abertos e sem checkpoints frequentes, seu cérebro busca recompensas dopaminérgicas mais rápidas (como rolar o feed do celular).',
    buttonText: 'Isso faz sentido'
  },
  // ETAPA 9: REFLEXÃO FINAL
  {
    type: 'question',
    question: 'Se você pudesse estalar os dedos e mudar uma coisa na sua rotina hoje, o que seria?',
    options: [
      'Poder ir até o fim nas coisas que planejo',
      'Deixar de me sentir culpado ao fim do dia',
      'Ter um plano claro do que fazer a cada hora',
      'Ficar em paz com meu próprio tempo livre',
      'Ter confiança nas minhas próprias promessas'
    ]
  },
  // ETAPA 10: QUASE LÁ (Preparação para Resultado)
  {
    type: 'impact',
    title: 'Estamos gerando seu diagnóstico...',
    text: 'Cruzando suas respostas com padrões de comportamento de mais de 10.000 perfis produtivos para identificar a raiz dos seus atritos de execução.',
    buttonText: 'Ver Meu Perfil'
  },
  // ETAPA 11: DIAGNÓSTICO
  { 
    type: 'result', 
    title: 'Seu perfil mais provável é: O RECOMEÇADOR', 
    text: 'Você tem ideias, mas seus ciclos de execução nunca se fecham. Isso não é falta de disciplina, é falta de um sistema que conecta planejamento, execução e progresso real.', 
    buttonText: 'Ver como funciona o LOOP' 
  }
];
