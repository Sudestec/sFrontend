import { createSignal, createContext, useContext, createResource, createEffect } from 'solid-js';
import pb from './modules/pbConnection';

export const PocketContext = createContext();

async function refreshAuth (source, value) {
  if (value) {
    return await pb.admins.authRefresh();
  }
}

export function PocketProvider(props) {
  const [auth, setAuth] = createSignal(),
    [authStore, { mutate, refetch }] = createResource(auth, refreshAuth),
    getAuthorization = async (username, password) => {
      setAuth(await pb.admins.authWithPassword(username, password));
    },
    clearAuthorization = () => (pb.authStore.clear(),mutate(false)),
    authData = [
      authStore,
      getAuthorization,
      clearAuthorization,
    ];

  createEffect(e => {
    if (!authStore() && localStorage.getItem('pocketbase_auth')) {
      console.log('refresh');
      setAuth(refreshAuth());
    }
  });

  return (
    <PocketContext.Provider value={authData}>
      {props.children}
    </PocketContext.Provider>
  );
}

export function usePocket() { return useContext(PocketContext); }