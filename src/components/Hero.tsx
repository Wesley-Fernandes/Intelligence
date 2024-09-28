import React from 'react';
import Typefication from './Typefication';
import { BookOpen, MailPlus } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-[480px] overflow-hidden mb-8" id='inicio'>
      <video
        autoPlay
        muted
        loop
        className="relative right-0 bottom-0 object-cover min-w-full min-h-full"
      >
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute right-0 top-[6rem] min-w-full overflow-hidden h-[480px]">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
            Intelligence
          </h1>
          <p className="mt-6 mb-8 font-semibold text-lg sm:mb-12 xl:max-w-3xl text-gray-50 md:flex md:items-center md:gap-1">
          Líder de Mercado em soluções de tecnologia para <span><Typefication/></span>
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 flex gap-1 w-52 text-center justify-center sm:w-fit py-3 m-2 text-lg font-semibold rounded text-gray-100 border-b-4 bg-[#167cc0] border-b-[#146092]"
            >
              <MailPlus className='text-emerald-300'/>
              Contate-nos
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg flex gap-1 w-52 text-center justify-center md:w-fit items-center border-b-4 font-semibold text-gray-100 rounded bg-emerald-600 border-b-emerald-700"
            >
              <BookOpen className='text-blue-300'/>
              Leia mais
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random/480x320"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />
    </section>
  );
}
