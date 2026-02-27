import { fetchTracks } from "../actions/fetchItems";
import Image from "next/image";

interface Band {
  name: string;
}

interface Track {
  title: string;
  durationInSeconds: number;
  bandId: string;
  band: Band;
}

interface Props {
  limit?: number;
  isRandom: boolean;
}

function formatDuration(durationInSeconds: number) {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
}

export default async function TracksList({ limit, isRandom }: Props) {
  const trendingSongs: Track[] = await fetchTracks(isRandom, limit);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
      {trendingSongs.map((track, index) => (
        <div
          key={index}
          className="bg-[#181818] p-3 rounded-md hover:bg-[#282828] transition-all cursor-pointer"
        >
          <Image
            src={"/sem-musica.png"}
            alt={"Foto perfil"}
            width={132}
            height={40}
            className="mr-1"
          />
          <h3 className="font-semibold text-sm truncate">{track.title}</h3>
          <p className="text-gray-400 text-xs mt-1 truncate">
            {formatDuration(track.durationInSeconds)}
          </p>
          <p className="text-gray-400 text-xs mt-1 truncate">
            {track.band.name}
          </p>
        </div>
      ))}
    </div>
  );
}
