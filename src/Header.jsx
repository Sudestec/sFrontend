import { usePocket } from './AuthContext';
import capitalizeFirstLetter from './modules/capitalizeFirstLetter';
import WeeklyPrice from './components/pricing/WeeklyPrice';

function Welcome() {  
  const [login] = usePocket();

  return (
    <header>
      <div class="grid">
        <hgroup>
          <h1>{()=> capitalizeFirstLetter(login.user.lastname)}</h1>
          <p>{()=> capitalizeFirstLetter(login.user.firstname)}</p>
          <ul>
            <li>{login.user.email}</li>
            <li>{capitalizeFirstLetter(login.user.type)}</li>
          </ul>
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