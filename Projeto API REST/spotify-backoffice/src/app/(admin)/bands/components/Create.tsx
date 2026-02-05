import Button from "@/app/components/Button";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Create({ setIsOpen }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-8 text-gray-500 hover:text-gray-800 text-4xl font-bold hover:cursor-pointer"
          arial-label="fechar"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Cadastrar banda
        </h2>
        <form className="flex flex-col gap-2">
          <div>
            <span className="font-semibold text-sm">Nome:</span>
            <input
              type="text"
              placeholder="Nome da banda"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <span className="font-semibold text-sm">Slug:</span>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <span className="font-semibold text-sm">Descrição:</span>
            <textarea
              placeholder="Descrição da banda"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex justify-end">
            <Button>Salvar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
