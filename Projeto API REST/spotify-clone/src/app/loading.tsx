import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/loading.svg" alt="Loading" width={50} height={50}></Image>
      Carregando
    </div>
  );
}
