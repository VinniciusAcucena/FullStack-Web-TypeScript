import z from "zod";
import prisma from "../../../../lib/prisma";
import { TrackSchema } from "@/app/schemas/track.schema";
import { CustomError } from "@/app/utils/CustomError";

const TrackArraySchema = z.array(TrackSchema).min(1);

export async function GET(request: Request) {
  const items = await prisma.track.findMany();
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

export function PATCH(request: Request) {
  return Response.json({ msg: "API método PATCH funcionando!" });
}
