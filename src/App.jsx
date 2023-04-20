import { lazy, Show } from 'solid-js';
const Nav = lazy(() => import('./Nav'));
const Main = lazy(() => import('./Main'));
const Footer = lazy(() => import('./Footer'));
const Profile = lazy(() => import('./components/Profile'));
import { usePocket } from './AuthContext';

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
