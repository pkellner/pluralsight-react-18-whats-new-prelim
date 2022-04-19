import React, { createContext, useReducer, useState } from "react";


export const DisplayCountContext = createContext();

function DisplayCountProvider({ children, initialDisplayCount }) {
  // const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  //
  // const contextValue = {
  //   displayCount,
  //   setDisplayCount,
  // };

  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case "setDisplayCount":
        newState = { ...state, displayCount: action.payload };
        break;
      default:
        throw new Error();
    }
    return newState;
  }

  const [showCityDetails, setShowCityDetails] = useState(true);

  const [state, dispatch] = useReducer(reducer, {
    displayCount: initialDisplayCount,
  });

  const setDisplayCount = (val) => {
    dispatch({ type: "setDisplayCount", payload: val });
  };

  const contextValue = {
    displayCount: state.displayCount,
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
