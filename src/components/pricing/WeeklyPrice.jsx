import getWeeklyCost from './getWeeklyCost';
import { url } from '../../modules/pbConnection';
import { Show, createEffect, createResource, createSignal } from 'solid-js';
import { usePocket } from '../../AuthContext';

const priceFormatter = Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumSignificantDigits: 3 });

export default function Header() {
  const [login] = usePocket();
  const [weekly] = createResource(() => getWeeklyCost(url,login.token));
  const [cost, setCost] = createSignal(false);

  createEffect(() => {
    if (weekly())
      setCost(weekly().items[0].unit * weekly().items[0].amount);
  });

  return (
    <Show when={weekly()}>
      Precio base semanal: {priceFormatter.format(cost())}
    </Show>
  );
}