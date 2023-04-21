const localData = JSON.parse(sessionStorage.getItem('login_data'));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Welcome() {
  
  return (
    <header>
      <div class="grid">
        <hgroup>
          <h1>{capitalizeFirstLetter(localData.record.username)}</h1>
          <ul>
            <li>{localData.record.email}</li>
            <li>{capitalizeFirstLetter(localData.record.type)}</li>
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