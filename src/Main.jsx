import { Show } from 'solid-js';
import { usePocket } from './PocketContext';

function Main() {
  const [auth, setAuth, getAuthorization ] = usePocket();

  return (
    <Show when={auth()} fallback={<main class='container'><article aria-busy="true" /></main>} >
      <main class='container'>
        <article>
          <h1>Main Page</h1>
          <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur, optio iure quo assumenda odio earum sed error totam quis velit repudiandae neque saepe esse? Dolore doloremque provident neque repudiandae.</code>
        </article>
      </main>
    </Show>
  );
}

export default Main;