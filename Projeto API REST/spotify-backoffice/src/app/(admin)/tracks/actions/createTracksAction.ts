"use server";

import { TrackSchema } from "@/app/schemas/track.schema";
import { treeifyError } from "zod/v4/core";
import prisma from "../../../../../lib/prisma";

export type CreateTrackFormState = {
  status: "idle" | "loading" | "success" | "error";
  ok: boolean;
  message?: string;
  errors?: Record<string, { errors: string[] }> | undefined;
};

export async function createTrackAction(
  _prevState: CreateTrackFormState,
  formData: FormData,
): Promise<CreateTrackFormState> {
  const data = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    durationInSeconds: formData.get("durationInSeconds") || "",
  };

  const validateData = TrackSchema.safeParse(data);

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

  const trackExists = await prisma.track.findUnique({
    where: { title: validateData.data.title },
  });

  if (trackExists) {
    return {
      status: "error",
      ok: false,
      message: "Banda já cadastrada",
    };
  }

  await prisma.track.create({
    data: {
      title: validateData.data.title,
      slug: validateData.data.slug,
      durationInSeconds: validateData.data.durationInSeconds,
      status: validateData.data.status,
    },
  });

  return { status: "success", ok: true, message: "Música criada com sucesso" };
}
