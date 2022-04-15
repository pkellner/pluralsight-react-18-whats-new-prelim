import React, { createContext, useState, useTransition } from "react";
import {fetchCityDetailData} from "./fakeApi/fetchCityDetailData";

export const CityDetailStoreContext = createContext();

function CityDetailStoreProvider({ children }) {
  const [resourceCityDetail, setResourceCityDetail] = useState(fetchCityDetailData(1));
  const [selectedCityId, setSelectedCityId] = useState();
  const [isPending, startTransition] = useTransition();
  
  const setCityId = (cityId) => {
    setResourceCityDetail(fetchCityDetailData(cityId));
  }

  const contextValue = {
    setCityId,
    resourceCityDetail,
    setResourceCityDetail,
    selectedCityId,
    setSelectedCityId,
    isPending,
    startTransition,
  };

  return (
    <CityDetailStoreContext.Provider value={contextValue}>
      {children}
    </CityDetailStoreContext.Provider>
  );
}

export { CityDetailStoreProvider };