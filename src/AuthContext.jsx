import { createStore } from 'solid-js/store';
import { createContext, useContext, onMount } from 'solid-js';
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
      const data = await logIn(url, username, password);
      data.token ? setLogin({state: 'authorized', data: data}) : setLogin({state: 'error'});
    },
    clearAuthorization = () => (sessionStorage.clear(),setLogin({state: 'refetch'})),
    authData = [
      login,
      getAuthorization,
      clearAuthorization,
    ];

  onMount( () => {
    const token = getLocalToken();
    if (token){
      setLogin({ state: 'loading'});
      refreshAuthorization(url, token)
        .then( e => {
          e.token ? setLogin({state: 'authorized', data: e}) : (sessionStorage.clear(),setLogin({state: 'error'}));
        });}
    else setLogin({state: 'refetch'});
  });
    
  return (
    <PocketContext.Provider value={authData}>
      {props.children}
    </PocketContext.Provider>
  );
}

export function usePocket() { return useContext(PocketContext); }