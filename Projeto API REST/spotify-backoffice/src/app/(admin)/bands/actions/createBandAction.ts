"use server";

import { BandSchema } from "@/app/schemas/band.schema";
import { treeifyError } from "zod/v4/core";
import prisma from "../../../../../lib/prisma";

export type CreateBandFormState = {
  status: "idle" | "loading" | "success" | "error";
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
      status: "error",
      ok: false,
      message: "verifique os campos",
      errors: treeErrors.properties,
    };
  }

  const bandExists = await prisma.band.findUnique({
    where: { name: validateData.data.name },
  });

  if (bandExists) {
    return {
      status: "error",
      ok: false,
      message: "Banda já cadastrada",
    };
  }

  await prisma.band.create({
    data: {
      name: validateData.data.name,
      slug: validateData.data.slug,
      description: validateData.data.description,
      status: validateData.data.status,
    },
  });

  return { status: "success", ok: true, message: "Banda criada com sucesso" };
}
