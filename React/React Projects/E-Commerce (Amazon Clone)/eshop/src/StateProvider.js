import React, { createContext, useContext, useReducer } from "react";

// Prepare the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer with our data
export const StateProvider = ({ reducer, initialState, children }) => (
  // value = []
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
