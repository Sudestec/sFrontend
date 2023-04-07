import { Show } from 'solid-js';
import { usePocket } from './PocketContext';

function Footer() {
  const [auth, setAuth, getAuthorization ] = usePocket();


  return (
    <Show when={auth()} >

      <footer class='container'>
        <small>Facundo Redon</small>
      </footer>
    </Show>

  );
}

export default Footer;