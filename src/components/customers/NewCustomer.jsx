import { createEffect, createResource, createSignal, Show } from 'solid-js';
import createCustomer from './createCustomer';
import { url } from '../../modules/pbConnection';
import { useCustomer } from './CustomerContext';
import { usePocket } from '../../AuthContext';


async function fetchBackend (source) {
  const [login] = usePocket();
  return await createCustomer(url, login.token, source);
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
    console.log(createdCustomer());
  });

  return (
    <>
      <span>Insert new customer information:</span>
      <nav>
        <ul>
          <li>
            <input type="text" required placeholder="First name" disabled={(createdCustomer() || createdCustomer.loading) ? true : false} value={firstName()} onInput={(e) => setFirstName(e.target.value)}/>
          </li>
          <li>
            <input type="text" required placeholder="Last name" disabled={(createdCustomer() || createdCustomer.loading) ? true : false} value={lastName()} onInput={(e) => setLastName(e.target.value)}/>
          </li>
          <li>
            <input type="number" required placeholder="Phone" disabled={(createdCustomer() || createdCustomer.loading) ? true : false} value={phone()} onInput={(e) => setPhone(e.target.value)}/>
          </li>
          <li>
            <input type="number" required placeholder="Identification" disabled={createdCustomer() ? true : false} value={identification()} onInput={(e) => setidentIdentification(e.target.value)}/>
          </li>
          <li>
            <select required disabled={createdCustomer() ? true : false} onChange={e => setType(e.target.value)}>
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
          <div class="grid">

            {createdCustomer().code ? <span>{createdCustomer().message}</span> : <span>Customer Created</span>}
            {createdCustomer().code ? <i class="fa-solid fa-xmark" /> : <i class="fa-solid fa-check" />}
          </div>
        </Show>
      </footer>
    </>
  );
}
