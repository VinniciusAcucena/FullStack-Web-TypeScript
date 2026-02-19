"use server";

import prisma from "../../../../../lib/prisma";

export async function fetchTracksAction(page: number = 1, take: number = 10) {
  console.log("rolando no servidor");

  const skip: number = (page - 1) * take;

  const totalItems = await prisma.track.count();
  const items = await prisma.track.findMany({
    skip,
    take,
    orderBy: { createdAt: "asc" },
  });

  const totalPages = Math.ceil(totalItems / take);
  return {
    pagination: { currentPage: page, totalItems, totalPages },
    tracks: items,
  };
}
