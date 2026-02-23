import Image from "next/image";
import Link from "next/link";
import { Search, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { fetchBands, fetchTracks } from "./actions/fetchItems";
import TracksList from "./components/tracksList";
import BandsList from "./components/bandsList";
import Header from "./components/header";

export default async function SpotifyHomePage() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Header />

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

            <TracksList limit={7} isRandom={true} />
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

            <BandsList isRandom={true} limit={7} />
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
