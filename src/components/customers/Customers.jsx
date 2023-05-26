import { createSignal, Show, Switch, Match } from 'solid-js';
import { CustomerProvider, useCustomer, TAB } from './CustomerContext';
import SearchCustomers from './SearchCustomers';
import NewCustomer from './NewCustomer';

const [ open, setStatus ] = createSignal(false);

function CustomersWindow() {
  const {customers,setCustomers} = useCustomer();

  return (
    <dialog open>
      <article style={{'min-width': '80vw'}}>
        <header>
          <nav>
            <ul>
              <li>
                <button data-tooltip="Close" onClick={() => setStatus(!open())} role="button"><i class="fa-solid fa-xmark" /></button>
              </li>
              <li>
                <span>Customers</span>
              </li>
            </ul>
            <ul>
              <li>
                <button data-tooltip="New" role="button" onClick={() => setCustomers({tab:TAB.create})}><i class="fa-solid fa-plus" /></button>
              </li>
              <li>
                <button data-tooltip="Search" role="button" onClick={() => setCustomers({tab:TAB.search})}><i class="fa-solid fa-magnifying-glass" /></button>
              </li>
            </ul>
          </nav>
        </header>
        <Switch fallback={<p aria-busy='true' />}> 
          <Match when={customers.tab === TAB.search}>
            <SearchCustomers />
          </Match>
          <Match when={customers.tab === TAB.create}>
            <NewCustomer />
          </Match>
        </Switch>
      </article>
    </dialog>

  );

}


export default function Collections() {
  return (
    <CustomerProvider>
      <Show when={open() === false} fallback={<CustomersWindow/>} >
        <li><button data-tooltip="Customers" data-placement="bottom" onClick={() => setStatus(!open())} role="button"><i class="fa-solid fa-people-group" /></button></li>
      </Show>
    </CustomerProvider>

  );
}
