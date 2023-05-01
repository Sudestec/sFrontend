import { createContext, useContext } from 'solid-js';

export const SpareContext = createContext();

export function SpareProvider(props) {
  const sparesData = {
  
  };
  return (

    <SpareContext.Provider value={sparesData}>
      {props.children}
    </SpareContext.Provider>
  );}

export function useSpare() { return useContext(SpareContext); }