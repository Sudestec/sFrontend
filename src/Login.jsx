/* eslint-disable linebreak-style */
import { createSignal } from 'solid-js';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://192.168.1.141:7790');

async function getLoginToken(userName, password) {
    const authData = await pb.admins.authWithPassword(userName, password); 
    //localStorage.setItem('authToken', authData);
    //setAuthToken(authToken());
    console.log(authData);
    return authData;
}

function LoginForm() {
    const [email, setEmail] = createSignal('');
    const [password, setPassword] = createSignal('');

    return (
        <div class='container'>
            <article>
                <h2>Login</h2>
                <input type="email" placeholder="Email" value={email()} onInput={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password()} onInput={(e) => setPassword(e.target.value)} />
                <button onClick={() => getLoginToken(email(),password())}>Log in</button>
            </article>
        </div>
    );
}

export default LoginForm;

