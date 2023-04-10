import { createSignal, Show } from 'solid-js';

const [ open, setStatus ] = createSignal(false);

function JobsWindow() {
  // const [jobs] = createResource(fetchJobs);

  return (
    <dialog open>
      <article>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => setStatus(!open())} role="button">Close</button>
              </li>
            </ul>
            <ul>
              <li>
                <button>List</button>
              </li>
              <li>
                <button>Crate</button>
              </li>
              <li>
                <button>Modify</button>
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
      <li><button onClick={() => setStatus(!open())} role="button"><i class="fa-brands fa-black-tie" /></button></li>
    </Show>
  );
}
