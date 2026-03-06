import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TracksList from "./components/tracksList";
import BandsList from "./components/bandsList";
import Header from "./components/header";
import Footer from "./components/footer";

export default async function SpotifyHomePage() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#121212] to-black p-4">
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Trending songs</h2>
              <Link
                href="/tracks"
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
                href="/bands"
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
    </div>
  );
}
