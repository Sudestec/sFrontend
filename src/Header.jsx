import { usePocket } from './AuthContext';
import capitalizeFirstLetter from './modules/capitalizeFirstLetter';
import WeeklyPrice from './components/pricing/WeeklyPrice';

function Welcome() {  
  const [login] = usePocket();

  return (
    <header>
      <nav>
        <ul>
          <li><button role='button' disabled>{()=> capitalizeFirstLetter(login.user.username)}</button></li>
          <li><button role='button' disabled>{login.user.email}</button></li>
          <li><button role='button' disabled>{capitalizeFirstLetter(login.user.type)}</button></li>
        </ul>
        <ul>
          <li><button role='button' disabled><WeeklyPrice /></button></li>
        </ul>
      </nav>
    </header>
  );
}

export default function Header() {
  return (
    <Welcome/>
  );
}