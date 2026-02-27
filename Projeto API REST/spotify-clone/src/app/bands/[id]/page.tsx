import { findBandById } from "@/app/actions/fetchItems";

export default async function BandPage({ params }: { params: { id: string } }) {
  const band = await findBandById(params.id);
  console.log(band);
  return (
    <div>
      {band ? (
        <div>
          <h1>Bandas ID {band.id}</h1>
          <p>{band.name}</p>
          <p>{band.description}</p>{" "}
          {band.tracks.map((track: any) => (
            <div key={track.id}>
              <p>{track.title}</p>
              <p>{track.durationInSeconds}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Banda não encontrada</p>
      )}
    </div>
  );
}
