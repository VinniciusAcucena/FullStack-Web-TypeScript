import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const items = await prisma.band.findMany();
  return Response.json(items);
}

export function POST(request: Request) {
  return Response.json({ msg: "API método POST funcionando!" });
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
