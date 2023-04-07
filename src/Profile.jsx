/* eslint-disable no-unused-vars */
import { createSignal, Show } from 'solid-js';

import { usePocket } from './PocketContext';

function Login() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [auth, setAuth, getAuthorization ] = usePocket();



  return (
    <dialog open>
      <div>
        <article>
          <hgroup>
            <h2>Welcome</h2>
            <small>Please sign in:</small>
          </hgroup>
          <input type="email" placeholder="Email" value={email()} onInput={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password()} onInput={(e) => setPassword(e.target.value)} />
          <button onClick={() => getAuthorization(email(),password())}>Log in</button>
        </article>

      </div>
    </dialog>
  );
}

function Profile() {
  const [auth, setAuth, getAuthorization ] = usePocket();

  return (
    <Show when={auth()} fallback={<Login/>} >
      <ul>
        <li><span>{auth().admin.email}</span></li>
        <li><button onClick={() => {setAuth(false),localStorage.removeItem('pocketbase_auth');}} role="button">Logout</button></li>
      </ul>
    </Show>
  );



}

export default Profile;

