"use client";

import Image from "next/image";
import backgroundImage from "../../../../../public/images/background-hero.png";
import { Header } from "@/components/header";
import { FaBed, FaBuilding, FaHouse, FaMapLocationDot } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { PiBarcode } from "react-icons/pi";
import { useState } from "react";

export function Hero() {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <section>
      <div className="relative h-[500px] flex items-center justify-center">
        <Image
          src={backgroundImage}
          alt="fundo-cidade"
          priority
          quality={100}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full">
          <Header />
        </div>

        <div className="relative z-10 text-white text-center mt-10 lg:mt-0">
          <h1 className="text-4xl font-semibold uppercase">
            Encontre o imóvel dos seus sonhos
          </h1>
          <p className="text-lg mt-2 font-medium">
            A melhor plataforma para compra e aluguel
          </p>

          <div className="block lg:hidden mt-4">
            <button
              className="py-3 px-12 bg-[#FFAC12] hover:bg-[#fcb83b] text-[#271A00] rounded-md font-semibold transition-all duration-300"
              onClick={() => setShowFilter(true)}
            >
              Encontre seu imóvel
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          showFilter
            ? "fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            : "hidden lg:block relative -top-32 left-1/2 transform -translate-x-1/2 w-[80%]"
        } `}
      >
        <div
          className={`bg-[#271A00] py-8 px-10 text-[#F1FAEE] rounded-md ${
            showFilter &&
            "w-[90%] max-w-lg relative max-h-[80vh] overflow-y-auto custom-scrollbar"
          }`}
        >
          <button
            onClick={() => setShowFilter(false)}
            className="block lg:hidden absolute top-2 right-2 text-[#F1FAEE] text-xl font-bold"
          >
            ✖
          </button>

          <div className="hidden lg:block relative py-2 rounded-lg text-black font-semibold bg-[#FFAC12] -top-12 text-center w-[50%] left-1/2 transform -translate-x-1/2">
            Encontre seu imóvel
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:-mt-6">
            <div className="lg:col-span-3">
              <label className="flex items-center space-x-3 font-semibold">
                <FaBuilding />
                <span>Finalidade</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full font-semibold placeholder:text-[#F1FAEE] px-3 py-2 rounded-md bg-[#493d2a] border border-[#4A3000]"
                placeholder="Qual finalidade?"
              />
            </div>
            <div className="lg:col-span-3">
              <label className="flex items-center space-x-3 font-semibold">
                <FaHouse />
                <span>Tipo</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full font-semibold placeholder:text-[#F1FAEE] px-3 py-2 rounded-md bg-[#493d2a] border border-[#4A3000]"
                placeholder="Qual tipo?"
              />
            </div>
            <div className="lg:col-span-3">
              <label className="flex items-center space-x-3 font-semibold">
                <IoLocationSharp />
                <span>Cidade</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full font-semibold placeholder:text-[#F1FAEE] px-3 py-2 rounded-md bg-[#493d2a] border border-[#4A3000]"
                placeholder="Qual cidade?"
              />
            </div>
            <div className="lg:col-span-3">
              <label className="flex items-center space-x-3 font-semibold">
                <FaMapLocationDot />
                <span>Bairro</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full font-semibold placeholder:text-[#F1FAEE] px-3 py-2 rounded-md bg-[#493d2a] border border-[#4A3000]"
                placeholder="Qual bairro?"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mt-5">
            <div className="lg:col-span-3">
              <label className="flex items-center space-x-3 font-semibold">
                <MdOutlineAttachMoney />
                <span>Valor</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full font-semibold placeholder:text-[#F1FAEE] px-3 py-2 rounded-md bg-[#493d2a] border border-[#4A3000]"
                placeholder="Qual valor?"
              />
            </div>
            <div className="lg:col-span-2">
              <label className="flex items-center space-x-3 font-semibold">
                <FaBed />
                <span>Dormitórios</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full font-semibold placeholder:text-[#F1FAEE] px-3 py-2 rounded-md bg-[#493d2a] border border-[#4A3000]"
                placeholder="1"
              />
            </div>
            <div className="lg:col-span-2">
              <label className="flex items-center space-x-3 font-semibold">
                <FaCar />
                <span>Vagas</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full font-semibold placeholder:text-[#F1FAEE] px-3 py-2 rounded-md bg-[#493d2a] border border-[#4A3000]"
                placeholder="1"
              />
            </div>
            <div className="lg:col-span-2">
              <label className="flex items-center space-x-3 font-semibold">
                <PiBarcode />
                <span>Referência</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full font-semibold placeholder:text-[#F1FAEE] px-3 py-2 rounded-md bg-[#493d2a] border border-[#4A3000]"
                placeholder="1a2b3c"
              />
            </div>

            <div className="col-span-2 lg:col-span-3 flex items-end">
              <button className="w-full py-3 px-12 bg-[#F1FAEE] hover:bg-[#e2e2e2] transition-all duration-200 rounded-md text-[#271A00] font-semibold">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
