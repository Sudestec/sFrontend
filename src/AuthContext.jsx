import { createStore } from 'solid-js/store';
import { createContext, useContext, onMount, createEffect } from 'solid-js';
import { url } from './modules/pbConnection';
import refreshAuthorization from './modules/refreshAuthorization';
import logIn from './modules/logIn';
import getLocalToken from './modules/getLocalToken';

export const PocketContext = createContext();

// login maneja states {1: 'refetch', 2: 'loading', 3: 'OK', 4: 'error'}

export function PocketProvider(props) {
  const [ login, setLogin ] = createStore({state:'refetch',data: false}),
    getAuthorization = async (username, password) => {
      setLogin({ state: 'loading'});
      setLogin({state: 'authorized', data: await logIn(url, username, password)});
    },
    clearAuthorization = () => (localStorage.clear(),setLogin({state: 'refetch'})),
    authData = [
      login,
      getAuthorization,
      clearAuthorization,
    ];

  createEffect( () => {
    console.log(login.state);
  });
  onMount( () => {
    if (getLocalToken()) {
      setLogin({state: 'loading', data: {token: getLocalToken()}});
      refreshAuthorization(url, login.data.token)
        .then( e => setLogin({state: e.state, data: e.data}));
    } else (setLogin({state: 'refetch'}));
  });
    
  return (
    <PocketContext.Provider value={authData}>
      {props.children}
    </PocketContext.Provider>
  );
}

export function usePocket() { return useContext(PocketContext); }