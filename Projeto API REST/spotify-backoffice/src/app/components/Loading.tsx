import Image from "next/image";
interface Props {
  width?: number;
  height?: number;
  showText?: boolean;
}
export default function Loading({
  width = 40,
  height = 40,
  showText = true,
}: Props) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/loading.svg"
        alt="Loading"
        width={width}
        height={height}
      ></Image>
      {showText && "Carregando..."}
    </div>
  );
}
