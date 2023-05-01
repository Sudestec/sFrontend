import { usePocket } from './AuthContext';
import capitalizeFirstLetter from './modules/capitalizeFirstLetter';
import WeeklyPrice from './components/pricing/WeeklyPrice';

function Welcome() {  
  const [login] = usePocket();

  return (
    <header>
      <div class="grid">
        <hgroup>
          <h1 textContent={capitalizeFirstLetter(login.user.lastname)} />
          <p textContent={capitalizeFirstLetter(login.user.firstname)} />
        </hgroup>
        <hgroup>
          <h1 textContent={capitalizeFirstLetter(login.user.type)} />
          <p textContent={capitalizeFirstLetter(login.user.email)} />
        </hgroup>
        <WeeklyPrice />
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Welcome/>
  );
}