import Indicator from "./componentes/Indicator";

export default async function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Home</h1>
      <div className="flex gap-8">
        <Indicator type="bands"></Indicator>
        <Indicator type="tracks"></Indicator>
      </div>
    </div>
  );
}
