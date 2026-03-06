import Link from "next/link";
import BandsList from "../components/bandsList";
import Header from "../components/header";
import { ChevronLeft } from "lucide-react";
import Footer from "../components/footer";

export default function BandsPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-white flex items-center"
      >
        <ChevronLeft className="w-4 h-4 ml-1" />
        Voltar
      </Link>
      <section className="mb-8">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Todas as bandas</h2>
        </div>
        <BandsList isRandom={false} />
      </section>
    </div>
  );
}
