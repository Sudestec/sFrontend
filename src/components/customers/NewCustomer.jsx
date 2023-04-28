import { createEffect, createResource, createSignal, onMount, Show, Switch, Match } from 'solid-js';
import createCustomer from './createCustomer';
import { url } from '../../modules/pbConnection';
import getLocalToken from '../../modules/getLocalToken';
import { useCustomer } from './CustomerContext';
import capitalizeFirstLetter from '../../modules/capitalizeFirstLetter';

async function fetchBackend (source) {
  const token = getLocalToken();
  return await createCustomer(url, token.token, source);
}

export default function NewCustomer() {
  const { customers,setCustomers } = useCustomer();
  const [ firstName, setFirstName ] = createSignal('');
  const [ lastName, setLastName ] = createSignal('');
  const [ phone, setPhone ] = createSignal('');
  const [ identification, setidentIdentification ] = createSignal('');
  const [ type, setType ] = createSignal('');
  const [ newCustomer, setNewCustomer ] = createSignal(false);
  const [ postCustomer, setPostCustomer ] = createSignal(false);
  const [ createdCustomer ] = createResource(postCustomer, fetchBackend);

  createEffect(() => setNewCustomer({
    name: firstName().toLowerCase(),
    last: lastName().toLowerCase(),
    phone: phone(),
    identification: identification(),
    type: type(),
  }));

  createEffect( () => {
    setCustomers('create', createdCustomer());
  });
  createEffect( () => {
    console.log(customers.create);
  });

  return (
    <>
      <span>Create</span>
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
          <li><button onClick={() => setPostCustomer(newCustomer())} role="button" >OK</button></li>
        </ul>
      </nav>
      <footer>
        <Show when={createdCustomer()}>
          <nav>
            <ul>
              <li>
                <hgroup>
                  <h4>{firstName()}</h4>
                  <small>{lastName()}</small>
                </hgroup>
              </li>
            </ul>
            <ul>
              <li>
                <hgroup>
                  <h4>Phone</h4>
                  <small>{phone()}</small>
                </hgroup>
              </li>
            </ul>
            <ul>
              <li>
                <hgroup>
                  <h4>Identification</h4>
                  <small>{identification()}</small>
                </hgroup>
              </li>
            </ul>
          </nav>
        </Show>
      </footer>
    </>
  );
}

