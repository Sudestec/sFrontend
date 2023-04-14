import { createSignal, Show } from 'solid-js';

const getSpares = async () => {};

const [ open, setStatus ] = createSignal(false);

function SparesWindow() {

  return (
    <dialog open>
      <article>
        <header>
          <nav>
            <ul>
              <li>
                <button data-tooltip="Close" onClick={() => setStatus(!open())} role="button" style={{'min-width': '51px'}}><i class="fa-solid fa-xmark" /></button>
              </li>
            </ul>
            <ul>
              <li>
                <input type="text" placeholder="Search..." />
              </li>
              <li>
                <button data-tooltip="Search" role="button" style={{'min-width': '51px'}}><i class="fa-solid fa-magnifying-glass" /></button>
              </li>
              <li>
                <button data-tooltip="New" role="button" style={{'min-width': '51px'}}><i class="fa-solid fa-plus" /></button>
              </li>
            </ul>
          </nav>
        </header>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, at! Qui sequi harum aliquam adipisci magnam dolorem perferendis, itaque et nobis facere quia aut natus voluptatum unde atque vero earum?</p>
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
