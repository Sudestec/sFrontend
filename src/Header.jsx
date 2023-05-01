import { createEffect } from 'solid-js';
import { usePocket } from './AuthContext';
import capitalizeFirstLetter from './modules/capitalizeFirstLetter';

function Welcome() {  
  const [login] = usePocket();

  createEffect(() => {
    console.log(login.user);
  });

  return (
    <header>
      <nav style={{'text-align': 'center'}}>
        <ul>
          <li>
            <hgroup>
              <h2 textContent={capitalizeFirstLetter(login.user.lastname)} />
              <p textContent={capitalizeFirstLetter(login.user.firstname)} />
            </hgroup>

          </li>
          <li>
            <hgroup>
              <h2 textContent={capitalizeFirstLetter(login.user.type)} />
              <p textContent={capitalizeFirstLetter(login.user.email)} />
            </hgroup>

          </li>
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