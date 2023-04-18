import { createSignal, Switch, Match } from 'solid-js';
import NewCustomer from '../customers/NewCustomer';
import Summary from '../Summary';

export default function NewEstimate() {
  const [tab, setTab] = createSignal('customer');
  return (
    <>
      <nav>

        <ul>

          <li>
            <button data-tooltip="Customer" onClick={()=> setTab('customer')}> <i class="fa-solid fa-check" aria-busy="false" /> <i class="fa-solid fa-person-dots-from-line" /></button>
          </li>
          <li>
            <button data-tooltip="Spares" onClick={()=> setTab(false)}><i class="fa-solid fa-check" aria-busy="true" /> <i class="fa-solid fa-house-laptop" /></button>
          </li>
          <li>
            <button data-tooltip="Tasks" onClick={()=> setTab(false)}><i class="fa-solid fa-check" aria-busy="true" /> <i class="fa-solid fa-person-digging" /></button>
          </li>
          <li>
            <button data-tooltip="Logistics" onClick={()=> setTab(false)}><i class="fa-solid fa-check" aria-busy="true" /> <i class="fa-solid fa-truck-fast" /></button>
          </li>
          <li>
            <button data-tooltip="Relationship" onClick={()=> setTab(false)}><i class="fa-solid fa-check" aria-busy="true" /> <i class="fa-solid fa-handshake" /></button>
          </li>
        </ul>
        <ul>
          <li>
            <button data-tooltip="Summary" onClick={()=> setTab(false)}><i class="fa-solid fa-check" aria-busy="true" /> <i class="fa-solid fa-list-check" /></button>
          </li>
        </ul>
      </nav>

      <footer>
        <Switch fallback={<Summary/>}>
          <Match when={tab() === 'customer'}>
            <NewCustomer />
          </Match>
          <Match when={tab() === 'spares'}>
            <NewCustomer />
          </Match>
          <Match when={tab() === 'tasks'}>
            <NewCustomer />
          </Match>
          <Match when={tab() === 'logistics'}>
            <NewCustomer />
          </Match>
          <Match when={tab() === 'relationship'}>
            <NewCustomer />
          </Match>
          <Match when={tab() === 'summary'}>
            <NewCustomer />
          </Match>
        </Switch>
      </footer>
    </>
  );
}