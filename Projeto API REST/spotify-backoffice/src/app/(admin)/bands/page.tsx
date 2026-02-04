import ManageCSR from "./components/ManageCSR";

export default async function Page() {
  await new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(true), 3000);
  });
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Bandas</h1>
      <ManageCSR></ManageCSR>
    </div>
  );
}
