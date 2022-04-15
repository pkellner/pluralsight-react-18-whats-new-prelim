import { useContext, Suspense } from "react";
import { CityDetailStoreContext } from "../CityDetailStoreContext";

function CityInfo() {
  const { resourceCityDetail } = useContext(CityDetailStoreContext);
  const city = resourceCityDetail.cityInfo.read();
  return (
    <Suspense fallback={<div>Loading CityInfo...</div>}>
      <div>{JSON.stringify(city)}</div>
    </Suspense>
  );
}

function CityStats() {
  const { resourceCityDetail } = useContext(CityDetailStoreContext);
  const city = resourceCityDetail.cityStats.read();
  return (
    <Suspense fallback={<div>Loading CityStats...</div>}>
      <div>{JSON.stringify(city)}</div>
    </Suspense>
  );
}

function CityLocation() {
  const { resourceCityDetail } = useContext(CityDetailStoreContext);
  const city = resourceCityDetail.cityLocation.read();
  return (
    <Suspense fallback={<div>Loading CityLocation...</div>}>
      <div>{JSON.stringify(city)}</div>
    </Suspense>
  );
}

export default function CityDetail() {
  return (
    <div className="grid">
      <div className="row">
        <CityInfo />
      </div>
      <div className="row">
        <CityStats />
      </div>
      <div className="row">
        <CityLocation />
      </div>
    </div>
  );
}
