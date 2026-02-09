import Button from "@/app/components/Button";
import Loading from "@/app/components/Loading";
import { BandSchema } from "@/app/schemas/band.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import z, { set } from "zod";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

type BandFormData = z.infer<typeof BandSchema>;

export default function Create({ setIsOpen }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<BandFormData>({
    resolver: zodResolver(BandSchema),
    defaultValues: { status: "ACTIVE" },
  });

  const onSubmit = async (data: BandFormData) => {
    const handJSON = JSON.stringify(data);
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3001/api/band", {
        method: "POST",
        body: handJSON,
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setTimeout(() => {
        (setIsLoading(false), 2000);
      });
    } catch (e: unknown) {
      console.error(e);
    }
  };
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
