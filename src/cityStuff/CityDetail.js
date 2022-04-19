import { Suspense, useContext, useEffect } from "react";
import { CityDetailStoreContext } from "../CityDetailStoreContext";
import { CityListStoreContext } from "../CityListStoreContext";
import { DisplayCountContext } from "../DisplayCountContext";

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
        Population:{" "}
        <span className="badge">
          {parseInt(data.population).toLocaleString("en-US")}
        </span>
      </li>
      <li className="list-group-item city-meta">
        Growth since 2001: <span className="badge">{data.growth}</span>
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
        Latitude: <span className="badge">{data.latitude.toFixed(3)}</span>
      </li>
      <li className="list-group-item city-meta">
        Longitude: <span className="badge">{data.longitude.toFixed(3)}</span>
      </li>
    </ul>
  );
}

export default function CityDetail() {
  //const { displayCount, isPending } = useContext(DisplayCountContext);
  // console.log(
  //   `CityDetail: displayCount:${displayCount}   isPending:${
  //     isPending ? "true" : "false"
  //   }`
  // );

  const { isPending } = useContext(CityListStoreContext);

  const { showCityDetails, setShowCityDetails, displayCount } =
    useContext(DisplayCountContext);

  console.log(
    `CityDetail: showCityDetails: ${showCityDetails}   isPending: ${
      isPending ? "true" : "false"
    }`
  );

  useEffect(() => {
    console.log(`CityDetail: setShowCityDetails to true`);
    if (!isPending) {
      setShowCityDetails(true);
    }
  }, [displayCount]);

  return (
    showCityDetails === true && (
      <>
        <Suspense
          fallback={<div className="list-group-item city-meta">Loading...</div>}
        >
          <CityInfo />
        </Suspense>

        <Suspense
          fallback={<div className="list-group-item city-meta">Loading...</div>}
        >
          <CityStats />
        </Suspense>

        <Suspense
          fallback={<div className="list-group-item city-meta">Loading...</div>}
        >
          <CityLocation />
        </Suspense>
      </>
    )
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
