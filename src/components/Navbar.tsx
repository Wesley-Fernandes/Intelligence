import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header className="p-4 bg-[#167cc0]">
      <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 text-white hover:text-emerald-300"
            >
              Link
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 text-white hover:text-emerald-300"
            >
              Link
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/#contato"
              className="flex items-center px-4 -mb-1 border-b-2 text-white hover:text-emerald-300"
            >
              Contato
            </Link>
          </li>
        </ul>
        <Link
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <Image
            src="/assets/icon.png"
            width={120}
            height={120}
            alt="logo"
            className="h-16 w-16 border-2 rounded-3xl"
          />
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 text-white hover:text-emerald-300"
            >
              Inicio
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 text-white hover:text-emerald-300"
            >
              Link
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 text-white hover:text-emerald-300"
            >
              Link
            </Link>
          </li>
        </ul>
        <button title="Button" type="button" className="p-4 md:hidden text-white">
          <Menu/>
        </button>
      </div>
    </header>
  );
}
