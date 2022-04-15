import { useContext } from "react";

import { CityListStoreContext } from "../CityListStoreContext";

export default function CityList({ children, displayCount }) {
  const { resourceCityList } = useContext(CityListStoreContext);
  const cities = resourceCityList.cities.read();

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
                  //setResource(fetchCityListData(city.id));
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
