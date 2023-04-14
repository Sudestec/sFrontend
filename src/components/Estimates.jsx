import { createSignal, Show, lazy } from 'solid-js';
//import { NewEstimate } from './NewEstimate';
const NewEstimate = lazy(() => import('./NewEstimate'));

const [ open, setStatus ] = createSignal(false);

function EstimatesWindow() {

  return (
    <dialog open>
      <article style={{'min-width': '100px'}}>
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
        <NewEstimate /> 
      </article>
    </dialog>

  );

}


export default function Collections() {
  return (
    <Show when={open() === false} fallback={<EstimatesWindow/>} >
      <li><button data-tooltip="Estimates" data-placement="bottom" onClick={() => setStatus(!open())} role="button" style={{'min-width': '52px'}}><i class="fa-solid fa-receipt" /></button></li>
    </Show>
  );
}
