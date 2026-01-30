import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.band.create({
    data: {
      name: "Twenty one Pilots",
      slug: "twenty-one-pilots",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Stressed Out",
            slug: "stressed-out",
            durationInSeconds: 202,
          },
          {
            title: "Heathens",
            slug: "heathens",
            durationInSeconds: 195,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
