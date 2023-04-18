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
          <li>
            <input type="number" placeholder="Identification" />
          </li>
          <li>
            <select required="" onChange={e => console.log(e)}>
              <option value="" disabled="disabled" selected >Type</option>
              <option value={'p7z8l5ez9uicwju'} >New</option>
              <option value={'i9ony5vhyf5ifkc'} >Legacy</option>
              <option value={'9pvx56lvhsr9myk'} >Returning</option>
            </select>
          </li>
        </ul>
        <ul>
          <li><button>OK</button></li>
        </ul>
      </nav>
    </>
  );
}
