import Image from "next/image";
import Link from "next/link";
import { Search, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { fetchBands, fetchTracks } from "./actions/fetchItems";

interface Band {
  name: string;
  description: string;
}

interface Track {
  title: string;
  durationInSeconds: number;
  bandId: string;
  band: Band;
}

export default async function SpotifyHomePage() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-black">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/spotify-logo.png"
              alt="Spotify"
              width={132}
              height={40}
              className="w-8 h-8 md:w-[132px] md:h-[40px]"
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

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#121212] to-black p-4">
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Trending songs</h2>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white flex items-center"
              >
                Mostrar tudo
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {trendingSongs.map((track, index) => (
                <div
                  key={index}
                  className="bg-[#181818] p-3 rounded-md hover:bg-[#282828] transition-all cursor-pointer"
                >
                  <h3 className="font-semibold text-sm truncate">
                    {track.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 truncate">
                    {track.band.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Popular artists</h2>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white flex items-center"
              >
                Mostrar tudo
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {popularArtists.map((band, index) => (
                <div
                  key={index}
                  className="bg-[#181818] p-3 rounded-md hover:bg-[#282828] transition-all cursor-pointer"
                >
                  <h3 className="font-semibold text-sm truncate">
                    {band.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {band.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <div className="bg-gradient-to-r from-purple-700 to-blue-500 p-3 flex justify-between items-center">
        <div>
          <p className="text-xs font-bold">Testar o Premium de graça</p>
          <p className="text-xs">
            Inscreva-se para curtir música ilimitada e podcasts só com alguns
            anúncios. Não precisa de cartão de crédito.
          </p>
        </div>
        <Button className="bg-white text-black hover:bg-gray-200 rounded-full text-sm font-bold whitespace-nowrap">
          Inscreva-se grátis
        </Button>
      </div>
    </div>
  );
}

const trendingSongs: Track[] = await fetchTracks();

const popularArtists: Band[] = await fetchBands();
