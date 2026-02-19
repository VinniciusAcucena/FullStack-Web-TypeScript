import Button from "@/app/components/Button";
import Loading from "@/app/components/Loading";
import {
  Dispatch,
  SetStateAction,
  useActionState,
  useEffect,
  useState,
} from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  createTrackAction,
  CreateTrackFormState,
} from "../actions/createTracksAction";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSuccess: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const INITIAL_STATE: CreateTrackFormState = { status: "idle", ok: false };

export default function Create({
  setIsOpen,
  onSuccess,
  setCurrentPage,
}: Props) {
  const [isLoading] = useState(false);
  const [state, formAction] = useActionState(createTrackAction, INITIAL_STATE);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(
        state.message ? state.message : "Música criada com sucesso",
      );
      onSuccess();
      setCurrentPage(1);
      setIsOpen(false);
    } else if (state.status === "error") {
      toast.error(state.message ? state.message : "Erro ao adicionar Música");
    }
  }, [state]);

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
          Cadastrar música
        </h2>
        <form action={formAction} className="flex flex-col gap-2">
          <div>
            <span className="font-semibold text-sm">Nome:</span>
            <input
              name="title"
              type="text"
              placeholder="Nome da música"
              className="w-full p-2 border rounded"
            />
            {state?.errors?.title && (
              <p className="text-red-500 text-sm">
                {state.errors.title.errors.join(",")}
              </p>
            )}
          </div>
          <div>
            <span className="font-semibold text-sm">Slug:</span>
            <input
              name="slug"
              type="text"
              placeholder="nome-da-musica"
              className="w-full p-2 border rounded"
            />
            {state?.errors?.slug && (
              <p className="text-red-500 text-sm">
                {state.errors.slug.errors.join(",")}
              </p>
            )}
          </div>
          <div>
            <span className="font-semibold text-sm">Duração em Segundos:</span>
            <input
              name="DurationInSecond"
              placeholder="180"
              type="number"
              className="w-full p-2 border rounded"
            />
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
