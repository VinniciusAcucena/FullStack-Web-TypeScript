export async function fetchTracks(isRandom: boolean, limit?: number) {
  const response = await fetch("http://host.docker.internal:3001/api/track");
  const data = await response.json();
  //console.log("RESPOSTA COMPLETA:", JSON.stringify(data, null, 2));
  if (isRandom) {
    const shuffled = data.sort(() => Math.random() - 0.5);

    return shuffled.slice(0, limit);
  }
  return data;
}

export async function fetchBands(isRandom: boolean, limit?: number) {
  const response = await fetch("http://host.docker.internal:3001/api/band");
  const data = await response.json();
  //console.log("RESPOSTA COMPLETA:", JSON.stringify(data, null, 2));
  if (isRandom) {
    const shuffled = data.bands.sort(() => Math.random() - 0.5);

    return shuffled.slice(0, limit);
  }
  console.log(data);
  return data.bands;
}

export async function findBandById(id: string) {
  const response = await fetch(
    `http://host.docker.internal:3001/api/band/${id}`,
  );
  const data = await response.json();
  console.log("RESPOSTA COMPLETA:", JSON.stringify(data, null, 2));
  return data;
}
