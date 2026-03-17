import Link from "next/link";
import { fetchBands } from "../actions/fetchItems";
import Image from "next/image";

interface Props {
  limit?: number;
  isRandom: boolean;
}

interface Band {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
}

export default async function BandsList({ limit, isRandom }: Props) {
  const popularArtists: Band[] = await fetchBands(isRandom, limit);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
      {popularArtists.map((band, index) => (
        <div
          key={index}
          className="bg-[#181818] p-3 rounded-md hover:bg-[#282828] transition-all cursor-pointer"
        >
          <Link href={`/bands/${band.id}`}>
            <Image
              src={band.imageUrl ?? "/sem-perfil.png"}
              alt={"Foto perfil"}
              width={132}
              height={132}
              className="rounded-xl mx-auto"
            />
            <h3 className="font-semibold text-sm truncate">{band.name}</h3>
            <p className="text-gray-400 text-xs mt-1">
              {band.description ? band.description : "*Sem descrição*"}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
