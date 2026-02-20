export async function fetchTracks() {
  const response = await fetch("http://host.docker.internal:3001/api/track");
  const data = await response.json();
  console.log(data);
  return data;
}

export async function fetchBands() {
  const response = await fetch("http://host.docker.internal:3001/api/band");
  const data = await response.json();
  console.log(data);
  return data.bands;
}
