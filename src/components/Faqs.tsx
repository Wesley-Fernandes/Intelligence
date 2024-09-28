import React from 'react';

export default function Faqs() {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          Como funciona
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Respondendo perguntas frequentes
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Alguma pergunta aqui?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Alguma resposta respondendo a pergunta.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            Alguma pergunta aqui?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Alguma resposta respondendo a pergunta.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Alguma pergunta aqui?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Alguma resposta respondendo a pergunta.
              </p>
              <p>
                Alguma resposta respondendo a pergunta.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
