"use server";

export async function fetchBandsAction(page: number = 1) {
  console.log("rolando no servidor");
  const response = await fetch(
    `http://localhost:3000/api/band?page=${page}&take=10`,
  );

  return response.json();
}
