"use client";

import Button from "@/app/components/Button";

interface Props {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Algo deu errado</h2>
      <p className="text-xs"> {error.message}</p>
      <Button onClick={() => reset()} className="py-3 mt-3">
        Tentar novamente
      </Button>
    </div>
  );
}
