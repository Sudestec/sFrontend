import logo from '../assets/logo-110.svg';
import { createSignal, Show } from 'solid-js';
import { usePocket,USER } from '../AuthContext';

function Login() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [login, getAuthorization] = usePocket();

  return (
    <dialog open>
      <article>
        <Show when={login.state === USER.refetch || login.state === USER.error } fallback={<span aria-busy="true">Loading...</span>}>
          <nav>

            <ul>
              <li>
                <hgroup>
                  <h2>Welcome</h2>
                  <Show when={login.state === USER.refetch} fallback={ <small><u>Autorization error</u>. Validate your credentials:</small>}>
                    <small>Please enter your credentials:</small>
                  </Show>
                </hgroup>
              </li>
            </ul>
            <ul>
              <li>
                <img src={logo} alt="logo" />
              </li>
            </ul>
          </nav>

          <input type="email" placeholder="Email" value={email()} onInput={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password()} onInput={(e) => setPassword(e.target.value)} />
          <button onClick={() => getAuthorization(email(),password())} role="button">Log in</button>
        </Show>
      </article>
    </dialog>
  );
}

function Profile() {
  const [login, getAuthorization, clearAuthorization] = usePocket();

  return (
    <Show when={login.state === USER.authorized } fallback={<Login/>} >
      <li><button data-tooltip="Log Out" data-placement="bottom" onClick={() => clearAuthorization()} role="button" style={{'min-width': '51px'}}><i class="fa-solid fa-right-to-bracket" /></button></li>
    </Show>
  );



}

export default Profile;

