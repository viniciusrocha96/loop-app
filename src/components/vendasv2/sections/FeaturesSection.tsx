"use client";

import { FeatureBlock } from "../ui/FeatureBlock";

export function FeaturesSection() {
  const features = [
    {
      title: "Fechamento de Ciclos",
      description: "Transforme tarefas em progresso real, eliminando a sensação de estar sempre ocupado sem resultados práticos. O LOOP conecta sua rotina com suas maiores ambições.",
      items: [
        "Eliminação da carga mental imediata",
        "Conexão direta entre intenção e ação",
        "Fim do sentimento de 'falsa produtividade'"
      ],
      mockupSrc: "/feature-ciclos.png",
      ctaText: "ENCERRAR MINHAS PENDÊNCIAS →",
      reversed: false,
    },
    {
      title: "Clareza Total",
      description: "Saiba exatamente o que fazer, quando fazer e por que fazer, com um guia diário de metas. Chega de acordar sem saber por onde começar o seu dia.",
      items: [
        "Metas diárias, semanais e mensais alinhadas",
        "Visualização limpa e focada no essencial",
        "Redução drástica da procrastinação"
      ],
      mockupSrc: "/feature-clareza.png",
      ctaText: "VER MEU CAMINHO CLARO →",
      reversed: true,
    },
    {
      title: "Sua Liberdade Financeira sob Controle",
      description: "Chega de planilhas complexas que você esquece de preencher. No LOOP, sua gestão financeira é visual e integrada à sua rotina. Saiba exatamente para onde seu dinheiro vai sem esforço mental.",
      items: [
        "Visão clara de gastos e receitas em tempo real.",
        "Categorização inteligente para decisões rápidas.",
        "Fim da ansiedade financeira com previsibilidade total."
      ],
      mockupSrc: "/feature-financeiro.png",
      ctaText: "DOMINAR MINHAS FINANÇAS →",
      reversed: false,
    },
    {
      title: "Sua Evolução na Velocidade da Voz",
      description: "O LOOP não é apenas um app, é um assistente que te entende. Fale ou digite o que precisa e deixe a nossa IA organizar sua agenda, criar metas e fechar seus ciclos por você.",
      items: [
        "Organização instantânea via comando de voz ou texto.",
        "Sugestões inteligentes baseadas no seu ritmo de vida.",
        "Interação humana e intuitiva: você pede, o LOOP executa."
      ],
      mockupSrc: "/feature-ia.png",
      ctaText: "CONVERSAR COM MINHA IA →",
      reversed: true,
    },
    {
      title: "Multiplataforma",
      description: "Acesse seu sistema de qualquer lugar, a qualquer hora, no seu computador ou celular. A sua vida inteira centralizada e protegida na palma da sua mão.",
      items: [
        "Sincronização em tempo real",
        "Acesso via Desktop, Tablet e Mobile",
        "Segurança ponta-a-ponta dos seus dados"
      ],
      mockupSrc: "/feature-multiplataforma.png",
      ctaText: "BAIXAR O LOOP EM TUDO →",
      reversed: false,
    },
  ];

  return (
    <div className="w-full bg-[var(--color-primary-bg)]">
      {features.map((feature, index) => (
        <FeatureBlock
          key={index}
          title={feature.title}
          description={feature.description}
          features={feature.items}
          mockupSrc={feature.mockupSrc}
          ctaText={feature.ctaText}
          reversed={feature.reversed}
        />
      ))}
    </div>
  );
}
