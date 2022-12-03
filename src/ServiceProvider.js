import React, {createContext, useContext, useReducer} from "react";
export const DataLayerContext = createContext();
export const ServiceProvider = ({reducer,initialState,children}) => (<DataLayerContext.Provider value = {useReducer(reducer, initialState)}>
{children}
</DataLayerContext.Provider>);
export const useDataLayerValue = () => useContext(DataLayerContext);

