// setup data layer
// we need this to track the Cart
import React, { createContext, useContext, useReducer } from "react";

// Prepares the DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER (wrap our data and provide the Data Layer)
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// THIS IS HOW WE USE INSIDE A COMPONENT(pull information from the data layer)
export const useStateValue = () => useContext(StateContext);