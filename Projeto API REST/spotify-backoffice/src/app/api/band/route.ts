import z from "zod";
import prisma from "../../../../lib/prisma";
import { BandSchema } from "@/app/schemas/band.schema";
import { PrismaClientInitializationError } from "../../../../generated/prisma/runtime/library";
import { CustomError } from "@/app/utils/CustomError";

export async function GET(request: Request) {
  const items = await prisma.band.findMany();
  return Response.json(items);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (typeof data === "object" && data !== null) {
      const validateData = BandSchema.parse(data);

      const bandExists = await prisma.band.findUnique({
        where: { name: validateData.name },
      });

      if (bandExists) {
        throw new CustomError("Banda já cadastrada", 409);
      }

      const insertedItem = await prisma.band.create({
        data: validateData,
      });

      return Response.json({
        msg: "JSON de uma banda recebido",
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

    if (error instanceof CustomError) {
      return Response.json(
        { error: error.message },
        { status: error.statusCode },
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

export function PUT(request: Request) {
  return Response.json({ msg: "API método PUT funcionando!" });
}

export function DELETE(request: Request) {
  return Response.json({ msg: "API método DELETE funcionando!" });
}

export function PATCH(request: Request) {
  return Response.json({ msg: "API método PATCH funcionando!" });
}

export function OPTIONS(request: Request) {
  return Response.json({ msg: "API método OPTIONS funcionando!" });
}

export function HEAD(request: Request) {
  return Response.json({ msg: "API método HEAD funcionando!" });
}
