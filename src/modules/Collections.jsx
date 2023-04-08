import { createResource, createSignal, Show, Index } from 'solid-js';
import pb from './pbConnection';

const [ open, setStatus ] = createSignal(false);
const fetchCollections = async () => await pb.collections.getFullList({ sort: '-created' });

function CollectionsWindow() {
  const [collections] = createResource(fetchCollections);
  
  
  return (
    <dialog open>
      <article>
        <header>
          <h2>Collections</h2>
        </header>
        <figure>
          <table role="grid">
            <Index each={collections()}>{(collection, i) =>
              <tr>
                <th scope="row">{collection().name}</th>
                <td>{collection().id}</td>
                <td>{collection().updated}</td>
              </tr>
            }</Index>
          </table>
        </figure>
        <button onClick={() => setStatus(!open())} role="button">Close</button>
      </article>
    </dialog>
  );
}

export default function Collections() {
  return (
    <Show when={open() === false} fallback={<CollectionsWindow/>} >
      <li><button onClick={() => setStatus(!open())} role="button"><i class="fa-solid fa-folder-tree" /></button></li>
    </Show>
  );
}
