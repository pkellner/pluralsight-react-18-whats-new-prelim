import { useContext } from "react";

import { CityListStoreContext } from "../CityListStoreContext";
import {
  CityDetailStoreContext,
  CityDetailStoreProvider,
} from "../CityDetailStoreContext";

function CityButton({ city }) {
  const { setCityId } = useContext(CityDetailStoreContext);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        console.log("click event: fired");
        setCityId(city.id);
      }}
    >
      {city.city}
    </button>
  );
}

export default function CityList({ children }) {
  const { resourceCityList } = useContext(CityListStoreContext);
  const cities = resourceCityList.cities.read();

  return (
    <CityDetailStoreProvider initialCityId={cities[0].id}>
      <div className="col-3">
        {cities.map((city) => {
          return (
            <div key={city.id}>
              <CityButton city={city} />
            </div>
          );
        })}
      </div>
      <div className="col-9">{children}</div>
    </CityDetailStoreProvider>
  );
}
