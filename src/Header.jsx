import { Show } from 'solid-js';
import { usePocket } from './PocketContext';


function Welcome() {

  return (
    <header class='container'>
      <hgroup>
        <h1>Welcome</h1>
        <small>Please sign in.</small>
      </hgroup>
    </header>

  );
}

export default function Header() {
  const [auth, setAuth, getAuthorization ] = usePocket();
  return (

    <Show when={auth()} fallback={<Welcome/>} >

      <header class='container'>
        <hgroup>
          <h1>Sudeste API</h1>
          <small>Pocketbase Back-End</small>
        </hgroup>
      </header>
    </Show>

  );
}