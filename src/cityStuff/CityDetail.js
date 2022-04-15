import { Suspense, useContext } from "react";
import { CityDetailStoreContext } from "../CityDetailStoreContext";

function CityInfo() {
  const { resourceCityDetail } = useContext(CityDetailStoreContext);
  const city = resourceCityDetail.cityInfo.read();
  return (
    <div className="border border-primary">
      name: {city.name}
      <br />
      state: {city.state}
    </div>
  );
  //return <div>{JSON.stringify(city)}</div>;
}

function CityStats() {
  const { resourceCityDetail } = useContext(CityDetailStoreContext);
  const city = resourceCityDetail.cityStats.read();
  return (
    <div className="border border-primary" >
      City: {city.population}
      <br />
      Growth Since 2001: {city.growth}
    </div>
  );
}

function CityLocation() {
  const { resourceCityDetail } = useContext(CityDetailStoreContext);
  const city = resourceCityDetail.cityLocation.read();
  return (
    <div className="border border-primary" >
      latitude: {city.latitude}<br/>
      longitude: {city.longitude}
    </div>
  )
  //return <div>{JSON.stringify(city)}</div>;
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
