/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import './theme.css';
import App from './App';
import { PocketProvider } from './PocketContext';


if (import.meta.env.DEV && !(document.getElementById('root') instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => (
  <PocketProvider>
    <App />
  </PocketProvider>
), document.getElementById('root'));