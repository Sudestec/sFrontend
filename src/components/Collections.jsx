import { createResource, createSignal, Show, Index } from 'solid-js';

const [ open, setStatus ] = createSignal(false);
//const fetchCollections = async () => await pb.collections.getFullList({ sort: '-created' });

function CollectionsWindow() {
  const [collections] = createResource();
  
  return (
    <dialog open>
      <article>
        <h2>Collections</h2>
        <figure>
          <table role="grid">
            <Index each={collections()} fallback={<span aria-busy="true">Loading...</span>}>{(collection, i) =>
              <tr>
                <th scope="row">{collection().name}</th>
                <td>{collection().id}</td>
                <td>{collection().updated}</td>
              </tr>
            }</Index>
          </table>
        </figure>
        <button onClick={() => setStatus(!open())} role="button" style={{'min-width': '52px'}}>Close</button>
      </article>
    </dialog>
  );
}

export default function Collections() {
  return (
    <Show when={open() === false} fallback={<CollectionsWindow/>} >
      <li><button data-tooltip="Collections" data-placement="bottom" onClick={() => setStatus(!open())} role="button" style={{'min-width': '52px'}}><i class="fa-solid fa-folder-tree" /></button></li>
    </Show>
  );
}
