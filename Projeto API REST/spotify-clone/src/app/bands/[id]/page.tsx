import { findBandById } from "@/app/actions/fetchItems";

export default async function BandPage({ params }: { params: { id: string } }) {
  const band = await findBandById(params.id);

  return (
    <div>
      {band ? (
        <div>
          <h1>Bandas ID {params.id}</h1>
          <p>{band.name}</p>
          <p>{band.description}</p>{" "}
        </div>
      ) : (
        <p>Banda não encontrada</p>
      )}
    </div>
  );
}
