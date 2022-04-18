import { Suspense, useContext } from "react";
import { CityDetailStoreContext } from "../CityDetailStoreContext";

function CityInfo() {
  const { getCityInfo } = useContext(CityDetailStoreContext);
  const data = getCityInfo();
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item city-meta">
        Name: <span className="badge">{data.name}</span>
      </li>
      <li className="list-group-item city-meta">
        State: <span className="badge">{data.state}</span>
      </li>
    </ul>
  );
}

function CityStats() {
  const { getCityStats } = useContext(CityDetailStoreContext);
  const data = getCityStats();
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item city-meta">
        City: <span className="badge">{data.population}</span>
      </li>
      <li className="list-group-item city-meta">
        Growth Since 2001: <span className="badge">{data.growth}</span>
      </li>
    </ul>
  );
}

function CityLocation() {
  const { getCityLocation } = useContext(CityDetailStoreContext);
  const data = getCityLocation();
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item city-meta">
        Latitude: <span className="badge">{data.latitude}</span>
      </li>
      <li className="list-group-item city-meta">
        Longitude: <span className="badge">{data.longitude}</span>
      </li>
    </ul>
  );
}

export default function CityDetail() {
  return (
    <>
      <Suspense fallback={<div className="list-group-item">Loading...</div>}>
        <CityInfo />
      </Suspense>

      <Suspense fallback={<div className="list-group-item">Loading...</div>}>
        <CityStats />
      </Suspense>

      <Suspense fallback={<div className="list-group-item">Loading...</div>}>
        <CityLocation />
      </Suspense>
    </>
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
