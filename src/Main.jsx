import { lazy } from 'solid-js';
const Header = lazy(() => import('./Header'));
import WeeklyPrice from './components/pricing/WeeklyPrice';

function Main() {

  return (
    <main class='container' >
      <article>
        <Header/>
        <WeeklyPrice />
      </article>
    </main>
  );
}

export default Main;