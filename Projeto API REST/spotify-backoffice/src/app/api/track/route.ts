import z from "zod";
import prisma from "../../../../lib/prisma";
import { TrackPatchSchema, TrackSchema } from "@/app/schemas/track.schema";
import { CustomError } from "@/app/utils/CustomError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const TrackArraySchema = z.array(TrackSchema).min(1);

export async function GET(request: Request) {
  const items = await prisma.track.findMany({
    include: {
      band: true,
    },
  });
  return Response.json(items);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (typeof data === "object" && data !== null) {
      const validateData = TrackSchema.parse(data);
      return Response.json({
        msg: "JSON de uma música recebido",
        validateData,
      });
    } else {
      return Response.json(
        { msg: "Formato de dados inválido" },
        { status: 400 },
      );
    }
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      console.error("Erro de sintaxe no JSON:", error.message);
      return Response.json({ msg: "Erro de sintaxe no JSON" }, { status: 400 });
    }

    if (error instanceof z.ZodError) {
      return Response.json(
        { msg: "Erro de validação", errors: error.issues },
        { status: 400 },
      );
    }

    console.error("Erro desconhecido:", error);
    return Response.json({ msg: "Erro desconhecido" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const data = await request.json();

    const id = data.id;

    if (id) {
      const deletedItem = await prisma.track.delete({
        where: { id: id },
      });
    } else {
      throw new CustomError("ID não informado", 400);
    }

    console.log("Dados recebidos para DELETE:", data);
    return Response.json({ msg: "Música removida" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      return Response.json(
        { msg: error.message },
        { status: error.statusCode },
      );
    }
    return Response.json({ msg: "Erro desconhecido" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const formData = await request.json();

    const data = {
      id: formData.id,
      title: formData.title,
      slug: formData.slug,
      durationInSeconds: formData.durationInSeconds,
      status: formData.status,
    };

    const validateData = TrackPatchSchema.parse(data);

    await prisma.track.update({
      where: { id: validateData.id },
      data: {
        title: validateData.title,
        slug: validateData.slug,
        durationInSeconds: validateData.durationInSeconds,
        status: validateData.status,
      },
    });
    return Response.json(
      { msg: "música atualizada atualizada" },
      { status: 200 },
    );
  } catch (error: unknown) {
    if (error instanceof PrismaClientKnownRequestError) {
      return Response.json({ msg: "música não encontrada" }, { status: 404 });
    }
    return Response.json({ msg: "Erro desconhecido" }, { status: 500 });
  }
}
