import { fetchBands } from "../actions/fetchItems";

interface Props {
  limit?: number;
  isRandom: boolean;
}

interface Band {
  name: string;
  description: string;
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
          <h3 className="font-semibold text-sm truncate">{band.name}</h3>
          <p className="text-gray-400 text-xs mt-1">
            {band.description ? band.description : "*Sem descrição*"}
          </p>
        </div>
      ))}
    </div>
  );
}
