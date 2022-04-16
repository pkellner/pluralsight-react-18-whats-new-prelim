import { Suspense, useContext } from "react";
import { CityDetailStoreContext } from "../CityDetailStoreContext";

function CityInfo() {
  const { getCityInfo } = useContext(
    CityDetailStoreContext
  );
  const data = getCityInfo();
  return (
    <div className="border border-primary">
      name: {data.name}
      <br />
      state: {data.state}
    </div>
  );
}

function CityStats() {
  const {  getCityStats } = useContext(
    CityDetailStoreContext
  );
  const data = getCityStats();
  return (
    <div className="border border-primary">
      City: {data.population}
      <br />
      Growth Since 2001: {data.growth}
    </div>
  );
}

function CityLocation() {
  const { getCityLocation } = useContext(
    CityDetailStoreContext
  );
  const data = getCityLocation();
  return (
    <div className="border border-primary">
      latitude: {data.latitude}
      <br />
      longitude: {data.longitude}
    </div>
  );
}

export default function CityDetail() {
  return (
    <div className="grid">
      <div className="row">
        <Suspense fallback={<div>Loading CityInfo...</div>}>
          <CityInfo />
        </Suspense>
      </div>
      <div className="row">
        <Suspense fallback={<div>Loading CityStats...</div>}>
          <CityStats />
        </Suspense>
      </div>
      <div className="row">
        <Suspense fallback={<div>Loading CityLocation...</div>}>
          <CityLocation />
        </Suspense>
      </div>
    </div>
  );
}

/*
export default function CityDetail() {
  return (
    <SuspenseList revealOrder="forwards">
      <div className="grid">
        <div className="row">
          <Suspense fallback={<div>Loading CityInfo...</div>}>
            <CityInfo />
          </Suspense>
        </div>
        <div className="row">
          <Suspense fallback={<div>Loading CityStats...</div>}>
            <CityStats />
          </Suspense>
        </div>
        <div className="row">
          <Suspense fallback={<div>Loading CityLocation...</div>}>
            <CityLocation />
          </Suspense>
        </div>
      </div>
    </SuspenseList>
  );
}

 */
