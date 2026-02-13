import Button from "@/app/components/Button";
import { BandPatchSchema, BandSchema } from "@/app/schemas/band.schema";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import z, { set } from "zod";
import { Band } from "../../../../../generated/prisma";
import toast from "react-hot-toast";

interface Props {
  band: Band;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSuccess: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

type BandFormData = z.infer<typeof BandPatchSchema>;

export default function Remove({
  band,
  setIsOpen,
  onSuccess,
  setCurrentPage,
}: Props) {
  const handleRemove = async () => {
    const body = JSON.stringify({
      id: band.id,
    });

    const response = await fetch(`http://localhost:3001/api/band`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (response.status === 200) {
      toast.success("Banda removida com sucesso!");
      onSuccess();
      setCurrentPage(1);
      setIsOpen(false);
    } else if (response.status === 400) {
      toast.error("Banda não encontrada");
    } else {
      throw new Error("Erro ao remover banda");
    }
  };

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
        <Button
          className="flex w-30 justify-center mt-6"
          onClick={() => handleRemove()}
        >
          Remover
        </Button>
      </div>
    </div>
  );
}
