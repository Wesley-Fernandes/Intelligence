import React from 'react';
import Chief from './Chief';
import { chiefs } from '@/constants/chiefs';

export default function Team() {
  return (
    <section className="py-6 ">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          Nosso time
        </p>
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
          Equipe administrativa
        </h1>
        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          {chiefs.map((chief) => {
            return <Chief key={chief.name} {...chief} />;
          })}
        </div>
      </div>
    </section>
  );
}
