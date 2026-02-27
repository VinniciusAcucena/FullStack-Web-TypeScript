import Link from "next/link";
import Header from "../components/header";
import TracksList from "../components/tracksList";
import { ChevronLeft } from "lucide-react";
import Footer from "../components/footer";

export default function TracksPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-white flex items-center"
      >
        <ChevronLeft className="w-4 h-4 ml-1" />
        Voltar
      </Link>
      <section className="mb-8">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Todas as músicas</h2>
        </div>
        <TracksList isRandom={false} />*
      </section>
      <Footer />
    </div>
  );
}
