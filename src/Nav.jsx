import logo from './assets/nav-logo.svg';
import Profile from './components/Profile';
import Customers from './components/customers/Customers';
import Jobs from './components/Jobs';
import Estimates from './components/Estimates';
import Spares from './components/Spares';

function Logo() {

  return (
    <ul>
      <li>
        <img src={logo} alt="logo" />
      </li>
      <li>
        <span>sAPI</span>
      </li>
    </ul>
  );
}

function Nav() {
  return (
    <nav class='container'>
      <Logo />
      <ul>
        <Spares />
        <Estimates />
        <Jobs />
        <Customers/>
        <Profile />
      </ul>
    </nav>
  );
}

export default Nav;
