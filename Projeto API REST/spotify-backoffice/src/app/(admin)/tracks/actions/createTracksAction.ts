"use server";

import { TrackSchema } from "@/app/schemas/track.schema";
import { treeifyError } from "zod/v4/core";
import prisma from "../../../../../lib/prisma";
import { string } from "zod";

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
  console.log("imageUrl: ", formData.get("imageUrl"));
  console.log("audioUrl: ", formData.get("audioUrl"));

  const data = {
    title: String(formData.get("title")),
    slug: String(formData.get("slug")),
    durationInSeconds: Number(formData.get("durationInSeconds")),
    imageUrl: String(formData.get("imageUrl")),
    audioUrl: String(formData.get("audioUrl")),
    bandId: String(formData.get("bandId")),
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
    where: { slug: validateData.data.slug },
  });

  const bandExists = await prisma.band.findUnique({
    where: { id: validateData.data.bandId },
  });

  if (trackExists) {
    return {
      status: "error",
      ok: false,
      message: "música já cadastrada",
    };
  }

  if (bandExists) {
    await prisma.track.create({
      data: {
        title: validateData.data.title,
        slug: validateData.data.slug,
        durationInSeconds: validateData.data.durationInSeconds ?? 0,
        status: validateData.data.status,
        imageUrl: validateData.data.imageUrl,
        audioUrl: validateData.data.audioUrl,
        band: {
          connect: { id: validateData.data.bandId },
        },
      },
    });
  } else {
    return {
      status: "error",
      ok: false,
      message: "Banda digitada não existente",
    };
  }

  return { status: "success", ok: true, message: "Música criada com sucesso" };
}
