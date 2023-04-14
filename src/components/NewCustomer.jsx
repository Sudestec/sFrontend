import { createSignal } from 'solid-js';

export default function NewCustomer() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  return (
    <article>
      <small>New Customer</small>
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
    </article>
  );
}
