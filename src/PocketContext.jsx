import { createContext, useContext, createSignal, onMount, createEffect } from 'solid-js';
import { url } from './modules/pbConnection';
import refreshAuthorization from './modules/refreshAuthorization';
import adminLogIn from './modules/logIn';
import getLocalToken from './modules/getLocalToken';

export const PocketContext = createContext();

// login maneja states {1: 'refetch', 2: 'loading', 3: 'OK', 4: 'error'}

export function PocketProvider(props) {
  const [ login, setLogin ] = createSignal(),
    getAuthorization = async (username, password) => {
      setLogin(2);
      setLogin(await adminLogIn(url, username, password));
    },
    clearAuthorization = () => (localStorage.clear(),setLogin(1)),
    authData = [
      login,
      getAuthorization,
      clearAuthorization,
    ];

  onMount( () => {
    if (getLocalToken()) {
      setLogin(2);
      refreshAuthorization(url, getLocalToken()).then( e => setLogin(e));
    } else (setLogin(1));
  });
    
  return (
    <PocketContext.Provider value={authData}>
      {props.children}
    </PocketContext.Provider>
  );
}

export function usePocket() { return useContext(PocketContext); }