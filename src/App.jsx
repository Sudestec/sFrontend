import { lazy, Show } from 'solid-js';
import { usePocket } from './AuthContext';
const Nav = lazy(() => import('./Nav'));
const Main = lazy(() => import('./Main'));
const Footer = lazy(() => import('./Footer'));
const Profile = lazy(() => import('./components/Profile'));

function App() {
  const [login] = usePocket();
  return (
    <Show when={login.state === 'authorized'} fallback={<Profile />}>
      <Nav/>
      <Main/>
      <Footer/>
    </Show>
  );
}

export default App;
