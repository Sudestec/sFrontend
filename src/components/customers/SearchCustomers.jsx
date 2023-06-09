import { createEffect, createResource, createSignal, Show, For } from 'solid-js';
import { useCustomer } from './CustomerContext';
import getCustomers from './getCustomers';
import { url } from '../../modules/pbConnection';
import { usePocket } from '../../AuthContext';


const fetchCustomers = async (source) => {
  const [login] = usePocket();
  return await getCustomers(url,login.token,source);
};


export default function SearchCustomers() {
  const { customers, setCustomers, settings, setSettings } = useCustomer();
  const [ page, setPage] = createSignal(customers.search.page);
  const [ perPage, setPerPage] = createSignal(customers.search.perPage);
  const [ sort, setSort] = createSignal(customers.search.sort);
  const [ results ] = createResource(settings, fetchCustomers);

  createEffect( () => {
    setSettings({
      page: page(),
      perPage: perPage(),
      sort: sort()
    });
  });

  createEffect(() => {
    setCustomers('results', results());
  });
  
  createEffect(() => {
    setCustomers('search', settings());
  });

  return (
    <>
      <p>Search</p>
      <nav>
        <Show when={customers.results} fallback={<ul><li><button role='button' aria-busy='true' disabled /></li><li><button role='button' aria-busy='true' disabled /></li><li><button role='button' aria-busy='true' disabled /></li><li><button role='button' aria-busy='true' disabled /></li></ul>}>
          <ul>
            <li>
              <button role='button'
                onClick={()=> setPage(customers.results.page-1)}
                disabled={customers.results.page > 1? false : true}
                aria-busy={results.loading ? true : false}>
                {results.loading ? '' : <i class="fa-solid fa-arrow-left" /> }
              </button>
            </li>
            <li>
              <button role='button' disabled aria-busy={results.loading ? true : false} >
                {results.loading ? '' : customers.results.page }
              </button>
            </li>
            <li>
              <button role='button' disabled>
                {customers.results.totalPages}
              </button>
            </li>
            <li>
              <button role='button'
                onClick={()=> setPage(customers.results.page+1)}
                disabled={customers.results.page !== customers.results.totalPages ? false : true}
                aria-busy={results.loading ? true : false}>
                {results.loading ? '' : <i class="fa-solid fa-arrow-right" /> }
              </button>
            </li>
          </ul>

        </Show>
        <ul>
          <li>
            <select required="" onChange={e => setPerPage(e.target.value)}>
              <option value={false} disabled="disabled" selected >Items</option>
              <option value={10} >10</option>
              <option value={20} >20</option>
              <option value={30} >30</option>
            </select>
          </li>
          <li>
            <select required="" onChange={e => setSort(e.target.value)}>
              <option value={false} disabled="disabled" selected >Sort</option>
              <option value={'-updated'} >Newer first</option>
              <option value={'+updated'} >Older first</option>
            </select>
          </li>
        </ul>
      </nav>
      <footer>
        <figure >
          <table style={{'min-width': 'fit-content'}}>
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Identification</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              <Show when={customers.results}>
                <For each={customers.results.items}>{(customer, i) =>
                  <tr>
                    <th scope="row" textContent={customer.name} />
                    <td textContent={customer.last} />
                    <td textContent={customer.phone} />
                    <td textContent={customer.email} />
                    <td textContent={customer.identification} />
                    <td textContent={customer.type} />
                  </tr>
                }</For>
              </Show>
            </tbody>
          </table>
        </figure>
      </footer>
    </>
  );
}
