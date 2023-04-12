import { createContext, useContext, createResource, createSignal, onMount, createEffect } from 'solid-js';
import { url } from './modules/pbConnection';
import refreshAuthorization from './modules/refreshAuthorization';
import logIn from './modules/logIn';

export const PocketContext = createContext();

async function refreshAuth (source, value) {
  if (source === 1 ) {
    const localData = JSON.parse(localStorage.getItem('login_data'));

    return await refreshAuthorization(url, localData.token);
  }}

// login maneja states {1: 'refetch', 2: 'loading', 3: 'OK', 4: 'error'}

export function PocketProvider(props) {
  const [ login, setLogin ] = createSignal(),
    [ auth ,{ mutate, refetch } ] = createResource(login, refreshAuth),
    getAuthorization = async (username, password) => {
      setLogin(2);
      setLogin(await logIn(url, username, password));
    },
    clearAuthorization = () => (localStorage.clear(),setLogin(1)),
    authData = [
      login,
      getAuthorization,
      clearAuthorization,
    ];

  createEffect(e=> console.log(login()));

  onMount( () => {
    if (localStorage.getItem('login_data')) {
      setLogin(2);
      refreshAuth(1).then( e => setLogin(e));
    } else (setLogin(1));
  });

  return (
    <PocketContext.Provider value={authData}>
      {props.children}
    </PocketContext.Provider>
  );
}

export function usePocket() { return useContext(PocketContext); }