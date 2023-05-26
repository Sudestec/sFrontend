import { lazy } from 'solid-js';
const UserCard = lazy(() => import('./UserCard'));
import WeeklyPrice from './components/pricing/WeeklyPrice';

function Main() {

  return (
    <main class='container' >
      <div class="grid">
        <div >
          <UserCard/>
        </div>
        <div >
          <WeeklyPrice />
        </div>

      </div>
    </main>
  );
}

export default Main;