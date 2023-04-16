import getLocalToken from './modules/getLocalToken';

const localData = getLocalToken();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getLocalData (data) {
  if (!data) {
    return false;
  } else {
    const data = {};
    data.append(capitalizeFirstLetter(localData.record.username)) ;
    return; 
  }

}

function Welcome() {
  
  return (
    <header>
      <div class='grid'>
        <h1>{localData.record.username}</h1>
        <ul>
          <li>{localData.record.email}</li>
          <li>{localData.record.type}</li>
        </ul>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Welcome/>
  );
}