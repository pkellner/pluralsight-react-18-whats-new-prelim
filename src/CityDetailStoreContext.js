import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchCityDetailData } from "./dataApi/fetchCityDetailData";
import { CityListStoreContext } from "./CityListStoreContext";

export const CityDetailStoreContext = createContext();

function CityDetailStoreProvider({ children, initialCityId }) {
  const [resourceCityDetail, setResourceCityDetail] = useState(
    fetchCityDetailData(initialCityId)
  );


  const { getCities } = useContext(CityListStoreContext);
  const cities = getCities();

  useEffect(() => {
    setResourceCityDetail(fetchCityDetailData(cities[0].id));
  }, [cities]);

  const setCityId = (cityId) => {
    setResourceCityDetail(fetchCityDetailData(cityId));
  };

  const getCityInfo = resourceCityDetail.cityInfo.read;
  const getCityStats = resourceCityDetail.cityStats.read;
  const getCityLocation = resourceCityDetail.cityLocation.read;

  const contextValue = {
    setCityId,
    getCityInfo,
    getCityStats,
    getCityLocation,
   
  };

  return (
    <CityDetailStoreContext.Provider value={contextValue}>
      {children}
    </CityDetailStoreContext.Provider>
  );
}

export { CityDetailStoreProvider };
