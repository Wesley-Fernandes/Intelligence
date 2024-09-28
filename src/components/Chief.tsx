import type { Chief } from '@/constants/chiefs';
import React from 'react';

export default function Chief({ id, image, name, position, description}: Chief) {
  return (
    <div className="flex flex-col shadow-lg shadow-black/50 justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64  text-gray-100 border-b-4 bg-[#167cc0] border-b-[#146092]">
      <img
        alt=""
        className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full border-4 border-[#167cc0]"
        src={image}
      />
      <div className="flex-1 my-4">
        <h1 className="text-xl font-semibold leading-snug">{name}</h1>
        <span className='text-emerald-300'>{position}</span>
      </div>
      <p className="flex items-center text-sm justify-center p-3 space-x-3 mb-4 rounded-md">
        {description}
      </p>
    </div>
  );
}
