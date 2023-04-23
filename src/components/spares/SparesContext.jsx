import { createStore } from 'solid-js/store';
import { createContext, useContext, onMount, createSignal, createEffect } from 'solid-js';

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