import React from 'react';

export default function Stats() {
  return (
    <section className="my-8 p-6" id='estatisticas'>
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-2xl font-bold leading-none lg:text-6xl text-[#167cc0]">
            +70
          </p>
          <p className="text-sm sm:text-base">Condominios</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-2xl font-bold leading-none lg:text-6xl text-[#167cc0]">
            6.000
          </p>
          <p className="text-sm sm:text-base">Acessos diarios</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-2xl font-bold leading-none lg:text-6xl text-[#167cc0]">
            2.000.000
          </p>
          <p className="text-sm sm:text-base">Acessos</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-2xl font-bold leading-none lg:text-6xl text-[#167cc0]">
            130.000
          </p>
          <p className="text-sm sm:text-base">Vistantes cadastrados</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-2xl font-bold leading-none lg:text-6xl text-[#167cc0]">
            4.000.000
          </p>
          <p className="text-sm sm:text-base">Investimentos</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-2xl font-bold leading-none lg:text-6xl text-[#167cc0]">
            +130
          </p>
          <p className="text-sm sm:text-base">Empregos gerados</p>
        </div>
      </div>
    </section>
  );
}
