import Button from "@/app/components/Button";
import { BandPatchSchema, BandSchema } from "@/app/schemas/band.schema";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import z, { set } from "zod";
import { Band } from "../../../../../generated/prisma";

interface Props {
  band: Band;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSuccess: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

type BandFormData = z.infer<typeof BandPatchSchema>;

export default function Remove({ band, setIsOpen }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-sm relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-8 text-gray-500 hover:text-gray-800 text-4xl font-bold hover:cursor-pointer"
          arial-label="fechar"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Confirmar remoção da banda
        </h2>
        <p>Banda: {band.name}</p>
        <p>A operação não poderá ser desfeita</p>
        <Button className="flex w-[120px]justify-center mt-6">Remover</Button>
      </div>
    </div>
  );
}
