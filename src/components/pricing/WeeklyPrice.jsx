import getWeeklyCost from './getWeeklyCost';
import { url } from '../../modules/pbConnection';
import { Show, createEffect, createResource, createSignal } from 'solid-js';
import { usePocket } from '../../AuthContext';
import formatDate from '../../modules/formatDate';
import {currencyFormatter} from '../../modules/formatCurrency';

export default function Header() {
  const [login] = usePocket();
  const [weekly] = createResource(() => getWeeklyCost(url,login.token));
  const [cost, setCost] = createSignal(false);

  createEffect(() => {
    if (weekly())
      setCost(weekly().items[0].unit * weekly().items[0].amount);
  });

  return (
    <article aria-busy={weekly.loading ? true : false}>
      <Show when={weekly()}>
        <header>
          <hgroup>
            <h2 textContent={currencyFormatter.format(cost())} />
            <p>Precio base semanal</p>
          </hgroup>
          <hgroup>
            <h2 textContent={currencyFormatter.format(cost()*0.90)} />
            <p>Precio familiar</p>
          </hgroup>
        </header>
        <ul>
          <p>Última actualización</p>
          <li textContent={formatDate(weekly().items[0].updated) } />
        </ul>
      </Show>
    </article>
  );
}