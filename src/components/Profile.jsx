/* eslint-disable no-unused-vars */
import { createSignal, Show } from 'solid-js';

import { usePocket } from '../PocketContext';

function Login() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [auth, getAuthorization] = usePocket();

  return (
    <dialog open>
      <article>
        <Show when={auth.state !== 'pending'} fallback={<span aria-busy="true">Loading...</span>}>

          <hgroup>
            <h2>Welcome</h2>
            <small>Please sign in:</small>
          </hgroup>
          <input type="email" placeholder="Email" value={email()} onInput={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password()} onInput={(e) => setPassword(e.target.value)} />
          <button onClick={() => getAuthorization(email(),password())}>Log in</button>
        </Show>
      </article>
    </dialog>
  );
}

function Profile() {
  const [auth, getAuthorization, clearAuthorization] = usePocket();

  return (
    <Show when={auth()} fallback={<Login/>} >
      <li><button onClick={() => {clearAuthorization();}} role="button"><i class="fa-solid fa-right-to-bracket" /></button></li>
    </Show>
  );



}

export default Profile;

