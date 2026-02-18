"use server";

import { BandSchema } from "@/app/schemas/band.schema";
import { treeifyError } from "zod/v4/core";

export type CreateBandFormState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, { errors: string[] }> | undefined;
};

export async function createBandAction(
  _prevState: CreateBandFormState,
  formData: FormData,
): Promise<CreateBandFormState> {
  const data = {
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description") || "",
  };

  const validateData = BandSchema.safeParse(data);

  if (!validateData.success) {
    const treeErrors = treeifyError(validateData.error);
    console.log(treeErrors.properties);
    return {
      ok: false,
      message: "verifique os campos",
      errors: treeErrors.properties,
    };
  }

  return { ok: true, message: "Banda criada com sucesso" };
}
