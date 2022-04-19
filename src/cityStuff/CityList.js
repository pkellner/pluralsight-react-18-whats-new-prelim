import { Fragment, useContext } from "react";

import { CityListStoreContext } from "../CityListStoreContext";
import {
  CityDetailStoreContext,
  CityDetailStoreProvider,
} from "../CityDetailStoreContext";

function CityButton({ city }) {
  const { setCityId } = useContext(CityDetailStoreContext);
  return (
    <button
      className="list-group-item list-group-item-action"
      onClick={(e) => {
        e.preventDefault();
        setCityId(city.id);
      }}
    >
      {city.city}
    </button>
  );
}

export default function CityList({ children }) {
  const { getCities, isPending } = useContext(CityListStoreContext);
  const cities = getCities();
  
  return (
    <CityDetailStoreProvider initialCityId={cities[0].id}>
      <div className="col-3">
        <ul className="list-group city--list">
          <li className="list-group-item city--header">
            City list {isPending ? "updating..." : ""}
          </li>
          {cities.map((city) => {
            return (
              <Fragment key={city.id}>
                <CityButton city={city} />
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="col-9">
        <div className="city--details">
          <div className="list-group-item  city--header">
            City details
          </div>
          {children}
        </div>
      </div>
    </CityDetailStoreProvider>
  );
}
