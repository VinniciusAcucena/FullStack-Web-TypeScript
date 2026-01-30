import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const items = await prisma.track.findMany();
  return Response.json(items);
}

export async function POST(request: Request) {
  const bodyText = await request.text();
  const params = new URLSearchParams(bodyText);
  const title = params.get("title");
  const slug = params.get("slug");
  const durationInSeconds = params.get("durationInSeconds");
  const status = params.get("status");
  console.log(params);
  return Response.json({
    msg: "Dados recebidos",
    data: { title, slug, durationInSeconds, status },
  });
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
