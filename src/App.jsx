import { Show } from 'solid-js';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Profile from './components/Profile';
import { usePocket } from './PocketContext';


function App() {
  const [authStore] = usePocket();


  return (
    <Show when={authStore()} fallback={<Profile />}>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </Show>
  );
}

export default App;
