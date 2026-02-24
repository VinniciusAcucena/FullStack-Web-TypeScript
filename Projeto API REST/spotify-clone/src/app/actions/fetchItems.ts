export async function fetchTracks(isRandom: boolean, limit?: number) {
  const response = await fetch(
    "https://projeto-api-rest-production-00e6.up.railway.app/api/track",
  );
  //const response = await fetch("http://host.docker.internal:3001/api/track");
  const data = await response.json();
  if (isRandom) {
    const shuffled = data.sort(() => Math.random() - 0.5);
    console.log(data);
    return shuffled.slice(0, limit);
  }
  return data;
}

export async function fetchBands(isRandom: boolean, limit?: number) {
  const response = await fetch(
    "https://projeto-api-rest-production-00e6.up.railway.app/api/band",
  );
  //const response = await fetch("http://host.docker.internal:3001/api/band");
  const data = await response.json();
  if (isRandom) {
    const shuffled = data.bands.sort(() => Math.random() - 0.5);
    console.log(data);
    return shuffled.slice(0, limit);
  }
  console.log(data);
  return data.bands;
}
