import { createSignal, createResource, Show } from 'solid-js';
import SearchSpares from './SearchSpares';



const [ open, setStatus ] = createSignal(false);

function SparesWindow() {
  return (
    <dialog open>
      <article style={{ 'max-width':'90vw'}}>
        <header>
          <nav>
            <ul>
              <li>
                <button data-tooltip="Close" onClick={() => setStatus(!open())} role="button" style={{'min-width': '51px'}}><i class="fa-solid fa-xmark" /></button>
              </li>
            </ul>
            <ul>
              <li>
                <button data-tooltip="Search" role="button" style={{'min-width': '51px'}}><i class="fa-solid fa-magnifying-glass" /></button>
              </li>
              <li>
                <button data-tooltip="New" role="button" style={{'min-width': '51px'}}><i class="fa-solid fa-plus" /></button>
              </li>
            </ul>
          </nav>
        </header>
        <SearchSpares />
      </article>
    </dialog>

  );

}


export default function Collections() {
  return (
    <Show when={open() === false} fallback={<SparesWindow/>} >
      <li><button data-tooltip="Spares" data-placement="bottom" onClick={() => setStatus(!open())} role="button" style={{'min-width': '51px'}}><i class="fa-solid fa-computer" /></button></li>
    </Show>
  );
}
