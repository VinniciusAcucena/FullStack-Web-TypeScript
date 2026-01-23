interface Props {
  params: {
    trackId: string;
  };
  searchParams: {
    mode: string;
    showTitle: string;
  };
}

export default async function Page({ params, searchParams }: Props) {
  const p = await params;
  const trackId = p.trackId;
  const sP = await searchParams;
  const mode = sP.mode;
  const showTitle = sP.showTitle;
  return (
    <div>
      <h1>Música ID {trackId}</h1>
      <h1>Mode {sP.mode}</h1>
      <h1>Title {sP.showTitle}</h1>
    </div>
  );
}
