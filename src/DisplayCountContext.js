import React, { createContext, useState } from "react";

export const DisplayCountContext = createContext();

function DisplayCountProvider({ children, initialDisplayCount }) {
  const [showCityDetails, setShowCityDetails] = useState(true);
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const contextValue = {
    displayCount,
    setDisplayCount,
    showCityDetails,
    setShowCityDetails,
  };
  
  return (
    <DisplayCountContext.Provider value={contextValue}>
      {children}
    </DisplayCountContext.Provider>
  );
}

export { DisplayCountProvider };
