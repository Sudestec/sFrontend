import { createContext, useContext, createResource, createEffect, createSignal } from 'solid-js';
import pb from './modules/pbConnection';

export const PocketContext = createContext();

async function refreshAuth (source, value) {
  if (localStorage.getItem('pocketbase_auth') && source)
    return await pb.admins.authRefresh();
}

export function PocketProvider(props) {
  const [auth, { mutate, refetch }] = createResource(refreshAuth),
    getAuthorization = async (username, password) => {
      mutate(await pb.admins.authWithPassword(username, password));
    },
    clearAuthorization = () => (pb.authStore.clear(),mutate(false)),
    authData = [
      auth,
      getAuthorization,
      clearAuthorization,
    ];
  
  createEffect(e => {
    console.log(auth.latest);
    //if (!auth() && localStorage.getItem('pocketbase_auth')) refreshAuth();
  });

  return (
    <PocketContext.Provider value={authData}>
      {props.children}
    </PocketContext.Provider>
  );
}

export function usePocket() { return useContext(PocketContext); }