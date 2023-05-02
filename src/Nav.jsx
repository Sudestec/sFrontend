import Profile from './components/Profile';
import Customers from './components/customers/Customers';
import Jobs from './components/Jobs';
import Estimates from './components/Estimates';
import Spares from './components/Spares';
import Logo from './Logo';
import Guides from './components/guides/Guides';

function Nav() {
  return (
    <nav class='container' >
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <span>Sudestec</span>
        </li>
      </ul>

      <ul>
        <Guides />
        <Spares />
        {/* <Estimates />
        <Jobs /> */}
        <Customers/>
        <Profile />
      </ul>
    </nav>
  );
}

export default Nav;
