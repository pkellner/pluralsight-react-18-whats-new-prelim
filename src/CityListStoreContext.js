import React, { createContext, useState, useTransition } from "react";
import { fetchCityListData } from "./fakeApi/fetchCityListData";

export const CityListStoreContext = createContext();

function CityListStoreProvider({ children, initialDisplayCount }) {
  const initialResource = fetchCityListData(initialDisplayCount);
  const [resourceCityList, setResourceCityList] = useState(initialResource);
  const [selectedCityId, setSelectedCityId] = useState();
  const [isPending, startTransition] = useTransition();
  
  const setDisplayCount = (displayCount) => {
    
    setResourceCityList(fetchCityListData(displayCount));
  }

  const contextValue = {
    setDisplayCount,
    resourceCityList,
    setResourceCityList,
    selectedCityId,
    setSelectedCityId,
    isPending,
    startTransition,
  };

  return (
    <CityListStoreContext.Provider value={contextValue}>
      {children}
    </CityListStoreContext.Provider>
  );
}

export { CityListStoreProvider };
