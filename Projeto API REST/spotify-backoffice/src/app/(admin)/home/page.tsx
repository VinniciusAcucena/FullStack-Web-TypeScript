import { Suspense } from "react";
import Indicator from "./componentes/Indicator";
import IndicatorSkeleton from "./componentes/IndicatorSkeleton";

export default async function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Home</h1>
      <div className="flex gap-8">
        <Suspense fallback={<IndicatorSkeleton />}>
          <Indicator type="bands"></Indicator>
        </Suspense>
        <Suspense fallback={<IndicatorSkeleton />}>
          <Indicator type="tracks"></Indicator>
        </Suspense>
      </div>
    </div>
  );
}
