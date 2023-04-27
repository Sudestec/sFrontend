import { createEffect } from 'solid-js';
import { usePocket, PocketProvider } from './AuthContext';
// import { lazy } from 'solid-js';
import capitalizeFirstLetter from './modules/capitalizeFirstLetter';
import getLocalToken from './modules/getLocalToken';
// const usePocket = lazy(() => import('./AuthContext'));

function Welcome() {
  
  // const {record} = getLocalToken();
  const {login} = usePocket;

  createEffect(() => console.log(login.data));

  return (
    <header>
      <div class="grid">
        <hgroup>
          {/* <h1>{login.data.username}</h1> */}
          <ul>
            {/* <li>{login.data.email}</li> */}
            {/* <li>{login.data.type}</li> */}
          </ul>
        </hgroup>
        {/* <p>{login.data}</p> */}
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <PocketProvider>

      <Welcome/>
    </PocketProvider>
  );
}