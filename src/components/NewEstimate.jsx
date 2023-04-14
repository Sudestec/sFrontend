import { createSignal } from 'solid-js';

function NewEstimateWindow() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  return (
    <article>
      <input type="email" placeholder="Email" value={email()} onInput={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password()} onInput={(e) => setPassword(e.target.value)} />
      <button role="button">Create</button>
    </article>
  );
}

export default function NewEstimate() {
  return (
    <NewEstimateWindow />
  );
}