import React, { createContext, useState } from "react";
import { fetchCityListData } from "./fakeApi/fetchCityListData";

export const CityListStoreContext = createContext();

function CityListStoreProvider({ children, initialDisplayCount }) {
  const initialResource = fetchCityListData(initialDisplayCount);
  const [resourceCityList, setResourceCityList] = useState(initialResource);

  const setDisplayCount = (displayCount) => {
    setResourceCityList(fetchCityListData(displayCount));
  };

  const getCities = resourceCityList.cities.read;

  const contextValue = {
    setDisplayCount,
    getCities,
  };

  return (
    <CityListStoreContext.Provider value={contextValue}>
      {children}
    </CityListStoreContext.Provider>
  );
}

export { CityListStoreProvider };
