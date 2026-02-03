import { BandArraySchema } from "@/app/schemas/band.schema";
import z from "zod";
import prisma from "../../../../../lib/prisma";
import { PrismaClientInitializationError } from "../../../../../generated/prisma/runtime/library";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (Array.isArray(data)) {
      const validateData = BandArraySchema.parse(data);

      const insertedItem = await prisma.band.createMany({
        data: validateData,
      });

      return Response.json({
        msg: "JSON de várias bandas recebido",
        insertedItem,
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

    if (error instanceof PrismaClientInitializationError) {
      return Response.json(
        { msg: "erro de inicialização do banco de dados" },
        { status: 500 },
      );
    }

    if (error instanceof Error) {
      return Response.json(
        { msg: "erro interno de servidor" },
        { status: 500 },
      );
    }

    console.error("Erro desconhecido:", error);
    return Response.json({ msg: "Erro desconhecido" }, { status: 500 });
  }
}
