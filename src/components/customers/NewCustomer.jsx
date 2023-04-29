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
  const [ createdCustomer, {mutate,refetch} ] = createResource(postCustomer, fetchBackend);

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
    console.log(createdCustomer.state);
  });

  return (
    <>
      <span>Insert new customer information:</span>
      <nav>
        <ul>
          <li>
            <input type="text" placeholder="First name" disabled={(createdCustomer() || createdCustomer.loading) ? true : false} value={firstName()} onInput={(e) => setFirstName(e.target.value)}/>
          </li>
          <li>
            <input type="text" placeholder="Last name" disabled={(createdCustomer() || createdCustomer.loading) ? true : false} value={lastName()} onInput={(e) => setLastName(e.target.value)}/>
          </li>
          <li>
            <input type="number" placeholder="Phone" disabled={(createdCustomer() || createdCustomer.loading) ? true : false} value={phone()} onInput={(e) => setPhone(e.target.value)}/>
          </li>
          <li>
            <input type="number" placeholder="Identification" disabled={createdCustomer() ? true : false} value={identification()} onInput={(e) => setidentIdentification(e.target.value)}/>
          </li>
          <li>
            <select required="" disabled={createdCustomer() ? true : false} onChange={e => setType(e.target.value)}>
              <option value="" disabled="disabled" selected >Type</option>
              <option value={'p7z8l5ez9uicwju'} >New</option>
              <option value={'i9ony5vhyf5ifkc'} >Legacy</option>
              <option value={'9pvx56lvhsr9myk'} >Returning</option>
            </select>
          </li>
        </ul>
        <ul>
          <li>
            <button role="button"
              disabled={createdCustomer.loading ? true : false}
              onClick={() => !createdCustomer() ? setPostCustomer(newCustomer()) : (setFirstName(''),setLastName(''),setPhone(''),setidentIdentification(''),setType(''),mutate(false))} >
              {createdCustomer() ? <i class="fa-solid fa-arrows-rotate" /> : <i class="fa-solid fa-check" />}

            </button>
          </li>
        </ul>
      </nav>
      <footer aria-busy={createdCustomer.loading ? true : false}>
        <Show when={createdCustomer()}>
          <nav>
            <ul>
              <li>
                <span>Customer Created</span>
              </li>
            </ul>
            <ul>
              <li>
                <i class="fa-solid fa-check" />
              </li>
            </ul>
          </nav>
        </Show>
      </footer>
    </>
  );
}
