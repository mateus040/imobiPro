"use client";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="container mx-auto pt-6 pb-12 text-white relative">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={logo}
            alt="logo"
            priority
            quality={100}
            width={130}
            height={130}
          />
        </div>

        <ul className="hidden lg:flex items-center gap-10 mx-3 font-semibold">
          <li>À venda</li>
          <li>Alugar</li>
          <li>Temporada</li>
          <li>Financiamento</li>
          <li>
            <button className="bg-[#FFAC12] hover:bg-[#e7a834] transition-all duration-200 py-3 px-12 flex items-center justify-center gap-3 rounded-tr-2xl">
              <span className="text-black">Anuncie</span>
              <FaLongArrowAltRight className="text-white" />
            </button>
          </li>
        </ul>

        <div className="block lg:hidden mx-7 -mt-3">
          <button
            className="border border-[#FFAC12] p-3 py-2 rounded-lg hover:bg-[#FFAC12] hover:text-black transition-all duration-200 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`transition-transform duration-300 ease-in-out ${
                isMenuOpen
                  ? "-rotate-90 opacity-0 absolute"
                  : "rotate-0 opacity-100"
              }`}
            >
              <FaBars size={24} />
            </span>
            <span
              className={`transition-transform duration-300 ease-in-out ${
                isMenuOpen
                  ? "rotate-0 opacity-100"
                  : "-rotate-90 opacity-0 absolute"
              }`}
            >
              <FaTimes size={24} />
            </span>
          </button>

          <div
            className={`absolute right-0 mt-3 w-64 bg-white text-black shadow-lg rounded-lg p-6 z-50 mx-7 
              transition-all duration-300 ease-in-out transform ${
                isMenuOpen
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
          >
            <ul className="flex flex-col gap-4 font-semibold">
              <li className="hover:text-[#FFAC12] cursor-pointer">À venda</li>
              <li className="hover:text-[#FFAC12] cursor-pointer">Alugar</li>
              <li className="hover:text-[#FFAC12] cursor-pointer">Temporada</li>
              <li className="hover:text-[#FFAC12] cursor-pointer">
                Financiamento
              </li>
              <li>
                <button className="bg-[#FFAC12] hover:bg-[#e7a834] transition-all duration-200 py-2 px-6 flex items-center justify-center gap-3 rounded-tr-2xl w-full">
                  <span className="text-black">Anuncie</span>
                  <FaLongArrowAltRight className="text-white" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
