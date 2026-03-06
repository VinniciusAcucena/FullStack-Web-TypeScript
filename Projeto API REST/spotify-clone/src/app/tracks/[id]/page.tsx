import { findTrackById } from "@/app/actions/fetchItems";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { ChevronLeft, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function formatDuration(durationInSeconds: number) {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
}

export default async function TrackPage({
  params,
}: {
  params: { id: string };
}) {
  const currentTime = 0;
  const isPlaying = false;
  const track = await findTrackById(params.id);
  return (
    <div>
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-white flex items-center"
      >
        <ChevronLeft className="w-4 h-4 ml-1" />
        Voltar
      </Link>

      <div className="flex flex-col justify-center items-center p-4 max-w-2xl mx-auto text-gray-300 gap-2">
        <Image
          src={"/sem-musica.png"}
          alt={"Foto disco"}
          width={300}
          height={200}
        />
        <h1 className="text-semibold text-4xl ">{track.title}</h1>
        <p className=" text-2xl mt-1">{track.band.name}</p>
      </div>
      <div className="flex flex-row justify-center items-center m-2 p-4 gap-4 text-gray-300">
        <p>00:00</p>
        <input
          type="range"
          min="0"
          max={track.durationInSeconds}
          value={currentTime}
          className="w-full accent-green-500"
        />
        <p>{formatDuration(track.durationInSeconds)}</p>
      </div>
      <div className="flex flex-row justify-center items-center m-2 p-4 gap-4 text-gray-300">
        <button className=" text-white font-bold py-2 px-4 rounded-4xl hover:bg-gray-500 hover:cursor-pointer">
          <SkipBack size={40} />
        </button>
        <button className=" text-white font-bold py-2 px-4 rounded-4xl hover:bg-gray-500 hover:cursor-pointer">
          {isPlaying ? <Pause size={40} /> : <Play size={40} />}
        </button>
        <button className=" text-white font-bold py-2 px-4 rounded-4xl hover:bg-gray-500 hover:cursor-pointer">
          <SkipForward size={40} />
        </button>
      </div>
    </div>
  );
}
