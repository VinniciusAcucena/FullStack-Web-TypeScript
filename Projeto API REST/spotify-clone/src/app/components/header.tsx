import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-black">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/spotify-logo.png"
            alt="Spotify"
            width={132}
            height={40}
            className="w-8 h-8 "
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center bg-[#242424] rounded-full px-3 py-2 flex-1 max-w-md mx-4">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="O que você quer ouvir?"
          className="bg-transparent border-none outline-none text-sm text-gray-300 w-full"
        />
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="#"
          className="hidden md:block text-gray-300 text-sm hover:text-white"
        >
          Premium
        </Link>
        <Link
          href="#"
          className="hidden md:block text-gray-300 text-sm hover:text-white"
        >
          Suporte
        </Link>
        <Link
          href="#"
          className="hidden md:block text-gray-300 text-sm hover:text-white"
        >
          Baixar
        </Link>
        <div className="hidden md:block h-6 w-[1px] bg-gray-700 mx-2"></div>
        <Link
          href="#"
          className="hidden md:block text-gray-300 text-sm hover:text-white"
        >
          Inscrever-se
        </Link>
        <Button className="bg-white text-black hover:bg-gray-200 rounded-full font-bold">
          Entrar
        </Button>
      </div>
    </header>
  );
}
