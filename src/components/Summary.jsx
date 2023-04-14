import { createSignal } from 'solid-js';

export default function Summary() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  return (
    <article>
      <small>Summary</small>
      <nav>
        <ul>
          <li>
            <input type="text" placeholder="First name" />
          </li>
          <li>
            <input type="text" placeholder="Last name" />
          </li>
          <li>
            <input type="number" placeholder="Phone" />
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <input type="text" placeholder="First name" />
          </li>
          <li>
            <input type="text" placeholder="Last name" />
          </li>
          <li>
            <button placeholder="Complete">Finish</button>
          </li>
        </ul>
      </nav>
    </article>
  );
}
