import { useContext, Suspense, SuspenseList } from "react";
import { CityDetailStoreContext } from "../CityDetailStoreContext";

function CityInfo() {
  const { resourceCityDetail } = useContext(CityDetailStoreContext);
  const city = resourceCityDetail.cityInfo.read();
  return (
    <div className="border border-primary" >
      name: {city[0].name}<br/>
      state: {city[0].state}
    </div>
  )
  //return <div>{JSON.stringify(city)}</div>;
}

function CityStats() {
  const { resourceCityDetail } = useContext(CityDetailStoreContext);
  const city = resourceCityDetail.cityStats.read();
  return (
    <div className="border border-primary" >
      City: {city[0].population}
      <br />
      Growth Since 2001: {city[0].growth}
    </div>
  );
}

function CityLocation() {
  const { resourceCityDetail } = useContext(CityDetailStoreContext);
  const city = resourceCityDetail.cityLocation.read();
  return (
    <div className="border border-primary" >
      latitude: {city[0].latitude}<br/>
      longitude: {city[0].longitude}
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
