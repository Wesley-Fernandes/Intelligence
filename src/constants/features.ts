export interface FeatureArray {
  portaria: Feature[];
  equipamentos: Feature[];
}
export interface Feature {
  title: string;
  description: string;
}

export const features: FeatureArray = {
  portaria: [
    {
      title: 'Portaria Remota',
      description:
        'Gerenciamento e controle de acesso remoto, com tecnologia segura e eficiente, sem a necessidade de porteiros no local.',
    },
    {
      title: 'Portaria Autônoma',
      description:
        'Sistema de portaria automatizado, com monitoramento e controle inteligentes, sem intervenção humana.',
    },
    {
      title: 'Portaria Híbrida',
      description:
        'Combinação de portaria física com tecnologia digital para garantir máxima segurança e eficiência.',
    },
    {
      title: 'Portaria Digital',
      description:
        'Controle de acesso totalmente digital, integrando sistemas de segurança com aplicativos e dispositivos móveis.',
    },
    {
      title: 'Portaria Inteligente',
      description:
        'Soluções de portaria com inteligência artificial para otimizar a segurança e gestão de acessos.',
    },
    {
      title: 'Sistemas de controle de Acesso',
      description:
        'Sistemas avançados de controle de acesso, garantindo segurança e conveniência para moradores e visitantes.',
    },
    {
      title: 'Aplicativo condominial',
      description:
        'Plataforma mobile que facilita a gestão de serviços e comunicação dentro do condomínio.',
    },
    {
      title: 'Reconhecimento Facial',
      description:
        'Tecnologia de ponta para reconhecimento facial, garantindo maior segurança e agilidade no acesso ao condomínio.',
    },
    {
      title: 'Sistema de CFTV com Inteligência Artificial',
      description:
        'Monitoramento por câmeras com inteligência artificial para análise em tempo real e identificação de atividades suspeitas.',
    },
    {
      title: 'Inteligência artificial para condomínios',
      description:
        'Aplicação de IA para automatizar processos de segurança e gestão condominial de forma inteligente.',
    },
    {
      title: 'Sistemas de controle de acesso para portarias físicas',
      description:
        'Soluções integradas para controle de acesso em portarias com presença de porteiros, unindo tecnologia e segurança.',
    },
    {
      title: 'Automação Condominial',
      description:
        'Sistemas automatizados para gerenciar o dia a dia do condomínio, desde a iluminação até a segurança.',
    },
  ],
  equipamentos: [
    {
      title: 'Locação de Equipamentos de controle de acesso e CFTV',
      description:
        'Aluguel de equipamentos de última geração para controle de acesso e monitoramento por câmeras.',
    },
    {
      title: 'Motores de portões de garagem Ultra rápidos',
      description:
        'Motores de alta performance para portões de garagem, garantindo rapidez e eficiência.',
    },
    {
      title: 'Cancelas Ultra rápidas',
      description:
        'Cancelas automáticas com velocidade superior, proporcionando fluidez no controle de entrada e saída.',
    },
    {
      title: 'Geradores Silenciados Inverter',
      description:
        'Geradores silenciosos e eficientes, garantindo energia de backup em situações de emergência.',
    },
    {
      title: 'Nobreaks de altíssima duração',
      description:
        'Sistemas de nobreak que oferecem suporte prolongado de energia para manter o funcionamento contínuo dos sistemas.',
    },
  ],
};
