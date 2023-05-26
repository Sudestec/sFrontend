import { createStore } from 'solid-js/store';
import { createContext, useContext, onMount } from 'solid-js';
import { url } from './modules/pbConnection';
import refreshAuthorization from './modules/refreshAuthorization';
import logIn from './modules/logIn';
import getLocalToken from './modules/getLocalToken';

export const PocketContext = createContext();

export const USER = Object.freeze({
  refetch: Symbol(),
  loading: Symbol(),
  authorized: Symbol(),
  error: Symbol(),
});

// login maneja states {1: USER.refetch, 2: 'loading', 3: 'OK', 4: 'error'}

export function PocketProvider(props) {
  const [login, setLogin] = createStore({
      state: USER.refetch,
      user: false,
      token: false,
    }),
    getAuthorization = async (username, password) => {
      setLogin({ state: USER.loading });
      const data = await logIn(url, username, password);
      data.token
        ? setLogin({ state: USER.authorized, user: data.record, token: data.token })
        : setLogin({ state: USER.error });
    },
    clearAuthorization = () => (
      sessionStorage.clear(), setLogin({ state: USER.refetch })
    ),
    authData = [login, getAuthorization, clearAuthorization];

  onMount(() => {
    const data = getLocalToken();
    if (data) {
      setLogin({ state: USER.loading });
      refreshAuthorization(url, data.token).then((e) => {
        e.token
          ? setLogin({ state: USER.authorized, user: e.record, token: e.token })
          : (sessionStorage.clear(), setLogin({ state: USER.error }));
      });
    } else setLogin({ state: USER.refetch });
  });

  return (
    <PocketContext.Provider value={authData}>
      {props.children}
    </PocketContext.Provider>
  );
}

export function usePocket() {
  return useContext(PocketContext);
}
