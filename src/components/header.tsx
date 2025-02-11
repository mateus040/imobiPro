import Image from "next/image";
import logo from "../../public/images/logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";

export function Header() {
  return (
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

      <div className="hidden lg:block">
        <ul className="flex items-center gap-10 mx-3 font-semibold">
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
      </div>
    </div>
  );
}
