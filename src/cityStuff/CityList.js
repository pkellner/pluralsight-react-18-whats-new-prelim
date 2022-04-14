import { Suspense, useContext, useState, useTransition } from "react";

import { StoreContext } from "../StoreContext";
import { fetchData } from "../fakeApi";

export default function CityList({ children }) {
  const { resource, setResource, setSelectedCityId, startTransition } =
    useContext(StoreContext);
  const cities = resource.cities.read();

  return (
    <>
      <div className="col-3">
        {cities.map((city) => {
          return (
            <div key={city.id}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("click event: fired");
                  setResource(fetchData(city.id));
                }}
              >
                {city.city}
              </button>
            </div>
          );
        })}
      </div>
      <div className="col-9">{children}</div>
    </>
  );
}

// const selectedCityIdLocal = city.id
//   ? selectedCityId
//   : cities && !selectedCityId
//     ? cities[0].id
//     : undefined;
//

// startTransition(() => {
//   setSelectedCityId(city.id);
// });
