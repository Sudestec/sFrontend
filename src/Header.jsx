import { createEffect } from 'solid-js';
import { usePocket, PocketProvider } from './AuthContext';
// import { lazy } from 'solid-js';
import capitalizeFirstLetter from './modules/capitalizeFirstLetter';
import getLocalToken from './modules/getLocalToken';
// const usePocket = lazy(() => import('./AuthContext'));

function Welcome() {
  
  const {record} = getLocalToken();
  // const {login} = usePocket;

  return (
    <header>
      <div class="grid">
        <hgroup>
          <h1>{capitalizeFirstLetter(record.username)}</h1>
          <ul>
            <li>{record.email}</li>
            <li>{capitalizeFirstLetter(record.type)}</li>
          </ul>
        </hgroup>
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