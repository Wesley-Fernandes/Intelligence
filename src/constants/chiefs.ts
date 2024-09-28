export interface Chief {
  id: string;
  name: string;
  image: string;
  position: string;
  description: string;
}

export const chiefs: Chief[] = [
  {
    id: 'chief-1',
    name: 'Gilberto Rossi',
    image: '/chiefs/Rossi.png',
    position: 'Diretor Financeiro (CFO)',
    description: "Responsável pela gestão financeira da empresa, controlando orçamentos, fluxo de caixa e planejamento financeiro garantindo a saúde financeira da empresa e implementar estratégias que promovam crescimento sustentável, mantendo os investimentos alinhados com os objetivos da organização."
  },
  {
    id: 'chief-2',
    name: 'Juliano Reis',
    image: '/chiefs/Juliano.png',
    position: 'Diretor de Operações e Marketing',
    description: "Responsável pela gestão estratégica da divulgação da empresa e pelo marketing, além de liderar a equipe técnica. Também avalia e aprovação de novos contratos, garantindo que as oportunidades de negócio estejam alinhadas com os objetivos da empresa."
  },
  {
    id: 'chief-3',
    name: 'Leandro Cardoso',
    image: '/chiefs/Leandro.png',
    position: 'Gerente de Operações e Relacionamento',
    description: "Responsável por supervisionar a equipe de operação, assegurando a eficiência dos serviços prestados. Além disso, é o ponto de contato direto com os síndicos, mantendo um relacionamento transparente e colaborativo para atender às demandas dos condomínios."
  },
];
