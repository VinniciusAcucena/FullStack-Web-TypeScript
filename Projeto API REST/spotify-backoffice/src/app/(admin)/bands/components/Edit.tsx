import Button from "@/app/components/Button";
import Loading from "@/app/components/Loading";
import { BandPatchSchema, BandSchema } from "@/app/schemas/band.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z, { set } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { Band } from "../../../../../generated/prisma";

interface Props {
  band: Band;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSuccess: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

type BandFormData = z.infer<typeof BandPatchSchema>;

export default function Edit({
  band,
  setIsOpen,
  onSuccess,
  setCurrentPage,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<BandFormData>({
    resolver: zodResolver(BandPatchSchema),
    defaultValues: {
      id: band.id,
      status: "ACTIVE",
    },
  });

  const onSubmit = async (data: BandFormData) => {
    const handJSON = JSON.stringify(data);
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3001/api/band", {
        method: "PATCH",
        body: handJSON,
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success("Banda atualizada com sucesso!");
        onSuccess();
        setCurrentPage(1);
        setIsOpen(false);
      } else if (response.status === 404) {
        toast.error("Banda não encontrada");
      } else {
        throw new Error("Erro ao atualizar banda");
      }
    } catch (e: unknown) {
      console.error(e);

      if (e instanceof Error) {
        toast.error(e.message);
      }
    } finally {
      setTimeout(() => {
        (setIsLoading(false), 2000);
      });
    }
  };

  useEffect(() => {
    if (band) {
      reset({
        name: band.name,
        slug: band.slug,
        description: band.description || undefined,
        status: band.status,
      });
    }
  }, [band, reset]);
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
          Atualizar banda
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <input {...register("id")} type="hidden" />
          <div>
            <span className="font-semibold text-sm">Nome:</span>
            <input
              {...register("name")}
              type="text"
              placeholder="Nome da banda"
              className="w-full p-2 border rounded"
            />
            {formState?.errors?.name && (
              <p className="text-red-500 text-sm mt-1">
                {formState.errors.name.message}
              </p>
            )}
          </div>
          <div>
            <span className="font-semibold text-sm">Slug:</span>
            <input
              {...register("slug")}
              type="text"
              placeholder="nome-da-banda"
              className="w-full p-2 border rounded"
            />
            {formState?.errors?.slug && (
              <p className="text-red-500 text-sm mt-1">
                {formState.errors.slug.message}
              </p>
            )}
          </div>
          <div>
            <span className="font-semibold text-sm">Descrição:</span>
            <textarea
              {...register("description")}
              placeholder="Descrição da banda"
              className="w-full p-2 border rounded"
            />
            {formState?.errors?.description && (
              <p className="text-red-500 text-sm mt-1">
                {formState.errors.description.message}
              </p>
            )}
          </div>
          <div>
            <span className="font-semibold text-sm">Status:</span>
            <select
              {...register("status")}
              className="w-full p-2 border rounded"
            >
              <option value="ACTIVE">Ativo</option>
              <option value="INACTIVE">Inativo</option>
            </select>
            {formState?.errors?.status && (
              <p className="text-red-500 text-sm mt-1">
                {formState.errors.status.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              disabled={isLoading}
              className="flex w-[120px]justify-center"
            >
              {isLoading ? (
                <Loading width={20} height={20} showText={false} />
              ) : (
                "Salvar"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
