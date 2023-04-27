import { usePocket } from './AuthContext';
import capitalizeFirstLetter from './modules/capitalizeFirstLetter';
import getLocalToken from './modules/getLocalToken';

function Welcome() {
  
  const {record} = getLocalToken();
  const {login} = usePocket;

  return (
    <header>
      <div class="grid">
        <hgroup>
          <h1>{record.username}</h1>
          <ul>
            <li>{record.email}</li>
            <li>{record.type}</li>
          </ul>
        </hgroup>
        <p>{login.data}</p>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Welcome/>
  );
}