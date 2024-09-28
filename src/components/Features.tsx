import { features } from '@/constants/features';
import React from 'react';
import Feature from './Feature';

export default function Features() {
  return (
    <section className="my-8">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
            Tecnologia é nosso forte
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
            Descubra o porque somos a melhor do mercado.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
              Soluções de Portaria Inteligente
            </h3>
            <p className="mt-3 text-lg dark:text-gray-600">
            Tecnologias avançadas para modernizar a segurança e o controle de acesso em condomínios, garantindo praticidade e eficiência com o uso de inteligência artificial e automação.
            </p>
            <div className="mt-12 space-y-12">
              {features.portaria.map((feature, index) => {
                return <Feature key={index} {...feature} />;
              })}
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src="https://source.unsplash.com/random/360x480"
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
              Equipamentos de Alta Performance
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">
              Infraestrutura tecnológica de ponta, com equipamentos rápidos e eficientes para otimizar o controle de acesso e garantir a continuidade do funcionamento dos sistemas condominiais.
              </p>
              <div className="mt-12 space-y-12">
                {features.equipamentos.map((feature, index) => {
                  return <Feature key={index} {...feature} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
