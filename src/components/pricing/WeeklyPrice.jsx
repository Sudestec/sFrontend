import getWeeklyCost from './getWeeklyCost';
import { url } from '../../modules/pbConnection';
import { Show, createEffect, createResource, createSignal } from 'solid-js';
import { usePocket } from '../../AuthContext';

export const priceFormatter = Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumSignificantDigits: 3 });

export default function Header() {
  const [login] = usePocket();
  const [weekly] = createResource(() => getWeeklyCost(url,login.token));
  const [cost, setCost] = createSignal(false);

  createEffect(() => {
    if (weekly())
      setCost(weekly().items[0].unit * weekly().items[0].amount);
  });

  return (
    <hgroup>
      <h1 aria-busy={weekly.loading ? true : false}>{weekly() ? priceFormatter.format(cost()) : ''}</h1>
      <ul>
        <li>Precio base semanal</li>
      </ul>
    </hgroup>
  );
}