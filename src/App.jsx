import { Show } from 'solid-js';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Profile from './modules/Profile';
import { usePocket } from './PocketContext';


function App() {
  const [auth, setAuth, getAuthorization ] = usePocket();


  return (
    <>
      <Show when={auth()} fallback={<Profile />}>
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>
      </Show>
    </>
  );
}

export default App;
