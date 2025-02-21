import Image from "next/image";
import casa from "../../../../../public/images/casa-1.jpg";
import { FaBed, FaCar } from "react-icons/fa6";
import { PiBathtub } from "react-icons/pi";

export function Highlights() {
  return (
    <div className="container mx-auto pt-10 lg:pt-0 pb-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-[#271A00] font-extrabold">Em destaque</h1>
        <p className="mt-2 text-[#7A7474] font-medium">
          Confira os últimos imóveis anunciados na plataforma
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg flex flex-col shadow-lg"
          >
            <div className="h-56">
              <Image
                src={casa}
                alt="casa"
                quality={100}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            <div className="py-5 px-6 break-words">
              <p className="font-semibold break-words">Casa luxuosa</p>
              <p className="mt-1 text-sm text-[#7A7474] font-medium">
                Rua fulano, 256, Jd Brasilia
              </p>
              <p className="mt-2 text-xl font-semibold text-[#271A00]">
                R$250.000,00
              </p>

              <div className="grid grid-cols-12 mt-2">
                <div className="col-span-4 flex items-center space-x-2 font-semibold">
                  <FaBed />
                  <span>3</span>
                </div>
                <div className="col-span-4 flex items-center space-x-2 font-semibold">
                  <PiBathtub />
                  <span>2</span>
                </div>
                <div className="col-span-4 flex items-center space-x-2 font-semibold">
                  <FaCar />
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
