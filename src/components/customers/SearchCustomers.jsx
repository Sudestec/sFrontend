import { createEffect, createResource, createSignal, Show, For, onMount } from 'solid-js';
import { useCustomer } from './CustomerContext';
import getCustomers from './getCustomers';
import { url } from '../../modules/pbConnection';
import getLocalToken from '../../modules/getLocalToken';

const fetchCustomers = async (source) => {
  const token = getLocalToken();
  return await getCustomers(url,token,source);
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
              <Show when={customers.results.page > 1} fallback={<button role='button' disabled><i class="fa-solid fa-arrow-left" /></button>}>
                <button role='button' onClick={()=> setPage(customers.results.page-1)}><i class="fa-solid fa-arrow-left" /></button>
              </Show>
            </li>
            <li>
              <Show when={customers.results} fallback={<button role='button' disabled aria-busy='true' />}>
                <button role='button' disabled>{customers.results.page}</button>
              </Show>
            </li>
            <li>
              <Show when={customers.results} fallback={<button role='button' disabled aria-busy='true' />}>
                <button role='button' disabled>{customers.results.totalItems}</button>
              </Show>
            </li>
            <li>
              <Show when={customers.results.page !== customers.results.totalPages} fallback={<button role='button' disabled><i class="fa-solid fa-arrow-right" /></button>}>
                <button role='button' onClick={()=> setPage(customers.results.page+1)}><i class="fa-solid fa-arrow-right" /></button>
              </Show>
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
          <table>
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
            <Show when={customers.results} fallback={<tbody aria-busy='true' />}>
              <tbody>

                <For each={customers.results.items}>{(customer, i) =>
                  <tr>
                    <th scope="row">{customer.name}</th>
                    <td>{customer.last}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>{customer.identification}</td>
                    <td>{customer.type}</td>
                  </tr>
                }</For>
              </tbody>
            </Show>
          </table>
        </figure>
      </footer>
    </>
  );
}
