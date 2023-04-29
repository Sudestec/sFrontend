import { usePocket } from './AuthContext';
import capitalizeFirstLetter from './modules/capitalizeFirstLetter';

function Welcome() {  
  const [login] = usePocket();

  return (
    <header>
      <div class="grid">
        <hgroup>
          <h1>{()=> capitalizeFirstLetter(login.user.username)}</h1>
          <ul>
            <li>{login.user.email}</li>
            <li>{capitalizeFirstLetter(login.user.type)}</li>
          </ul>
        </hgroup>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Welcome/>
  );
}