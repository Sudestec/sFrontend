import {createSignal, Show } from 'solid-js';

const [ open, setStatus ] = createSignal(false);


function GuidesWindow() {
  // const [Guides] = createResource(fetchGuides);

  return (
    <dialog open>
      <article style={{'min-width': '90vmin'}}>
        <header>
          <nav>
            <ul>
              <li>
                <button data-tooltip="Close" onClick={() => setStatus(!open())} role="button" ><i class="fa-solid fa-xmark" /></button>
              </li>
              <li>
                <span>Guides</span>
              </li>
            </ul>
            <ul>
              <li>
                <button data-tooltip="New" role="button" ><i class="fa-solid fa-magnifying-glass" /></button>
              </li>
            </ul>
          </nav>
        </header>
      </article>
    </dialog>

  );

}


export default function Guides() {
  return (
    <Show when={open() === false} fallback={<GuidesWindow/>} >
      <li><button data-tooltip="Guides" data-placement="bottom" onClick={() => setStatus(!open())} role="button" ><i class="fa-solid fa-list-ol" /></button></li>
    </Show>
  );
}
