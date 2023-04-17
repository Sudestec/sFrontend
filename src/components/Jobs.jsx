import { createSignal, Show } from 'solid-js';

const [ open, setStatus ] = createSignal(false);

function JobsWindow() {
  // const [jobs] = createResource(fetchJobs);

  return (
    <dialog open>
      <article style={{'min-width': '90vmin'}}>
        <header>
          <nav>
            <ul>
              <li>
                <button data-tooltip="Close" onClick={() => setStatus(!open())} role="button" style={{'min-width': '52px'}}><i class="fa-solid fa-xmark" /></button>
              </li>
            </ul>
            <ul>
              <li>
                <button data-tooltip="New" role="button" style={{'min-width': '52px'}}><i class="fa-solid fa-plus" /></button>
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
    <Show when={open() === false} fallback={<JobsWindow/>} >
      <li><button data-tooltip="Jobs" data-placement="bottom" onClick={() => setStatus(!open())} role="button" style={{'min-width': '52px'}}><i class="fa-brands fa-black-tie" /></button></li>
    </Show>
  );
}
