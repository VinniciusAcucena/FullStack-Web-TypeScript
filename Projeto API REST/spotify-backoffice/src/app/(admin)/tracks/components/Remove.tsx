import Button from "@/app/components/Button";
import { TrackPatchSchema } from "@/app/schemas/track.schema";
import { Dispatch, SetStateAction } from "react";
import z from "zod";
import { Track } from "../../../../../generated/prisma";
import toast from "react-hot-toast";

interface Props {
  track: Track;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSuccess: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

type TrackFormData = z.infer<typeof TrackPatchSchema>;

export default function Remove({
  track,
  setIsOpen,
  onSuccess,
  setCurrentPage,
}: Props) {
  const handleRemove = async () => {
    const body = JSON.stringify({
      id: track.id,
    });

    const response = await fetch(`http://localhost:3001/api/track`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (response.status === 200) {
      toast.success("Música removida com sucesso!");
      onSuccess();
      setCurrentPage(1);
      setIsOpen(false);
    } else if (response.status === 400) {
      toast.error("Música não encontrada");
    } else {
      throw new Error("Erro ao remover música");
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
          Confirmar remoção da música
        </h2>
        <p>Música: {track.title}</p>
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
