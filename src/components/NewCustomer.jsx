import { createSignal } from 'solid-js';

export default function NewCustomer() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  return (
    <>
      <p>Customer</p>
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
        <ul>
          <li><button>OK</button></li>
        </ul>
      </nav>
    </>
  );
}
