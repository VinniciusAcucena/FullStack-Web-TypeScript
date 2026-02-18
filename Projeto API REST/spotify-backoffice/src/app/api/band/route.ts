import z from "zod";
import prisma from "../../../../lib/prisma";
import { BandPatchSchema, BandSchema } from "@/app/schemas/band.schema";
import { PrismaClientInitializationError } from "../../../../generated/prisma/runtime/library";
import { CustomError } from "@/app/utils/CustomError";
import { NextRequest } from "next/server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const { searchParams } = url;

  const currentPage: number = parseInt(searchParams.get("page") || "1");
  const take: number = parseInt(searchParams.get("take") || "10");
  const skip: number = (currentPage - 1) * take;

  const totalItems = await prisma.band.count();
  const items = await prisma.band.findMany({
    skip,
    take,
    orderBy: { createdAt: "asc" },
  });

  const totalPages = Math.ceil(totalItems / take);
  return Response.json({
    pagination: { currentPage, totalItems, totalPages },
    bands: items,
  });
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

      return Response.json(
        {
          msg: "JSON de uma banda recebido",
          insertedItem,
        },
        { status: 201 },
      );
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

export async function DELETE(request: Request) {
  try {
    const data = await request.json();

    const id = data.id;

    if (id) {
      const deletedItem = await prisma.band.delete({
        where: { id: id },
      });
    } else {
      throw new CustomError("ID não informado", 400);
    }

    console.log("Dados recebidos para DELETE:", data);
    return Response.json({ msg: "Banda removida" }, { status: 200 });
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
      name: formData.name,
      slug: formData.slug,
      description: formData.description,
      status: formData.status,
    };

    const validateData = BandPatchSchema.parse(data);

    await prisma.band.update({
      where: { id: validateData.id },
      data: {
        name: validateData.name,
        slug: validateData.slug,
        description: validateData.description,
        status: validateData.status,
      },
    });
    return Response.json({ msg: "Banda atualizada" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof PrismaClientKnownRequestError) {
      return Response.json({ msg: "Banda não encontrada" }, { status: 404 });
    }
    return Response.json({ msg: "Erro desconhecido" }, { status: 500 });
  }
}
