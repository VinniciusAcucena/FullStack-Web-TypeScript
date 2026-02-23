import Header from "../components/header";
import TracksList from "../components/tracksList";

export default function TracksPage() {
  return (
    <div>
      <Header></Header>
      <section className="mb-8">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Todas as músicas</h2>
        </div>
        <TracksList isRandom={false} />*
      </section>
    </div>
  );
}
