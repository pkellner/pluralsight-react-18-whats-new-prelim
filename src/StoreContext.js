import React, { createContext, useState } from "react";
import { fetchData } from "./fakeApi";

export const StoreContext = createContext();

function StoreProvider({ children }) {
  const initialResource = fetchData(1);
  const [resource, setResource] = useState(initialResource);

  return (
    <StoreContext.Provider value={{ resource, setResource }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreProvider };
