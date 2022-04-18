import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchCityListData } from "./dataApi/fetchCityListData";
import { DisplayCountContext } from "./DisplayCountContext";

export const CityListStoreContext = createContext();

function CityListStoreProvider({ children }) {
  const { displayCount } = useContext(DisplayCountContext);
  const initialResource = fetchCityListData(displayCount);
  const [resourceCityList, setResourceCityList] = useState(initialResource);

  useEffect(() => {
    setResourceCityList(fetchCityListData(displayCount));
  }, [displayCount]);

  const getCities = resourceCityList.cities.read;

  const contextValue = {
    getCities,
  };

  return (
    <CityListStoreContext.Provider value={contextValue}>
      {children}
    </CityListStoreContext.Provider>
  );
}

export { CityListStoreProvider };
