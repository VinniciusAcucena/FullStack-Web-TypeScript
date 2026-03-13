import { findBandById } from "@/app/actions/fetchItems";
import Header from "@/app/components/header";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";

function formatDuration(durationInSeconds: number) {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
}

export default async function BandPage({ params }: { params: { id: string } }) {
  const band = await findBandById(params.id);
  console.log(band);
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-white flex items-center"
      >
        <ChevronLeft className="w-4 h-4 ml-1" />
        Voltar
      </Link>
      <div className="m-3 ">
        {band ? (
          <div>
            <div className="flex flex-col justify-center items-center  bg-[#181818] p-4 rounded-md max-w-2xl mx-auto">
              <h1 className="text-semibold text-4xl text-gray-300">
                {band.name}
              </h1>
              <Image
                src={"/sem-perfil.png"}
                alt={"Foto perfil"}
                width={180}
                height={80}
                className="mr-1"
              />
              <p className="text-gray-300 text-2xl mt-1">
                {band.description}
              </p>{" "}
            </div>
            <div className="m-4 p-2 rounded-md bg-[#181818]">
              <h3>Músicas</h3>
              {band.tracks.map((track: any, index: number) => (
                <div className="px-3 flex gap-3 items-center w-full">
                  <p>{index + 1}</p>
                  <Link href={`/tracks/${track.id}`} className="w-full">
                    <div
                      key={track.id}
                      className="text-gray-300 rounded-md bg-[#252525] m-3 p-2 flex justify-between w-full hover:bg-gray-700 hover:cursor-pointer"
                    >
                      <div className="flex gap-2 items-center">
                        <Image
                          src={track.imageUrl ?? "/sem-musica.png"}
                          alt={"Foto disco"}
                          width={40}
                          height={40}
                        />
                        <p>{track.title}</p>
                      </div>
                      <p>{formatDuration(track.durationInSeconds)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Banda não encontrada</p>
        )}
      </div>
    </div>
  );
}
