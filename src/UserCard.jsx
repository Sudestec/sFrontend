import { usePocket } from './AuthContext';
import capitalizeFirstLetter from './modules/capitalizeFirstLetter';

export default function UserCard() {
  const [login] = usePocket();


  return (
    <article>
      <header>
        <hgroup>
          <h2 textContent={capitalizeFirstLetter(login.user.lastname)} />
          <p textContent={capitalizeFirstLetter(login.user.firstname)} />
        </hgroup>
      </header>
      <p textContent={capitalizeFirstLetter(login.user.type)} />
      <ul>
        <li textContent={capitalizeFirstLetter(login.user.email)} />
      </ul>

    </article>
  );
}
