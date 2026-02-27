import { CustomError } from "@/app/utils/CustomError";
import prisma from "../../../../../lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const band = await prisma.band.findUnique({
      where: { id: params.id },
      include: { tracks: true },
    });
    if (!band) {
      throw new CustomError("Banda não encontrada", 404);
    }
    return Response.json(band);
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      return Response.json(
        { msg: error.message },
        { status: error.statusCode },
      );
    }
  }
}
