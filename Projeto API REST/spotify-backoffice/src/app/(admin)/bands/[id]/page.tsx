"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ id: string }>();
  return <h1>Bandas ID {params.id}</h1>;
}
