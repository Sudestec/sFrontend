import { createSignal, createContext, useContext } from 'solid-js';
import pb from './modules/pbConnection';

export const PocketContext = createContext();

export function PocketProvider(props) {
  const [auth, setAuth] = createSignal(),
    getAuthorization = async (username, password) => {
      const authData = await pb.admins.authWithPassword(username, password);
      setAuth(authData);
    },
    authData = [
      auth,
      setAuth,
      getAuthorization
    ];

  return (
    <PocketContext.Provider value={authData}>
      {props.children}
    </PocketContext.Provider>
  );
}

export function usePocket() { return useContext(PocketContext); }