import Image from "next/image";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className="border border-blue-700">
      <Header></Header>
      <h1>Spotify backoffice</h1>
    </div>
  );
}
