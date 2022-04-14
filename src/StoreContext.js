import React, { createContext, useState, useTransition } from "react";
import { fetchData } from "./fakeApi";

export const StoreContext = createContext();

function StoreProvider({ children }) {
  const initialResource = fetchData(1);
  const [resource, setResource] = useState(initialResource);
  const [selectedCityId, setSelectedCityId] = useState();
  const [isPending, startTransition] = useTransition();

  const contextValue = {
    resource,
    setResource,
    selectedCityId,
    setSelectedCityId,
    isPending,
    startTransition,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreProvider };
