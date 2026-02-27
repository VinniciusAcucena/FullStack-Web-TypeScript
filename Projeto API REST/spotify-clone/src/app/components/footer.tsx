import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-500 p-3 flex justify-between items-center ">
      <div>
        <p className="text-xs font-bold">Testar o Premium de graça</p>
        <p className="text-xs">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <Button className="bg-white text-black hover:bg-gray-200 rounded-full text-sm font-bold whitespace-nowrap">
        Inscreva-se grátis
      </Button>
    </div>
  );
}
