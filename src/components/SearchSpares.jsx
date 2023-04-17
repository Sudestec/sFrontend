import { createEffect, createResource, createSignal, onMount, For, Show } from 'solid-js';
import getSpares from '../modules/getSpares';
import getLocalToken from '../modules/getLocalToken';
import { url } from '../modules/pbConnection';
import { downloadBill } from '../modules/downloadBill';


async function fetchData({url, token, parameters},{value}) {
  //console.log(url, token, parameters);
  return await getSpares(url, token, parameters);
}

export default function SearchSpares() {
  const [settings, setSettings] = createSignal('');
  const [data, { mutate, refetch }] = createResource(settings, fetchData);
  const [list, setList] = createSignal('');
  const [page, setPage] = createSignal('');
  const [items, setItems] = createSignal('');
  const [type, setType] = createSignal('');
  const [config, setConfig] = createSignal('');
  
  onMount(() => {
    if (getLocalToken()) {
      const parameters = {
        url: url,
        token: getLocalToken()
      };
      setSettings(parameters);
      console.log('first');
    }
  });
  createEffect(() => {
    if (data()) {
      setConfig({
        url: url,
        token: getLocalToken(),
        parameters:{
          page: page(),
          perPage: items(),
          sort: '',
          filter: type(),
          expand: ''
        }});
      const results = data();
      setList(results.items),setPage(results.page);
    }

  });


  return (
    <>
      <nav>
        <ul>
          <li>
            <button ><i class="fa-solid fa-arrow-left" /></button>
          </li>
          <li>
            <Show when={list()} fallback={<button disabled aria-busy='true' />}>
              <button disabled>{page()}</button>
            </Show>
          </li>
          <li>
            <button ><i class="fa-solid fa-arrow-right" /></button>
          </li>
        </ul>
        <ul>
          <li>
            <select required="" onChange={e => setItems(e.target.value)}>
              <option value="" disabled="disabled" selected >Items</option>
              <option value={'10'} >10</option>
              <option value={'20'} >20</option>
              <option value={'30'} >30</option>
            </select>
          </li>
          <li>
            <select required="" onChange={e => setType(e.target.value)}>
              <option value="" selected="selected">Type</option>
              <option value="type='hdd'">HDD</option>
              <option value="type='ssd'">SSD</option>
              <option value="type='cpu'">CPU</option>
              <option value="type='ram'">RAM</option>
              <option value="type='gpu'">GPU</option>
            </select>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={()=>(setList(false),setSettings(config()))}><i class="fa-solid fa-rotate" /></button>
          </li>
        </ul>
      </nav>
      <nav />
      <footer>
        <figure style={{'width': '100%'}}>
          <table>
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Name</th>
                <th scope="col">Details</th>
                <th scope="col">Serial</th>
                <th scope="col">Cost</th>
                <th scope="col">Bill</th>
              </tr>
            </thead>
            <Show when={list()} fallback={<tbody aria-busy='true' />}>
              <tbody>
                <For each={list()}>{(spare, i) =>
                  <tr>
                    <th scope="row">{spare.type}</th>
                    <td>{spare.nombre}</td>
                    <td>{spare.details}</td>
                    <td>{spare.serial}</td>
                    <td>${spare.cost}</td>
                    <td><button role='button' onClick={()=>downloadBill(url,getLocalToken(),spare.id,spare.bill)}><i class="fa-solid fa-file-invoice" /></button></td>
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
