import { lazy, Show, SuspenseList, Suspense } from 'solid-js';
const Nav = lazy(() => import('./Nav'));
const Main = lazy(() => import('./Main'));
const Footer = lazy(() => import('./Footer'));
const Profile = lazy(() => import('./components/Profile'));
import { usePocket } from './PocketContext';


function App() {
  const [login] = usePocket();

  return (
    <Show when={login() === 3} fallback={<Profile />}>
      <SuspenseList revealOrder="forwards" tail="collapsed">
        <Suspense fallback={<p aria-busy='true' />}>
          <Nav/>
        </Suspense>
        <Suspense fallback={<p aria-busy='true' />}>
          <Main/>
        </Suspense>
        <Suspense fallback={<p aria-busy='true' />}>
          <Footer/>
        </Suspense>
      </SuspenseList>
    </Show>
  );
}

export default App;
