import Button from "@/app/components/Button";
import Loading from "@/app/components/Loading";
import { TrackPatchSchema } from "@/app/schemas/track.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import toast from "react-hot-toast";
import { Track } from "../../../../../generated/prisma";
import { UploadButton } from "../../../../../lib/uploadthing";

interface Props {
  track: Track;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSuccess: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

type TrackFormData = z.infer<typeof TrackPatchSchema>;

export default function Edit({
  track,
  setIsOpen,
  onSuccess,
  setCurrentPage,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<TrackFormData>({
    resolver: zodResolver(TrackPatchSchema),
    defaultValues: {
      id: track.id,
      status: "ACTIVE",
    },
  });
  const [imageUrl, setImageUrl] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string>("");

  const onSubmit = async (data: TrackFormData) => {
    console.log("submit chamado");
    const payload = {
      ...data,
      imageUrl,
      audioUrl,
    };
    const handJSON = JSON.stringify(payload);
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3001/api/track", {
        method: "PATCH",
        body: handJSON,
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success("Música atualizada com sucesso!");
        onSuccess();
        setCurrentPage(1);
        setIsOpen(false);
      } else if (response.status === 404) {
        toast.error("Música não encontrada");
      } else {
        throw new Error("Erro ao atualizar música");
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
    if (track) {
      reset({
        id: track.id,
        title: track.title,
        slug: track.slug,
        durationInSeconds: track.durationInSeconds,
        status: track.status,
      });
      setImageUrl(track.imageUrl ?? "");
      setAudioUrl(track.audioUrl ?? "");
    }
  }, [track, reset]);
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-8 text-gray-500 hover:text-gray-800 text-4xl font-bold hover:cursor-pointer"
          arial-label="fechar"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Atualizar música
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <input {...register("id")} type="hidden" />
          <div>
            <span className="font-semibold text-sm">Nome:</span>
            <input
              {...register("title")}
              type="text"
              placeholder="Nome da música"
              className="w-full p-2 border rounded"
            />
            {formState?.errors?.title && (
              <p className="text-red-500 text-sm mt-1">
                {formState.errors.title.message}
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
            <span className="font-semibold text-sm">Capa da música:</span>
            <UploadButton
              endpoint="trackImage"
              appearance={{
                button:
                  "w-full border-2 border-dashed border-gray-300 rounded-lg p-6 h-20 !text-gray-800 bg-gray-50 font-semibold hover:bg-gray-100",
              }}
              content={{
                button: "Alterar capa da musica",
              }}
              onClientUploadComplete={(res) => {
                console.log("Imagem enviada:", res);
                setImageUrl(res[0].ufsUrl);
                toast.success("Capa da música enviada com sucesso");
              }}
              onUploadError={(err) => {
                console.error("Erro ao fazer upload da imagem:", err);
              }}
            />
            {imageUrl && (
              <div className="flex justify-center mt-2">
                <img
                  src={imageUrl ?? "sem-imagem.png"}
                  alt="preview"
                  className="mt-2 w-32 h-32 object-cover rounded"
                />
              </div>
            )}
          </div>
          <div>
            <span className="font-semibold text-sm">Duração em segundos:</span>
            <input
              type="number"
              {...register("durationInSeconds", { valueAsNumber: true })}
              placeholder="200"
              className="w-full p-2 border rounded"
            />
            {formState?.errors?.durationInSeconds && (
              <p className="text-red-500 text-sm mt-1">
                {formState.errors.durationInSeconds.message}
              </p>
            )}
          </div>
          <div>
            <span className="font-semibold text-sm">Áudio da música:</span>
            <UploadButton
              endpoint="trackAudio"
              appearance={{
                button:
                  "w-full border-2 border-dashed border-gray-300 rounded-lg p-6 h-20 bg-gray-50 !text-gray-800 font-semibold hover:bg-gray-100",
                allowedContent: "text-xs text-gray-800",
              }}
              content={{
                button: "Alterar áudio da musica",
                allowedContent: "MP3 ou WAV",
              }}
              onClientUploadComplete={(res) => {
                console.log("Áudio enviado:", res);
                setAudioUrl(res[0].ufsUrl);
                toast.success("Aúdio enviado com sucesso");
              }}
            />
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
