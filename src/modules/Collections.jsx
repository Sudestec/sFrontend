import { createSignal, Show } from 'solid-js';

const [ open, setStatus ] = createSignal(false);
function CollectionsWindow() {
  return (
    <dialog open>
      <div>
        <article>
          <hgroup>
            <h2>Collections</h2>
            <small>List:</small>
          </hgroup>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repudiandae mollitia veritatis. Nobis quo repellendus eligendi atque, exercitationem quasi neque rerum assumenda nulla quia quae magnam tempore aperiam, dolor ad!</p>
          <button onClick={() => setStatus(!open())} role="button">Close</button>
        </article>
      </div>
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
