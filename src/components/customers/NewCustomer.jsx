import { createEffect, createSignal, onMount } from 'solid-js';
import createCustomer from './createCustomer';
import { url } from '../../modules/pbConnection';
import getLocalToken from '../../modules/getLocalToken';

export default function NewCustomer() {
  const [firstName, setFirstName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [identification, setidentIdentification] = createSignal('');
  const [type, setType] = createSignal('');
  const [newCustomer, setNewCustomer] = createSignal('');

  createEffect(() => setNewCustomer({
    name: firstName(),
    last: lastName(),
    phone: phone(),
    identification: identification(),
    type: type(),
  }));


  return (
    <>
      <p>Customer</p>
      <nav>
        <ul>
          <li>
            <input type="text" placeholder="First name" value={firstName()} onInput={(e) => setFirstName(e.target.value)}/>
          </li>
          <li>
            <input type="text" placeholder="Last name" value={lastName()} onInput={(e) => setLastName(e.target.value)}/>
          </li>
          <li>
            <input type="number" placeholder="Phone" value={phone()} onInput={(e) => setPhone(e.target.value)}/>
          </li>
          <li>
            <input type="number" placeholder="Identification" value={identification()} onInput={(e) => setidentIdentification(e.target.value)}/>
          </li>
          <li>
            <select required="" onChange={e => setType(e.target.value)}>
              <option value="" disabled="disabled" selected >Type</option>
              <option value={'p7z8l5ez9uicwju'} >New</option>
              <option value={'i9ony5vhyf5ifkc'} >Legacy</option>
              <option value={'9pvx56lvhsr9myk'} >Returning</option>
            </select>
          </li>
        </ul>
        <ul>
          <li><button onClick={() => createCustomer(url, getLocalToken(), newCustomer())} role="button">OK</button></li>
        </ul>
      </nav>
    </>
  );
}
